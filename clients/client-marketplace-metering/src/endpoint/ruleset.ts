// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/marketplace-metering.json */

const w="required",
x="fn",
y="argv",
z="ref";
const a=true,
b=false,
c="isSet",
d="booleanEquals",
e="error",
f="endpoint",
g="tree",
h="PartitionResult",
i="stringEquals",
j={[w]:true,"default":false,"type":"boolean"},
k={[w]:false,"type":"string"},
l={[z]:"Endpoint"},
m={[x]:d,[y]:[{[z]:"UseFIPS"},true]},
n={[x]:d,[y]:[{[z]:"UseDualStack"},true]},
o={[z]:"UseDualStack"},
p={},
q={[x]:"getAttr",[y]:[{[z]:h},"name"]},
r={[x]:d,[y]:[{[z]:"UseFIPS"},false]},
s={"url":"https://metering-marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}","properties":{},"headers":{}},
t={[x]:"getAttr",[y]:[{[z]:h},"supportsFIPS"]},
u={[x]:d,[y]:[true,{[x]:"getAttr",[y]:[{[z]:h},"supportsDualStack"]}]},
v=[{[z]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:j,UseFIPS:j,Endpoint:k,Region:k},rules:[{conditions:[{[x]:c,[y]:[l]}],rules:[{conditions:[m],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{rules:[{conditions:[n],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:l,properties:p,headers:p},type:f}],type:g}],type:g},{rules:[{conditions:[{[x]:c,[y]:v}],rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:h}],rules:[{conditions:[{[x]:i,[y]:[q,"aws"]},r,n],endpoint:s,type:f},{conditions:[{[x]:i,[y]:[q,"aws-cn"]},r,n],endpoint:s,type:f},{conditions:[{[x]:i,[y]:[q,"aws-us-gov"]},r,n],endpoint:s,type:f},{conditions:[m,n],rules:[{conditions:[{[x]:d,[y]:[a,t]},u],rules:[{endpoint:{url:"https://metering.marketplace-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:f}],type:g},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}],type:g},{conditions:[m,{[x]:d,[y]:[o,b]}],rules:[{conditions:[{[x]:d,[y]:[t,a]}],rules:[{endpoint:{url:"https://metering.marketplace-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:f}],type:g},{error:"FIPS is enabled but this partition does not support FIPS",type:e}],type:g},{conditions:[r,n],rules:[{conditions:[u],rules:[{endpoint:{url:"https://metering.marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:f}],type:g},{error:"DualStack is enabled but this partition does not support DualStack",type:e}],type:g},{endpoint:{url:"https://metering.marketplace.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:e}],type:g}]};
export const ruleSet: RuleSetObject = _data;
