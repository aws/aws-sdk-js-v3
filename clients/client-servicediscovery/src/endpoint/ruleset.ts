// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/servicediscovery.json */

const t="fn",
u="argv",
v="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h={"required":true,"default":false,"type":"Boolean"},
i={[v]:"Region"},
j={[v]:"Endpoint"},
k={[t]:"booleanEquals",[u]:[{[v]:"UseFIPS"},true]},
l={[t]:"booleanEquals",[u]:[{[v]:"UseDualStack"},true]},
m={},
n={[t]:"booleanEquals",[u]:[true,{[t]:"getAttr",[u]:[{[v]:d},"supportsFIPS"]}]},
o={[t]:"booleanEquals",[u]:[true,{[t]:"getAttr",[u]:[{[v]:d},"supportsDualStack"]}]},
p=[j],
q=[k],
r=[l],
s=[{[t]:"stringEquals",[u]:[i,"servicediscovery"]}];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:h,UseFIPS:h,Endpoint:{required:b,type:c}},rules:[{conditions:[{[t]:"aws.partition",[u]:[i],assign:d}],type:e,rules:[{conditions:[{[t]:"isSet",[u]:p},{[t]:"parseURL",[u]:p,assign:"url"}],type:e,rules:[{conditions:q,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:r,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:j,properties:m,headers:m},type:g}]}]},{conditions:[k,l],type:e,rules:[{conditions:[n,o],type:e,rules:[{endpoint:{url:"https://servicediscovery-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:q,type:e,rules:[{conditions:[n],type:e,rules:[{type:e,rules:[{conditions:s,endpoint:{url:"https://servicediscovery-fips.ca-central-1.amazonaws.com",properties:m,headers:m},type:g},{conditions:s,endpoint:{url:"https://servicediscovery-fips.us-gov-west-1.amazonaws.com",properties:m,headers:m},type:g},{endpoint:{url:"https://servicediscovery-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:r,type:e,rules:[{conditions:[o],type:e,rules:[{endpoint:{url:"https://servicediscovery.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{endpoint:{url:"https://servicediscovery.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:g}]}]};
export const ruleSet: RuleSetObject = _data;
