// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/networkmanager.json */

const C="required",
D="type",
E="fn",
F="argv",
G="ref",
H="properties",
I="headers",
J="authSchemes",
K="signingRegion",
L="signingName";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="stringEquals",
f="https://networkmanager-fips.{Region}.api.aws",
g="https://networkmanager-fips.{Region}.amazonaws.com",
h="https://networkmanager.{Region}.api.aws",
i={[C]:false,[D]:"String"},
j={[C]:true,"default":false,[D]:"Boolean"},
k={[G]:"Region"},
l={[G]:"Endpoint"},
m={},
n={[E]:"getAttr",[F]:[{[G]:a},"name"]},
o={[J]:[{"name":"sigv4",[K]:"us-west-2",[L]:"networkmanager"}]},
p={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[D]:c},
q={[c]:"FIPS is enabled but this partition does not support FIPS",[D]:c},
r={[c]:"DualStack is enabled but this partition does not support DualStack",[D]:c},
s={"url":"https://networkmanager.us-west-2.amazonaws.com",[H]:o,[I]:{}},
t={[J]:[{"name":"sigv4",[K]:"us-gov-west-1",[L]:"networkmanager"}]},
u={"url":"https://networkmanager.us-gov-west-1.amazonaws.com",[H]:t,[I]:{}},
v=[l],
w=[{[E]:"booleanEquals",[F]:[{[G]:"UseFIPS"},true]}],
x=[{[E]:"booleanEquals",[F]:[{[G]:"UseDualStack"},true]}],
y=[{[E]:"booleanEquals",[F]:[{[G]:"UseFIPS"},true]},{[E]:"booleanEquals",[F]:[{[G]:"UseDualStack"},true]}],
z=[{[E]:"booleanEquals",[F]:[true,{[E]:"getAttr",[F]:[{[G]:a},"supportsFIPS"]}]},{[E]:"booleanEquals",[F]:[true,{[E]:"getAttr",[F]:[{[G]:a},"supportsDualStack"]}]}],
A=[{[E]:"booleanEquals",[F]:[true,{[E]:"getAttr",[F]:[{[G]:a},"supportsFIPS"]}]}],
B=[{[E]:"booleanEquals",[F]:[true,{[E]:"getAttr",[F]:[{[G]:a},"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[E]:"aws.partition",[F]:[k],assign:a}],[D]:b,rules:[{conditions:[{[E]:"isSet",[F]:v},{[E]:"parseURL",[F]:v,assign:"url"}],[D]:b,rules:[{conditions:w,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[D]:c},{[D]:b,rules:[{conditions:x,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[D]:c},{endpoint:{url:l,[H]:m,[I]:m},[D]:d}]}]},{conditions:[{[E]:e,[F]:[n,"aws"]}],[D]:b,rules:[{conditions:y,[D]:b,rules:[{conditions:z,[D]:b,rules:[{endpoint:{url:f,[H]:o,[I]:m},[D]:d}]},p]},{conditions:w,[D]:b,rules:[{conditions:A,[D]:b,rules:[{endpoint:{url:g,[H]:o,[I]:m},[D]:d}]},q]},{conditions:x,[D]:b,rules:[{conditions:B,[D]:b,rules:[{endpoint:{url:h,[H]:o,[I]:m},[D]:d}]},r]},{endpoint:s,[D]:d}]},{conditions:[{[E]:e,[F]:[n,"aws-us-gov"]}],[D]:b,rules:[{conditions:y,[D]:b,rules:[{conditions:z,[D]:b,rules:[{endpoint:{url:f,[H]:t,[I]:m},[D]:d}]},p]},{conditions:w,[D]:b,rules:[{conditions:A,[D]:b,rules:[{endpoint:{url:g,[H]:t,[I]:m},[D]:d}]},q]},{conditions:x,[D]:b,rules:[{conditions:B,[D]:b,rules:[{endpoint:{url:h,[H]:t,[I]:m},[D]:d}]},r]},{endpoint:u,[D]:d}]},{conditions:y,[D]:b,rules:[{conditions:z,[D]:b,rules:[{endpoint:{url:"https://networkmanager-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[H]:m,[I]:m},[D]:d}]},p]},{conditions:w,[D]:b,rules:[{conditions:A,[D]:b,rules:[{[D]:b,rules:[{endpoint:{url:"https://networkmanager-fips.{Region}.{PartitionResult#dnsSuffix}",[H]:m,[I]:m},[D]:d}]}]},q]},{conditions:x,[D]:b,rules:[{conditions:B,[D]:b,rules:[{endpoint:{url:"https://networkmanager.{Region}.{PartitionResult#dualStackDnsSuffix}",[H]:m,[I]:m},[D]:d}]},r]},{[D]:b,rules:[{conditions:[{[E]:e,[F]:[k,"aws-global"]}],endpoint:s,[D]:d},{conditions:[{[E]:e,[F]:[k,"aws-us-gov-global"]}],endpoint:u,[D]:d},{endpoint:{url:"https://networkmanager.{Region}.{PartitionResult#dnsSuffix}",[H]:m,[I]:m},[D]:d}]}]}]};
export const ruleSet: RuleSetObject = _data;
