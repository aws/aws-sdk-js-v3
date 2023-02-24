// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/shield.json */

const A="required",
B="type",
C="fn",
D="argv",
E="ref";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="stringEquals",
f="getAttr",
g="https://shield-fips.us-east-1.amazonaws.com",
h={[A]:false,[B]:"String"},
i={[A]:true,"default":false,[B]:"Boolean"},
j={[E]:"Region"},
k={[E]:"Endpoint"},
l={},
m={[E]:a},
n={"authSchemes":[{"name":"sigv4","signingName":"shield","signingRegion":"us-east-1"}]},
o={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[B]:c},
p={[c]:"FIPS is enabled but this partition does not support FIPS",[B]:c},
q={[c]:"DualStack is enabled but this partition does not support DualStack",[B]:c},
r={"url":"https://shield.us-east-1.amazonaws.com","properties":n,"headers":{}},
s=[k],
t=[{[C]:"booleanEquals",[D]:[{[E]:"UseFIPS"},true]}],
u=[{[C]:"booleanEquals",[D]:[{[E]:"UseDualStack"},true]}],
v=[{[C]:"booleanEquals",[D]:[{[E]:"UseFIPS"},true]},{[C]:"booleanEquals",[D]:[{[E]:"UseDualStack"},true]}],
w=[{[C]:"booleanEquals",[D]:[true,{[C]:f,[D]:[m,"supportsFIPS"]}]},{[C]:"booleanEquals",[D]:[true,{[C]:f,[D]:[m,"supportsDualStack"]}]}],
x=[{[C]:"booleanEquals",[D]:[true,{[C]:f,[D]:[m,"supportsFIPS"]}]}],
y=[{[C]:"booleanEquals",[D]:[true,{[C]:f,[D]:[m,"supportsDualStack"]}]}],
z=[{[C]:e,[D]:[j,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h},rules:[{conditions:[{[C]:"aws.partition",[D]:[j],assign:a}],[B]:b,rules:[{conditions:[{[C]:"isSet",[D]:s},{[C]:"parseURL",[D]:s,assign:"url"}],[B]:b,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[B]:c},{[B]:b,rules:[{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[B]:c},{endpoint:{url:k,properties:l,headers:l},[B]:d}]}]},{conditions:[{[C]:e,[D]:[{[C]:f,[D]:[m,"name"]},"aws"]}],[B]:b,rules:[{conditions:v,[B]:b,rules:[{conditions:w,[B]:b,rules:[{endpoint:{url:"https://shield-fips.{Region}.api.aws",properties:n,headers:l},[B]:d}]},o]},{conditions:t,[B]:b,rules:[{conditions:x,[B]:b,rules:[{endpoint:{url:g,properties:n,headers:l},[B]:d}]},p]},{conditions:u,[B]:b,rules:[{conditions:y,[B]:b,rules:[{endpoint:{url:"https://shield.{Region}.api.aws",properties:n,headers:l},[B]:d}]},q]},{endpoint:r,[B]:d}]},{conditions:v,[B]:b,rules:[{conditions:w,[B]:b,rules:[{endpoint:{url:"https://shield-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},[B]:d}]},o]},{conditions:t,[B]:b,rules:[{conditions:x,[B]:b,rules:[{[B]:b,rules:[{conditions:z,endpoint:{url:g,properties:l,headers:l},[B]:d},{endpoint:{url:"https://shield-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},[B]:d}]}]},p]},{conditions:u,[B]:b,rules:[{conditions:y,[B]:b,rules:[{endpoint:{url:"https://shield.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},[B]:d}]},q]},{[B]:b,rules:[{conditions:z,endpoint:r,[B]:d},{endpoint:{url:"https://shield.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},[B]:d}]}]}]};
export const ruleSet: RuleSetObject = _data;
