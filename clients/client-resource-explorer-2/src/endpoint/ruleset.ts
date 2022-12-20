// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/resource-explorer-2.json */

const q="argv",
r="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="booleanEquals",
g="error",
h="endpoint",
i="getAttr",
j={[r]:"Endpoint"},
k={},
l={[r]:d},
m={"conditions":[],[g]:"FIPS is enabled but this partition does not support FIPS","type":g},
n=[{"fn":f,[q]:[{[r]:"UseFIPS"},true]}],
o=[],
p=[{"fn":f,[q]:[true,{"fn":i,[q]:[l,"supportsFIPS"]}]}];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:"Boolean"},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{fn:"aws.partition",[q]:[{[r]:"Region"}],assign:d}],type:e,rules:[{conditions:[{fn:"isSet",[q]:[j]}],type:e,rules:[{conditions:n,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:o,endpoint:{url:j,properties:k,headers:k},type:h}]},{conditions:o,type:e,rules:[{conditions:[{fn:f,[q]:[a,{fn:i,[q]:[l,"supportsDualStack"]}]}],type:e,rules:[{conditions:n,type:e,rules:[{conditions:p,type:e,rules:[{conditions:o,endpoint:{url:"https://resource-explorer-2-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:h}]},m]},{conditions:o,endpoint:{url:"https://resource-explorer-2.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:h}]},{conditions:o,type:e,rules:[{conditions:n,type:e,rules:[{conditions:p,type:e,rules:[{conditions:o,endpoint:{url:"https://resource-explorer-2-fips.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:h}]},m]},{conditions:o,endpoint:{url:"https://resource-explorer-2.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:h}]}]}]}]};
export const ruleSet: RuleSetObject = _data;
