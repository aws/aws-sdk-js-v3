// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/resource-explorer-2.json */

const p="argv",
q="ref";
const a=true,
b=false,
c="String",
d="PartitionResult",
e="tree",
f="booleanEquals",
g="error",
h="endpoint",
i="getAttr",
j={[q]:"Endpoint"},
k={},
l={[q]:d},
m={[g]:"FIPS is enabled but this partition does not support FIPS","type":g},
n=[{"fn":f,[p]:[{[q]:"UseFIPS"},true]}],
o=[{"fn":f,[p]:[true,{"fn":i,[p]:[l,"supportsFIPS"]}]}];
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseFIPS:{required:a,default:b,type:"Boolean"},Endpoint:{required:b,type:c}},rules:[{conditions:[{fn:"aws.partition",[p]:[{[q]:"Region"}],assign:d}],type:e,rules:[{conditions:[{fn:"isSet",[p]:[j]}],type:e,rules:[{conditions:n,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{endpoint:{url:j,properties:k,headers:k},type:h}]},{type:e,rules:[{conditions:[{fn:f,[p]:[a,{fn:i,[p]:[l,"supportsDualStack"]}]}],type:e,rules:[{conditions:n,type:e,rules:[{conditions:o,type:e,rules:[{endpoint:{url:"https://resource-explorer-2-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:h}]},m]},{endpoint:{url:"https://resource-explorer-2.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:h}]},{type:e,rules:[{conditions:n,type:e,rules:[{conditions:o,type:e,rules:[{endpoint:{url:"https://resource-explorer-2-fips.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:h}]},m]},{endpoint:{url:"https://resource-explorer-2.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:h}]}]}]}]};
export const ruleSet: RuleSetObject = _data;
