// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/route53-recovery-control-config.json */

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
h={[v]:true,"default":false,"type":"Boolean"},
i={[v]:false,"type":"String"},
j={[y]:"Endpoint"},
k={[w]:c,[x]:[{[y]:"UseFIPS"},true]},
l={[w]:c,[x]:[{[y]:"UseDualStack"},true]},
m={},
n={[w]:"stringEquals",[x]:[{[w]:"getAttr",[x]:[{[y]:g},"name"]},"aws"]},
o={[w]:c,[x]:[{[y]:"UseFIPS"},false]},
p={[w]:c,[x]:[{[y]:"UseDualStack"},false]},
q={[z]:[{"name":"sigv4",[A]:"us-west-2"}]},
r={[w]:"getAttr",[x]:[{[y]:g},"supportsFIPS"]},
s={[w]:c,[x]:[true,{[w]:"getAttr",[x]:[{[y]:g},"supportsDualStack"]}]},
t={[z]:[{"name":"sigv4",[A]:"{PartitionResult#implicitGlobalRegion}"}]},
u=[{[y]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:h,UseFIPS:h,Endpoint:i,Region:i},rules:[{conditions:[{[w]:b,[x]:[j]}],rules:[{conditions:[k],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[l],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:j,properties:m,headers:m},type:e}],type:f}],type:f},{rules:[{conditions:[{[w]:b,[x]:u}],rules:[{conditions:[{[w]:"aws.partition",[x]:u,assign:g}],rules:[{conditions:[n,o,p],endpoint:{url:"https://route53-recovery-control-config.us-west-2.amazonaws.com",properties:q,headers:m},type:e},{conditions:[n,o,l],endpoint:{url:"https://arc-recovery-control-config.us-west-2.api.aws",properties:q,headers:m},type:e},{conditions:[k,l],rules:[{conditions:[{[w]:c,[x]:[a,r]},s],rules:[{endpoint:{url:"https://route53-recovery-control-config-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:t,headers:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[k,p],rules:[{conditions:[{[w]:c,[x]:[r,a]}],rules:[{endpoint:{url:"https://route53-recovery-control-config-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",properties:t,headers:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[o,l],rules:[{conditions:[s],rules:[{endpoint:{url:"https://route53-recovery-control-config.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:t,headers:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://route53-recovery-control-config.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",properties:t,headers:m},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
