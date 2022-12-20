// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/iam.json */

const P="type",
Q="conditions",
R="fn",
S="argv",
T="ref",
U="url",
V="properties",
W="headers",
X="authSchemes",
Y="name",
Z="signingRegion",
aa="signingName";
const a=false,
b=true,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="stringEquals",
j="https://iam-fips.{Region}.api.aws",
k="iam",
l="https://iam.{Region}.api.aws",
m={[T]:"Region"},
n={[T]:"Endpoint"},
o={},
p={[R]:"getAttr",[S]:[{[T]:e},"name"]},
q={[X]:[{[Y]:"sigv4",[Z]:"us-east-1",[aa]:k}]},
r={[Q]:[],[g]:"FIPS and DualStack are enabled, but this partition does not support one or both",[P]:g},
s={[U]:"https://iam-fips.amazonaws.com",[V]:q,[W]:{}},
t={[Q]:[],[g]:"FIPS is enabled but this partition does not support FIPS",[P]:g},
u={[Q]:[],[g]:"DualStack is enabled but this partition does not support DualStack",[P]:g},
v={[U]:"https://iam.amazonaws.com",[V]:q,[W]:{}},
w={[X]:[{[Y]:"sigv4",[Z]:"cn-north-1",[aa]:k}]},
x={[U]:"https://iam.cn-north-1.amazonaws.com.cn",[V]:w,[W]:{}},
y={[X]:[{[Y]:"sigv4",[Z]:"us-gov-west-1",[aa]:k}]},
z={[Q]:[],[h]:{[U]:"https://iam.us-gov.amazonaws.com",[V]:y,[W]:{}},[P]:h},
A={[U]:"https://iam.us-gov.amazonaws.com",[V]:y,[W]:{}},
B={[X]:[{[Y]:"sigv4",[Z]:"us-iso-east-1",[aa]:k}]},
C={[U]:"https://iam.us-iso-east-1.c2s.ic.gov",[V]:B,[W]:{}},
D={[X]:[{[Y]:"sigv4",[Z]:"us-isob-east-1",[aa]:k}]},
E={[U]:"https://iam.us-isob-east-1.sc2s.sgov.gov",[V]:D,[W]:{}},
F={[Q]:[{[R]:i,[S]:[m,"aws-us-gov-global"]}],[h]:A,[P]:h},
G=[n],
H=[{[R]:"booleanEquals",[S]:[{[T]:"UseFIPS"},true]}],
I=[],
J=[{[R]:"booleanEquals",[S]:[{[T]:"UseDualStack"},true]}],
K=[{[R]:"booleanEquals",[S]:[{[T]:"UseFIPS"},true]},{[R]:"booleanEquals",[S]:[{[T]:"UseDualStack"},true]}],
L=[{[R]:"booleanEquals",[S]:[true,{[R]:"getAttr",[S]:[{[T]:e},"supportsFIPS"]}]},{[R]:"booleanEquals",[S]:[true,{[R]:"getAttr",[S]:[{[T]:e},"supportsDualStack"]}]}],
M=[{[R]:"booleanEquals",[S]:[true,{[R]:"getAttr",[S]:[{[T]:e},"supportsFIPS"]}]}],
N=[{[R]:"booleanEquals",[S]:[true,{[R]:"getAttr",[S]:[{[T]:e},"supportsDualStack"]}]}],
O=[{[R]:i,[S]:[m,"aws-global"]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",[P]:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",[P]:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",[P]:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",[P]:c}},rules:[{[Q]:[{[R]:"aws.partition",[S]:[m],assign:e}],[P]:f,rules:[{[Q]:[{[R]:"isSet",[S]:G},{[R]:"parseURL",[S]:G,assign:"url"}],[P]:f,rules:[{[Q]:H,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[P]:g},{[Q]:I,[P]:f,rules:[{[Q]:J,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[P]:g},{[Q]:I,endpoint:{[U]:n,[V]:o,[W]:o},[P]:h}]}]},{[Q]:[{[R]:i,[S]:[p,"aws"]}],[P]:f,rules:[{[Q]:K,[P]:f,rules:[{[Q]:L,[P]:f,rules:[{[Q]:I,endpoint:{[U]:j,[V]:q,[W]:o},[P]:h}]},r]},{[Q]:H,[P]:f,rules:[{[Q]:M,[P]:f,rules:[{[Q]:I,endpoint:s,[P]:h}]},t]},{[Q]:J,[P]:f,rules:[{[Q]:N,[P]:f,rules:[{[Q]:I,endpoint:{[U]:l,[V]:q,[W]:o},[P]:h}]},u]},{[Q]:I,endpoint:v,[P]:h}]},{[Q]:[{[R]:i,[S]:[p,"aws-cn"]}],[P]:f,rules:[{[Q]:K,[P]:f,rules:[{[Q]:L,[P]:f,rules:[{[Q]:I,endpoint:{[U]:"https://iam-fips.{Region}.api.amazonwebservices.com.cn",[V]:w,[W]:o},[P]:h}]},r]},{[Q]:H,[P]:f,rules:[{[Q]:M,[P]:f,rules:[{[Q]:I,endpoint:{[U]:"https://iam-fips.{Region}.amazonaws.com.cn",[V]:w,[W]:o},[P]:h}]},t]},{[Q]:J,[P]:f,rules:[{[Q]:N,[P]:f,rules:[{[Q]:I,endpoint:{[U]:"https://iam.{Region}.api.amazonwebservices.com.cn",[V]:w,[W]:o},[P]:h}]},u]},{[Q]:I,endpoint:x,[P]:h}]},{[Q]:[{[R]:i,[S]:[p,"aws-us-gov"]}],[P]:f,rules:[{[Q]:K,[P]:f,rules:[{[Q]:L,[P]:f,rules:[{[Q]:I,endpoint:{[U]:j,[V]:y,[W]:o},[P]:h}]},r]},{[Q]:H,[P]:f,rules:[{[Q]:M,[P]:f,rules:[z]},t]},{[Q]:J,[P]:f,rules:[{[Q]:N,[P]:f,rules:[{[Q]:I,endpoint:{[U]:l,[V]:y,[W]:o},[P]:h}]},u]},z]},{[Q]:[{[R]:i,[S]:[p,"aws-iso"]}],[P]:f,rules:[{[Q]:H,[P]:f,rules:[{[Q]:M,[P]:f,rules:[{[Q]:I,endpoint:{[U]:"https://iam-fips.{Region}.c2s.ic.gov",[V]:B,[W]:o},[P]:h}]},t]},{[Q]:I,endpoint:C,[P]:h}]},{[Q]:[{[R]:i,[S]:[p,"aws-iso-b"]}],[P]:f,rules:[{[Q]:H,[P]:f,rules:[{[Q]:M,[P]:f,rules:[{[Q]:I,endpoint:{[U]:"https://iam-fips.{Region}.sc2s.sgov.gov",[V]:D,[W]:o},[P]:h}]},t]},{[Q]:I,endpoint:E,[P]:h}]},{[Q]:K,[P]:f,rules:[{[Q]:L,[P]:f,rules:[{[Q]:I,endpoint:{[U]:"https://iam-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[V]:o,[W]:o},[P]:h}]},r]},{[Q]:H,[P]:f,rules:[{[Q]:M,[P]:f,rules:[{[Q]:I,[P]:f,rules:[{[Q]:[{[R]:i,[S]:[m,k]}],endpoint:s,[P]:h},{[Q]:O,endpoint:s,[P]:h},{[Q]:[{[R]:i,[S]:[m,"iam-govcloud"]}],endpoint:A,[P]:h},F,{[Q]:I,endpoint:{[U]:"https://iam-fips.{Region}.{PartitionResult#dnsSuffix}",[V]:o,[W]:o},[P]:h}]}]},t]},{[Q]:J,[P]:f,rules:[{[Q]:N,[P]:f,rules:[{[Q]:I,endpoint:{[U]:"https://iam.{Region}.{PartitionResult#dualStackDnsSuffix}",[V]:o,[W]:o},[P]:h}]},u]},{[Q]:I,[P]:f,rules:[{[Q]:O,endpoint:v,[P]:h},{[Q]:[{[R]:i,[S]:[m,"aws-cn-global"]}],endpoint:x,[P]:h},F,{[Q]:[{[R]:i,[S]:[m,"aws-iso-global"]}],endpoint:C,[P]:h},{[Q]:[{[R]:i,[S]:[m,"aws-iso-b-global"]}],endpoint:E,[P]:h},{[Q]:I,endpoint:{[U]:"https://iam.{Region}.{PartitionResult#dnsSuffix}",[V]:o,[W]:o},[P]:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
