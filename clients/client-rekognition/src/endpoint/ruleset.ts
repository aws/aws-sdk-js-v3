// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/rekognition.json */

const s="fn",
t="argv",
u="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="stringEquals",
i={"required":true,"default":false,"type":"Boolean"},
j={[u]:"Region"},
k={[u]:"Endpoint"},
l={[s]:"booleanEquals",[t]:[{[u]:"UseFIPS"},true]},
m={[s]:"booleanEquals",[t]:[{[u]:"UseDualStack"},true]},
n={},
o={[s]:"booleanEquals",[t]:[true,{[s]:"getAttr",[t]:[{[u]:d},"supportsFIPS"]}]},
p={[s]:"booleanEquals",[t]:[true,{[s]:"getAttr",[t]:[{[u]:d},"supportsDualStack"]}]},
q=[l],
r=[m];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:i,UseFIPS:i,Endpoint:{required:b,type:c}},rules:[{conditions:[{[s]:"aws.partition",[t]:[j],assign:d}],type:e,rules:[{conditions:[{[s]:"isSet",[t]:[k]}],type:e,rules:[{conditions:q,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:r,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:k,properties:n,headers:n},type:g}]}]},{conditions:[l,m],type:e,rules:[{conditions:[o,p],type:e,rules:[{endpoint:{url:"https://rekognition-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:q,type:e,rules:[{conditions:[o],type:e,rules:[{type:e,rules:[{conditions:[{[s]:h,[t]:[j,"rekognition.ca-central-1"]}],endpoint:{url:"https://rekognition-fips.ca-central-1.amazonaws.com",properties:n,headers:n},type:g},{conditions:[{[s]:h,[t]:[j,"rekognition.us-east-1"]}],endpoint:{url:"https://rekognition-fips.us-east-1.amazonaws.com",properties:n,headers:n},type:g},{conditions:[{[s]:h,[t]:[j,"rekognition.us-east-2"]}],endpoint:{url:"https://rekognition-fips.us-east-2.amazonaws.com",properties:n,headers:n},type:g},{conditions:[{[s]:h,[t]:[j,"rekognition.us-west-1"]}],endpoint:{url:"https://rekognition-fips.us-west-1.amazonaws.com",properties:n,headers:n},type:g},{conditions:[{[s]:h,[t]:[j,"rekognition.us-west-2"]}],endpoint:{url:"https://rekognition-fips.us-west-2.amazonaws.com",properties:n,headers:n},type:g},{conditions:[{[s]:h,[t]:[j,"rekognition.us-gov-west-1"]}],endpoint:{url:"https://rekognition-fips.us-gov-west-1.amazonaws.com",properties:n,headers:n},type:g},{endpoint:{url:"https://rekognition-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:r,type:e,rules:[{conditions:[p],type:e,rules:[{endpoint:{url:"https://rekognition.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{endpoint:{url:"https://rekognition.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:g}]}]};
export const ruleSet: RuleSetObject = _data;
