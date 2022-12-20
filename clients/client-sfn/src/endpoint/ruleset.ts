// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/sfn.json */

const s="fn",
t="argv",
u="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h={"required":true,"default":false,"type":"Boolean"},
i={[u]:"Region"},
j={[u]:"Endpoint"},
k={[s]:"booleanEquals",[t]:[{[u]:"UseFIPS"},true]},
l={[s]:"booleanEquals",[t]:[{[u]:"UseDualStack"},true]},
m={},
n={[s]:"booleanEquals",[t]:[true,{[s]:"getAttr",[t]:[{[u]:d},"supportsFIPS"]}]},
o={[s]:"booleanEquals",[t]:[true,{[s]:"getAttr",[t]:[{[u]:d},"supportsDualStack"]}]},
p=[j],
q=[k],
r=[l];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:h,UseFIPS:h,Endpoint:{required:b,type:c}},rules:[{conditions:[{[s]:"aws.partition",[t]:[i],assign:d}],type:e,rules:[{conditions:[{[s]:"isSet",[t]:p},{[s]:"parseURL",[t]:p,assign:"url"}],type:e,rules:[{conditions:q,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:r,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:j,properties:m,headers:m},type:g}]}]},{conditions:[k,l],type:e,rules:[{conditions:[n,o],type:e,rules:[{endpoint:{url:"https://states-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:q,type:e,rules:[{conditions:[n],type:e,rules:[{type:e,rules:[{conditions:[{[s]:"stringEquals",[t]:[i,"us-gov-west-1"]}],endpoint:{url:"https://states.us-gov-west-1.amazonaws.com",properties:m,headers:m},type:g},{endpoint:{url:"https://states-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:r,type:e,rules:[{conditions:[o],type:e,rules:[{endpoint:{url:"https://states.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{endpoint:{url:"https://states.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:g}]}]};
export const ruleSet: RuleSetObject = _data;
