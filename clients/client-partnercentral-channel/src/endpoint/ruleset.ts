// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/partnercentral-channel.json */

const u="argv",
v="ref",
w="authSchemes",
x="name",
y="signingRegion";
const a=true,
b=false,
c="isSet",
d="booleanEquals",
e="error",
f="sigv4",
g="endpoint",
h="tree",
i="PartitionResult",
j={"required":false,"type":"string"},
k={[v]:"Endpoint"},
l={"fn":d,[u]:[{[v]:"UseFIPS"},true]},
m={[v]:"UseFIPS"},
n={[x]:"sigv4a","signingRegionSet":["*"]},
o={},
p={"fn":"stringEquals",[u]:[{"fn":"getAttr",[u]:[{[v]:i},"name"]},"aws-us-gov"]},
q={[w]:[n,{[x]:f,[y]:"us-gov-west-1"}]},
r={[w]:[n,{[x]:f,[y]:"{PartitionResult#implicitGlobalRegion}"}]},
s=[l],
t=[{[v]:"Region"}];
const _data={version:"1.0",parameters:{UseFIPS:{required:a,default:b,type:"boolean"},Endpoint:j,Region:j},rules:[{conditions:[{fn:c,[u]:[k]}],rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{endpoint:{url:k,properties:{[w]:[n,{[x]:f}]},headers:o},type:g}],type:h},{rules:[{conditions:[{fn:c,[u]:t}],rules:[{conditions:[{fn:"aws.partition",[u]:t,assign:i}],rules:[{conditions:[p,{fn:d,[u]:[m,b]}],endpoint:{url:"https://partnercentral-channel.us-gov.{PartitionResult#dualStackDnsSuffix}",properties:q,headers:o},type:g},{conditions:[p,l],endpoint:{url:"https://partnercentral-channel-fips.us-gov.{PartitionResult#dualStackDnsSuffix}",properties:q,headers:o},type:g},{conditions:s,endpoint:{url:"https://partnercentral-channel-fips.global.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:o},type:g},{endpoint:{url:"https://partnercentral-channel.global.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:o},type:g}],type:h}],type:h},{error:"Invalid Configuration: Missing Region",type:e}],type:h}]};
export const ruleSet: RuleSetObject = _data;
