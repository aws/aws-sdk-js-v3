// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const a=true,
b="isSet",
c="aws.partition",
d=(n: number)=>"PartitionResult_ssa_"+n+"",
e="booleanEquals",
f="getAttr",
g="supportsFIPS",
h=(n: number)=>"https://codecatalyst-fips.global.{PartitionResult_ssa_"+n+"#dualStackDnsSuffix}",
i=(n: number)=>"https://codecatalyst.global.{PartitionResult_ssa_"+n+"#dualStackDnsSuffix}",
j={"ref":"Endpoint"},
k={},
l=[{"ref":"Region"}];
const _data={
  conditions: [
    [b,[j]],
    [b,l],
    [c,l,d(2)],
    [c,["us-west-2"],d(1)],
    [e,[{ref:"UseFIPS"},a]],
    [e,[{fn:f,argv:[{ref:d(1)},g]},a]],
    [e,[{fn:f,argv:[{ref:d(2)},g]},a]]
  ],
  results: [
    [-1],
    [j,k],
    [-1,"Partition does not support FIPS."],
    [h(1),k],
    [i(1),k],
    [h(2),k],
    [i(2),k]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, r + 1, 3,
  1, 7, 4,
  3, 5, r + 0,
  4, 6, r + 4,
  5, r + 3, r + 2,
  2, 8, r + 0,
  4, 9, r + 6,
  6, r + 5, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
