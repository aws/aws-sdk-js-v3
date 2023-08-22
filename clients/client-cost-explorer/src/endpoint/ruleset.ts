// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cost-explorer.json */

const v="required",
w="fn",
x="argv",
y="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g="sigv4",
h={[v]:false,"type":"String"},
i={[v]:true,"default":false,"type":"Boolean"},
j={[y]:"Endpoint"},
k={[w]:"booleanEquals",[x]:[{[y]:"UseFIPS"},true]},
l={[w]:"booleanEquals",[x]:[{[y]:"UseDualStack"},true]},
m={},
n={[w]:"getAttr",[x]:[{[y]:e},"name"]},
o={[w]:"booleanEquals",[x]:[{[y]:"UseFIPS"},false]},
p={[w]:"booleanEquals",[x]:[{[y]:"UseDualStack"},false]},
q={[w]:"booleanEquals",[x]:[true,{[w]:"getAttr",[x]:[{[y]:e},"supportsFIPS"]}]},
r={[w]:"booleanEquals",[x]:[true,{[w]:"getAttr",[x]:[{[y]:e},"supportsDualStack"]}]},
s=[k],
t=[l],
u=[{[y]:"Region"}];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h},rules:[{conditions:[{[w]:a,[x]:[j]}],type:b,rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:j,properties:m,headers:m},type:d}]},{conditions:[{[w]:a,[x]:u}],type:b,rules:[{conditions:[{[w]:"aws.partition",[x]:u,assign:e}],type:b,rules:[{conditions:[{[w]:f,[x]:[n,"aws"]},o,p],endpoint:{url:"https://ce.us-east-1.amazonaws.com",properties:{authSchemes:[{name:g,signingName:"ce",signingRegion:"us-east-1"}]},headers:m},type:d},{conditions:[{[w]:f,[x]:[n,"aws-cn"]},o,p],endpoint:{url:"https://ce.cn-northwest-1.amazonaws.com.cn",properties:{authSchemes:[{name:g,signingName:"ce",signingRegion:"cn-northwest-1"}]},headers:m},type:d},{conditions:[k,l],type:b,rules:[{conditions:[q,r],type:b,rules:[{endpoint:{url:"https://ce-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:s,type:b,rules:[{conditions:[q],type:b,rules:[{endpoint:{url:"https://ce-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:d}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:t,type:b,rules:[{conditions:[r],type:b,rules:[{endpoint:{url:"https://ce.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{endpoint:{url:"https://ce.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:d}]}]},{error:"Invalid Configuration: Missing Region",type:c}]};
export const ruleSet: RuleSetObject = _data;
