// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/database-migration-service.json */

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
i="stringEquals",
j={[z]:"Region"},
k={[z]:"Endpoint"},
l={[x]:"booleanEquals",[y]:[{[z]:"UseFIPS"},true]},
m={[x]:"booleanEquals",[y]:[{[z]:"UseDualStack"},true]},
n={},
o={[x]:"booleanEquals",[y]:[true,{[x]:"getAttr",[y]:[{[z]:e},"supportsFIPS"]}]},
p={[x]:"booleanEquals",[y]:[true,{[x]:"getAttr",[y]:[{[z]:e},"supportsDualStack"]}]},
q={[x]:"getAttr",[y]:[{[z]:e},"name"]},
r={"url":"https://dms.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
s=[k],
t=[l],
u=[],
v=[m],
w=[{[x]:i,[y]:[j,"dms"]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[x]:"aws.partition",[y]:[j],assign:e}],type:f,rules:[{conditions:[{[x]:"isSet",[y]:s},{[x]:"parseURL",[y]:s,assign:"url"}],type:f,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:u,type:f,rules:[{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:u,endpoint:{url:k,properties:n,headers:n},type:h}]}]},{conditions:[l,m],type:f,rules:[{conditions:[o,p],type:f,rules:[{conditions:u,endpoint:{url:"https://dms-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:h}]},{conditions:u,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:t,type:f,rules:[{conditions:[o],type:f,rules:[{conditions:u,type:f,rules:[{conditions:w,endpoint:{url:"https://dms-fips.us-west-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:w,endpoint:{url:"https://dms.us-gov-west-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[x]:i,[y]:["aws-us-gov",q]}],endpoint:r,type:h},{conditions:w,endpoint:{url:"https://dms.us-iso-east-1.c2s.ic.gov",properties:n,headers:n},type:h},{conditions:[{[x]:i,[y]:["aws-iso",q]}],endpoint:r,type:h},{conditions:w,endpoint:{url:"https://dms.us-isob-east-1.sc2s.sgov.gov",properties:n,headers:n},type:h},{conditions:[{[x]:i,[y]:["aws-iso-b",q]}],endpoint:r,type:h},{conditions:u,endpoint:{url:"https://dms-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:h}]}]},{conditions:u,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:v,type:f,rules:[{conditions:[p],type:f,rules:[{conditions:u,endpoint:{url:"https://dms.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:h}]},{conditions:u,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:u,endpoint:r,type:h}]}]};
export const ruleSet: RuleSetObject = _data;
