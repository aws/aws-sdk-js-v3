// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/route-53.json */

const C="required",
D="fn",
E="argv",
F="ref",
G="authSchemes",
H="signingName",
I="signingRegion";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="sigv4",
j="route53",
k={[C]:false,"type":"String"},
l={[C]:true,"default":false,"type":"Boolean"},
m={[F]:"Endpoint"},
n={[D]:c,[E]:[{[F]:"UseFIPS"},true]},
o={[D]:c,[E]:[{[F]:"UseDualStack"},true]},
p={},
q={[D]:h,[E]:[{[D]:"getAttr",[E]:[{[F]:g},"name"]},"aws"]},
r={[D]:"getAttr",[E]:[{[F]:g},"name"]},
s={[D]:c,[E]:[{[F]:"UseFIPS"},false]},
t={[D]:c,[E]:[{[F]:"UseDualStack"},false]},
u={[G]:[{"name":i,[H]:j,[I]:"us-east-1"}]},
v={[D]:h,[E]:[r,"aws-us-gov"]},
w={"url":"https://route53.us-gov.amazonaws.com","properties":{[G]:[{"name":i,[H]:j,[I]:"us-gov-west-1"}]},"headers":{}},
x={[D]:"getAttr",[E]:[{[F]:g},"supportsFIPS"]},
y={[D]:c,[E]:[true,{[D]:"getAttr",[E]:[{[F]:g},"supportsDualStack"]}]},
z=[n],
A=[o],
B=[{[F]:"Region"}];
const _data={version:"1.0",parameters:{Region:k,UseDualStack:l,UseFIPS:l,Endpoint:k},rules:[{conditions:[{[D]:b,[E]:[m]}],rules:[{conditions:z,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:A,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:m,properties:p,headers:p},type:e}],type:f},{conditions:[{[D]:b,[E]:B}],rules:[{conditions:[{[D]:"aws.partition",[E]:B,assign:g}],rules:[{conditions:[q,s,t],endpoint:{url:"https://route53.amazonaws.com",properties:u,headers:p},type:e},{conditions:[q,n,t],endpoint:{url:"https://route53-fips.amazonaws.com",properties:u,headers:p},type:e},{conditions:[{[D]:h,[E]:[r,"aws-cn"]},s,t],endpoint:{url:"https://route53.amazonaws.com.cn",properties:{[G]:[{name:i,[H]:j,[I]:"cn-northwest-1"}]},headers:p},type:e},{conditions:[v,s,t],endpoint:w,type:e},{conditions:[v,n,t],endpoint:w,type:e},{conditions:[{[D]:h,[E]:[r,"aws-iso"]},s,t],endpoint:{url:"https://route53.c2s.ic.gov",properties:{[G]:[{name:i,[H]:j,[I]:"us-iso-east-1"}]},headers:p},type:e},{conditions:[{[D]:h,[E]:[r,"aws-iso-b"]},s,t],endpoint:{url:"https://route53.sc2s.sgov.gov",properties:{[G]:[{name:i,[H]:j,[I]:"us-isob-east-1"}]},headers:p},type:e},{conditions:[{[D]:h,[E]:[r,"aws-iso-e"]},s,t],endpoint:{url:"https://route53.cloud.adc-e.uk",properties:{[G]:[{name:i,[H]:j,[I]:"eu-isoe-west-1"}]},headers:p},type:e},{conditions:[{[D]:h,[E]:[r,"aws-iso-f"]},s,t],endpoint:{url:"https://route53.csp.hci.ic.gov",properties:{[G]:[{name:i,[H]:j,[I]:"us-isof-south-1"}]},headers:p},type:e},{conditions:[{[D]:h,[E]:[r,"aws-eusc"]},s,t],endpoint:{url:"https://route53.amazonaws.eu",properties:{[G]:[{name:i,[H]:j,[I]:"eusc-de-east-1"}]},headers:p},type:e},{conditions:[n,o],rules:[{conditions:[{[D]:c,[E]:[a,x]},y],rules:[{endpoint:{url:"https://route53-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:z,rules:[{conditions:[{[D]:c,[E]:[x,a]}],rules:[{endpoint:{url:"https://route53-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:A,rules:[{conditions:[y],rules:[{endpoint:{url:"https://route53.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://route53.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
