// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/iotsecuretunneling.json */

const x="required",
y="fn",
z="argv",
A="ref",
B="properties",
C="headers";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[x]:false,"type":"string"},
i={[x]:true,"default":false,"type":"boolean"},
j={[A]:"Endpoint"},
k={[y]:c,[z]:[{[A]:"UseFIPS"},true]},
l={[y]:c,[z]:[{[A]:"UseDualStack"},true]},
m={},
n={[y]:"getAttr",[z]:[{[A]:g},"supportsFIPS"]},
o={[y]:c,[z]:[true,{[y]:"getAttr",[z]:[{[A]:g},"supportsDualStack"]}]},
p={"url":"https://api.iot-tunneling-fips.{Region}.api.aws",[B]:{},[C]:{}},
q={"url":"https://api.iot-tunneling.{Region}.api.aws",[B]:{},[C]:{}},
r=[k],
s=[l],
t=[{[A]:"Region"}],
u=[{[y]:"stringEquals",[z]:["aws",{[y]:"getAttr",[z]:[{[A]:g},"name"]}]}],
v=[{[y]:"stringEquals",[z]:["aws-cn",{[y]:"getAttr",[z]:[{[A]:g},"name"]}]}],
w=[{[y]:"stringEquals",[z]:["aws-us-gov",{[y]:"getAttr",[z]:[{[A]:g},"name"]}]}];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h},rules:[{conditions:[{[y]:b,[z]:[j]}],rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:j,[B]:m,[C]:m},type:e}],type:f},{conditions:[{[y]:b,[z]:t}],rules:[{conditions:[{[y]:"aws.partition",[z]:t,assign:g}],rules:[{conditions:[k,l],rules:[{conditions:[{[y]:c,[z]:[a,n]},o],rules:[{conditions:u,endpoint:p,type:e},{conditions:v,endpoint:{url:"https://api.iot-tunneling-fips.{Region}.api.amazonwebservices.com.cn",[B]:m,[C]:m},type:e},{conditions:w,endpoint:p,type:e},{endpoint:{url:"https://api.tunneling.iot-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[B]:m,[C]:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:r,rules:[{conditions:[{[y]:c,[z]:[n,a]}],rules:[{endpoint:{url:"https://api.tunneling.iot-fips.{Region}.{PartitionResult#dnsSuffix}",[B]:m,[C]:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:s,rules:[{conditions:[o],rules:[{conditions:u,endpoint:q,type:e},{conditions:v,endpoint:{url:"https://api.iot-tunneling.{Region}.api.amazonwebservices.com.cn",[B]:m,[C]:m},type:e},{conditions:w,endpoint:q,type:e},{endpoint:{url:"https://api.tunneling.iot.{Region}.{PartitionResult#dualStackDnsSuffix}",[B]:m,[C]:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://api.tunneling.iot.{Region}.{PartitionResult#dnsSuffix}",[B]:m,[C]:m},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
