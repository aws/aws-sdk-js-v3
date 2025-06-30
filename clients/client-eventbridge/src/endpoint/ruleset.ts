// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/eventbridge.json */

const E="required",
F="type",
G="fn",
H="argv",
I="ref";
const a=false,
b=true,
c="isSet",
d="stringEquals",
e="getAttr",
f="booleanEquals",
g="endpoint",
h="tree",
i="error",
j={[E]:false,[F]:"String"},
k={[E]:true,"default":false,[F]:"Boolean"},
l={[I]:"Endpoint"},
m={[G]:c,[H]:[{[I]:"Region"}]},
n={[I]:"Region"},
o={[G]:"aws.partition",[H]:[n],"assign":"PartitionResult"},
p={[I]:"PartitionResult"},
q={[G]:f,[H]:[{[I]:"UseFIPS"},true]},
r={[I]:"UseFIPS"},
s={[G]:f,[H]:[{[I]:"UseDualStack"},true]},
t={"url":"https://events.{Region}.{PartitionResult#dualStackDnsSuffix}","properties":{},"headers":{}},
u={},
v={[I]:"EndpointId"},
w={"authSchemes":[{"name":"sigv4a","signingName":"events","signingRegionSet":["*"]}]},
x={[G]:f,[H]:[true,{[G]:e,[H]:[p,"supportsDualStack"]}]},
y={[i]:"DualStack is enabled but this partition does not support DualStack",[F]:i},
z={[G]:e,[H]:[p,"supportsFIPS"]},
A=[{[G]:c,[H]:[l]}],
B=[s],
C=[x],
D=[q];
const _data={version:"1.0",parameters:{Region:j,UseDualStack:k,UseFIPS:k,Endpoint:j,EndpointId:j},rules:[{conditions:[{[G]:"not",[H]:A},m,o,{[G]:d,[H]:[{[G]:e,[H]:[p,"name"]},"aws-us-gov"]},q,s],endpoint:t,[F]:g},{conditions:[{[G]:c,[H]:[v]},m,o],rules:[{conditions:[{[G]:"isValidHostLabel",[H]:[v,b]}],rules:[{conditions:[{[G]:f,[H]:[r,a]}],rules:[{conditions:A,endpoint:{url:l,properties:w,headers:u},[F]:g},{conditions:B,rules:[{conditions:C,rules:[{endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dualStackDnsSuffix}",properties:w,headers:u},[F]:g}],[F]:h},y],[F]:h},{endpoint:{url:"https://{EndpointId}.endpoint.events.{PartitionResult#dnsSuffix}",properties:w,headers:u},[F]:g}],[F]:h},{error:"Invalid Configuration: FIPS is not supported with EventBridge multi-region endpoints.",[F]:i}],[F]:h},{error:"EndpointId must be a valid host label.",[F]:i}],[F]:h},{conditions:A,rules:[{conditions:D,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[F]:i},{conditions:B,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[F]:i},{endpoint:{url:l,properties:u,headers:u},[F]:g}],[F]:h},{conditions:[m],rules:[{conditions:[o],rules:[{conditions:[q,s],rules:[{conditions:[{[G]:f,[H]:[b,z]},x],rules:[{endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:u,headers:u},[F]:g}],[F]:h},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[F]:i}],[F]:h},{conditions:D,rules:[{conditions:[{[G]:f,[H]:[z,b]}],rules:[{conditions:[{[G]:d,[H]:[n,"us-gov-east-1"]}],endpoint:{url:"https://events.us-gov-east-1.amazonaws.com",properties:u,headers:u},[F]:g},{conditions:[{[G]:d,[H]:[n,"us-gov-west-1"]}],endpoint:{url:"https://events.us-gov-west-1.amazonaws.com",properties:u,headers:u},[F]:g},{endpoint:{url:"https://events-fips.{Region}.{PartitionResult#dnsSuffix}",properties:u,headers:u},[F]:g}],[F]:h},{error:"FIPS is enabled but this partition does not support FIPS",[F]:i}],[F]:h},{conditions:B,rules:[{conditions:C,rules:[{endpoint:t,[F]:g}],[F]:h},y],[F]:h},{endpoint:{url:"https://events.{Region}.{PartitionResult#dnsSuffix}",properties:u,headers:u},[F]:g}],[F]:h}],[F]:h},{error:"Invalid Configuration: Missing Region",[F]:i}]};
export const ruleSet: RuleSetObject = _data;
