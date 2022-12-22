// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/health.json */

const z="required",
A="type",
B="fn",
C="argv",
D="ref",
E="properties",
F="headers",
G="authSchemes",
H="signingName",
I="signingRegion";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="stringEquals",
f={[z]:false,[A]:"String"},
g={[z]:true,"default":false,[A]:"Boolean"},
h={[D]:"Region"},
i={[D]:"Endpoint"},
j={},
k={[B]:"getAttr",[C]:[{[D]:a},"name"]},
l={[G]:[{"name":"sigv4",[H]:"health",[I]:"us-east-1"}]},
m={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[A]:c},
n={[c]:"FIPS is enabled but this partition does not support FIPS",[A]:c},
o={[c]:"DualStack is enabled but this partition does not support DualStack",[A]:c},
p={"url":"https://global.health.amazonaws.com",[E]:l,[F]:{}},
q={[G]:[{"name":"sigv4",[H]:"health",[I]:"cn-northwest-1"}]},
r={"url":"https://global.health.amazonaws.com.cn",[E]:q,[F]:{}},
s=[i],
t=[{[B]:"booleanEquals",[C]:[{[D]:"UseFIPS"},true]}],
u=[{[B]:"booleanEquals",[C]:[{[D]:"UseDualStack"},true]}],
v=[{[B]:"booleanEquals",[C]:[{[D]:"UseFIPS"},true]},{[B]:"booleanEquals",[C]:[{[D]:"UseDualStack"},true]}],
w=[{[B]:"booleanEquals",[C]:[true,{[B]:"getAttr",[C]:[{[D]:a},"supportsFIPS"]}]},{[B]:"booleanEquals",[C]:[true,{[B]:"getAttr",[C]:[{[D]:a},"supportsDualStack"]}]}],
x=[{[B]:"booleanEquals",[C]:[true,{[B]:"getAttr",[C]:[{[D]:a},"supportsFIPS"]}]}],
y=[{[B]:"booleanEquals",[C]:[true,{[B]:"getAttr",[C]:[{[D]:a},"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:f,UseDualStack:g,UseFIPS:g,Endpoint:f},rules:[{conditions:[{[B]:"aws.partition",[C]:[h],assign:a}],[A]:b,rules:[{conditions:[{[B]:"isSet",[C]:s},{[B]:"parseURL",[C]:s,assign:"url"}],[A]:b,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[A]:c},{[A]:b,rules:[{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[A]:c},{endpoint:{url:i,[E]:j,[F]:j},[A]:d}]}]},{conditions:[{[B]:e,[C]:[k,"aws"]}],[A]:b,rules:[{conditions:v,[A]:b,rules:[{conditions:w,[A]:b,rules:[{endpoint:{url:"https://health-fips.{Region}.api.aws",[E]:l,[F]:j},[A]:d}]},m]},{conditions:t,[A]:b,rules:[{conditions:x,[A]:b,rules:[{endpoint:{url:"https://health-fips.{Region}.amazonaws.com",[E]:l,[F]:j},[A]:d}]},n]},{conditions:u,[A]:b,rules:[{conditions:y,[A]:b,rules:[{endpoint:{url:"https://health.{Region}.api.aws",[E]:l,[F]:j},[A]:d}]},o]},{endpoint:p,[A]:d}]},{conditions:[{[B]:e,[C]:[k,"aws-cn"]}],[A]:b,rules:[{conditions:v,[A]:b,rules:[{conditions:w,[A]:b,rules:[{endpoint:{url:"https://health-fips.{Region}.api.amazonwebservices.com.cn",[E]:q,[F]:j},[A]:d}]},m]},{conditions:t,[A]:b,rules:[{conditions:x,[A]:b,rules:[{endpoint:{url:"https://health-fips.{Region}.amazonaws.com.cn",[E]:q,[F]:j},[A]:d}]},n]},{conditions:u,[A]:b,rules:[{conditions:y,[A]:b,rules:[{endpoint:{url:"https://health.{Region}.api.amazonwebservices.com.cn",[E]:q,[F]:j},[A]:d}]},o]},{endpoint:r,[A]:d}]},{conditions:v,[A]:b,rules:[{conditions:w,[A]:b,rules:[{endpoint:{url:"https://health-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[E]:j,[F]:j},[A]:d}]},m]},{conditions:t,[A]:b,rules:[{conditions:x,[A]:b,rules:[{[A]:b,rules:[{endpoint:{url:"https://health-fips.{Region}.{PartitionResult#dnsSuffix}",[E]:j,[F]:j},[A]:d}]}]},n]},{conditions:u,[A]:b,rules:[{conditions:y,[A]:b,rules:[{endpoint:{url:"https://health.{Region}.{PartitionResult#dualStackDnsSuffix}",[E]:j,[F]:j},[A]:d}]},o]},{[A]:b,rules:[{conditions:[{[B]:e,[C]:[h,"aws-global"]}],endpoint:p,[A]:d},{conditions:[{[B]:e,[C]:[h,"aws-cn-global"]}],endpoint:r,[A]:d},{endpoint:{url:"https://health.{Region}.{PartitionResult#dnsSuffix}",[E]:j,[F]:j},[A]:d}]}]}]};
export const ruleSet: RuleSetObject = _data;
