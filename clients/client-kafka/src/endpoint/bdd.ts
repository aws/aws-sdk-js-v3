// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const m="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="stringEquals",
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
    [e,[{[m]:"UseFIPS"},b]],
    [e,[{[m]:"UseDualStack"},b]],
    [f,[i,"aws"]],
    [f,[i,"aws-cn"]],
    [f,[i,"aws-eusc"]],
    [f,[i,"aws-us-gov"]],
    [e,[{fn:g,argv:[j,"supportsDualStack"]},b]],
    [e,[{fn:g,argv:[j,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://kafka-api.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://kafka-api-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://kafka.{Region}.{PartitionResult#dnsSuffix}",k],
    ["https://kafka-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://kafka-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://kafka.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 19, 3,
  1, 4, r + 13,
  2, 5, r + 13,
  3, 12, 6,
  4, 7, r + 6,
  5, r + 4, 8,
  6, r + 4, 9,
  7, r + 4, 10,
  8, r + 4, 11,
  9, r + 11, r + 12,
  4, 15, 13,
  8, r + 6, 14,
  10, r + 9, r + 10,
  5, r + 5, 16,
  8, r + 4, 17,
  9, 18, r + 8,
  10, r + 7, r + 8,
  3, r + 1, 20,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
