// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const a="booleanEquals",
b={"ref":"Endpoint"},
c={};
const _data={
  conditions: [
    ["isSet",[b]],
    ["aws.partition",[{ref:"Region"}],"PartitionResult"],
    [a,[{ref:"UseFIPS"},true]],
    [a,[{ref:"UseDualStack"},true]]
  ],
  results: [
    [-1],
    [b,c],
    ["https://data-signer-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",c],
    ["https://data-signer-fips.{Region}.{PartitionResult#dnsSuffix}",c],
    ["https://data-signer.{Region}.{PartitionResult#dualStackDnsSuffix}",c],
    ["https://data-signer.{Region}.{PartitionResult#dnsSuffix}",c]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, r + 1, 3,
  1, 4, r + 0,
  2, 6, 5,
  3, r + 4, r + 5,
  3, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
