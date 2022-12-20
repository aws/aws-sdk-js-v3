// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/organizations.json */

const L="type",
M="conditions",
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
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="stringEquals",
j="https://organizations-fips.{Region}.api.aws",
k="https://organizations-fips.us-east-1.amazonaws.com",
l="https://organizations.{Region}.api.aws",
m="https://organizations.us-gov-west-1.amazonaws.com",
n={[P]:"Region"},
o={[P]:"Endpoint"},
p={},
q={[N]:"getAttr",[O]:[{[P]:e},"name"]},
r={[T]:[{[U]:"sigv4",[V]:"us-east-1",[W]:"organizations"}]},
s={[M]:[],[g]:"FIPS and DualStack are enabled, but this partition does not support one or both",[L]:g},
t={[M]:[],[g]:"FIPS is enabled but this partition does not support FIPS",[L]:g},
u={[M]:[],[g]:"DualStack is enabled but this partition does not support DualStack",[L]:g},
v={[Q]:"https://organizations.us-east-1.amazonaws.com",[R]:r,[S]:{}},
w={[T]:[{[U]:"sigv4",[V]:"cn-northwest-1",[W]:"organizations"}]},
x={[Q]:"https://organizations.cn-northwest-1.amazonaws.com.cn",[R]:w,[S]:{}},
y={[T]:[{[U]:"sigv4",[V]:"us-gov-west-1",[W]:"organizations"}]},
z={[M]:[],[h]:{[Q]:m,[R]:y,[S]:{}},[L]:h},
A={[Q]:m,[R]:y,[S]:{}},
B=[o],
C=[{[N]:"booleanEquals",[O]:[{[P]:"UseFIPS"},true]}],
D=[],
E=[{[N]:"booleanEquals",[O]:[{[P]:"UseDualStack"},true]}],
F=[{[N]:"booleanEquals",[O]:[{[P]:"UseFIPS"},true]},{[N]:"booleanEquals",[O]:[{[P]:"UseDualStack"},true]}],
G=[{[N]:"booleanEquals",[O]:[true,{[N]:"getAttr",[O]:[{[P]:e},"supportsFIPS"]}]},{[N]:"booleanEquals",[O]:[true,{[N]:"getAttr",[O]:[{[P]:e},"supportsDualStack"]}]}],
H=[{[N]:"booleanEquals",[O]:[true,{[N]:"getAttr",[O]:[{[P]:e},"supportsFIPS"]}]}],
I=[{[N]:"booleanEquals",[O]:[true,{[N]:"getAttr",[O]:[{[P]:e},"supportsDualStack"]}]}],
J=[{[N]:i,[O]:[n,"aws-global"]}],
K=[{[N]:i,[O]:[n,"aws-us-gov-global"]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",[L]:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:a,default:b,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",[L]:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",[L]:d},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",[L]:c}},rules:[{[M]:[{[N]:"aws.partition",[O]:[n],assign:e}],[L]:f,rules:[{[M]:[{[N]:"isSet",[O]:B},{[N]:"parseURL",[O]:B,assign:"url"}],[L]:f,rules:[{[M]:C,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[L]:g},{[M]:D,[L]:f,rules:[{[M]:E,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[L]:g},{[M]:D,endpoint:{[Q]:o,[R]:p,[S]:p},[L]:h}]}]},{[M]:[{[N]:i,[O]:[q,"aws"]}],[L]:f,rules:[{[M]:F,[L]:f,rules:[{[M]:G,[L]:f,rules:[{[M]:D,endpoint:{[Q]:j,[R]:r,[S]:p},[L]:h}]},s]},{[M]:C,[L]:f,rules:[{[M]:H,[L]:f,rules:[{[M]:D,endpoint:{[Q]:k,[R]:r,[S]:p},[L]:h}]},t]},{[M]:E,[L]:f,rules:[{[M]:I,[L]:f,rules:[{[M]:D,endpoint:{[Q]:l,[R]:r,[S]:p},[L]:h}]},u]},{[M]:D,endpoint:v,[L]:h}]},{[M]:[{[N]:i,[O]:[q,"aws-cn"]}],[L]:f,rules:[{[M]:F,[L]:f,rules:[{[M]:G,[L]:f,rules:[{[M]:D,endpoint:{[Q]:"https://organizations-fips.{Region}.api.amazonwebservices.com.cn",[R]:w,[S]:p},[L]:h}]},s]},{[M]:C,[L]:f,rules:[{[M]:H,[L]:f,rules:[{[M]:D,endpoint:{[Q]:"https://organizations-fips.{Region}.amazonaws.com.cn",[R]:w,[S]:p},[L]:h}]},t]},{[M]:E,[L]:f,rules:[{[M]:I,[L]:f,rules:[{[M]:D,endpoint:{[Q]:"https://organizations.{Region}.api.amazonwebservices.com.cn",[R]:w,[S]:p},[L]:h}]},u]},{[M]:D,endpoint:x,[L]:h}]},{[M]:[{[N]:i,[O]:[q,"aws-us-gov"]}],[L]:f,rules:[{[M]:F,[L]:f,rules:[{[M]:G,[L]:f,rules:[{[M]:D,endpoint:{[Q]:j,[R]:y,[S]:p},[L]:h}]},s]},{[M]:C,[L]:f,rules:[{[M]:H,[L]:f,rules:[z]},t]},{[M]:E,[L]:f,rules:[{[M]:I,[L]:f,rules:[{[M]:D,endpoint:{[Q]:l,[R]:y,[S]:p},[L]:h}]},u]},z]},{[M]:F,[L]:f,rules:[{[M]:G,[L]:f,rules:[{[M]:D,endpoint:{[Q]:"https://organizations-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[R]:p,[S]:p},[L]:h}]},s]},{[M]:C,[L]:f,rules:[{[M]:H,[L]:f,rules:[{[M]:D,[L]:f,rules:[{[M]:J,endpoint:{[Q]:k,[R]:p,[S]:p},[L]:h},{[M]:K,endpoint:{[Q]:m,[R]:p,[S]:p},[L]:h},{[M]:D,endpoint:{[Q]:"https://organizations-fips.{Region}.{PartitionResult#dnsSuffix}",[R]:p,[S]:p},[L]:h}]}]},t]},{[M]:E,[L]:f,rules:[{[M]:I,[L]:f,rules:[{[M]:D,endpoint:{[Q]:"https://organizations.{Region}.{PartitionResult#dualStackDnsSuffix}",[R]:p,[S]:p},[L]:h}]},u]},{[M]:D,[L]:f,rules:[{[M]:J,endpoint:v,[L]:h},{[M]:[{[N]:i,[O]:[n,"aws-cn-global"]}],endpoint:x,[L]:h},{[M]:K,endpoint:A,[L]:h},{[M]:D,endpoint:{[Q]:"https://organizations.{Region}.{PartitionResult#dnsSuffix}",[R]:p,[S]:p},[L]:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
