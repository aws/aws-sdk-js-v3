// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/shield.json */

const D="type",
E="conditions",
F="fn",
G="argv",
H="ref";
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
k="https://shield-fips.us-east-1.amazonaws.com",
l={[H]:"Region"},
m={[H]:"Endpoint"},
n={},
o={[H]:e},
p={"authSchemes":[{"name":"sigv4","signingName":"shield","signingRegion":"us-east-1"}]},
q={[E]:[],[g]:"FIPS and DualStack are enabled, but this partition does not support one or both",[D]:g},
r={[E]:[],[g]:"FIPS is enabled but this partition does not support FIPS",[D]:g},
s={[E]:[],[g]:"DualStack is enabled but this partition does not support DualStack",[D]:g},
t={"url":"https://shield.us-east-1.amazonaws.com","properties":p,"headers":{}},
u=[m],
v=[{[F]:"booleanEquals",[G]:[{[H]:"UseFIPS"},true]}],
w=[],
x=[{[F]:"booleanEquals",[G]:[{[H]:"UseDualStack"},true]}],
y=[{[F]:"booleanEquals",[G]:[{[H]:"UseFIPS"},true]},{[F]:"booleanEquals",[G]:[{[H]:"UseDualStack"},true]}],
z=[{[F]:"booleanEquals",[G]:[true,{[F]:j,[G]:[o,"supportsFIPS"]}]},{[F]:"booleanEquals",[G]:[true,{[F]:j,[G]:[o,"supportsDualStack"]}]}],
A=[{[F]:"booleanEquals",[G]:[true,{[F]:j,[G]:[o,"supportsFIPS"]}]}],
B=[{[F]:"booleanEquals",[G]:[true,{[F]:j,[G]:[o,"supportsDualStack"]}]}],
C=[{[F]:i,[G]:[l,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",[D]:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",[D]:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",[D]:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",[D]:c}},rules:[{[E]:[{[F]:"aws.partition",[G]:[l],assign:e}],[D]:f,rules:[{[E]:[{[F]:"isSet",[G]:u},{[F]:"parseURL",[G]:u,assign:"url"}],[D]:f,rules:[{[E]:v,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[D]:g},{[E]:w,[D]:f,rules:[{[E]:x,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[D]:g},{[E]:w,endpoint:{url:m,properties:n,headers:n},[D]:h}]}]},{[E]:[{[F]:i,[G]:[{[F]:j,[G]:[o,"name"]},"aws"]}],[D]:f,rules:[{[E]:y,[D]:f,rules:[{[E]:z,[D]:f,rules:[{[E]:w,endpoint:{url:"https://shield-fips.{Region}.api.aws",properties:p,headers:n},[D]:h}]},q]},{[E]:v,[D]:f,rules:[{[E]:A,[D]:f,rules:[{[E]:w,endpoint:{url:k,properties:p,headers:n},[D]:h}]},r]},{[E]:x,[D]:f,rules:[{[E]:B,[D]:f,rules:[{[E]:w,endpoint:{url:"https://shield.{Region}.api.aws",properties:p,headers:n},[D]:h}]},s]},{[E]:w,endpoint:t,[D]:h}]},{[E]:y,[D]:f,rules:[{[E]:z,[D]:f,rules:[{[E]:w,endpoint:{url:"https://shield-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},[D]:h}]},q]},{[E]:v,[D]:f,rules:[{[E]:A,[D]:f,rules:[{[E]:w,[D]:f,rules:[{[E]:C,endpoint:{url:k,properties:n,headers:n},[D]:h},{[E]:w,endpoint:{url:"https://shield-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},[D]:h}]}]},r]},{[E]:x,[D]:f,rules:[{[E]:B,[D]:f,rules:[{[E]:w,endpoint:{url:"https://shield.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},[D]:h}]},s]},{[E]:w,[D]:f,rules:[{[E]:C,endpoint:t,[D]:h},{[E]:w,endpoint:{url:"https://shield.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},[D]:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
