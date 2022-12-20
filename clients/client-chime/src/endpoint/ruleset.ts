// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/chime.json */

const y="required",
z="type",
A="fn",
B="argv",
C="ref";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="stringEquals",
f="getAttr",
g={[y]:false,[z]:"String"},
h={[y]:true,"default":false,[z]:"Boolean"},
i={[C]:"Region"},
j={[C]:"Endpoint"},
k={},
l={[C]:a},
m={"authSchemes":[{"name":"sigv4","signingName":"chime","signingRegion":"us-east-1"}]},
n={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[z]:c},
o={[c]:"FIPS is enabled but this partition does not support FIPS",[z]:c},
p={[c]:"DualStack is enabled but this partition does not support DualStack",[z]:c},
q={"url":"https://chime.us-east-1.amazonaws.com","properties":m,"headers":{}},
r=[j],
s=[{[A]:"booleanEquals",[B]:[{[C]:"UseFIPS"},true]}],
t=[{[A]:"booleanEquals",[B]:[{[C]:"UseDualStack"},true]}],
u=[{[A]:"booleanEquals",[B]:[{[C]:"UseFIPS"},true]},{[A]:"booleanEquals",[B]:[{[C]:"UseDualStack"},true]}],
v=[{[A]:"booleanEquals",[B]:[true,{[A]:f,[B]:[l,"supportsFIPS"]}]},{[A]:"booleanEquals",[B]:[true,{[A]:f,[B]:[l,"supportsDualStack"]}]}],
w=[{[A]:"booleanEquals",[B]:[true,{[A]:f,[B]:[l,"supportsFIPS"]}]}],
x=[{[A]:"booleanEquals",[B]:[true,{[A]:f,[B]:[l,"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},rules:[{conditions:[{[A]:"aws.partition",[B]:[i],assign:a}],[z]:b,rules:[{conditions:[{[A]:"isSet",[B]:r},{[A]:"parseURL",[B]:r,assign:"url"}],[z]:b,rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[z]:c},{[z]:b,rules:[{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[z]:c},{endpoint:{url:j,properties:k,headers:k},[z]:d}]}]},{conditions:[{[A]:e,[B]:[{[A]:f,[B]:[l,"name"]},"aws"]}],[z]:b,rules:[{conditions:u,[z]:b,rules:[{conditions:v,[z]:b,rules:[{endpoint:{url:"https://chime-fips.{Region}.api.aws",properties:m,headers:k},[z]:d}]},n]},{conditions:s,[z]:b,rules:[{conditions:w,[z]:b,rules:[{endpoint:{url:"https://chime-fips.{Region}.amazonaws.com",properties:m,headers:k},[z]:d}]},o]},{conditions:t,[z]:b,rules:[{conditions:x,[z]:b,rules:[{endpoint:{url:"https://chime.{Region}.api.aws",properties:m,headers:k},[z]:d}]},p]},{endpoint:q,[z]:d}]},{conditions:u,[z]:b,rules:[{conditions:v,[z]:b,rules:[{endpoint:{url:"https://chime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},[z]:d}]},n]},{conditions:s,[z]:b,rules:[{conditions:w,[z]:b,rules:[{[z]:b,rules:[{endpoint:{url:"https://chime-fips.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},[z]:d}]}]},o]},{conditions:t,[z]:b,rules:[{conditions:x,[z]:b,rules:[{endpoint:{url:"https://chime.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},[z]:d}]},p]},{[z]:b,rules:[{conditions:[{[A]:e,[B]:[i,"aws-global"]}],endpoint:q,[z]:d},{endpoint:{url:"https://chime.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},[z]:d}]}]}]};
export const ruleSet: RuleSetObject = _data;
