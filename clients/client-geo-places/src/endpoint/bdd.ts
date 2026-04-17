// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const m="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="stringEquals",
f="booleanEquals",
g="getAttr",
h={[m]:"Endpoint"},
i={"fn":g,"argv":[{[m]:d},"name"]},
j={[m]:d},
k={},
l=[{[m]:"Region"}];
const _data={
  conditions: [
    [c,[h]],
    [c,l],
    ["aws.partition",l,d],
    [e,[i,"aws-us-gov"]],
    [e,[i,"aws"]],
    [f,[{[m]:"UseFIPS"},b]],
    [f,[{fn:g,argv:[j,"supportsFIPS"]},b]],
    [f,[{[m]:"UseDualStack"},b]],
    [f,[{fn:g,argv:[j,"supportsDualStack"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://places.geo.{Region}.{PartitionResult#dnsSuffix}",k],
    ["https://places.geo-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://places.geo-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    ["https://places.geo.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://geo-places-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://geo-places-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://geo-places.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://geo-places.{Region}.{PartitionResult#dnsSuffix}",k],
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
  3, 14, 6,
  4, 14, 7,
  5, 10, 8,
  7, 9, r + 14,
  8, r + 12, r + 13,
  6, 12, 11,
  7, r + 9, r + 11,
  7, 13, r + 10,
  8, r + 8, r + 9,
  5, 16, 15,
  7, r + 7, r + 4,
  7, r + 5, r + 6,
  5, r + 1, 18,
  7, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
