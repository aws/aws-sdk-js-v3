// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

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
    [e,[{[m]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[i,"supportsDualStack"]},b]],
    [e,[{fn:f,argv:[i,"supportsFIPS"]},b]],
    [g,[j,"aws-us-gov"]],
    [g,[j,"aws-iso"]],
    [g,[j,"aws-iso-b"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://dms-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://dms.{Region}.amazonaws.com",k],
    ["https://dms.{Region}.c2s.ic.gov",k],
    ["https://dms.{Region}.sc2s.sgov.gov",k],
    ["https://dms-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://dms.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://dms.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 15, 3,
  1, 4, r + 14,
  2, 5, r + 14,
  3, 8, 6,
  4, 7, r + 13,
  5, r + 11, r + 12,
  4, 13, 9,
  6, 10, r + 10,
  7, r + 6, 11,
  8, r + 7, 12,
  9, r + 8, r + 9,
  5, 14, r + 5,
  6, r + 4, r + 5,
  3, r + 1, 16,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
