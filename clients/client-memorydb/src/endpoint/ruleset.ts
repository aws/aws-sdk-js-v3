// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/memorydb.json */

const r="required",
s="fn",
t="argv",
u="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f={[r]:false,"type":"String"},
g={[r]:true,"default":false,"type":"Boolean"},
h={[u]:"Endpoint"},
i={[s]:"booleanEquals",[t]:[{[u]:"UseFIPS"},true]},
j={[s]:"booleanEquals",[t]:[{[u]:"UseDualStack"},true]},
k={},
l={[u]:"Region"},
m={[s]:"booleanEquals",[t]:[true,{[s]:"getAttr",[t]:[{[u]:e},"supportsFIPS"]}]},
n={[s]:"booleanEquals",[t]:[true,{[s]:"getAttr",[t]:[{[u]:e},"supportsDualStack"]}]},
o=[i],
p=[j],
q=[l];
const _data={version:"1.0",parameters:{Region:f,UseDualStack:g,UseFIPS:g,Endpoint:f},rules:[{conditions:[{[s]:a,[t]:[h]}],type:b,rules:[{conditions:o,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{conditions:p,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:h,properties:k,headers:k},type:d}]},{conditions:[{[s]:a,[t]:q}],type:b,rules:[{conditions:[{[s]:"aws.partition",[t]:q,assign:e}],type:b,rules:[{conditions:[i,j],type:b,rules:[{conditions:[m,n],type:b,rules:[{endpoint:{url:"https://memory-db-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:o,type:b,rules:[{conditions:[m],type:b,rules:[{endpoint:{url:"https://memory-db-fips.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:d}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:p,type:b,rules:[{conditions:[n],type:b,rules:[{endpoint:{url:"https://memory-db.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{conditions:[{[s]:"stringEquals",[t]:[l,"fips"]}],endpoint:{url:"https://memory-db-fips.us-west-1.amazonaws.com",properties:{authSchemes:[{name:"sigv4",signingName:"memorydb",signingRegion:"us-west-1"}]},headers:k},type:d},{endpoint:{url:"https://memory-db.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:d}]}]},{error:"Invalid Configuration: Missing Region",type:c}]};
export const ruleSet: RuleSetObject = _data;
