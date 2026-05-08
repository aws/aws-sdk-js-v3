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
    [e,[{[m]:"UseDualStack"},b]],
    [f,[i,"aws-us-gov"]],
    [f,[i,"aws"]],
    [e,[{fn:g,argv:[j,"supportsFIPS"]},b]],
    [e,[{fn:g,argv:[j,"supportsDualStack"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://detective.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://detective-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://api.detective-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://api.detective-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://api.detective.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://api.detective.{Region}.{PartitionResult#dnsSuffix}",k],
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
  3, 10, 6,
  4, 7, r + 12,
  5, r + 4, 8,
  6, r + 4, 9,
  8, r + 10, r + 11,
  4, 12, 11,
  7, r + 8, r + 9,
  5, r + 5, 13,
  6, r + 5, 14,
  7, 15, r + 7,
  8, r + 6, r + 7,
  3, r + 1, 17,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
