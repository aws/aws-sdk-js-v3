// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/health.json */

const C="required",
D="type",
E="fn",
F="argv",
G="ref",
H="properties",
I="headers";
const a=false,
b=true,
c="not",
d="booleanEquals",
e="stringEquals",
f="endpoint",
g="tree",
h="error",
i="sigv4",
j="health",
k={[C]:false,[D]:"string"},
l={[C]:true,"default":false,[D]:"boolean"},
m={[G]:"Endpoint"},
n={[G]:"UseDualStack"},
o={[E]:"isSet",[F]:[{[G]:"Region"}]},
p={[G]:"Region"},
q={[E]:"aws.partition",[F]:[p],"assign":"PartitionResult"},
r={[E]:"getAttr",[F]:[{[G]:"PartitionResult"},"name"]},
s={[E]:d,[F]:[{[G]:"UseFIPS"},true]},
t={"url":"https://health-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[H]:{},[I]:{}},
u={},
v={[f]:{"url":"https://health.{Region}.{PartitionResult#dualStackDnsSuffix}",[H]:{},[I]:{}},[D]:f},
w={[E]:d,[F]:[n,true]},
x={[E]:"getAttr",[F]:[{[G]:"PartitionResult"},"supportsFIPS"]},
y={[E]:d,[F]:[true,{[E]:"getAttr",[F]:[{[G]:"PartitionResult"},"supportsDualStack"]}]},
z=[{[E]:"isSet",[F]:[m]}],
A=[s],
B=[w];
const _data={version:"1.0",parameters:{Region:k,UseDualStack:l,UseFIPS:l,Endpoint:k},rules:[{conditions:[{[E]:c,[F]:z},{[E]:d,[F]:[n,a]},o,q,{[E]:c,[F]:[{[E]:e,[F]:[r,"aws"]}]},{[E]:c,[F]:[{[E]:e,[F]:[r,"aws-cn"]}]},{[E]:c,[F]:[{[E]:e,[F]:[r,"aws-us-gov"]}]},{[E]:c,[F]:[{[E]:e,[F]:[r,"aws-iso"]}]},{[E]:c,[F]:[{[E]:e,[F]:[r,"aws-iso-b"]}]},{[E]:c,[F]:[{[E]:e,[F]:[r,"aws-iso-e"]}]},{[E]:c,[F]:[{[E]:e,[F]:[r,"aws-iso-f"]}]}],rules:[{conditions:A,endpoint:t,[D]:f},v],[D]:g},{conditions:z,rules:[{conditions:A,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[D]:h},{conditions:B,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[D]:h},{endpoint:{url:m,[H]:u,[I]:u},[D]:f}],[D]:g},{conditions:[o],rules:[{conditions:[q],rules:[{conditions:[s,w],rules:[{conditions:[{[E]:d,[F]:[b,x]},y],rules:[{endpoint:t,[D]:f}],[D]:g},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[D]:h}],[D]:g},{conditions:A,rules:[{conditions:[{[E]:d,[F]:[x,b]}],rules:[{endpoint:{url:"https://health-fips.{Region}.{PartitionResult#dnsSuffix}",[H]:u,[I]:u},[D]:f}],[D]:g},{error:"FIPS is enabled but this partition does not support FIPS",[D]:h}],[D]:g},{conditions:B,rules:[{conditions:[y],rules:[v],[D]:g},{error:"DualStack is enabled but this partition does not support DualStack",[D]:h}],[D]:g},{conditions:[{[E]:e,[F]:[p,"aws-global"]}],endpoint:{url:"https://global.health.amazonaws.com",[H]:{authSchemes:[{name:i,signingName:j,signingRegion:"us-east-1"}]},[I]:u},[D]:f},{conditions:[{[E]:e,[F]:[p,"aws-cn-global"]}],endpoint:{url:"https://global.health.amazonaws.com.cn",[H]:{authSchemes:[{name:i,signingName:j,signingRegion:"cn-northwest-1"}]},[I]:u},[D]:f},{endpoint:{url:"https://health.{Region}.{PartitionResult#dnsSuffix}",[H]:u,[I]:u},[D]:f}],[D]:g}],[D]:g},{error:"Invalid Configuration: Missing Region",[D]:h}]};
export const ruleSet: RuleSetObject = _data;
