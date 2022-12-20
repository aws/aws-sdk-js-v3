// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/account.json */

const C="type",
D="conditions",
E="fn",
F="argv",
G="ref",
H="properties",
I="headers",
J="authSchemes",
K="signingName",
L="signingRegion";
const a=false,
b=true,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="stringEquals",
j={[G]:"Region"},
k={[G]:"Endpoint"},
l={},
m={[E]:"getAttr",[F]:[{[G]:e},"name"]},
n={[J]:[{"name":"sigv4",[K]:"account",[L]:"us-east-1"}]},
o={[D]:[],[g]:"FIPS and DualStack are enabled, but this partition does not support one or both",[C]:g},
p={[D]:[],[g]:"FIPS is enabled but this partition does not support FIPS",[C]:g},
q={[D]:[],[g]:"DualStack is enabled but this partition does not support DualStack",[C]:g},
r={"url":"https://account.us-east-1.amazonaws.com",[H]:n,[I]:{}},
s={[J]:[{"name":"sigv4",[K]:"account",[L]:"cn-northwest-1"}]},
t={"url":"https://account.cn-northwest-1.amazonaws.com.cn",[H]:s,[I]:{}},
u=[k],
v=[{[E]:"booleanEquals",[F]:[{[G]:"UseFIPS"},true]}],
w=[],
x=[{[E]:"booleanEquals",[F]:[{[G]:"UseDualStack"},true]}],
y=[{[E]:"booleanEquals",[F]:[{[G]:"UseFIPS"},true]},{[E]:"booleanEquals",[F]:[{[G]:"UseDualStack"},true]}],
z=[{[E]:"booleanEquals",[F]:[true,{[E]:"getAttr",[F]:[{[G]:e},"supportsFIPS"]}]},{[E]:"booleanEquals",[F]:[true,{[E]:"getAttr",[F]:[{[G]:e},"supportsDualStack"]}]}],
A=[{[E]:"booleanEquals",[F]:[true,{[E]:"getAttr",[F]:[{[G]:e},"supportsFIPS"]}]}],
B=[{[E]:"booleanEquals",[F]:[true,{[E]:"getAttr",[F]:[{[G]:e},"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",[C]:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",[C]:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",[C]:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",[C]:c}},rules:[{[D]:[{[E]:"aws.partition",[F]:[j],assign:e}],[C]:f,rules:[{[D]:[{[E]:"isSet",[F]:u},{[E]:"parseURL",[F]:u,assign:"url"}],[C]:f,rules:[{[D]:v,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[C]:g},{[D]:w,[C]:f,rules:[{[D]:x,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[C]:g},{[D]:w,endpoint:{url:k,[H]:l,[I]:l},[C]:h}]}]},{[D]:[{[E]:i,[F]:[m,"aws"]}],[C]:f,rules:[{[D]:y,[C]:f,rules:[{[D]:z,[C]:f,rules:[{[D]:w,endpoint:{url:"https://account-fips.{Region}.api.aws",[H]:n,[I]:l},[C]:h}]},o]},{[D]:v,[C]:f,rules:[{[D]:A,[C]:f,rules:[{[D]:w,endpoint:{url:"https://account-fips.{Region}.amazonaws.com",[H]:n,[I]:l},[C]:h}]},p]},{[D]:x,[C]:f,rules:[{[D]:B,[C]:f,rules:[{[D]:w,endpoint:{url:"https://account.{Region}.api.aws",[H]:n,[I]:l},[C]:h}]},q]},{[D]:w,endpoint:r,[C]:h}]},{[D]:[{[E]:i,[F]:[m,"aws-cn"]}],[C]:f,rules:[{[D]:y,[C]:f,rules:[{[D]:z,[C]:f,rules:[{[D]:w,endpoint:{url:"https://account-fips.{Region}.api.amazonwebservices.com.cn",[H]:s,[I]:l},[C]:h}]},o]},{[D]:v,[C]:f,rules:[{[D]:A,[C]:f,rules:[{[D]:w,endpoint:{url:"https://account-fips.{Region}.amazonaws.com.cn",[H]:s,[I]:l},[C]:h}]},p]},{[D]:x,[C]:f,rules:[{[D]:B,[C]:f,rules:[{[D]:w,endpoint:{url:"https://account.{Region}.api.amazonwebservices.com.cn",[H]:s,[I]:l},[C]:h}]},q]},{[D]:w,endpoint:t,[C]:h}]},{[D]:y,[C]:f,rules:[{[D]:z,[C]:f,rules:[{[D]:w,endpoint:{url:"https://account-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[H]:l,[I]:l},[C]:h}]},o]},{[D]:v,[C]:f,rules:[{[D]:A,[C]:f,rules:[{[D]:w,[C]:f,rules:[{[D]:w,endpoint:{url:"https://account-fips.{Region}.{PartitionResult#dnsSuffix}",[H]:l,[I]:l},[C]:h}]}]},p]},{[D]:x,[C]:f,rules:[{[D]:B,[C]:f,rules:[{[D]:w,endpoint:{url:"https://account.{Region}.{PartitionResult#dualStackDnsSuffix}",[H]:l,[I]:l},[C]:h}]},q]},{[D]:w,[C]:f,rules:[{[D]:[{[E]:i,[F]:[j,"aws-global"]}],endpoint:r,[C]:h},{[D]:[{[E]:i,[F]:[j,"aws-cn-global"]}],endpoint:t,[C]:h},{[D]:w,endpoint:{url:"https://account.{Region}.{PartitionResult#dnsSuffix}",[H]:l,[I]:l},[C]:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
