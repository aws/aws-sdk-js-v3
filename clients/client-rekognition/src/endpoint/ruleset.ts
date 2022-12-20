// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/rekognition.json */

const t="fn",
u="argv",
v="ref";
const a=true,
b=false,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i="stringEquals",
j={[v]:"Region"},
k={[v]:"Endpoint"},
l={[t]:"booleanEquals",[u]:[{[v]:"UseFIPS"},true]},
m={[t]:"booleanEquals",[u]:[{[v]:"UseDualStack"},true]},
n={},
o={[t]:"booleanEquals",[u]:[true,{[t]:"getAttr",[u]:[{[v]:e},"supportsFIPS"]}]},
p={[t]:"booleanEquals",[u]:[true,{[t]:"getAttr",[u]:[{[v]:e},"supportsDualStack"]}]},
q=[l],
r=[],
s=[m];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:a,default:b,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[t]:"aws.partition",[u]:[j],assign:e}],type:f,rules:[{conditions:[{[t]:"isSet",[u]:[k]}],type:f,rules:[{conditions:q,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:r,type:f,rules:[{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:r,endpoint:{url:k,properties:n,headers:n},type:h}]}]},{conditions:[l,m],type:f,rules:[{conditions:[o,p],type:f,rules:[{conditions:r,endpoint:{url:"https://rekognition-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:h}]},{conditions:r,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:q,type:f,rules:[{conditions:[o],type:f,rules:[{conditions:r,type:f,rules:[{conditions:[{[t]:i,[u]:[j,"rekognition.ca-central-1"]}],endpoint:{url:"https://rekognition-fips.ca-central-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[t]:i,[u]:[j,"rekognition.us-east-1"]}],endpoint:{url:"https://rekognition-fips.us-east-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[t]:i,[u]:[j,"rekognition.us-east-2"]}],endpoint:{url:"https://rekognition-fips.us-east-2.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[t]:i,[u]:[j,"rekognition.us-west-1"]}],endpoint:{url:"https://rekognition-fips.us-west-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[t]:i,[u]:[j,"rekognition.us-west-2"]}],endpoint:{url:"https://rekognition-fips.us-west-2.amazonaws.com",properties:n,headers:n},type:h},{conditions:[{[t]:i,[u]:[j,"rekognition.us-gov-west-1"]}],endpoint:{url:"https://rekognition-fips.us-gov-west-1.amazonaws.com",properties:n,headers:n},type:h},{conditions:r,endpoint:{url:"https://rekognition-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:h}]}]},{conditions:r,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:s,type:f,rules:[{conditions:[p],type:f,rules:[{conditions:r,endpoint:{url:"https://rekognition.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:h}]},{conditions:r,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:r,endpoint:{url:"https://rekognition.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:h}]}]};
export const ruleSet: RuleSetObject = _data;
