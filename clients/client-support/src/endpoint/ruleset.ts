// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/support.json */

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
m={[H]:[{[I]:"booleanEquals",[J]:[{[K]:"UseFIPS"},true]},{[I]:"booleanEquals",[J]:[{[K]:"UseDualStack"},true]}],[F]:b,[G]:[{[H]:[{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsFIPS"]}]},{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsDualStack"]}]}],[F]:b,[G]:[{[d]:{[L]:"https://support-fips.{Region}.api.aws",[M]:{},[N]:{}},[F]:d}]},{[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[F]:c}]},
n={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[F]:c},
o={[H]:[{[I]:"booleanEquals",[J]:[{[K]:"UseFIPS"},true]}],[F]:b,[G]:[{[H]:[{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsFIPS"]}]}],[F]:b,[G]:[{[d]:{[L]:"https://support-fips.{Region}.amazonaws.com",[M]:{},[N]:{}},[F]:d}]},{[c]:"FIPS is enabled but this partition does not support FIPS",[F]:c}]},
p={[c]:"FIPS is enabled but this partition does not support FIPS",[F]:c},
q={[H]:[{[I]:"booleanEquals",[J]:[{[K]:"UseDualStack"},true]}],[F]:b,[G]:[{[H]:[{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsDualStack"]}]}],[F]:b,[G]:[{[d]:{[L]:"https://support.{Region}.api.aws",[M]:{},[N]:{}},[F]:d}]},{[c]:"DualStack is enabled but this partition does not support DualStack",[F]:c}]},
r={[c]:"DualStack is enabled but this partition does not support DualStack",[F]:c},
s={[L]:"https://support.us-east-1.amazonaws.com",[M]:{[O]:[{[P]:"sigv4",[Q]:"support",[R]:"us-east-1"}]},[N]:{}},
t={[L]:"https://support.cn-north-1.amazonaws.com.cn",[M]:{[O]:[{[P]:"sigv4",[Q]:"support",[R]:"cn-north-1"}]},[N]:{}},
u={[L]:"https://support.us-gov-west-1.amazonaws.com",[M]:{[O]:[{[P]:"sigv4",[Q]:"support",[R]:"us-gov-west-1"}]},[N]:{}},
v={[L]:"https://support.us-iso-east-1.c2s.ic.gov",[M]:{[O]:[{[P]:"sigv4",[Q]:"support",[R]:"us-iso-east-1"}]},[N]:{}},
w={[L]:"https://support.us-isob-east-1.sc2s.sgov.gov",[M]:{[O]:[{[P]:"sigv4",[Q]:"support",[R]:"us-isob-east-1"}]},[N]:{}},
x=[{[I]:"booleanEquals",[J]:[{[K]:"UseFIPS"},true]}],
y=[{[I]:"booleanEquals",[J]:[{[K]:"UseDualStack"},true]}],
z=[k],
A=[{[I]:"booleanEquals",[J]:[{[K]:"UseFIPS"},true]},{[I]:"booleanEquals",[J]:[{[K]:"UseDualStack"},true]}],
B=[{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsFIPS"]}]},{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsDualStack"]}]}],
C=[{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsFIPS"]}]}],
D=[{[I]:"booleanEquals",[J]:[true,{[I]:"getAttr",[J]:[{[K]:e},"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},[G]:[{[H]:[{[I]:a,[J]:[i]}],[F]:b,[G]:[{[H]:x,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[F]:c},{[F]:b,[G]:[{[H]:y,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[F]:c},{endpoint:{[L]:i,[M]:j,[N]:j},[F]:d}]}]},{[F]:b,[G]:[{[H]:[{[I]:a,[J]:z}],[F]:b,[G]:[{[H]:[{[I]:"aws.partition",[J]:z,assign:e}],[F]:b,[G]:[{[H]:[{[I]:f,[J]:[l,"aws"]}],[F]:b,[G]:[m,o,q,{endpoint:s,[F]:d}]},{[H]:[{[I]:f,[J]:[l,"aws-cn"]}],[F]:b,[G]:[{[H]:A,[F]:b,[G]:[{[H]:B,[F]:b,[G]:[{endpoint:{[L]:"https://support-fips.{Region}.api.amazonwebservices.com.cn",[M]:j,[N]:j},[F]:d}]},n]},{[H]:x,[F]:b,[G]:[{[H]:C,[F]:b,[G]:[{endpoint:{[L]:"https://support-fips.{Region}.amazonaws.com.cn",[M]:j,[N]:j},[F]:d}]},p]},{[H]:y,[F]:b,[G]:[{[H]:D,[F]:b,[G]:[{endpoint:{[L]:"https://support.{Region}.api.amazonwebservices.com.cn",[M]:j,[N]:j},[F]:d}]},r]},{endpoint:t,[F]:d}]},{[H]:[{[I]:f,[J]:[l,"aws-us-gov"]}],[F]:b,[G]:[m,o,q,{endpoint:u,[F]:d}]},{[H]:[{[I]:f,[J]:[l,"aws-iso"]}],[F]:b,[G]:[{[H]:x,[F]:b,[G]:[{[H]:C,[F]:b,[G]:[{endpoint:{[L]:"https://support-fips.{Region}.c2s.ic.gov",[M]:j,[N]:j},[F]:d}]},p]},{endpoint:v,[F]:d}]},{[H]:[{[I]:f,[J]:[l,"aws-iso-b"]}],[F]:b,[G]:[{[H]:x,[F]:b,[G]:[{[H]:C,[F]:b,[G]:[{endpoint:{[L]:"https://support-fips.{Region}.sc2s.sgov.gov",[M]:j,[N]:j},[F]:d}]},p]},{endpoint:w,[F]:d}]},{[H]:A,[F]:b,[G]:[{[H]:B,[F]:b,[G]:[{[F]:b,[G]:[{endpoint:{[L]:"https://support-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[M]:j,[N]:j},[F]:d}]}]},n]},{[H]:x,[F]:b,[G]:[{[H]:C,[F]:b,[G]:[{[F]:b,[G]:[{endpoint:{[L]:"https://support-fips.{Region}.{PartitionResult#dnsSuffix}",[M]:j,[N]:j},[F]:d}]}]},p]},{[H]:y,[F]:b,[G]:[{[H]:D,[F]:b,[G]:[{[F]:b,[G]:[{endpoint:{[L]:"https://support.{Region}.{PartitionResult#dualStackDnsSuffix}",[M]:j,[N]:j},[F]:d}]}]},r]},{[F]:b,[G]:[{[H]:[{[I]:f,[J]:[k,"aws-global"]}],endpoint:s,[F]:d},{[H]:[{[I]:f,[J]:[k,"aws-cn-global"]}],endpoint:t,[F]:d},{[H]:[{[I]:f,[J]:[k,"aws-us-gov-global"]}],endpoint:u,[F]:d},{[H]:[{[I]:f,[J]:[k,"aws-iso-global"]}],endpoint:v,[F]:d},{[H]:[{[I]:f,[J]:[k,"aws-iso-b-global"]}],endpoint:w,[F]:d},{endpoint:{[L]:"https://support.{Region}.{PartitionResult#dnsSuffix}",[M]:j,[N]:j},[F]:d}]}]}]},{error:"Invalid Configuration: Missing Region",[F]:c}]}]};
export const ruleSet: RuleSetObject = _data;
