// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/neptune-graph.json */

const w="required",
x="type",
y="fn",
z="argv",
A="ref";
const a=true,
b="string",
c="isSet",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[w]:false,[x]:b},
i={[w]:true,"default":false,[x]:"boolean"},
j={[A]:"Endpoint"},
k={[y]:"booleanEquals",[z]:[{[A]:"UseFIPS"},true]},
l={[y]:"booleanEquals",[z]:[{[A]:"UseDualStack"},true]},
m={},
n={[y]:"booleanEquals",[z]:[true,{[y]:"getAttr",[z]:[{[A]:g},"supportsFIPS"]}]},
o={[y]:"booleanEquals",[z]:[true,{[y]:"getAttr",[z]:[{[A]:g},"supportsDualStack"]}]},
p={"conditions":[{[y]:"stringEquals",[z]:[{[A]:"ApiType"},"DataPlane"]}],[d]:"Invalid Configuration: fips endpoint is not supported for this API",[x]:d},
q={[d]:"Invalid Configuration: Unknown ApiType",[x]:d},
r=[k],
s=[l],
t=[{[A]:"Region"}],
u=[{[y]:"stringEquals",[z]:[{[A]:"ApiType"},"ControlPlane"]}],
v=[{[y]:"stringEquals",[z]:[{[A]:"ApiType"},"DataPlane"]}];
const _data={version:"1.0",parameters:{Region:h,UseFIPS:i,UseDualStack:i,Endpoint:h,ApiType:{[w]:a,[x]:b}},rules:[{conditions:[{[y]:c,[z]:[j]}],rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[x]:d},{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[x]:d},{endpoint:{url:j,properties:m,headers:m},[x]:e}],[x]:f},{conditions:[{[y]:c,[z]:t}],rules:[{conditions:[{[y]:"aws.partition",[z]:t,assign:g}],rules:[{conditions:[k,l],rules:[{conditions:[n,o],rules:[{conditions:u,endpoint:{url:"https://neptune-graph-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},[x]:e},p,q],[x]:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[x]:d}],[x]:f},{conditions:r,rules:[{conditions:[n],rules:[{conditions:u,endpoint:{url:"https://neptune-graph-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},[x]:e},p,q],[x]:f},{error:"FIPS is enabled but this partition does not support FIPS",[x]:d}],[x]:f},{conditions:s,rules:[{conditions:[o],rules:[{conditions:u,endpoint:{url:"https://neptune-graph.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},[x]:e},{conditions:v,endpoint:{url:"https://neptune-graph.{Region}.on.aws",properties:m,headers:m},[x]:e},q],[x]:f},{error:"DualStack is enabled but this partition does not support DualStack",[x]:d}],[x]:f},{conditions:u,endpoint:{url:"https://neptune-graph.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},[x]:e},{conditions:v,endpoint:{url:"https://{Region}.neptune-graph.{PartitionResult#dnsSuffix}",properties:m,headers:m},[x]:e},q],[x]:f}],[x]:f},{error:"Invalid Configuration: Missing Region",[x]:d}]};
export const ruleSet: RuleSetObject = _data;
