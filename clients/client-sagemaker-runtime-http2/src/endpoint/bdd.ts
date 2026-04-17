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
    [e,[i,"aws"]],
    [e,[i,"aws-cn"]],
    [e,[i,"aws-us-gov"]],
    [e,[i,"aws-iso"]],
    [e,[i,"aws-iso-b"]],
    [e,[i,"aws-eusc"]],
    [e,[i,"aws-iso-f"]],
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
    ["https://runtime.sagemaker.{Region}.{PartitionResult#dnsSuffix}:8443",k],
    ["https://runtime.sagemaker.{Region}.{PartitionResult#dualStackDnsSuffix}:8443",k],
    ["https://runtime-fips.sagemaker.{Region}.{PartitionResult#dnsSuffix}:8443",k],
    ["https://runtime-fips.sagemaker.{Region}.{PartitionResult#dualStackDnsSuffix}:8443",k],
    ["https://runtime.sagemaker-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://runtime.sagemaker-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://runtime.sagemaker.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://runtime.sagemaker.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 22, 3,
  1, 4, r + 15,
  2, 5, r + 15,
  3, 19, 6,
  4, 19, 7,
  5, 19, 8,
  6, 19, 9,
  7, 19, 10,
  8, 19, 11,
  9, 19, 12,
  10, 15, 13,
  12, 14, r + 14,
  13, r + 12, r + 13,
  11, 17, 16,
  12, r + 9, r + 11,
  12, 18, r + 10,
  13, r + 8, r + 9,
  10, 21, 20,
  12, r + 5, r + 4,
  12, r + 7, r + 6,
  10, r + 1, 23,
  12, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
