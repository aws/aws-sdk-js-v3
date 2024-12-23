// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/ecr-public.json */

const a=false,
b=true,
c="PartitionResult",
d="booleanEquals",
e="error",
f="endpoint",
g="tree",
h={"required":true,"default":false,"type":"Boolean"},
i=[{"ref":"Region"}];
const _data={version:"1.0",parameters:{Region:{required:a,type:"String"},UseFIPS:h,UseDualStack:h},rules:[{conditions:[{fn:"isSet",argv:i},{fn:"aws.partition",argv:i,assign:c}],rules:[{conditions:[{fn:d,argv:[{ref:"UseFIPS"},b]}],error:"ECR Public does not support FIPS",type:e},{conditions:[{fn:d,argv:[{ref:"UseDualStack"},b]}],rules:[{conditions:[{fn:d,argv:[b,{fn:"getAttr",argv:[{ref:c},"supportsDualStack"]}]}],rules:[{endpoint:{url:"https://ecr-public.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:{},headers:{}},type:f}],type:g},{error:"Dualstack is enabled but this partition does not support dualstack",type:e}],type:g},{endpoint:{url:"https://api.ecr-public.{Region}.{PartitionResult#dnsSuffix}",properties:{},headers:{}},type:f}],type:g}]};
export const ruleSet: RuleSetObject = _data;
