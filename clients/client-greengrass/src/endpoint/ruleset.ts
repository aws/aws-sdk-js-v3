// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/greengrass.json */

const y="type",
z="conditions",
A="fn",
B="argv",
C="ref",
D="properties",
E="headers";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="stringEquals",
i="us-gov-east-1",
j="us-gov-west-1",
k="sigv4",
l="greengrass",
m={"required":true,"default":false,[y]:"Boolean"},
n={[C]:"Region"},
o={[C]:"Endpoint"},
p={[A]:"booleanEquals",[B]:[{[C]:"UseFIPS"},true]},
q={[A]:"booleanEquals",[B]:[{[C]:"UseDualStack"},true]},
r={},
s={[A]:"booleanEquals",[B]:[true,{[A]:"getAttr",[B]:[{[C]:d},"supportsFIPS"]}]},
t={[A]:"booleanEquals",[B]:[true,{[A]:"getAttr",[B]:[{[C]:d},"supportsDualStack"]}]},
u={[z]:[{[A]:h,[B]:[n,i]}],[g]:{"url":"https://greengrass.us-gov-east-1.amazonaws.com",[D]:{},[E]:{}},[y]:g},
v={[z]:[{[A]:h,[B]:[n,j]}],[g]:{"url":"https://greengrass.us-gov-west-1.amazonaws.com",[D]:{},[E]:{}},[y]:g},
w=[p],
x=[q];
const _data={version:"1.0",parameters:{Region:{required:a,[y]:c},UseDualStack:m,UseFIPS:m,Endpoint:{required:b,[y]:c}},rules:[{[z]:[{[A]:"aws.partition",[B]:[n],assign:d}],[y]:e,rules:[{[z]:[{[A]:"isSet",[B]:[o]}],[y]:e,rules:[{[z]:w,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[y]:f},{[y]:e,rules:[{[z]:x,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[y]:f},{endpoint:{url:o,[D]:r,[E]:r},[y]:g}]}]},{[z]:[p,q],[y]:e,rules:[{[z]:[s,t],[y]:e,rules:[{[y]:e,rules:[{endpoint:{url:"https://greengrass-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:r,[E]:r},[y]:g}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[y]:f}]},{[z]:w,[y]:e,rules:[{[z]:[s],[y]:e,rules:[{[y]:e,rules:[u,v,{endpoint:{url:"https://greengrass-fips.{Region}.{PartitionResult#dnsSuffix}",[D]:r,[E]:r},[y]:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",[y]:f}]},{[z]:x,[y]:e,rules:[{[z]:[t],[y]:e,rules:[{[y]:e,rules:[{endpoint:{url:"https://greengrass.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:r,[E]:r},[y]:g}]}]},{error:"DualStack is enabled but this partition does not support DualStack",[y]:f}]},{[y]:e,rules:[{[z]:[{[A]:h,[B]:[n,"dataplane-us-gov-east-1"]}],endpoint:{url:"https://greengrass-ats.iot.us-gov-east-1.amazonaws.com",[D]:{authSchemes:[{name:k,signingRegion:i,signingName:l}]},[E]:r},[y]:g},{[z]:[{[A]:h,[B]:[n,"dataplane-us-gov-west-1"]}],endpoint:{url:"https://greengrass-ats.iot.us-gov-west-1.amazonaws.com",[D]:{authSchemes:[{name:k,signingRegion:j,signingName:l}]},[E]:r},[y]:g},u,v,{endpoint:{url:"https://greengrass.{Region}.{PartitionResult#dnsSuffix}",[D]:r,[E]:r},[y]:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
