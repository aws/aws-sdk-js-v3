// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/billingconductor.json */

const x="required",
y="fn",
z="argv",
A="ref";
const a=false,
b=true,
c="isSet",
d="booleanEquals",
e="error",
f="endpoint",
g="tree",
h="PartitionResult",
i="getAttr",
j={[x]:false,"type":"string"},
k={[x]:true,"default":false,"type":"boolean"},
l={[A]:"Endpoint"},
m={[y]:d,[z]:[{[A]:"UseFIPS"},true]},
n={[A]:"UseFIPS"},
o={[y]:d,[z]:[{[A]:"UseDualStack"},true]},
p={[A]:"UseDualStack"},
q={},
r={[A]:h},
s={[y]:i,[z]:[r,"supportsFIPS"]},
t={[y]:d,[z]:[true,{[y]:i,[z]:[r,"supportsDualStack"]}]},
u=[m],
v=[o],
w=[{[A]:"Region"}];
const _data={version:"1.0",parameters:{Region:j,UseDualStack:k,UseFIPS:k,Endpoint:j},rules:[{conditions:[{[y]:c,[z]:[l]}],rules:[{conditions:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:l,properties:q,headers:q},type:f}],type:g},{conditions:[{[y]:c,[z]:w}],rules:[{conditions:[{[y]:"aws.partition",[z]:w,assign:h}],rules:[{conditions:[{[y]:"stringEquals",[z]:[{[y]:i,[z]:[r,"name"]},"aws"]},{[y]:d,[z]:[n,a]},{[y]:d,[z]:[p,a]}],endpoint:{url:"https://billingconductor.us-east-1.amazonaws.com",properties:{authSchemes:[{name:"sigv4",signingName:"billingconductor",signingRegion:"us-east-1"}]},headers:q},type:f},{conditions:[m,o],rules:[{conditions:[{[y]:d,[z]:[b,s]},t],rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:q,headers:q},type:f}],type:g},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}],type:g},{conditions:u,rules:[{conditions:[{[y]:d,[z]:[s,b]}],rules:[{endpoint:{url:"https://billingconductor-fips.{Region}.{PartitionResult#dnsSuffix}",properties:q,headers:q},type:f}],type:g},{error:"FIPS is enabled but this partition does not support FIPS",type:e}],type:g},{conditions:v,rules:[{conditions:[t],rules:[{endpoint:{url:"https://billingconductor.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:q,headers:q},type:f}],type:g},{error:"DualStack is enabled but this partition does not support DualStack",type:e}],type:g},{endpoint:{url:"https://billingconductor.{Region}.{PartitionResult#dnsSuffix}",properties:q,headers:q},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:e}]};
export const ruleSet: RuleSetObject = _data;
