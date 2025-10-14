// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/transcribe.json */

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
s={"url":"https://fips.transcribe.{Region}.amazonaws.com","properties":{},"headers":{}},
t=[l],
u=[m],
v=[o];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[x]:b,[y]:[k]}],rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:k,properties:n,headers:n},type:e}],type:f},{conditions:[{[x]:b,[y]:v}],rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:g}],rules:[{conditions:[l,m],rules:[{conditions:[{[x]:c,[y]:[a,p]},q],rules:[{endpoint:{url:"https://transcribe-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:t,rules:[{conditions:[{[x]:c,[y]:[p,a]}],rules:[{conditions:[{[x]:h,[y]:[r,"aws"]}],endpoint:s,type:e},{conditions:[{[x]:h,[y]:[r,"aws-us-gov"]}],endpoint:s,type:e},{endpoint:{url:"https://transcribe-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:u,rules:[{conditions:[q],rules:[{endpoint:{url:"https://transcribe.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{conditions:[{[x]:h,[y]:[o,"cn-north-1"]}],endpoint:{url:"https://cn.transcribe.cn-north-1.amazonaws.com.cn",properties:n,headers:n},type:e},{conditions:[{[x]:h,[y]:[o,"cn-northwest-1"]}],endpoint:{url:"https://cn.transcribe.cn-northwest-1.amazonaws.com.cn",properties:n,headers:n},type:e},{endpoint:{url:"https://transcribe.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
