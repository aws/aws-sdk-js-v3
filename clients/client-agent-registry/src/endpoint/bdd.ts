// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const a="isSet",
b={"ref":"Endpoint"};
const _data={
  conditions: [
    [a,[b]],
    [a,[{ref:"Region"}]]
  ],
  results: [
    [-1],
    [b,{}],
    ["https://agent-registry.{Region}.api.aws",{}],
    [-1,"Unable to resolve an Agent Registry endpoint: Region was not set and no explicit Endpoint override was provided."]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, r + 1, 3,
  1, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
