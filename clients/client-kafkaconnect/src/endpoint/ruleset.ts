// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/kafkaconnect.json */

const w="required",
x="fn",
y="argv",
z="ref",
A="properties",
B="headers";
const a=true,
b=false,
c="isSet",
d="booleanEquals",
e="error",
f="endpoint",
g="tree",
h="PartitionResult",
i={[w]:true,"default":false,"type":"boolean"},
j={[w]:false,"type":"string"},
k={[z]:"Endpoint"},
l={[x]:d,[y]:[{[z]:"UseFIPS"},true]},
m={[z]:"UseFIPS"},
n={[x]:d,[y]:[{[z]:"UseDualStack"},true]},
o={},
p={[x]:"stringEquals",[y]:[{[x]:"getAttr",[y]:[{[z]:h},"name"]},"aws-us-gov"]},
q={[x]:d,[y]:[{[z]:"UseDualStack"},false]},
r={"url":"https://kafkaconnect.{Region}.{PartitionResult#dnsSuffix}",[A]:{},[B]:{}},
s={"url":"https://kafkaconnect.{Region}.{PartitionResult#dualStackDnsSuffix}",[A]:{},[B]:{}},
t={[x]:"getAttr",[y]:[{[z]:h},"supportsFIPS"]},
u={[x]:d,[y]:[true,{[x]:"getAttr",[y]:[{[z]:h},"supportsDualStack"]}]},
v=[{[z]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:i,UseFIPS:i,Endpoint:j,Region:j},rules:[{conditions:[{[x]:c,[y]:[k]}],rules:[{conditions:[l],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{rules:[{conditions:[n],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:k,[A]:o,[B]:o},type:f}],type:g}],type:g},{rules:[{conditions:[{[x]:c,[y]:v}],rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:h}],rules:[{conditions:[p,l,q],endpoint:r,type:f},{conditions:[p,l,n],endpoint:s,type:f},{conditions:[l,n],rules:[{conditions:[{[x]:d,[y]:[a,t]},u],rules:[{endpoint:{url:"https://kafkaconnect-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[A]:o,[B]:o},type:f}],type:g},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}],type:g},{conditions:[l,q],rules:[{conditions:[{[x]:d,[y]:[t,a]}],rules:[{endpoint:{url:"https://kafkaconnect-fips.{Region}.{PartitionResult#dnsSuffix}",[A]:o,[B]:o},type:f}],type:g},{error:"FIPS is enabled but this partition does not support FIPS",type:e}],type:g},{conditions:[{[x]:d,[y]:[m,b]},n],rules:[{conditions:[u],rules:[{endpoint:s,type:f}],type:g},{error:"DualStack is enabled but this partition does not support DualStack",type:e}],type:g},{endpoint:r,type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:e}],type:g}]};
export const ruleSet: RuleSetObject = _data;
