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
    [e,[{fn:f,argv:[i,"supportsDualStack"]},b]],
    [g,[j,"aws"]],
    [g,[j,"aws-cn"]],
    [g,[j,"aws-us-gov"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://iot-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://iot-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://iot.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://iot.{Region}.amazonaws.com",k],
    ["https://iot.{Region}.amazonaws.com.cn",k],
    ["https://iot.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 15, 3,
  1, 4, r + 13,
  2, 5, r + 13,
  3, 11, 6,
  5, 10, 7,
  7, r + 10, 8,
  8, r + 11, 9,
  9, r + 10, r + 12,
  6, r + 8, r + 9,
  4, 13, 12,
  5, r + 5, r + 7,
  5, 14, r + 6,
  6, r + 4, r + 5,
  3, r + 1, 16,
  5, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
