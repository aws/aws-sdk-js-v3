// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cloudfront.json */

const B="type",
C="conditions",
D="fn",
E="argv",
F="ref",
G="properties",
H="headers",
I="authSchemes",
J="signingRegion",
K="signingName";
const a=true,
b=false,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="stringEquals",
j={[F]:"Region"},
k={[F]:"Endpoint"},
l={},
m={[D]:"getAttr",[E]:[{[F]:e},"name"]},
n={[I]:[{"name":"sigv4",[J]:"us-east-1",[K]:"cloudfront"}]},
o={[C]:[],[g]:"FIPS and DualStack are enabled, but this partition does not support one or both",[B]:g},
p={[C]:[],[g]:"FIPS is enabled but this partition does not support FIPS",[B]:g},
q={[C]:[],[g]:"DualStack is enabled but this partition does not support DualStack",[B]:g},
r={"url":"https://cloudfront.amazonaws.com",[G]:n,[H]:{}},
s={[I]:[{"name":"sigv4",[J]:"cn-northwest-1",[K]:"cloudfront"}]},
t={"url":"https://cloudfront.cn-northwest-1.amazonaws.com.cn",[G]:s,[H]:{}},
u=[{[D]:"booleanEquals",[E]:[{[F]:"UseFIPS"},true]}],
v=[],
w=[{[D]:"booleanEquals",[E]:[{[F]:"UseDualStack"},true]}],
x=[{[D]:"booleanEquals",[E]:[{[F]:"UseFIPS"},true]},{[D]:"booleanEquals",[E]:[{[F]:"UseDualStack"},true]}],
y=[{[D]:"booleanEquals",[E]:[true,{[D]:"getAttr",[E]:[{[F]:e},"supportsFIPS"]}]},{[D]:"booleanEquals",[E]:[true,{[D]:"getAttr",[E]:[{[F]:e},"supportsDualStack"]}]}],
z=[{[D]:"booleanEquals",[E]:[true,{[D]:"getAttr",[E]:[{[F]:e},"supportsFIPS"]}]}],
A=[{[D]:"booleanEquals",[E]:[true,{[D]:"getAttr",[E]:[{[F]:e},"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",[B]:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:a,default:b,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",[B]:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",[B]:d},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",[B]:c}},rules:[{[C]:[{[D]:"aws.partition",[E]:[j],assign:e}],[B]:f,rules:[{[C]:[{[D]:"isSet",[E]:[k]}],[B]:f,rules:[{[C]:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[B]:g},{[C]:v,[B]:f,rules:[{[C]:w,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[B]:g},{[C]:v,endpoint:{url:k,[G]:l,[H]:l},[B]:h}]}]},{[C]:[{[D]:i,[E]:[m,"aws"]}],[B]:f,rules:[{[C]:x,[B]:f,rules:[{[C]:y,[B]:f,rules:[{[C]:v,endpoint:{url:"https://cloudfront-fips.{Region}.api.aws",[G]:n,[H]:l},[B]:h}]},o]},{[C]:u,[B]:f,rules:[{[C]:z,[B]:f,rules:[{[C]:v,endpoint:{url:"https://cloudfront-fips.{Region}.amazonaws.com",[G]:n,[H]:l},[B]:h}]},p]},{[C]:w,[B]:f,rules:[{[C]:A,[B]:f,rules:[{[C]:v,endpoint:{url:"https://cloudfront.{Region}.api.aws",[G]:n,[H]:l},[B]:h}]},q]},{[C]:v,endpoint:r,[B]:h}]},{[C]:[{[D]:i,[E]:[m,"aws-cn"]}],[B]:f,rules:[{[C]:x,[B]:f,rules:[{[C]:y,[B]:f,rules:[{[C]:v,endpoint:{url:"https://cloudfront-fips.{Region}.api.amazonwebservices.com.cn",[G]:s,[H]:l},[B]:h}]},o]},{[C]:u,[B]:f,rules:[{[C]:z,[B]:f,rules:[{[C]:v,endpoint:{url:"https://cloudfront-fips.{Region}.amazonaws.com.cn",[G]:s,[H]:l},[B]:h}]},p]},{[C]:w,[B]:f,rules:[{[C]:A,[B]:f,rules:[{[C]:v,endpoint:{url:"https://cloudfront.{Region}.api.amazonwebservices.com.cn",[G]:s,[H]:l},[B]:h}]},q]},{[C]:v,endpoint:t,[B]:h}]},{[C]:x,[B]:f,rules:[{[C]:y,[B]:f,rules:[{[C]:v,endpoint:{url:"https://cloudfront-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[G]:l,[H]:l},[B]:h}]},o]},{[C]:u,[B]:f,rules:[{[C]:z,[B]:f,rules:[{[C]:v,[B]:f,rules:[{[C]:v,endpoint:{url:"https://cloudfront-fips.{Region}.{PartitionResult#dnsSuffix}",[G]:l,[H]:l},[B]:h}]}]},p]},{[C]:w,[B]:f,rules:[{[C]:A,[B]:f,rules:[{[C]:v,endpoint:{url:"https://cloudfront.{Region}.{PartitionResult#dualStackDnsSuffix}",[G]:l,[H]:l},[B]:h}]},q]},{[C]:v,[B]:f,rules:[{[C]:[{[D]:i,[E]:[j,"aws-global"]}],endpoint:r,[B]:h},{[C]:[{[D]:i,[E]:[j,"aws-cn-global"]}],endpoint:t,[B]:h},{[C]:v,endpoint:{url:"https://cloudfront.{Region}.{PartitionResult#dnsSuffix}",[G]:l,[H]:l},[B]:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
