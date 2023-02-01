// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/iam.json */

const G="type",
H="rules",
I="conditions",
J="fn",
K="argv",
L="ref",
M="url",
N="properties",
O="headers",
P="authSchemes",
Q="name",
R="signingRegion",
S="signingName";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="stringEquals",
i={"required":true,"default":false,[G]:"Boolean"},
j={[L]:"Region"},
k={[L]:"Endpoint"},
l={},
m={[J]:"getAttr",[K]:[{[L]:d},"name"]},
n={[I]:[{[J]:"booleanEquals",[K]:[{[L]:"UseFIPS"},true]},{[J]:"booleanEquals",[K]:[{[L]:"UseDualStack"},true]}],[G]:e,[H]:[{[I]:[{[J]:"booleanEquals",[K]:[true,{[J]:"getAttr",[K]:[{[L]:d},"supportsFIPS"]}]},{[J]:"booleanEquals",[K]:[true,{[J]:"getAttr",[K]:[{[L]:d},"supportsDualStack"]}]}],[G]:e,[H]:[{[g]:{[M]:"https://iam-fips.{Region}.api.aws",[N]:{},[O]:{}},[G]:g}]},{[f]:"FIPS and DualStack are enabled, but this partition does not support one or both",[G]:f}]},
o={[f]:"FIPS and DualStack are enabled, but this partition does not support one or both",[G]:f},
p={[M]:"https://iam-fips.amazonaws.com",[N]:{[P]:[{[Q]:"sigv4",[R]:"us-east-1",[S]:"iam"}]},[O]:{}},
q={[f]:"FIPS is enabled but this partition does not support FIPS",[G]:f},
r={[I]:[{[J]:"booleanEquals",[K]:[{[L]:"UseDualStack"},true]}],[G]:e,[H]:[{[I]:[{[J]:"booleanEquals",[K]:[true,{[J]:"getAttr",[K]:[{[L]:d},"supportsDualStack"]}]}],[G]:e,[H]:[{[g]:{[M]:"https://iam.{Region}.api.aws",[N]:{},[O]:{}},[G]:g}]},{[f]:"DualStack is enabled but this partition does not support DualStack",[G]:f}]},
s={[f]:"DualStack is enabled but this partition does not support DualStack",[G]:f},
t={[M]:"https://iam.amazonaws.com",[N]:{[P]:[{[Q]:"sigv4",[R]:"us-east-1",[S]:"iam"}]},[O]:{}},
u={[M]:"https://iam.cn-north-1.amazonaws.com.cn",[N]:{[P]:[{[Q]:"sigv4",[R]:"cn-north-1",[S]:"iam"}]},[O]:{}},
v={[g]:{[M]:"https://iam.us-gov.amazonaws.com",[N]:{[P]:[{[Q]:"sigv4",[R]:"us-gov-west-1",[S]:"iam"}]},[O]:{}},[G]:g},
w={[M]:"https://iam.us-iso-east-1.c2s.ic.gov",[N]:{[P]:[{[Q]:"sigv4",[R]:"us-iso-east-1",[S]:"iam"}]},[O]:{}},
x={[M]:"https://iam.us-isob-east-1.sc2s.sgov.gov",[N]:{[P]:[{[Q]:"sigv4",[R]:"us-isob-east-1",[S]:"iam"}]},[O]:{}},
y={[I]:[{[J]:h,[K]:[j,"aws-us-gov-global"]}],[g]:{[M]:"https://iam.us-gov.amazonaws.com",[N]:{[P]:[{[Q]:"sigv4",[R]:"us-gov-west-1",[S]:"iam"}]},[O]:{}},[G]:g},
z=[{[J]:"booleanEquals",[K]:[{[L]:"UseFIPS"},true]}],
A=[{[J]:"booleanEquals",[K]:[{[L]:"UseDualStack"},true]}],
B=[{[J]:"booleanEquals",[K]:[{[L]:"UseFIPS"},true]},{[J]:"booleanEquals",[K]:[{[L]:"UseDualStack"},true]}],
C=[{[J]:"booleanEquals",[K]:[true,{[J]:"getAttr",[K]:[{[L]:d},"supportsFIPS"]}]},{[J]:"booleanEquals",[K]:[true,{[J]:"getAttr",[K]:[{[L]:d},"supportsDualStack"]}]}],
D=[{[J]:"booleanEquals",[K]:[true,{[J]:"getAttr",[K]:[{[L]:d},"supportsFIPS"]}]}],
E=[{[J]:"booleanEquals",[K]:[true,{[J]:"getAttr",[K]:[{[L]:d},"supportsDualStack"]}]}],
F=[{[J]:h,[K]:[j,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:{required:a,[G]:c},UseDualStack:i,UseFIPS:i,Endpoint:{required:b,[G]:c}},[H]:[{[I]:[{[J]:"aws.partition",[K]:[j],assign:d}],[G]:e,[H]:[{[I]:[{[J]:"isSet",[K]:[k]}],[G]:e,[H]:[{[I]:z,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[G]:f},{[G]:e,[H]:[{[I]:A,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[G]:f},{endpoint:{[M]:k,[N]:l,[O]:l},[G]:g}]}]},{[I]:[{[J]:h,[K]:[m,"aws"]}],[G]:e,[H]:[n,{[I]:z,[G]:e,[H]:[{[I]:D,[G]:e,[H]:[{endpoint:p,[G]:g}]},q]},r,{endpoint:t,[G]:g}]},{[I]:[{[J]:h,[K]:[m,"aws-cn"]}],[G]:e,[H]:[{[I]:B,[G]:e,[H]:[{[I]:C,[G]:e,[H]:[{endpoint:{[M]:"https://iam-fips.{Region}.api.amazonwebservices.com.cn",[N]:l,[O]:l},[G]:g}]},o]},{[I]:z,[G]:e,[H]:[{[I]:D,[G]:e,[H]:[{endpoint:{[M]:"https://iam-fips.{Region}.amazonaws.com.cn",[N]:l,[O]:l},[G]:g}]},q]},{[I]:A,[G]:e,[H]:[{[I]:E,[G]:e,[H]:[{endpoint:{[M]:"https://iam.{Region}.api.amazonwebservices.com.cn",[N]:l,[O]:l},[G]:g}]},s]},{endpoint:u,[G]:g}]},{[I]:[{[J]:h,[K]:[m,"aws-us-gov"]}],[G]:e,[H]:[n,{[I]:z,[G]:e,[H]:[{[I]:D,[G]:e,[H]:[v]},q]},r,v]},{[I]:[{[J]:h,[K]:[m,"aws-iso"]}],[G]:e,[H]:[{[I]:z,[G]:e,[H]:[{[I]:D,[G]:e,[H]:[{endpoint:{[M]:"https://iam-fips.{Region}.c2s.ic.gov",[N]:l,[O]:l},[G]:g}]},q]},{endpoint:w,[G]:g}]},{[I]:[{[J]:h,[K]:[m,"aws-iso-b"]}],[G]:e,[H]:[{[I]:z,[G]:e,[H]:[{[I]:D,[G]:e,[H]:[{endpoint:{[M]:"https://iam-fips.{Region}.sc2s.sgov.gov",[N]:l,[O]:l},[G]:g}]},q]},{endpoint:x,[G]:g}]},{[I]:B,[G]:e,[H]:[{[I]:C,[G]:e,[H]:[{[G]:e,[H]:[{endpoint:{[M]:"https://iam-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[N]:l,[O]:l},[G]:g}]}]},o]},{[I]:z,[G]:e,[H]:[{[I]:D,[G]:e,[H]:[{[G]:e,[H]:[{[I]:F,endpoint:p,[G]:g},y,{endpoint:{[M]:"https://iam-fips.{Region}.{PartitionResult#dnsSuffix}",[N]:l,[O]:l},[G]:g}]}]},q]},{[I]:A,[G]:e,[H]:[{[I]:E,[G]:e,[H]:[{[G]:e,[H]:[{endpoint:{[M]:"https://iam.{Region}.{PartitionResult#dualStackDnsSuffix}",[N]:l,[O]:l},[G]:g}]}]},s]},{[G]:e,[H]:[{[I]:F,endpoint:t,[G]:g},{[I]:[{[J]:h,[K]:[j,"aws-cn-global"]}],endpoint:u,[G]:g},y,{[I]:[{[J]:h,[K]:[j,"aws-iso-global"]}],endpoint:w,[G]:g},{[I]:[{[J]:h,[K]:[j,"aws-iso-b-global"]}],endpoint:x,[G]:g},{endpoint:{[M]:"https://iam.{Region}.{PartitionResult#dnsSuffix}",[N]:l,[O]:l},[G]:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
