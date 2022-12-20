// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/ecr.json */

const w="fn",
x="argv",
y="ref";
const a=false,
b=true,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="stringEquals",
j={[y]:"Region"},
k={[y]:"Endpoint"},
l={[w]:"booleanEquals",[x]:[{[y]:"UseFIPS"},true]},
m={[w]:"booleanEquals",[x]:[{[y]:"UseDualStack"},true]},
n={},
o={[w]:"booleanEquals",[x]:[true,{[w]:"getAttr",[x]:[{[y]:e},"supportsFIPS"]}]},
p={[w]:"booleanEquals",[x]:[true,{[w]:"getAttr",[x]:[{[y]:e},"supportsDualStack"]}]},
q={[w]:"getAttr",[x]:[{[y]:e},"name"]},
r={"url":"https://ecr-fips.{Region}.{PartitionResult#dnsSuffix}","properties":{},"headers":{}},
s=[k],
t=[l],
u=[],
v=[m];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[w]:"aws.partition",[x]:[j],assign:e}],type:f,rules:[{conditions:[{[w]:"isSet",[x]:s},{[w]:"parseURL",[x]:s,assign:"url"}],type:f,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:u,type:f,rules:[{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:u,endpoint:{url:k,properties:n,headers:n},type:h}]}]},{conditions:[l,m],type:f,rules:[{conditions:[o,p],type:f,rules:[{conditions:u,endpoint:{url:"https://api.ecr-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:h}]},{conditions:u,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:t,type:f,rules:[{conditions:[o],type:f,rules:[{conditions:u,type:f,rules:[{conditions:[{[w]:i,[x]:[j,"dkr-us-east-2"]}],endpoint:{url:"https://ecr-fips.us-east-2.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[w]:i,[x]:[j,"dkr-us-east-1"]}],endpoint:{url:"https://ecr-fips.us-east-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[w]:i,[x]:[j,"dkr-us-west-2"]}],endpoint:{url:"https://ecr-fips.us-west-2.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[w]:i,[x]:[j,"dkr-us-west-1"]}],endpoint:{url:"https://ecr-fips.us-west-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[w]:i,[x]:["aws",q]}],endpoint:r,type:h},{conditions:[{[w]:i,[x]:[j,"dkr-us-gov-east-1"]}],endpoint:{url:"https://ecr-fips.us-gov-east-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[w]:i,[x]:[j,"dkr-us-gov-west-1"]}],endpoint:{url:"https://ecr-fips.us-gov-west-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[w]:i,[x]:["aws-us-gov",q]}],endpoint:r,type:h},{conditions:u,endpoint:{url:"https://api.ecr-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:h}]}]},{conditions:u,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:v,type:f,rules:[{conditions:[p],type:f,rules:[{conditions:u,endpoint:{url:"https://api.ecr.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:h}]},{conditions:u,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:u,endpoint:{url:"https://api.ecr.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:h}]}]};
export const ruleSet: RuleSetObject = _data;
