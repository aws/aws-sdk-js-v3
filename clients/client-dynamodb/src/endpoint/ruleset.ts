// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/dynamodb.json */

const H="required",
I="type",
J="fn",
K="argv",
L="ref",
M="url",
N="properties",
O="headers";
const a=false,
b="isSet",
c="error",
d="endpoint",
e="tree",
f="PartitionResult",
g="stringEquals",
h="not",
i={[H]:false,[I]:"String"},
j={[H]:true,"default":false,[I]:"Boolean"},
k={[J]:"booleanEquals",[K]:[{[L]:"UseFIPS"},true]},
l={[J]:"booleanEquals",[K]:[{[L]:"UseDualStack"},true]},
m={},
n={[L]:"Region"},
o={[J]:b,[K]:[{[L]:"AccountIdEndpointMode"}]},
p={[L]:"AccountIdEndpointMode"},
q={[J]:b,[K]:[{[L]:"AccountId"}]},
r={[L]:"AccountId"},
s={[J]:g,[K]:[{[J]:"getAttr",[K]:[{[L]:f},"name"]},"aws"]},
t={[J]:"getAttr",[K]:[{[L]:f},"name"]},
u={[J]:h,[K]:[k]},
v={[J]:h,[K]:[l]},
w={[J]:"booleanEquals",[K]:[{[J]:"getAttr",[K]:[{[L]:f},"supportsFIPS"]},true]},
x={[J]:"booleanEquals",[K]:[{[J]:"getAttr",[K]:[{[L]:f},"supportsDualStack"]},true]},
y={[M]:"https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[N]:{},[O]:{}},
z={"conditions":[o,{[J]:g,[K]:[p,"disabled"]}],[d]:{[M]:"https://dynamodb.{Region}.{PartitionResult#dnsSuffix}",[N]:{},[O]:{}},[I]:d},
A={[d]:{[M]:"https://dynamodb.{Region}.{PartitionResult#dnsSuffix}",[N]:{},[O]:{}},[I]:d},
B={[M]:"https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",[N]:{},[O]:{}},
C={[M]:"https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",[N]:{},[O]:{}},
D=[k],
E=[l],
F=[n],
G=[o,{[J]:g,[K]:[p,"disabled"]}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i,AccountId:i,AccountIdEndpointMode:i},rules:[{conditions:[{[J]:b,[K]:[{[L]:"Endpoint"}]}],rules:[{conditions:D,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[I]:c},{conditions:E,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[I]:c},{endpoint:{[M]:"{Endpoint}",[N]:m,[O]:m},[I]:d}],[I]:e},{conditions:[{[J]:b,[K]:F}],rules:[{conditions:[{[J]:"aws.partition",[K]:F,assign:f}],rules:[{conditions:[{[J]:g,[K]:[n,"local"]}],rules:[{conditions:D,error:"Invalid Configuration: FIPS and local endpoint are not supported",[I]:c},{conditions:E,error:"Invalid Configuration: Dualstack and local endpoint are not supported",[I]:c},{endpoint:{[M]:"http://localhost:8000",[N]:{authSchemes:[{signingRegion:"us-east-1",signingName:"dynamodb",name:"sigv4"}]},[O]:m},[I]:d}],[I]:e},{conditions:[o,{[J]:g,[K]:[p,"required"]},{[J]:h,[K]:[q]}],error:"AccountIdEndpointMode is required but no AccountID was provided or able to be loaded.",[I]:c},{conditions:[q,s,u,v,{[J]:h,[K]:[{[J]:"isValidHostLabel",[K]:[r,a]}]}],error:"Credentials-sourced account ID parameter is invalid",[I]:c},{conditions:[k,l],rules:[{conditions:[w,x],rules:[{conditions:G,endpoint:y,[I]:d},{endpoint:y,[I]:d}],[I]:e},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[I]:c}],[I]:e},{conditions:D,rules:[{conditions:[w],rules:[{conditions:[{[J]:g,[K]:[t,"aws-us-gov"]}],rules:[z,A],[I]:e},{conditions:G,endpoint:B,[I]:d},{endpoint:B,[I]:d}],[I]:e},{error:"FIPS is enabled but this partition does not support FIPS",[I]:c}],[I]:e},{conditions:E,rules:[{conditions:[x],rules:[{conditions:G,endpoint:C,[I]:d},{endpoint:C,[I]:d}],[I]:e},{error:"DualStack is enabled but this partition does not support DualStack",[I]:c}],[I]:e},z,{conditions:[q,s,u,v],endpoint:{[M]:"https://{AccountId}.ddb.{Region}.{PartitionResult#dnsSuffix}",[N]:m,[O]:m},[I]:d},A],[I]:e}],[I]:e},{error:"Invalid Configuration: Missing Region",[I]:c}]};
export const ruleSet: RuleSetObject = _data;
