// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/support.json */

const w="required",
x="fn",
y="argv",
z="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g="sigv4",
h="support",
i={[w]:false,"type":"String"},
j={[w]:true,"default":false,"type":"Boolean"},
k={[z]:"Endpoint"},
l={[x]:"booleanEquals",[y]:[{[z]:"UseFIPS"},true]},
m={[x]:"booleanEquals",[y]:[{[z]:"UseDualStack"},true]},
n={},
o={[x]:"getAttr",[y]:[{[z]:e},"name"]},
p={[x]:"booleanEquals",[y]:[{[z]:"UseFIPS"},false]},
q={[x]:"booleanEquals",[y]:[{[z]:"UseDualStack"},false]},
r={[x]:"booleanEquals",[y]:[true,{[x]:"getAttr",[y]:[{[z]:e},"supportsFIPS"]}]},
s={[x]:"booleanEquals",[y]:[true,{[x]:"getAttr",[y]:[{[z]:e},"supportsDualStack"]}]},
t=[l],
u=[m],
v=[{[z]:"Region"}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[x]:a,[y]:[k]}],type:b,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:k,properties:n,headers:n},type:d}]},{conditions:[{[x]:a,[y]:v}],type:b,rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:e}],type:b,rules:[{conditions:[{[x]:f,[y]:[o,"aws"]},p,q],endpoint:{url:"https://support.us-east-1.amazonaws.com",properties:{authSchemes:[{name:g,signingName:h,signingRegion:"us-east-1"}]},headers:n},type:d},{conditions:[{[x]:f,[y]:[o,"aws-cn"]},p,q],endpoint:{url:"https://support.cn-north-1.amazonaws.com.cn",properties:{authSchemes:[{name:g,signingName:h,signingRegion:"cn-north-1"}]},headers:n},type:d},{conditions:[{[x]:f,[y]:[o,"aws-us-gov"]},p,q],endpoint:{url:"https://support.us-gov-west-1.amazonaws.com",properties:{authSchemes:[{name:g,signingName:h,signingRegion:"us-gov-west-1"}]},headers:n},type:d},{conditions:[{[x]:f,[y]:[o,"aws-iso"]},p,q],endpoint:{url:"https://support.us-iso-east-1.c2s.ic.gov",properties:{authSchemes:[{name:g,signingName:h,signingRegion:"us-iso-east-1"}]},headers:n},type:d},{conditions:[{[x]:f,[y]:[o,"aws-iso-b"]},p,q],endpoint:{url:"https://support.us-isob-east-1.sc2s.sgov.gov",properties:{authSchemes:[{name:g,signingName:h,signingRegion:"us-isob-east-1"}]},headers:n},type:d},{conditions:[l,m],type:b,rules:[{conditions:[r,s],type:b,rules:[{endpoint:{url:"https://support-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:t,type:b,rules:[{conditions:[r],type:b,rules:[{endpoint:{url:"https://support-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:d}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:u,type:b,rules:[{conditions:[s],type:b,rules:[{endpoint:{url:"https://support.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{endpoint:{url:"https://support.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:d}]}]},{error:"Invalid Configuration: Missing Region",type:c}]};
export const ruleSet: RuleSetObject = _data;
