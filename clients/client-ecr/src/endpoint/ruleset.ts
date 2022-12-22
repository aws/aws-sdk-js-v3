// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/ecr.json */

const t="required",
u="fn",
v="argv",
w="ref";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e="stringEquals",
f={[t]:false,"type":"String"},
g={[t]:true,"default":false,"type":"Boolean"},
h={[w]:"Region"},
i={[w]:"Endpoint"},
j={[u]:"booleanEquals",[v]:[{[w]:"UseFIPS"},true]},
k={[u]:"booleanEquals",[v]:[{[w]:"UseDualStack"},true]},
l={},
m={[u]:"booleanEquals",[v]:[true,{[u]:"getAttr",[v]:[{[w]:a},"supportsFIPS"]}]},
n={[u]:"booleanEquals",[v]:[true,{[u]:"getAttr",[v]:[{[w]:a},"supportsDualStack"]}]},
o={[u]:"getAttr",[v]:[{[w]:a},"name"]},
p={"url":"https://ecr-fips.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
q=[i],
r=[j],
s=[k];
const _data={version:"1.0",parameters:{Region:f,UseDualStack:g,UseFIPS:g,Endpoint:f},rules:[{conditions:[{[u]:"aws.partition",[v]:[h],assign:a}],type:b,rules:[{conditions:[{[u]:"isSet",[v]:q},{[u]:"parseURL",[v]:q,assign:"url"}],type:b,rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:i,properties:l,headers:l},type:d}]}]},{conditions:[j,k],type:b,rules:[{conditions:[m,n],type:b,rules:[{endpoint:{url:"https://api.ecr-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:r,type:b,rules:[{conditions:[m],type:b,rules:[{type:b,rules:[{conditions:[{[u]:e,[v]:[h,"dkr-us-east-2"]}],endpoint:{url:"https://ecr-fips.us-east-2.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[u]:e,[v]:[h,"dkr-us-east-1"]}],endpoint:{url:"https://ecr-fips.us-east-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[u]:e,[v]:[h,"dkr-us-west-2"]}],endpoint:{url:"https://ecr-fips.us-west-2.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[u]:e,[v]:[h,"dkr-us-west-1"]}],endpoint:{url:"https://ecr-fips.us-west-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[u]:e,[v]:["aws",o]}],endpoint:p,type:d},{conditions:[{[u]:e,[v]:[h,"dkr-us-gov-east-1"]}],endpoint:{url:"https://ecr-fips.us-gov-east-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[u]:e,[v]:[h,"dkr-us-gov-west-1"]}],endpoint:{url:"https://ecr-fips.us-gov-west-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[u]:e,[v]:["aws-us-gov",o]}],endpoint:p,type:d},{endpoint:{url:"https://api.ecr-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:s,type:b,rules:[{conditions:[n],type:b,rules:[{endpoint:{url:"https://api.ecr.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{endpoint:{url:"https://api.ecr.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]};
export const ruleSet: RuleSetObject = _data;
