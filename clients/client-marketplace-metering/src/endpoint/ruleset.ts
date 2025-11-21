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
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i={[v]:true,"default":false,"type":"boolean"},
j={[v]:false,"type":"string"},
k={[y]:"Endpoint"},
l={[w]:c,[x]:[{[y]:"UseFIPS"},true]},
m={[w]:c,[x]:[{[y]:"UseDualStack"},true]},
n={},
o={[w]:"getAttr",[x]:[{[y]:g},"name"]},
p={[w]:c,[x]:[{[y]:"UseFIPS"},false]},
q={"url":"https://metering-marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}","properties":{},"headers":{}},
r={[w]:c,[x]:[{[y]:"UseDualStack"},false]},
s={[w]:"getAttr",[x]:[{[y]:g},"supportsFIPS"]},
t={[w]:c,[x]:[true,{[w]:"getAttr",[x]:[{[y]:g},"supportsDualStack"]}]},
u=[{[y]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:i,UseFIPS:i,Endpoint:j,Region:j},rules:[{conditions:[{[w]:b,[x]:[k]}],rules:[{conditions:[l],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[m],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:k,properties:n,headers:n},type:e}],type:f}],type:f},{rules:[{conditions:[{[w]:b,[x]:u}],rules:[{conditions:[{[w]:"aws.partition",[x]:u,assign:g}],rules:[{conditions:[{[w]:h,[x]:[o,"aws"]},p,m],endpoint:q,type:e},{conditions:[{[w]:h,[x]:[o,"aws-cn"]},p,m],endpoint:q,type:e},{conditions:[{[w]:h,[x]:[o,"aws-us-gov"]},p,m],endpoint:q,type:e},{conditions:[{[w]:h,[x]:[o,"aws-eusc"]},p,r],endpoint:{url:"https://metering-marketplace.{Region}.amazonaws.eu",properties:n,headers:n},type:e},{conditions:[l,m],rules:[{conditions:[{[w]:c,[x]:[a,s]},t],rules:[{endpoint:{url:"https://metering.marketplace-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[l,r],rules:[{conditions:[{[w]:c,[x]:[s,a]}],rules:[{endpoint:{url:"https://metering.marketplace-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[p,m],rules:[{conditions:[t],rules:[{endpoint:{url:"https://metering.marketplace.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://metering.marketplace.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
