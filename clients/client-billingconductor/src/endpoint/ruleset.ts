// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/billingconductor.json */

const y="required",
z="type",
A="fn",
B="argv",
C="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g="getAttr",
h={[y]:false,[z]:"String"},
i={[y]:true,"default":false,[z]:"Boolean"},
j={[C]:"Endpoint"},
k={},
l={[C]:"Region"},
m={[C]:e},
n={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[z]:c},
o={[c]:"FIPS is enabled but this partition does not support FIPS",[z]:c},
p={[c]:"DualStack is enabled but this partition does not support DualStack",[z]:c},
q={"url":"https://billingconductor.us-east-1.amazonaws.com","properties":{"authSchemes":[{"name":"sigv4","signingName":"billingconductor","signingRegion":"us-east-1"}]},"headers":{}},
r=[{[A]:"booleanEquals",[B]:[{[C]:"UseFIPS"},true]}],
s=[{[A]:"booleanEquals",[B]:[{[C]:"UseDualStack"},true]}],
t=[l],
u=[{[A]:"booleanEquals",[B]:[{[C]:"UseFIPS"},true]},{[A]:"booleanEquals",[B]:[{[C]:"UseDualStack"},true]}],
v=[{[A]:"booleanEquals",[B]:[true,{[A]:g,[B]:[m,"supportsFIPS"]}]},{[A]:"booleanEquals",[B]:[true,{[A]:g,[B]:[m,"supportsDualStack"]}]}],
w=[{[A]:"booleanEquals",[B]:[true,{[A]:g,[B]:[m,"supportsFIPS"]}]}],
x=[{[A]:"booleanEquals",[B]:[true,{[A]:g,[B]:[m,"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h},rules:[{conditions:[{[A]:a,[B]:[j]}],[z]:b,rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[z]:c},{[z]:b,rules:[{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[z]:c},{endpoint:{url:j,properties:k,headers:k},[z]:d}]}]},{[z]:b,rules:[{conditions:[{[A]:a,[B]:t}],[z]:b,rules:[{conditions:[{[A]:"aws.partition",[B]:t,assign:e}],[z]:b,rules:[{conditions:[{[A]:f,[B]:[{[A]:g,[B]:[m,"name"]},"aws"]}],[z]:b,rules:[{conditions:u,[z]:b,rules:[{conditions:v,[z]:b,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.api.aws",properties:k,headers:k},[z]:d}]},n]},{conditions:r,[z]:b,rules:[{conditions:w,[z]:b,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.amazonaws.com",properties:k,headers:k},[z]:d}]},o]},{conditions:s,[z]:b,rules:[{conditions:x,[z]:b,rules:[{endpoint:{url:"https://billingconductor.{Region}.api.aws",properties:k,headers:k},[z]:d}]},p]},{endpoint:q,[z]:d}]},{conditions:u,[z]:b,rules:[{conditions:v,[z]:b,rules:[{[z]:b,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},[z]:d}]}]},n]},{conditions:r,[z]:b,rules:[{conditions:w,[z]:b,rules:[{[z]:b,rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},[z]:d}]}]},o]},{conditions:s,[z]:b,rules:[{conditions:x,[z]:b,rules:[{[z]:b,rules:[{endpoint:{url:"https://billingconductor.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},[z]:d}]}]},p]},{[z]:b,rules:[{conditions:[{[A]:f,[B]:[l,"aws-global"]}],endpoint:q,[z]:d},{endpoint:{url:"https://billingconductor.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},[z]:d}]}]}]},{error:"Invalid Configuration: Missing Region",[z]:c}]}]};
export const ruleSet: RuleSetObject = _data;
