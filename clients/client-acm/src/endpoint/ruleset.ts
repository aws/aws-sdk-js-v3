// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/acm.json */

const s="required",
t="fn",
u="argv",
v="ref";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="getAttr",
f={[s]:false,"type":"String"},
g={[s]:true,"default":false,"type":"Boolean"},
h={[v]:"Endpoint"},
i={[t]:"booleanEquals",[u]:[{[v]:"UseFIPS"},true]},
j={[t]:"booleanEquals",[u]:[{[v]:"UseDualStack"},true]},
k={},
l={[t]:"booleanEquals",[u]:[true,{[t]:e,[u]:[{[v]:a},"supportsFIPS"]}]},
m={[v]:a},
n={[t]:"booleanEquals",[u]:[true,{[t]:e,[u]:[m,"supportsDualStack"]}]},
o={"url":"https://acm.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
p=[h],
q=[i],
r=[j];
const _data={version:"1.0",parameters:{Region:f,UseDualStack:g,UseFIPS:g,Endpoint:f},rules:[{conditions:[{[t]:"aws.partition",[u]:[{[v]:"Region"}],assign:a}],type:b,rules:[{conditions:[{[t]:"isSet",[u]:p},{[t]:"parseURL",[u]:p,assign:"url"}],type:b,rules:[{conditions:q,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:r,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:h,properties:k,headers:k},type:d}]}]},{conditions:[i,j],type:b,rules:[{conditions:[l,n],type:b,rules:[{endpoint:{url:"https://acm-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:q,type:b,rules:[{conditions:[l],type:b,rules:[{type:b,rules:[{conditions:[{[t]:"stringEquals",[u]:["aws-us-gov",{[t]:e,[u]:[m,"name"]}]}],endpoint:o,type:d},{endpoint:{url:"https://acm-fips.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:r,type:b,rules:[{conditions:[n],type:b,rules:[{endpoint:{url:"https://acm.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{endpoint:o,type:d}]}]};
export const ruleSet: RuleSetObject = _data;
