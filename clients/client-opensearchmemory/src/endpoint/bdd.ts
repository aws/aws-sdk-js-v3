// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const a=-1,
b="isSet",
c="isValidHostLabel",
d={"ref":"SpaceId"};
const _data={
  conditions: [
    [b,[{ref:"Endpoint"}]],
    ["booleanEquals",[{ref:"UseFIPS"},true]],
    [c,[{ref:"Region"},true]],
    [b,[d]],
    [c,[d,false]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    ["{Endpoint}",{}],
    [a,"Invalid Configuration: FIPS is not supported with OpenSearch Memory."],
    [a,"Invalid Configuration: Region must be a valid host label"],
    ["https://{SpaceId}.osm.{Region}.on.aws",{}],
    [a,"Invalid SpaceId: must be a valid host label"],
    ["https://osm.{Region}.api.aws",{}]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 7, 3,
  1, r + 3, 4,
  2, 5, r + 4,
  3, 6, r + 7,
  4, r + 5, r + 6,
  1, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
