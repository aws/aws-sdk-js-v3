// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/eventbridge.json */

const C="fn",
D="argv",
E="ref";
const a=false,
b=true,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="isSet",
h="booleanEquals",
i="endpoint",
j="error",
k="stringEquals",
l={[E]:"Region"},
m={[E]:"EndpointId"},
n={[E]:"UseFIPS"},
o={[C]:g,[D]:[{[E]:"Endpoint"}]},
p={[E]:"Endpoint"},
q={"authSchemes":[{"name":"sigv4a","signingRegionSet":["*"],"signingName":"events"}]},
r={},
s={[C]:h,[D]:[{[E]:"UseDualStack"},true]},
t={[C]:h,[D]:[true,{[C]:"getAttr",[D]:[{[E]:e},"supportsDualStack"]}]},
u={"conditions":[],[j]:"DualStack is enabled but this partition does not support DualStack","type":j},
v={[C]:h,[D]:[n,true]},
w={[C]:h,[D]:[true,{[C]:"getAttr",[D]:[{[E]:e},"supportsFIPS"]}]},
x=[],
y=[p],
z=[s],
A=[t],
B=[v];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",type:c},EndpointId:{required:a,documentation:"Operation parameter for EndpointId",type:c}},rules:[{conditions:[{[C]:"aws.partition",[D]:[l],assign:e}],type:f,rules:[{conditions:[{[C]:g,[D]:[m]}],type:f,rules:[{conditions:[{[C]:"isValidHostLabel",[D]:[m,b]}],type:f,rules:[{conditions:x,type:f,rules:[{conditions:[{[C]:h,[D]:[n,a]}],type:f,rules:[{conditions:x,type:f,rules:[{conditions:[o],endpoint:{url:p,properties:q,headers:r},type:i},{conditions:z,type:f,rules:[{conditions:A,type:f,rules:[{conditions:x,endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dualStackDnsSuffix}",properties:q,headers:r},type:i}]},u]},{conditions:x,endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dnsSuffix}",properties:q,headers:r},type:i}]}]},{conditions:x,error:"Invalid Configuration: FIPS is not supported with EventBridge multi-region endpoints.",type:j}]}]},{conditions:x,error:"EndpointId must be a valid host label.",type:j}]},{conditions:[o,{[C]:"parseURL",[D]:y,assign:"url"}],type:f,rules:[{conditions:B,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:j},{conditions:x,type:f,rules:[{conditions:z,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:j},{conditions:x,endpoint:{url:p,properties:r,headers:r},type:i}]}]},{conditions:[v,s],type:f,rules:[{conditions:[w,t],type:f,rules:[{conditions:x,endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},type:i}]},{conditions:x,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:j}]},{conditions:B,type:f,rules:[{conditions:[w],type:f,rules:[{conditions:x,type:f,rules:[{conditions:[{[C]:k,[D]:[l,"us-gov-west-1"]}],endpoint:{url:"https://events.us-gov-west-1.amazonaws.com",properties:r,headers:r},type:i},{conditions:[{[C]:k,[D]:[l,"us-gov-east-1"]}],endpoint:{url:"https://events.us-gov-east-1.amazonaws.com",properties:r,headers:r},type:i},{conditions:x,endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},type:i}]}]},{conditions:x,error:"FIPS is enabled but this partition does not support FIPS",type:j}]},{conditions:z,type:f,rules:[{conditions:A,type:f,rules:[{conditions:x,endpoint:{url:"https://events.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},type:i}]},u]},{conditions:x,endpoint:{url:"https://events.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},type:i}]}]};
export const ruleSet: RuleSetObject = _data;
