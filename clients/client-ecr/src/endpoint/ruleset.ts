// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/ecr.json */

const B="required",
C="fn",
D="argv",
E="ref",
F="url",
G="properties",
H="headers";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="aws",
j="aws-us-gov",
k={[B]:false,"type":"String"},
l={[B]:true,"default":false,"type":"Boolean"},
m={[E]:"Endpoint"},
n={[C]:c,[D]:[{[E]:"UseFIPS"},true]},
o={[C]:c,[D]:[{[E]:"UseDualStack"},true]},
p={},
q={[C]:"getAttr",[D]:[{[E]:g},"supportsFIPS"]},
r={[C]:c,[D]:[true,{[C]:"getAttr",[D]:[{[E]:g},"supportsDualStack"]}]},
s={[C]:"getAttr",[D]:[{[E]:g},"name"]},
t={[F]:"https://ecr-fips.{Region}.api.aws",[G]:{},[H]:{}},
u={[F]:"https://ecr-fips.{Region}.amazonaws.com",[G]:{},[H]:{}},
v={[F]:"https://ecr.{Region}.api.aws",[G]:{},[H]:{}},
w=[n],
x=[o],
y=[{[E]:"Region"}],
z=[{[C]:h,[D]:[i,s]}],
A=[{[C]:h,[D]:[j,s]}];
const _data={version:"1.0",parameters:{Region:k,UseDualStack:l,UseFIPS:l,Endpoint:k},rules:[{conditions:[{[C]:b,[D]:[m]}],rules:[{conditions:w,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:x,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{[F]:m,[G]:p,[H]:p},type:e}],type:f},{conditions:[{[C]:b,[D]:y}],rules:[{conditions:[{[C]:"aws.partition",[D]:y,assign:g}],rules:[{conditions:[n,o],rules:[{conditions:[{[C]:c,[D]:[a,q]},r],rules:[{conditions:z,endpoint:t,type:e},{conditions:A,endpoint:t,type:e},{endpoint:{[F]:"https://api.ecr-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[G]:p,[H]:p},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:w,rules:[{conditions:[{[C]:c,[D]:[q,a]}],rules:[{conditions:[{[C]:h,[D]:[s,i]}],endpoint:u,type:e},{conditions:[{[C]:h,[D]:[s,j]}],endpoint:u,type:e},{endpoint:{[F]:"https://api.ecr-fips.{Region}.{PartitionResult#dnsSuffix}",[G]:p,[H]:p},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:x,rules:[{conditions:[r],rules:[{conditions:z,endpoint:v,type:e},{conditions:[{[C]:h,[D]:["aws-cn",s]}],endpoint:{[F]:"https://ecr.{Region}.api.amazonwebservices.com.cn",[G]:p,[H]:p},type:e},{conditions:A,endpoint:v,type:e},{endpoint:{[F]:"https://api.ecr.{Region}.{PartitionResult#dualStackDnsSuffix}",[G]:p,[H]:p},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{[F]:"https://api.ecr.{Region}.{PartitionResult#dnsSuffix}",[G]:p,[H]:p},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
