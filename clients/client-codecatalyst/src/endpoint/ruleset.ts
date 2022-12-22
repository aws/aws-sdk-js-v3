// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/codecatalyst.json */

const n="type",
o="conditions",
p="argv",
q="ref",
r="properties",
s="headers";
const a=true,
b=false,
c="tree",
d="isSet",
e="endpoint",
f="aws.partition",
g="PartitionResult",
h={"required":false,[n]:"String"},
i={[q]:"Endpoint"},
j={},
k={"fn":d,[p]:[{[q]:"Region"}]},
l=[{[q]:"Region"}],
m=[{[o]:[{"fn":"booleanEquals",[p]:[{[q]:"UseFIPS"},true]}],[n]:c,"rules":[{[o]:[{"fn":"booleanEquals",[p]:[{"fn":"getAttr",[p]:[{[q]:g},"supportsFIPS"]},false]}],"error":"Partition does not support FIPS.",[n]:"error"},{[e]:{"url":"https://codecatalyst-fips.global.{PartitionResult#dualStackDnsSuffix}",[r]:{},[s]:{}},[n]:e}]},{[e]:{"url":"https://codecatalyst.global.{PartitionResult#dualStackDnsSuffix}",[r]:{},[s]:{}},[n]:e}];
const _data={version:"1.3",parameters:{UseFIPS:{required:a,default:b,[n]:"Boolean"},Region:h,Endpoint:h},rules:[{[n]:c,rules:[{[o]:[{fn:d,[p]:[i]}],endpoint:{url:i,[r]:j,[s]:j},[n]:e},{[o]:[{fn:"not",[p]:[k]},{fn:f,[p]:["us-west-2"],assign:g}],[n]:c,rules:m},{[o]:[k,{fn:f,[p]:l,assign:g}],[n]:c,rules:m}]}]};
export const ruleSet: RuleSetObject = _data;
