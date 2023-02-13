// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/account.json */

const y="required",
z="type",
A="fn",
B="argv",
C="ref",
D="properties",
E="headers",
F="authSchemes",
G="signingName",
H="signingRegion";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g={[y]:false,[z]:"String"},
h={[y]:true,"default":false,[z]:"Boolean"},
i={[C]:"Endpoint"},
j={},
k={[C]:"Region"},
l={[A]:"getAttr",[B]:[{[C]:e},"name"]},
m={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[z]:c},
n={[c]:"FIPS is enabled but this partition does not support FIPS",[z]:c},
o={[c]:"DualStack is enabled but this partition does not support DualStack",[z]:c},
p={"url":"https://account.us-east-1.amazonaws.com",[D]:{[F]:[{"name":"sigv4",[G]:"account",[H]:"us-east-1"}]},[E]:{}},
q={"url":"https://account.cn-northwest-1.amazonaws.com.cn",[D]:{[F]:[{"name":"sigv4",[G]:"account",[H]:"cn-northwest-1"}]},[E]:{}},
r=[{[A]:"booleanEquals",[B]:[{[C]:"UseFIPS"},true]}],
s=[{[A]:"booleanEquals",[B]:[{[C]:"UseDualStack"},true]}],
t=[k],
u=[{[A]:"booleanEquals",[B]:[{[C]:"UseFIPS"},true]},{[A]:"booleanEquals",[B]:[{[C]:"UseDualStack"},true]}],
v=[{[A]:"booleanEquals",[B]:[true,{[A]:"getAttr",[B]:[{[C]:e},"supportsFIPS"]}]},{[A]:"booleanEquals",[B]:[true,{[A]:"getAttr",[B]:[{[C]:e},"supportsDualStack"]}]}],
w=[{[A]:"booleanEquals",[B]:[true,{[A]:"getAttr",[B]:[{[C]:e},"supportsFIPS"]}]}],
x=[{[A]:"booleanEquals",[B]:[true,{[A]:"getAttr",[B]:[{[C]:e},"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},rules:[{conditions:[{[A]:a,[B]:[i]}],[z]:b,rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[z]:c},{[z]:b,rules:[{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[z]:c},{endpoint:{url:i,[D]:j,[E]:j},[z]:d}]}]},{[z]:b,rules:[{conditions:[{[A]:a,[B]:t}],[z]:b,rules:[{conditions:[{[A]:"aws.partition",[B]:t,assign:e}],[z]:b,rules:[{conditions:[{[A]:f,[B]:[l,"aws"]}],[z]:b,rules:[{conditions:u,[z]:b,rules:[{conditions:v,[z]:b,rules:[{endpoint:{url:"https://account-fips.{Region}.api.aws",[D]:j,[E]:j},[z]:d}]},m]},{conditions:r,[z]:b,rules:[{conditions:w,[z]:b,rules:[{endpoint:{url:"https://account-fips.{Region}.amazonaws.com",[D]:j,[E]:j},[z]:d}]},n]},{conditions:s,[z]:b,rules:[{conditions:x,[z]:b,rules:[{endpoint:{url:"https://account.{Region}.api.aws",[D]:j,[E]:j},[z]:d}]},o]},{endpoint:p,[z]:d}]},{conditions:[{[A]:f,[B]:[l,"aws-cn"]}],[z]:b,rules:[{conditions:u,[z]:b,rules:[{conditions:v,[z]:b,rules:[{endpoint:{url:"https://account-fips.{Region}.api.amazonwebservices.com.cn",[D]:j,[E]:j},[z]:d}]},m]},{conditions:r,[z]:b,rules:[{conditions:w,[z]:b,rules:[{endpoint:{url:"https://account-fips.{Region}.amazonaws.com.cn",[D]:j,[E]:j},[z]:d}]},n]},{conditions:s,[z]:b,rules:[{conditions:x,[z]:b,rules:[{endpoint:{url:"https://account.{Region}.api.amazonwebservices.com.cn",[D]:j,[E]:j},[z]:d}]},o]},{endpoint:q,[z]:d}]},{conditions:u,[z]:b,rules:[{conditions:v,[z]:b,rules:[{[z]:b,rules:[{endpoint:{url:"https://account-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:j,[E]:j},[z]:d}]}]},m]},{conditions:r,[z]:b,rules:[{conditions:w,[z]:b,rules:[{[z]:b,rules:[{endpoint:{url:"https://account-fips.{Region}.{PartitionResult#dnsSuffix}",[D]:j,[E]:j},[z]:d}]}]},n]},{conditions:s,[z]:b,rules:[{conditions:x,[z]:b,rules:[{[z]:b,rules:[{endpoint:{url:"https://account.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:j,[E]:j},[z]:d}]}]},o]},{[z]:b,rules:[{conditions:[{[A]:f,[B]:[k,"aws-global"]}],endpoint:p,[z]:d},{conditions:[{[A]:f,[B]:[k,"aws-cn-global"]}],endpoint:q,[z]:d},{endpoint:{url:"https://account.{Region}.{PartitionResult#dnsSuffix}",[D]:j,[E]:j},[z]:d}]}]}]},{error:"Invalid Configuration: Missing Region",[z]:c}]}]};
export const ruleSet: RuleSetObject = _data;
