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
i={[m]:[{"name":"sigv4",[n]:"us-west-2"}]},
j={[m]:[{"name":"sigv4",[n]:"{PartitionResult#implicitGlobalRegion}"}]},
k=[{[l]:"Region"}];
const _data={
  conditions: [
    [c,[g]],
    [c,k],
    ["aws.partition",k,d],
    [e,[{[l]:"UseFIPS"},b]],
    [e,[{[l]:"UseDualStack"},b]],
    ["stringEquals",[{fn:f,argv:[h,"name"]},"aws"]],
    [e,[{fn:f,argv:[h,"supportsDualStack"]},b]],
    [e,[{fn:f,argv:[h,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [g,{}],
    ["https://route53-recovery-control-config.us-west-2.amazonaws.com",i],
    ["https://arc-recovery-control-config.us-west-2.api.aws",i],
    ["https://route53-recovery-control-config-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://route53-recovery-control-config-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",j],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://route53-recovery-control-config.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://route53-recovery-control-config.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",j],
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
  3, 10, 6,
  4, 8, 7,
  5, r + 4, r + 12,
  5, r + 5, 9,
  6, r + 10, r + 11,
  4, 12, 11,
  7, r + 8, r + 9,
  6, 13, r + 7,
  7, r + 6, r + 7,
  3, r + 1, 15,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
