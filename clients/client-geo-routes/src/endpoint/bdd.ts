// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const m="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="stringEquals",
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
    [e,[{[m]:"UseFIPS"},b]],
    [f,[i,"aws"]],
    [f,[i,"aws-us-gov"]],
    [e,[{[m]:"UseDualStack"},b]],
    [e,[{fn:g,argv:[j,"supportsDualStack"]},b]],
    [e,[{fn:g,argv:[j,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://routes.geo.{Region}.{PartitionResult#dnsSuffix}/v2",k],
    ["https://routes.geo-fips.{Region}.{PartitionResult#dualStackDnsSuffix}/v2",k],
    ["https://routes.geo-fips.{Region}.{PartitionResult#dnsSuffix}/v2",k],
    ["https://routes.geo.{Region}.{PartitionResult#dualStackDnsSuffix}/v2",k],
    ["https://routes.geo.{Region}.us-gov.{PartitionResult#dnsSuffix}/v2",k],
    ["https://routes.geo-fips.{Region}.us-gov.{PartitionResult#dualStackDnsSuffix}/v2",k],
    ["https://routes.geo-fips.{Region}.us-gov.{PartitionResult#dnsSuffix}/v2",k],
    ["https://routes.geo.{Region}.us-gov.{PartitionResult#dualStackDnsSuffix}/v2",k],
    ["https://geo-routes-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://geo-routes-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://geo-routes.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://geo-routes.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 20, 3,
  1, 4, r + 19,
  2, 5, r + 19,
  3, 12, 6,
  4, 11, 7,
  5, 10, 8,
  6, 9, r + 18,
  7, r + 16, r + 17,
  6, r + 11, r + 8,
  6, r + 7, r + 4,
  4, 19, 13,
  5, 18, 14,
  6, 16, 15,
  8, r + 14, r + 15,
  7, 17, r + 13,
  8, r + 12, r + 13,
  6, r + 9, r + 10,
  6, r + 5, r + 6,
  3, r + 1, 21,
  6, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
