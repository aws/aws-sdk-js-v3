// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/swf.json */

const v="required",
w="fn",
x="argv",
y="ref",
z="properties",
A="headers";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[v]:true,"default":false,"type":"boolean"},
i={[v]:false,"type":"string"},
j={[y]:"Endpoint"},
k={[w]:c,[x]:[{[y]:"UseFIPS"},true]},
l={[w]:c,[x]:[{[y]:"UseDualStack"},true]},
m={},
n={[w]:"stringEquals",[x]:[{[w]:"getAttr",[x]:[{[y]:g},"name"]},"aws-us-gov"]},
o={[w]:c,[x]:[{[y]:"UseDualStack"},false]},
p={"url":"https://swf.{Region}.{PartitionResult#dnsSuffix}",[z]:{},[A]:{}},
q={[w]:c,[x]:[{[y]:"UseFIPS"},false]},
r={"url":"https://swf-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[z]:{},[A]:{}},
s={[w]:"getAttr",[x]:[{[y]:g},"supportsFIPS"]},
t={[w]:c,[x]:[true,{[w]:"getAttr",[x]:[{[y]:g},"supportsDualStack"]}]},
u=[{[y]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:h,UseFIPS:h,Endpoint:i,Region:i},rules:[{conditions:[{[w]:b,[x]:[j]}],rules:[{conditions:[k],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[l],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:j,[z]:m,[A]:m},type:e}],type:f}],type:f},{rules:[{conditions:[{[w]:b,[x]:u}],rules:[{conditions:[{[w]:"aws.partition",[x]:u,assign:g}],rules:[{conditions:[n,k,o],endpoint:p,type:e},{conditions:[n,q,l],endpoint:r,type:e},{conditions:[k,l],rules:[{conditions:[{[w]:c,[x]:[a,s]},t],rules:[{endpoint:r,type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[k,o],rules:[{conditions:[{[w]:c,[x]:[s,a]}],rules:[{endpoint:{url:"https://swf-fips.{Region}.{PartitionResult#dnsSuffix}",[z]:m,[A]:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[q,l],rules:[{conditions:[t],rules:[{endpoint:{url:"https://swf.{Region}.{PartitionResult#dualStackDnsSuffix}",[z]:m,[A]:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:p,type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
