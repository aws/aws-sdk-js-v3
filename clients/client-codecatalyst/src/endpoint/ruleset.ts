// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

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
c="isSet",
d="endpoint",
e="aws.partition",
f="PartitionResult",
g="tree",
h={"required":false,[n]:"string"},
i={[q]:"Endpoint"},
j={},
k={"fn":c,[p]:[{[q]:"Region"}]},
l=[{[q]:"Region"}],
m=[{[o]:[{"fn":"booleanEquals",[p]:[{[q]:"UseFIPS"},true]}],"rules":[{[o]:[{"fn":"booleanEquals",[p]:[{"fn":"getAttr",[p]:[{[q]:f},"supportsFIPS"]},false]}],"error":"Partition does not support FIPS.",[n]:"error"},{[d]:{"url":"https://codecatalyst-fips.global.{PartitionResult#dualStackDnsSuffix}",[r]:{},[s]:{}},[n]:d}],[n]:g},{[d]:{"url":"https://codecatalyst.global.{PartitionResult#dualStackDnsSuffix}",[r]:{},[s]:{}},[n]:d}];
const _data={version:"1.0",parameters:{UseFIPS:{required:a,default:b,[n]:"boolean"},Region:h,Endpoint:h},rules:[{[o]:[{fn:c,[p]:[i]}],endpoint:{url:i,[r]:j,[s]:j},[n]:d},{[o]:[{fn:"not",[p]:[k]},{fn:e,[p]:["us-west-2"],assign:f}],rules:m,[n]:g},{[o]:[k,{fn:e,[p]:l,assign:f}],rules:m,[n]:g}]};
export const ruleSet: RuleSetObject = _data;
