// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/neptune.json */

const u="required",
v="fn",
w="argv",
x="ref";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="getAttr",
f="stringEquals",
g={[u]:false,"type":"String"},
h={[u]:true,"default":false,"type":"Boolean"},
i={[x]:"Region"},
j={[x]:"Endpoint"},
k={[v]:"booleanEquals",[w]:[{[x]:"UseFIPS"},true]},
l={[v]:"booleanEquals",[w]:[{[x]:"UseDualStack"},true]},
m={},
n={[v]:"booleanEquals",[w]:[true,{[v]:e,[w]:[{[x]:a},"supportsFIPS"]}]},
o={[x]:a},
p={[v]:"booleanEquals",[w]:[true,{[v]:e,[w]:[o,"supportsDualStack"]}]},
q={"url":"https://rds.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
r=[j],
s=[k],
t=[l];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},rules:[{conditions:[{[v]:"aws.partition",[w]:[i],assign:a}],type:b,rules:[{conditions:[{[v]:"isSet",[w]:r},{[v]:"parseURL",[w]:r,assign:"url"}],type:b,rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:j,properties:m,headers:m},type:d}]}]},{conditions:[k,l],type:b,rules:[{conditions:[n,p],type:b,rules:[{endpoint:{url:"https://rds-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:s,type:b,rules:[{conditions:[n],type:b,rules:[{type:b,rules:[{conditions:[{[v]:f,[w]:[i,"rds.ca-central-1"]}],endpoint:{url:"https://rds-fips.ca-central-1.amazonaws.com",properties:m,headers:m},type:d},{conditions:[{[v]:f,[w]:[i,"rds.us-east-1"]}],endpoint:{url:"https://rds-fips.us-east-1.amazonaws.com",properties:m,headers:m},type:d},{conditions:[{[v]:f,[w]:[i,"rds.us-east-2"]}],endpoint:{url:"https://rds-fips.us-east-2.amazonaws.com",properties:m,headers:m},type:d},{conditions:[{[v]:f,[w]:[i,"rds.us-west-1"]}],endpoint:{url:"https://rds-fips.us-west-1.amazonaws.com",properties:m,headers:m},type:d},{conditions:[{[v]:f,[w]:[i,"rds.us-west-2"]}],endpoint:{url:"https://rds-fips.us-west-2.amazonaws.com",properties:m,headers:m},type:d},{conditions:[{[v]:f,[w]:["aws-us-gov",{[v]:e,[w]:[o,"name"]}]}],endpoint:q,type:d},{endpoint:{url:"https://rds-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:t,type:b,rules:[{conditions:[p],type:b,rules:[{endpoint:{url:"https://rds.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{endpoint:q,type:d}]}]};
export const ruleSet: RuleSetObject = _data;
