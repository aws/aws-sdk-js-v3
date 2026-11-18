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
i={[m]:[{"name":"sigv4",[n]:"cn-north-1"}]},
j={[m]:[{"name":"sigv4",[n]:"{PartitionResult#implicitGlobalRegion}"}]},
k=[{[l]:"Region"}];
const _data={
  conditions: [
    [c,[g]],
    [c,k],
    ["aws.partition",k,d],
    [e,[{[l]:"UseFIPS"},b]],
    ["stringEquals",[{fn:f,argv:[h,"name"]},"aws-cn"]],
    [e,[{[l]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[h,"supportsDualStack"]},b]],
    [e,[{fn:f,argv:[h,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [g,{}],
    ["https://support.cn-north-1.amazonaws.com.cn",i],
    ["https://support-fips.cn-north-1.amazonaws.com.cn",i],
    ["https://support.cn-north-1.api.amazonwebservices.com.cn",i],
    ["https://support-fips.cn-north-1.api.amazonwebservices.com.cn",i],
    ["https://support-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://support-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",j],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://support.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://support.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",j],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 16, 3,
  1, 4, r + 15,
  2, 5, r + 15,
  3, 10, 6,
  4, 9, 7,
  5, 8, r + 14,
  6, r + 12, r + 13,
  5, r + 6, r + 4,
  4, 15, 11,
  5, 13, 12,
  7, r + 10, r + 11,
  6, 14, r + 9,
  7, r + 8, r + 9,
  5, r + 7, r + 5,
  3, r + 1, 17,
  5, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
