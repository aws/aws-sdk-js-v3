// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/fsx.json */

const t="fn",
u="argv",
v="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="error",
g="endpoint",
h="stringEquals",
i={"required":true,"default":false,"type":"Boolean"},
j={[v]:"Region"},
k={[v]:"Endpoint"},
l={[t]:"booleanEquals",[u]:[{[v]:"UseFIPS"},true]},
m={[t]:"booleanEquals",[u]:[{[v]:"UseDualStack"},true]},
n={},
o={[t]:"booleanEquals",[u]:[true,{[t]:"getAttr",[u]:[{[v]:d},"supportsFIPS"]}]},
p={[t]:"booleanEquals",[u]:[true,{[t]:"getAttr",[u]:[{[v]:d},"supportsDualStack"]}]},
q=[k],
r=[l],
s=[m];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseDualStack:i,UseFIPS:i,Endpoint:{required:b,type:c}},rules:[{conditions:[{[t]:"aws.partition",[u]:[j],assign:d}],type:e,rules:[{conditions:[{[t]:"isSet",[u]:q},{[t]:"parseURL",[u]:q,assign:"url"}],type:e,rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{type:e,rules:[{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:f},{endpoint:{url:k,properties:n,headers:n},type:g}]}]},{conditions:[l,m],type:e,rules:[{conditions:[o,p],type:e,rules:[{endpoint:{url:"https://fsx-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:g}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:f}]},{conditions:r,type:e,rules:[{conditions:[o],type:e,rules:[{type:e,rules:[{conditions:[{[t]:h,[u]:[j,"prod-ca-central-1"]}],endpoint:{url:"https://fsx-fips.ca-central-1.amazonaws.com",properties:n,headers:n},type:g},{conditions:[{[t]:h,[u]:[j,"prod-us-east-1"]}],endpoint:{url:"https://fsx-fips.us-east-1.amazonaws.com",properties:n,headers:n},type:g},{conditions:[{[t]:h,[u]:[j,"prod-us-east-2"]}],endpoint:{url:"https://fsx-fips.us-east-2.amazonaws.com",properties:n,headers:n},type:g},{conditions:[{[t]:h,[u]:[j,"prod-us-west-1"]}],endpoint:{url:"https://fsx-fips.us-west-1.amazonaws.com",properties:n,headers:n},type:g},{conditions:[{[t]:h,[u]:[j,"prod-us-west-2"]}],endpoint:{url:"https://fsx-fips.us-west-2.amazonaws.com",properties:n,headers:n},type:g},{conditions:[{[t]:h,[u]:[j,"prod-us-gov-east-1"]}],endpoint:{url:"https://fsx-fips.us-gov-east-1.amazonaws.com",properties:n,headers:n},type:g},{conditions:[{[t]:h,[u]:[j,"prod-us-gov-west-1"]}],endpoint:{url:"https://fsx-fips.us-gov-west-1.amazonaws.com",properties:n,headers:n},type:g},{endpoint:{url:"https://fsx-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:g}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:f}]},{conditions:s,type:e,rules:[{conditions:[p],type:e,rules:[{endpoint:{url:"https://fsx.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:g}]},{error:"DualStack is enabled but this partition does not support DualStack",type:f}]},{endpoint:{url:"https://fsx.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:g}]}]};
export const ruleSet: RuleSetObject = _data;
