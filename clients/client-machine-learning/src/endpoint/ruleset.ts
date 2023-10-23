// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/machine-learning.json */

const s="required",
t="fn",
u="argv",
v="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[s]:false,"type":"String"},
i={[s]:true,"default":false,"type":"Boolean"},
j={[v]:"Endpoint"},
k={[t]:c,[u]:[{[v]:"UseFIPS"},true]},
l={[t]:c,[u]:[{[v]:"UseDualStack"},true]},
m={},
n={[t]:"getAttr",[u]:[{[v]:g},"supportsFIPS"]},
o={[t]:c,[u]:[true,{[t]:"getAttr",[u]:[{[v]:g},"supportsDualStack"]}]},
p=[k],
q=[l],
r=[{[v]:"Region"}];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h},rules:[{conditions:[{[t]:b,[u]:[j]}],rules:[{conditions:p,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:q,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:j,properties:m,headers:m},type:e}],type:f},{conditions:[{[t]:b,[u]:r}],rules:[{conditions:[{[t]:"aws.partition",[u]:r,assign:g}],rules:[{conditions:[k,l],rules:[{conditions:[{[t]:c,[u]:[a,n]},o],rules:[{endpoint:{url:"https://machinelearning-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:p,rules:[{conditions:[{[t]:c,[u]:[n,a]}],rules:[{endpoint:{url:"https://machinelearning-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:q,rules:[{conditions:[o],rules:[{endpoint:{url:"https://machinelearning.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://machinelearning.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
