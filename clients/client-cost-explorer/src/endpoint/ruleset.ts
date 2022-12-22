// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cost-explorer.json */

const A="type",
B="fn",
C="argv",
D="ref",
E="properties",
F="headers",
G="authSchemes",
H="signingRegion",
I="signingName";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="stringEquals",
i={"required":true,"default":false,[A]:"Boolean"},
j={[D]:"Region"},
k={[D]:"Endpoint"},
l={},
m={[B]:"getAttr",[C]:[{[D]:d},"name"]},
n={[G]:[{"name":"sigv4",[H]:"us-east-1",[I]:"ce"}]},
o={[f]:"FIPS and DualStack are enabled, but this partition does not support one or both",[A]:f},
p={[f]:"FIPS is enabled but this partition does not support FIPS",[A]:f},
q={[f]:"DualStack is enabled but this partition does not support DualStack",[A]:f},
r={"url":"https://ce.us-east-1.amazonaws.com",[E]:n,[F]:{}},
s={[G]:[{"name":"sigv4",[H]:"cn-northwest-1",[I]:"ce"}]},
t={"url":"https://ce.cn-northwest-1.amazonaws.com.cn",[E]:s,[F]:{}},
u=[{[B]:"booleanEquals",[C]:[{[D]:"UseFIPS"},true]}],
v=[{[B]:"booleanEquals",[C]:[{[D]:"UseDualStack"},true]}],
w=[{[B]:"booleanEquals",[C]:[{[D]:"UseFIPS"},true]},{[B]:"booleanEquals",[C]:[{[D]:"UseDualStack"},true]}],
x=[{[B]:"booleanEquals",[C]:[true,{[B]:"getAttr",[C]:[{[D]:d},"supportsFIPS"]}]},{[B]:"booleanEquals",[C]:[true,{[B]:"getAttr",[C]:[{[D]:d},"supportsDualStack"]}]}],
y=[{[B]:"booleanEquals",[C]:[true,{[B]:"getAttr",[C]:[{[D]:d},"supportsFIPS"]}]}],
z=[{[B]:"booleanEquals",[C]:[true,{[B]:"getAttr",[C]:[{[D]:d},"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:{required:a,[A]:c},UseDualStack:i,UseFIPS:i,Endpoint:{required:b,[A]:c}},rules:[{conditions:[{[B]:"aws.partition",[C]:[j],assign:d}],[A]:e,rules:[{conditions:[{[B]:"isSet",[C]:[k]}],[A]:e,rules:[{conditions:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[A]:f},{[A]:e,rules:[{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[A]:f},{endpoint:{url:k,[E]:l,[F]:l},[A]:g}]}]},{conditions:[{[B]:h,[C]:[m,"aws"]}],[A]:e,rules:[{conditions:w,[A]:e,rules:[{conditions:x,[A]:e,rules:[{endpoint:{url:"https://cost-explorer-fips.{Region}.api.aws",[E]:n,[F]:l},[A]:g}]},o]},{conditions:u,[A]:e,rules:[{conditions:y,[A]:e,rules:[{endpoint:{url:"https://cost-explorer-fips.{Region}.amazonaws.com",[E]:n,[F]:l},[A]:g}]},p]},{conditions:v,[A]:e,rules:[{conditions:z,[A]:e,rules:[{endpoint:{url:"https://cost-explorer.{Region}.api.aws",[E]:n,[F]:l},[A]:g}]},q]},{endpoint:r,[A]:g}]},{conditions:[{[B]:h,[C]:[m,"aws-cn"]}],[A]:e,rules:[{conditions:w,[A]:e,rules:[{conditions:x,[A]:e,rules:[{endpoint:{url:"https://cost-explorer-fips.{Region}.api.amazonwebservices.com.cn",[E]:s,[F]:l},[A]:g}]},o]},{conditions:u,[A]:e,rules:[{conditions:y,[A]:e,rules:[{endpoint:{url:"https://cost-explorer-fips.{Region}.amazonaws.com.cn",[E]:s,[F]:l},[A]:g}]},p]},{conditions:v,[A]:e,rules:[{conditions:z,[A]:e,rules:[{endpoint:{url:"https://cost-explorer.{Region}.api.amazonwebservices.com.cn",[E]:s,[F]:l},[A]:g}]},q]},{endpoint:t,[A]:g}]},{conditions:w,[A]:e,rules:[{conditions:x,[A]:e,rules:[{endpoint:{url:"https://ce-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[E]:l,[F]:l},[A]:g}]},o]},{conditions:u,[A]:e,rules:[{conditions:y,[A]:e,rules:[{[A]:e,rules:[{endpoint:{url:"https://ce-fips.{Region}.{PartitionResult#dnsSuffix}",[E]:l,[F]:l},[A]:g}]}]},p]},{conditions:v,[A]:e,rules:[{conditions:z,[A]:e,rules:[{endpoint:{url:"https://ce.{Region}.{PartitionResult#dualStackDnsSuffix}",[E]:l,[F]:l},[A]:g}]},q]},{[A]:e,rules:[{conditions:[{[B]:h,[C]:[j,"aws-global"]}],endpoint:r,[A]:g},{conditions:[{[B]:h,[C]:[j,"aws-cn-global"]}],endpoint:t,[A]:g},{endpoint:{url:"https://ce.{Region}.{PartitionResult#dnsSuffix}",[E]:l,[F]:l},[A]:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
