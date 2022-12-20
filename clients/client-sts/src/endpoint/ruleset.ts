// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/sts.json */

const I="fn",
J="argv",
K="ref",
L="properties",
M="headers";
const a=false,
b=true,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="booleanEquals",
h="stringEquals",
i="https://sts.amazonaws.com",
j="sigv4",
k="sts",
l="us-east-1",
m="endpoint",
n="https://sts.{Region}.{PartitionResult#dnsSuffix}",
o="error",
p="getAttr",
q={[K]:"Region"},
r={[K]:"UseFIPS"},
s={[K]:"UseDualStack"},
t={[I]:"isSet",[J]:[{[K]:"Endpoint"}]},
u={[K]:"Endpoint"},
v={"url":i,[L]:{"authSchemes":[{"name":j,"signingName":k,"signingRegion":l}]},[M]:{}},
w={},
x={[I]:g,[J]:[r,true]},
y={[I]:g,[J]:[s,true]},
z={[I]:g,[J]:[true,{[I]:p,[J]:[{[K]:e},"supportsFIPS"]}]},
A={[K]:e},
B={[I]:g,[J]:[true,{[I]:p,[J]:[A,"supportsDualStack"]}]},
C={"url":n,[L]:{},[M]:{}},
D=[u],
E=[{[I]:h,[J]:[q,"aws-global"]}],
F=[],
G=[x],
H=[y];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",type:c},UseGlobalEndpoint:{builtIn:"AWS::STS::UseGlobalEndpoint",required:b,default:a,documentation:"Whether the global endpoint should be used, rather then the regional endpoint for us-east-1.",type:d}},rules:[{conditions:[{[I]:"aws.partition",[J]:[q],assign:e}],type:f,rules:[{conditions:[{[I]:g,[J]:[{[K]:"UseGlobalEndpoint"},b]},{[I]:g,[J]:[r,a]},{[I]:g,[J]:[s,a]},{[I]:"not",[J]:[t]}],type:f,rules:[{conditions:[{[I]:h,[J]:[q,"ap-northeast-1"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"ap-south-1"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"ap-southeast-1"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"ap-southeast-2"]}],endpoint:v,type:m},{conditions:E,endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"ca-central-1"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"eu-central-1"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"eu-north-1"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"eu-west-1"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"eu-west-2"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"eu-west-3"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"sa-east-1"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,l]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"us-east-2"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"us-west-1"]}],endpoint:v,type:m},{conditions:[{[I]:h,[J]:[q,"us-west-2"]}],endpoint:v,type:m},{conditions:F,endpoint:{url:n,[L]:{authSchemes:[{name:j,signingName:k,signingRegion:"{Region}"}]},[M]:w},type:m}]},{conditions:[t,{[I]:"parseURL",[J]:D,assign:"url"}],type:f,rules:[{conditions:G,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:o},{conditions:F,type:f,rules:[{conditions:H,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:o},{conditions:F,endpoint:{url:u,[L]:w,[M]:w},type:m}]}]},{conditions:[x,y],type:f,rules:[{conditions:[z,B],type:f,rules:[{conditions:F,endpoint:{url:"https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[L]:w,[M]:w},type:m}]},{conditions:F,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:o}]},{conditions:G,type:f,rules:[{conditions:[z],type:f,rules:[{conditions:F,type:f,rules:[{conditions:[{[I]:h,[J]:["aws-us-gov",{[I]:p,[J]:[A,"name"]}]}],endpoint:C,type:m},{conditions:F,endpoint:{url:"https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",[L]:w,[M]:w},type:m}]}]},{conditions:F,error:"FIPS is enabled but this partition does not support FIPS",type:o}]},{conditions:H,type:f,rules:[{conditions:[B],type:f,rules:[{conditions:F,endpoint:{url:"https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",[L]:w,[M]:w},type:m}]},{conditions:F,error:"DualStack is enabled but this partition does not support DualStack",type:o}]},{conditions:F,type:f,rules:[{conditions:E,endpoint:{url:i,[L]:{authSchemes:[{name:j,signingRegion:l,signingName:k}]},[M]:w},type:m},{conditions:F,endpoint:C,type:m}]}]}]};
export const ruleSet: RuleSetObject = _data;
