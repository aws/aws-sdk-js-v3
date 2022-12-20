// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/chime.json */

const B="type",
C="conditions",
D="fn",
E="argv",
F="ref";
const a=false,
b=true,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="stringEquals",
j="getAttr",
k={[F]:"Region"},
l={[F]:"Endpoint"},
m={},
n={[F]:e},
o={"authSchemes":[{"name":"sigv4","signingName":"chime","signingRegion":"us-east-1"}]},
p={[C]:[],[g]:"FIPS and DualStack are enabled, but this partition does not support one or both",[B]:g},
q={[C]:[],[g]:"FIPS is enabled but this partition does not support FIPS",[B]:g},
r={[C]:[],[g]:"DualStack is enabled but this partition does not support DualStack",[B]:g},
s={"url":"https://chime.us-east-1.amazonaws.com","properties":o,"headers":{}},
t=[l],
u=[{[D]:"booleanEquals",[E]:[{[F]:"UseFIPS"},true]}],
v=[],
w=[{[D]:"booleanEquals",[E]:[{[F]:"UseDualStack"},true]}],
x=[{[D]:"booleanEquals",[E]:[{[F]:"UseFIPS"},true]},{[D]:"booleanEquals",[E]:[{[F]:"UseDualStack"},true]}],
y=[{[D]:"booleanEquals",[E]:[true,{[D]:j,[E]:[n,"supportsFIPS"]}]},{[D]:"booleanEquals",[E]:[true,{[D]:j,[E]:[n,"supportsDualStack"]}]}],
z=[{[D]:"booleanEquals",[E]:[true,{[D]:j,[E]:[n,"supportsFIPS"]}]}],
A=[{[D]:"booleanEquals",[E]:[true,{[D]:j,[E]:[n,"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",[B]:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",[B]:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",[B]:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",[B]:c}},rules:[{[C]:[{[D]:"aws.partition",[E]:[k],assign:e}],[B]:f,rules:[{[C]:[{[D]:"isSet",[E]:t},{[D]:"parseURL",[E]:t,assign:"url"}],[B]:f,rules:[{[C]:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[B]:g},{[C]:v,[B]:f,rules:[{[C]:w,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[B]:g},{[C]:v,endpoint:{url:l,properties:m,headers:m},[B]:h}]}]},{[C]:[{[D]:i,[E]:[{[D]:j,[E]:[n,"name"]},"aws"]}],[B]:f,rules:[{[C]:x,[B]:f,rules:[{[C]:y,[B]:f,rules:[{[C]:v,endpoint:{url:"https://chime-fips.{Region}.api.aws",properties:o,headers:m},[B]:h}]},p]},{[C]:u,[B]:f,rules:[{[C]:z,[B]:f,rules:[{[C]:v,endpoint:{url:"https://chime-fips.{Region}.amazonaws.com",properties:o,headers:m},[B]:h}]},q]},{[C]:w,[B]:f,rules:[{[C]:A,[B]:f,rules:[{[C]:v,endpoint:{url:"https://chime.{Region}.api.aws",properties:o,headers:m},[B]:h}]},r]},{[C]:v,endpoint:s,[B]:h}]},{[C]:x,[B]:f,rules:[{[C]:y,[B]:f,rules:[{[C]:v,endpoint:{url:"https://chime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},[B]:h}]},p]},{[C]:u,[B]:f,rules:[{[C]:z,[B]:f,rules:[{[C]:v,[B]:f,rules:[{[C]:v,endpoint:{url:"https://chime-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},[B]:h}]}]},q]},{[C]:w,[B]:f,rules:[{[C]:A,[B]:f,rules:[{[C]:v,endpoint:{url:"https://chime.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},[B]:h}]},r]},{[C]:v,[B]:f,rules:[{[C]:[{[D]:i,[E]:[k,"aws-global"]}],endpoint:s,[B]:h},{[C]:v,endpoint:{url:"https://chime.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},[B]:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
