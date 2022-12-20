// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/dynamodb-streams.json */

const w="fn",
x="argv",
y="ref";
const a=true,
b=false,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="getAttr",
j="stringEquals",
k={[y]:"Region"},
l={[y]:"Endpoint"},
m={[w]:"booleanEquals",[x]:[{[y]:"UseFIPS"},true]},
n={[w]:"booleanEquals",[x]:[{[y]:"UseDualStack"},true]},
o={},
p={[w]:"booleanEquals",[x]:[true,{[w]:i,[x]:[{[y]:e},"supportsFIPS"]}]},
q={[y]:e},
r={[w]:"booleanEquals",[x]:[true,{[w]:i,[x]:[q,"supportsDualStack"]}]},
s={"url":"https://streams.dynamodb.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
t=[m],
u=[],
v=[n];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:a,default:b,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[w]:"aws.partition",[x]:[k],assign:e}],type:f,rules:[{conditions:[{[w]:"isSet",[x]:[l]}],type:f,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:u,type:f,rules:[{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:u,endpoint:{url:l,properties:o,headers:o},type:h}]}]},{conditions:[m,n],type:f,rules:[{conditions:[p,r],type:f,rules:[{conditions:u,endpoint:{url:"https://streams.dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:h}]},{conditions:u,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:t,type:f,rules:[{conditions:[p],type:f,rules:[{conditions:u,type:f,rules:[{conditions:[{[w]:j,[x]:["aws-us-gov",{[w]:i,[x]:[q,"name"]}]}],endpoint:s,type:h},{conditions:u,endpoint:{url:"https://streams.dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:h}]}]},{conditions:u,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:v,type:f,rules:[{conditions:[r],type:f,rules:[{conditions:u,endpoint:{url:"https://streams.dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:h}]},{conditions:u,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:u,type:f,rules:[{conditions:[{[w]:j,[x]:[k,"local"]}],endpoint:{url:"http://localhost:8000",properties:{authSchemes:[{name:"sigv4",signingRegion:"us-east-1",signingName:"dynamodb"}]},headers:o},type:h},{conditions:u,endpoint:s,type:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
