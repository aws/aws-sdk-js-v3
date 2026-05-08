// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const k="ref",
l="authSchemes",
m="name",
n="signingRegion";
const a="isSet",
b="PartitionResult",
c="stringEquals",
d="sigv4",
e={[k]:"Endpoint"},
f={"fn":"getAttr","argv":[{[k]:b},"name"]},
g={[m]:"sigv4a","signingRegionSet":["*"]},
h={[l]:[g,{[m]:d,[n]:"us-gov-west-1"}]},
i={[l]:[g,{[m]:d,[n]:"{PartitionResult#implicitGlobalRegion}"}]},
j=[{[k]:"Region"}];
const _data={
  conditions: [
    [a,[e]],
    [a,j],
    ["aws.partition",j,b],
    ["booleanEquals",[{[k]:"UseFIPS"},true]],
    [c,[f,"aws"]],
    [c,[f,"aws-us-gov"]]
  ],
  results: [
    [-1],
    [-1,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [e,{[l]:[g,{[m]:d}]}],
    ["https://api.sustainability.{Region}.{PartitionResult#dualStackDnsSuffix}",{[l]:[g,{[m]:d,[n]:"us-east-1"}]}],
    ["https://sustainability.us-gov.{PartitionResult#dualStackDnsSuffix}",h],
    ["https://sustainability-fips.us-gov.{PartitionResult#dualStackDnsSuffix}",h],
    ["https://sustainability-fips.global.{PartitionResult#dualStackDnsSuffix}",i],
    ["https://sustainability.global.{PartitionResult#dualStackDnsSuffix}",i],
    [-1,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 9, 3,
  1, 4, r + 8,
  2, 5, r + 8,
  3, 8, 6,
  4, r + 3, 7,
  5, r + 4, r + 7,
  5, r + 5, r + 6,
  3, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
