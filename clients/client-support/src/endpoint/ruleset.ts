// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/support.json */

const v="required",
w="fn",
x="argv",
y="ref";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="stringEquals",
f="us-gov-west-1",
g="https://support.us-gov-west-1.amazonaws.com",
h="sigv4",
i="support",
j={[v]:false,"type":"String"},
k={[v]:true,"default":false,"type":"Boolean"},
l={[y]:"Region"},
m={[y]:"Endpoint"},
n={[w]:"booleanEquals",[x]:[{[y]:"UseFIPS"},true]},
o={[w]:"booleanEquals",[x]:[{[y]:"UseDualStack"},true]},
p={},
q={[w]:"booleanEquals",[x]:[true,{[w]:"getAttr",[x]:[{[y]:a},"supportsFIPS"]}]},
r={[w]:"booleanEquals",[x]:[true,{[w]:"getAttr",[x]:[{[y]:a},"supportsDualStack"]}]},
s=[m],
t=[n],
u=[o];
const _data={version:"1.0",parameters:{Region:j,UseDualStack:k,UseFIPS:k,Endpoint:j},rules:[{conditions:[{[w]:"aws.partition",[x]:[l],assign:a}],type:b,rules:[{conditions:[{[w]:"isSet",[x]:s},{[w]:"parseURL",[x]:s,assign:"url"}],type:b,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:m,properties:p,headers:p},type:d}]}]},{conditions:[n,o],type:b,rules:[{conditions:[q,r],type:b,rules:[{endpoint:{url:"https://support-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:t,type:b,rules:[{conditions:[q],type:b,rules:[{type:b,rules:[{conditions:[{[w]:e,[x]:[l,f]}],endpoint:{url:g,properties:p,headers:p},type:d},{endpoint:{url:"https://support-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:u,type:b,rules:[{conditions:[r],type:b,rules:[{endpoint:{url:"https://support.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{type:b,rules:[{conditions:[{[w]:e,[x]:[l,"aws-global"]}],endpoint:{url:"https://support.us-east-1.amazonaws.com",properties:{authSchemes:[{name:h,signingName:i,signingRegion:"us-east-1"}]},headers:p},type:d},{conditions:[{[w]:e,[x]:[l,"aws-cn-global"]}],endpoint:{url:"https://support.cn-north-1.amazonaws.com.cn",properties:{authSchemes:[{name:h,signingName:i,signingRegion:"cn-north-1"}]},headers:p},type:d},{conditions:[{[w]:e,[x]:[l,"aws-us-gov-global"]}],endpoint:{url:g,properties:{authSchemes:[{name:h,signingName:i,signingRegion:f}]},headers:p},type:d},{conditions:[{[w]:e,[x]:[l,"aws-iso-global"]}],endpoint:{url:"https://support.us-iso-east-1.c2s.ic.gov",properties:{authSchemes:[{name:h,signingName:i,signingRegion:"us-iso-east-1"}]},headers:p},type:d},{conditions:[{[w]:e,[x]:[l,"aws-iso-b-global"]}],endpoint:{url:"https://support.us-isob-east-1.sc2s.sgov.gov",properties:{authSchemes:[{name:h,signingName:i,signingRegion:"us-isob-east-1"}]},headers:p},type:d},{endpoint:{url:"https://support.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:d}]}]}]};
export const ruleSet: RuleSetObject = _data;
