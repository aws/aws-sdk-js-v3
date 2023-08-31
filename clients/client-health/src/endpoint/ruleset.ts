// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/health.json */

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
g="sigv4",
h="health",
i={[u]:false,"type":"String"},
j={[u]:true,"default":false,"type":"Boolean"},
k={[x]:"Endpoint"},
l={[v]:"booleanEquals",[w]:[{[x]:"UseFIPS"},true]},
m={[v]:"booleanEquals",[w]:[{[x]:"UseDualStack"},true]},
n={},
o={[x]:"Region"},
p={[v]:"booleanEquals",[w]:[true,{[v]:"getAttr",[w]:[{[x]:e},"supportsFIPS"]}]},
q={[v]:"booleanEquals",[w]:[true,{[v]:"getAttr",[w]:[{[x]:e},"supportsDualStack"]}]},
r=[l],
s=[m],
t=[o];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[v]:a,[w]:[k]}],type:b,rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:k,properties:n,headers:n},type:d}]},{conditions:[{[v]:a,[w]:t}],type:b,rules:[{conditions:[{[v]:"aws.partition",[w]:t,assign:e}],type:b,rules:[{conditions:[l,m],type:b,rules:[{conditions:[p,q],type:b,rules:[{endpoint:{url:"https://health-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:r,type:b,rules:[{conditions:[p],type:b,rules:[{endpoint:{url:"https://health-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:d}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:s,type:b,rules:[{conditions:[q],type:b,rules:[{endpoint:{url:"https://health.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{conditions:[{[v]:f,[w]:[o,"aws-global"]}],endpoint:{url:"https://global.health.amazonaws.com",properties:{authSchemes:[{name:g,signingName:h,signingRegion:"us-east-1"}]},headers:n},type:d},{conditions:[{[v]:f,[w]:[o,"aws-cn-global"]}],endpoint:{url:"https://global.health.amazonaws.com.cn",properties:{authSchemes:[{name:g,signingName:h,signingRegion:"cn-northwest-1"}]},headers:n},type:d},{endpoint:{url:"https://health.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:d}]}]},{error:"Invalid Configuration: Missing Region",type:c}]};
export const ruleSet: RuleSetObject = _data;
