const { XMLParser } = require("fast-xml-parser");
const { parseXML } = require("../dist-cjs/xml-parser");

const fxpParser = new XMLParser({
  attributeNamePrefix: "",
  processEntities: { enabled: true, maxTotalExpansions: Infinity },
  htmlEntities: true,
  ignoreAttributes: false,
  ignoreDeclaration: true,
  parseTagValue: false,
  trimValues: false,
  tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
  maxNestedTags: Infinity,
});

function generateListBuckets(n) {
  const bucket = `<Bucket>
<CreationDate>2023-06-15T12:00:00.000Z</CreationDate>
<Name>my-example-bucket-name-here</Name>
<BucketRegion>us-east-1</BucketRegion>
</Bucket>`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<Owner><ID>abc123def456</ID><DisplayName>user@example.com</DisplayName></Owner>
<Buckets>${bucket.repeat(n)}</Buckets>
</ListAllMyBucketsResult>`;
}

function generateListObjects(n) {
  const obj = `<Contents>
<Key>photos/2024/vacation/IMG_${Math.random().toString(36).slice(2, 10)}.jpg</Key>
<LastModified>2024-03-15T09:30:00.000Z</LastModified>
<ETag>&quot;d41d8cd98f00b204e9800998ecf8427e&quot;</ETag>
<Size>1048576</Size>
<StorageClass>STANDARD</StorageClass>
<Owner><ID>abc123</ID><DisplayName>owner</DisplayName></Owner>
</Contents>`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<Name>my-bucket</Name>
<Prefix>photos/</Prefix>
<MaxKeys>1000</MaxKeys>
<IsTruncated>false</IsTruncated>
${obj.repeat(n)}
</ListBucketResult>`;
}

function bench(name, xml, iterations = 100) {
  // Warmup
  for (let i = 0; i < 10; i++) {
    parseXML(xml);
    fxpParser.parse(xml, true);
  }

  const t0 = performance.now();
  for (let i = 0; i < iterations; i++) parseXML(xml);
  const internalMs = performance.now() - t0;

  const t1 = performance.now();
  for (let i = 0; i < iterations; i++) fxpParser.parse(xml, true);
  const fxpMs = performance.now() - t1;

  const ratio = (fxpMs / internalMs).toFixed(2);
  const sizeKB = (Buffer.byteLength(xml) / 1024).toFixed(1);
  console.log(
    `${name.padEnd(30)} ${sizeKB.padStart(7)} KB | internal: ${(internalMs / iterations)
      .toFixed(3)
      .padStart(8)} ms | fxp: ${(fxpMs / iterations).toFixed(3).padStart(8)} ms | ratio: ${ratio}x`
  );
}

console.log(
  "Payload".padEnd(30) +
    "   Size".padStart(7) +
    "    |" +
    " internal (avg)".padStart(20) +
    " | fxp (avg)".padStart(15) +
    "      | speedup"
);
console.log("-".repeat(110));

for (const n of [1, 5, 10, 50, 100, 250, 500, 1000]) {
  bench(`ListBuckets (${n})`, generateListBuckets(n));
}

console.log("");

for (const n of [1, 5, 10, 50, 100, 250, 500, 1000]) {
  bench(`ListObjects (${n})`, generateListObjects(n));
}
