// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/route-53.json */

const L="type",
M="fn",
N="argv",
O="ref",
P="url",
Q="properties",
R="headers",
S="authSchemes",
T="name",
U="signingRegion",
V="signingName";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="stringEquals",
i="https://route-53-fips.{Region}.api.aws",
j="https://route-53.{Region}.api.aws",
k={"required":true,"default":false,[L]:"Boolean"},
l={[O]:"Region"},
m={[O]:"Endpoint"},
n={},
o={[M]:"getAttr",[N]:[{[O]:d},"name"]},
p={[S]:[{[T]:"sigv4",[U]:"us-east-1",[V]:"route53"}]},
q={[f]:"FIPS and DualStack are enabled, but this partition does not support one or both",[L]:f},
r={[P]:"https://route53-fips.amazonaws.com",[Q]:p,[R]:{}},
s={[f]:"FIPS is enabled but this partition does not support FIPS",[L]:f},
t={[f]:"DualStack is enabled but this partition does not support DualStack",[L]:f},
u={[P]:"https://route53.amazonaws.com",[Q]:p,[R]:{}},
v={[S]:[{[T]:"sigv4",[U]:"cn-northwest-1",[V]:"route53"}]},
w={[P]:"https://route53.amazonaws.com.cn",[Q]:v,[R]:{}},
x={[S]:[{[T]:"sigv4",[U]:"us-gov-west-1",[V]:"route53"}]},
y={[g]:{[P]:"https://route53.us-gov.amazonaws.com",[Q]:x,[R]:{}},[L]:g},
z={[S]:[{[T]:"sigv4",[U]:"us-iso-east-1",[V]:"route53"}]},
A={[P]:"https://route53.c2s.ic.gov",[Q]:z,[R]:{}},
B={[S]:[{[T]:"sigv4",[U]:"us-isob-east-1",[V]:"route53"}]},
C={[P]:"https://route53.sc2s.sgov.gov",[Q]:B,[R]:{}},
D={"conditions":[{[M]:h,[N]:[l,"aws-us-gov-global"]}],[g]:{[P]:"https://route53.us-gov.amazonaws.com",[Q]:x,[R]:{}},[L]:g},
E=[{[M]:"booleanEquals",[N]:[{[O]:"UseFIPS"},true]}],
F=[{[M]:"booleanEquals",[N]:[{[O]:"UseDualStack"},true]}],
G=[{[M]:"booleanEquals",[N]:[{[O]:"UseFIPS"},true]},{[M]:"booleanEquals",[N]:[{[O]:"UseDualStack"},true]}],
H=[{[M]:"booleanEquals",[N]:[true,{[M]:"getAttr",[N]:[{[O]:d},"supportsFIPS"]}]},{[M]:"booleanEquals",[N]:[true,{[M]:"getAttr",[N]:[{[O]:d},"supportsDualStack"]}]}],
I=[{[M]:"booleanEquals",[N]:[true,{[M]:"getAttr",[N]:[{[O]:d},"supportsFIPS"]}]}],
J=[{[M]:"booleanEquals",[N]:[true,{[M]:"getAttr",[N]:[{[O]:d},"supportsDualStack"]}]}],
K=[{[M]:h,[N]:[l,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:{required:a,[L]:c},UseDualStack:k,UseFIPS:k,Endpoint:{required:b,[L]:c}},rules:[{conditions:[{[M]:"aws.partition",[N]:[l],assign:d}],[L]:e,rules:[{conditions:[{[M]:"isSet",[N]:[m]}],[L]:e,rules:[{conditions:E,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[L]:f},{[L]:e,rules:[{conditions:F,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[L]:f},{endpoint:{[P]:m,[Q]:n,[R]:n},[L]:g}]}]},{conditions:[{[M]:h,[N]:[o,"aws"]}],[L]:e,rules:[{conditions:G,[L]:e,rules:[{conditions:H,[L]:e,rules:[{endpoint:{[P]:i,[Q]:p,[R]:n},[L]:g}]},q]},{conditions:E,[L]:e,rules:[{conditions:I,[L]:e,rules:[{endpoint:r,[L]:g}]},s]},{conditions:F,[L]:e,rules:[{conditions:J,[L]:e,rules:[{endpoint:{[P]:j,[Q]:p,[R]:n},[L]:g}]},t]},{endpoint:u,[L]:g}]},{conditions:[{[M]:h,[N]:[o,"aws-cn"]}],[L]:e,rules:[{conditions:G,[L]:e,rules:[{conditions:H,[L]:e,rules:[{endpoint:{[P]:"https://route-53-fips.{Region}.api.amazonwebservices.com.cn",[Q]:v,[R]:n},[L]:g}]},q]},{conditions:E,[L]:e,rules:[{conditions:I,[L]:e,rules:[{endpoint:{[P]:"https://route-53-fips.{Region}.amazonaws.com.cn",[Q]:v,[R]:n},[L]:g}]},s]},{conditions:F,[L]:e,rules:[{conditions:J,[L]:e,rules:[{endpoint:{[P]:"https://route-53.{Region}.api.amazonwebservices.com.cn",[Q]:v,[R]:n},[L]:g}]},t]},{endpoint:w,[L]:g}]},{conditions:[{[M]:h,[N]:[o,"aws-us-gov"]}],[L]:e,rules:[{conditions:G,[L]:e,rules:[{conditions:H,[L]:e,rules:[{endpoint:{[P]:i,[Q]:x,[R]:n},[L]:g}]},q]},{conditions:E,[L]:e,rules:[{conditions:I,[L]:e,rules:[y]},s]},{conditions:F,[L]:e,rules:[{conditions:J,[L]:e,rules:[{endpoint:{[P]:j,[Q]:x,[R]:n},[L]:g}]},t]},y]},{conditions:[{[M]:h,[N]:[o,"aws-iso"]}],[L]:e,rules:[{conditions:E,[L]:e,rules:[{conditions:I,[L]:e,rules:[{endpoint:{[P]:"https://route-53-fips.{Region}.c2s.ic.gov",[Q]:z,[R]:n},[L]:g}]},s]},{endpoint:A,[L]:g}]},{conditions:[{[M]:h,[N]:[o,"aws-iso-b"]}],[L]:e,rules:[{conditions:E,[L]:e,rules:[{conditions:I,[L]:e,rules:[{endpoint:{[P]:"https://route-53-fips.{Region}.sc2s.sgov.gov",[Q]:B,[R]:n},[L]:g}]},s]},{endpoint:C,[L]:g}]},{conditions:G,[L]:e,rules:[{conditions:H,[L]:e,rules:[{endpoint:{[P]:"https://route53-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[Q]:n,[R]:n},[L]:g}]},q]},{conditions:E,[L]:e,rules:[{conditions:I,[L]:e,rules:[{[L]:e,rules:[{conditions:K,endpoint:r,[L]:g},D,{endpoint:{[P]:"https://route53-fips.{Region}.{PartitionResult#dnsSuffix}",[Q]:n,[R]:n},[L]:g}]}]},s]},{conditions:F,[L]:e,rules:[{conditions:J,[L]:e,rules:[{endpoint:{[P]:"https://route53.{Region}.{PartitionResult#dualStackDnsSuffix}",[Q]:n,[R]:n},[L]:g}]},t]},{[L]:e,rules:[{conditions:K,endpoint:u,[L]:g},{conditions:[{[M]:h,[N]:[l,"aws-cn-global"]}],endpoint:w,[L]:g},D,{conditions:[{[M]:h,[N]:[l,"aws-iso-global"]}],endpoint:A,[L]:g},{conditions:[{[M]:h,[N]:[l,"aws-iso-b-global"]}],endpoint:C,[L]:g},{endpoint:{[P]:"https://route53.{Region}.{PartitionResult#dnsSuffix}",[Q]:n,[R]:n},[L]:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
