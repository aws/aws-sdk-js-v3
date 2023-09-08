// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/shield.json */

const w="required",
x="fn",
y="argv",
z="ref";
const a=false,
b="isSet",
c="tree",
d="booleanEquals",
e="error",
f="endpoint",
g="PartitionResult",
h={[w]:false,"type":"String"},
i={[w]:true,"default":false,"type":"Boolean"},
j={[z]:"Endpoint"},
k={[x]:d,[y]:[{[z]:"UseFIPS"},true]},
l={[z]:"UseFIPS"},
m={[x]:d,[y]:[{[z]:"UseDualStack"},true]},
n={},
o={[x]:"stringEquals",[y]:[{[x]:"getAttr",[y]:[{[z]:g},"name"]},"aws"]},
p={[x]:d,[y]:[{[z]:"UseDualStack"},false]},
q={"authSchemes":[{"name":"sigv4","signingName":"shield","signingRegion":"us-east-1"}]},
r={[x]:d,[y]:[true,{[x]:"getAttr",[y]:[{[z]:g},"supportsFIPS"]}]},
s={[x]:d,[y]:[true,{[x]:"getAttr",[y]:[{[z]:g},"supportsDualStack"]}]},
t=[k],
u=[m],
v=[{[z]:"Region"}];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h},rules:[{conditions:[{[x]:b,[y]:[j]}],type:c,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:j,properties:n,headers:n},type:f}]},{conditions:[{[x]:b,[y]:v}],type:c,rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:g}],type:c,rules:[{conditions:[o,{[x]:d,[y]:[l,a]},p],endpoint:{url:"https://shield.us-east-1.amazonaws.com",properties:q,headers:n},type:f},{conditions:[o,k,p],endpoint:{url:"https://shield-fips.us-east-1.amazonaws.com",properties:q,headers:n},type:f},{conditions:[k,m],type:c,rules:[{conditions:[r,s],type:c,rules:[{endpoint:{url:"https://shield-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:f}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}]},{conditions:t,type:c,rules:[{conditions:[r],type:c,rules:[{endpoint:{url:"https://shield-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:f}]},{error:"FIPS is enabled but this partition does not support FIPS",type:e}]},{conditions:u,type:c,rules:[{conditions:[s],type:c,rules:[{endpoint:{url:"https://shield.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:f}]},{error:"DualStack is enabled but this partition does not support DualStack",type:e}]},{endpoint:{url:"https://shield.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:f}]}]},{error:"Invalid Configuration: Missing Region",type:e}]};
export const ruleSet: RuleSetObject = _data;
