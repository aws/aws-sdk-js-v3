// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/billingconductor.json */

const y="type",
z="fn",
A="argv",
B="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="stringEquals",
i="getAttr",
j={"required":true,"default":false,[y]:"Boolean"},
k={[B]:"Region"},
l={[B]:"Endpoint"},
m={},
n={[B]:d},
o={[f]:"FIPS and DualStack are enabled, but this partition does not support one or both",[y]:f},
p={[f]:"FIPS is enabled but this partition does not support FIPS",[y]:f},
q={[f]:"DualStack is enabled but this partition does not support DualStack",[y]:f},
r={"url":"https://billingconductor.us-east-1.amazonaws.com","properties":{"authSchemes":[{"name":"sigv4","signingRegion":"us-east-1","signingName":"billingconductor"}]},"headers":{}},
s=[{[z]:"booleanEquals",[A]:[{[B]:"UseFIPS"},true]}],
t=[{[z]:"booleanEquals",[A]:[{[B]:"UseDualStack"},true]}],
u=[{[z]:"booleanEquals",[A]:[{[B]:"UseFIPS"},true]},{[z]:"booleanEquals",[A]:[{[B]:"UseDualStack"},true]}],
v=[{[z]:"booleanEquals",[A]:[true,{[z]:i,[A]:[n,"supportsFIPS"]}]},{[z]:"booleanEquals",[A]:[true,{[z]:i,[A]:[n,"supportsDualStack"]}]}],
w=[{[z]:"booleanEquals",[A]:[true,{[z]:i,[A]:[n,"supportsFIPS"]}]}],
x=[{[z]:"booleanEquals",[A]:[true,{[z]:i,[A]:[n,"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:{required:a,[y]:c},UseDualStack:j,UseFIPS:j,Endpoint:{required:b,[y]:c}},rules:[{conditions:[{[z]:"aws.partition",[A]:[k],assign:d}],[y]:e,rules:[{conditions:[{[z]:"isSet",[A]:[l]}],[y]:e,rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[y]:f},{[y]:e,rules:[{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[y]:f},{endpoint:{url:l,properties:m,headers:m},[y]:g}]}]},{conditions:[{[z]:h,[A]:[{[z]:i,[A]:[n,"name"]},"aws"]}],[y]:e,rules:[{conditions:u,[y]:e,rules:[{conditions:v,[y]:e,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.api.aws",properties:m,headers:m},[y]:g}]},o]},{conditions:s,[y]:e,rules:[{conditions:w,[y]:e,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.amazonaws.com",properties:m,headers:m},[y]:g}]},p]},{conditions:t,[y]:e,rules:[{conditions:x,[y]:e,rules:[{endpoint:{url:"https://billingconductor.{Region}.api.aws",properties:m,headers:m},[y]:g}]},q]},{endpoint:r,[y]:g}]},{conditions:u,[y]:e,rules:[{conditions:v,[y]:e,rules:[{[y]:e,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},[y]:g}]}]},o]},{conditions:s,[y]:e,rules:[{conditions:w,[y]:e,rules:[{[y]:e,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},[y]:g}]}]},p]},{conditions:t,[y]:e,rules:[{conditions:x,[y]:e,rules:[{[y]:e,rules:[{endpoint:{url:"https://billingconductor.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},[y]:g}]}]},q]},{[y]:e,rules:[{conditions:[{[z]:h,[A]:[k,"aws-global"]}],endpoint:r,[y]:g},{endpoint:{url:"https://billingconductor.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},[y]:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
