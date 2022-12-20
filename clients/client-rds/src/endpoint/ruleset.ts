// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/rds.json */

const v="fn",
w="argv",
x="ref";
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
k={[x]:"Region"},
l={[x]:"Endpoint"},
m={[v]:"booleanEquals",[w]:[{[x]:"UseFIPS"},true]},
n={[v]:"booleanEquals",[w]:[{[x]:"UseDualStack"},true]},
o={},
p={[v]:"booleanEquals",[w]:[true,{[v]:h,[w]:[{[x]:d},"supportsFIPS"]}]},
q={[x]:d},
r={[v]:"booleanEquals",[w]:[true,{[v]:h,[w]:[q,"supportsDualStack"]}]},
s={"url":"https://rds.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
t=[m],
u=[n];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:j,UseFIPS:j,Endpoint:{required:b,type:c}},rules:[{conditions:[{[v]:"aws.partition",[w]:[k],assign:d}],type:e,rules:[{conditions:[{[v]:"isSet",[w]:[l]}],type:e,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:l,properties:o,headers:o},type:g}]}]},{conditions:[m,n],type:e,rules:[{conditions:[p,r],type:e,rules:[{endpoint:{url:"https://rds-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:t,type:e,rules:[{conditions:[p],type:e,rules:[{type:e,rules:[{conditions:[{[v]:i,[w]:[k,"rds.ca-central-1"]}],endpoint:{url:"https://rds-fips.ca-central-1.amazonaws.com",properties:o,headers:o},type:g},{conditions:[{[v]:i,[w]:[k,"rds.us-east-1"]}],endpoint:{url:"https://rds-fips.us-east-1.amazonaws.com",properties:o,headers:o},type:g},{conditions:[{[v]:i,[w]:[k,"rds.us-east-2"]}],endpoint:{url:"https://rds-fips.us-east-2.amazonaws.com",properties:o,headers:o},type:g},{conditions:[{[v]:i,[w]:[k,"rds.us-west-1"]}],endpoint:{url:"https://rds-fips.us-west-1.amazonaws.com",properties:o,headers:o},type:g},{conditions:[{[v]:i,[w]:[k,"rds.us-west-2"]}],endpoint:{url:"https://rds-fips.us-west-2.amazonaws.com",properties:o,headers:o},type:g},{conditions:[{[v]:i,[w]:["aws-us-gov",{[v]:h,[w]:[q,"name"]}]}],endpoint:s,type:g},{endpoint:{url:"https://rds-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:u,type:e,rules:[{conditions:[r],type:e,rules:[{endpoint:{url:"https://rds.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{endpoint:s,type:g}]}]};
export const ruleSet: RuleSetObject = _data;
