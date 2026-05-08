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
    [e,[{[n]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[i,"supportsDualStack"]},b]],
    [e,[{fn:f,argv:[i,"supportsFIPS"]},b]],
    [g,[j,"ca-central-1"]],
    [g,[j,"cn-north-1"]],
    [g,[j,"us-east-1"]],
    [g,[k,"aws"]],
    [g,[k,"aws-cn"]],
    [g,[k,"aws-us-gov"]],
    [g,[j,"us-east-2"]],
    [g,[j,"us-west-1"]],
    [g,[j,"us-west-2"]],
    [g,[j,"us-gov-east-1"]],
    [g,[j,"us-gov-west-1"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,l],
    ["https://data-ats.iot-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",l],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://data.iot-fips.ca-central-1.amazonaws.com",l],
    ["https://data.iot-fips.us-east-1.amazonaws.com",l],
    ["https://data.iot-fips.us-east-2.amazonaws.com",l],
    ["https://data.iot-fips.us-west-1.amazonaws.com",l],
    ["https://data.iot-fips.us-west-2.amazonaws.com",l],
    ["https://data.iot-fips.us-gov-east-1.amazonaws.com",l],
    ["https://data.iot-fips.us-gov-west-1.amazonaws.com",l],
    ["https://data-ats.iot-fips.{Region}.{PartitionResult#dnsSuffix}",l],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://data-ats.iot.{Region}.{PartitionResult#dualStackDnsSuffix}",l],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://data.ats.iot.cn-north-1.amazonaws.com.cn",l],
    ["https://data-ats.iot.{Region}.amazonaws.com",l],
    ["https://data-ats.iot.{Region}.amazonaws.com.cn",l],
    ["https://data-ats.iot.{Region}.{PartitionResult#dnsSuffix}",l],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 23, 3,
  1, 4, r + 21,
  2, 5, r + 21,
  3, 12, 6,
  4, 11, 7,
  8, r + 17, 8,
  10, r + 18, 9,
  11, r + 19, 10,
  12, r + 18, r + 20,
  5, r + 15, r + 16,
  4, 21, 13,
  6, 14, r + 14,
  7, r + 6, 15,
  9, r + 7, 16,
  13, r + 8, 17,
  14, r + 9, 18,
  15, r + 10, 19,
  16, r + 11, 20,
  17, r + 12, r + 13,
  5, 22, r + 5,
  6, r + 4, r + 5,
  3, r + 1, 24,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
