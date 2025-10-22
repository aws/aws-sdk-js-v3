// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/rtbfabric.json */

const t="required",
u="fn",
v="argv",
w="ref";
const a=true,
b=false,
c="isSet",
d="booleanEquals",
e="error",
f="endpoint",
g="tree",
h="PartitionResult",
i={[t]:true,"default":false,"type":"boolean"},
j={[t]:false,"type":"string"},
k={[w]:"Endpoint"},
l={[u]:d,[v]:[{[w]:"UseFIPS"},true]},
m={[w]:"UseFIPS"},
n={[u]:d,[v]:[{[w]:"UseDualStack"},true]},
o={[w]:"UseDualStack"},
p={},
q={[u]:"getAttr",[v]:[{[w]:h},"supportsFIPS"]},
r={[u]:d,[v]:[true,{[u]:"getAttr",[v]:[{[w]:h},"supportsDualStack"]}]},
s=[{[w]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:i,UseFIPS:i,Endpoint:j,Region:j},rules:[{conditions:[{[u]:c,[v]:[k]}],rules:[{conditions:[l],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{rules:[{conditions:[n],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:k,properties:p,headers:p},type:f}],type:g}],type:g},{rules:[{conditions:[{[u]:c,[v]:s}],rules:[{conditions:[{[u]:"aws.partition",[v]:s,assign:h}],rules:[{conditions:[l,n],rules:[{conditions:[{[u]:d,[v]:[a,q]},r],rules:[{endpoint:{url:"https://rtbfabric-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:f}],type:g},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}],type:g},{conditions:[l,{[u]:d,[v]:[o,b]}],rules:[{conditions:[{[u]:d,[v]:[q,a]}],rules:[{endpoint:{url:"https://rtbfabric-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:f}],type:g},{error:"FIPS is enabled but this partition does not support FIPS",type:e}],type:g},{conditions:[{[u]:d,[v]:[m,b]},n],rules:[{conditions:[r],rules:[{endpoint:{url:"https://rtbfabric.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:f}],type:g},{error:"DualStack is enabled but this partition does not support DualStack",type:e}],type:g},{endpoint:{url:"https://rtbfabric.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:e}],type:g}]};
export const ruleSet: RuleSetObject = _data;
