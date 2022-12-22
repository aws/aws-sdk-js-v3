// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/omics.json */

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
i={[t]:"Endpoint"},
j={[r]:"booleanEquals",[s]:[{[t]:"UseFIPS"},true]},
k={[r]:"booleanEquals",[s]:[{[t]:"UseDualStack"},true]},
l={},
m={[r]:"booleanEquals",[s]:[true,{[r]:"getAttr",[s]:[{[t]:d},"supportsFIPS"]}]},
n={[r]:"booleanEquals",[s]:[true,{[r]:"getAttr",[s]:[{[t]:d},"supportsDualStack"]}]},
o=[i],
p=[j],
q=[k];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:h,UseFIPS:h,Endpoint:{required:b,type:c}},rules:[{conditions:[{[r]:"aws.partition",[s]:[{[t]:"Region"}],assign:d}],type:e,rules:[{conditions:[{[r]:"isSet",[s]:o},{[r]:"parseURL",[s]:o,assign:"url"}],type:e,rules:[{conditions:p,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:q,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:i,properties:l,headers:l},type:g}]}]},{conditions:[j,k],type:e,rules:[{conditions:[m,n],type:e,rules:[{endpoint:{url:"https://omics-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:p,type:e,rules:[{conditions:[m],type:e,rules:[{endpoint:{url:"https://omics-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:g}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:q,type:e,rules:[{conditions:[n],type:e,rules:[{endpoint:{url:"https://omics.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{endpoint:{url:"https://omics.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:g}]}]};
export const ruleSet: RuleSetObject = _data;
