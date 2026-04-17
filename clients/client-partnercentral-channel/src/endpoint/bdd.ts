// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const i="authSchemes",
j="name",
k="signingRegion";
const a="isSet",
b="PartitionResult",
c="sigv4",
d={"ref":"Endpoint"},
e={[j]:"sigv4a","signingRegionSet":["*"]},
f={[i]:[e,{[j]:c,[k]:"us-gov-west-1"}]},
g={[i]:[e,{[j]:c,[k]:"{PartitionResult#implicitGlobalRegion}"}]},
h=[{"ref":"Region"}];
const _data={
  conditions: [
    [a,[d]],
    [a,h],
    ["aws.partition",h,b],
    ["stringEquals",[{fn:"getAttr",argv:[{ref:b},"name"]},"aws-us-gov"]],
    ["booleanEquals",[{ref:"UseFIPS"},true]]
  ],
  results: [
    [-1],
    [-1,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [d,{[i]:[e,{[j]:c}]}],
    ["https://partnercentral-channel.us-gov.{PartitionResult#dualStackDnsSuffix}",f],
    ["https://partnercentral-channel-fips.us-gov.{PartitionResult#dualStackDnsSuffix}",f],
    ["https://partnercentral-channel-fips.global.{PartitionResult#dualStackDnsSuffix}",g],
    ["https://partnercentral-channel.global.{PartitionResult#dualStackDnsSuffix}",g],
    [-1,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 8, 3,
  1, 4, r + 7,
  2, 5, r + 7,
  3, 7, 6,
  4, r + 5, r + 6,
  4, r + 4, r + 3,
  4, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
