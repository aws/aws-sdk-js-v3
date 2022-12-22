// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/support.json */

const w="fn",
x="argv",
y="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="stringEquals",
i="us-gov-west-1",
j="https://support.us-gov-west-1.amazonaws.com",
k="sigv4",
l="support",
m={"required":true,"default":false,"type":"Boolean"},
n={[y]:"Region"},
o={[y]:"Endpoint"},
p={[w]:"booleanEquals",[x]:[{[y]:"UseFIPS"},true]},
q={[w]:"booleanEquals",[x]:[{[y]:"UseDualStack"},true]},
r={},
s={[w]:"booleanEquals",[x]:[true,{[w]:"getAttr",[x]:[{[y]:d},"supportsFIPS"]}]},
t={[w]:"booleanEquals",[x]:[true,{[w]:"getAttr",[x]:[{[y]:d},"supportsDualStack"]}]},
u=[p],
v=[q];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:m,UseFIPS:m,Endpoint:{required:b,type:c}},rules:[{conditions:[{[w]:"aws.partition",[x]:[n],assign:d}],type:e,rules:[{conditions:[{[w]:"isSet",[x]:[o]}],type:e,rules:[{conditions:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:o,properties:r,headers:r},type:g}]}]},{conditions:[p,q],type:e,rules:[{conditions:[s,t],type:e,rules:[{endpoint:{url:"https://support-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:u,type:e,rules:[{conditions:[s],type:e,rules:[{type:e,rules:[{conditions:[{[w]:h,[x]:[n,i]}],endpoint:{url:j,properties:r,headers:r},type:g},{endpoint:{url:"https://support-fips.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:v,type:e,rules:[{conditions:[t],type:e,rules:[{endpoint:{url:"https://support.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{type:e,rules:[{conditions:[{[w]:h,[x]:[n,"aws-global"]}],endpoint:{url:"https://support.us-east-1.amazonaws.com",properties:{authSchemes:[{name:k,signingRegion:"us-east-1",signingName:l}]},headers:r},type:g},{conditions:[{[w]:h,[x]:[n,"aws-cn-global"]}],endpoint:{url:"https://support.cn-north-1.amazonaws.com.cn",properties:{authSchemes:[{name:k,signingRegion:"cn-north-1",signingName:l}]},headers:r},type:g},{conditions:[{[w]:h,[x]:[n,"aws-us-gov-global"]}],endpoint:{url:j,properties:{authSchemes:[{name:k,signingRegion:i,signingName:l}]},headers:r},type:g},{conditions:[{[w]:h,[x]:[n,"aws-iso-global"]}],endpoint:{url:"https://support.us-iso-east-1.c2s.ic.gov",properties:{authSchemes:[{name:k,signingRegion:"us-iso-east-1",signingName:l}]},headers:r},type:g},{conditions:[{[w]:h,[x]:[n,"aws-iso-b-global"]}],endpoint:{url:"https://support.us-isob-east-1.sc2s.sgov.gov",properties:{authSchemes:[{name:k,signingRegion:"us-isob-east-1",signingName:l}]},headers:r},type:g},{endpoint:{url:"https://support.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},type:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
