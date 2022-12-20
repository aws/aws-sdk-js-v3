// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/mgn.json */

const p="required",
q="fn",
r="argv",
s="ref";
const a="PartitionResult",
b="tree",
c="error",
d="endpoint",
e={[p]:false,"type":"String"},
f={[p]:true,"default":false,"type":"Boolean"},
g={[s]:"Endpoint"},
h={[q]:"booleanEquals",[r]:[{[s]:"UseFIPS"},true]},
i={[q]:"booleanEquals",[r]:[{[s]:"UseDualStack"},true]},
j={},
k={[q]:"booleanEquals",[r]:[true,{[q]:"getAttr",[r]:[{[s]:a},"supportsFIPS"]}]},
l={[q]:"booleanEquals",[r]:[true,{[q]:"getAttr",[r]:[{[s]:a},"supportsDualStack"]}]},
m=[g],
n=[h],
o=[i];
const _data={version:"1.0",parameters:{Region:e,UseDualStack:f,UseFIPS:f,Endpoint:e},rules:[{conditions:[{[q]:"aws.partition",[r]:[{[s]:"Region"}],assign:a}],type:b,rules:[{conditions:[{[q]:"isSet",[r]:m},{[q]:"parseURL",[r]:m,assign:"url"}],type:b,rules:[{conditions:n,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:o,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:g,properties:j,headers:j},type:d}]}]},{conditions:[h,i],type:b,rules:[{conditions:[k,l],type:b,rules:[{endpoint:{url:"https://mgn-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:j,headers:j},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:n,type:b,rules:[{conditions:[k],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://mgn-fips.{Region}.{PartitionResult#dnsSuffix}",properties:j,headers:j},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:o,type:b,rules:[{conditions:[l],type:b,rules:[{endpoint:{url:"https://mgn.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:j,headers:j},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{endpoint:{url:"https://mgn.{Region}.{PartitionResult#dnsSuffix}",properties:j,headers:j},type:d}]}]};
export const ruleSet: RuleSetObject = _data;
