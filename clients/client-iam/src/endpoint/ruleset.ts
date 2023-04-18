// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/iam.json */

const G="required",
H="type",
I="rules",
J="conditions",
K="fn",
L="argv",
M="ref",
N="url",
O="properties",
P="headers",
Q="authSchemes",
R="name",
S="signingName",
T="signingRegion";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g={[G]:false,[H]:"String"},
h={[G]:true,"default":false,[H]:"Boolean"},
i={[M]:"Endpoint"},
j={},
k={[M]:"Region"},
l={[K]:"getAttr",[L]:[{[M]:e},"name"]},
m={[J]:[{[K]:"booleanEquals",[L]:[{[M]:"UseFIPS"},true]},{[K]:"booleanEquals",[L]:[{[M]:"UseDualStack"},true]}],[H]:b,[I]:[{[J]:[{[K]:"booleanEquals",[L]:[true,{[K]:"getAttr",[L]:[{[M]:e},"supportsFIPS"]}]},{[K]:"booleanEquals",[L]:[true,{[K]:"getAttr",[L]:[{[M]:e},"supportsDualStack"]}]}],[H]:b,[I]:[{[d]:{[N]:"https://iam-fips.{Region}.api.aws",[O]:{},[P]:{}},[H]:d}]},{[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[H]:c}]},
n={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[H]:c},
o={[N]:"https://iam-fips.amazonaws.com",[O]:{[Q]:[{[R]:"sigv4",[S]:"iam",[T]:"us-east-1"}]},[P]:{}},
p={[c]:"FIPS is enabled but this partition does not support FIPS",[H]:c},
q={[J]:[{[K]:"booleanEquals",[L]:[{[M]:"UseDualStack"},true]}],[H]:b,[I]:[{[J]:[{[K]:"booleanEquals",[L]:[true,{[K]:"getAttr",[L]:[{[M]:e},"supportsDualStack"]}]}],[H]:b,[I]:[{[d]:{[N]:"https://iam.{Region}.api.aws",[O]:{},[P]:{}},[H]:d}]},{[c]:"DualStack is enabled but this partition does not support DualStack",[H]:c}]},
r={[c]:"DualStack is enabled but this partition does not support DualStack",[H]:c},
s={[N]:"https://iam.amazonaws.com",[O]:{[Q]:[{[R]:"sigv4",[S]:"iam",[T]:"us-east-1"}]},[P]:{}},
t={[N]:"https://iam.cn-north-1.amazonaws.com.cn",[O]:{[Q]:[{[R]:"sigv4",[S]:"iam",[T]:"cn-north-1"}]},[P]:{}},
u={[d]:{[N]:"https://iam.us-gov.amazonaws.com",[O]:{[Q]:[{[R]:"sigv4",[S]:"iam",[T]:"us-gov-west-1"}]},[P]:{}},[H]:d},
v={[N]:"https://iam.us-iso-east-1.c2s.ic.gov",[O]:{[Q]:[{[R]:"sigv4",[S]:"iam",[T]:"us-iso-east-1"}]},[P]:{}},
w={[N]:"https://iam.us-isob-east-1.sc2s.sgov.gov",[O]:{[Q]:[{[R]:"sigv4",[S]:"iam",[T]:"us-isob-east-1"}]},[P]:{}},
x={[J]:[{[K]:f,[L]:[k,"aws-us-gov-global"]}],[d]:{[N]:"https://iam.us-gov.amazonaws.com",[O]:{[Q]:[{[R]:"sigv4",[S]:"iam",[T]:"us-gov-west-1"}]},[P]:{}},[H]:d},
y=[{[K]:"booleanEquals",[L]:[{[M]:"UseFIPS"},true]}],
z=[{[K]:"booleanEquals",[L]:[{[M]:"UseDualStack"},true]}],
A=[k],
B=[{[K]:"booleanEquals",[L]:[{[M]:"UseFIPS"},true]},{[K]:"booleanEquals",[L]:[{[M]:"UseDualStack"},true]}],
C=[{[K]:"booleanEquals",[L]:[true,{[K]:"getAttr",[L]:[{[M]:e},"supportsFIPS"]}]},{[K]:"booleanEquals",[L]:[true,{[K]:"getAttr",[L]:[{[M]:e},"supportsDualStack"]}]}],
D=[{[K]:"booleanEquals",[L]:[true,{[K]:"getAttr",[L]:[{[M]:e},"supportsFIPS"]}]}],
E=[{[K]:"booleanEquals",[L]:[true,{[K]:"getAttr",[L]:[{[M]:e},"supportsDualStack"]}]}],
F=[{[K]:f,[L]:[k,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},[I]:[{[J]:[{[K]:a,[L]:[i]}],[H]:b,[I]:[{[J]:y,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[H]:c},{[H]:b,[I]:[{[J]:z,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[H]:c},{endpoint:{[N]:i,[O]:j,[P]:j},[H]:d}]}]},{[H]:b,[I]:[{[J]:[{[K]:a,[L]:A}],[H]:b,[I]:[{[J]:[{[K]:"aws.partition",[L]:A,assign:e}],[H]:b,[I]:[{[J]:[{[K]:f,[L]:[l,"aws"]}],[H]:b,[I]:[m,{[J]:y,[H]:b,[I]:[{[J]:D,[H]:b,[I]:[{endpoint:o,[H]:d}]},p]},q,{endpoint:s,[H]:d}]},{[J]:[{[K]:f,[L]:[l,"aws-cn"]}],[H]:b,[I]:[{[J]:B,[H]:b,[I]:[{[J]:C,[H]:b,[I]:[{endpoint:{[N]:"https://iam-fips.{Region}.api.amazonwebservices.com.cn",[O]:j,[P]:j},[H]:d}]},n]},{[J]:y,[H]:b,[I]:[{[J]:D,[H]:b,[I]:[{endpoint:{[N]:"https://iam-fips.{Region}.amazonaws.com.cn",[O]:j,[P]:j},[H]:d}]},p]},{[J]:z,[H]:b,[I]:[{[J]:E,[H]:b,[I]:[{endpoint:{[N]:"https://iam.{Region}.api.amazonwebservices.com.cn",[O]:j,[P]:j},[H]:d}]},r]},{endpoint:t,[H]:d}]},{[J]:[{[K]:f,[L]:[l,"aws-us-gov"]}],[H]:b,[I]:[m,{[J]:y,[H]:b,[I]:[{[J]:D,[H]:b,[I]:[u]},p]},q,u]},{[J]:[{[K]:f,[L]:[l,"aws-iso"]}],[H]:b,[I]:[{[J]:y,[H]:b,[I]:[{[J]:D,[H]:b,[I]:[{endpoint:{[N]:"https://iam-fips.{Region}.c2s.ic.gov",[O]:j,[P]:j},[H]:d}]},p]},{endpoint:v,[H]:d}]},{[J]:[{[K]:f,[L]:[l,"aws-iso-b"]}],[H]:b,[I]:[{[J]:y,[H]:b,[I]:[{[J]:D,[H]:b,[I]:[{endpoint:{[N]:"https://iam-fips.{Region}.sc2s.sgov.gov",[O]:j,[P]:j},[H]:d}]},p]},{endpoint:w,[H]:d}]},{[J]:B,[H]:b,[I]:[{[J]:C,[H]:b,[I]:[{[H]:b,[I]:[{endpoint:{[N]:"https://iam-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[O]:j,[P]:j},[H]:d}]}]},n]},{[J]:y,[H]:b,[I]:[{[J]:D,[H]:b,[I]:[{[H]:b,[I]:[{[J]:F,endpoint:o,[H]:d},x,{endpoint:{[N]:"https://iam-fips.{Region}.{PartitionResult#dnsSuffix}",[O]:j,[P]:j},[H]:d}]}]},p]},{[J]:z,[H]:b,[I]:[{[J]:E,[H]:b,[I]:[{[H]:b,[I]:[{endpoint:{[N]:"https://iam.{Region}.{PartitionResult#dualStackDnsSuffix}",[O]:j,[P]:j},[H]:d}]}]},r]},{[H]:b,[I]:[{[J]:F,endpoint:s,[H]:d},{[J]:[{[K]:f,[L]:[k,"aws-cn-global"]}],endpoint:t,[H]:d},x,{[J]:[{[K]:f,[L]:[k,"aws-iso-global"]}],endpoint:v,[H]:d},{[J]:[{[K]:f,[L]:[k,"aws-iso-b-global"]}],endpoint:w,[H]:d},{endpoint:{[N]:"https://iam.{Region}.{PartitionResult#dnsSuffix}",[O]:j,[P]:j},[H]:d}]}]}]},{error:"Invalid Configuration: Missing Region",[H]:c}]}]};
export const ruleSet: RuleSetObject = _data;
