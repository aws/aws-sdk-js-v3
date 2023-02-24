// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/dynamodb.json */

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
s={"url":"https://dynamodb.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
t=[m],
u=[n];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:j,UseFIPS:j,Endpoint:{required:b,type:c}},rules:[{conditions:[{[v]:"aws.partition",[w]:[k],assign:d}],type:e,rules:[{conditions:[{[v]:"isSet",[w]:[l]}],type:e,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:l,properties:o,headers:o},type:g}]}]},{conditions:[m,n],type:e,rules:[{conditions:[p,r],type:e,rules:[{endpoint:{url:"https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:t,type:e,rules:[{conditions:[p],type:e,rules:[{type:e,rules:[{conditions:[{[v]:i,[w]:["aws-us-gov",{[v]:h,[w]:[q,"name"]}]}],endpoint:s,type:g},{endpoint:{url:"https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:u,type:e,rules:[{conditions:[r],type:e,rules:[{endpoint:{url:"https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{type:e,rules:[{conditions:[{[v]:i,[w]:[k,"local"]}],endpoint:{url:"http://localhost:8000",properties:{authSchemes:[{name:"sigv4",signingRegion:"us-east-1",signingName:"dynamodb"}]},headers:o},type:g},{endpoint:s,type:g}]}]}]};
export const ruleSet: RuleSetObject = _data;
