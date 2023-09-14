// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/apigatewayv2.json */

const q="required",
r="fn",
s="argv",
t="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f={[q]:false,"type":"String"},
g={[q]:true,"default":false,"type":"Boolean"},
h={[t]:"Endpoint"},
i={[r]:"booleanEquals",[s]:[{[t]:"UseFIPS"},true]},
j={[r]:"booleanEquals",[s]:[{[t]:"UseDualStack"},true]},
k={},
l={[r]:"booleanEquals",[s]:[true,{[r]:"getAttr",[s]:[{[t]:e},"supportsFIPS"]}]},
m={[r]:"booleanEquals",[s]:[true,{[r]:"getAttr",[s]:[{[t]:e},"supportsDualStack"]}]},
n=[i],
o=[j],
p=[{[t]:"Region"}];
const _data={version:"1.0",parameters:{Region:f,UseDualStack:g,UseFIPS:g,Endpoint:f},rules:[{conditions:[{[r]:a,[s]:[h]}],type:b,rules:[{conditions:n,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{conditions:o,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:h,properties:k,headers:k},type:d}]},{conditions:[{[r]:a,[s]:p}],type:b,rules:[{conditions:[{[r]:"aws.partition",[s]:p,assign:e}],type:b,rules:[{conditions:[i,j],type:b,rules:[{conditions:[l,m],type:b,rules:[{endpoint:{url:"https://apigateway-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:n,type:b,rules:[{conditions:[l],type:b,rules:[{endpoint:{url:"https://apigateway-fips.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:d}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:o,type:b,rules:[{conditions:[m],type:b,rules:[{endpoint:{url:"https://apigateway.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{endpoint:{url:"https://apigateway.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:d}]}]},{error:"Invalid Configuration: Missing Region",type:c}]};
export const ruleSet: RuleSetObject = _data;
