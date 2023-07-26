// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/route-53.json */

const A="required",
B="fn",
C="argv",
D="ref",
E="authSchemes",
F="signingName",
G="signingRegion";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g="sigv4",
h="route53",
i={[A]:false,"type":"String"},
j={[A]:true,"default":false,"type":"Boolean"},
k={[D]:"Endpoint"},
l={[B]:"booleanEquals",[C]:[{[D]:"UseFIPS"},true]},
m={[B]:"booleanEquals",[C]:[{[D]:"UseDualStack"},true]},
n={},
o={[B]:f,[C]:[{[B]:"getAttr",[C]:[{[D]:e},"name"]},"aws"]},
p={[B]:"getAttr",[C]:[{[D]:e},"name"]},
q={[B]:"booleanEquals",[C]:[{[D]:"UseFIPS"},false]},
r={[B]:"booleanEquals",[C]:[{[D]:"UseDualStack"},false]},
s={[E]:[{"name":g,[F]:h,[G]:"us-east-1"}]},
t={[B]:f,[C]:[p,"aws-us-gov"]},
u={"url":"https://route53.us-gov.amazonaws.com","properties":{[E]:[{"name":g,[F]:h,[G]:"us-gov-west-1"}]},"headers":{}},
v={[B]:"booleanEquals",[C]:[true,{[B]:"getAttr",[C]:[{[D]:e},"supportsFIPS"]}]},
w={[B]:"booleanEquals",[C]:[true,{[B]:"getAttr",[C]:[{[D]:e},"supportsDualStack"]}]},
x=[l],
y=[m],
z=[{[D]:"Region"}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[B]:a,[C]:[k]}],type:b,rules:[{conditions:x,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:y,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:k,properties:n,headers:n},type:d}]}]},{type:b,rules:[{conditions:[{[B]:a,[C]:z}],type:b,rules:[{conditions:[{[B]:"aws.partition",[C]:z,assign:e}],type:b,rules:[{conditions:[o,q,r],endpoint:{url:"https://route53.amazonaws.com",properties:s,headers:n},type:d},{conditions:[o,l,r],endpoint:{url:"https://route53-fips.amazonaws.com",properties:s,headers:n},type:d},{conditions:[{[B]:f,[C]:[p,"aws-cn"]},q,r],endpoint:{url:"https://route53.amazonaws.com.cn",properties:{[E]:[{name:g,[F]:h,[G]:"cn-northwest-1"}]},headers:n},type:d},{conditions:[t,q,r],endpoint:u,type:d},{conditions:[t,l,r],endpoint:u,type:d},{conditions:[{[B]:f,[C]:[p,"aws-iso"]},q,r],endpoint:{url:"https://route53.c2s.ic.gov",properties:{[E]:[{name:g,[F]:h,[G]:"us-iso-east-1"}]},headers:n},type:d},{conditions:[{[B]:f,[C]:[p,"aws-iso-b"]},q,r],endpoint:{url:"https://route53.sc2s.sgov.gov",properties:{[E]:[{name:g,[F]:h,[G]:"us-isob-east-1"}]},headers:n},type:d},{conditions:[l,m],type:b,rules:[{conditions:[v,w],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://route53-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:d}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:x,type:b,rules:[{conditions:[v],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://route53-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:y,type:b,rules:[{conditions:[w],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://route53.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:d}]}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{type:b,rules:[{endpoint:{url:"https://route53.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:d}]}]}]},{error:"Invalid Configuration: Missing Region",type:c}]}]};
export const ruleSet: RuleSetObject = _data;
