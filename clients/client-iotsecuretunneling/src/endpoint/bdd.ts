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
    [g,[j,"aws"]],
    [g,[j,"aws-cn"]],
    [g,[j,"aws-us-gov"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://api.iot-tunneling-fips.{Region}.api.aws",k],
    ["https://api.iot-tunneling-fips.{Region}.api.amazonwebservices.com.cn",k],
    ["https://api.tunneling.iot-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://api.tunneling.iot-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://api.iot-tunneling.{Region}.api.aws",k],
    ["https://api.iot-tunneling.{Region}.api.amazonwebservices.com.cn",k],
    ["https://api.tunneling.iot.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://api.tunneling.iot.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 18, 3,
  1, 4, r + 15,
  2, 5, r + 15,
  3, 11, 6,
  4, 7, r + 14,
  5, 8, r + 13,
  7, r + 10, 9,
  8, r + 11, 10,
  9, r + 10, r + 12,
  4, 13, 12,
  6, r + 8, r + 9,
  5, 14, r + 7,
  6, 15, r + 7,
  7, r + 4, 16,
  8, r + 5, 17,
  9, r + 4, r + 6,
  3, r + 1, 19,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
