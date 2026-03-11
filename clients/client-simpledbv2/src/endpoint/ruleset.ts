// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/simpledbv2.json */

const t="required",
u="fn",
v="argv",
w="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[t]:true,"default":false,"type":"boolean"},
i={[t]:false,"type":"string"},
j={[w]:"Endpoint"},
k={[u]:c,[v]:[{[w]:"UseFIPS"},true]},
l={[u]:c,[v]:[{[w]:"UseDualStack"},true]},
m={},
n={[w]:"Region"},
o={[u]:c,[v]:[{[w]:"UseFIPS"},false]},
p={[u]:c,[v]:[{[w]:"UseDualStack"},false]},
q={[u]:"getAttr",[v]:[{[w]:g},"supportsFIPS"]},
r={[u]:c,[v]:[true,{[u]:"getAttr",[v]:[{[w]:g},"supportsDualStack"]}]},
s=[n];
const _data={version:"1.0",parameters:{UseDualStack:h,UseFIPS:h,Endpoint:i,Region:i},rules:[{conditions:[{[u]:b,[v]:[j]}],rules:[{conditions:[k],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[l],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:j,properties:m,headers:m},type:e}],type:f}],type:f},{rules:[{conditions:[{[u]:b,[v]:s}],rules:[{conditions:[{[u]:"aws.partition",[v]:s,assign:g}],rules:[{conditions:[{[u]:"stringEquals",[v]:[n,"us-east-1"]},o,p],endpoint:{url:"https://sdb.amazonaws.com",properties:m,headers:m},type:e},{conditions:[k,l],rules:[{conditions:[{[u]:c,[v]:[a,q]},r],rules:[{endpoint:{url:"https://sdb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[k,p],rules:[{conditions:[{[u]:c,[v]:[q,a]}],rules:[{endpoint:{url:"https://sdb-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[o,l],rules:[{conditions:[r],rules:[{endpoint:{url:"https://sdb.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://sdb.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
