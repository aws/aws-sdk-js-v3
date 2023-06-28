// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/sts.json */

const F="required",
G="type",
H="fn",
I="argv",
J="ref";
const a=false,
b=true,
c="booleanEquals",
d="tree",
e="stringEquals",
f="sigv4",
g="sts",
h="us-east-1",
i="endpoint",
j="https://sts.{Region}.{PartitionResult#dnsSuffix}",
k="error",
l="getAttr",
m={[F]:false,[G]:"String"},
n={[F]:true,"default":false,[G]:"Boolean"},
o={[J]:"Endpoint"},
p={[H]:"isSet",[I]:[{[J]:"Region"}]},
q={[J]:"Region"},
r={[H]:"aws.partition",[I]:[q],"assign":"PartitionResult"},
s={[J]:"UseFIPS"},
t={[J]:"UseDualStack"},
u={"url":"https://sts.amazonaws.com","properties":{"authSchemes":[{"name":f,"signingName":g,"signingRegion":h}]},"headers":{}},
v={},
w={"conditions":[{[H]:e,[I]:[q,"aws-global"]}],[i]:u,[G]:i},
x={[H]:c,[I]:[s,true]},
y={[H]:c,[I]:[t,true]},
z={[H]:c,[I]:[true,{[H]:l,[I]:[{[J]:"PartitionResult"},"supportsFIPS"]}]},
A={[J]:"PartitionResult"},
B={[H]:c,[I]:[true,{[H]:l,[I]:[A,"supportsDualStack"]}]},
C=[{[H]:"isSet",[I]:[o]}],
D=[x],
E=[y];
const _data={version:"1.0",parameters:{Region:m,UseDualStack:n,UseFIPS:n,Endpoint:m,UseGlobalEndpoint:n},rules:[{conditions:[{[H]:c,[I]:[{[J]:"UseGlobalEndpoint"},b]},{[H]:"not",[I]:C},p,r,{[H]:c,[I]:[s,a]},{[H]:c,[I]:[t,a]}],[G]:d,rules:[{conditions:[{[H]:e,[I]:[q,"ap-northeast-1"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"ap-south-1"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"ap-southeast-1"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"ap-southeast-2"]}],endpoint:u,[G]:i},w,{conditions:[{[H]:e,[I]:[q,"ca-central-1"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"eu-central-1"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"eu-north-1"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"eu-west-1"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"eu-west-2"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"eu-west-3"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"sa-east-1"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,h]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"us-east-2"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"us-west-1"]}],endpoint:u,[G]:i},{conditions:[{[H]:e,[I]:[q,"us-west-2"]}],endpoint:u,[G]:i},{endpoint:{url:j,properties:{authSchemes:[{name:f,signingName:g,signingRegion:"{Region}"}]},headers:v},[G]:i}]},{conditions:C,[G]:d,rules:[{conditions:D,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[G]:k},{[G]:d,rules:[{conditions:E,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[G]:k},{endpoint:{url:o,properties:v,headers:v},[G]:i}]}]},{[G]:d,rules:[{conditions:[p],[G]:d,rules:[{conditions:[r],[G]:d,rules:[{conditions:[x,y],[G]:d,rules:[{conditions:[z,B],[G]:d,rules:[{[G]:d,rules:[{endpoint:{url:"https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:v,headers:v},[G]:i}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[G]:k}]},{conditions:D,[G]:d,rules:[{conditions:[z],[G]:d,rules:[{[G]:d,rules:[{conditions:[{[H]:e,[I]:["aws-us-gov",{[H]:l,[I]:[A,"name"]}]}],endpoint:{url:"https://sts.{Region}.amazonaws.com",properties:v,headers:v},[G]:i},{endpoint:{url:"https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",properties:v,headers:v},[G]:i}]}]},{error:"FIPS is enabled but this partition does not support FIPS",[G]:k}]},{conditions:E,[G]:d,rules:[{conditions:[B],[G]:d,rules:[{[G]:d,rules:[{endpoint:{url:"https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:v,headers:v},[G]:i}]}]},{error:"DualStack is enabled but this partition does not support DualStack",[G]:k}]},{[G]:d,rules:[w,{endpoint:{url:j,properties:v,headers:v},[G]:i}]}]}]},{error:"Invalid Configuration: Missing Region",[G]:k}]}]};
export const ruleSet: RuleSetObject = _data;
