// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/neptune.json */

const x="fn",
y="argv",
z="ref";
const a=false,
b=true,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="getAttr",
j="stringEquals",
k={[z]:"Region"},
l={[z]:"Endpoint"},
m={[x]:"booleanEquals",[y]:[{[z]:"UseFIPS"},true]},
n={[x]:"booleanEquals",[y]:[{[z]:"UseDualStack"},true]},
o={},
p={[x]:"booleanEquals",[y]:[true,{[x]:i,[y]:[{[z]:e},"supportsFIPS"]}]},
q={[z]:e},
r={[x]:"booleanEquals",[y]:[true,{[x]:i,[y]:[q,"supportsDualStack"]}]},
s={"url":"https://rds.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
t=[l],
u=[m],
v=[],
w=[n];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[x]:"aws.partition",[y]:[k],assign:e}],type:f,rules:[{conditions:[{[x]:"isSet",[y]:t},{[x]:"parseURL",[y]:t,assign:"url"}],type:f,rules:[{conditions:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:v,type:f,rules:[{conditions:w,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:v,endpoint:{url:l,properties:o,headers:o},type:h}]}]},{conditions:[m,n],type:f,rules:[{conditions:[p,r],type:f,rules:[{conditions:v,endpoint:{url:"https://rds-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:h}]},{conditions:v,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:u,type:f,rules:[{conditions:[p],type:f,rules:[{conditions:v,type:f,rules:[{conditions:[{[x]:j,[y]:[k,"rds.ca-central-1"]}],endpoint:{url:"https://rds-fips.ca-central-1.amazonaws.com",properties:o,headers:o},type:h},{conditions:[{[x]:j,[y]:[k,"rds.us-east-1"]}],endpoint:{url:"https://rds-fips.us-east-1.amazonaws.com",properties:o,headers:o},type:h},{conditions:[{[x]:j,[y]:[k,"rds.us-east-2"]}],endpoint:{url:"https://rds-fips.us-east-2.amazonaws.com",properties:o,headers:o},type:h},{conditions:[{[x]:j,[y]:[k,"rds.us-west-1"]}],endpoint:{url:"https://rds-fips.us-west-1.amazonaws.com",properties:o,headers:o},type:h},{conditions:[{[x]:j,[y]:[k,"rds.us-west-2"]}],endpoint:{url:"https://rds-fips.us-west-2.amazonaws.com",properties:o,headers:o},type:h},{conditions:[{[x]:j,[y]:["aws-us-gov",{[x]:i,[y]:[q,"name"]}]}],endpoint:s,type:h},{conditions:v,endpoint:{url:"https://rds-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:h}]}]},{conditions:v,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:w,type:f,rules:[{conditions:[r],type:f,rules:[{conditions:v,endpoint:{url:"https://rds.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:h}]},{conditions:v,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:v,endpoint:s,type:h}]}]};
export const ruleSet: RuleSetObject = _data;
