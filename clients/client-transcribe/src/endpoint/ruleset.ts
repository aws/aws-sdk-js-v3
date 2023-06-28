// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/transcribe.json */

const u="required",
v="fn",
w="argv",
x="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g={[u]:false,"type":"String"},
h={[u]:true,"default":false,"type":"Boolean"},
i={[x]:"Endpoint"},
j={[v]:"booleanEquals",[w]:[{[x]:"UseFIPS"},true]},
k={[v]:"booleanEquals",[w]:[{[x]:"UseDualStack"},true]},
l={},
m={[x]:"Region"},
n={[v]:"booleanEquals",[w]:[true,{[v]:"getAttr",[w]:[{[x]:e},"supportsFIPS"]}]},
o={[v]:"booleanEquals",[w]:[true,{[v]:"getAttr",[w]:[{[x]:e},"supportsDualStack"]}]},
p={[v]:"getAttr",[w]:[{[x]:e},"name"]},
q={"url":"https://fips.transcribe.{Region}.amazonaws.com","properties":{},"headers":{}},
r=[j],
s=[k],
t=[m];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},rules:[{conditions:[{[v]:a,[w]:[i]}],type:b,rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:i,properties:l,headers:l},type:d}]}]},{type:b,rules:[{conditions:[{[v]:a,[w]:t}],type:b,rules:[{conditions:[{[v]:"aws.partition",[w]:t,assign:e}],type:b,rules:[{conditions:[j,k],type:b,rules:[{conditions:[n,o],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://transcribe-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:r,type:b,rules:[{conditions:[n],type:b,rules:[{type:b,rules:[{conditions:[{[v]:f,[w]:["aws",p]}],endpoint:q,type:d},{conditions:[{[v]:f,[w]:["aws-us-gov",p]}],endpoint:q,type:d},{endpoint:{url:"https://transcribe-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:s,type:b,rules:[{conditions:[o],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://transcribe.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{type:b,rules:[{conditions:[{[v]:f,[w]:[m,"cn-north-1"]}],endpoint:{url:"https://cn.transcribe.cn-north-1.amazonaws.com.cn",properties:l,headers:l},type:d},{conditions:[{[v]:f,[w]:[m,"cn-northwest-1"]}],endpoint:{url:"https://cn.transcribe.cn-northwest-1.amazonaws.com.cn",properties:l,headers:l},type:d},{endpoint:{url:"https://transcribe.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]}]},{error:"Invalid Configuration: Missing Region",type:c}]}]};
export const ruleSet: RuleSetObject = _data;
