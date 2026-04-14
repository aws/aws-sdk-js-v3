// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const m="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g="stringEquals",
h={[m]:"Endpoint"},
i={[m]:d},
j={"fn":f,"argv":[i,"name"]},
k={},
l=[{[m]:"Region"}];
const _data={
  conditions: [
    [c,[h]],
    [c,l],
    ["aws.partition",l,d],
    [e,[{[m]:"UseFIPS"},b]],
    [e,[{fn:f,argv:[i,"supportsFIPS"]},b]],
    [g,[j,"aws-cn"]],
    [e,[{[m]:"UseDualStack"},b]],
    [g,[j,"aws"]],
    [e,[{fn:f,argv:[i,"supportsDualStack"]},b]],
    [g,[j,"aws-eusc"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://entitlement-marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://entitlement-marketplace.{Region}.amazonaws.com.cn",k],
    ["https://entitlement-marketplace.{Region}.amazonaws.eu",k],
    ["https://entitlement.marketplace-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://entitlement.marketplace-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://entitlement.marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://entitlement.marketplace.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 16, 3,
  1, 4, r + 14,
  2, 5, r + 14,
  3, 12, 6,
  5, 11, 7,
  6, 9, 8,
  9, r + 6, r + 13,
  7, r + 4, 10,
  8, r + 11, r + 12,
  6, r + 4, r + 5,
  4, 14, 13,
  6, r + 8, r + 10,
  6, 15, r + 9,
  8, r + 7, r + 8,
  3, r + 1, 17,
  6, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
