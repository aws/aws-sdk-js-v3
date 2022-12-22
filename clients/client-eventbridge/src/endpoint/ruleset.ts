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
const a=false,
b=true,
c="PartitionResult",
d="tree",
e="isSet",
f="booleanEquals",
g="endpoint",
h="error",
i="stringEquals",
j={[B]:false,[C]:"String"},
k={[B]:true,"default":false,[C]:"Boolean"},
l={[F]:"Region"},
m={[F]:"EndpointId"},
n={[F]:"UseFIPS"},
o={[D]:e,[E]:[{[F]:"Endpoint"}]},
p={[F]:"Endpoint"},
q={"authSchemes":[{"name":"sigv4a","signingRegionSet":["*"],"signingName":"events"}]},
r={},
s={[D]:f,[E]:[{[F]:"UseDualStack"},true]},
t={[D]:f,[E]:[true,{[D]:"getAttr",[E]:[{[F]:c},"supportsDualStack"]}]},
u={[h]:"DualStack is enabled but this partition does not support DualStack",[C]:h},
v={[D]:f,[E]:[n,true]},
w={[D]:f,[E]:[true,{[D]:"getAttr",[E]:[{[F]:c},"supportsFIPS"]}]},
x=[p],
y=[s],
z=[t],
A=[v];
const _data={version:"1.0",parameters:{Region:j,UseDualStack:k,UseFIPS:k,Endpoint:j,EndpointId:j},rules:[{conditions:[{[D]:"aws.partition",[E]:[l],assign:c}],[C]:d,rules:[{conditions:[{[D]:e,[E]:[m]}],[C]:d,rules:[{conditions:[{[D]:"isValidHostLabel",[E]:[m,b]}],[C]:d,rules:[{[C]:d,rules:[{conditions:[{[D]:f,[E]:[n,a]}],[C]:d,rules:[{[C]:d,rules:[{conditions:[o],endpoint:{url:p,properties:q,headers:r},[C]:g},{conditions:y,[C]:d,rules:[{conditions:z,[C]:d,rules:[{endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dualStackDnsSuffix}",properties:q,headers:r},[C]:g}]},u]},{endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dnsSuffix}",properties:q,headers:r},[C]:g}]}]},{error:"Invalid Configuration: FIPS is not supported with EventBridge multi-region endpoints.",[C]:h}]}]},{error:"EndpointId must be a valid host label.",[C]:h}]},{conditions:[o,{[D]:"parseURL",[E]:x,assign:"url"}],[C]:d,rules:[{conditions:A,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[C]:h},{[C]:d,rules:[{conditions:y,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[C]:h},{endpoint:{url:p,properties:r,headers:r},[C]:g}]}]},{conditions:[v,s],[C]:d,rules:[{conditions:[w,t],[C]:d,rules:[{endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},[C]:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[C]:h}]},{conditions:A,[C]:d,rules:[{conditions:[w],[C]:d,rules:[{[C]:d,rules:[{conditions:[{[D]:i,[E]:[l,"us-gov-west-1"]}],endpoint:{url:"https://events.us-gov-west-1.amazonaws.com",properties:r,headers:r},[C]:g},{conditions:[{[D]:i,[E]:[l,"us-gov-east-1"]}],endpoint:{url:"https://events.us-gov-east-1.amazonaws.com",properties:r,headers:r},[C]:g},{endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},[C]:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",[C]:h}]},{conditions:y,[C]:d,rules:[{conditions:z,[C]:d,rules:[{endpoint:{url:"https://events.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},[C]:g}]},u]},{endpoint:{url:"https://events.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},[C]:g}]}]};
export const ruleSet: RuleSetObject = _data;
