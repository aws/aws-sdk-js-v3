// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/geo-places.json */

const y="required",
z="fn",
A="argv",
B="ref",
C="url",
D="properties",
E="headers";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[y]:true,"default":false,"type":"boolean"},
i={[y]:false,"type":"string"},
j={[B]:"Endpoint"},
k={[z]:c,[A]:[{[B]:"UseFIPS"},true]},
l={[z]:c,[A]:[{[B]:"UseDualStack"},true]},
m={},
n={[z]:"stringEquals",[A]:[{[z]:"getAttr",[A]:[{[B]:g},"name"]},"aws"]},
o={[z]:c,[A]:[{[B]:"UseFIPS"},false]},
p={[z]:c,[A]:[{[B]:"UseDualStack"},false]},
q={[C]:"https://places.geo.{Region}.{PartitionResult#dnsSuffix}/v2",[D]:{},[E]:{}},
r={[C]:"https://places.geo-fips.{Region}.{PartitionResult#dualStackDnsSuffix}/v2",[D]:{},[E]:{}},
s={[C]:"https://places.geo-fips.{Region}.{PartitionResult#dnsSuffix}/v2",[D]:{},[E]:{}},
t={[C]:"https://places.geo.{Region}.{PartitionResult#dualStackDnsSuffix}/v2",[D]:{},[E]:{}},
u={[z]:"stringEquals",[A]:[{[z]:"getAttr",[A]:[{[B]:g},"name"]},"aws-us-gov"]},
v={[z]:"getAttr",[A]:[{[B]:g},"supportsFIPS"]},
w={[z]:c,[A]:[true,{[z]:"getAttr",[A]:[{[B]:g},"supportsDualStack"]}]},
x=[{[B]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:h,UseFIPS:h,Endpoint:i,Region:i},rules:[{conditions:[{[z]:b,[A]:[j]}],rules:[{conditions:[k],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[l],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{[C]:j,[D]:m,[E]:m},type:e}],type:f}],type:f},{rules:[{conditions:[{[z]:b,[A]:x}],rules:[{conditions:[{[z]:"aws.partition",[A]:x,assign:g}],rules:[{conditions:[n,o,p],endpoint:q,type:e},{conditions:[n,k,l],endpoint:r,type:e},{conditions:[n,k,p],endpoint:s,type:e},{conditions:[n,o,l],endpoint:t,type:e},{conditions:[u,o,p],endpoint:q,type:e},{conditions:[u,k,l],endpoint:r,type:e},{conditions:[u,k,p],endpoint:s,type:e},{conditions:[u,o,l],endpoint:t,type:e},{conditions:[k,l],rules:[{conditions:[{[z]:c,[A]:[a,v]},w],rules:[{endpoint:{[C]:"https://geo-places-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:m,[E]:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[k,p],rules:[{conditions:[{[z]:c,[A]:[v,a]}],rules:[{endpoint:{[C]:"https://geo-places-fips.{Region}.{PartitionResult#dnsSuffix}",[D]:m,[E]:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[o,l],rules:[{conditions:[w],rules:[{endpoint:{[C]:"https://geo-places.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:m,[E]:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{[C]:"https://geo-places.{Region}.{PartitionResult#dnsSuffix}",[D]:m,[E]:m},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
