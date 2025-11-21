// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/marketplace-entitlement-service.json */

const w="required",
x="fn",
y="argv",
z="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i={[w]:true,"default":false,"type":"boolean"},
j={[w]:false,"type":"string"},
k={[z]:"Endpoint"},
l={[x]:c,[y]:[{[z]:"UseFIPS"},true]},
m={[x]:c,[y]:[{[z]:"UseDualStack"},true]},
n={},
o={[x]:"getAttr",[y]:[{[z]:g},"name"]},
p={[x]:c,[y]:[{[z]:"UseFIPS"},false]},
q={"url":"https://entitlement-marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}","properties":{},"headers":{}},
r={[x]:h,[y]:[o,"aws-cn"]},
s={[x]:c,[y]:[{[z]:"UseDualStack"},false]},
t={[x]:"getAttr",[y]:[{[z]:g},"supportsFIPS"]},
u={[x]:c,[y]:[true,{[x]:"getAttr",[y]:[{[z]:g},"supportsDualStack"]}]},
v=[{[z]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:i,UseFIPS:i,Endpoint:j,Region:j},rules:[{conditions:[{[x]:b,[y]:[k]}],rules:[{conditions:[l],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[m],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:k,properties:n,headers:n},type:e}],type:f}],type:f},{rules:[{conditions:[{[x]:b,[y]:v}],rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:g}],rules:[{conditions:[{[x]:h,[y]:[o,"aws"]},p,m],endpoint:q,type:e},{conditions:[r,p,s],endpoint:{url:"https://entitlement-marketplace.{Region}.amazonaws.com.cn",properties:n,headers:n},type:e},{conditions:[r,p,m],endpoint:q,type:e},{conditions:[{[x]:h,[y]:[o,"aws-eusc"]},p,s],endpoint:{url:"https://entitlement-marketplace.{Region}.amazonaws.eu",properties:n,headers:n},type:e},{conditions:[l,m],rules:[{conditions:[{[x]:c,[y]:[a,t]},u],rules:[{endpoint:{url:"https://entitlement.marketplace-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[l,s],rules:[{conditions:[{[x]:c,[y]:[t,a]}],rules:[{endpoint:{url:"https://entitlement.marketplace-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[p,m],rules:[{conditions:[u],rules:[{endpoint:{url:"https://entitlement.marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://entitlement.marketplace.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
