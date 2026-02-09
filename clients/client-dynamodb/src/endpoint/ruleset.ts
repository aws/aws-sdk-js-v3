// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/dynamodb.json */

const K="required",
L="type",
M="rules",
N="conditions",
O="fn",
P="argv",
Q="ref",
R="assign",
S="url",
T="properties",
U="headers",
V="metricValues";
const a=false,
b="error",
c="stringEquals",
d="https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",
e="endpoint",
f="tree",
g="dynamodb",
h={[K]:false,[L]:"string"},
i={[K]:true,"default":false,[L]:"boolean"},
j={[O]:"isSet",[P]:[{[Q]:"Endpoint"}]},
k={[Q]:"Endpoint"},
l={[O]:"isSet",[P]:[{[Q]:"Region"}]},
m={[Q]:"Region"},
n={[O]:"aws.partition",[P]:[m],[R]:"PartitionResult"},
o={[N]:[{[O]:"booleanEquals",[P]:[{[Q]:"UseFIPS"},true]}],[b]:"Invalid Configuration: FIPS and custom endpoint are not supported",[L]:b},
p={[O]:"booleanEquals",[P]:[{[Q]:"UseFIPS"},true]},
q={[N]:[{[O]:"booleanEquals",[P]:[{[Q]:"UseDualStack"},true]}],[b]:"Invalid Configuration: Dualstack and custom endpoint are not supported",[L]:b},
r={[O]:"booleanEquals",[P]:[{[Q]:"UseDualStack"},true]},
s={[e]:{[S]:"{Endpoint}",[T]:{},[U]:{}},[L]:e},
t={},
u={[O]:"booleanEquals",[P]:[{[O]:"getAttr",[P]:[{[Q]:"PartitionResult"},"supportsFIPS"]},true]},
v={[O]:"booleanEquals",[P]:[{[O]:"getAttr",[P]:[{[Q]:"PartitionResult"},"supportsDualStack"]},true]},
w={[N]:[{[O]:"isSet",[P]:[{[Q]:"AccountIdEndpointMode"}]},{[O]:c,[P]:[{[Q]:"AccountIdEndpointMode"},"required"]}],[M]:[{[b]:"Invalid Configuration: AccountIdEndpointMode is required and FIPS is enabled, but FIPS account endpoints are not supported",[L]:b}],[L]:f},
x={[O]:"getAttr",[P]:[{[Q]:"PartitionResult"},"name"]},
y={[e]:{[S]:"https://dynamodb.{Region}.{PartitionResult#dnsSuffix}",[T]:{},[U]:{}},[L]:e},
z={[S]:"https://{ParsedArn#accountId}.ddb.{Region}.{PartitionResult#dualStackDnsSuffix}",[T]:{[V]:["O"]},[U]:{}},
A={[V]:["O"]},
B={[b]:"Credentials-sourced account ID parameter is invalid",[L]:b},
C={[N]:[{[O]:"isSet",[P]:[{[Q]:"AccountIdEndpointMode"}]},{[O]:c,[P]:[{[Q]:"AccountIdEndpointMode"},"required"]}],[M]:[{[N]:[{[O]:"not",[P]:[p]}],[M]:[{[N]:[{[O]:c,[P]:[x,"aws"]}],[M]:[{[b]:"AccountIdEndpointMode is required but no AccountID was provided or able to be loaded",[L]:b}],[L]:f},{[b]:"Invalid Configuration: AccountIdEndpointMode is required but account endpoints are not supported in this partition",[L]:b}],[L]:f},{[b]:"Invalid Configuration: AccountIdEndpointMode is required and FIPS is enabled, but FIPS account endpoints are not supported",[L]:b}],[L]:f},
D={[S]:"https://{ParsedArn#accountId}.ddb.{Region}.{PartitionResult#dnsSuffix}",[T]:A,[U]:{}},
E=[p],
F=[r],
G=[{[O]:"isSet",[P]:[{[Q]:"AccountIdEndpointMode"}]},{[O]:"not",[P]:[{[O]:c,[P]:[{[Q]:"AccountIdEndpointMode"},"disabled"]}]},{[O]:c,[P]:[x,"aws"]},{[O]:"not",[P]:[p]},{[O]:"isSet",[P]:[{[Q]:"ResourceArn"}]},{[O]:"aws.parseArn",[P]:[{[Q]:"ResourceArn"}],[R]:"ParsedArn"},{[O]:c,[P]:[{[O]:"getAttr",[P]:[{[Q]:"ParsedArn"},"service"]},g]},{[O]:"isValidHostLabel",[P]:[{[O]:"getAttr",[P]:[{[Q]:"ParsedArn"},"region"]},false]},{[O]:c,[P]:[{[O]:"getAttr",[P]:[{[Q]:"ParsedArn"},"region"]},"{Region}"]},{[O]:"isValidHostLabel",[P]:[{[O]:"getAttr",[P]:[{[Q]:"ParsedArn"},"accountId"]},false]}],
H=[{[O]:"isSet",[P]:[{[Q]:"AccountIdEndpointMode"}]},{[O]:"not",[P]:[{[O]:c,[P]:[{[Q]:"AccountIdEndpointMode"},"disabled"]}]},{[O]:c,[P]:[x,"aws"]},{[O]:"not",[P]:[p]},{[O]:"isSet",[P]:[{[Q]:"ResourceArnList"}]},{[O]:"getAttr",[P]:[{[Q]:"ResourceArnList"},"[0]"],[R]:"FirstArn"},{[O]:"aws.parseArn",[P]:[{[Q]:"FirstArn"}],[R]:"ParsedArn"},{[O]:c,[P]:[{[O]:"getAttr",[P]:[{[Q]:"ParsedArn"},"service"]},g]},{[O]:"isValidHostLabel",[P]:[{[O]:"getAttr",[P]:[{[Q]:"ParsedArn"},"region"]},false]},{[O]:c,[P]:[{[O]:"getAttr",[P]:[{[Q]:"ParsedArn"},"region"]},"{Region}"]},{[O]:"isValidHostLabel",[P]:[{[O]:"getAttr",[P]:[{[Q]:"ParsedArn"},"accountId"]},false]}],
I=[{[O]:"isSet",[P]:[{[Q]:"AccountIdEndpointMode"}]},{[O]:"not",[P]:[{[O]:c,[P]:[{[Q]:"AccountIdEndpointMode"},"disabled"]}]},{[O]:c,[P]:[x,"aws"]},{[O]:"not",[P]:[p]},{[O]:"isSet",[P]:[{[Q]:"AccountId"}]}],
J=[{[O]:"isValidHostLabel",[P]:[{[Q]:"AccountId"},false]}];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h,AccountId:h,AccountIdEndpointMode:h,ResourceArn:h,ResourceArnList:{[K]:a,[L]:"stringArray"}},[M]:[{[N]:[j,l,n],[M]:[o,q,{[N]:[{[O]:c,[P]:[k,d]}],error:"Endpoint override is not supported for dual-stack endpoints. Please enable dual-stack functionality by enabling the configuration. For more details, see: https://docs.aws.amazon.com/sdkref/latest/guide/feature-endpoints.html",[L]:b},s],[L]:f},{[N]:[j],[M]:[o,q,s],[L]:f},{[N]:[l],[M]:[{[N]:[n],[M]:[{[N]:[{[O]:c,[P]:[m,"local"]}],[M]:[{[N]:E,error:"Invalid Configuration: FIPS and local endpoint are not supported",[L]:b},{[N]:F,error:"Invalid Configuration: Dualstack and local endpoint are not supported",[L]:b},{endpoint:{[S]:"http://localhost:8000",[T]:{authSchemes:[{name:"sigv4",signingName:g,signingRegion:"us-east-1"}]},[U]:t},[L]:e}],[L]:f},{[N]:[p,r],[M]:[{[N]:[u,v],[M]:[w,{endpoint:{[S]:"https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[T]:t,[U]:t},[L]:e}],[L]:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[L]:b}],[L]:f},{[N]:E,[M]:[{[N]:[u],[M]:[{[N]:[{[O]:c,[P]:[x,"aws-us-gov"]}],[M]:[w,y],[L]:f},w,{endpoint:{[S]:"https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",[T]:t,[U]:t},[L]:e}],[L]:f},{error:"FIPS is enabled but this partition does not support FIPS",[L]:b}],[L]:f},{[N]:F,[M]:[{[N]:[v],[M]:[{[N]:G,endpoint:z,[L]:e},{[N]:H,endpoint:z,[L]:e},{[N]:I,[M]:[{[N]:J,[M]:[{endpoint:{[S]:"https://{AccountId}.ddb.{Region}.{PartitionResult#dualStackDnsSuffix}",[T]:A,[U]:t},[L]:e}],[L]:f},B],[L]:f},C,{endpoint:{[S]:d,[T]:t,[U]:t},[L]:e}],[L]:f},{error:"DualStack is enabled but this partition does not support DualStack",[L]:b}],[L]:f},{[N]:G,endpoint:D,[L]:e},{[N]:H,endpoint:D,[L]:e},{[N]:I,[M]:[{[N]:J,[M]:[{endpoint:{[S]:"https://{AccountId}.ddb.{Region}.{PartitionResult#dnsSuffix}",[T]:A,[U]:t},[L]:e}],[L]:f},B],[L]:f},C,y],[L]:f}],[L]:f},{error:"Invalid Configuration: Missing Region",[L]:b}]};
export const ruleSet: RuleSetObject = _data;
