// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/auto-scaling.json */

const u="fn",
v="argv",
w="ref";
const a=true,
b=false,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="getAttr",
j={[w]:"Endpoint"},
k={[u]:"booleanEquals",[v]:[{[w]:"UseFIPS"},true]},
l={[u]:"booleanEquals",[v]:[{[w]:"UseDualStack"},true]},
m={},
n={[u]:"booleanEquals",[v]:[true,{[u]:i,[v]:[{[w]:e},"supportsFIPS"]}]},
o={[w]:e},
p={[u]:"booleanEquals",[v]:[true,{[u]:i,[v]:[o,"supportsDualStack"]}]},
q={"url":"https://autoscaling.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
r=[k],
s=[],
t=[l];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:a,default:b,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[u]:"aws.partition",[v]:[{[w]:"Region"}],assign:e}],type:f,rules:[{conditions:[{[u]:"isSet",[v]:[j]}],type:f,rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:s,type:f,rules:[{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:s,endpoint:{url:j,properties:m,headers:m},type:h}]}]},{conditions:[k,l],type:f,rules:[{conditions:[n,p],type:f,rules:[{conditions:s,endpoint:{url:"https://autoscaling-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:h}]},{conditions:s,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:r,type:f,rules:[{conditions:[n],type:f,rules:[{conditions:s,type:f,rules:[{conditions:[{[u]:"stringEquals",[v]:["aws-us-gov",{[u]:i,[v]:[o,"name"]}]}],endpoint:q,type:h},{conditions:s,endpoint:{url:"https://autoscaling-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:h}]}]},{conditions:s,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:t,type:f,rules:[{conditions:[p],type:f,rules:[{conditions:s,endpoint:{url:"https://autoscaling.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:h}]},{conditions:s,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:s,endpoint:q,type:h}]}]};
export const ruleSet: RuleSetObject = _data;
