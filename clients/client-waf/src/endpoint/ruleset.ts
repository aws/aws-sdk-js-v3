// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/waf.json */

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
i={[x]:false,"type":"string"},
j={[x]:true,"default":false,"type":"boolean"},
k={[A]:"Endpoint"},
l={[y]:d,[z]:[{[A]:"UseFIPS"},true]},
m={[A]:"UseFIPS"},
n={[y]:d,[z]:[{[A]:"UseDualStack"},true]},
o={},
p={[y]:"stringEquals",[z]:[{[y]:"getAttr",[z]:[{[A]:h},"name"]},"aws"]},
q={[y]:d,[z]:[{[A]:"UseDualStack"},false]},
r={"authSchemes":[{"name":"sigv4","signingName":"waf","signingRegion":"us-east-1"}]},
s={[y]:"getAttr",[z]:[{[A]:h},"supportsFIPS"]},
t={[y]:d,[z]:[true,{[y]:"getAttr",[z]:[{[A]:h},"supportsDualStack"]}]},
u=[l],
v=[n],
w=[{[A]:"Region"}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[y]:c,[z]:[k]}],rules:[{conditions:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:k,properties:o,headers:o},type:f}],type:g},{conditions:[{[y]:c,[z]:w}],rules:[{conditions:[{[y]:"aws.partition",[z]:w,assign:h}],rules:[{conditions:[p,{[y]:d,[z]:[m,a]},q],endpoint:{url:"https://waf.amazonaws.com",properties:r,headers:o},type:f},{conditions:[p,l,q],endpoint:{url:"https://waf-fips.amazonaws.com",properties:r,headers:o},type:f},{conditions:[l,n],rules:[{conditions:[{[y]:d,[z]:[b,s]},t],rules:[{endpoint:{url:"https://waf-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:f}],type:g},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}],type:g},{conditions:u,rules:[{conditions:[{[y]:d,[z]:[s,b]}],rules:[{endpoint:{url:"https://waf-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:f}],type:g},{error:"FIPS is enabled but this partition does not support FIPS",type:e}],type:g},{conditions:v,rules:[{conditions:[t],rules:[{endpoint:{url:"https://waf.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:f}],type:g},{error:"DualStack is enabled but this partition does not support DualStack",type:e}],type:g},{endpoint:{url:"https://waf.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:e}]};
export const ruleSet: RuleSetObject = _data;
