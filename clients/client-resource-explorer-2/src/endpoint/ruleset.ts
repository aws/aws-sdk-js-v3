// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/resource-explorer-2.json */

const r="argv",
s="ref";
const a=false,
b=true,
c="String",
d="PartitionResult",
e="tree",
f="booleanEquals",
g="error",
h="endpoint",
i="getAttr",
j={[s]:"Endpoint"},
k={},
l={[s]:d},
m={"conditions":[],[g]:"FIPS is enabled but this partition does not support FIPS","type":g},
n=[j],
o=[{"fn":f,[r]:[{[s]:"UseFIPS"},true]}],
p=[],
q=[{"fn":f,[r]:[true,{"fn":i,[r]:[l,"supportsFIPS"]}]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:"Boolean"},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{fn:"aws.partition",[r]:[{[s]:"Region"}],assign:d}],type:e,rules:[{conditions:[{fn:"isSet",[r]:n},{fn:"parseURL",[r]:n,assign:"url"}],type:e,rules:[{conditions:o,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:p,endpoint:{url:j,properties:k,headers:k},type:h}]},{conditions:p,type:e,rules:[{conditions:[{fn:f,[r]:[b,{fn:i,[r]:[l,"supportsDualStack"]}]}],type:e,rules:[{conditions:o,type:e,rules:[{conditions:q,type:e,rules:[{conditions:p,endpoint:{url:"https://resource-explorer-2-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:h}]},m]},{conditions:p,endpoint:{url:"https://resource-explorer-2.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:h}]},{conditions:p,type:e,rules:[{conditions:o,type:e,rules:[{conditions:q,type:e,rules:[{conditions:p,endpoint:{url:"https://resource-explorer-2-fips.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:h}]},m]},{conditions:p,endpoint:{url:"https://resource-explorer-2.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:h}]}]}]}]};
export const ruleSet: RuleSetObject = _data;
