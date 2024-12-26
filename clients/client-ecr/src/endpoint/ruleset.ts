// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/ecr.json */

const m="fn",
n="argv",
o="ref";
const a=false,
b="PartitionResult",
c="endpoint",
d="tree",
e="error",
f={"required":true,"default":false,"type":"Boolean"},
g={[m]:"booleanEquals",[n]:[{[o]:"UseFIPS"},true]},
h={[m]:"booleanEquals",[n]:[{[o]:"UseDualStack"},true]},
i={[m]:"booleanEquals",[n]:[true,{[m]:"getAttr",[n]:[{[o]:b},"supportsFIPS"]}]},
j={[m]:"booleanEquals",[n]:[true,{[m]:"getAttr",[n]:[{[o]:b},"supportsDualStack"]}]},
k={},
l=[{[o]:"Region"}];
const _data={version:"1.0",parameters:{Region:{required:a,type:"String"},UseFIPS:f,UseDualStack:f},rules:[{conditions:[{[m]:"isSet",[n]:l},{[m]:"aws.partition",[n]:l,assign:b}],rules:[{conditions:[g,h],rules:[{conditions:[i,j],rules:[{endpoint:{url:"https://ecr-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:c}],type:d},{error:"FIPS and dualstack are enabled, but this partition does not support one or both",type:e}],type:d},{conditions:[h],rules:[{conditions:[j],rules:[{endpoint:{url:"https://ecr.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:k,headers:k},type:c}],type:d},{error:"Dualstack is enabled but this partition does not support dualstack",type:e}],type:d},{conditions:[g],rules:[{conditions:[i],rules:[{endpoint:{url:"https://ecr-fips.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:c}],type:d},{error:"FIPS is enabled but this partition does not support FIPS",type:e}],type:d},{endpoint:{url:"https://api.ecr.{Region}.{PartitionResult#dnsSuffix}",properties:k,headers:k},type:c}],type:d}]};
export const ruleSet: RuleSetObject = _data;
