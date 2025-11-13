// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/ecr.json */

const E="required",
F="fn",
G="argv",
H="ref",
I="url",
J="properties",
K="headers";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[E]:true,"default":false,"type":"boolean"},
i={[E]:false,"type":"string"},
j={[H]:"Endpoint"},
k={[F]:c,[G]:[{[H]:"UseFIPS"},true]},
l={[F]:c,[G]:[{[H]:"UseDualStack"},true]},
m={},
n={[F]:"stringEquals",[G]:[{[F]:"getAttr",[G]:[{[H]:g},"name"]},"aws"]},
o={[F]:c,[G]:[{[H]:"UseFIPS"},false]},
p={[F]:c,[G]:[{[H]:"UseDualStack"},false]},
q={[I]:"https://api.ecr.{Region}.{PartitionResult#dnsSuffix}",[J]:{},[K]:{}},
r={[I]:"https://ecr.{Region}.{PartitionResult#dualStackDnsSuffix}",[J]:{},[K]:{}},
s={[I]:"https://api.ecr-fips.{Region}.{PartitionResult#dnsSuffix}",[J]:{},[K]:{}},
t={[I]:"https://ecr-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[J]:{},[K]:{}},
u={[F]:"stringEquals",[G]:[{[F]:"getAttr",[G]:[{[H]:g},"name"]},"aws-us-gov"]},
v={[F]:"stringEquals",[G]:[{[F]:"getAttr",[G]:[{[H]:g},"name"]},"aws-cn"]},
w={[F]:"stringEquals",[G]:[{[F]:"getAttr",[G]:[{[H]:g},"name"]},"aws-iso"]},
x={[F]:"stringEquals",[G]:[{[F]:"getAttr",[G]:[{[H]:g},"name"]},"aws-iso-b"]},
y={[F]:"stringEquals",[G]:[{[F]:"getAttr",[G]:[{[H]:g},"name"]},"aws-iso-e"]},
z={[F]:"stringEquals",[G]:[{[F]:"getAttr",[G]:[{[H]:g},"name"]},"aws-iso-f"]},
A={[F]:"stringEquals",[G]:[{[F]:"getAttr",[G]:[{[H]:g},"name"]},"aws-eusc"]},
B={[F]:"getAttr",[G]:[{[H]:g},"supportsFIPS"]},
C={[F]:c,[G]:[true,{[F]:"getAttr",[G]:[{[H]:g},"supportsDualStack"]}]},
D=[{[H]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:h,UseFIPS:h,Endpoint:i,Region:i},rules:[{conditions:[{[F]:b,[G]:[j]}],rules:[{conditions:[k],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[l],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{[I]:j,[J]:m,[K]:m},type:e}],type:f}],type:f},{rules:[{conditions:[{[F]:b,[G]:D}],rules:[{conditions:[{[F]:"aws.partition",[G]:D,assign:g}],rules:[{conditions:[n,o,p],endpoint:q,type:e},{conditions:[n,o,l],endpoint:r,type:e},{conditions:[n,k,p],endpoint:s,type:e},{conditions:[n,k,l],endpoint:t,type:e},{conditions:[u,o,p],endpoint:q,type:e},{conditions:[u,o,l],endpoint:r,type:e},{conditions:[u,k,p],endpoint:s,type:e},{conditions:[u,k,l],endpoint:t,type:e},{conditions:[v,o,p],endpoint:q,type:e},{conditions:[v,o,l],endpoint:r,type:e},{conditions:[v,k,p],endpoint:s,type:e},{conditions:[v,k,l],endpoint:t,type:e},{conditions:[w,o,p],endpoint:q,type:e},{conditions:[w,o,l],endpoint:r,type:e},{conditions:[w,k,p],endpoint:s,type:e},{conditions:[w,k,l],endpoint:t,type:e},{conditions:[x,o,p],endpoint:q,type:e},{conditions:[x,o,l],endpoint:r,type:e},{conditions:[x,k,p],endpoint:s,type:e},{conditions:[x,k,l],endpoint:t,type:e},{conditions:[y,o,p],endpoint:q,type:e},{conditions:[y,o,l],endpoint:r,type:e},{conditions:[y,k,p],endpoint:s,type:e},{conditions:[y,k,l],endpoint:t,type:e},{conditions:[z,o,p],endpoint:q,type:e},{conditions:[z,o,l],endpoint:r,type:e},{conditions:[z,k,p],endpoint:s,type:e},{conditions:[z,k,l],endpoint:t,type:e},{conditions:[A,o,p],endpoint:q,type:e},{conditions:[A,o,l],endpoint:r,type:e},{conditions:[A,k,p],endpoint:s,type:e},{conditions:[A,k,l],endpoint:t,type:e},{conditions:[k,l],rules:[{conditions:[{[F]:c,[G]:[a,B]},C],rules:[{endpoint:{[I]:"https://api.ecr-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[J]:m,[K]:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[k,p],rules:[{conditions:[{[F]:c,[G]:[B,a]}],rules:[{endpoint:s,type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[o,l],rules:[{conditions:[C],rules:[{endpoint:{[I]:"https://api.ecr.{Region}.{PartitionResult#dualStackDnsSuffix}",[J]:m,[K]:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:q,type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
