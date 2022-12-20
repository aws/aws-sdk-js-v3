// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/config-service.json */

const u="fn",
v="argv",
w="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="getAttr",
i={"required":true,"default":false,"type":"Boolean"},
j={[w]:"Endpoint"},
k={[u]:"booleanEquals",[v]:[{[w]:"UseFIPS"},true]},
l={[u]:"booleanEquals",[v]:[{[w]:"UseDualStack"},true]},
m={},
n={[u]:"booleanEquals",[v]:[true,{[u]:h,[v]:[{[w]:d},"supportsFIPS"]}]},
o={[w]:d},
p={[u]:"booleanEquals",[v]:[true,{[u]:h,[v]:[o,"supportsDualStack"]}]},
q={"url":"https://config.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
r=[j],
s=[k],
t=[l];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:i,UseFIPS:i,Endpoint:{required:b,type:c}},rules:[{conditions:[{[u]:"aws.partition",[v]:[{[w]:"Region"}],assign:d}],type:e,rules:[{conditions:[{[u]:"isSet",[v]:r},{[u]:"parseURL",[v]:r,assign:"url"}],type:e,rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:j,properties:m,headers:m},type:g}]}]},{conditions:[k,l],type:e,rules:[{conditions:[n,p],type:e,rules:[{endpoint:{url:"https://config-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:s,type:e,rules:[{conditions:[n],type:e,rules:[{type:e,rules:[{conditions:[{[u]:"stringEquals",[v]:["aws-us-gov",{[u]:h,[v]:[o,"name"]}]}],endpoint:q,type:g},{endpoint:{url:"https://config-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:t,type:e,rules:[{conditions:[p],type:e,rules:[{endpoint:{url:"https://config.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{endpoint:q,type:g}]}]};
export const ruleSet: RuleSetObject = _data;
