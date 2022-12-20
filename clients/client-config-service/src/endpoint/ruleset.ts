// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/config-service.json */

const v="fn",
w="argv",
x="ref";
const a=true,
b=false,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="getAttr",
j={[x]:"Endpoint"},
k={[v]:"booleanEquals",[w]:[{[x]:"UseFIPS"},true]},
l={[v]:"booleanEquals",[w]:[{[x]:"UseDualStack"},true]},
m={},
n={[v]:"booleanEquals",[w]:[true,{[v]:i,[w]:[{[x]:e},"supportsFIPS"]}]},
o={[x]:e},
p={[v]:"booleanEquals",[w]:[true,{[v]:i,[w]:[o,"supportsDualStack"]}]},
q={"url":"https://config.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
r=[j],
s=[k],
t=[],
u=[l];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:a,default:b,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[v]:"aws.partition",[w]:[{[x]:"Region"}],assign:e}],type:f,rules:[{conditions:[{[v]:"isSet",[w]:r},{[v]:"parseURL",[w]:r,assign:"url"}],type:f,rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:t,type:f,rules:[{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:t,endpoint:{url:j,properties:m,headers:m},type:h}]}]},{conditions:[k,l],type:f,rules:[{conditions:[n,p],type:f,rules:[{conditions:t,endpoint:{url:"https://config-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:h}]},{conditions:t,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:s,type:f,rules:[{conditions:[n],type:f,rules:[{conditions:t,type:f,rules:[{conditions:[{[v]:"stringEquals",[w]:["aws-us-gov",{[v]:i,[w]:[o,"name"]}]}],endpoint:q,type:h},{conditions:t,endpoint:{url:"https://config-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:h}]}]},{conditions:t,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:u,type:f,rules:[{conditions:[p],type:f,rules:[{conditions:t,endpoint:{url:"https://config.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:h}]},{conditions:t,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:t,endpoint:q,type:h}]}]};
export const ruleSet: RuleSetObject = _data;
