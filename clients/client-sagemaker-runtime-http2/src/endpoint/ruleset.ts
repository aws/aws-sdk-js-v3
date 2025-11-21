// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/sagemaker-runtime-http2.json */

const D="required",
E="fn",
F="argv",
G="ref",
H="url",
I="properties",
J="headers";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[D]:true,"default":false,"type":"boolean"},
i={[D]:false,"type":"string"},
j={[G]:"Endpoint"},
k={[E]:c,[F]:[{[G]:"UseFIPS"},true]},
l={[E]:c,[F]:[{[G]:"UseDualStack"},true]},
m={},
n={[E]:"stringEquals",[F]:[{[E]:"getAttr",[F]:[{[G]:g},"name"]},"aws"]},
o={[E]:c,[F]:[{[G]:"UseFIPS"},false]},
p={[E]:c,[F]:[{[G]:"UseDualStack"},false]},
q={[H]:"https://runtime.sagemaker.{Region}.{PartitionResult#dnsSuffix}:8443",[I]:{},[J]:{}},
r={[H]:"https://runtime.sagemaker.{Region}.{PartitionResult#dualStackDnsSuffix}:8443",[I]:{},[J]:{}},
s={[H]:"https://runtime-fips.sagemaker.{Region}.{PartitionResult#dnsSuffix}:8443",[I]:{},[J]:{}},
t={[H]:"https://runtime-fips.sagemaker.{Region}.{PartitionResult#dualStackDnsSuffix}:8443",[I]:{},[J]:{}},
u={[E]:"stringEquals",[F]:[{[E]:"getAttr",[F]:[{[G]:g},"name"]},"aws-cn"]},
v={[E]:"stringEquals",[F]:[{[E]:"getAttr",[F]:[{[G]:g},"name"]},"aws-us-gov"]},
w={[E]:"stringEquals",[F]:[{[E]:"getAttr",[F]:[{[G]:g},"name"]},"aws-iso"]},
x={[E]:"stringEquals",[F]:[{[E]:"getAttr",[F]:[{[G]:g},"name"]},"aws-iso-b"]},
y={[E]:"stringEquals",[F]:[{[E]:"getAttr",[F]:[{[G]:g},"name"]},"aws-iso-f"]},
z={[E]:"stringEquals",[F]:[{[E]:"getAttr",[F]:[{[G]:g},"name"]},"aws-eusc"]},
A={[E]:"getAttr",[F]:[{[G]:g},"supportsFIPS"]},
B={[E]:c,[F]:[true,{[E]:"getAttr",[F]:[{[G]:g},"supportsDualStack"]}]},
C=[{[G]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:h,UseFIPS:h,Endpoint:i,Region:i},rules:[{conditions:[{[E]:b,[F]:[j]}],rules:[{conditions:[k],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[l],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{[H]:j,[I]:m,[J]:m},type:e}],type:f}],type:f},{rules:[{conditions:[{[E]:b,[F]:C}],rules:[{conditions:[{[E]:"aws.partition",[F]:C,assign:g}],rules:[{conditions:[n,o,p],endpoint:q,type:e},{conditions:[n,o,l],endpoint:r,type:e},{conditions:[n,k,p],endpoint:s,type:e},{conditions:[n,k,l],endpoint:t,type:e},{conditions:[u,o,p],endpoint:q,type:e},{conditions:[u,o,l],endpoint:r,type:e},{conditions:[u,k,p],endpoint:s,type:e},{conditions:[u,k,l],endpoint:t,type:e},{conditions:[v,o,p],endpoint:q,type:e},{conditions:[v,o,l],endpoint:r,type:e},{conditions:[v,k,p],endpoint:s,type:e},{conditions:[v,k,l],endpoint:t,type:e},{conditions:[w,o,p],endpoint:q,type:e},{conditions:[w,o,l],endpoint:r,type:e},{conditions:[w,k,p],endpoint:s,type:e},{conditions:[w,k,l],endpoint:t,type:e},{conditions:[x,o,p],endpoint:q,type:e},{conditions:[x,o,l],endpoint:r,type:e},{conditions:[x,k,p],endpoint:s,type:e},{conditions:[x,k,l],endpoint:t,type:e},{conditions:[y,o,p],endpoint:q,type:e},{conditions:[y,o,l],endpoint:r,type:e},{conditions:[y,k,p],endpoint:s,type:e},{conditions:[y,k,l],endpoint:t,type:e},{conditions:[z,o,p],endpoint:q,type:e},{conditions:[z,o,l],endpoint:r,type:e},{conditions:[z,k,p],endpoint:s,type:e},{conditions:[z,k,l],endpoint:t,type:e},{conditions:[k,l],rules:[{conditions:[{[E]:c,[F]:[a,A]},B],rules:[{endpoint:{[H]:"https://runtime.sagemaker-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[I]:m,[J]:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[k,p],rules:[{conditions:[{[E]:c,[F]:[A,a]}],rules:[{endpoint:{[H]:"https://runtime.sagemaker-fips.{Region}.{PartitionResult#dnsSuffix}",[I]:m,[J]:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[o,l],rules:[{conditions:[B],rules:[{endpoint:{[H]:"https://runtime.sagemaker.{Region}.{PartitionResult#dualStackDnsSuffix}",[I]:m,[J]:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{[H]:"https://runtime.sagemaker.{Region}.{PartitionResult#dnsSuffix}",[I]:m,[J]:m},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
