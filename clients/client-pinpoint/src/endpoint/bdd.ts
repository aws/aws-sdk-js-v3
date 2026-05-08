// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const n="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g="stringEquals",
h={[n]:"Endpoint"},
i={[n]:d},
j={[n]:"Region"},
k={"fn":f,"argv":[i,"name"]},
l={},
m=[j];
const _data={
  conditions: [
    [c,[h]],
    [c,m],
    ["aws.partition",m,d],
    [e,[{[n]:"UseFIPS"},b]],
    [e,[{fn:f,argv:[i,"supportsFIPS"]},b]],
    [e,[{[n]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[i,"supportsDualStack"]},b]],
    [g,[j,"us-east-1"]],
    [g,[j,"us-west-2"]],
    [g,[j,"us-gov-west-1"]],
    [g,[k,"aws-us-gov"]],
    [g,[k,"aws"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,l],
    ["https://pinpoint-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",l],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://pinpoint-fips.{Region}.{PartitionResult#dnsSuffix}",l],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://pinpoint.{Region}.{PartitionResult#dualStackDnsSuffix}",l],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://pinpoint.us-east-1.amazonaws.com",l],
    ["https://pinpoint.us-west-2.amazonaws.com",l],
    ["https://pinpoint.us-gov-west-1.amazonaws.com",l],
    ["https://pinpoint.{Region}.amazonaws.com",l],
    ["https://pinpoint.{Region}.{PartitionResult#dnsSuffix}",l],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 17, 3,
  1, 4, r + 15,
  2, 5, r + 15,
  3, 13, 6,
  5, 12, 7,
  7, r + 10, 8,
  8, r + 11, 9,
  9, r + 12, 10,
  10, r + 13, 11,
  11, r + 13, r + 14,
  6, r + 8, r + 9,
  4, 15, 14,
  5, r + 5, r + 7,
  5, 16, r + 6,
  6, r + 4, r + 5,
  3, r + 1, 18,
  5, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
