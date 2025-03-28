// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/networkmanager.json */

const x="required",
y="fn",
z="argv",
A="ref",
B="authSchemes",
C="name",
D="signingRegion";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[x]:true,"default":false,"type":"Boolean"},
i={[x]:false,"type":"String"},
j={[A]:"Endpoint"},
k={[y]:c,[z]:[{[A]:"UseFIPS"},true]},
l={[y]:c,[z]:[{[A]:"UseDualStack"},true]},
m={},
n={[y]:"stringEquals",[z]:[{[y]:"getAttr",[z]:[{[A]:g},"name"]},"aws"]},
o={[y]:c,[z]:[{[A]:"UseFIPS"},false]},
p={[y]:c,[z]:[{[A]:"UseDualStack"},false]},
q={[B]:[{[C]:"sigv4",[D]:"us-west-2"}]},
r={[y]:"stringEquals",[z]:[{[y]:"getAttr",[z]:[{[A]:g},"name"]},"aws-us-gov"]},
s={[B]:[{[C]:"sigv4",[D]:"us-gov-west-1"}]},
t={[y]:"getAttr",[z]:[{[A]:g},"supportsFIPS"]},
u={[y]:c,[z]:[true,{[y]:"getAttr",[z]:[{[A]:g},"supportsDualStack"]}]},
v={[B]:[{[C]:"sigv4",[D]:"{PartitionResult#implicitGlobalRegion}"}]},
w=[{[A]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:h,UseFIPS:h,Endpoint:i,Region:i},rules:[{conditions:[{[y]:b,[z]:[j]}],rules:[{conditions:[k],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[l],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:j,properties:m,headers:m},type:e}],type:f}],type:f},{rules:[{conditions:[{[y]:b,[z]:w}],rules:[{conditions:[{[y]:"aws.partition",[z]:w,assign:g}],rules:[{conditions:[n,o,p],endpoint:{url:"https://networkmanager.us-west-2.amazonaws.com",properties:q,headers:m},type:e},{conditions:[n,o,l],endpoint:{url:"https://networkmanager.us-west-2.api.aws",properties:q,headers:m},type:e},{conditions:[n,k,p],endpoint:{url:"https://networkmanager-fips.us-west-2.amazonaws.com",properties:q,headers:m},type:e},{conditions:[n,k,l],endpoint:{url:"https://networkmanager-fips.us-west-2.api.aws",properties:q,headers:m},type:e},{conditions:[r,k,p],endpoint:{url:"https://networkmanager.us-gov-west-1.amazonaws.com",properties:s,headers:m},type:e},{conditions:[r,k,l],endpoint:{url:"https://networkmanager.us-gov-west-1.api.aws",properties:s,headers:m},type:e},{conditions:[k,l],rules:[{conditions:[{[y]:c,[z]:[a,t]},u],rules:[{endpoint:{url:"https://networkmanager-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:v,headers:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[k,p],rules:[{conditions:[{[y]:c,[z]:[t,a]}],rules:[{endpoint:{url:"https://networkmanager-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",properties:v,headers:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[o,l],rules:[{conditions:[u],rules:[{endpoint:{url:"https://networkmanager.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:v,headers:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://networkmanager.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",properties:v,headers:m},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
