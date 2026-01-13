// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/arc-region-switch.json */

const w="fn",
x="argv",
y="ref";
const a=true,
b=false,
c="boolean",
d="sigv4",
e="arc-region-switch",
f="endpoint",
g="tree",
h="error",
i={"required":false,"type":"string"},
j={[w]:"isSet",[x]:[{[y]:"UseControlPlaneEndpoint"}]},
k={[w]:"booleanEquals",[x]:[{[y]:"UseControlPlaneEndpoint"},true]},
l={[w]:"isSet",[x]:[{[y]:"Region"}]},
m={[w]:"not",[x]:[{[w]:"booleanEquals",[x]:[{[y]:"UseFIPS"},true]}]},
n={[w]:"booleanEquals",[x]:[{[y]:"UseFIPS"},true]},
o={[w]:"not",[x]:[{[w]:"isSet",[x]:[{[y]:"Endpoint"}]}]},
p={[y]:"Endpoint"},
q={[w]:"aws.partition",[x]:[{[y]:"Region"}],"assign":"PartitionResult"},
r={[w]:"stringEquals",[x]:[{[w]:"getAttr",[x]:[{[y]:"PartitionResult"},"name"]},"aws-cn"]},
s={},
t={"authSchemes":[{"name":d,"signingName":e,"signingRegion":"{PartitionResult#implicitGlobalRegion}"}]},
u=[n],
v=[{[w]:"isSet",[x]:[p]}];
const _data={version:"1.0",parameters:{UseFIPS:{required:a,default:b,type:c},Endpoint:i,Region:i,UseControlPlaneEndpoint:{required:b,type:c}},rules:[{conditions:[j,k,l,m,o,q,r],rules:[{endpoint:{url:"https://arc-region-switch-control-plane.cn-north-1.{PartitionResult#dualStackDnsSuffix}",properties:{authSchemes:[{name:d,signingName:e,signingRegion:"cn-north-1"}]},headers:s},type:f}],type:g},{conditions:[o,j,k,l,n,q],rules:[{conditions:[r],error:"Invalid Configuration: FIPS is not supported in this partition",type:h},{rules:[{endpoint:{url:"https://arc-region-switch-control-plane-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:t,headers:s},type:f}],type:g}],type:g},{conditions:[j,k,l,m,o,q],rules:[{endpoint:{url:"https://arc-region-switch-control-plane.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:t,headers:s},type:f}],type:g},{conditions:v,rules:[{conditions:u,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:h},{endpoint:{url:p,properties:s,headers:s},type:f}],type:g},{rules:[{conditions:[l],rules:[{conditions:[q],rules:[{conditions:u,endpoint:{url:"https://arc-region-switch-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:s,headers:s},type:f},{endpoint:{url:"https://arc-region-switch.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:s,headers:s},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:h}],type:g}]};
export const ruleSet: RuleSetObject = _data;
