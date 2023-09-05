// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

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
c="isSet",
d="tree",
e="booleanEquals",
f="endpoint",
g="error",
h="stringEquals",
i={[B]:false,[C]:"String"},
j={[B]:true,"default":false,[C]:"Boolean"},
k={[F]:"EndpointId"},
l={[D]:c,[E]:[{[F]:"Region"}]},
m={[F]:"Region"},
n={[D]:"aws.partition",[E]:[m],"assign":"PartitionResult"},
o={[F]:"UseFIPS"},
p={[F]:"Endpoint"},
q={"authSchemes":[{"name":"sigv4a","signingName":"events","signingRegionSet":["*"]}]},
r={},
s={[D]:e,[E]:[{[F]:"UseDualStack"},true]},
t={[D]:e,[E]:[true,{[D]:"getAttr",[E]:[{[F]:"PartitionResult"},"supportsDualStack"]}]},
u={[g]:"DualStack is enabled but this partition does not support DualStack",[C]:g},
v={[D]:e,[E]:[o,true]},
w={[D]:e,[E]:[true,{[D]:"getAttr",[E]:[{[F]:"PartitionResult"},"supportsFIPS"]}]},
x=[{[D]:c,[E]:[p]}],
y=[s],
z=[t],
A=[v];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i,EndpointId:i},rules:[{conditions:[{[D]:c,[E]:[k]},l,n],[C]:d,rules:[{conditions:[{[D]:"isValidHostLabel",[E]:[k,b]}],[C]:d,rules:[{conditions:[{[D]:e,[E]:[o,a]}],[C]:d,rules:[{conditions:x,endpoint:{url:p,properties:q,headers:r},[C]:f},{conditions:y,[C]:d,rules:[{conditions:z,[C]:d,rules:[{endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dualStackDnsSuffix}",properties:q,headers:r},[C]:f}]},u]},{endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dnsSuffix}",properties:q,headers:r},[C]:f}]},{error:"Invalid Configuration: FIPS is not supported with EventBridge multi-region endpoints.",[C]:g}]},{error:"EndpointId must be a valid host label.",[C]:g}]},{conditions:x,[C]:d,rules:[{conditions:A,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[C]:g},{conditions:y,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[C]:g},{endpoint:{url:p,properties:r,headers:r},[C]:f}]},{conditions:[l],[C]:d,rules:[{conditions:[n],[C]:d,rules:[{conditions:[v,s],[C]:d,rules:[{conditions:[w,t],[C]:d,rules:[{endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},[C]:f}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[C]:g}]},{conditions:A,[C]:d,rules:[{conditions:[w],[C]:d,rules:[{conditions:[{[D]:h,[E]:[m,"us-gov-east-1"]}],endpoint:{url:"https://events.us-gov-east-1.amazonaws.com",properties:r,headers:r},[C]:f},{conditions:[{[D]:h,[E]:[m,"us-gov-west-1"]}],endpoint:{url:"https://events.us-gov-west-1.amazonaws.com",properties:r,headers:r},[C]:f},{endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},[C]:f}]},{error:"FIPS is enabled but this partition does not support FIPS",[C]:g}]},{conditions:y,[C]:d,rules:[{conditions:z,[C]:d,rules:[{endpoint:{url:"https://events.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},[C]:f}]},u]},{endpoint:{url:"https://events.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},[C]:f}]}]},{error:"Invalid Configuration: Missing Region",[C]:g}]};
export const ruleSet: RuleSetObject = _data;
