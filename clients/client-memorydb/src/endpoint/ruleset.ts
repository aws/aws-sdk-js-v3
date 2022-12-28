// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/memorydb.json */

const r="fn",
s="argv",
t="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h={"required":true,"default":false,"type":"Boolean"},
i={[t]:"Region"},
j={[t]:"Endpoint"},
k={[r]:"booleanEquals",[s]:[{[t]:"UseFIPS"},true]},
l={[r]:"booleanEquals",[s]:[{[t]:"UseDualStack"},true]},
m={},
n={[r]:"booleanEquals",[s]:[true,{[r]:"getAttr",[s]:[{[t]:d},"supportsFIPS"]}]},
o={[r]:"booleanEquals",[s]:[true,{[r]:"getAttr",[s]:[{[t]:d},"supportsDualStack"]}]},
p=[k],
q=[l];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:h,UseFIPS:h,Endpoint:{required:b,type:c}},rules:[{conditions:[{[r]:"aws.partition",[s]:[i],assign:d}],type:e,rules:[{conditions:[{[r]:"isSet",[s]:[j]}],type:e,rules:[{conditions:p,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:q,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:j,properties:m,headers:m},type:g}]}]},{conditions:[k,l],type:e,rules:[{conditions:[n,o],type:e,rules:[{endpoint:{url:"https://memory-db-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:p,type:e,rules:[{conditions:[n],type:e,rules:[{type:e,rules:[{endpoint:{url:"https://memory-db-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:q,type:e,rules:[{conditions:[o],type:e,rules:[{endpoint:{url:"https://memory-db.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{type:e,rules:[{conditions:[{[r]:"stringEquals",[s]:[i,"fips"]}],endpoint:{url:"https://memory-db-fips.us-west-1.amazonaws.com",properties:m,headers:m},type:g},{endpoint:{url:"https://memory-db.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
