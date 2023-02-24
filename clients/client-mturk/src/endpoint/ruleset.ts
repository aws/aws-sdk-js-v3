// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/mturk.json */

const q="required",
r="fn",
s="argv",
t="ref";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e={[q]:false,"type":"String"},
f={[q]:true,"default":false,"type":"Boolean"},
g={[t]:"Region"},
h={[t]:"Endpoint"},
i={[r]:"booleanEquals",[s]:[{[t]:"UseFIPS"},true]},
j={[r]:"booleanEquals",[s]:[{[t]:"UseDualStack"},true]},
k={},
l={[r]:"booleanEquals",[s]:[true,{[r]:"getAttr",[s]:[{[t]:a},"supportsFIPS"]}]},
m={[r]:"booleanEquals",[s]:[true,{[r]:"getAttr",[s]:[{[t]:a},"supportsDualStack"]}]},
n=[h],
o=[i],
p=[j];
const _data={version:"1.0",parameters:{Region:e,UseDualStack:f,UseFIPS:f,Endpoint:e},rules:[{conditions:[{[r]:"aws.partition",[s]:[g],assign:a}],type:b,rules:[{conditions:[{[r]:"isSet",[s]:n},{[r]:"parseURL",[s]:n,assign:"url"}],type:b,rules:[{conditions:o,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:p,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:h,properties:k,headers:k},type:d}]}]},{conditions:[i,j],type:b,rules:[{conditions:[l,m],type:b,rules:[{endpoint:{url:"https://mturk-requester-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:o,type:b,rules:[{conditions:[l],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://mturk-requester-fips.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:p,type:b,rules:[{conditions:[m],type:b,rules:[{endpoint:{url:"https://mturk-requester.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{type:b,rules:[{conditions:[{[r]:"stringEquals",[s]:[g,"sandbox"]}],endpoint:{url:"https://mturk-requester-sandbox.us-east-1.amazonaws.com",properties:k,headers:k},type:d},{endpoint:{url:"https://mturk-requester.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:d}]}]}]};
export const ruleSet: RuleSetObject = _data;
