// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/rds.json */

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
h="getAttr",
i={[u]:false,"type":"String"},
j={[u]:true,"default":false,"type":"Boolean"},
k={[x]:"Endpoint"},
l={[v]:c,[w]:[{[x]:"UseFIPS"},true]},
m={[v]:c,[w]:[{[x]:"UseDualStack"},true]},
n={},
o={[v]:h,[w]:[{[x]:g},"supportsFIPS"]},
p={[x]:g},
q={[v]:c,[w]:[true,{[v]:h,[w]:[p,"supportsDualStack"]}]},
r=[l],
s=[m],
t=[{[x]:"Region"}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[v]:b,[w]:[k]}],rules:[{conditions:r,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:s,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:k,properties:n,headers:n},type:e}],type:f},{conditions:[{[v]:b,[w]:t}],rules:[{conditions:[{[v]:"aws.partition",[w]:t,assign:g}],rules:[{conditions:[l,m],rules:[{conditions:[{[v]:c,[w]:[a,o]},q],rules:[{endpoint:{url:"https://rds-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:r,rules:[{conditions:[{[v]:c,[w]:[o,a]}],rules:[{conditions:[{[v]:"stringEquals",[w]:[{[v]:h,[w]:[p,"name"]},"aws-us-gov"]}],endpoint:{url:"https://rds.{Region}.amazonaws.com",properties:n,headers:n},type:e},{endpoint:{url:"https://rds-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:s,rules:[{conditions:[q],rules:[{endpoint:{url:"https://rds.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://rds.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
