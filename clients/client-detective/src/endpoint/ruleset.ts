// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/detective.json */

const x="required",
y="fn",
z="argv",
A="ref",
B="properties",
C="headers";
const a=true,
b=false,
c="isSet",
d="booleanEquals",
e="error",
f="endpoint",
g="tree",
h="PartitionResult",
i={[x]:true,"default":false,"type":"boolean"},
j={[x]:false,"type":"string"},
k={[A]:"Endpoint"},
l={[y]:d,[z]:[{[A]:"UseFIPS"},true]},
m={[y]:d,[z]:[{[A]:"UseDualStack"},true]},
n={[A]:"UseDualStack"},
o={},
p={[y]:"stringEquals",[z]:[{[y]:"getAttr",[z]:[{[A]:h},"name"]},"aws"]},
q={[y]:d,[z]:[{[A]:"UseFIPS"},false]},
r={"url":"https://detective.{Region}.{PartitionResult#dualStackDnsSuffix}",[B]:{},[C]:{}},
s={"url":"https://detective-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[B]:{},[C]:{}},
t={[y]:"stringEquals",[z]:[{[y]:"getAttr",[z]:[{[A]:h},"name"]},"aws-us-gov"]},
u={[y]:"getAttr",[z]:[{[A]:h},"supportsFIPS"]},
v={[y]:d,[z]:[true,{[y]:"getAttr",[z]:[{[A]:h},"supportsDualStack"]}]},
w=[{[A]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:i,UseFIPS:i,Endpoint:j,Region:j},rules:[{conditions:[{[y]:c,[z]:[k]}],rules:[{conditions:[l],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{rules:[{conditions:[m],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:k,[B]:o,[C]:o},type:f}],type:g}],type:g},{rules:[{conditions:[{[y]:c,[z]:w}],rules:[{conditions:[{[y]:"aws.partition",[z]:w,assign:h}],rules:[{conditions:[p,q,m],endpoint:r,type:f},{conditions:[p,l,m],endpoint:s,type:f},{conditions:[t,q,m],endpoint:r,type:f},{conditions:[t,l,m],endpoint:s,type:f},{conditions:[l,m],rules:[{conditions:[{[y]:d,[z]:[a,u]},v],rules:[{endpoint:{url:"https://api.detective-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[B]:o,[C]:o},type:f}],type:g},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}],type:g},{conditions:[l,{[y]:d,[z]:[n,b]}],rules:[{conditions:[{[y]:d,[z]:[u,a]}],rules:[{endpoint:{url:"https://api.detective-fips.{Region}.{PartitionResult#dnsSuffix}",[B]:o,[C]:o},type:f}],type:g},{error:"FIPS is enabled but this partition does not support FIPS",type:e}],type:g},{conditions:[q,m],rules:[{conditions:[v],rules:[{endpoint:{url:"https://api.detective.{Region}.{PartitionResult#dualStackDnsSuffix}",[B]:o,[C]:o},type:f}],type:g},{error:"DualStack is enabled but this partition does not support DualStack",type:e}],type:g},{endpoint:{url:"https://api.detective.{Region}.{PartitionResult#dnsSuffix}",[B]:o,[C]:o},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:e}],type:g}]};
export const ruleSet: RuleSetObject = _data;
