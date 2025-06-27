// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/billing.json */

const l="ref";
const a=true,
b=false,
c="isSet",
d="error",
e="endpoint",
f="tree",
g={"required":false,"type":"String"},
h={[l]:"Endpoint"},
i={"authSchemes":[{"name":"sigv4","signingRegion":"{PartitionResult#implicitGlobalRegion}"}]},
j=[{"fn":"booleanEquals","argv":[{[l]:"UseFIPS"},true]}],
k=[{[l]:"Region"}];
const _data={version:"1.0",parameters:{UseFIPS:{required:a,default:b,type:"Boolean"},Endpoint:g,Region:g},rules:[{conditions:[{fn:c,argv:[h]}],rules:[{conditions:j,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{endpoint:{url:h,properties:{},headers:{}},type:e}],type:f},{rules:[{conditions:[{fn:c,argv:k}],rules:[{conditions:[{fn:"aws.partition",argv:k,assign:"PartitionResult"}],rules:[{conditions:j,endpoint:{url:"https://billing-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:i,headers:{}},type:e},{endpoint:{url:"https://billing.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:i,headers:{}},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
