// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/waf.json */

const B="required",
C="type",
D="fn",
E="argv",
F="ref",
G="properties",
H="headers";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="stringEquals",
f="getAttr",
g="aws",
h={[B]:false,[C]:"String"},
i={[B]:true,"default":false,[C]:"Boolean"},
j={[F]:"Region"},
k={[F]:"Endpoint"},
l={},
m={[F]:a},
n={"authSchemes":[{"name":"sigv4","signingName":"waf","signingRegion":"us-east-1"}]},
o={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[C]:c},
p={"url":"https://waf-fips.amazonaws.com",[G]:n,[H]:{}},
q={[c]:"FIPS is enabled but this partition does not support FIPS",[C]:c},
r={[c]:"DualStack is enabled but this partition does not support DualStack",[C]:c},
s={"url":"https://waf.amazonaws.com",[G]:n,[H]:{}},
t=[k],
u=[{[D]:"booleanEquals",[E]:[{[F]:"UseFIPS"},true]}],
v=[{[D]:"booleanEquals",[E]:[{[F]:"UseDualStack"},true]}],
w=[{[D]:"booleanEquals",[E]:[{[F]:"UseFIPS"},true]},{[D]:"booleanEquals",[E]:[{[F]:"UseDualStack"},true]}],
x=[{[D]:"booleanEquals",[E]:[true,{[D]:f,[E]:[m,"supportsFIPS"]}]},{[D]:"booleanEquals",[E]:[true,{[D]:f,[E]:[m,"supportsDualStack"]}]}],
y=[{[D]:"booleanEquals",[E]:[true,{[D]:f,[E]:[m,"supportsFIPS"]}]}],
z=[{[D]:"booleanEquals",[E]:[true,{[D]:f,[E]:[m,"supportsDualStack"]}]}],
A=[{[D]:e,[E]:[j,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h},rules:[{conditions:[{[D]:"aws.partition",[E]:[j],assign:a}],[C]:b,rules:[{conditions:[{[D]:"isSet",[E]:t},{[D]:"parseURL",[E]:t,assign:"url"}],[C]:b,rules:[{conditions:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[C]:c},{[C]:b,rules:[{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[C]:c},{endpoint:{url:k,[G]:l,[H]:l},[C]:d}]}]},{conditions:[{[D]:e,[E]:[{[D]:f,[E]:[m,"name"]},g]}],[C]:b,rules:[{conditions:w,[C]:b,rules:[{conditions:x,[C]:b,rules:[{endpoint:{url:"https://waf-fips.{Region}.api.aws",[G]:n,[H]:l},[C]:d}]},o]},{conditions:u,[C]:b,rules:[{conditions:y,[C]:b,rules:[{endpoint:p,[C]:d}]},q]},{conditions:v,[C]:b,rules:[{conditions:z,[C]:b,rules:[{endpoint:{url:"https://waf.{Region}.api.aws",[G]:n,[H]:l},[C]:d}]},r]},{endpoint:s,[C]:d}]},{conditions:w,[C]:b,rules:[{conditions:x,[C]:b,rules:[{endpoint:{url:"https://waf-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[G]:l,[H]:l},[C]:d}]},o]},{conditions:u,[C]:b,rules:[{conditions:y,[C]:b,rules:[{[C]:b,rules:[{conditions:[{[D]:e,[E]:[j,g]}],endpoint:p,[C]:d},{conditions:A,endpoint:p,[C]:d},{endpoint:{url:"https://waf-fips.{Region}.{PartitionResult#dnsSuffix}",[G]:l,[H]:l},[C]:d}]}]},q]},{conditions:v,[C]:b,rules:[{conditions:z,[C]:b,rules:[{endpoint:{url:"https://waf.{Region}.{PartitionResult#dualStackDnsSuffix}",[G]:l,[H]:l},[C]:d}]},r]},{[C]:b,rules:[{conditions:A,endpoint:s,[C]:d},{endpoint:{url:"https://waf.{Region}.{PartitionResult#dnsSuffix}",[G]:l,[H]:l},[C]:d}]}]}]};
export const ruleSet: RuleSetObject = _data;
