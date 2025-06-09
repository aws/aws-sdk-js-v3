// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/efs.json */

const y="required",
z="fn",
A="argv",
B="ref",
C="properties",
D="headers";
const a=true,
b=false,
c="isSet",
d="booleanEquals",
e="error",
f="endpoint",
g="tree",
h="PartitionResult",
i={[y]:true,"default":false,"type":"Boolean"},
j={[y]:false,"type":"String"},
k={[B]:"Endpoint"},
l={[z]:d,[A]:[{[B]:"UseFIPS"},true]},
m={[z]:d,[A]:[{[B]:"UseDualStack"},true]},
n={[B]:"UseDualStack"},
o={},
p={[z]:"stringEquals",[A]:[{[z]:"getAttr",[A]:[{[B]:h},"name"]},"aws"]},
q={[z]:d,[A]:[{[B]:"UseFIPS"},false]},
r={"url":"https://efs.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:{},[D]:{}},
s={"url":"https://efs-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:{},[D]:{}},
t={[z]:"stringEquals",[A]:[{[z]:"getAttr",[A]:[{[B]:h},"name"]},"aws-cn"]},
u={[z]:"stringEquals",[A]:[{[z]:"getAttr",[A]:[{[B]:h},"name"]},"aws-us-gov"]},
v={[z]:"getAttr",[A]:[{[B]:h},"supportsFIPS"]},
w={[z]:d,[A]:[true,{[z]:"getAttr",[A]:[{[B]:h},"supportsDualStack"]}]},
x=[{[B]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:i,UseFIPS:i,Endpoint:j,Region:j},rules:[{conditions:[{[z]:c,[A]:[k]}],rules:[{conditions:[l],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{rules:[{conditions:[m],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:k,[C]:o,[D]:o},type:f}],type:g}],type:g},{rules:[{conditions:[{[z]:c,[A]:x}],rules:[{conditions:[{[z]:"aws.partition",[A]:x,assign:h}],rules:[{conditions:[p,q,m],endpoint:r,type:f},{conditions:[p,l,m],endpoint:s,type:f},{conditions:[t,q,m],endpoint:r,type:f},{conditions:[t,l,m],endpoint:s,type:f},{conditions:[u,q,m],endpoint:r,type:f},{conditions:[u,l,m],endpoint:s,type:f},{conditions:[l,m],rules:[{conditions:[{[z]:d,[A]:[a,v]},w],rules:[{endpoint:{url:"https://elasticfilesystem-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:o,[D]:o},type:f}],type:g},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}],type:g},{conditions:[l,{[z]:d,[A]:[n,b]}],rules:[{conditions:[{[z]:d,[A]:[v,a]}],rules:[{endpoint:{url:"https://elasticfilesystem-fips.{Region}.{PartitionResult#dnsSuffix}",[C]:o,[D]:o},type:f}],type:g},{error:"FIPS is enabled but this partition does not support FIPS",type:e}],type:g},{conditions:[q,m],rules:[{conditions:[w],rules:[{endpoint:{url:"https://elasticfilesystem.{Region}.{PartitionResult#dualStackDnsSuffix}",[C]:o,[D]:o},type:f}],type:g},{error:"DualStack is enabled but this partition does not support DualStack",type:e}],type:g},{endpoint:{url:"https://elasticfilesystem.{Region}.{PartitionResult#dnsSuffix}",[C]:o,[D]:o},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:e}],type:g}]};
export const ruleSet: RuleSetObject = _data;
