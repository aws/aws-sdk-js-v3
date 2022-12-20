// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/codecatalyst.json */

const o="type",
p="conditions",
q="argv",
r="ref",
s="properties",
t="headers";
const a=true,
b=false,
c="String",
d="tree",
e="isSet",
f="endpoint",
g="aws.partition",
h="PartitionResult",
i={[r]:"Endpoint"},
j={},
k={"fn":e,[q]:[{[r]:"Region"}]},
l=[],
m=[{[r]:"Region"}],
n=[{[p]:[{"fn":"booleanEquals",[q]:[{[r]:"UseFIPS"},true]}],[o]:d,"rules":[{[p]:[{"fn":"booleanEquals",[q]:[{"fn":"getAttr",[q]:[{[r]:h},"supportsFIPS"]},false]}],"error":"Partition does not support FIPS.",[o]:"error"},{[p]:[],[f]:{"url":"https://codecatalyst-fips.global.{PartitionResult#dualStackDnsSuffix}",[s]:{},[t]:{}},[o]:f}]},{[p]:[],[f]:{"url":"https://codecatalyst.global.{PartitionResult#dualStackDnsSuffix}",[s]:{},[t]:{}},[o]:f}];
const _data={version:"1.3",parameters:{UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",[o]:"Boolean"},Region:{builtIn:"AWS::Region",required:b,documentation:"The AWS region used to dispatch the request.",[o]:c},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",[o]:c}},rules:[{[p]:l,[o]:d,rules:[{[p]:[{fn:e,[q]:[i]}],endpoint:{url:i,[s]:j,[t]:j},[o]:f},{[p]:[{fn:"not",[q]:[k]},{fn:g,[q]:["us-west-2"],assign:h}],[o]:d,rules:n},{[p]:[k,{fn:g,[q]:m,assign:h}],[o]:d,rules:n}]}]};
export const ruleSet: RuleSetObject = _data;
