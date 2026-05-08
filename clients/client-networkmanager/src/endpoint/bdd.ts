// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const o="ref",
p="authSchemes",
q="name",
s="signingRegion";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="stringEquals",
g="getAttr",
h={[o]:"Endpoint"},
i={"fn":g,"argv":[{[o]:d},"name"]},
j={[o]:d},
k={[p]:[{[q]:"sigv4",[s]:"us-west-2"}]},
l={[p]:[{[q]:"sigv4",[s]:"us-gov-west-1"}]},
m={[p]:[{[q]:"sigv4",[s]:"{PartitionResult#implicitGlobalRegion}"}]},
n=[{[o]:"Region"}];
const _data={
  conditions: [
    [c,[h]],
    [c,n],
    ["aws.partition",n,d],
    [e,[{[o]:"UseFIPS"},b]],
    [f,[i,"aws"]],
    [e,[{[o]:"UseDualStack"},b]],
    [f,[i,"aws-us-gov"]],
    [e,[{fn:g,argv:[j,"supportsDualStack"]},b]],
    [e,[{fn:g,argv:[j,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,{}],
    ["https://networkmanager.us-west-2.amazonaws.com",k],
    ["https://networkmanager.us-west-2.api.aws",k],
    ["https://networkmanager-fips.us-west-2.amazonaws.com",k],
    ["https://networkmanager-fips.us-west-2.api.aws",k],
    ["https://networkmanager.us-gov-west-1.amazonaws.com",l],
    ["https://networkmanager.us-gov-west-1.api.aws",l],
    ["https://networkmanager-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",m],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://networkmanager-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",m],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://networkmanager.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",m],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://networkmanager.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",m],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 18, 3,
  1, 4, r + 17,
  2, 5, r + 17,
  3, 10, 6,
  4, 9, 7,
  5, 8, r + 16,
  7, r + 14, r + 15,
  5, r + 5, r + 4,
  4, 17, 11,
  5, 14, 12,
  6, r + 8, 13,
  8, r + 12, r + 13,
  6, r + 9, 15,
  7, 16, r + 11,
  8, r + 10, r + 11,
  5, r + 7, r + 6,
  3, r + 1, 19,
  5, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
