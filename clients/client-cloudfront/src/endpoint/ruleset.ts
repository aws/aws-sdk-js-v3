// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cloudfront.json */

const A="required",
B="type",
C="fn",
D="argv",
E="ref",
F="url",
G="properties",
H="headers",
I="authSchemes",
J="name",
K="signingName",
L="signingRegion";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g={[A]:false,[B]:"String"},
h={[A]:true,"default":false,[B]:"Boolean"},
i={[E]:"Endpoint"},
j={},
k={[E]:"Region"},
l={[C]:"getAttr",[D]:[{[E]:e},"name"]},
m={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[B]:c},
n={[F]:"https://cloudfront-fips.amazonaws.com",[G]:{[I]:[{[J]:"sigv4",[K]:"cloudfront",[L]:"us-east-1"}]},[H]:{}},
o={[c]:"FIPS is enabled but this partition does not support FIPS",[B]:c},
p={[c]:"DualStack is enabled but this partition does not support DualStack",[B]:c},
q={[F]:"https://cloudfront.amazonaws.com",[G]:{[I]:[{[J]:"sigv4",[K]:"cloudfront",[L]:"us-east-1"}]},[H]:{}},
r={[F]:"https://cloudfront.cn-northwest-1.amazonaws.com.cn",[G]:{[I]:[{[J]:"sigv4",[K]:"cloudfront",[L]:"cn-northwest-1"}]},[H]:{}},
s=[{[C]:"booleanEquals",[D]:[{[E]:"UseFIPS"},true]}],
t=[{[C]:"booleanEquals",[D]:[{[E]:"UseDualStack"},true]}],
u=[k],
v=[{[C]:"booleanEquals",[D]:[{[E]:"UseFIPS"},true]},{[C]:"booleanEquals",[D]:[{[E]:"UseDualStack"},true]}],
w=[{[C]:"booleanEquals",[D]:[true,{[C]:"getAttr",[D]:[{[E]:e},"supportsFIPS"]}]},{[C]:"booleanEquals",[D]:[true,{[C]:"getAttr",[D]:[{[E]:e},"supportsDualStack"]}]}],
x=[{[C]:"booleanEquals",[D]:[true,{[C]:"getAttr",[D]:[{[E]:e},"supportsFIPS"]}]}],
y=[{[C]:"booleanEquals",[D]:[true,{[C]:"getAttr",[D]:[{[E]:e},"supportsDualStack"]}]}],
z=[{[C]:f,[D]:[k,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},rules:[{conditions:[{[C]:a,[D]:[i]}],[B]:b,rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[B]:c},{[B]:b,rules:[{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[B]:c},{endpoint:{[F]:i,[G]:j,[H]:j},[B]:d}]}]},{[B]:b,rules:[{conditions:[{[C]:a,[D]:u}],[B]:b,rules:[{conditions:[{[C]:"aws.partition",[D]:u,assign:e}],[B]:b,rules:[{conditions:[{[C]:f,[D]:[l,"aws"]}],[B]:b,rules:[{conditions:v,[B]:b,rules:[{conditions:w,[B]:b,rules:[{endpoint:{[F]:"https://cloudfront-fips.{Region}.api.aws",[G]:j,[H]:j},[B]:d}]},m]},{conditions:s,[B]:b,rules:[{conditions:x,[B]:b,rules:[{endpoint:n,[B]:d}]},o]},{conditions:t,[B]:b,rules:[{conditions:y,[B]:b,rules:[{endpoint:{[F]:"https://cloudfront.{Region}.api.aws",[G]:j,[H]:j},[B]:d}]},p]},{endpoint:q,[B]:d}]},{conditions:[{[C]:f,[D]:[l,"aws-cn"]}],[B]:b,rules:[{conditions:v,[B]:b,rules:[{conditions:w,[B]:b,rules:[{endpoint:{[F]:"https://cloudfront-fips.{Region}.api.amazonwebservices.com.cn",[G]:j,[H]:j},[B]:d}]},m]},{conditions:s,[B]:b,rules:[{conditions:x,[B]:b,rules:[{endpoint:{[F]:"https://cloudfront-fips.{Region}.amazonaws.com.cn",[G]:j,[H]:j},[B]:d}]},o]},{conditions:t,[B]:b,rules:[{conditions:y,[B]:b,rules:[{endpoint:{[F]:"https://cloudfront.{Region}.api.amazonwebservices.com.cn",[G]:j,[H]:j},[B]:d}]},p]},{endpoint:r,[B]:d}]},{conditions:v,[B]:b,rules:[{conditions:w,[B]:b,rules:[{[B]:b,rules:[{endpoint:{[F]:"https://cloudfront-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[G]:j,[H]:j},[B]:d}]}]},m]},{conditions:s,[B]:b,rules:[{conditions:x,[B]:b,rules:[{[B]:b,rules:[{conditions:z,endpoint:n,[B]:d},{endpoint:{[F]:"https://cloudfront-fips.{Region}.{PartitionResult#dnsSuffix}",[G]:j,[H]:j},[B]:d}]}]},o]},{conditions:t,[B]:b,rules:[{conditions:y,[B]:b,rules:[{[B]:b,rules:[{endpoint:{[F]:"https://cloudfront.{Region}.{PartitionResult#dualStackDnsSuffix}",[G]:j,[H]:j},[B]:d}]}]},p]},{[B]:b,rules:[{conditions:z,endpoint:q,[B]:d},{conditions:[{[C]:f,[D]:[k,"aws-cn-global"]}],endpoint:r,[B]:d},{endpoint:{[F]:"https://cloudfront.{Region}.{PartitionResult#dnsSuffix}",[G]:j,[H]:j},[B]:d}]}]}]},{error:"Invalid Configuration: Missing Region",[B]:c}]}]};
export const ruleSet: RuleSetObject = _data;
