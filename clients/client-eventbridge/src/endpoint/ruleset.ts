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
d="booleanEquals",
e="endpoint",
f="tree",
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
s={[D]:d,[E]:[{[F]:"UseDualStack"},true]},
t={[D]:d,[E]:[true,{[D]:"getAttr",[E]:[{[F]:"PartitionResult"},"supportsDualStack"]}]},
u={[g]:"DualStack is enabled but this partition does not support DualStack",[C]:g},
v={[D]:d,[E]:[o,true]},
w={[D]:"getAttr",[E]:[{[F]:"PartitionResult"},"supportsFIPS"]},
x=[{[D]:c,[E]:[p]}],
y=[s],
z=[t],
A=[v];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i,EndpointId:i},rules:[{conditions:[{[D]:c,[E]:[k]},l,n],rules:[{conditions:[{[D]:"isValidHostLabel",[E]:[k,b]}],rules:[{conditions:[{[D]:d,[E]:[o,a]}],rules:[{conditions:x,endpoint:{url:p,properties:q,headers:r},[C]:e},{conditions:y,rules:[{conditions:z,rules:[{endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dualStackDnsSuffix}",properties:q,headers:r},[C]:e}],[C]:f},u],[C]:f},{endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dnsSuffix}",properties:q,headers:r},[C]:e}],[C]:f},{error:"Invalid Configuration: FIPS is not supported with EventBridge multi-region endpoints.",[C]:g}],[C]:f},{error:"EndpointId must be a valid host label.",[C]:g}],[C]:f},{conditions:x,rules:[{conditions:A,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[C]:g},{conditions:y,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[C]:g},{endpoint:{url:p,properties:r,headers:r},[C]:e}],[C]:f},{conditions:[l],rules:[{conditions:[n],rules:[{conditions:[v,s],rules:[{conditions:[{[D]:d,[E]:[b,w]},t],rules:[{endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},[C]:e}],[C]:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[C]:g}],[C]:f},{conditions:A,rules:[{conditions:[{[D]:d,[E]:[w,b]}],rules:[{conditions:[{[D]:h,[E]:[m,"us-gov-east-1"]}],endpoint:{url:"https://events.us-gov-east-1.amazonaws.com",properties:r,headers:r},[C]:e},{conditions:[{[D]:h,[E]:[m,"us-gov-west-1"]}],endpoint:{url:"https://events.us-gov-west-1.amazonaws.com",properties:r,headers:r},[C]:e},{endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},[C]:e}],[C]:f},{error:"FIPS is enabled but this partition does not support FIPS",[C]:g}],[C]:f},{conditions:y,rules:[{conditions:z,rules:[{endpoint:{url:"https://events.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},[C]:e}],[C]:f},u],[C]:f},{endpoint:{url:"https://events.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},[C]:e}],[C]:f}],[C]:f},{error:"Invalid Configuration: Missing Region",[C]:g}]};
export const ruleSet: RuleSetObject = _data;
