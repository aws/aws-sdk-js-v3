// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const a="isSet",
b="PartitionResult",
c="booleanEquals",
d="sigv4",
e="arc-region-switch",
f={"ref":"Endpoint"},
g={"authSchemes":[{"name":d,"signingName":e,"signingRegion":"{PartitionResult#implicitGlobalRegion}"}]},
h=[{"ref":"Region"}];
const _data={
  conditions: [
    [a,[f]],
    [a,h],
    ["aws.partition",h,b],
    [c,[{ref:"UseFIPS"},true]],
    [c,[{fn:"coalesce",argv:[{ref:"UseControlPlaneEndpoint"},false]},true]],
    ["stringEquals",[{fn:"getAttr",argv:[{ref:b},"name"]},"aws-cn"]]
  ],
  results: [
    [-1],
    ["https://arc-region-switch-control-plane.cn-north-1.{PartitionResult#dualStackDnsSuffix}",{authSchemes:[{name:d,signingName:e,signingRegion:"cn-north-1"}]}],
    [-1,"Invalid Configuration: FIPS is not supported in this partition"],
    ["https://arc-region-switch-control-plane-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",g],
    ["https://arc-region-switch-control-plane.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",g],
    [-1,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [f,{}],
    ["https://arc-region-switch-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",{}],
    ["https://arc-region-switch.{Region}.{PartitionResult#dualStackDnsSuffix}",{}],
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
  3, 8, 6,
  4, 7, r + 8,
  5, r + 1, r + 4,
  4, 9, r + 7,
  5, r + 2, r + 3,
  3, r + 5, r + 6,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
