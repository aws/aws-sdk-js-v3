// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/resource-explorer-2.json */

const r="argv",
s="ref";
const a=false,
b=true,
c="isSet",
d="tree",
e="booleanEquals",
f="error",
g="endpoint",
h="PartitionResult",
i="getAttr",
j={"required":false,"type":"String"},
k={[s]:"Endpoint"},
l={},
m={[s]:h},
n={[f]:"FIPS is enabled but this partition does not support FIPS","type":f},
o=[{"fn":e,[r]:[{[s]:"UseFIPS"},true]}],
p=[{[s]:"Region"}],
q=[{"fn":e,[r]:[true,{"fn":i,[r]:[m,"supportsFIPS"]}]}];
const _data={version:"1.0",parameters:{Region:j,UseFIPS:{required:b,default:a,type:"Boolean"},Endpoint:j},rules:[{conditions:[{fn:c,[r]:[k]}],type:d,rules:[{conditions:o,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:f},{endpoint:{url:k,properties:l,headers:l},type:g}]},{conditions:[{fn:c,[r]:p}],type:d,rules:[{conditions:[{fn:"aws.partition",[r]:p,assign:h}],type:d,rules:[{conditions:[{fn:e,[r]:[b,{fn:i,[r]:[m,"supportsDualStack"]}]}],type:d,rules:[{conditions:o,type:d,rules:[{conditions:q,type:d,rules:[{endpoint:{url:"https://resource-explorer-2-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:g}]},n]},{endpoint:{url:"https://resource-explorer-2.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:g}]},{conditions:o,type:d,rules:[{conditions:q,type:d,rules:[{endpoint:{url:"https://resource-explorer-2-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:g}]},n]},{endpoint:{url:"https://resource-explorer-2.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:g}]}]},{error:"Invalid Configuration: Missing Region",type:f}]};
export const ruleSet: RuleSetObject = _data;
