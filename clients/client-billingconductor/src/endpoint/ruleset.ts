// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/billingconductor.json */

const A="type",
B="fn",
C="argv",
D="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="stringEquals",
i="getAttr",
j={"required":true,"default":false,[A]:"Boolean"},
k={[D]:"Region"},
l={[D]:"Endpoint"},
m={},
n={[D]:d},
o={"authSchemes":[{"name":"sigv4","signingRegion":"us-east-1","signingName":"billingconductor"}]},
p={[f]:"FIPS and DualStack are enabled, but this partition does not support one or both",[A]:f},
q={[f]:"FIPS is enabled but this partition does not support FIPS",[A]:f},
r={[f]:"DualStack is enabled but this partition does not support DualStack",[A]:f},
s={"url":"https://billingconductor.us-east-1.amazonaws.com","properties":o,"headers":{}},
t=[l],
u=[{[B]:"booleanEquals",[C]:[{[D]:"UseFIPS"},true]}],
v=[{[B]:"booleanEquals",[C]:[{[D]:"UseDualStack"},true]}],
w=[{[B]:"booleanEquals",[C]:[{[D]:"UseFIPS"},true]},{[B]:"booleanEquals",[C]:[{[D]:"UseDualStack"},true]}],
x=[{[B]:"booleanEquals",[C]:[true,{[B]:i,[C]:[n,"supportsFIPS"]}]},{[B]:"booleanEquals",[C]:[true,{[B]:i,[C]:[n,"supportsDualStack"]}]}],
y=[{[B]:"booleanEquals",[C]:[true,{[B]:i,[C]:[n,"supportsFIPS"]}]}],
z=[{[B]:"booleanEquals",[C]:[true,{[B]:i,[C]:[n,"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:{required:a,[A]:c},UseDualStack:j,UseFIPS:j,Endpoint:{required:b,[A]:c}},rules:[{conditions:[{[B]:"aws.partition",[C]:[k],assign:d}],[A]:e,rules:[{conditions:[{[B]:"isSet",[C]:t},{[B]:"parseURL",[C]:t,assign:"url"}],[A]:e,rules:[{conditions:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[A]:f},{[A]:e,rules:[{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[A]:f},{endpoint:{url:l,properties:m,headers:m},[A]:g}]}]},{conditions:[{[B]:h,[C]:[{[B]:i,[C]:[n,"name"]},"aws"]}],[A]:e,rules:[{conditions:w,[A]:e,rules:[{conditions:x,[A]:e,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.api.aws",properties:o,headers:m},[A]:g}]},p]},{conditions:u,[A]:e,rules:[{conditions:y,[A]:e,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.amazonaws.com",properties:o,headers:m},[A]:g}]},q]},{conditions:v,[A]:e,rules:[{conditions:z,[A]:e,rules:[{endpoint:{url:"https://billingconductor.{Region}.api.aws",properties:o,headers:m},[A]:g}]},r]},{endpoint:s,[A]:g}]},{conditions:w,[A]:e,rules:[{conditions:x,[A]:e,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},[A]:g}]},p]},{conditions:u,[A]:e,rules:[{conditions:y,[A]:e,rules:[{[A]:e,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},[A]:g}]}]},q]},{conditions:v,[A]:e,rules:[{conditions:z,[A]:e,rules:[{endpoint:{url:"https://billingconductor.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},[A]:g}]},r]},{[A]:e,rules:[{conditions:[{[B]:h,[C]:[k,"aws-global"]}],endpoint:s,[A]:g},{endpoint:{url:"https://billingconductor.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},[A]:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
