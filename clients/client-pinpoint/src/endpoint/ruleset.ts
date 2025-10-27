// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/pinpoint.json */

const w="required",
x="fn",
y="argv",
z="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i={[w]:false,"type":"string"},
j={[w]:true,"default":false,"type":"boolean"},
k={[z]:"Endpoint"},
l={[x]:c,[y]:[{[z]:"UseFIPS"},true]},
m={[x]:c,[y]:[{[z]:"UseDualStack"},true]},
n={},
o={[z]:"Region"},
p={[x]:"getAttr",[y]:[{[z]:g},"supportsFIPS"]},
q={[x]:c,[y]:[true,{[x]:"getAttr",[y]:[{[z]:g},"supportsDualStack"]}]},
r={[x]:"getAttr",[y]:[{[z]:g},"name"]},
s={"url":"https://pinpoint.{Region}.amazonaws.com","properties":{},"headers":{}},
t=[l],
u=[m],
v=[o];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[x]:b,[y]:[k]}],rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:k,properties:n,headers:n},type:e}],type:f},{conditions:[{[x]:b,[y]:v}],rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:g}],rules:[{conditions:[l,m],rules:[{conditions:[{[x]:c,[y]:[a,p]},q],rules:[{endpoint:{url:"https://pinpoint-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:t,rules:[{conditions:[{[x]:c,[y]:[p,a]}],rules:[{endpoint:{url:"https://pinpoint-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:u,rules:[{conditions:[q],rules:[{endpoint:{url:"https://pinpoint.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{conditions:[{[x]:h,[y]:[o,"us-east-1"]}],endpoint:{url:"https://pinpoint.us-east-1.amazonaws.com",properties:n,headers:n},type:e},{conditions:[{[x]:h,[y]:[o,"us-west-2"]}],endpoint:{url:"https://pinpoint.us-west-2.amazonaws.com",properties:n,headers:n},type:e},{conditions:[{[x]:h,[y]:[o,"us-gov-west-1"]}],endpoint:{url:"https://pinpoint.us-gov-west-1.amazonaws.com",properties:n,headers:n},type:e},{conditions:[{[x]:h,[y]:["aws",r]}],endpoint:s,type:e},{conditions:[{[x]:h,[y]:["aws-us-gov",r]}],endpoint:s,type:e},{endpoint:{url:"https://pinpoint.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
