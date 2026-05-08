// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const p="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="stringEquals",
g="getAttr",
h="sigv4",
i="health",
j={[p]:"Endpoint"},
k={"fn":g,"argv":[{[p]:d},"name"]},
l={[p]:d},
m={[p]:"Region"},
n={},
o=[m];
const _data={
  conditions: [
    [c,[j]],
    [c,o],
    ["aws.partition",o,d],
    [e,[{[p]:"UseDualStack"},b]],
    [f,[k,"aws"]],
    [f,[k,"aws-us-gov"]],
    [f,[k,"aws-iso"]],
    [f,[k,"aws-iso-b"]],
    [f,[k,"aws-iso-e"]],
    [e,[{fn:g,argv:[l,"supportsDualStack"]},b]],
    [f,[k,"aws-iso-f"]],
    [f,[k,"aws-cn"]],
    [e,[{[p]:"UseFIPS"},b]],
    [e,[{fn:g,argv:[l,"supportsFIPS"]},b]],
    [f,[m,"aws-global"]],
    [f,[m,"aws-cn-global"]]
  ],
  results: [
    [a],
    ["https://health-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",n],
    ["https://health.{Region}.{PartitionResult#dualStackDnsSuffix}",n],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [j,n],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://health-fips.{Region}.{PartitionResult#dnsSuffix}",n],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://global.health.amazonaws.com",{authSchemes:[{name:h,signingName:i,signingRegion:"us-east-1"}]}],
    ["https://global.health.amazonaws.com.cn",{authSchemes:[{name:h,signingName:i,signingRegion:"cn-northwest-1"}]}],
    ["https://health.{Region}.{PartitionResult#dnsSuffix}",n],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 22, 3,
  1, 4, r + 13,
  2, 5, r + 13,
  3, 18, 6,
  4, 14, 7,
  5, 14, 8,
  6, 14, 9,
  7, 14, 10,
  8, 14, 11,
  10, 14, 12,
  11, 14, 13,
  12, r + 1, r + 2,
  12, 17, 15,
  14, r + 10, 16,
  15, r + 11, r + 12,
  13, r + 7, r + 8,
  9, 20, 19,
  12, r + 6, r + 9,
  12, 21, r + 2,
  13, r + 1, r + 6,
  3, 24, 23,
  12, r + 3, r + 5,
  12, r + 3, r + 4,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
