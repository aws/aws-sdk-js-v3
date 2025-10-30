// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/sagemaker-runtime.json */

const u="required",
v="fn",
w="argv",
x="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i={[u]:false,"type":"string"},
j={[u]:true,"default":false,"type":"boolean"},
k={[x]:"Endpoint"},
l={[v]:c,[w]:[{[x]:"UseFIPS"},true]},
m={[v]:c,[w]:[{[x]:"UseDualStack"},true]},
n={},
o={[v]:"getAttr",[w]:[{[x]:g},"supportsFIPS"]},
p={[v]:c,[w]:[true,{[v]:"getAttr",[w]:[{[x]:g},"supportsDualStack"]}]},
q={[v]:"getAttr",[w]:[{[x]:g},"name"]},
r=[l],
s=[m],
t=[{[x]:"Region"}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[v]:b,[w]:[k]}],rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:k,properties:n,headers:n},type:e}],type:f},{conditions:[{[v]:b,[w]:t}],rules:[{conditions:[{[v]:"aws.partition",[w]:t,assign:g}],rules:[{conditions:[l,m],rules:[{conditions:[{[v]:c,[w]:[a,o]},p],rules:[{endpoint:{url:"https://runtime.sagemaker-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:r,rules:[{conditions:[{[v]:c,[w]:[o,a]}],rules:[{conditions:[{[v]:h,[w]:[q,"aws"]}],endpoint:{url:"https://runtime-fips.sagemaker.{Region}.amazonaws.com",properties:n,headers:n},type:e},{conditions:[{[v]:h,[w]:[q,"aws-us-gov"]}],endpoint:{url:"https://runtime.sagemaker.{Region}.amazonaws.com",properties:n,headers:n},type:e},{endpoint:{url:"https://runtime.sagemaker-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:s,rules:[{conditions:[p],rules:[{endpoint:{url:"https://runtime.sagemaker.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://runtime.sagemaker.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
