// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const n="ref";
const a=true,
b="isSet",
c="PartitionResult",
d="booleanEquals",
e="getAttr",
f="stringEquals",
g="sigv4",
h="freetier",
i={[n]:"Endpoint"},
j={[n]:c},
k={[n]:"Region"},
l={},
m=[k];
const _data={
  conditions: [
    [b,[i]],
    [b,m],
    ["aws.partition",m,c],
    [d,[{[n]:"UseFIPS"},a]],
    [d,[{fn:e,argv:[j,"supportsFIPS"]},a]],
    [f,[{fn:e,argv:[j,"name"]},"aws"]],
    [f,[k,"aws-cn-global"]],
    [d,[{fn:e,argv:[j,"supportsDualStack"]},a]]
  ],
  results: [
    [-1],
    [-1,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [i,l],
    ["https://freetier-fips.{Region}.api.aws",l],
    [-1,"FIPS is enabled but this partition does not support FIPS"],
    ["https://freetier.us-east-1.api.aws",{authSchemes:[{name:g,signingName:h,signingRegion:"us-east-1"}]}],
    ["https://freetier-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",l],
    ["https://freetier.cn-northwest-1.api.amazonwebservices.com.cn",{authSchemes:[{name:g,signingName:h,signingRegion:"cn-northwest-1"}]}],
    ["https://freetier.{Region}.{PartitionResult#dualStackDnsSuffix}",l],
    ["https://freetier-fips.{Region}.{PartitionResult#dnsSuffix}",l],
    ["https://freetier.{Region}.{PartitionResult#dnsSuffix}",l],
    [-1,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 12, 3,
  1, 4, r + 11,
  2, 5, r + 11,
  3, 9, 6,
  5, r + 5, 7,
  6, r + 7, 8,
  7, r + 8, r + 10,
  4, 10, r + 4,
  5, r + 3, 11,
  7, r + 6, r + 9,
  3, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
