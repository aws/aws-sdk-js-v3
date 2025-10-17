// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/timestream-write.json */

const y="required",
z="type",
A="fn",
B="argv",
C="ref",
D="properties",
E="headers";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="aws-us-gov",
j={[y]:false,[z]:"string"},
k={[y]:true,"default":false,[z]:"boolean"},
l={[C]:"Endpoint"},
m={[A]:c,[B]:[{[C]:"UseFIPS"},true]},
n={[A]:c,[B]:[{[C]:"UseDualStack"},true]},
o={},
p={[A]:"getAttr",[B]:[{[C]:g},"supportsFIPS"]},
q={[A]:c,[B]:[true,{[A]:"getAttr",[B]:[{[C]:g},"supportsDualStack"]}]},
r={[A]:"getAttr",[B]:[{[C]:g},"name"]},
s={"conditions":[{[A]:h,[B]:[i,r]}],[e]:{"url":"https://timestream-ingest.{Region}.api.aws",[D]:{},[E]:{}},[z]:e},
t={"url":"https://timestream-ingest.{Region}.api.aws",[D]:{},[E]:{}},
u=[m],
v=[n],
w=[{[C]:"Region"}],
x=[{[A]:h,[B]:["aws",r]}];
const _data={version:"1.0",parameters:{Region:j,UseDualStack:k,UseFIPS:k,Endpoint:j},rules:[{conditions:[{[A]:b,[B]:[l]}],rules:[{conditions:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[z]:d},{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[z]:d},{endpoint:{url:l,[D]:o,[E]:o},[z]:e}],[z]:f},{conditions:[{[A]:b,[B]:w}],rules:[{conditions:[{[A]:"aws.partition",[B]:w,assign:g}],rules:[{conditions:[m,n],rules:[{conditions:[{[A]:c,[B]:[a,p]},q],rules:[{conditions:x,endpoint:{url:"https://timestream-ingest-fips.{Region}.api.aws",[D]:o,[E]:o},[z]:e},s,{endpoint:{url:"https://ingest.timestream-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:o,[E]:o},[z]:e}],[z]:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[z]:d}],[z]:f},{conditions:u,rules:[{conditions:[{[A]:c,[B]:[p,a]}],rules:[{conditions:[{[A]:h,[B]:[r,i]}],endpoint:{url:"https://ingest.timestream.{Region}.amazonaws.com",[D]:o,[E]:o},[z]:e},{endpoint:{url:"https://ingest.timestream-fips.{Region}.{PartitionResult#dnsSuffix}",[D]:o,[E]:o},[z]:e}],[z]:f},{error:"FIPS is enabled but this partition does not support FIPS",[z]:d}],[z]:f},{conditions:v,rules:[{conditions:[q],rules:[{conditions:x,endpoint:t,[z]:e},s,{endpoint:{url:"https://ingest.timestream.{Region}.{PartitionResult#dualStackDnsSuffix}",[D]:o,[E]:o},[z]:e}],[z]:f},{error:"DualStack is enabled but this partition does not support DualStack",[z]:d}],[z]:f},{endpoint:{url:"https://ingest.timestream.{Region}.{PartitionResult#dnsSuffix}",[D]:o,[E]:o},[z]:e}],[z]:f}],[z]:f},{error:"Invalid Configuration: Missing Region",[z]:d}]};
export const ruleSet: RuleSetObject = _data;
