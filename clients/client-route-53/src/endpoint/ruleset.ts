// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/route-53.json */

const M="type",
N="fn",
O="argv",
P="ref",
Q="url",
R="properties",
S="headers",
T="authSchemes",
U="name",
V="signingRegion",
W="signingName";
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
k={"required":true,"default":false,[M]:"Boolean"},
l={[P]:"Region"},
m={[P]:"Endpoint"},
n={},
o={[N]:"getAttr",[O]:[{[P]:d},"name"]},
p={[T]:[{[U]:"sigv4",[V]:"us-east-1",[W]:"route53"}]},
q={[f]:"FIPS and DualStack are enabled, but this partition does not support one or both",[M]:f},
r={[Q]:"https://route53-fips.amazonaws.com",[R]:p,[S]:{}},
s={[f]:"FIPS is enabled but this partition does not support FIPS",[M]:f},
t={[f]:"DualStack is enabled but this partition does not support DualStack",[M]:f},
u={[Q]:"https://route53.amazonaws.com",[R]:p,[S]:{}},
v={[T]:[{[U]:"sigv4",[V]:"cn-northwest-1",[W]:"route53"}]},
w={[Q]:"https://route53.amazonaws.com.cn",[R]:v,[S]:{}},
x={[T]:[{[U]:"sigv4",[V]:"us-gov-west-1",[W]:"route53"}]},
y={[g]:{[Q]:"https://route53.us-gov.amazonaws.com",[R]:x,[S]:{}},[M]:g},
z={[T]:[{[U]:"sigv4",[V]:"us-iso-east-1",[W]:"route53"}]},
A={[Q]:"https://route53.c2s.ic.gov",[R]:z,[S]:{}},
B={[T]:[{[U]:"sigv4",[V]:"us-isob-east-1",[W]:"route53"}]},
C={[Q]:"https://route53.sc2s.sgov.gov",[R]:B,[S]:{}},
D={"conditions":[{[N]:h,[O]:[l,"aws-us-gov-global"]}],[g]:{[Q]:"https://route53.us-gov.amazonaws.com",[R]:x,[S]:{}},[M]:g},
E=[m],
F=[{[N]:"booleanEquals",[O]:[{[P]:"UseFIPS"},true]}],
G=[{[N]:"booleanEquals",[O]:[{[P]:"UseDualStack"},true]}],
H=[{[N]:"booleanEquals",[O]:[{[P]:"UseFIPS"},true]},{[N]:"booleanEquals",[O]:[{[P]:"UseDualStack"},true]}],
I=[{[N]:"booleanEquals",[O]:[true,{[N]:"getAttr",[O]:[{[P]:d},"supportsFIPS"]}]},{[N]:"booleanEquals",[O]:[true,{[N]:"getAttr",[O]:[{[P]:d},"supportsDualStack"]}]}],
J=[{[N]:"booleanEquals",[O]:[true,{[N]:"getAttr",[O]:[{[P]:d},"supportsFIPS"]}]}],
K=[{[N]:"booleanEquals",[O]:[true,{[N]:"getAttr",[O]:[{[P]:d},"supportsDualStack"]}]}],
L=[{[N]:h,[O]:[l,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:{required:a,[M]:c},UseDualStack:k,UseFIPS:k,Endpoint:{required:b,[M]:c}},rules:[{conditions:[{[N]:"aws.partition",[O]:[l],assign:d}],[M]:e,rules:[{conditions:[{[N]:"isSet",[O]:E},{[N]:"parseURL",[O]:E,assign:"url"}],[M]:e,rules:[{conditions:F,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[M]:f},{[M]:e,rules:[{conditions:G,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[M]:f},{endpoint:{[Q]:m,[R]:n,[S]:n},[M]:g}]}]},{conditions:[{[N]:h,[O]:[o,"aws"]}],[M]:e,rules:[{conditions:H,[M]:e,rules:[{conditions:I,[M]:e,rules:[{endpoint:{[Q]:i,[R]:p,[S]:n},[M]:g}]},q]},{conditions:F,[M]:e,rules:[{conditions:J,[M]:e,rules:[{endpoint:r,[M]:g}]},s]},{conditions:G,[M]:e,rules:[{conditions:K,[M]:e,rules:[{endpoint:{[Q]:j,[R]:p,[S]:n},[M]:g}]},t]},{endpoint:u,[M]:g}]},{conditions:[{[N]:h,[O]:[o,"aws-cn"]}],[M]:e,rules:[{conditions:H,[M]:e,rules:[{conditions:I,[M]:e,rules:[{endpoint:{[Q]:"https://route-53-fips.{Region}.api.amazonwebservices.com.cn",[R]:v,[S]:n},[M]:g}]},q]},{conditions:F,[M]:e,rules:[{conditions:J,[M]:e,rules:[{endpoint:{[Q]:"https://route-53-fips.{Region}.amazonaws.com.cn",[R]:v,[S]:n},[M]:g}]},s]},{conditions:G,[M]:e,rules:[{conditions:K,[M]:e,rules:[{endpoint:{[Q]:"https://route-53.{Region}.api.amazonwebservices.com.cn",[R]:v,[S]:n},[M]:g}]},t]},{endpoint:w,[M]:g}]},{conditions:[{[N]:h,[O]:[o,"aws-us-gov"]}],[M]:e,rules:[{conditions:H,[M]:e,rules:[{conditions:I,[M]:e,rules:[{endpoint:{[Q]:i,[R]:x,[S]:n},[M]:g}]},q]},{conditions:F,[M]:e,rules:[{conditions:J,[M]:e,rules:[y]},s]},{conditions:G,[M]:e,rules:[{conditions:K,[M]:e,rules:[{endpoint:{[Q]:j,[R]:x,[S]:n},[M]:g}]},t]},y]},{conditions:[{[N]:h,[O]:[o,"aws-iso"]}],[M]:e,rules:[{conditions:F,[M]:e,rules:[{conditions:J,[M]:e,rules:[{endpoint:{[Q]:"https://route-53-fips.{Region}.c2s.ic.gov",[R]:z,[S]:n},[M]:g}]},s]},{endpoint:A,[M]:g}]},{conditions:[{[N]:h,[O]:[o,"aws-iso-b"]}],[M]:e,rules:[{conditions:F,[M]:e,rules:[{conditions:J,[M]:e,rules:[{endpoint:{[Q]:"https://route-53-fips.{Region}.sc2s.sgov.gov",[R]:B,[S]:n},[M]:g}]},s]},{endpoint:C,[M]:g}]},{conditions:H,[M]:e,rules:[{conditions:I,[M]:e,rules:[{endpoint:{[Q]:"https://route53-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[R]:n,[S]:n},[M]:g}]},q]},{conditions:F,[M]:e,rules:[{conditions:J,[M]:e,rules:[{[M]:e,rules:[{conditions:L,endpoint:r,[M]:g},D,{endpoint:{[Q]:"https://route53-fips.{Region}.{PartitionResult#dnsSuffix}",[R]:n,[S]:n},[M]:g}]}]},s]},{conditions:G,[M]:e,rules:[{conditions:K,[M]:e,rules:[{endpoint:{[Q]:"https://route53.{Region}.{PartitionResult#dualStackDnsSuffix}",[R]:n,[S]:n},[M]:g}]},t]},{[M]:e,rules:[{conditions:L,endpoint:u,[M]:g},{conditions:[{[N]:h,[O]:[l,"aws-cn-global"]}],endpoint:w,[M]:g},D,{conditions:[{[N]:h,[O]:[l,"aws-iso-global"]}],endpoint:A,[M]:g},{conditions:[{[N]:h,[O]:[l,"aws-iso-b-global"]}],endpoint:C,[M]:g},{endpoint:{[Q]:"https://route53.{Region}.{PartitionResult#dnsSuffix}",[R]:n,[S]:n},[M]:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
