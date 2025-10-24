// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/billing.json */

const v="required",
w="fn",
x="argv",
y="ref",
z="authSchemes",
A="signingRegion";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[v]:true,"default":false,"type":"boolean"},
i={[v]:false,"type":"string"},
j={[y]:"Endpoint"},
k={[w]:c,[x]:[{[y]:"UseFIPS"},true]},
l={[w]:c,[x]:[{[y]:"UseDualStack"},true]},
m={},
n={[w]:"stringEquals",[x]:[{[w]:"getAttr",[x]:[{[y]:g},"name"]},"aws"]},
o={[w]:c,[x]:[{[y]:"UseFIPS"},false]},
p={"url":"https://billing.us-east-1.api.aws","properties":{[z]:[{"name":"sigv4",[A]:"us-east-1"}]},"headers":{}},
q={[w]:c,[x]:[{[y]:"UseDualStack"},false]},
r={[w]:"getAttr",[x]:[{[y]:g},"supportsFIPS"]},
s={[w]:c,[x]:[true,{[w]:"getAttr",[x]:[{[y]:g},"supportsDualStack"]}]},
t={[z]:[{"name":"sigv4",[A]:"{PartitionResult#implicitGlobalRegion}"}]},
u=[{[y]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:h,UseFIPS:h,Endpoint:i,Region:i},rules:[{conditions:[{[w]:b,[x]:[j]}],rules:[{conditions:[k],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[l],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:j,properties:m,headers:m},type:e}],type:f}],type:f},{rules:[{conditions:[{[w]:b,[x]:u}],rules:[{conditions:[{[w]:"aws.partition",[x]:u,assign:g}],rules:[{conditions:[n,o,l],endpoint:p,type:e},{conditions:[n,o,q],endpoint:p,type:e},{conditions:[k,l],rules:[{conditions:[{[w]:c,[x]:[a,r]},s],rules:[{endpoint:{url:"https://billing-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:t,headers:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[k,q],rules:[{conditions:[{[w]:c,[x]:[r,a]}],rules:[{endpoint:{url:"https://billing-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",properties:t,headers:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[o,l],rules:[{conditions:[s],rules:[{endpoint:{url:"https://billing.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:t,headers:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://billing.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",properties:t,headers:m},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
