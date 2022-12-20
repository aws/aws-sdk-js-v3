// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/servicediscovery.json */

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
i={[w]:"Region"},
j={[w]:"Endpoint"},
k={[u]:"booleanEquals",[v]:[{[w]:"UseFIPS"},true]},
l={[u]:"booleanEquals",[v]:[{[w]:"UseDualStack"},true]},
m={},
n={[u]:"booleanEquals",[v]:[true,{[u]:"getAttr",[v]:[{[w]:e},"supportsFIPS"]}]},
o={[u]:"booleanEquals",[v]:[true,{[u]:"getAttr",[v]:[{[w]:e},"supportsDualStack"]}]},
p=[j],
q=[k],
r=[],
s=[l],
t=[{[u]:"stringEquals",[v]:[i,"servicediscovery"]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:a,default:b,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[u]:"aws.partition",[v]:[i],assign:e}],type:f,rules:[{conditions:[{[u]:"isSet",[v]:p},{[u]:"parseURL",[v]:p,assign:"url"}],type:f,rules:[{conditions:q,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:r,type:f,rules:[{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:r,endpoint:{url:j,properties:m,headers:m},type:h}]}]},{conditions:[k,l],type:f,rules:[{conditions:[n,o],type:f,rules:[{conditions:r,endpoint:{url:"https://servicediscovery-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:h}]},{conditions:r,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:q,type:f,rules:[{conditions:[n],type:f,rules:[{conditions:r,type:f,rules:[{conditions:t,endpoint:{url:"https://servicediscovery-fips.ca-central-1.amazonaws.com",properties:m,headers:m},type:h},{conditions:t,endpoint:{url:"https://servicediscovery-fips.us-gov-west-1.amazonaws.com",properties:m,headers:m},type:h},{conditions:r,endpoint:{url:"https://servicediscovery-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:h}]}]},{conditions:r,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:s,type:f,rules:[{conditions:[o],type:f,rules:[{conditions:r,endpoint:{url:"https://servicediscovery.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:h}]},{conditions:r,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:r,endpoint:{url:"https://servicediscovery.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:h}]}]};
export const ruleSet: RuleSetObject = _data;
