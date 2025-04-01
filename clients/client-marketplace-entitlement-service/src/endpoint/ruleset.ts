// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/marketplace-entitlement-service.json */

const u="required",
v="fn",
w="argv",
x="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i={[u]:true,"default":false,"type":"Boolean"},
j={[u]:false,"type":"String"},
k={[x]:"Endpoint"},
l={[v]:c,[w]:[{[x]:"UseFIPS"},true]},
m={[v]:c,[w]:[{[x]:"UseDualStack"},true]},
n={},
o={[v]:"getAttr",[w]:[{[x]:g},"name"]},
p={[v]:c,[w]:[{[x]:"UseFIPS"},false]},
q={[v]:c,[w]:[{[x]:"UseDualStack"},false]},
r={[v]:"getAttr",[w]:[{[x]:g},"supportsFIPS"]},
s={[v]:c,[w]:[true,{[v]:"getAttr",[w]:[{[x]:g},"supportsDualStack"]}]},
t=[{[x]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:i,UseFIPS:i,Endpoint:j,Region:j},rules:[{conditions:[{[v]:b,[w]:[k]}],rules:[{conditions:[l],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[m],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:k,properties:n,headers:n},type:e}],type:f}],type:f},{rules:[{conditions:[{[v]:b,[w]:t}],rules:[{conditions:[{[v]:"aws.partition",[w]:t,assign:g}],rules:[{conditions:[{[v]:h,[w]:[o,"aws"]},p,m],endpoint:{url:"https://entitlement-marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e},{conditions:[{[v]:h,[w]:[o,"aws-cn"]},p,q],endpoint:{url:"https://entitlement-marketplace.{Region}.amazonaws.com.cn",properties:n,headers:n},type:e},{conditions:[l,m],rules:[{conditions:[{[v]:c,[w]:[a,r]},s],rules:[{endpoint:{url:"https://entitlement.marketplace-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[l,q],rules:[{conditions:[{[v]:c,[w]:[r,a]}],rules:[{endpoint:{url:"https://entitlement.marketplace-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[p,m],rules:[{conditions:[s],rules:[{endpoint:{url:"https://entitlement.marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://entitlement.marketplace.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
