// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/kafka.json */

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
i={[y]:true,"default":false,"type":"boolean"},
j={[y]:false,"type":"string"},
k={[B]:"Endpoint"},
l={[z]:c,[A]:[{[B]:"UseFIPS"},true]},
m={[z]:c,[A]:[{[B]:"UseDualStack"},true]},
n={},
o={[z]:h,[A]:[{[z]:"getAttr",[A]:[{[B]:g},"name"]},"aws"]},
p={[z]:"getAttr",[A]:[{[B]:g},"name"]},
q={[z]:c,[A]:[{[B]:"UseFIPS"},false]},
r={"url":"https://kafka-api.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:{},[D]:{}},
s={[z]:h,[A]:[p,"aws-us-gov"]},
t={[z]:c,[A]:[{[B]:"UseDualStack"},false]},
u={"url":"https://kafka.{Region}.{PartitionResult#dnsSuffix}",[C]:{},[D]:{}},
v={[z]:"getAttr",[A]:[{[B]:g},"supportsFIPS"]},
w={[z]:c,[A]:[true,{[z]:"getAttr",[A]:[{[B]:g},"supportsDualStack"]}]},
x=[{[B]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:i,UseFIPS:i,Endpoint:j,Region:j},rules:[{conditions:[{[z]:b,[A]:[k]}],rules:[{conditions:[l],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[m],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:k,[C]:n,[D]:n},type:e}],type:f}],type:f},{rules:[{conditions:[{[z]:b,[A]:x}],rules:[{conditions:[{[z]:"aws.partition",[A]:x,assign:g}],rules:[{conditions:[o,q,m],endpoint:r,type:e},{conditions:[o,l,m],endpoint:{url:"https://kafka-api-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:n,[D]:n},type:e},{conditions:[{[z]:h,[A]:[p,"aws-cn"]},q,m],endpoint:r,type:e},{conditions:[s,q,m],endpoint:r,type:e},{conditions:[s,l,m],endpoint:r,type:e},{conditions:[s,l,t],endpoint:u,type:e},{conditions:[{[z]:h,[A]:[p,"aws-eusc"]},q,m],endpoint:r,type:e},{conditions:[l,m],rules:[{conditions:[{[z]:c,[A]:[a,v]},w],rules:[{endpoint:{url:"https://kafka-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:n,[D]:n},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[l,t],rules:[{conditions:[{[z]:c,[A]:[v,a]}],rules:[{endpoint:{url:"https://kafka-fips.{Region}.{PartitionResult#dnsSuffix}",[C]:n,[D]:n},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[q,m],rules:[{conditions:[w],rules:[{endpoint:{url:"https://kafka.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:n,[D]:n},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:u,type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
