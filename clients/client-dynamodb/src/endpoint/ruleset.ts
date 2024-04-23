// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/dynamodb.json */

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
h="getAttr",
i="stringEquals",
j={[w]:false,"type":"String"},
k={[w]:true,"default":false,"type":"Boolean"},
l={[z]:"Endpoint"},
m={[x]:c,[y]:[{[z]:"UseFIPS"},true]},
n={[x]:c,[y]:[{[z]:"UseDualStack"},true]},
o={},
p={[z]:"Region"},
q={[x]:h,[y]:[{[z]:g},"supportsFIPS"]},
r={[z]:g},
s={[x]:c,[y]:[true,{[x]:h,[y]:[r,"supportsDualStack"]}]},
t=[m],
u=[n],
v=[p];
const _data={version:"1.0",parameters:{Region:j,UseDualStack:k,UseFIPS:k,Endpoint:j},rules:[{conditions:[{[x]:b,[y]:[l]}],rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:l,properties:o,headers:o},type:e}],type:f},{conditions:[{[x]:b,[y]:v}],rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:g}],rules:[{conditions:[m,n],rules:[{conditions:[{[x]:c,[y]:[a,q]},s],rules:[{endpoint:{url:"https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:t,rules:[{conditions:[{[x]:c,[y]:[q,a]}],rules:[{conditions:[{[x]:i,[y]:[{[x]:h,[y]:[r,"name"]},"aws-us-gov"]}],endpoint:{url:"https://dynamodb.{Region}.amazonaws.com",properties:o,headers:o},type:e},{endpoint:{url:"https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:u,rules:[{conditions:[s],rules:[{endpoint:{url:"https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{conditions:[{[x]:i,[y]:[p,"local"]}],endpoint:{url:"http://localhost:8000",properties:{authSchemes:[{name:"sigv4",signingName:"dynamodb",signingRegion:"us-east-1"}]},headers:o},type:e},{endpoint:{url:"https://dynamodb.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
