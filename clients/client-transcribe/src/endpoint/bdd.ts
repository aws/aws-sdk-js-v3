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
    [g,[j,"cn-north-1"]],
    [g,[j,"cn-northwest-1"]],
    [g,[k,"aws-us-gov"]],
    [g,[k,"aws"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,l],
    ["https://transcribe-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",l],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://fips.transcribe.{Region}.amazonaws.com",l],
    ["https://transcribe-fips.{Region}.{PartitionResult#dnsSuffix}",l],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://transcribe.{Region}.{PartitionResult#dualStackDnsSuffix}",l],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://cn.transcribe.cn-north-1.amazonaws.com.cn",l],
    ["https://cn.transcribe.cn-northwest-1.amazonaws.com.cn",l],
    ["https://transcribe.{Region}.{PartitionResult#dnsSuffix}",l],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 16, 3,
  1, 4, r + 14,
  2, 5, r + 14,
  3, 10, 6,
  5, 9, 7,
  7, r + 11, 8,
  8, r + 12, r + 13,
  6, r + 9, r + 10,
  4, 12, 11,
  5, r + 5, r + 8,
  5, 15, 13,
  9, r + 6, 14,
  10, r + 6, r + 7,
  6, r + 4, r + 5,
  3, r + 1, 17,
  5, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
