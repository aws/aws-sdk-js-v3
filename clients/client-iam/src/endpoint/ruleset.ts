// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/iam.json */

const M="required",
N="type",
O="fn",
P="argv",
Q="ref",
R="url",
S="properties",
T="headers",
U="authSchemes",
V="name",
W="signingRegion",
X="signingName";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="stringEquals",
f="https://iam-fips.{Region}.api.aws",
g="iam",
h="https://iam.{Region}.api.aws",
i={[M]:false,[N]:"String"},
j={[M]:true,"default":false,[N]:"Boolean"},
k={[Q]:"Region"},
l={[Q]:"Endpoint"},
m={},
n={[O]:"getAttr",[P]:[{[Q]:a},"name"]},
o={[U]:[{[V]:"sigv4",[W]:"us-east-1",[X]:g}]},
p={[c]:"FIPS and DualStack are enabled, but this partition does not support one or both",[N]:c},
q={[R]:"https://iam-fips.amazonaws.com",[S]:o,[T]:{}},
r={[c]:"FIPS is enabled but this partition does not support FIPS",[N]:c},
s={[c]:"DualStack is enabled but this partition does not support DualStack",[N]:c},
t={[R]:"https://iam.amazonaws.com",[S]:o,[T]:{}},
u={[U]:[{[V]:"sigv4",[W]:"cn-north-1",[X]:g}]},
v={[R]:"https://iam.cn-north-1.amazonaws.com.cn",[S]:u,[T]:{}},
w={[U]:[{[V]:"sigv4",[W]:"us-gov-west-1",[X]:g}]},
x={[d]:{[R]:"https://iam.us-gov.amazonaws.com",[S]:w,[T]:{}},[N]:d},
y={[R]:"https://iam.us-gov.amazonaws.com",[S]:w,[T]:{}},
z={[U]:[{[V]:"sigv4",[W]:"us-iso-east-1",[X]:g}]},
A={[R]:"https://iam.us-iso-east-1.c2s.ic.gov",[S]:z,[T]:{}},
B={[U]:[{[V]:"sigv4",[W]:"us-isob-east-1",[X]:g}]},
C={[R]:"https://iam.us-isob-east-1.sc2s.sgov.gov",[S]:B,[T]:{}},
D={"conditions":[{[O]:e,[P]:[k,"aws-us-gov-global"]}],[d]:y,[N]:d},
E=[l],
F=[{[O]:"booleanEquals",[P]:[{[Q]:"UseFIPS"},true]}],
G=[{[O]:"booleanEquals",[P]:[{[Q]:"UseDualStack"},true]}],
H=[{[O]:"booleanEquals",[P]:[{[Q]:"UseFIPS"},true]},{[O]:"booleanEquals",[P]:[{[Q]:"UseDualStack"},true]}],
I=[{[O]:"booleanEquals",[P]:[true,{[O]:"getAttr",[P]:[{[Q]:a},"supportsFIPS"]}]},{[O]:"booleanEquals",[P]:[true,{[O]:"getAttr",[P]:[{[Q]:a},"supportsDualStack"]}]}],
J=[{[O]:"booleanEquals",[P]:[true,{[O]:"getAttr",[P]:[{[Q]:a},"supportsFIPS"]}]}],
K=[{[O]:"booleanEquals",[P]:[true,{[O]:"getAttr",[P]:[{[Q]:a},"supportsDualStack"]}]}],
L=[{[O]:e,[P]:[k,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[O]:"aws.partition",[P]:[k],assign:a}],[N]:b,rules:[{conditions:[{[O]:"isSet",[P]:E},{[O]:"parseURL",[P]:E,assign:"url"}],[N]:b,rules:[{conditions:F,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[N]:c},{[N]:b,rules:[{conditions:G,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[N]:c},{endpoint:{[R]:l,[S]:m,[T]:m},[N]:d}]}]},{conditions:[{[O]:e,[P]:[n,"aws"]}],[N]:b,rules:[{conditions:H,[N]:b,rules:[{conditions:I,[N]:b,rules:[{endpoint:{[R]:f,[S]:o,[T]:m},[N]:d}]},p]},{conditions:F,[N]:b,rules:[{conditions:J,[N]:b,rules:[{endpoint:q,[N]:d}]},r]},{conditions:G,[N]:b,rules:[{conditions:K,[N]:b,rules:[{endpoint:{[R]:h,[S]:o,[T]:m},[N]:d}]},s]},{endpoint:t,[N]:d}]},{conditions:[{[O]:e,[P]:[n,"aws-cn"]}],[N]:b,rules:[{conditions:H,[N]:b,rules:[{conditions:I,[N]:b,rules:[{endpoint:{[R]:"https://iam-fips.{Region}.api.amazonwebservices.com.cn",[S]:u,[T]:m},[N]:d}]},p]},{conditions:F,[N]:b,rules:[{conditions:J,[N]:b,rules:[{endpoint:{[R]:"https://iam-fips.{Region}.amazonaws.com.cn",[S]:u,[T]:m},[N]:d}]},r]},{conditions:G,[N]:b,rules:[{conditions:K,[N]:b,rules:[{endpoint:{[R]:"https://iam.{Region}.api.amazonwebservices.com.cn",[S]:u,[T]:m},[N]:d}]},s]},{endpoint:v,[N]:d}]},{conditions:[{[O]:e,[P]:[n,"aws-us-gov"]}],[N]:b,rules:[{conditions:H,[N]:b,rules:[{conditions:I,[N]:b,rules:[{endpoint:{[R]:f,[S]:w,[T]:m},[N]:d}]},p]},{conditions:F,[N]:b,rules:[{conditions:J,[N]:b,rules:[x]},r]},{conditions:G,[N]:b,rules:[{conditions:K,[N]:b,rules:[{endpoint:{[R]:h,[S]:w,[T]:m},[N]:d}]},s]},x]},{conditions:[{[O]:e,[P]:[n,"aws-iso"]}],[N]:b,rules:[{conditions:F,[N]:b,rules:[{conditions:J,[N]:b,rules:[{endpoint:{[R]:"https://iam-fips.{Region}.c2s.ic.gov",[S]:z,[T]:m},[N]:d}]},r]},{endpoint:A,[N]:d}]},{conditions:[{[O]:e,[P]:[n,"aws-iso-b"]}],[N]:b,rules:[{conditions:F,[N]:b,rules:[{conditions:J,[N]:b,rules:[{endpoint:{[R]:"https://iam-fips.{Region}.sc2s.sgov.gov",[S]:B,[T]:m},[N]:d}]},r]},{endpoint:C,[N]:d}]},{conditions:H,[N]:b,rules:[{conditions:I,[N]:b,rules:[{endpoint:{[R]:"https://iam-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[S]:m,[T]:m},[N]:d}]},p]},{conditions:F,[N]:b,rules:[{conditions:J,[N]:b,rules:[{[N]:b,rules:[{conditions:[{[O]:e,[P]:[k,g]}],endpoint:q,[N]:d},{conditions:L,endpoint:q,[N]:d},{conditions:[{[O]:e,[P]:[k,"iam-govcloud"]}],endpoint:y,[N]:d},D,{endpoint:{[R]:"https://iam-fips.{Region}.{PartitionResult#dnsSuffix}",[S]:m,[T]:m},[N]:d}]}]},r]},{conditions:G,[N]:b,rules:[{conditions:K,[N]:b,rules:[{endpoint:{[R]:"https://iam.{Region}.{PartitionResult#dualStackDnsSuffix}",[S]:m,[T]:m},[N]:d}]},s]},{[N]:b,rules:[{conditions:L,endpoint:t,[N]:d},{conditions:[{[O]:e,[P]:[k,"aws-cn-global"]}],endpoint:v,[N]:d},D,{conditions:[{[O]:e,[P]:[k,"aws-iso-global"]}],endpoint:A,[N]:d},{conditions:[{[O]:e,[P]:[k,"aws-iso-b-global"]}],endpoint:C,[N]:d},{endpoint:{[R]:"https://iam.{Region}.{PartitionResult#dnsSuffix}",[S]:m,[T]:m},[N]:d}]}]}]};
export const ruleSet: RuleSetObject = _data;
