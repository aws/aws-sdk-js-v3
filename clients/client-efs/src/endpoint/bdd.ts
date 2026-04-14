// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

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
    [e,[{[m]:"UseDualStack"},b]],
    [f,[i,"aws"]],
    [f,[i,"aws-us-gov"]],
    [f,[i,"aws-cn"]],
    [e,[{fn:g,argv:[j,"supportsDualStack"]},b]],
    [e,[{[m]:"UseFIPS"},b]],
    [e,[{fn:g,argv:[j,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://efs.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://efs-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://elasticfilesystem-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://elasticfilesystem-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://elasticfilesystem.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://elasticfilesystem.{Region}.{PartitionResult#dnsSuffix}",k],
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
  3, 8, 6,
  8, 7, r + 12,
  9, r + 8, r + 9,
  4, 15, 9,
  5, 15, 10,
  6, 15, 11,
  7, 13, 12,
  8, r + 7, r + 11,
  8, 14, r + 10,
  9, r + 6, r + 7,
  8, r + 5, r + 4,
  3, 18, 17,
  8, r + 1, r + 3,
  8, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
