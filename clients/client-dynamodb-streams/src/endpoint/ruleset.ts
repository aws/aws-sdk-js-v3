// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/dynamodb-streams.json */

const x="required",
y="fn",
z="argv",
A="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="aws-us-gov",
j={[x]:false,"type":"String"},
k={[x]:true,"default":false,"type":"Boolean"},
l={[A]:"Endpoint"},
m={[y]:c,[z]:[{[A]:"UseFIPS"},true]},
n={[y]:c,[z]:[{[A]:"UseDualStack"},true]},
o={},
p={[A]:"Region"},
q={[y]:"getAttr",[z]:[{[A]:g},"supportsFIPS"]},
r={[y]:c,[z]:[true,{[y]:"getAttr",[z]:[{[A]:g},"supportsDualStack"]}]},
s={[y]:"getAttr",[z]:[{[A]:g},"name"]},
t={"url":"https://streams.dynamodb.{Region}.amazonaws.com","properties":{},"headers":{}},
u=[m],
v=[n],
w=[p];
const _data={version:"1.0",parameters:{Region:j,UseDualStack:k,UseFIPS:k,Endpoint:j},rules:[{conditions:[{[y]:b,[z]:[l]}],rules:[{conditions:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:v,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:l,properties:o,headers:o},type:e}],type:f},{conditions:[{[y]:b,[z]:w}],rules:[{conditions:[{[y]:"aws.partition",[z]:w,assign:g}],rules:[{conditions:[m,n],rules:[{conditions:[{[y]:c,[z]:[a,q]},r],rules:[{endpoint:{url:"https://streams.dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:u,rules:[{conditions:[{[y]:c,[z]:[q,a]}],rules:[{conditions:[{[y]:h,[z]:[s,i]}],endpoint:t,type:e},{endpoint:{url:"https://streams.dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:v,rules:[{conditions:[r],rules:[{endpoint:{url:"https://streams.dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{conditions:[{[y]:h,[z]:[p,"local"]}],endpoint:{url:"http://localhost:8000",properties:{authSchemes:[{name:"sigv4",signingName:"dynamodb",signingRegion:"us-east-1"}]},headers:o},type:e},{conditions:[{[y]:h,[z]:["aws",s]}],endpoint:t,type:e},{conditions:[{[y]:h,[z]:["aws-cn",s]}],endpoint:{url:"https://streams.dynamodb.{Region}.amazonaws.com.cn",properties:o,headers:o},type:e},{conditions:[{[y]:h,[z]:[i,s]}],endpoint:t,type:e},{conditions:[{[y]:h,[z]:["aws-iso",s]}],endpoint:{url:"https://streams.dynamodb.{Region}.c2s.ic.gov",properties:o,headers:o},type:e},{conditions:[{[y]:h,[z]:["aws-iso-b",s]}],endpoint:{url:"https://streams.dynamodb.{Region}.sc2s.sgov.gov",properties:o,headers:o},type:e},{endpoint:{url:"https://streams.dynamodb.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
