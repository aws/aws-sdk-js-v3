// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/dynamodb.json */

const S="required",
T="type",
U="fn",
V="argv",
W="ref",
X="properties",
Y="headers";
const a=false,
b="isSet",
c="error",
d="endpoint",
e="tree",
f="PartitionResult",
g="stringEquals",
h="dynamodb",
i="getAttr",
j="aws.parseArn",
k="ParsedArn",
l="isValidHostLabel",
m="FirstArn",
n={[S]:false,[T]:"String"},
o={[S]:true,"default":false,[T]:"Boolean"},
p={[U]:"booleanEquals",[V]:[{[W]:"UseFIPS"},true]},
q={[U]:"booleanEquals",[V]:[{[W]:"UseDualStack"},true]},
r={},
s={[W]:"Region"},
t={[U]:"booleanEquals",[V]:[{[U]:i,[V]:[{[W]:f},"supportsFIPS"]},true]},
u={[U]:"booleanEquals",[V]:[{[U]:i,[V]:[{[W]:f},"supportsDualStack"]},true]},
v={"conditions":[{[U]:b,[V]:[{[W]:"AccountIdEndpointMode"}]},{[U]:g,[V]:[{[W]:"AccountIdEndpointMode"},"required"]}],"rules":[{[c]:"Invalid Configuration: AccountIdEndpointMode is required and FIPS is enabled, but FIPS account endpoints are not supported",[T]:c}],[T]:e},
w={[U]:b,[V]:[{[W]:"AccountIdEndpointMode"}]},
x={[c]:"Invalid Configuration: AccountIdEndpointMode is required and FIPS is enabled, but FIPS account endpoints are not supported",[T]:c},
y={[U]:i,[V]:[{[W]:f},"name"]},
z={[d]:{"url":"https://dynamodb.{Region}.{PartitionResult#dnsSuffix}",[X]:{},[Y]:{}},[T]:d},
A={[U]:"not",[V]:[p]},
B={[c]:"Invalid Configuration: AccountIdEndpointMode is required and DualStack is enabled, but DualStack account endpoints are not supported",[T]:c},
C={[U]:"not",[V]:[{[U]:g,[V]:[{[W]:"AccountIdEndpointMode"},"disabled"]}]},
D={[U]:g,[V]:[y,"aws"]},
E={[U]:"not",[V]:[q]},
F={[U]:g,[V]:[{[U]:i,[V]:[{[W]:k},"service"]},h]},
G={[U]:l,[V]:[{[U]:i,[V]:[{[W]:k},"region"]},false]},
H={[U]:g,[V]:[{[U]:i,[V]:[{[W]:k},"region"]},"{Region}"]},
I={[U]:l,[V]:[{[U]:i,[V]:[{[W]:k},"accountId"]},false]},
J={"url":"https://{ParsedArn#accountId}.ddb.{Region}.{PartitionResult#dnsSuffix}",[X]:{},[Y]:{}},
K={[W]:"ResourceArnList"},
L={[W]:"AccountId"},
M=[p],
N=[q],
O=[s],
P=[w,{[U]:g,[V]:[{[W]:"AccountIdEndpointMode"},"required"]}],
Q=[A],
R=[{[W]:"ResourceArn"}];
const _data={version:"1.0",parameters:{Region:n,UseDualStack:o,UseFIPS:o,Endpoint:n,AccountId:n,AccountIdEndpointMode:n,ResourceArn:n,ResourceArnList:{[S]:a,[T]:"stringArray"}},rules:[{conditions:[{[U]:b,[V]:[{[W]:"Endpoint"}]}],rules:[{conditions:M,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[T]:c},{conditions:N,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[T]:c},{endpoint:{url:"{Endpoint}",[X]:r,[Y]:r},[T]:d}],[T]:e},{conditions:[{[U]:b,[V]:O}],rules:[{conditions:[{[U]:"aws.partition",[V]:O,assign:f}],rules:[{conditions:[{[U]:g,[V]:[s,"local"]}],rules:[{conditions:M,error:"Invalid Configuration: FIPS and local endpoint are not supported",[T]:c},{conditions:N,error:"Invalid Configuration: Dualstack and local endpoint are not supported",[T]:c},{endpoint:{url:"http://localhost:8000",[X]:{authSchemes:[{name:"sigv4",signingName:h,signingRegion:"us-east-1"}]},[Y]:r},[T]:d}],[T]:e},{conditions:[p,q],rules:[{conditions:[t,u],rules:[v,{endpoint:{url:"https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[X]:r,[Y]:r},[T]:d}],[T]:e},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[T]:c}],[T]:e},{conditions:M,rules:[{conditions:[t],rules:[{conditions:[{[U]:g,[V]:[y,"aws-us-gov"]}],rules:[v,z],[T]:e},v,{endpoint:{url:"https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",[X]:r,[Y]:r},[T]:d}],[T]:e},{error:"FIPS is enabled but this partition does not support FIPS",[T]:c}],[T]:e},{conditions:N,rules:[{conditions:[u],rules:[{conditions:P,rules:[{conditions:Q,rules:[B],[T]:e},x],[T]:e},{endpoint:{url:"https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",[X]:r,[Y]:r},[T]:d}],[T]:e},{error:"DualStack is enabled but this partition does not support DualStack",[T]:c}],[T]:e},{conditions:[w,C,D,A,E,{[U]:b,[V]:R},{[U]:j,[V]:R,assign:k},F,G,H,I],endpoint:J,[T]:d},{conditions:[w,C,D,A,E,{[U]:b,[V]:[K]},{[U]:i,[V]:[K,"[0]"],assign:m},{[U]:j,[V]:[{[W]:m}],assign:k},F,G,H,I],endpoint:J,[T]:d},{conditions:[w,C,D,A,E,{[U]:b,[V]:[L]}],rules:[{conditions:[{[U]:l,[V]:[L,a]}],rules:[{endpoint:{url:"https://{AccountId}.ddb.{Region}.{PartitionResult#dnsSuffix}",[X]:r,[Y]:r},[T]:d}],[T]:e},{error:"Credentials-sourced account ID parameter is invalid",[T]:c}],[T]:e},{conditions:P,rules:[{conditions:Q,rules:[{conditions:[E],rules:[{conditions:[D],rules:[{error:"AccountIdEndpointMode is required but no AccountID was provided or able to be loaded",[T]:c}],[T]:e},{error:"Invalid Configuration: AccountIdEndpointMode is required but account endpoints are not supported in this partition",[T]:c}],[T]:e},B],[T]:e},x],[T]:e},z],[T]:e}],[T]:e},{error:"Invalid Configuration: Missing Region",[T]:c}]};
export const ruleSet: RuleSetObject = _data;
