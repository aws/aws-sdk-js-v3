// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cloudfront-keyvaluestore.json */

const r="type",
s="rules",
t="conditions",
u="ref",
v="endpoint",
w="properties",
x="authSchemes",
y="signingName",
z="signingRegionSet",
A="headers";
const a=false,
b="isSet",
c="parsedArn",
d="stringEquals",
e="getAttr",
f="arnType",
g="partitionResult",
h="tree",
i="error",
j={"required":false,[r]:"string"},
k={[u]:c},
l={[u]:f},
m={[t]:[{"fn":b,"argv":[{[u]:"Endpoint"}]}],[s]:[{[t]:[{"fn":"parseURL","argv":[{[u]:"Endpoint"}],"assign":"url"}],[s]:[{[v]:{"url":"{url#scheme}://{parsedArn#accountId}.{url#authority}{url#path}",[w]:{[x]:[{"name":"sigv4a",[y]:"cloudfront-keyvaluestore",[z]:["*"]}]},[A]:{}},[r]:"endpoint"}],[r]:h},{[i]:"Provided endpoint is not a valid URL",[r]:i}],[r]:h},
n={[v]:{"url":"https://{parsedArn#accountId}.cloudfront-kvs.global.api.aws",[w]:{[x]:[{"name":"sigv4a",[y]:"cloudfront-keyvaluestore",[z]:["*"]}]},[A]:{}},[r]:"endpoint"},
o={[i]:"No resource type found in the KVS ARN. Resource type must be `key-value-store`.",[r]:i},
p=[{[u]:"KvsARN"}],
q=[{[u]:"Region"}];
const _data={version:"1.0",parameters:{KvsARN:j,Region:j,UseFIPS:{required:true,default:a,[r]:"boolean"},Endpoint:j},[s]:[{[t]:[{fn:"booleanEquals",argv:[{[u]:"UseFIPS"},a]}],[s]:[{[t]:[{fn:b,argv:p}],[s]:[{[t]:[{fn:"aws.parseArn",argv:p,assign:c}],[s]:[{[t]:[{fn:d,argv:[{fn:e,argv:[k,"service"]},"cloudfront"]}],[s]:[{[t]:[{fn:d,argv:[{fn:e,argv:[k,"region"]},""]}],[s]:[{[t]:[{fn:e,argv:[k,"resourceId[0]"],assign:f}],[s]:[{[t]:[{fn:"not",argv:[{fn:d,argv:[l,""]}]}],[s]:[{[t]:[{fn:d,argv:[l,"key-value-store"]}],[s]:[{[t]:[{fn:d,argv:[{fn:e,argv:[k,"partition"]},"aws"]}],[s]:[{[t]:[{fn:b,argv:q}],[s]:[{[t]:[{fn:"aws.partition",argv:q,assign:g}],[s]:[{[t]:[{fn:d,argv:[{fn:e,argv:[{[u]:g},"name"]},"{parsedArn#partition}"]}],[s]:[m,n],[r]:h},{error:"Client was configured for partition `{partitionResult#name}` but Kvs ARN has `{parsedArn#partition}`",[r]:i}],[r]:h}],[r]:h},m,n],[r]:h},{error:"CloudFront-KeyValueStore is not supported in partition `{parsedArn#partition}`",[r]:i}],[r]:h},{error:"ARN resource type is invalid. Expected `key-value-store`, found: `{arnType}`",[r]:i}],[r]:h},o],[r]:h},o],[r]:h},{error:"Provided ARN must be a global resource ARN. Found: `{parsedArn#region}`",[r]:i}],[r]:h},{error:"Provided ARN is not a valid CloudFront Service ARN. Found: `{parsedArn#service}`",[r]:i}],[r]:h},{error:"KVS ARN must be a valid ARN",[r]:i}],[r]:h},{error:"KVS ARN must be provided to use this service",[r]:i}],[r]:h},{error:"Invalid Configuration: FIPS is not supported with CloudFront-KeyValueStore.",[r]:i}]};
export const ruleSet: RuleSetObject = _data;
