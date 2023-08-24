// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/mediaconvert.json */

const u="required",
v="fn",
w="argv",
x="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="getAttr",
g="stringEquals",
h={[u]:false,"type":"String"},
i={[u]:true,"default":false,"type":"Boolean"},
j={[x]:"Endpoint"},
k={[v]:"booleanEquals",[w]:[{[x]:"UseFIPS"},true]},
l={[v]:"booleanEquals",[w]:[{[x]:"UseDualStack"},true]},
m={},
n={[x]:"Region"},
o={[v]:"booleanEquals",[w]:[true,{[v]:f,[w]:[{[x]:e},"supportsFIPS"]}]},
p={[x]:e},
q={[v]:"booleanEquals",[w]:[true,{[v]:f,[w]:[p,"supportsDualStack"]}]},
r=[k],
s=[l],
t=[n];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h},rules:[{conditions:[{[v]:a,[w]:[j]}],type:b,rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:j,properties:m,headers:m},type:d}]},{conditions:[{[v]:a,[w]:t}],type:b,rules:[{conditions:[{[v]:"aws.partition",[w]:t,assign:e}],type:b,rules:[{conditions:[k,l],type:b,rules:[{conditions:[o,q],type:b,rules:[{endpoint:{url:"https://mediaconvert-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:r,type:b,rules:[{conditions:[o],type:b,rules:[{conditions:[{[v]:g,[w]:["aws-us-gov",{[v]:f,[w]:[p,"name"]}]}],endpoint:{url:"https://mediaconvert.{Region}.amazonaws.com",properties:m,headers:m},type:d},{endpoint:{url:"https://mediaconvert-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:d}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:s,type:b,rules:[{conditions:[q],type:b,rules:[{endpoint:{url:"https://mediaconvert.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{conditions:[{[v]:g,[w]:[n,"cn-northwest-1"]}],endpoint:{url:"https://subscribe.mediaconvert.cn-northwest-1.amazonaws.com.cn",properties:m,headers:m},type:d},{endpoint:{url:"https://mediaconvert.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:d}]}]},{error:"Invalid Configuration: Missing Region",type:c}]};
export const ruleSet: RuleSetObject = _data;
