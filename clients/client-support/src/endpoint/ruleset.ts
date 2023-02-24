// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/support.json */

const E="type",
F="rules",
G="conditions",
H="fn",
I="argv",
J="ref",
K="url",
L="properties",
M="headers",
N="authSchemes",
O="name",
P="signingRegion",
Q="signingName";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="stringEquals",
i={"required":true,"default":false,[E]:"Boolean"},
j={[J]:"Region"},
k={[J]:"Endpoint"},
l={},
m={[H]:"getAttr",[I]:[{[J]:d},"name"]},
n={[G]:[{[H]:"booleanEquals",[I]:[{[J]:"UseFIPS"},true]},{[H]:"booleanEquals",[I]:[{[J]:"UseDualStack"},true]}],[E]:e,[F]:[{[G]:[{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:d},"supportsFIPS"]}]},{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:d},"supportsDualStack"]}]}],[E]:e,[F]:[{[g]:{[K]:"https://support-fips.{Region}.api.aws",[L]:{},[M]:{}},[E]:g}]},{[f]:"FIPS and DualStack are enabled, but this partition does not support one or both",[E]:f}]},
o={[f]:"FIPS and DualStack are enabled, but this partition does not support one or both",[E]:f},
p={[G]:[{[H]:"booleanEquals",[I]:[{[J]:"UseFIPS"},true]}],[E]:e,[F]:[{[G]:[{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:d},"supportsFIPS"]}]}],[E]:e,[F]:[{[g]:{[K]:"https://support-fips.{Region}.amazonaws.com",[L]:{},[M]:{}},[E]:g}]},{[f]:"FIPS is enabled but this partition does not support FIPS",[E]:f}]},
q={[f]:"FIPS is enabled but this partition does not support FIPS",[E]:f},
r={[G]:[{[H]:"booleanEquals",[I]:[{[J]:"UseDualStack"},true]}],[E]:e,[F]:[{[G]:[{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:d},"supportsDualStack"]}]}],[E]:e,[F]:[{[g]:{[K]:"https://support.{Region}.api.aws",[L]:{},[M]:{}},[E]:g}]},{[f]:"DualStack is enabled but this partition does not support DualStack",[E]:f}]},
s={[f]:"DualStack is enabled but this partition does not support DualStack",[E]:f},
t={[K]:"https://support.us-east-1.amazonaws.com",[L]:{[N]:[{[O]:"sigv4",[P]:"us-east-1",[Q]:"support"}]},[M]:{}},
u={[K]:"https://support.cn-north-1.amazonaws.com.cn",[L]:{[N]:[{[O]:"sigv4",[P]:"cn-north-1",[Q]:"support"}]},[M]:{}},
v={[K]:"https://support.us-gov-west-1.amazonaws.com",[L]:{[N]:[{[O]:"sigv4",[P]:"us-gov-west-1",[Q]:"support"}]},[M]:{}},
w={[K]:"https://support.us-iso-east-1.c2s.ic.gov",[L]:{[N]:[{[O]:"sigv4",[P]:"us-iso-east-1",[Q]:"support"}]},[M]:{}},
x={[K]:"https://support.us-isob-east-1.sc2s.sgov.gov",[L]:{[N]:[{[O]:"sigv4",[P]:"us-isob-east-1",[Q]:"support"}]},[M]:{}},
y=[{[H]:"booleanEquals",[I]:[{[J]:"UseFIPS"},true]}],
z=[{[H]:"booleanEquals",[I]:[{[J]:"UseDualStack"},true]}],
A=[{[H]:"booleanEquals",[I]:[{[J]:"UseFIPS"},true]},{[H]:"booleanEquals",[I]:[{[J]:"UseDualStack"},true]}],
B=[{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:d},"supportsFIPS"]}]},{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:d},"supportsDualStack"]}]}],
C=[{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:d},"supportsFIPS"]}]}],
D=[{[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:d},"supportsDualStack"]}]}];
const _data={version:"1.0",parameters:{Region:{required:a,[E]:c},UseDualStack:i,UseFIPS:i,Endpoint:{required:b,[E]:c}},[F]:[{[G]:[{[H]:"aws.partition",[I]:[j],assign:d}],[E]:e,[F]:[{[G]:[{[H]:"isSet",[I]:[k]}],[E]:e,[F]:[{[G]:y,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[E]:f},{[E]:e,[F]:[{[G]:z,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[E]:f},{endpoint:{[K]:k,[L]:l,[M]:l},[E]:g}]}]},{[G]:[{[H]:h,[I]:[m,"aws"]}],[E]:e,[F]:[n,p,r,{endpoint:t,[E]:g}]},{[G]:[{[H]:h,[I]:[m,"aws-cn"]}],[E]:e,[F]:[{[G]:A,[E]:e,[F]:[{[G]:B,[E]:e,[F]:[{endpoint:{[K]:"https://support-fips.{Region}.api.amazonwebservices.com.cn",[L]:l,[M]:l},[E]:g}]},o]},{[G]:y,[E]:e,[F]:[{[G]:C,[E]:e,[F]:[{endpoint:{[K]:"https://support-fips.{Region}.amazonaws.com.cn",[L]:l,[M]:l},[E]:g}]},q]},{[G]:z,[E]:e,[F]:[{[G]:D,[E]:e,[F]:[{endpoint:{[K]:"https://support.{Region}.api.amazonwebservices.com.cn",[L]:l,[M]:l},[E]:g}]},s]},{endpoint:u,[E]:g}]},{[G]:[{[H]:h,[I]:[m,"aws-us-gov"]}],[E]:e,[F]:[n,p,r,{endpoint:v,[E]:g}]},{[G]:[{[H]:h,[I]:[m,"aws-iso"]}],[E]:e,[F]:[{[G]:y,[E]:e,[F]:[{[G]:C,[E]:e,[F]:[{endpoint:{[K]:"https://support-fips.{Region}.c2s.ic.gov",[L]:l,[M]:l},[E]:g}]},q]},{endpoint:w,[E]:g}]},{[G]:[{[H]:h,[I]:[m,"aws-iso-b"]}],[E]:e,[F]:[{[G]:y,[E]:e,[F]:[{[G]:C,[E]:e,[F]:[{endpoint:{[K]:"https://support-fips.{Region}.sc2s.sgov.gov",[L]:l,[M]:l},[E]:g}]},q]},{endpoint:x,[E]:g}]},{[G]:A,[E]:e,[F]:[{[G]:B,[E]:e,[F]:[{[E]:e,[F]:[{endpoint:{[K]:"https://support-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[L]:l,[M]:l},[E]:g}]}]},o]},{[G]:y,[E]:e,[F]:[{[G]:C,[E]:e,[F]:[{[E]:e,[F]:[{endpoint:{[K]:"https://support-fips.{Region}.{PartitionResult#dnsSuffix}",[L]:l,[M]:l},[E]:g}]}]},q]},{[G]:z,[E]:e,[F]:[{[G]:D,[E]:e,[F]:[{[E]:e,[F]:[{endpoint:{[K]:"https://support.{Region}.{PartitionResult#dualStackDnsSuffix}",[L]:l,[M]:l},[E]:g}]}]},s]},{[E]:e,[F]:[{[G]:[{[H]:h,[I]:[j,"aws-global"]}],endpoint:t,[E]:g},{[G]:[{[H]:h,[I]:[j,"aws-cn-global"]}],endpoint:u,[E]:g},{[G]:[{[H]:h,[I]:[j,"aws-us-gov-global"]}],endpoint:v,[E]:g},{[G]:[{[H]:h,[I]:[j,"aws-iso-global"]}],endpoint:w,[E]:g},{[G]:[{[H]:h,[I]:[j,"aws-iso-b-global"]}],endpoint:x,[E]:g},{endpoint:{[K]:"https://support.{Region}.{PartitionResult#dnsSuffix}",[L]:l,[M]:l},[E]:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
