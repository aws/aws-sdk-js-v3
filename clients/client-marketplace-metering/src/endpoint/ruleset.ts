// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/marketplace-metering.json */

const v="required",
w="fn",
x="argv",
y="ref";
const a=true,
b=false,
c="isSet",
d="booleanEquals",
e="error",
f="endpoint",
g="tree",
h="PartitionResult",
i="getAttr",
j={[v]:true,"default":false,"type":"Boolean"},
k={[v]:false,"type":"String"},
l={[y]:"Endpoint"},
m={[w]:d,[x]:[{[y]:"UseFIPS"},true]},
n={[w]:d,[x]:[{[y]:"UseDualStack"},true]},
o={[y]:"UseDualStack"},
p={},
q={[y]:h},
r={[w]:d,[x]:[{[y]:"UseFIPS"},false]},
s={[w]:i,[x]:[q,"supportsFIPS"]},
t={[w]:d,[x]:[true,{[w]:i,[x]:[q,"supportsDualStack"]}]},
u=[{[y]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:j,UseFIPS:j,Endpoint:k,Region:k},rules:[{conditions:[{[w]:c,[x]:[l]}],rules:[{conditions:[m],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{rules:[{conditions:[n],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:l,properties:p,headers:p},type:f}],type:g}],type:g},{rules:[{conditions:[{[w]:c,[x]:u}],rules:[{conditions:[{[w]:"aws.partition",[x]:u,assign:h}],rules:[{conditions:[{[w]:"stringEquals",[x]:[{[w]:i,[x]:[q,"name"]},"aws"]},r,n],endpoint:{url:"https://metering-marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:f},{conditions:[m,n],rules:[{conditions:[{[w]:d,[x]:[a,s]},t],rules:[{endpoint:{url:"https://metering.marketplace-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:f}],type:g},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}],type:g},{conditions:[m,{[w]:d,[x]:[o,b]}],rules:[{conditions:[{[w]:d,[x]:[s,a]}],rules:[{endpoint:{url:"https://metering.marketplace-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:f}],type:g},{error:"FIPS is enabled but this partition does not support FIPS",type:e}],type:g},{conditions:[r,n],rules:[{conditions:[t],rules:[{endpoint:{url:"https://metering.marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:f}],type:g},{error:"DualStack is enabled but this partition does not support DualStack",type:e}],type:g},{endpoint:{url:"https://metering.marketplace.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:e}],type:g}]};
export const ruleSet: RuleSetObject = _data;
