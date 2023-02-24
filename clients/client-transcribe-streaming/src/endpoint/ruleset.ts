// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/transcribe-streaming.json */

const r="required",
s="fn",
t="argv",
u="ref";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="stringEquals",
f={[r]:false,"type":"String"},
g={[r]:true,"default":false,"type":"Boolean"},
h={[u]:"Region"},
i={[u]:"Endpoint"},
j={[s]:"booleanEquals",[t]:[{[u]:"UseFIPS"},true]},
k={[s]:"booleanEquals",[t]:[{[u]:"UseDualStack"},true]},
l={},
m={[s]:"booleanEquals",[t]:[true,{[s]:"getAttr",[t]:[{[u]:a},"supportsFIPS"]}]},
n={[s]:"booleanEquals",[t]:[true,{[s]:"getAttr",[t]:[{[u]:a},"supportsDualStack"]}]},
o=[i],
p=[j],
q=[k];
const _data={version:"1.0",parameters:{Region:f,UseDualStack:g,UseFIPS:g,Endpoint:f},rules:[{conditions:[{[s]:"aws.partition",[t]:[h],assign:a}],type:b,rules:[{conditions:[{[s]:"isSet",[t]:o},{[s]:"parseURL",[t]:o,assign:"url"}],type:b,rules:[{conditions:p,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:q,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:i,properties:l,headers:l},type:d}]}]},{conditions:[j,k],type:b,rules:[{conditions:[m,n],type:b,rules:[{endpoint:{url:"https://transcribestreaming-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:p,type:b,rules:[{conditions:[m],type:b,rules:[{type:b,rules:[{conditions:[{[s]:e,[t]:[h,"transcribestreaming-ca-central-1"]}],endpoint:{url:"https://transcribestreaming-fips.ca-central-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[s]:e,[t]:[h,"transcribestreaming-us-east-1"]}],endpoint:{url:"https://transcribestreaming-fips.us-east-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[s]:e,[t]:[h,"transcribestreaming-us-east-2"]}],endpoint:{url:"https://transcribestreaming-fips.us-east-2.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[s]:e,[t]:[h,"transcribestreaming-us-west-2"]}],endpoint:{url:"https://transcribestreaming-fips.us-west-2.amazonaws.com",properties:l,headers:l},type:d},{endpoint:{url:"https://transcribestreaming-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:q,type:b,rules:[{conditions:[n],type:b,rules:[{endpoint:{url:"https://transcribestreaming.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{endpoint:{url:"https://transcribestreaming.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]};
export const ruleSet: RuleSetObject = _data;
