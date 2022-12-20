// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/support.json */

const y="fn",
z="argv",
A="ref";
const a=false,
b=true,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="stringEquals",
j="us-gov-west-1",
k="https://support.us-gov-west-1.amazonaws.com",
l="sigv4",
m="support",
n={[A]:"Region"},
o={[A]:"Endpoint"},
p={[y]:"booleanEquals",[z]:[{[A]:"UseFIPS"},true]},
q={[y]:"booleanEquals",[z]:[{[A]:"UseDualStack"},true]},
r={},
s={[y]:"booleanEquals",[z]:[true,{[y]:"getAttr",[z]:[{[A]:e},"supportsFIPS"]}]},
t={[y]:"booleanEquals",[z]:[true,{[y]:"getAttr",[z]:[{[A]:e},"supportsDualStack"]}]},
u=[o],
v=[p],
w=[],
x=[q];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[y]:"aws.partition",[z]:[n],assign:e}],type:f,rules:[{conditions:[{[y]:"isSet",[z]:u},{[y]:"parseURL",[z]:u,assign:"url"}],type:f,rules:[{conditions:v,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:w,type:f,rules:[{conditions:x,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:w,endpoint:{url:o,properties:r,headers:r},type:h}]}]},{conditions:[p,q],type:f,rules:[{conditions:[s,t],type:f,rules:[{conditions:w,endpoint:{url:"https://support-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},type:h}]},{conditions:w,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:v,type:f,rules:[{conditions:[s],type:f,rules:[{conditions:w,type:f,rules:[{conditions:[{[y]:i,[z]:[n,j]}],endpoint:{url:k,properties:r,headers:r},type:h},{conditions:w,endpoint:{url:"https://support-fips.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},type:h}]}]},{conditions:w,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:x,type:f,rules:[{conditions:[t],type:f,rules:[{conditions:w,endpoint:{url:"https://support.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},type:h}]},{conditions:w,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:w,type:f,rules:[{conditions:[{[y]:i,[z]:[n,"aws-global"]}],endpoint:{url:"https://support.us-east-1.amazonaws.com",properties:{authSchemes:[{name:l,signingName:m,signingRegion:"us-east-1"}]},headers:r},type:h},{conditions:[{[y]:i,[z]:[n,"aws-cn-global"]}],endpoint:{url:"https://support.cn-north-1.amazonaws.com.cn",properties:{authSchemes:[{name:l,signingName:m,signingRegion:"cn-north-1"}]},headers:r},type:h},{conditions:[{[y]:i,[z]:[n,"aws-us-gov-global"]}],endpoint:{url:k,properties:{authSchemes:[{name:l,signingName:m,signingRegion:j}]},headers:r},type:h},{conditions:[{[y]:i,[z]:[n,"aws-iso-global"]}],endpoint:{url:"https://support.us-iso-east-1.c2s.ic.gov",properties:{authSchemes:[{name:l,signingName:m,signingRegion:"us-iso-east-1"}]},headers:r},type:h},{conditions:[{[y]:i,[z]:[n,"aws-iso-b-global"]}],endpoint:{url:"https://support.us-isob-east-1.sc2s.sgov.gov",properties:{authSchemes:[{name:l,signingName:m,signingRegion:"us-isob-east-1"}]},headers:r},type:h},{conditions:w,endpoint:{url:"https://support.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},type:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
