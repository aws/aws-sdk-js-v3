// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const l="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g="sigv4",
h={[l]:"Endpoint"},
i={[l]:d},
j={"authSchemes":[{"name":g,"signingRegion":"{PartitionResult#implicitGlobalRegion}"}]},
k=[{[l]:"Region"}];
const _data={
  conditions: [
    [c,[h]],
    [c,k],
    ["aws.partition",k,d],
    [e,[{[l]:"UseFIPS"},b]],
    ["stringEquals",[{fn:f,argv:[i,"name"]},"aws"]],
    [e,[{[l]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[i,"supportsDualStack"]},b]],
    [e,[{fn:f,argv:[i,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,{}],
    ["https://billing.us-east-1.api.aws",{authSchemes:[{name:g,signingRegion:"us-east-1"}]}],
    ["https://billing-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://billing-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",j],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://billing.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://billing.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",j],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 13, 3,
  1, 4, r + 12,
  2, 5, r + 12,
  3, 9, 6,
  4, r + 4, 7,
  5, 8, r + 11,
  6, r + 9, r + 10,
  5, 11, 10,
  7, r + 7, r + 8,
  6, 12, r + 6,
  7, r + 5, r + 6,
  3, r + 1, 14,
  5, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
