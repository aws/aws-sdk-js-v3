// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/route-53.json */

const N="type",
O="conditions",
P="fn",
Q="argv",
R="ref",
S="url",
T="properties",
U="headers",
V="authSchemes",
W="name",
X="signingRegion",
Y="signingName";
const a=true,
b=false,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="stringEquals",
j="https://route-53-fips.{Region}.api.aws",
k="https://route-53.{Region}.api.aws",
l={[R]:"Region"},
m={[R]:"Endpoint"},
n={},
o={[P]:"getAttr",[Q]:[{[R]:e},"name"]},
p={[V]:[{[W]:"sigv4",[X]:"us-east-1",[Y]:"route53"}]},
q={[O]:[],[g]:"FIPS and DualStack are enabled, but this partition does not support one or both",[N]:g},
r={[S]:"https://route53-fips.amazonaws.com",[T]:p,[U]:{}},
s={[O]:[],[g]:"FIPS is enabled but this partition does not support FIPS",[N]:g},
t={[O]:[],[g]:"DualStack is enabled but this partition does not support DualStack",[N]:g},
u={[S]:"https://route53.amazonaws.com",[T]:p,[U]:{}},
v={[V]:[{[W]:"sigv4",[X]:"cn-northwest-1",[Y]:"route53"}]},
w={[S]:"https://route53.amazonaws.com.cn",[T]:v,[U]:{}},
x={[V]:[{[W]:"sigv4",[X]:"us-gov-west-1",[Y]:"route53"}]},
y={[O]:[],[h]:{[S]:"https://route53.us-gov.amazonaws.com",[T]:x,[U]:{}},[N]:h},
z={[V]:[{[W]:"sigv4",[X]:"us-iso-east-1",[Y]:"route53"}]},
A={[S]:"https://route53.c2s.ic.gov",[T]:z,[U]:{}},
B={[V]:[{[W]:"sigv4",[X]:"us-isob-east-1",[Y]:"route53"}]},
C={[S]:"https://route53.sc2s.sgov.gov",[T]:B,[U]:{}},
D={[O]:[{[P]:i,[Q]:[l,"aws-us-gov-global"]}],[h]:{[S]:"https://route53.us-gov.amazonaws.com",[T]:x,[U]:{}},[N]:h},
E=[m],
F=[{[P]:"booleanEquals",[Q]:[{[R]:"UseFIPS"},true]}],
G=[],
H=[{[P]:"booleanEquals",[Q]:[{[R]:"UseDualStack"},true]}],
I=[{[P]:"booleanEquals",[Q]:[{[R]:"UseFIPS"},true]},{[P]:"booleanEquals",[Q]:[{[R]:"UseDualStack"},true]}],
J=[{[P]:"booleanEquals",[Q]:[true,{[P]:"getAttr",[Q]:[{[R]:e},"supportsFIPS"]}]},{[P]:"booleanEquals",[Q]:[true,{[P]:"getAttr",[Q]:[{[R]:e},"supportsDualStack"]}]}],
K=[{[P]:"booleanEquals",[Q]:[true,{[P]:"getAttr",[Q]:[{[R]:e},"supportsFIPS"]}]}],
L=[{[P]:"booleanEquals",[Q]:[true,{[P]:"getAttr",[Q]:[{[R]:e},"supportsDualStack"]}]}],
M=[{[P]:i,[Q]:[l,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",[N]:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:a,default:b,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",[N]:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",[N]:d},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",[N]:c}},rules:[{[O]:[{[P]:"aws.partition",[Q]:[l],assign:e}],[N]:f,rules:[{[O]:[{[P]:"isSet",[Q]:E},{[P]:"parseURL",[Q]:E,assign:"url"}],[N]:f,rules:[{[O]:F,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[N]:g},{[O]:G,[N]:f,rules:[{[O]:H,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[N]:g},{[O]:G,endpoint:{[S]:m,[T]:n,[U]:n},[N]:h}]}]},{[O]:[{[P]:i,[Q]:[o,"aws"]}],[N]:f,rules:[{[O]:I,[N]:f,rules:[{[O]:J,[N]:f,rules:[{[O]:G,endpoint:{[S]:j,[T]:p,[U]:n},[N]:h}]},q]},{[O]:F,[N]:f,rules:[{[O]:K,[N]:f,rules:[{[O]:G,endpoint:r,[N]:h}]},s]},{[O]:H,[N]:f,rules:[{[O]:L,[N]:f,rules:[{[O]:G,endpoint:{[S]:k,[T]:p,[U]:n},[N]:h}]},t]},{[O]:G,endpoint:u,[N]:h}]},{[O]:[{[P]:i,[Q]:[o,"aws-cn"]}],[N]:f,rules:[{[O]:I,[N]:f,rules:[{[O]:J,[N]:f,rules:[{[O]:G,endpoint:{[S]:"https://route-53-fips.{Region}.api.amazonwebservices.com.cn",[T]:v,[U]:n},[N]:h}]},q]},{[O]:F,[N]:f,rules:[{[O]:K,[N]:f,rules:[{[O]:G,endpoint:{[S]:"https://route-53-fips.{Region}.amazonaws.com.cn",[T]:v,[U]:n},[N]:h}]},s]},{[O]:H,[N]:f,rules:[{[O]:L,[N]:f,rules:[{[O]:G,endpoint:{[S]:"https://route-53.{Region}.api.amazonwebservices.com.cn",[T]:v,[U]:n},[N]:h}]},t]},{[O]:G,endpoint:w,[N]:h}]},{[O]:[{[P]:i,[Q]:[o,"aws-us-gov"]}],[N]:f,rules:[{[O]:I,[N]:f,rules:[{[O]:J,[N]:f,rules:[{[O]:G,endpoint:{[S]:j,[T]:x,[U]:n},[N]:h}]},q]},{[O]:F,[N]:f,rules:[{[O]:K,[N]:f,rules:[y]},s]},{[O]:H,[N]:f,rules:[{[O]:L,[N]:f,rules:[{[O]:G,endpoint:{[S]:k,[T]:x,[U]:n},[N]:h}]},t]},y]},{[O]:[{[P]:i,[Q]:[o,"aws-iso"]}],[N]:f,rules:[{[O]:F,[N]:f,rules:[{[O]:K,[N]:f,rules:[{[O]:G,endpoint:{[S]:"https://route-53-fips.{Region}.c2s.ic.gov",[T]:z,[U]:n},[N]:h}]},s]},{[O]:G,endpoint:A,[N]:h}]},{[O]:[{[P]:i,[Q]:[o,"aws-iso-b"]}],[N]:f,rules:[{[O]:F,[N]:f,rules:[{[O]:K,[N]:f,rules:[{[O]:G,endpoint:{[S]:"https://route-53-fips.{Region}.sc2s.sgov.gov",[T]:B,[U]:n},[N]:h}]},s]},{[O]:G,endpoint:C,[N]:h}]},{[O]:I,[N]:f,rules:[{[O]:J,[N]:f,rules:[{[O]:G,endpoint:{[S]:"https://route53-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[T]:n,[U]:n},[N]:h}]},q]},{[O]:F,[N]:f,rules:[{[O]:K,[N]:f,rules:[{[O]:G,[N]:f,rules:[{[O]:M,endpoint:r,[N]:h},D,{[O]:G,endpoint:{[S]:"https://route53-fips.{Region}.{PartitionResult#dnsSuffix}",[T]:n,[U]:n},[N]:h}]}]},s]},{[O]:H,[N]:f,rules:[{[O]:L,[N]:f,rules:[{[O]:G,endpoint:{[S]:"https://route53.{Region}.{PartitionResult#dualStackDnsSuffix}",[T]:n,[U]:n},[N]:h}]},t]},{[O]:G,[N]:f,rules:[{[O]:M,endpoint:u,[N]:h},{[O]:[{[P]:i,[Q]:[l,"aws-cn-global"]}],endpoint:w,[N]:h},D,{[O]:[{[P]:i,[Q]:[l,"aws-iso-global"]}],endpoint:A,[N]:h},{[O]:[{[P]:i,[Q]:[l,"aws-iso-b-global"]}],endpoint:C,[N]:h},{[O]:G,endpoint:{[S]:"https://route53.{Region}.{PartitionResult#dnsSuffix}",[T]:n,[U]:n},[N]:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
