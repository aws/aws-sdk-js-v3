// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/budgets.json */

const y="required",
z="fn",
A="argv",
B="ref",
C="authSchemes",
D="signingRegion";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="sigv4",
j={[y]:true,"default":false,"type":"boolean"},
k={[y]:false,"type":"string"},
l={[B]:"Endpoint"},
m={[z]:c,[A]:[{[B]:"UseFIPS"},true]},
n={[z]:c,[A]:[{[B]:"UseDualStack"},true]},
o={},
p={[z]:"getAttr",[A]:[{[B]:g},"name"]},
q={[z]:c,[A]:[{[B]:"UseFIPS"},false]},
r={[z]:c,[A]:[{[B]:"UseDualStack"},false]},
s={[z]:h,[A]:[p,"aws-eusc"]},
t={"url":"https://budgets.eusc-de-east-1.api.amazonwebservices.eu","properties":{[C]:[{"name":i,[D]:"eusc-de-east-1"}]},"headers":{}},
u={[z]:"getAttr",[A]:[{[B]:g},"supportsFIPS"]},
v={[z]:c,[A]:[true,{[z]:"getAttr",[A]:[{[B]:g},"supportsDualStack"]}]},
w={[C]:[{"name":i,[D]:"{PartitionResult#implicitGlobalRegion}"}]},
x=[{[B]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:j,UseFIPS:j,Endpoint:k,Region:k},rules:[{conditions:[{[z]:b,[A]:[l]}],rules:[{conditions:[m],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[n],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:l,properties:o,headers:o},type:e}],type:f}],type:f},{rules:[{conditions:[{[z]:b,[A]:x}],rules:[{conditions:[{[z]:"aws.partition",[A]:x,assign:g}],rules:[{conditions:[{[z]:h,[A]:[p,"aws"]},q,n],endpoint:{url:"https://budgets.us-east-1.api.aws",properties:{[C]:[{name:i,[D]:"us-east-1"}]},headers:o},type:e},{conditions:[{[z]:h,[A]:[p,"aws-iso-b"]},q,r],endpoint:{url:"https://budgets.global.sc2s.sgov.gov",properties:{[C]:[{name:i,[D]:"us-isob-east-1"}]},headers:o},type:e},{conditions:[{[z]:h,[A]:[p,"aws-iso-e"]},q,r],endpoint:{url:"https://budgets.global.cloud.adc-e.uk",properties:{[C]:[{name:i,[D]:"eu-isoe-west-1"}]},headers:o},type:e},{conditions:[{[z]:h,[A]:[p,"aws-iso-f"]},q,r],endpoint:{url:"https://budgets.global.csp.hci.ic.gov",properties:{[C]:[{name:i,[D]:"us-isof-south-1"}]},headers:o},type:e},{conditions:[s,q,r],endpoint:t,type:e},{conditions:[s,q,n],endpoint:t,type:e},{conditions:[m,n],rules:[{conditions:[{[z]:c,[A]:[a,u]},v],rules:[{endpoint:{url:"https://budgets-fips.{PartitionResult#dualStackDnsSuffix}",properties:w,headers:o},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[m,r],rules:[{conditions:[{[z]:c,[A]:[u,a]}],rules:[{endpoint:{url:"https://budgets-fips.{PartitionResult#dnsSuffix}",properties:w,headers:o},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[q,n],rules:[{conditions:[v],rules:[{endpoint:{url:"https://budgets.{PartitionResult#dualStackDnsSuffix}",properties:w,headers:o},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://budgets.{PartitionResult#dnsSuffix}",properties:w,headers:o},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
