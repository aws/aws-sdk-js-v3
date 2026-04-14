// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

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
    [e,[{[m]:"UseDualStack"},b]],
    [f,[i,"aws-us-gov"]],
    [f,[i,"aws"]],
    [f,[i,"aws-cn"]],
    [e,[{fn:g,argv:[j,"supportsDualStack"]},b]],
    [e,[{[m]:"UseFIPS"},b]],
    [e,[{fn:g,argv:[j,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://streams-dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://streams-dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://streams.dynamodb.{Region}.{PartitionResult#dnsSuffix}",k],
    ["https://streams.dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://streams.dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://streams.dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 17, 3,
  1, 4, r + 13,
  2, 5, r + 13,
  3, 9, 6,
  4, r + 6, 7,
  8, 8, r + 6,
  9, r + 9, r + 10,
  4, 16, 10,
  5, 16, 11,
  6, 16, 12,
  7, 14, 13,
  8, r + 8, r + 12,
  8, 15, r + 11,
  9, r + 7, r + 8,
  8, r + 5, r + 4,
  3, 19, 18,
  8, r + 1, r + 3,
  8, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
