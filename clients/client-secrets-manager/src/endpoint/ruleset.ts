// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/secrets-manager.json */

const y="required",
z="fn",
A="argv",
B="ref",
C="properties",
D="headers";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i={[y]:false,"type":"String"},
j={[y]:true,"default":false,"type":"Boolean"},
k={[B]:"Endpoint"},
l={[z]:c,[A]:[{[B]:"UseFIPS"},true]},
m={[z]:c,[A]:[{[B]:"UseDualStack"},true]},
n={},
o={[z]:"getAttr",[A]:[{[B]:g},"supportsFIPS"]},
p={[z]:c,[A]:[true,{[z]:"getAttr",[A]:[{[B]:g},"supportsDualStack"]}]},
q={[z]:"getAttr",[A]:[{[B]:g},"name"]},
r={"url":"https://secretsmanager-fips.{Region}.amazonaws.com",[C]:{},[D]:{}},
s={"url":"https://secretsmanager.{Region}.amazonaws.com",[C]:{},[D]:{}},
t=[l],
u=[m],
v=[{[B]:"Region"}],
w=[{[z]:h,[A]:["aws",q]}],
x=[{[z]:h,[A]:["aws-us-gov",q]}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[z]:b,[A]:[k]}],rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:k,[C]:n,[D]:n},type:e}],type:f},{conditions:[{[z]:b,[A]:v}],rules:[{conditions:[{[z]:"aws.partition",[A]:v,assign:g}],rules:[{conditions:[l,m],rules:[{conditions:[{[z]:c,[A]:[a,o]},p],rules:[{conditions:w,endpoint:r,type:e},{conditions:x,endpoint:r,type:e},{endpoint:{url:"https://secretsmanager-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:n,[D]:n},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:t,rules:[{conditions:[{[z]:c,[A]:[o,a]}],rules:[{endpoint:{url:"https://secretsmanager-fips.{Region}.{PartitionResult#dnsSuffix}",[C]:n,[D]:n},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:u,rules:[{conditions:[p],rules:[{conditions:w,endpoint:s,type:e},{conditions:[{[z]:h,[A]:["aws-cn",q]}],endpoint:{url:"https://secretsmanager.{Region}.amazonaws.com.cn",[C]:n,[D]:n},type:e},{conditions:x,endpoint:s,type:e},{endpoint:{url:"https://secretsmanager.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:n,[D]:n},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://secretsmanager.{Region}.{PartitionResult#dnsSuffix}",[C]:n,[D]:n},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
