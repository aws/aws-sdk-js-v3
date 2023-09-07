// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/dynamodb-streams.json */

const v="required",
w="type",
x="fn",
y="argv",
z="ref",
A="properties",
B="headers";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="stringEquals",
g={[v]:false,[w]:"String"},
h={[v]:true,"default":false,[w]:"Boolean"},
i={[z]:"Endpoint"},
j={[x]:"booleanEquals",[y]:[{[z]:"UseFIPS"},true]},
k={[x]:"booleanEquals",[y]:[{[z]:"UseDualStack"},true]},
l={},
m={[z]:"Region"},
n={[x]:"booleanEquals",[y]:[true,{[x]:"getAttr",[y]:[{[z]:e},"supportsFIPS"]}]},
o={[x]:"booleanEquals",[y]:[true,{[x]:"getAttr",[y]:[{[z]:e},"supportsDualStack"]}]},
p={"conditions":[{[x]:f,[y]:["aws-us-gov",{[x]:"getAttr",[y]:[{[z]:e},"name"]}]}],[d]:{"url":"https://streams.dynamodb.{Region}.amazonaws.com",[A]:{},[B]:{}},[w]:d},
q={[x]:"getAttr",[y]:[{[z]:e},"name"]},
r={"url":"https://streams.dynamodb.{Region}.amazonaws.com",[A]:{},[B]:{}},
s=[j],
t=[k],
u=[m];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},rules:[{conditions:[{[x]:a,[y]:[i]}],[w]:b,rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[w]:c},{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[w]:c},{endpoint:{url:i,[A]:l,[B]:l},[w]:d}]},{conditions:[{[x]:a,[y]:u}],[w]:b,rules:[{conditions:[{[x]:"aws.partition",[y]:u,assign:e}],[w]:b,rules:[{conditions:[j,k],[w]:b,rules:[{conditions:[n,o],[w]:b,rules:[{endpoint:{url:"https://streams.dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[A]:l,[B]:l},[w]:d}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[w]:c}]},{conditions:s,[w]:b,rules:[{conditions:[n],[w]:b,rules:[p,{endpoint:{url:"https://streams.dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",[A]:l,[B]:l},[w]:d}]},{error:"FIPS is enabled but this partition does not support FIPS",[w]:c}]},{conditions:t,[w]:b,rules:[{conditions:[o],[w]:b,rules:[{endpoint:{url:"https://streams.dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",[A]:l,[B]:l},[w]:d}]},{error:"DualStack is enabled but this partition does not support DualStack",[w]:c}]},{conditions:[{[x]:f,[y]:[m,"local"]}],endpoint:{url:"http://localhost:8000",[A]:{authSchemes:[{name:"sigv4",signingName:"dynamodb",signingRegion:"us-east-1"}]},[B]:l},[w]:d},{conditions:[{[x]:f,[y]:["aws",q]}],endpoint:r,[w]:d},{conditions:[{[x]:f,[y]:["aws-cn",q]}],endpoint:{url:"https://streams.dynamodb.{Region}.amazonaws.com.cn",[A]:l,[B]:l},[w]:d},p,{conditions:[{[x]:f,[y]:["aws-iso",q]}],endpoint:{url:"https://streams.dynamodb.{Region}.c2s.ic.gov",[A]:l,[B]:l},[w]:d},{conditions:[{[x]:f,[y]:["aws-iso-b",q]}],endpoint:{url:"https://streams.dynamodb.{Region}.sc2s.sgov.gov",[A]:l,[B]:l},[w]:d},{endpoint:{url:"https://streams.dynamodb.{Region}.{PartitionResult#dnsSuffix}",[A]:l,[B]:l},[w]:d}]}]},{error:"Invalid Configuration: Missing Region",[w]:c}]};
export const ruleSet: RuleSetObject = _data;
