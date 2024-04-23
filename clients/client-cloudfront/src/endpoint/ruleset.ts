// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cloudfront.json */

const A="required",
B="fn",
C="argv",
D="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="sigv4",
j="cloudfront",
k={[A]:false,"type":"String"},
l={[A]:true,"default":false,"type":"Boolean"},
m={[D]:"Endpoint"},
n={[B]:c,[C]:[{[D]:"UseFIPS"},true]},
o={[B]:c,[C]:[{[D]:"UseDualStack"},true]},
p={},
q={[B]:h,[C]:[{[B]:"getAttr",[C]:[{[D]:g},"name"]},"aws"]},
r={[B]:"getAttr",[C]:[{[D]:g},"name"]},
s={[B]:c,[C]:[{[D]:"UseFIPS"},false]},
t={[B]:c,[C]:[{[D]:"UseDualStack"},false]},
u={"authSchemes":[{"name":i,"signingName":j,"signingRegion":"us-east-1"}]},
v={[B]:"getAttr",[C]:[{[D]:g},"supportsFIPS"]},
w={[B]:c,[C]:[true,{[B]:"getAttr",[C]:[{[D]:g},"supportsDualStack"]}]},
x=[n],
y=[o],
z=[{[D]:"Region"}];
const _data={version:"1.0",parameters:{Region:k,UseDualStack:l,UseFIPS:l,Endpoint:k},rules:[{conditions:[{[B]:b,[C]:[m]}],rules:[{conditions:x,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:y,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:m,properties:p,headers:p},type:e}],type:f},{conditions:[{[B]:b,[C]:z}],rules:[{conditions:[{[B]:"aws.partition",[C]:z,assign:g}],rules:[{conditions:[q,s,t],endpoint:{url:"https://cloudfront.amazonaws.com",properties:u,headers:p},type:e},{conditions:[q,n,t],endpoint:{url:"https://cloudfront-fips.amazonaws.com",properties:u,headers:p},type:e},{conditions:[{[B]:h,[C]:[r,"aws-cn"]},s,t],endpoint:{url:"https://cloudfront.cn-northwest-1.amazonaws.com.cn",properties:{authSchemes:[{name:i,signingName:j,signingRegion:"cn-northwest-1"}]},headers:p},type:e},{conditions:[n,o],rules:[{conditions:[{[B]:c,[C]:[a,v]},w],rules:[{endpoint:{url:"https://cloudfront-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:x,rules:[{conditions:[{[B]:c,[C]:[v,a]}],rules:[{endpoint:{url:"https://cloudfront-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:y,rules:[{conditions:[w],rules:[{endpoint:{url:"https://cloudfront.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://cloudfront.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
