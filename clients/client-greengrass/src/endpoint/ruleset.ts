// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/greengrass.json */

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
i="stringEquals",
j={[w]:"Region"},
k={[w]:"Endpoint"},
l={[u]:"booleanEquals",[v]:[{[w]:"UseFIPS"},true]},
m={[u]:"booleanEquals",[v]:[{[w]:"UseDualStack"},true]},
n={},
o={[u]:"booleanEquals",[v]:[true,{[u]:"getAttr",[v]:[{[w]:e},"supportsFIPS"]}]},
p={[u]:"booleanEquals",[v]:[true,{[u]:"getAttr",[v]:[{[w]:e},"supportsDualStack"]}]},
q=[k],
r=[l],
s=[],
t=[m];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:a,default:b,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[u]:"aws.partition",[v]:[j],assign:e}],type:f,rules:[{conditions:[{[u]:"isSet",[v]:q},{[u]:"parseURL",[v]:q,assign:"url"}],type:f,rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:s,type:f,rules:[{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:s,endpoint:{url:k,properties:n,headers:n},type:h}]}]},{conditions:[l,m],type:f,rules:[{conditions:[o,p],type:f,rules:[{conditions:s,endpoint:{url:"https://greengrass-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:h}]},{conditions:s,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:r,type:f,rules:[{conditions:[o],type:f,rules:[{conditions:s,type:f,rules:[{conditions:s,endpoint:{url:"https://greengrass-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:h}]}]},{conditions:s,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:t,type:f,rules:[{conditions:[p],type:f,rules:[{conditions:s,endpoint:{url:"https://greengrass.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:h}]},{conditions:s,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:s,type:f,rules:[{conditions:[{[u]:i,[v]:[j,"dataplane-us-gov-west-1"]}],endpoint:{url:"https://greengrass-ats.iot.us-gov-west-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[u]:i,[v]:[j,"dataplane-us-gov-east-1"]}],endpoint:{url:"https://greengrass-ats.iot.us-gov-east-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:s,endpoint:{url:"https://greengrass.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:h}]}]}]};
export const ruleSet: RuleSetObject = _data;
