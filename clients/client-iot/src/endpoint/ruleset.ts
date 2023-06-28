// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/iot.json */

const t="required",
u="fn",
v="argv",
w="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g={[t]:false,"type":"String"},
h={[t]:true,"default":false,"type":"Boolean"},
i={[w]:"Endpoint"},
j={[u]:"booleanEquals",[v]:[{[w]:"UseFIPS"},true]},
k={[u]:"booleanEquals",[v]:[{[w]:"UseDualStack"},true]},
l={},
m={[u]:"booleanEquals",[v]:[true,{[u]:"getAttr",[v]:[{[w]:e},"supportsFIPS"]}]},
n={[u]:"booleanEquals",[v]:[true,{[u]:"getAttr",[v]:[{[w]:e},"supportsDualStack"]}]},
o={[u]:"getAttr",[v]:[{[w]:e},"name"]},
p={"url":"https://iot.{Region}.amazonaws.com","properties":{},"headers":{}},
q=[j],
r=[k],
s=[{[w]:"Region"}];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},rules:[{conditions:[{[u]:a,[v]:[i]}],type:b,rules:[{conditions:q,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:r,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:i,properties:l,headers:l},type:d}]}]},{type:b,rules:[{conditions:[{[u]:a,[v]:s}],type:b,rules:[{conditions:[{[u]:"aws.partition",[v]:s,assign:e}],type:b,rules:[{conditions:[j,k],type:b,rules:[{conditions:[m,n],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://iot-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:q,type:b,rules:[{conditions:[m],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://iot-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:r,type:b,rules:[{conditions:[n],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://iot.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{type:b,rules:[{conditions:[{[u]:f,[v]:["aws",o]}],endpoint:p,type:d},{conditions:[{[u]:f,[v]:["aws-cn",o]}],endpoint:{url:"https://iot.{Region}.amazonaws.com.cn",properties:l,headers:l},type:d},{conditions:[{[u]:f,[v]:["aws-us-gov",o]}],endpoint:p,type:d},{endpoint:{url:"https://iot.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]}]},{error:"Invalid Configuration: Missing Region",type:c}]}]};
export const ruleSet: RuleSetObject = _data;
