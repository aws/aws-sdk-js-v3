// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/budgets.json */

const y="required",
z="fn",
A="argv",
B="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="sigv4",
j="budgets",
k={[y]:false,"type":"String"},
l={[y]:true,"default":false,"type":"Boolean"},
m={[B]:"Endpoint"},
n={[z]:c,[A]:[{[B]:"UseFIPS"},true]},
o={[z]:c,[A]:[{[B]:"UseDualStack"},true]},
p={},
q={[z]:"getAttr",[A]:[{[B]:g},"name"]},
r={[z]:c,[A]:[{[B]:"UseFIPS"},false]},
s={[z]:c,[A]:[{[B]:"UseDualStack"},false]},
t={[z]:"getAttr",[A]:[{[B]:g},"supportsFIPS"]},
u={[z]:c,[A]:[true,{[z]:"getAttr",[A]:[{[B]:g},"supportsDualStack"]}]},
v=[n],
w=[o],
x=[{[B]:"Region"}];
const _data={version:"1.0",parameters:{Region:k,UseDualStack:l,UseFIPS:l,Endpoint:k},rules:[{conditions:[{[z]:b,[A]:[m]}],rules:[{conditions:v,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:w,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:m,properties:p,headers:p},type:e}],type:f},{conditions:[{[z]:b,[A]:x}],rules:[{conditions:[{[z]:"aws.partition",[A]:x,assign:g}],rules:[{conditions:[{[z]:h,[A]:[q,"aws"]},r,s],endpoint:{url:"https://budgets.amazonaws.com",properties:{authSchemes:[{name:i,signingName:j,signingRegion:"us-east-1"}]},headers:p},type:e},{conditions:[{[z]:h,[A]:[q,"aws-cn"]},r,s],endpoint:{url:"https://budgets.amazonaws.com.cn",properties:{authSchemes:[{name:i,signingName:j,signingRegion:"cn-northwest-1"}]},headers:p},type:e},{conditions:[{[z]:h,[A]:[q,"aws-iso"]},r,s],endpoint:{url:"https://budgets.c2s.ic.gov",properties:{authSchemes:[{name:i,signingName:j,signingRegion:"us-iso-east-1"}]},headers:p},type:e},{conditions:[{[z]:h,[A]:[q,"aws-iso-b"]},r,s],endpoint:{url:"https://budgets.global.sc2s.sgov.gov",properties:{authSchemes:[{name:i,signingName:j,signingRegion:"us-isob-east-1"}]},headers:p},type:e},{conditions:[{[z]:h,[A]:[q,"aws-iso-e"]},r,s],endpoint:{url:"https://budgets.global.cloud.adc-e.uk",properties:{authSchemes:[{name:i,signingName:j,signingRegion:"eu-isoe-west-1"}]},headers:p},type:e},{conditions:[{[z]:h,[A]:[q,"aws-iso-f"]},r,s],endpoint:{url:"https://budgets.global.csp.hci.ic.gov",properties:{authSchemes:[{name:i,signingName:j,signingRegion:"us-isof-south-1"}]},headers:p},type:e},{conditions:[n,o],rules:[{conditions:[{[z]:c,[A]:[a,t]},u],rules:[{endpoint:{url:"https://budgets-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:v,rules:[{conditions:[{[z]:c,[A]:[t,a]}],rules:[{endpoint:{url:"https://budgets-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:w,rules:[{conditions:[u],rules:[{endpoint:{url:"https://budgets.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://budgets.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
