// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/networkmanager.json */

const B="required",
C="type",
D="rules",
E="conditions",
F="fn",
G="argv",
H="ref",
I="url",
J="properties",
K="headers",
L="authSchemes",
M="signingName",
N="signingRegion";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g={[B]:false,[C]:"String"},
h={[B]:true,"default":false,[C]:"Boolean"},
i={[H]:"Endpoint"},
j={},
k={[H]:"Region"},
l={[F]:"getAttr",[G]:[{[H]:e},"name"]},
m={[E]:[{[F]:"booleanEquals",[G]:[{[H]:"UseFIPS"},true]},{[F]:"booleanEquals",[G]:[{[H]:"UseDualStack"},true]}],[C]:b,[D]:[{[E]:[{[F]:"booleanEquals",[G]:[true,{[F]:"getAttr",[G]:[{[H]:e},"supportsFIPS"]}]},{[F]:"booleanEquals",[G]:[true,{[F]:"getAttr",[G]:[{[H]:e},"supportsDualStack"]}]}],[C]:b,[D]:[{[d]:{[I]:"https://networkmanager-fips.{Region}.api.aws",[J]:{},[K]:{}},[C]:d}]},{[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[C]:c}]},
n={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[C]:c},
o={[E]:[{[F]:"booleanEquals",[G]:[{[H]:"UseFIPS"},true]}],[C]:b,[D]:[{[E]:[{[F]:"booleanEquals",[G]:[true,{[F]:"getAttr",[G]:[{[H]:e},"supportsFIPS"]}]}],[C]:b,[D]:[{[d]:{[I]:"https://networkmanager-fips.{Region}.amazonaws.com",[J]:{},[K]:{}},[C]:d}]},{[c]:"FIPS is enabled but this partition does not support FIPS",[C]:c}]},
p={[c]:"FIPS is enabled but this partition does not support FIPS",[C]:c},
q={[E]:[{[F]:"booleanEquals",[G]:[{[H]:"UseDualStack"},true]}],[C]:b,[D]:[{[E]:[{[F]:"booleanEquals",[G]:[true,{[F]:"getAttr",[G]:[{[H]:e},"supportsDualStack"]}]}],[C]:b,[D]:[{[d]:{[I]:"https://networkmanager.{Region}.api.aws",[J]:{},[K]:{}},[C]:d}]},{[c]:"DualStack is enabled but this partition does not support DualStack",[C]:c}]},
r={[c]:"DualStack is enabled but this partition does not support DualStack",[C]:c},
s={[I]:"https://networkmanager.us-west-2.amazonaws.com",[J]:{[L]:[{"name":"sigv4",[M]:"networkmanager",[N]:"us-west-2"}]},[K]:{}},
t={[I]:"https://networkmanager.us-gov-west-1.amazonaws.com",[J]:{[L]:[{"name":"sigv4",[M]:"networkmanager",[N]:"us-gov-west-1"}]},[K]:{}},
u=[{[F]:"booleanEquals",[G]:[{[H]:"UseFIPS"},true]}],
v=[{[F]:"booleanEquals",[G]:[{[H]:"UseDualStack"},true]}],
w=[k],
x=[{[F]:"booleanEquals",[G]:[{[H]:"UseFIPS"},true]},{[F]:"booleanEquals",[G]:[{[H]:"UseDualStack"},true]}],
y=[{[F]:"booleanEquals",[G]:[true,{[F]:"getAttr",[G]:[{[H]:e},"supportsFIPS"]}]},{[F]:"booleanEquals",[G]:[true,{[F]:"getAttr",[G]:[{[H]:e},"supportsDualStack"]}]}],
z=[{[F]:"booleanEquals",[G]:[true,{[F]:"getAttr",[G]:[{[H]:e},"supportsFIPS"]}]}],
A=[{[F]:"booleanEquals",[G]:[true,{[F]:"getAttr",[G]:[{[H]:e},"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},[D]:[{[E]:[{[F]:a,[G]:[i]}],[C]:b,[D]:[{[E]:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[C]:c},{[C]:b,[D]:[{[E]:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[C]:c},{endpoint:{[I]:i,[J]:j,[K]:j},[C]:d}]}]},{[C]:b,[D]:[{[E]:[{[F]:a,[G]:w}],[C]:b,[D]:[{[E]:[{[F]:"aws.partition",[G]:w,assign:e}],[C]:b,[D]:[{[E]:[{[F]:f,[G]:[l,"aws"]}],[C]:b,[D]:[m,o,q,{endpoint:s,[C]:d}]},{[E]:[{[F]:f,[G]:[l,"aws-us-gov"]}],[C]:b,[D]:[m,o,q,{endpoint:t,[C]:d}]},{[E]:x,[C]:b,[D]:[{[E]:y,[C]:b,[D]:[{[C]:b,[D]:[{endpoint:{[I]:"https://networkmanager-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[J]:j,[K]:j},[C]:d}]}]},n]},{[E]:u,[C]:b,[D]:[{[E]:z,[C]:b,[D]:[{[C]:b,[D]:[{endpoint:{[I]:"https://networkmanager-fips.{Region}.{PartitionResult#dnsSuffix}",[J]:j,[K]:j},[C]:d}]}]},p]},{[E]:v,[C]:b,[D]:[{[E]:A,[C]:b,[D]:[{[C]:b,[D]:[{endpoint:{[I]:"https://networkmanager.{Region}.{PartitionResult#dualStackDnsSuffix}",[J]:j,[K]:j},[C]:d}]}]},r]},{[C]:b,[D]:[{[E]:[{[F]:f,[G]:[k,"aws-global"]}],endpoint:s,[C]:d},{[E]:[{[F]:f,[G]:[k,"aws-us-gov-global"]}],endpoint:t,[C]:d},{endpoint:{[I]:"https://networkmanager.{Region}.{PartitionResult#dnsSuffix}",[J]:j,[K]:j},[C]:d}]}]}]},{error:"Invalid Configuration: Missing Region",[C]:c}]}]};
export const ruleSet: RuleSetObject = _data;
