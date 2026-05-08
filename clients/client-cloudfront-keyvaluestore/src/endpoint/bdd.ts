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
    ["booleanEquals",[{[o]:"UseFIPS"},true]],
    [b,l],
    ["aws.parseArn",l,c],
    [d,[{fn:e,argv:[h,"service"]},"cloudfront"]],
    [d,[{fn:e,argv:[h,"region"]},""]],
    [e,[h,"resourceId[0]"],f],
    [d,[i,""]],
    [d,[i,"key-value-store"]],
    [d,[j,"aws"]],
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
    ["https://{parsedArn#accountId}.cloudfront-kvs.global.api.aws",k],
    [a,"Client was configured for partition `{partitionResult#name}` but Kvs ARN has `{parsedArn#partition}`"],
    [a,"CloudFront-KeyValueStore is not supported in partition `{parsedArn#partition}`"],
    [a,"ARN resource type is invalid. Expected `key-value-store`, found: `{arnType}`"],
    [a,"No resource type found in the KVS ARN. Resource type must be `key-value-store`."],
    [a,"Provided ARN must be a global resource ARN. Found: `{parsedArn#region}`"],
    [a,"Provided ARN is not a valid CloudFront Service ARN. Found: `{parsedArn#service}`"],
    [a,"KVS ARN must be a valid ARN"],
    [a,"KVS ARN must be provided to use this service"],
    [a,"Invalid Configuration: FIPS is not supported with CloudFront-KeyValueStore."]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, r + 12, 3,
  1, 4, r + 11,
  2, 5, r + 10,
  3, 6, r + 9,
  4, 7, r + 8,
  5, 8, r + 7,
  6, r + 7, 9,
  7, 10, r + 6,
  8, 11, r + 5,
  9, 12, 14,
  10, 13, 14,
  11, 14, r + 4,
  12, 15, r + 3,
  13, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
