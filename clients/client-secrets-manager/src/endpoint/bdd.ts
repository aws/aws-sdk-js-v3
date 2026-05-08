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
    ["https://secretsmanager-fips.{Region}.amazonaws.com",k],
    ["https://secretsmanager-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://secretsmanager-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://secretsmanager.{Region}.amazonaws.com",k],
    ["https://secretsmanager.{Region}.amazonaws.com.cn",k],
    ["https://secretsmanager.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://secretsmanager.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 17, 3,
  1, 4, r + 14,
  2, 5, r + 14,
  3, 11, 6,
  4, 7, r + 13,
  5, 8, r + 12,
  7, r + 9, 9,
  8, r + 10, 10,
  9, r + 9, r + 11,
  4, 13, 12,
  6, r + 7, r + 8,
  5, 14, r + 6,
  6, 15, r + 6,
  7, r + 4, 16,
  9, r + 4, r + 5,
  3, r + 1, 18,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
