// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const i="ref";
const a="isSet",
b="PartitionResult",
c="stringEquals",
d="sigv4",
e={[i]:"Endpoint"},
f={"fn":"getAttr","argv":[{[i]:b},"name"]},
g={"authSchemes":[{"name":d,"signingRegion":"{PartitionResult#implicitGlobalRegion}"}]},
h=[{[i]:"Region"}];
const _data={
  conditions: [
    [a,[e]],
    [a,h],
    ["aws.partition",h,b],
    ["booleanEquals",[{[i]:"UseFIPS"},true]],
    [c,[f,"aws-iso"]],
    [c,[f,"aws-iso-b"]],
    [c,[f,"aws-iso-e"]],
    [c,[f,"aws-iso-f"]]
  ],
  results: [
    [-1],
    [-1,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [e,{}],
    ["https://bcm-data-exports.us-iso-east-1.c2s.ic.gov",{authSchemes:[{name:d,signingRegion:"us-iso-east-1"}]}],
    ["https://bcm-data-exports.us-isob-east-1.sc2s.sgov.gov",{authSchemes:[{name:d,signingRegion:"us-isob-east-1"}]}],
    ["https://bcm-data-exports.eu-isoe-west-1.cloud.adc-e.uk",{authSchemes:[{name:d,signingRegion:"eu-isoe-west-1"}]}],
    ["https://bcm-data-exports.us-isof-south-1.csp.hci.ic.gov",{authSchemes:[{name:d,signingRegion:"us-isof-south-1"}]}],
    ["https://bcm-data-exports-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",g],
    ["https://bcm-data-exports.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",g],
    [-1,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 10, 3,
  1, 4, r + 9,
  2, 5, r + 9,
  3, r + 7, 6,
  4, r + 3, 7,
  5, r + 4, 8,
  6, r + 5, 9,
  7, r + 6, r + 8,
  3, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
