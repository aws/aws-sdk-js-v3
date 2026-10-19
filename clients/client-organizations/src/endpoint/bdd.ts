// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const l="ref",
m="authSchemes",
n="signingRegion";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g={[l]:"Endpoint"},
h={[l]:d},
i={[m]:[{"name":"sigv4",[n]:"us-gov-west-1"}]},
j={[m]:[{"name":"sigv4",[n]:"{PartitionResult#implicitGlobalRegion}"}]},
k=[{[l]:"Region"}];
const _data={
  conditions: [
    [c,[g]],
    [c,k],
    ["aws.partition",k,d],
    [e,[{[l]:"UseFIPS"},b]],
    [e,[{[l]:"UseDualStack"},b]],
    ["stringEquals",[{fn:f,argv:[h,"name"]},"aws-us-gov"]],
    [e,[{fn:f,argv:[h,"supportsFIPS"]},b]],
    [e,[{fn:f,argv:[h,"supportsDualStack"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [g,{}],
    ["https://organizations.us-gov-west-1.amazonaws.com",i],
    ["https://organizations.us-gov-west-1.api.aws",i],
    ["https://organizations-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://organizations-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",j],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://organizations.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://organizations.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",j],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 14, 3,
  1, 4, r + 13,
  2, 5, r + 13,
  3, 8, 6,
  4, 7, r + 12,
  7, r + 10, r + 11,
  4, 11, 9,
  5, r + 4, 10,
  6, r + 8, r + 9,
  5, r + 5, 12,
  6, 13, r + 7,
  7, r + 6, r + 7,
  3, r + 1, 15,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
