// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const o="ref";
const a=-1,
b="isSet",
c="parsedArn",
d="stringEquals",
e="getAttr",
f="arnType",
g="partitionResult",
h={[o]:c},
i={[o]:f},
j={"fn":e,"argv":[h,"partition"]},
k={"authSchemes":[{"name":"sigv4a","signingName":"cloudfront-keyvaluestore","signingRegionSet":["*"]}]},
l=[{[o]:"KvsARN"}],
m=[{[o]:"Region"}],
n=[{[o]:"Endpoint"}];
const _data={
  conditions: [
    [b,l],
    ["aws.parseArn",l,c],
    [d,[{fn:e,argv:[h,"service"]},"cloudfront"]],
    [d,[{fn:e,argv:[h,"region"]},""]],
    [e,[h,"resourceId[0]"],f],
    [d,[i,""]],
    [d,[i,"key-value-store"]],
    [d,[j,"aws"]],
    [d,[j,"aws-eusc"]],
    ["booleanEquals",[{[o]:"UseFIPS"},true]],
    [b,m],
    ["aws.partition",m,g],
    [d,[j,{fn:e,argv:[{[o]:g},"name"]}]],
    [b,n],
    ["parseURL",n,"url"]
  ],
  results: [
    [a],
    ["{url#scheme}://{parsedArn#accountId}.{url#authority}{url#path}",k],
    [a,"Provided endpoint is not a valid URL"],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    ["https://{parsedArn#accountId}.cloudfront-kvs.global.api.aws",k],
    [a,"Client was configured for partition `{partitionResult#name}` but Kvs ARN has `{parsedArn#partition}`"],
    [a,"A valid partition could not be determined"],
    ["https://{parsedArn#accountId}.cloudfront-kvs.global.api.amazonwebservices.eu",k],
    [a,"Invalid Configuration: FIPS is not supported with CloudFront-KeyValueStore."],
    [a,"CloudFront-KeyValueStore is not supported in partition `{parsedArn#partition}`"],
    [a,"ARN resource type is invalid. Expected `key-value-store`, found: `{arnType}`"],
    [a,"No resource type found in the KVS ARN. Resource type must be `key-value-store`."],
    [a,"Provided ARN must be a global resource ARN. Found: `{parsedArn#region}`"],
    [a,"Provided ARN is not a valid CloudFront Service ARN. Found: `{parsedArn#service}`"],
    [a,"KVS ARN must be a valid ARN"],
    [a,"KVS ARN must be provided to use this service"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 3, r + 15,
  1, 4, r + 14,
  2, 5, r + 13,
  3, 6, r + 12,
  4, 7, r + 11,
  5, r + 11, 8,
  6, 9, r + 10,
  7, 16, 10,
  8, 11, r + 9,
  9, r + 8, 12,
  10, 13, 15,
  11, 14, r + 6,
  12, 15, r + 5,
  13, 21, r + 7,
  9, 22, 17,
  10, 18, 20,
  11, 19, r + 6,
  12, 20, r + 5,
  13, 21, r + 4,
  14, r + 1, r + 2,
  10, 23, 25,
  11, 24, r + 6,
  12, 25, r + 5,
  13, r + 3, r + 4,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
