// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/transcribe.json */

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
h="stringEquals",
i={"required":true,"default":false,"type":"Boolean"},
j={[w]:"Region"},
k={[w]:"Endpoint"},
l={[u]:"booleanEquals",[v]:[{[w]:"UseFIPS"},true]},
m={[u]:"booleanEquals",[v]:[{[w]:"UseDualStack"},true]},
n={},
o={[u]:"booleanEquals",[v]:[true,{[u]:"getAttr",[v]:[{[w]:d},"supportsFIPS"]}]},
p={[u]:"booleanEquals",[v]:[true,{[u]:"getAttr",[v]:[{[w]:d},"supportsDualStack"]}]},
q={[u]:"getAttr",[v]:[{[w]:d},"name"]},
r={"url":"https://fips.transcribe.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
s=[l],
t=[m];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:i,UseFIPS:i,Endpoint:{required:b,type:c}},rules:[{conditions:[{[u]:"aws.partition",[v]:[j],assign:d}],type:e,rules:[{conditions:[{[u]:"isSet",[v]:[k]}],type:e,rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:k,properties:n,headers:n},type:g}]}]},{conditions:[l,m],type:e,rules:[{conditions:[o,p],type:e,rules:[{endpoint:{url:"https://transcribe-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:s,type:e,rules:[{conditions:[o],type:e,rules:[{type:e,rules:[{conditions:[{[u]:h,[v]:["aws",q]}],endpoint:r,type:g},{conditions:[{[u]:h,[v]:["aws-us-gov",q]}],endpoint:r,type:g},{endpoint:{url:"https://transcribe-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:t,type:e,rules:[{conditions:[p],type:e,rules:[{endpoint:{url:"https://transcribe.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{type:e,rules:[{conditions:[{[u]:h,[v]:[j,"cn-north-1"]}],endpoint:{url:"https://cn.transcribe.cn-north-1.amazonaws.com.cn",properties:n,headers:n},type:g},{conditions:[{[u]:h,[v]:[j,"cn-northwest-1"]}],endpoint:{url:"https://cn.transcribe.cn-northwest-1.amazonaws.com.cn",properties:n,headers:n},type:g},{endpoint:{url:"https://transcribe.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
