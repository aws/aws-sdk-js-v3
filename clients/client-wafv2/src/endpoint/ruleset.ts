// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/wafv2.json */

const s="required",
t="fn",
u="argv",
v="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g={[s]:false,"type":"String"},
h={[s]:true,"default":false,"type":"Boolean"},
i={[v]:"Endpoint"},
j={[t]:"booleanEquals",[u]:[{[v]:"UseFIPS"},true]},
k={[t]:"booleanEquals",[u]:[{[v]:"UseDualStack"},true]},
l={},
m={[v]:"Region"},
n={[t]:"booleanEquals",[u]:[true,{[t]:"getAttr",[u]:[{[v]:e},"supportsFIPS"]}]},
o={[t]:"booleanEquals",[u]:[true,{[t]:"getAttr",[u]:[{[v]:e},"supportsDualStack"]}]},
p=[j],
q=[k],
r=[m];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},rules:[{conditions:[{[t]:a,[u]:[i]}],type:b,rules:[{conditions:p,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:q,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:i,properties:l,headers:l},type:d}]}]},{type:b,rules:[{conditions:[{[t]:a,[u]:r}],type:b,rules:[{conditions:[{[t]:"aws.partition",[u]:r,assign:e}],type:b,rules:[{conditions:[j,k],type:b,rules:[{conditions:[n,o],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://wafv2-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:p,type:b,rules:[{conditions:[n],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://wafv2-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:q,type:b,rules:[{conditions:[o],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://wafv2.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{type:b,rules:[{conditions:[{[t]:f,[u]:[m,"af-south-1"]}],endpoint:{url:"https://wafv2.af-south-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"ap-east-1"]}],endpoint:{url:"https://wafv2.ap-east-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"ap-northeast-1"]}],endpoint:{url:"https://wafv2.ap-northeast-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"ap-northeast-2"]}],endpoint:{url:"https://wafv2.ap-northeast-2.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"ap-northeast-3"]}],endpoint:{url:"https://wafv2.ap-northeast-3.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"ap-south-1"]}],endpoint:{url:"https://wafv2.ap-south-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"ap-southeast-1"]}],endpoint:{url:"https://wafv2.ap-southeast-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"ap-southeast-2"]}],endpoint:{url:"https://wafv2.ap-southeast-2.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"ap-southeast-3"]}],endpoint:{url:"https://wafv2.ap-southeast-3.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"ca-central-1"]}],endpoint:{url:"https://wafv2.ca-central-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"eu-central-1"]}],endpoint:{url:"https://wafv2.eu-central-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"eu-north-1"]}],endpoint:{url:"https://wafv2.eu-north-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"eu-south-1"]}],endpoint:{url:"https://wafv2.eu-south-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"eu-west-1"]}],endpoint:{url:"https://wafv2.eu-west-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"eu-west-2"]}],endpoint:{url:"https://wafv2.eu-west-2.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"eu-west-3"]}],endpoint:{url:"https://wafv2.eu-west-3.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"me-south-1"]}],endpoint:{url:"https://wafv2.me-south-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"sa-east-1"]}],endpoint:{url:"https://wafv2.sa-east-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"us-east-1"]}],endpoint:{url:"https://wafv2.us-east-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"us-east-2"]}],endpoint:{url:"https://wafv2.us-east-2.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"us-west-1"]}],endpoint:{url:"https://wafv2.us-west-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"us-west-2"]}],endpoint:{url:"https://wafv2.us-west-2.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"cn-north-1"]}],endpoint:{url:"https://wafv2.cn-north-1.amazonaws.com.cn",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"cn-northwest-1"]}],endpoint:{url:"https://wafv2.cn-northwest-1.amazonaws.com.cn",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"us-gov-east-1"]}],endpoint:{url:"https://wafv2.us-gov-east-1.amazonaws.com",properties:l,headers:l},type:d},{conditions:[{[t]:f,[u]:[m,"us-gov-west-1"]}],endpoint:{url:"https://wafv2.us-gov-west-1.amazonaws.com",properties:l,headers:l},type:d},{endpoint:{url:"https://wafv2.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]}]},{error:"Invalid Configuration: Missing Region",type:c}]}]};
export const ruleSet: RuleSetObject = _data;
