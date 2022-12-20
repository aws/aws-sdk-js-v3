// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/waf.json */

const E="type",
F="conditions",
G="fn",
H="argv",
I="ref",
J="properties",
K="headers";
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
k="aws",
l={[I]:"Region"},
m={[I]:"Endpoint"},
n={},
o={[I]:e},
p={"authSchemes":[{"name":"sigv4","signingName":"waf","signingRegion":"us-east-1"}]},
q={[F]:[],[g]:"FIPS and DualStack are enabled, but this partition does not support one or both",[E]:g},
r={"url":"https://waf-fips.amazonaws.com",[J]:p,[K]:{}},
s={[F]:[],[g]:"FIPS is enabled but this partition does not support FIPS",[E]:g},
t={[F]:[],[g]:"DualStack is enabled but this partition does not support DualStack",[E]:g},
u={"url":"https://waf.amazonaws.com",[J]:p,[K]:{}},
v=[m],
w=[{[G]:"booleanEquals",[H]:[{[I]:"UseFIPS"},true]}],
x=[],
y=[{[G]:"booleanEquals",[H]:[{[I]:"UseDualStack"},true]}],
z=[{[G]:"booleanEquals",[H]:[{[I]:"UseFIPS"},true]},{[G]:"booleanEquals",[H]:[{[I]:"UseDualStack"},true]}],
A=[{[G]:"booleanEquals",[H]:[true,{[G]:j,[H]:[o,"supportsFIPS"]}]},{[G]:"booleanEquals",[H]:[true,{[G]:j,[H]:[o,"supportsDualStack"]}]}],
B=[{[G]:"booleanEquals",[H]:[true,{[G]:j,[H]:[o,"supportsFIPS"]}]}],
C=[{[G]:"booleanEquals",[H]:[true,{[G]:j,[H]:[o,"supportsDualStack"]}]}],
D=[{[G]:i,[H]:[l,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",[E]:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",[E]:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",[E]:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",[E]:c}},rules:[{[F]:[{[G]:"aws.partition",[H]:[l],assign:e}],[E]:f,rules:[{[F]:[{[G]:"isSet",[H]:v},{[G]:"parseURL",[H]:v,assign:"url"}],[E]:f,rules:[{[F]:w,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[E]:g},{[F]:x,[E]:f,rules:[{[F]:y,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[E]:g},{[F]:x,endpoint:{url:m,[J]:n,[K]:n},[E]:h}]}]},{[F]:[{[G]:i,[H]:[{[G]:j,[H]:[o,"name"]},k]}],[E]:f,rules:[{[F]:z,[E]:f,rules:[{[F]:A,[E]:f,rules:[{[F]:x,endpoint:{url:"https://waf-fips.{Region}.api.aws",[J]:p,[K]:n},[E]:h}]},q]},{[F]:w,[E]:f,rules:[{[F]:B,[E]:f,rules:[{[F]:x,endpoint:r,[E]:h}]},s]},{[F]:y,[E]:f,rules:[{[F]:C,[E]:f,rules:[{[F]:x,endpoint:{url:"https://waf.{Region}.api.aws",[J]:p,[K]:n},[E]:h}]},t]},{[F]:x,endpoint:u,[E]:h}]},{[F]:z,[E]:f,rules:[{[F]:A,[E]:f,rules:[{[F]:x,endpoint:{url:"https://waf-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[J]:n,[K]:n},[E]:h}]},q]},{[F]:w,[E]:f,rules:[{[F]:B,[E]:f,rules:[{[F]:x,[E]:f,rules:[{[F]:[{[G]:i,[H]:[l,k]}],endpoint:r,[E]:h},{[F]:D,endpoint:r,[E]:h},{[F]:x,endpoint:{url:"https://waf-fips.{Region}.{PartitionResult#dnsSuffix}",[J]:n,[K]:n},[E]:h}]}]},s]},{[F]:y,[E]:f,rules:[{[F]:C,[E]:f,rules:[{[F]:x,endpoint:{url:"https://waf.{Region}.{PartitionResult#dualStackDnsSuffix}",[J]:n,[K]:n},[E]:h}]},t]},{[F]:x,[E]:f,rules:[{[F]:D,endpoint:u,[E]:h},{[F]:x,endpoint:{url:"https://waf.{Region}.{PartitionResult#dnsSuffix}",[J]:n,[K]:n},[E]:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
