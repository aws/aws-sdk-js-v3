// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/database-migration-service.json */

const u="required",
v="fn",
w="argv",
x="ref";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="stringEquals",
f={[u]:false,"type":"String"},
g={[u]:true,"default":false,"type":"Boolean"},
h={[x]:"Region"},
i={[x]:"Endpoint"},
j={[v]:"booleanEquals",[w]:[{[x]:"UseFIPS"},true]},
k={[v]:"booleanEquals",[w]:[{[x]:"UseDualStack"},true]},
l={},
m={[v]:"booleanEquals",[w]:[true,{[v]:"getAttr",[w]:[{[x]:a},"supportsFIPS"]}]},
n={[v]:"booleanEquals",[w]:[true,{[v]:"getAttr",[w]:[{[x]:a},"supportsDualStack"]}]},
o={[v]:"getAttr",[w]:[{[x]:a},"name"]},
p={"url":"https://dms.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
q=[i],
r=[j],
s=[k],
t=[{[v]:e,[w]:[h,"dms"]}];
const _data={version:"1.0",parameters:{Region:f,UseDualStack:g,UseFIPS:g,Endpoint:f},rules:[{conditions:[{[v]:"aws.partition",[w]:[h],assign:a}],type:b,rules:[{conditions:[{[v]:"isSet",[w]:q},{[v]:"parseURL",[w]:q,assign:"url"}],type:b,rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:i,properties:l,headers:l},type:d}]}]},{conditions:[j,k],type:b,rules:[{conditions:[m,n],type:b,rules:[{endpoint:{url:"https://dms-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:r,type:b,rules:[{conditions:[m],type:b,rules:[{type:b,rules:[{conditions:t,endpoint:{url:"https://dms-fips.us-west-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:t,endpoint:{url:"https://dms.us-gov-west-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[v]:e,[w]:["aws-us-gov",o]}],endpoint:p,type:d},{conditions:t,endpoint:{url:"https://dms.us-iso-east-1.c2s.ic.gov",properties:l,headers:l},type:d},{conditions:[{[v]:e,[w]:["aws-iso",o]}],endpoint:p,type:d},{conditions:t,endpoint:{url:"https://dms.us-isob-east-1.sc2s.sgov.gov",properties:l,headers:l},type:d},{conditions:[{[v]:e,[w]:["aws-iso-b",o]}],endpoint:p,type:d},{endpoint:{url:"https://dms-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:s,type:b,rules:[{conditions:[n],type:b,rules:[{endpoint:{url:"https://dms.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{endpoint:p,type:d}]}]};
export const ruleSet: RuleSetObject = _data;
