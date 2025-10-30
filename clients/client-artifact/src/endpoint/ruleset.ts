// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/artifact.json */

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
m={[x]:"UseFIPS"},
n={[v]:d,[w]:[{[x]:"UseDualStack"},true]},
o={[x]:"UseDualStack"},
p={},
q={[v]:"getAttr",[w]:[{[x]:h},"supportsFIPS"]},
r={[v]:d,[w]:[true,{[v]:"getAttr",[w]:[{[x]:h},"supportsDualStack"]}]},
s={"authSchemes":[{"name":"sigv4","signingRegion":"{PartitionResult#implicitGlobalRegion}"}]},
t=[{[x]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:i,UseFIPS:i,Endpoint:j,Region:j},rules:[{conditions:[{[v]:c,[w]:[k]}],rules:[{conditions:[l],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{rules:[{conditions:[n],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:k,properties:p,headers:p},type:f}],type:g}],type:g},{rules:[{conditions:[{[v]:c,[w]:t}],rules:[{conditions:[{[v]:"aws.partition",[w]:t,assign:h}],rules:[{conditions:[l,n],rules:[{conditions:[{[v]:d,[w]:[a,q]},r],rules:[{endpoint:{url:"https://artifact-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:s,headers:p},type:f}],type:g},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}],type:g},{conditions:[l,{[v]:d,[w]:[o,b]}],rules:[{conditions:[{[v]:d,[w]:[q,a]}],rules:[{endpoint:{url:"https://artifact-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",properties:s,headers:p},type:f}],type:g},{error:"FIPS is enabled but this partition does not support FIPS",type:e}],type:g},{conditions:[{[v]:d,[w]:[m,b]},n],rules:[{conditions:[r],rules:[{endpoint:{url:"https://artifact.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:s,headers:p},type:f}],type:g},{error:"DualStack is enabled but this partition does not support DualStack",type:e}],type:g},{endpoint:{url:"https://artifact.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",properties:s,headers:p},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:e}],type:g}]};
export const ruleSet: RuleSetObject = _data;
