// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/lex-runtime-service.json */

const u="required",
v="fn",
w="argv",
x="ref",
y="properties",
z="headers";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f={[u]:false,"type":"String"},
g={[u]:true,"default":false,"type":"Boolean"},
h={[x]:"Endpoint"},
i={[v]:"booleanEquals",[w]:[{[x]:"UseFIPS"},true]},
j={[v]:"booleanEquals",[w]:[{[x]:"UseDualStack"},true]},
k={},
l={[v]:"booleanEquals",[w]:[true,{[v]:"getAttr",[w]:[{[x]:e},"supportsFIPS"]}]},
m={[v]:"booleanEquals",[w]:[true,{[v]:"getAttr",[w]:[{[x]:e},"supportsDualStack"]}]},
n={"url":"https://runtime-fips.lex.{Region}.amazonaws.com",[y]:{},[z]:{}},
o={"url":"https://runtime.lex.{Region}.amazonaws.com",[y]:{},[z]:{}},
p=[i],
q=[j],
r=[{[x]:"Region"}],
s=[{[v]:"stringEquals",[w]:["aws",{[v]:"getAttr",[w]:[{[x]:e},"name"]}]}],
t=[{[v]:"stringEquals",[w]:["aws-us-gov",{[v]:"getAttr",[w]:[{[x]:e},"name"]}]}];
const _data={version:"1.0",parameters:{Region:f,UseDualStack:g,UseFIPS:g,Endpoint:f},rules:[{conditions:[{[v]:a,[w]:[h]}],type:b,rules:[{conditions:p,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{conditions:q,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:h,[y]:k,[z]:k},type:d}]},{conditions:[{[v]:a,[w]:r}],type:b,rules:[{conditions:[{[v]:"aws.partition",[w]:r,assign:e}],type:b,rules:[{conditions:[i,j],type:b,rules:[{conditions:[l,m],type:b,rules:[{endpoint:{url:"https://runtime.lex-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[y]:k,[z]:k},type:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:p,type:b,rules:[{conditions:[l],type:b,rules:[{conditions:s,endpoint:n,type:d},{conditions:t,endpoint:n,type:d},{endpoint:{url:"https://runtime.lex-fips.{Region}.{PartitionResult#dnsSuffix}",[y]:k,[z]:k},type:d}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:q,type:b,rules:[{conditions:[m],type:b,rules:[{endpoint:{url:"https://runtime.lex.{Region}.{PartitionResult#dualStackDnsSuffix}",[y]:k,[z]:k},type:d}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{conditions:s,endpoint:o,type:d},{conditions:t,endpoint:o,type:d},{endpoint:{url:"https://runtime.lex.{Region}.{PartitionResult#dnsSuffix}",[y]:k,[z]:k},type:d}]}]},{error:"Invalid Configuration: Missing Region",type:c}]};
export const ruleSet: RuleSetObject = _data;
