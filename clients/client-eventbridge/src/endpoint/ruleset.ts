// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/eventbridge.json */

const B="required",
C="type",
D="fn",
E="argv",
F="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="isSet",
g="booleanEquals",
h="endpoint",
i="error",
j="stringEquals",
k={[B]:true,"default":false,[C]:"Boolean"},
l={[B]:false,[C]:c},
m={[F]:"Region"},
n={[F]:"EndpointId"},
o={[F]:"UseFIPS"},
p={[F]:"Endpoint"},
q={"authSchemes":[{"name":"sigv4a","signingName":"events","signingRegionSet":["*"]}]},
r={},
s={[D]:g,[E]:[{[F]:"UseDualStack"},true]},
t={[D]:g,[E]:[true,{[D]:"getAttr",[E]:[{[F]:d},"supportsDualStack"]}]},
u={[i]:"DualStack is enabled but this partition does not support DualStack",[C]:i},
v={[D]:g,[E]:[o,true]},
w={[D]:g,[E]:[true,{[D]:"getAttr",[E]:[{[F]:d},"supportsFIPS"]}]},
x=[{[D]:f,[E]:[p]}],
y=[s],
z=[t],
A=[v];
const _data={version:"1.0",parameters:{Region:{[B]:a,[C]:c},UseDualStack:k,UseFIPS:k,Endpoint:l,EndpointId:l},rules:[{conditions:[{[D]:"aws.partition",[E]:[m],assign:d}],[C]:e,rules:[{conditions:[{[D]:f,[E]:[n]}],[C]:e,rules:[{conditions:[{[D]:"isValidHostLabel",[E]:[n,a]}],[C]:e,rules:[{[C]:e,rules:[{conditions:[{[D]:g,[E]:[o,b]}],[C]:e,rules:[{[C]:e,rules:[{conditions:x,endpoint:{url:p,properties:q,headers:r},[C]:h},{conditions:y,[C]:e,rules:[{conditions:z,[C]:e,rules:[{endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dualStackDnsSuffix}",properties:q,headers:r},[C]:h}]},u]},{endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dnsSuffix}",properties:q,headers:r},[C]:h}]}]},{error:"Invalid Configuration: FIPS is not supported with EventBridge multi-region endpoints.",[C]:i}]}]},{error:"EndpointId must be a valid host label.",[C]:i}]},{conditions:x,[C]:e,rules:[{conditions:A,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[C]:i},{[C]:e,rules:[{conditions:y,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[C]:i},{endpoint:{url:p,properties:r,headers:r},[C]:h}]}]},{conditions:[v,s],[C]:e,rules:[{conditions:[w,t],[C]:e,rules:[{endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},[C]:h}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[C]:i}]},{conditions:A,[C]:e,rules:[{conditions:[w],[C]:e,rules:[{[C]:e,rules:[{conditions:[{[D]:j,[E]:[m,"us-gov-east-1"]}],endpoint:{url:"https://events.us-gov-east-1.amazonaws.com",properties:r,headers:r},[C]:h},{conditions:[{[D]:j,[E]:[m,"us-gov-west-1"]}],endpoint:{url:"https://events.us-gov-west-1.amazonaws.com",properties:r,headers:r},[C]:h},{endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},[C]:h}]}]},{error:"FIPS is enabled but this partition does not support FIPS",[C]:i}]},{conditions:y,[C]:e,rules:[{conditions:z,[C]:e,rules:[{endpoint:{url:"https://events.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},[C]:h}]},u]},{endpoint:{url:"https://events.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},[C]:h}]}]};
export const ruleSet: RuleSetObject = _data;
