// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/greengrass.json */

const y="required",
z="fn",
A="argv",
B="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="us-gov-east-1",
j="us-gov-west-1",
k="sigv4",
l="greengrass",
m={[y]:false,"type":"string"},
n={[y]:true,"default":false,"type":"boolean"},
o={[B]:"Endpoint"},
p={[z]:c,[A]:[{[B]:"UseFIPS"},true]},
q={[z]:c,[A]:[{[B]:"UseDualStack"},true]},
r={},
s={[B]:"Region"},
t={[z]:"getAttr",[A]:[{[B]:g},"supportsFIPS"]},
u={[z]:c,[A]:[true,{[z]:"getAttr",[A]:[{[B]:g},"supportsDualStack"]}]},
v=[p],
w=[q],
x=[s];
const _data={version:"1.0",parameters:{Region:m,UseDualStack:n,UseFIPS:n,Endpoint:m},rules:[{conditions:[{[z]:b,[A]:[o]}],rules:[{conditions:v,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:w,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:o,properties:r,headers:r},type:e}],type:f},{conditions:[{[z]:b,[A]:x}],rules:[{conditions:[{[z]:"aws.partition",[A]:x,assign:g}],rules:[{conditions:[p,q],rules:[{conditions:[{[z]:c,[A]:[a,t]},u],rules:[{endpoint:{url:"https://greengrass-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:v,rules:[{conditions:[{[z]:c,[A]:[t,a]}],rules:[{conditions:[{[z]:h,[A]:[s,i]}],endpoint:{url:"https://greengrass.us-gov-east-1.amazonaws.com",properties:r,headers:r},type:e},{conditions:[{[z]:h,[A]:[s,j]}],endpoint:{url:"https://greengrass.us-gov-west-1.amazonaws.com",properties:r,headers:r},type:e},{endpoint:{url:"https://greengrass-fips.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:w,rules:[{conditions:[u],rules:[{endpoint:{url:"https://greengrass.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:r},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{conditions:[{[z]:h,[A]:[s,"dataplane-us-gov-east-1"]}],endpoint:{url:"https://greengrass-ats.iot.us-gov-east-1.amazonaws.com",properties:{authSchemes:[{name:k,signingName:l,signingRegion:i}]},headers:r},type:e},{conditions:[{[z]:h,[A]:[s,"dataplane-us-gov-west-1"]}],endpoint:{url:"https://greengrass-ats.iot.us-gov-west-1.amazonaws.com",properties:{authSchemes:[{name:k,signingName:l,signingRegion:j}]},headers:r},type:e},{endpoint:{url:"https://greengrass.{Region}.{PartitionResult#dnsSuffix}",properties:r,headers:r},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
