// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const a="isSet",
b={"ref":"Endpoint"},
c={"authSchemes":[{"name":"sigv4","signingRegion":"{PartitionResult#implicitGlobalRegion}"}]},
d=[{"ref":"Region"}];
const _data={
  conditions: [
    [a,[b]],
    [a,d],
    ["aws.partition",d,"PartitionResult"],
    ["booleanEquals",[{ref:"UseFIPS"},true]]
  ],
  results: [
    [-1],
    [-1,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [b,{}],
    ["https://notifications-contacts-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",c],
    ["https://notifications-contacts.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",c],
    [-1,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 6, 3,
  1, 4, r + 5,
  2, 5, r + 5,
  3, r + 3, r + 4,
  3, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
