// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const m="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="stringEquals",
f="booleanEquals",
g="getAttr",
h={[m]:"Endpoint"},
i={"fn":g,"argv":[{[m]:d},"name"]},
j={[m]:d},
k={},
l=[{[m]:"Region"}];
const _data={
  conditions: [
    [c,[h]],
    [c,l],
    ["aws.partition",l,d],
    [e,[i,"aws-eusc"]],
    [e,[i,"aws-iso-f"]],
    [e,[i,"aws-iso-e"]],
    [e,[i,"aws-iso-b"]],
    [e,[i,"aws-iso"]],
    [e,[i,"aws-cn"]],
    [e,[i,"aws-us-gov"]],
    [e,[i,"aws"]],
    [f,[{[m]:"UseFIPS"},b]],
    [f,[{fn:g,argv:[j,"supportsFIPS"]},b]],
    [f,[{[m]:"UseDualStack"},b]],
    [f,[{fn:g,argv:[j,"supportsDualStack"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://api.ecr.{Region}.{PartitionResult#dnsSuffix}",k],
    ["https://ecr.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://api.ecr-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    ["https://ecr-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://api.ecr-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://api.ecr.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 23, 3,
  1, 4, r + 13,
  2, 5, r + 13,
  3, 20, 6,
  4, 20, 7,
  5, 20, 8,
  6, 20, 9,
  7, 20, 10,
  8, 20, 11,
  9, 20, 12,
  10, 20, 13,
  11, 16, 14,
  13, 15, r + 4,
  14, r + 11, r + 12,
  12, 18, 17,
  13, r + 9, r + 10,
  13, 19, r + 6,
  14, r + 8, r + 9,
  11, 22, 21,
  13, r + 5, r + 4,
  13, r + 7, r + 6,
  11, r + 1, 24,
  13, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
