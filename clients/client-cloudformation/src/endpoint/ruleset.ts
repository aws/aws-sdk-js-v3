// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cloudformation.json */

const u="fn",
v="argv",
w="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="getAttr",
i="stringEquals",
j={"required":true,"default":false,"type":"Boolean"},
k={[w]:"Region"},
l={[w]:"Endpoint"},
m={[u]:"booleanEquals",[v]:[{[w]:"UseFIPS"},true]},
n={[u]:"booleanEquals",[v]:[{[w]:"UseDualStack"},true]},
o={},
p={[u]:"booleanEquals",[v]:[true,{[u]:h,[v]:[{[w]:d},"supportsFIPS"]}]},
q={[w]:d},
r={[u]:"booleanEquals",[v]:[true,{[u]:h,[v]:[q,"supportsDualStack"]}]},
s=[m],
t=[n];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:j,UseFIPS:j,Endpoint:{required:b,type:c}},rules:[{conditions:[{[u]:"aws.partition",[v]:[k],assign:d}],type:e,rules:[{conditions:[{[u]:"isSet",[v]:[l]}],type:e,rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:l,properties:o,headers:o},type:g}]}]},{conditions:[m,n],type:e,rules:[{conditions:[p,r],type:e,rules:[{type:e,rules:[{endpoint:{url:"https://cloudformation-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:g}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:s,type:e,rules:[{conditions:[p],type:e,rules:[{type:e,rules:[{conditions:[{[u]:i,[v]:["aws-us-gov",{[u]:h,[v]:[q,"name"]}]}],endpoint:{url:"https://cloudformation.{Region}.amazonaws.com",properties:o,headers:o},type:g},{endpoint:{url:"https://cloudformation-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:t,type:e,rules:[{conditions:[r],type:e,rules:[{type:e,rules:[{endpoint:{url:"https://cloudformation.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:g}]}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{type:e,rules:[{conditions:[{[u]:i,[v]:[k,"us-gov-east-1"]}],endpoint:{url:"https://cloudformation.us-gov-east-1.amazonaws.com",properties:o,headers:o},type:g},{conditions:[{[u]:i,[v]:[k,"us-gov-west-1"]}],endpoint:{url:"https://cloudformation.us-gov-west-1.amazonaws.com",properties:o,headers:o},type:g},{endpoint:{url:"https://cloudformation.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
