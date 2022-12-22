// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/organizations.json */

const K="type",
L="fn",
M="argv",
N="ref",
O="url",
P="properties",
Q="headers",
R="authSchemes",
S="name",
T="signingRegion",
U="signingName";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="stringEquals",
i="https://organizations-fips.{Region}.api.aws",
j="https://organizations-fips.us-east-1.amazonaws.com",
k="https://organizations.{Region}.api.aws",
l="https://organizations.us-gov-west-1.amazonaws.com",
m={"required":true,"default":false,[K]:"Boolean"},
n={[N]:"Region"},
o={[N]:"Endpoint"},
p={},
q={[L]:"getAttr",[M]:[{[N]:d},"name"]},
r={[R]:[{[S]:"sigv4",[T]:"us-east-1",[U]:"organizations"}]},
s={[f]:"FIPS and DualStack are enabled, but this partition does not support one or both",[K]:f},
t={[f]:"FIPS is enabled but this partition does not support FIPS",[K]:f},
u={[f]:"DualStack is enabled but this partition does not support DualStack",[K]:f},
v={[O]:"https://organizations.us-east-1.amazonaws.com",[P]:r,[Q]:{}},
w={[R]:[{[S]:"sigv4",[T]:"cn-northwest-1",[U]:"organizations"}]},
x={[O]:"https://organizations.cn-northwest-1.amazonaws.com.cn",[P]:w,[Q]:{}},
y={[R]:[{[S]:"sigv4",[T]:"us-gov-west-1",[U]:"organizations"}]},
z={[g]:{[O]:l,[P]:y,[Q]:{}},[K]:g},
A={[O]:l,[P]:y,[Q]:{}},
B=[o],
C=[{[L]:"booleanEquals",[M]:[{[N]:"UseFIPS"},true]}],
D=[{[L]:"booleanEquals",[M]:[{[N]:"UseDualStack"},true]}],
E=[{[L]:"booleanEquals",[M]:[{[N]:"UseFIPS"},true]},{[L]:"booleanEquals",[M]:[{[N]:"UseDualStack"},true]}],
F=[{[L]:"booleanEquals",[M]:[true,{[L]:"getAttr",[M]:[{[N]:d},"supportsFIPS"]}]},{[L]:"booleanEquals",[M]:[true,{[L]:"getAttr",[M]:[{[N]:d},"supportsDualStack"]}]}],
G=[{[L]:"booleanEquals",[M]:[true,{[L]:"getAttr",[M]:[{[N]:d},"supportsFIPS"]}]}],
H=[{[L]:"booleanEquals",[M]:[true,{[L]:"getAttr",[M]:[{[N]:d},"supportsDualStack"]}]}],
I=[{[L]:h,[M]:[n,"aws-global"]}],
J=[{[L]:h,[M]:[n,"aws-us-gov-global"]}];
const _data={version:"1.0",parameters:{Region:{required:a,[K]:c},UseDualStack:m,UseFIPS:m,Endpoint:{required:b,[K]:c}},rules:[{conditions:[{[L]:"aws.partition",[M]:[n],assign:d}],[K]:e,rules:[{conditions:[{[L]:"isSet",[M]:B},{[L]:"parseURL",[M]:B,assign:"url"}],[K]:e,rules:[{conditions:C,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[K]:f},{[K]:e,rules:[{conditions:D,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[K]:f},{endpoint:{[O]:o,[P]:p,[Q]:p},[K]:g}]}]},{conditions:[{[L]:h,[M]:[q,"aws"]}],[K]:e,rules:[{conditions:E,[K]:e,rules:[{conditions:F,[K]:e,rules:[{endpoint:{[O]:i,[P]:r,[Q]:p},[K]:g}]},s]},{conditions:C,[K]:e,rules:[{conditions:G,[K]:e,rules:[{endpoint:{[O]:j,[P]:r,[Q]:p},[K]:g}]},t]},{conditions:D,[K]:e,rules:[{conditions:H,[K]:e,rules:[{endpoint:{[O]:k,[P]:r,[Q]:p},[K]:g}]},u]},{endpoint:v,[K]:g}]},{conditions:[{[L]:h,[M]:[q,"aws-cn"]}],[K]:e,rules:[{conditions:E,[K]:e,rules:[{conditions:F,[K]:e,rules:[{endpoint:{[O]:"https://organizations-fips.{Region}.api.amazonwebservices.com.cn",[P]:w,[Q]:p},[K]:g}]},s]},{conditions:C,[K]:e,rules:[{conditions:G,[K]:e,rules:[{endpoint:{[O]:"https://organizations-fips.{Region}.amazonaws.com.cn",[P]:w,[Q]:p},[K]:g}]},t]},{conditions:D,[K]:e,rules:[{conditions:H,[K]:e,rules:[{endpoint:{[O]:"https://organizations.{Region}.api.amazonwebservices.com.cn",[P]:w,[Q]:p},[K]:g}]},u]},{endpoint:x,[K]:g}]},{conditions:[{[L]:h,[M]:[q,"aws-us-gov"]}],[K]:e,rules:[{conditions:E,[K]:e,rules:[{conditions:F,[K]:e,rules:[{endpoint:{[O]:i,[P]:y,[Q]:p},[K]:g}]},s]},{conditions:C,[K]:e,rules:[{conditions:G,[K]:e,rules:[z]},t]},{conditions:D,[K]:e,rules:[{conditions:H,[K]:e,rules:[{endpoint:{[O]:k,[P]:y,[Q]:p},[K]:g}]},u]},z]},{conditions:E,[K]:e,rules:[{conditions:F,[K]:e,rules:[{endpoint:{[O]:"https://organizations-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[P]:p,[Q]:p},[K]:g}]},s]},{conditions:C,[K]:e,rules:[{conditions:G,[K]:e,rules:[{[K]:e,rules:[{conditions:I,endpoint:{[O]:j,[P]:p,[Q]:p},[K]:g},{conditions:J,endpoint:{[O]:l,[P]:p,[Q]:p},[K]:g},{endpoint:{[O]:"https://organizations-fips.{Region}.{PartitionResult#dnsSuffix}",[P]:p,[Q]:p},[K]:g}]}]},t]},{conditions:D,[K]:e,rules:[{conditions:H,[K]:e,rules:[{endpoint:{[O]:"https://organizations.{Region}.{PartitionResult#dualStackDnsSuffix}",[P]:p,[Q]:p},[K]:g}]},u]},{[K]:e,rules:[{conditions:I,endpoint:v,[K]:g},{conditions:[{[L]:h,[M]:[n,"aws-cn-global"]}],endpoint:x,[K]:g},{conditions:J,endpoint:A,[K]:g},{endpoint:{[O]:"https://organizations.{Region}.{PartitionResult#dnsSuffix}",[P]:p,[Q]:p},[K]:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
