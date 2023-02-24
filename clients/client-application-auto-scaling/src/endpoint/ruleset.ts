// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/application-auto-scaling.json */

const s="fn",
t="argv",
u="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="getAttr",
i={"required":true,"default":false,"type":"Boolean"},
j={[u]:"Endpoint"},
k={[s]:"booleanEquals",[t]:[{[u]:"UseFIPS"},true]},
l={[s]:"booleanEquals",[t]:[{[u]:"UseDualStack"},true]},
m={},
n={[s]:"booleanEquals",[t]:[true,{[s]:h,[t]:[{[u]:d},"supportsFIPS"]}]},
o={[u]:d},
p={[s]:"booleanEquals",[t]:[true,{[s]:h,[t]:[o,"supportsDualStack"]}]},
q=[k],
r=[l];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:i,UseFIPS:i,Endpoint:{required:b,type:c}},rules:[{conditions:[{[s]:"aws.partition",[t]:[{[u]:"Region"}],assign:d}],type:e,rules:[{conditions:[{[s]:"isSet",[t]:[j]}],type:e,rules:[{conditions:q,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:r,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:j,properties:m,headers:m},type:g}]}]},{conditions:[k,l],type:e,rules:[{conditions:[n,p],type:e,rules:[{type:e,rules:[{endpoint:{url:"https://application-autoscaling-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:q,type:e,rules:[{conditions:[n],type:e,rules:[{type:e,rules:[{conditions:[{[s]:"stringEquals",[t]:["aws-us-gov",{[s]:h,[t]:[o,"name"]}]}],endpoint:{url:"https://application-autoscaling.{Region}.amazonaws.com",properties:m,headers:m},type:g},{endpoint:{url:"https://application-autoscaling-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:r,type:e,rules:[{conditions:[p],type:e,rules:[{type:e,rules:[{endpoint:{url:"https://application-autoscaling.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{type:e,rules:[{endpoint:{url:"https://application-autoscaling.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
