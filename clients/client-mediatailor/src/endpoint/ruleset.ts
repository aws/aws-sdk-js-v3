// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/mediatailor.json */

const q="fn",
r="argv",
s="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h={"required":true,"default":false,"type":"Boolean"},
i={[s]:"Endpoint"},
j={[q]:"booleanEquals",[r]:[{[s]:"UseFIPS"},true]},
k={[q]:"booleanEquals",[r]:[{[s]:"UseDualStack"},true]},
l={},
m={[q]:"booleanEquals",[r]:[true,{[q]:"getAttr",[r]:[{[s]:d},"supportsFIPS"]}]},
n={[q]:"booleanEquals",[r]:[true,{[q]:"getAttr",[r]:[{[s]:d},"supportsDualStack"]}]},
o=[j],
p=[k];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:h,UseFIPS:h,Endpoint:{required:b,type:c}},rules:[{conditions:[{[q]:"aws.partition",[r]:[{[s]:"Region"}],assign:d}],type:e,rules:[{conditions:[{[q]:"isSet",[r]:[i]}],type:e,rules:[{conditions:o,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:p,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:i,properties:l,headers:l},type:g}]}]},{conditions:[j,k],type:e,rules:[{conditions:[m,n],type:e,rules:[{type:e,rules:[{endpoint:{url:"https://api.mediatailor-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:g}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:o,type:e,rules:[{conditions:[m],type:e,rules:[{type:e,rules:[{endpoint:{url:"https://api.mediatailor-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:p,type:e,rules:[{conditions:[n],type:e,rules:[{type:e,rules:[{endpoint:{url:"https://api.mediatailor.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:g}]}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{type:e,rules:[{endpoint:{url:"https://api.mediatailor.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
