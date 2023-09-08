// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cloudfront.json */

const y="required",
z="fn",
A="argv",
B="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g="sigv4",
h="cloudfront",
i={[y]:false,"type":"String"},
j={[y]:true,"default":false,"type":"Boolean"},
k={[B]:"Endpoint"},
l={[z]:"booleanEquals",[A]:[{[B]:"UseFIPS"},true]},
m={[z]:"booleanEquals",[A]:[{[B]:"UseDualStack"},true]},
n={},
o={[z]:f,[A]:[{[z]:"getAttr",[A]:[{[B]:e},"name"]},"aws"]},
p={[z]:"getAttr",[A]:[{[B]:e},"name"]},
q={[z]:"booleanEquals",[A]:[{[B]:"UseFIPS"},false]},
r={[z]:"booleanEquals",[A]:[{[B]:"UseDualStack"},false]},
s={"authSchemes":[{"name":g,"signingName":h,"signingRegion":"us-east-1"}]},
t={[z]:"booleanEquals",[A]:[true,{[z]:"getAttr",[A]:[{[B]:e},"supportsFIPS"]}]},
u={[z]:"booleanEquals",[A]:[true,{[z]:"getAttr",[A]:[{[B]:e},"supportsDualStack"]}]},
v=[l],
w=[m],
x=[{[B]:"Region"}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[z]:a,[A]:[k]}],type:b,rules:[{conditions:v,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{conditions:w,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:k,properties:n,headers:n},type:d}]},{conditions:[{[z]:a,[A]:x}],type:b,rules:[{conditions:[{[z]:"aws.partition",[A]:x,assign:e}],type:b,rules:[{conditions:[o,q,r],endpoint:{url:"https://cloudfront.amazonaws.com",properties:s,headers:n},type:d},{conditions:[o,l,r],endpoint:{url:"https://cloudfront-fips.amazonaws.com",properties:s,headers:n},type:d},{conditions:[{[z]:f,[A]:[p,"aws-cn"]},q,r],endpoint:{url:"https://cloudfront.cn-northwest-1.amazonaws.com.cn",properties:{authSchemes:[{name:g,signingName:h,signingRegion:"cn-northwest-1"}]},headers:n},type:d},{conditions:[l,m],type:b,rules:[{conditions:[t,u],type:b,rules:[{endpoint:{url:"https://cloudfront-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:v,type:b,rules:[{conditions:[t],type:b,rules:[{endpoint:{url:"https://cloudfront-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:d}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:w,type:b,rules:[{conditions:[u],type:b,rules:[{endpoint:{url:"https://cloudfront.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{endpoint:{url:"https://cloudfront.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:d}]}]},{error:"Invalid Configuration: Missing Region",type:c}]};
export const ruleSet: RuleSetObject = _data;
