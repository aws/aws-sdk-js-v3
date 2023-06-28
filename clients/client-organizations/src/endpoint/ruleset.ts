// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/organizations.json */

const E="required",
F="type",
G="rules",
H="conditions",
I="fn",
J="argv",
K="ref",
L="url",
M="properties",
N="headers",
O="authSchemes",
P="name",
Q="signingName",
R="signingRegion";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g={[E]:false,[F]:"String"},
h={[E]:true,"default":false,[F]:"Boolean"},
i={[K]:"Endpoint"},
j={},
k={[K]:"Region"},
l={[I]:"getAttr",[J]:[{[K]:e},"name"]},
m={[H]:[{[I]:"booleanEquals",[J]:[{[K]:"UseFIPS"},true]},{[I]:"booleanEquals",[J]:[{[K]:"UseDualStack"},true]}],[F]:b,[G]:[{[H]:[{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsFIPS"]}]},{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsDualStack"]}]}],[F]:b,[G]:[{[d]:{[L]:"https://organizations-fips.{Region}.api.aws",[M]:{},[N]:{}},[F]:d}]},{[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[F]:c}]},
n={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[F]:c},
o={[L]:"https://organizations-fips.us-east-1.amazonaws.com",[M]:{[O]:[{[P]:"sigv4",[Q]:"organizations",[R]:"us-east-1"}]},[N]:{}},
p={[c]:"FIPS is enabled but this partition does not support FIPS",[F]:c},
q={[H]:[{[I]:"booleanEquals",[J]:[{[K]:"UseDualStack"},true]}],[F]:b,[G]:[{[H]:[{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsDualStack"]}]}],[F]:b,[G]:[{[d]:{[L]:"https://organizations.{Region}.api.aws",[M]:{},[N]:{}},[F]:d}]},{[c]:"DualStack is enabled but this partition does not support DualStack",[F]:c}]},
r={[c]:"DualStack is enabled but this partition does not support DualStack",[F]:c},
s={[L]:"https://organizations.us-east-1.amazonaws.com",[M]:{[O]:[{[P]:"sigv4",[Q]:"organizations",[R]:"us-east-1"}]},[N]:{}},
t={[L]:"https://organizations.cn-northwest-1.amazonaws.com.cn",[M]:{[O]:[{[P]:"sigv4",[Q]:"organizations",[R]:"cn-northwest-1"}]},[N]:{}},
u={[d]:{[L]:"https://organizations.us-gov-west-1.amazonaws.com",[M]:{[O]:[{[P]:"sigv4",[Q]:"organizations",[R]:"us-gov-west-1"}]},[N]:{}},[F]:d},
v={[H]:[{[I]:f,[J]:[k,"aws-us-gov-global"]}],[d]:{[L]:"https://organizations.us-gov-west-1.amazonaws.com",[M]:{[O]:[{[P]:"sigv4",[Q]:"organizations",[R]:"us-gov-west-1"}]},[N]:{}},[F]:d},
w=[{[I]:"booleanEquals",[J]:[{[K]:"UseFIPS"},true]}],
x=[{[I]:"booleanEquals",[J]:[{[K]:"UseDualStack"},true]}],
y=[k],
z=[{[I]:"booleanEquals",[J]:[{[K]:"UseFIPS"},true]},{[I]:"booleanEquals",[J]:[{[K]:"UseDualStack"},true]}],
A=[{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsFIPS"]}]},{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsDualStack"]}]}],
B=[{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsFIPS"]}]}],
C=[{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsDualStack"]}]}],
D=[{[I]:f,[J]:[k,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},[G]:[{[H]:[{[I]:a,[J]:[i]}],[F]:b,[G]:[{[H]:w,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[F]:c},{[F]:b,[G]:[{[H]:x,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[F]:c},{endpoint:{[L]:i,[M]:j,[N]:j},[F]:d}]}]},{[F]:b,[G]:[{[H]:[{[I]:a,[J]:y}],[F]:b,[G]:[{[H]:[{[I]:"aws.partition",[J]:y,assign:e}],[F]:b,[G]:[{[H]:[{[I]:f,[J]:[l,"aws"]}],[F]:b,[G]:[m,{[H]:w,[F]:b,[G]:[{[H]:B,[F]:b,[G]:[{endpoint:o,[F]:d}]},p]},q,{endpoint:s,[F]:d}]},{[H]:[{[I]:f,[J]:[l,"aws-cn"]}],[F]:b,[G]:[{[H]:z,[F]:b,[G]:[{[H]:A,[F]:b,[G]:[{endpoint:{[L]:"https://organizations-fips.{Region}.api.amazonwebservices.com.cn",[M]:j,[N]:j},[F]:d}]},n]},{[H]:w,[F]:b,[G]:[{[H]:B,[F]:b,[G]:[{endpoint:{[L]:"https://organizations-fips.{Region}.amazonaws.com.cn",[M]:j,[N]:j},[F]:d}]},p]},{[H]:x,[F]:b,[G]:[{[H]:C,[F]:b,[G]:[{endpoint:{[L]:"https://organizations.{Region}.api.amazonwebservices.com.cn",[M]:j,[N]:j},[F]:d}]},r]},{endpoint:t,[F]:d}]},{[H]:[{[I]:f,[J]:[l,"aws-us-gov"]}],[F]:b,[G]:[m,{[H]:w,[F]:b,[G]:[{[H]:B,[F]:b,[G]:[u]},p]},q,u]},{[H]:z,[F]:b,[G]:[{[H]:A,[F]:b,[G]:[{[F]:b,[G]:[{endpoint:{[L]:"https://organizations-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[M]:j,[N]:j},[F]:d}]}]},n]},{[H]:w,[F]:b,[G]:[{[H]:B,[F]:b,[G]:[{[F]:b,[G]:[{[H]:D,endpoint:o,[F]:d},v,{endpoint:{[L]:"https://organizations-fips.{Region}.{PartitionResult#dnsSuffix}",[M]:j,[N]:j},[F]:d}]}]},p]},{[H]:x,[F]:b,[G]:[{[H]:C,[F]:b,[G]:[{[F]:b,[G]:[{endpoint:{[L]:"https://organizations.{Region}.{PartitionResult#dualStackDnsSuffix}",[M]:j,[N]:j},[F]:d}]}]},r]},{[F]:b,[G]:[{[H]:D,endpoint:s,[F]:d},{[H]:[{[I]:f,[J]:[k,"aws-cn-global"]}],endpoint:t,[F]:d},v,{endpoint:{[L]:"https://organizations.{Region}.{PartitionResult#dnsSuffix}",[M]:j,[N]:j},[F]:d}]}]}]},{error:"Invalid Configuration: Missing Region",[F]:c}]}]};
export const ruleSet: RuleSetObject = _data;
