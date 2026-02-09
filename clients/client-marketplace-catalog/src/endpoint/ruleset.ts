// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/marketplace-catalog.json */

const u="required",
v="fn",
w="argv",
x="ref";
const a=true,
b=false,
c="isSet",
d="booleanEquals",
e="error",
f="endpoint",
g="tree",
h="PartitionResult",
i={[u]:true,"default":false,"type":"boolean"},
j={[u]:false,"type":"string"},
k={[x]:"Endpoint"},
l={[v]:d,[w]:[{[x]:"UseFIPS"},true]},
m={[v]:d,[w]:[{[x]:"UseDualStack"},true]},
n={[x]:"UseDualStack"},
o={},
p={[x]:"Region"},
q={[v]:d,[w]:[{[x]:"UseFIPS"},false]},
r={[v]:"getAttr",[w]:[{[x]:h},"supportsFIPS"]},
s={[v]:d,[w]:[true,{[v]:"getAttr",[w]:[{[x]:h},"supportsDualStack"]}]},
t=[p];
const _data={version:"1.0",parameters:{UseDualStack:i,UseFIPS:i,Endpoint:j,Region:j},rules:[{conditions:[{[v]:c,[w]:[k]}],rules:[{conditions:[l],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{rules:[{conditions:[m],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:k,properties:o,headers:o},type:f}],type:g}],type:g},{rules:[{conditions:[{[v]:c,[w]:t}],rules:[{conditions:[{[v]:"aws.partition",[w]:t,assign:h}],rules:[{conditions:[{[v]:"stringEquals",[w]:[p,"us-east-1"]},q,m],endpoint:{url:"https://catalog-marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:f},{conditions:[l,m],rules:[{conditions:[{[v]:d,[w]:[a,r]},s],rules:[{endpoint:{url:"https://catalog.marketplace-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:f}],type:g},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}],type:g},{conditions:[l,{[v]:d,[w]:[n,b]}],rules:[{conditions:[{[v]:d,[w]:[r,a]}],rules:[{endpoint:{url:"https://catalog.marketplace-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:f}],type:g},{error:"FIPS is enabled but this partition does not support FIPS",type:e}],type:g},{conditions:[q,m],rules:[{conditions:[s],rules:[{endpoint:{url:"https://catalog.marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:f}],type:g},{error:"DualStack is enabled but this partition does not support DualStack",type:e}],type:g},{endpoint:{url:"https://catalog.marketplace.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:e}],type:g}]};
export const ruleSet: RuleSetObject = _data;
