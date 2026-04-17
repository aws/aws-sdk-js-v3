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
    [e,[{[m]:"UseDualStack"},b]],
    [g,[j,"aws-eusc"]],
    [g,[j,"aws-cn"]],
    [g,[j,"aws-us-gov"]],
    [g,[j,"aws"]],
    [e,[{fn:f,argv:[i,"supportsDualStack"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://metering-marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://metering-marketplace.{Region}.amazonaws.eu",k],
    ["https://metering.marketplace-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://metering.marketplace-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://metering.marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://metering.marketplace.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 16, 3,
  1, 4, r + 13,
  2, 5, r + 13,
  3, 12, 6,
  5, 8, 7,
  6, r + 5, r + 12,
  7, r + 4, 9,
  8, r + 4, 10,
  9, r + 4, 11,
  10, r + 10, r + 11,
  4, 14, 13,
  5, r + 7, r + 9,
  5, 15, r + 8,
  10, r + 6, r + 7,
  3, r + 1, 17,
  5, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
