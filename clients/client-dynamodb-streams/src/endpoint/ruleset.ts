// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/dynamodb-streams.json */

const y="required",
z="fn",
A="argv",
B="ref",
C="url",
D="properties",
E="headers";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[y]:true,"default":false,"type":"Boolean"},
i={[y]:false,"type":"String"},
j={[B]:"Endpoint"},
k={[z]:c,[A]:[{[B]:"UseFIPS"},true]},
l={[z]:c,[A]:[{[B]:"UseDualStack"},true]},
m={},
n={[z]:"stringEquals",[A]:[{[z]:"getAttr",[A]:[{[B]:g},"name"]},"aws"]},
o={[z]:c,[A]:[{[B]:"UseFIPS"},false]},
p={[C]:"https://streams-dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:{},[E]:{}},
q={[C]:"https://streams-dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:{},[E]:{}},
r={[z]:"stringEquals",[A]:[{[z]:"getAttr",[A]:[{[B]:g},"name"]},"aws-cn"]},
s={[z]:"stringEquals",[A]:[{[z]:"getAttr",[A]:[{[B]:g},"name"]},"aws-us-gov"]},
t={[z]:c,[A]:[{[B]:"UseDualStack"},false]},
u={[C]:"https://streams.dynamodb.{Region}.{PartitionResult#dnsSuffix}",[D]:{},[E]:{}},
v={[z]:"getAttr",[A]:[{[B]:g},"supportsFIPS"]},
w={[z]:c,[A]:[true,{[z]:"getAttr",[A]:[{[B]:g},"supportsDualStack"]}]},
x=[{[B]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:h,UseFIPS:h,Endpoint:i,Region:i},rules:[{conditions:[{[z]:b,[A]:[j]}],rules:[{conditions:[k],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[l],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{[C]:j,[D]:m,[E]:m},type:e}],type:f}],type:f},{rules:[{conditions:[{[z]:b,[A]:x}],rules:[{conditions:[{[z]:"aws.partition",[A]:x,assign:g}],rules:[{conditions:[n,o,l],endpoint:p,type:e},{conditions:[n,k,l],endpoint:q,type:e},{conditions:[r,o,l],endpoint:p,type:e},{conditions:[r,k,l],endpoint:q,type:e},{conditions:[s,o,l],endpoint:p,type:e},{conditions:[s,k,l],endpoint:q,type:e},{conditions:[s,k,t],endpoint:u,type:e},{conditions:[k,l],rules:[{conditions:[{[z]:c,[A]:[a,v]},w],rules:[{endpoint:{[C]:"https://streams.dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:m,[E]:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[k,t],rules:[{conditions:[{[z]:c,[A]:[v,a]}],rules:[{endpoint:{[C]:"https://streams.dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",[D]:m,[E]:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[o,l],rules:[{conditions:[w],rules:[{endpoint:{[C]:"https://streams.dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:m,[E]:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:u,type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
