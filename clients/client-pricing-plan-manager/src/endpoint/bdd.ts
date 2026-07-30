// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const a={"authSchemes":[{"name":"sigv4","signingName":"pricingplanmanager","signingRegion":"us-east-1"}]};
const _data={
  conditions: [
    ["isSet",[{ref:"Endpoint"}]]
  ],
  results: [
    [-1],
    ["{Endpoint}",a],
    ["https://pricingplanmanager.us-east-1.api.aws",a]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
