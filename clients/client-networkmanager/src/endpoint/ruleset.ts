// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/networkmanager.json */

const F="type",
G="conditions",
H="fn",
I="argv",
J="ref",
K="properties",
L="headers",
M="authSchemes",
N="signingRegion",
O="signingName";
const a=false,
b=true,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="stringEquals",
j="https://networkmanager-fips.{Region}.api.aws",
k="https://networkmanager-fips.{Region}.amazonaws.com",
l="https://networkmanager.{Region}.api.aws",
m={[J]:"Region"},
n={[J]:"Endpoint"},
o={},
p={[H]:"getAttr",[I]:[{[J]:e},"name"]},
q={[M]:[{"name":"sigv4",[N]:"us-west-2",[O]:"networkmanager"}]},
r={[G]:[],[g]:"FIPS and DualStack are enabled, but this partition does not support one or both",[F]:g},
s={[G]:[],[g]:"FIPS is enabled but this partition does not support FIPS",[F]:g},
t={[G]:[],[g]:"DualStack is enabled but this partition does not support DualStack",[F]:g},
u={"url":"https://networkmanager.us-west-2.amazonaws.com",[K]:q,[L]:{}},
v={[M]:[{"name":"sigv4",[N]:"us-gov-west-1",[O]:"networkmanager"}]},
w={"url":"https://networkmanager.us-gov-west-1.amazonaws.com",[K]:v,[L]:{}},
x=[n],
y=[{[H]:"booleanEquals",[I]:[{[J]:"UseFIPS"},true]}],
z=[],
A=[{[H]:"booleanEquals",[I]:[{[J]:"UseDualStack"},true]}],
B=[{[H]:"booleanEquals",[I]:[{[J]:"UseFIPS"},true]},{[H]:"booleanEquals",[I]:[{[J]:"UseDualStack"},true]}],
C=[{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:e},"supportsFIPS"]}]},{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:e},"supportsDualStack"]}]}],
D=[{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:e},"supportsFIPS"]}]}],
E=[{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:e},"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",[F]:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",[F]:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",[F]:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",[F]:c}},rules:[{[G]:[{[H]:"aws.partition",[I]:[m],assign:e}],[F]:f,rules:[{[G]:[{[H]:"isSet",[I]:x},{[H]:"parseURL",[I]:x,assign:"url"}],[F]:f,rules:[{[G]:y,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[F]:g},{[G]:z,[F]:f,rules:[{[G]:A,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[F]:g},{[G]:z,endpoint:{url:n,[K]:o,[L]:o},[F]:h}]}]},{[G]:[{[H]:i,[I]:[p,"aws"]}],[F]:f,rules:[{[G]:B,[F]:f,rules:[{[G]:C,[F]:f,rules:[{[G]:z,endpoint:{url:j,[K]:q,[L]:o},[F]:h}]},r]},{[G]:y,[F]:f,rules:[{[G]:D,[F]:f,rules:[{[G]:z,endpoint:{url:k,[K]:q,[L]:o},[F]:h}]},s]},{[G]:A,[F]:f,rules:[{[G]:E,[F]:f,rules:[{[G]:z,endpoint:{url:l,[K]:q,[L]:o},[F]:h}]},t]},{[G]:z,endpoint:u,[F]:h}]},{[G]:[{[H]:i,[I]:[p,"aws-us-gov"]}],[F]:f,rules:[{[G]:B,[F]:f,rules:[{[G]:C,[F]:f,rules:[{[G]:z,endpoint:{url:j,[K]:v,[L]:o},[F]:h}]},r]},{[G]:y,[F]:f,rules:[{[G]:D,[F]:f,rules:[{[G]:z,endpoint:{url:k,[K]:v,[L]:o},[F]:h}]},s]},{[G]:A,[F]:f,rules:[{[G]:E,[F]:f,rules:[{[G]:z,endpoint:{url:l,[K]:v,[L]:o},[F]:h}]},t]},{[G]:z,endpoint:w,[F]:h}]},{[G]:B,[F]:f,rules:[{[G]:C,[F]:f,rules:[{[G]:z,endpoint:{url:"https://networkmanager-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[K]:o,[L]:o},[F]:h}]},r]},{[G]:y,[F]:f,rules:[{[G]:D,[F]:f,rules:[{[G]:z,[F]:f,rules:[{[G]:z,endpoint:{url:"https://networkmanager-fips.{Region}.{PartitionResult#dnsSuffix}",[K]:o,[L]:o},[F]:h}]}]},s]},{[G]:A,[F]:f,rules:[{[G]:E,[F]:f,rules:[{[G]:z,endpoint:{url:"https://networkmanager.{Region}.{PartitionResult#dualStackDnsSuffix}",[K]:o,[L]:o},[F]:h}]},t]},{[G]:z,[F]:f,rules:[{[G]:[{[H]:i,[I]:[m,"aws-global"]}],endpoint:u,[F]:h},{[G]:[{[H]:i,[I]:[m,"aws-us-gov-global"]}],endpoint:w,[F]:h},{[G]:z,endpoint:{url:"https://networkmanager.{Region}.{PartitionResult#dnsSuffix}",[K]:o,[L]:o},[F]:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
