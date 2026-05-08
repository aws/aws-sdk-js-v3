// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const l="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g={[l]:"Endpoint"},
h={[l]:d},
i={[l]:"Region"},
j={},
k=[i];
const _data={
  conditions: [
    [c,[g]],
    [c,k],
    ["aws.partition",k,d],
    [e,[{[l]:"UseFIPS"},b]],
    [e,[{[l]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[h,"supportsDualStack"]},b]],
    [e,[{fn:f,argv:[h,"supportsFIPS"]},b]],
    ["stringEquals",[i,"sandbox"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [g,j],
    ["https://mturk-requester-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://mturk-requester-fips.{Region}.{PartitionResult#dnsSuffix}",j],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://mturk-requester.{Region}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://mturk-requester-sandbox.us-east-1.amazonaws.com",j],
    ["https://mturk-requester.{Region}.{PartitionResult#dnsSuffix}",j],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 13, 3,
  1, 4, r + 12,
  2, 5, r + 12,
  3, 9, 6,
  4, 8, 7,
  7, r + 10, r + 11,
  5, r + 8, r + 9,
  4, 11, 10,
  6, r + 6, r + 7,
  5, 12, r + 5,
  6, r + 4, r + 5,
  3, r + 1, 14,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
