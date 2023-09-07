// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/greengrassv2.json */

const w="required",
x="fn",
y="argv",
z="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g="us-gov-east-1",
h="us-gov-west-1",
i="sigv4",
j="greengrass",
k={[w]:false,"type":"String"},
l={[w]:true,"default":false,"type":"Boolean"},
m={[z]:"Endpoint"},
n={[x]:"booleanEquals",[y]:[{[z]:"UseFIPS"},true]},
o={[x]:"booleanEquals",[y]:[{[z]:"UseDualStack"},true]},
p={},
q={[z]:"Region"},
r={[x]:"booleanEquals",[y]:[true,{[x]:"getAttr",[y]:[{[z]:e},"supportsFIPS"]}]},
s={[x]:"booleanEquals",[y]:[true,{[x]:"getAttr",[y]:[{[z]:e},"supportsDualStack"]}]},
t=[n],
u=[o],
v=[q];
const _data={version:"1.0",parameters:{Region:k,UseDualStack:l,UseFIPS:l,Endpoint:k},rules:[{conditions:[{[x]:a,[y]:[m]}],type:b,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:m,properties:p,headers:p},type:d}]},{conditions:[{[x]:a,[y]:v}],type:b,rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:e}],type:b,rules:[{conditions:[n,o],type:b,rules:[{conditions:[r,s],type:b,rules:[{endpoint:{url:"https://greengrass-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:t,type:b,rules:[{conditions:[r],type:b,rules:[{conditions:[{[x]:f,[y]:[q,g]}],endpoint:{url:"https://greengrass.us-gov-east-1.amazonaws.com",properties:p,headers:p},type:d},{conditions:[{[x]:f,[y]:[q,h]}],endpoint:{url:"https://greengrass.us-gov-west-1.amazonaws.com",properties:p,headers:p},type:d},{endpoint:{url:"https://greengrass-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:d}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:u,type:b,rules:[{conditions:[s],type:b,rules:[{endpoint:{url:"https://greengrass.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{conditions:[{[x]:f,[y]:[q,"dataplane-us-gov-east-1"]}],endpoint:{url:"https://greengrass-ats.iot.us-gov-east-1.amazonaws.com",properties:{authSchemes:[{name:i,signingName:j,signingRegion:g}]},headers:p},type:d},{conditions:[{[x]:f,[y]:[q,"dataplane-us-gov-west-1"]}],endpoint:{url:"https://greengrass-ats.iot.us-gov-west-1.amazonaws.com",properties:{authSchemes:[{name:i,signingName:j,signingRegion:h}]},headers:p},type:d},{endpoint:{url:"https://greengrass.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:d}]}]},{error:"Invalid Configuration: Missing Region",type:c}]};
export const ruleSet: RuleSetObject = _data;
