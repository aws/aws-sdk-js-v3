// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/resource-groups.json */

const t="fn",
u="argv",
v="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="getAttr",
i={"required":true,"default":false,"type":"Boolean"},
j={[v]:"Endpoint"},
k={[t]:"booleanEquals",[u]:[{[v]:"UseFIPS"},true]},
l={[t]:"booleanEquals",[u]:[{[v]:"UseDualStack"},true]},
m={},
n={[t]:"booleanEquals",[u]:[true,{[t]:h,[u]:[{[v]:d},"supportsFIPS"]}]},
o={[v]:d},
p={[t]:"booleanEquals",[u]:[true,{[t]:h,[u]:[o,"supportsDualStack"]}]},
q={"url":"https://resource-groups.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
r=[k],
s=[l];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:i,UseFIPS:i,Endpoint:{required:b,type:c}},rules:[{conditions:[{[t]:"aws.partition",[u]:[{[v]:"Region"}],assign:d}],type:e,rules:[{conditions:[{[t]:"isSet",[u]:[j]}],type:e,rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:j,properties:m,headers:m},type:g}]}]},{conditions:[k,l],type:e,rules:[{conditions:[n,p],type:e,rules:[{endpoint:{url:"https://resource-groups-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:r,type:e,rules:[{conditions:[n],type:e,rules:[{type:e,rules:[{conditions:[{[t]:"stringEquals",[u]:["aws-us-gov",{[t]:h,[u]:[o,"name"]}]}],endpoint:q,type:g},{endpoint:{url:"https://resource-groups-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:s,type:e,rules:[{conditions:[p],type:e,rules:[{endpoint:{url:"https://resource-groups.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{endpoint:q,type:g}]}]};
export const ruleSet: RuleSetObject = _data;
