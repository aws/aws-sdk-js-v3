// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cost-explorer.json */

const x="required",
y="fn",
z="argv",
A="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="sigv4",
j={[x]:false,"type":"String"},
k={[x]:true,"default":false,"type":"Boolean"},
l={[A]:"Endpoint"},
m={[y]:c,[z]:[{[A]:"UseFIPS"},true]},
n={[y]:c,[z]:[{[A]:"UseDualStack"},true]},
o={},
p={[y]:"getAttr",[z]:[{[A]:g},"name"]},
q={[y]:c,[z]:[{[A]:"UseFIPS"},false]},
r={[y]:c,[z]:[{[A]:"UseDualStack"},false]},
s={[y]:"getAttr",[z]:[{[A]:g},"supportsFIPS"]},
t={[y]:c,[z]:[true,{[y]:"getAttr",[z]:[{[A]:g},"supportsDualStack"]}]},
u=[m],
v=[n],
w=[{[A]:"Region"}];
const _data={version:"1.0",parameters:{Region:j,UseDualStack:k,UseFIPS:k,Endpoint:j},rules:[{conditions:[{[y]:b,[z]:[l]}],rules:[{conditions:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:l,properties:o,headers:o},type:e}],type:f},{conditions:[{[y]:b,[z]:w}],rules:[{conditions:[{[y]:"aws.partition",[z]:w,assign:g}],rules:[{conditions:[{[y]:h,[z]:[p,"aws"]},q,r],endpoint:{url:"https://ce.us-east-1.amazonaws.com",properties:{authSchemes:[{name:i,signingName:"ce",signingRegion:"us-east-1"}]},headers:o},type:e},{conditions:[{[y]:h,[z]:[p,"aws-cn"]},q,r],endpoint:{url:"https://ce.cn-northwest-1.amazonaws.com.cn",properties:{authSchemes:[{name:i,signingName:"ce",signingRegion:"cn-northwest-1"}]},headers:o},type:e},{conditions:[m,n],rules:[{conditions:[{[y]:c,[z]:[a,s]},t],rules:[{endpoint:{url:"https://ce-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:u,rules:[{conditions:[{[y]:c,[z]:[s,a]}],rules:[{endpoint:{url:"https://ce-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:v,rules:[{conditions:[t],rules:[{endpoint:{url:"https://ce.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://ce.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
