// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/mturk.json */

const t="fn",
u="argv",
v="ref";
const a=false,
b=true,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i={[v]:"Region"},
j={[v]:"Endpoint"},
k={[t]:"booleanEquals",[u]:[{[v]:"UseFIPS"},true]},
l={[t]:"booleanEquals",[u]:[{[v]:"UseDualStack"},true]},
m={},
n={[t]:"booleanEquals",[u]:[true,{[t]:"getAttr",[u]:[{[v]:e},"supportsFIPS"]}]},
o={[t]:"booleanEquals",[u]:[true,{[t]:"getAttr",[u]:[{[v]:e},"supportsDualStack"]}]},
p=[j],
q=[k],
r=[],
s=[l];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[t]:"aws.partition",[u]:[i],assign:e}],type:f,rules:[{conditions:[{[t]:"isSet",[u]:p},{[t]:"parseURL",[u]:p,assign:"url"}],type:f,rules:[{conditions:q,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:r,type:f,rules:[{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:r,endpoint:{url:j,properties:m,headers:m},type:h}]}]},{conditions:[k,l],type:f,rules:[{conditions:[n,o],type:f,rules:[{conditions:r,endpoint:{url:"https://mturk-requester-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:h}]},{conditions:r,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:q,type:f,rules:[{conditions:[n],type:f,rules:[{conditions:r,type:f,rules:[{conditions:r,endpoint:{url:"https://mturk-requester-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:h}]}]},{conditions:r,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:s,type:f,rules:[{conditions:[o],type:f,rules:[{conditions:r,endpoint:{url:"https://mturk-requester.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:h}]},{conditions:r,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:r,type:f,rules:[{conditions:[{[t]:"stringEquals",[u]:[i,"sandbox"]}],endpoint:{url:"https://mturk-requester-sandbox.us-east-1.amazonaws.com",properties:m,headers:m},type:h},{conditions:r,endpoint:{url:"https://mturk-requester.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
