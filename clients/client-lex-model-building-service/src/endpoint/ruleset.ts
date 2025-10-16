// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/lex-model-building-service.json */

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
i="aws",
j="aws-us-gov",
k={[y]:false,"type":"string"},
l={[y]:true,"default":false,"type":"boolean"},
m={[B]:"Endpoint"},
n={[z]:c,[A]:[{[B]:"UseFIPS"},true]},
o={[z]:c,[A]:[{[B]:"UseDualStack"},true]},
p={},
q={[z]:"getAttr",[A]:[{[B]:g},"supportsFIPS"]},
r={[z]:c,[A]:[true,{[z]:"getAttr",[A]:[{[B]:g},"supportsDualStack"]}]},
s={[z]:"getAttr",[A]:[{[B]:g},"name"]},
t={"url":"https://models-fips.lex.{Region}.amazonaws.com",[C]:{},[D]:{}},
u={"url":"https://models.lex.{Region}.amazonaws.com",[C]:{},[D]:{}},
v=[n],
w=[o],
x=[{[B]:"Region"}];
const _data={version:"1.0",parameters:{Region:k,UseDualStack:l,UseFIPS:l,Endpoint:k},rules:[{conditions:[{[z]:b,[A]:[m]}],rules:[{conditions:v,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:w,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:m,[C]:p,[D]:p},type:e}],type:f},{conditions:[{[z]:b,[A]:x}],rules:[{conditions:[{[z]:"aws.partition",[A]:x,assign:g}],rules:[{conditions:[n,o],rules:[{conditions:[{[z]:c,[A]:[a,q]},r],rules:[{endpoint:{url:"https://models.lex-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:p,[D]:p},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:v,rules:[{conditions:[{[z]:c,[A]:[q,a]}],rules:[{conditions:[{[z]:h,[A]:[s,i]}],endpoint:t,type:e},{conditions:[{[z]:h,[A]:[s,j]}],endpoint:t,type:e},{endpoint:{url:"https://models.lex-fips.{Region}.{PartitionResult#dnsSuffix}",[C]:p,[D]:p},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:w,rules:[{conditions:[r],rules:[{endpoint:{url:"https://models.lex.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:p,[D]:p},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{conditions:[{[z]:h,[A]:[i,s]}],endpoint:u,type:e},{conditions:[{[z]:h,[A]:[j,s]}],endpoint:u,type:e},{endpoint:{url:"https://models.lex.{Region}.{PartitionResult#dnsSuffix}",[C]:p,[D]:p},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
