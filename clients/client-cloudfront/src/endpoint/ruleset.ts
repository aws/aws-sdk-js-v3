// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cloudfront.json */

const x="required",
y="fn",
z="argv",
A="ref",
B="authSchemes",
C="name",
D="signingRegion";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[x]:true,"default":false,"type":"boolean"},
i={[x]:false,"type":"string"},
j={[A]:"Endpoint"},
k={[y]:c,[z]:[{[A]:"UseFIPS"},true]},
l={[y]:c,[z]:[{[A]:"UseDualStack"},true]},
m={},
n={[y]:"stringEquals",[z]:[{[y]:"getAttr",[z]:[{[A]:g},"name"]},"aws"]},
o={[y]:c,[z]:[{[A]:"UseFIPS"},false]},
p={[B]:[{[C]:"sigv4",[D]:"us-east-1"}]},
q={[y]:"stringEquals",[z]:[{[y]:"getAttr",[z]:[{[A]:g},"name"]},"aws-cn"]},
r={[y]:c,[z]:[{[A]:"UseDualStack"},false]},
s={[B]:[{[C]:"sigv4",[D]:"cn-northwest-1"}]},
t={[y]:"getAttr",[z]:[{[A]:g},"supportsFIPS"]},
u={[y]:c,[z]:[true,{[y]:"getAttr",[z]:[{[A]:g},"supportsDualStack"]}]},
v={[B]:[{[C]:"sigv4",[D]:"{PartitionResult#implicitGlobalRegion}"}]},
w=[{[A]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:h,UseFIPS:h,Endpoint:i,Region:i},rules:[{conditions:[{[y]:b,[z]:[j]}],rules:[{conditions:[k],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[l],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:j,properties:m,headers:m},type:e}],type:f}],type:f},{rules:[{conditions:[{[y]:b,[z]:w}],rules:[{conditions:[{[y]:"aws.partition",[z]:w,assign:g}],rules:[{conditions:[n,o,l],endpoint:{url:"https://cloudfront.global.api.aws",properties:p,headers:m},type:e},{conditions:[n,k,l],endpoint:{url:"https://cloudfront-fips.global.api.aws",properties:p,headers:m},type:e},{conditions:[q,o,r],endpoint:{url:"https://cloudfront.cn-northwest-1.amazonaws.com.cn",properties:s,headers:m},type:e},{conditions:[q,k,r],endpoint:{url:"https://cloudfront-fips.cn-northwest-1.amazonaws.com.cn",properties:s,headers:m},type:e},{conditions:[k,l],rules:[{conditions:[{[y]:c,[z]:[a,t]},u],rules:[{endpoint:{url:"https://cloudfront-fips.{PartitionResult#dualStackDnsSuffix}",properties:v,headers:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[k,r],rules:[{conditions:[{[y]:c,[z]:[t,a]}],rules:[{endpoint:{url:"https://cloudfront-fips.{PartitionResult#dnsSuffix}",properties:v,headers:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[o,l],rules:[{conditions:[u],rules:[{endpoint:{url:"https://cloudfront.{PartitionResult#dualStackDnsSuffix}",properties:v,headers:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://cloudfront.{PartitionResult#dnsSuffix}",properties:v,headers:m},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
