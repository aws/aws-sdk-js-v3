// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/sts.json */

const H="required",
I="fn",
J="argv",
K="ref",
L="properties",
M="headers";
const a=false,
b=true,
c="PartitionResult",
d="tree",
e="booleanEquals",
f="stringEquals",
g="https://sts.amazonaws.com",
h="sigv4",
i="sts",
j="us-east-1",
k="endpoint",
l="https://sts.{Region}.{PartitionResult#dnsSuffix}",
m="error",
n="getAttr",
o={[H]:false,"type":"String"},
p={[H]:true,"default":false,"type":"Boolean"},
q={[K]:"Region"},
r={[K]:"UseFIPS"},
s={[K]:"UseDualStack"},
t={[I]:"isSet",[J]:[{[K]:"Endpoint"}]},
u={[K]:"Endpoint"},
v={"url":g,[L]:{"authSchemes":[{"name":h,"signingName":i,"signingRegion":j}]},[M]:{}},
w={},
x={[I]:e,[J]:[r,true]},
y={[I]:e,[J]:[s,true]},
z={[I]:e,[J]:[true,{[I]:n,[J]:[{[K]:c},"supportsFIPS"]}]},
A={[K]:c},
B={[I]:e,[J]:[true,{[I]:n,[J]:[A,"supportsDualStack"]}]},
C={"url":l,[L]:{},[M]:{}},
D=[u],
E=[{[I]:f,[J]:[q,"aws-global"]}],
F=[x],
G=[y];
const _data={version:"1.0",parameters:{Region:o,UseDualStack:p,UseFIPS:p,Endpoint:o,UseGlobalEndpoint:p},rules:[{conditions:[{[I]:"aws.partition",[J]:[q],assign:c}],type:d,rules:[{conditions:[{[I]:e,[J]:[{[K]:"UseGlobalEndpoint"},b]},{[I]:e,[J]:[r,a]},{[I]:e,[J]:[s,a]},{[I]:"not",[J]:[t]}],type:d,rules:[{conditions:[{[I]:f,[J]:[q,"ap-northeast-1"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"ap-south-1"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"ap-southeast-1"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"ap-southeast-2"]}],endpoint:v,type:k},{conditions:E,endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"ca-central-1"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"eu-central-1"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"eu-north-1"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"eu-west-1"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"eu-west-2"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"eu-west-3"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"sa-east-1"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,j]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"us-east-2"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"us-west-1"]}],endpoint:v,type:k},{conditions:[{[I]:f,[J]:[q,"us-west-2"]}],endpoint:v,type:k},{endpoint:{url:l,[L]:{authSchemes:[{name:h,signingName:i,signingRegion:"{Region}"}]},[M]:w},type:k}]},{conditions:[t,{[I]:"parseURL",[J]:D,assign:"url"}],type:d,rules:[{conditions:F,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:m},{type:d,rules:[{conditions:G,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:m},{endpoint:{url:u,[L]:w,[M]:w},type:k}]}]},{conditions:[x,y],type:d,rules:[{conditions:[z,B],type:d,rules:[{endpoint:{url:"https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[L]:w,[M]:w},type:k}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:m}]},{conditions:F,type:d,rules:[{conditions:[z],type:d,rules:[{type:d,rules:[{conditions:[{[I]:f,[J]:["aws-us-gov",{[I]:n,[J]:[A,"name"]}]}],endpoint:C,type:k},{endpoint:{url:"https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",[L]:w,[M]:w},type:k}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:m}]},{conditions:G,type:d,rules:[{conditions:[B],type:d,rules:[{endpoint:{url:"https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",[L]:w,[M]:w},type:k}]},{error:"DualStack is enabled but this partition does not support DualStack",type:m}]},{type:d,rules:[{conditions:E,endpoint:{url:g,[L]:{authSchemes:[{name:h,signingRegion:j,signingName:i}]},[M]:w},type:k},{endpoint:C,type:k}]}]}]};
export const ruleSet: RuleSetObject = _data;
