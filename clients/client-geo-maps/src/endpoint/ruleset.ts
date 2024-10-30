// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/geo-maps.json */

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
h={[u]:true,"default":false,"type":"Boolean"},
i={[u]:false,"type":"String"},
j={[x]:"Endpoint"},
k={[v]:c,[w]:[{[x]:"UseFIPS"},true]},
l={[v]:c,[w]:[{[x]:"UseDualStack"},true]},
m={},
n={[v]:"stringEquals",[w]:[{[v]:"getAttr",[w]:[{[x]:g},"name"]},"aws"]},
o={[v]:c,[w]:[{[x]:"UseFIPS"},false]},
p={[v]:c,[w]:[{[x]:"UseDualStack"},false]},
q={[v]:"stringEquals",[w]:[{[v]:"getAttr",[w]:[{[x]:g},"name"]},"aws-us-gov"]},
r={[v]:"getAttr",[w]:[{[x]:g},"supportsFIPS"]},
s={[v]:c,[w]:[true,{[v]:"getAttr",[w]:[{[x]:g},"supportsDualStack"]}]},
t=[{[x]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:h,UseFIPS:h,Endpoint:i,Region:i},rules:[{conditions:[{[v]:b,[w]:[j]}],rules:[{conditions:[k],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[l],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:j,properties:m,headers:m},type:e}],type:f}],type:f},{rules:[{conditions:[{[v]:b,[w]:t}],rules:[{conditions:[{[v]:"aws.partition",[w]:t,assign:g}],rules:[{conditions:[n,o,p],endpoint:{url:"https://maps.geo.{Region}.{PartitionResult#dnsSuffix}/v2",properties:m,headers:m},type:e},{conditions:[n,k,l],endpoint:{url:"https://maps.geo-fips.{Region}.{PartitionResult#dualStackDnsSuffix}/v2",properties:m,headers:m},type:e},{conditions:[n,k,p],endpoint:{url:"https://maps.geo-fips.{Region}.{PartitionResult#dnsSuffix}/v2",properties:m,headers:m},type:e},{conditions:[n,o,l],endpoint:{url:"https://maps.geo.{Region}.{PartitionResult#dualStackDnsSuffix}/v2",properties:m,headers:m},type:e},{conditions:[q,o,p],endpoint:{url:"https://maps.geo.{Region}.us-gov.{PartitionResult#dnsSuffix}/v2",properties:m,headers:m},type:e},{conditions:[q,k,l],endpoint:{url:"https://maps.geo-fips.{Region}.us-gov.{PartitionResult#dualStackDnsSuffix}/v2",properties:m,headers:m},type:e},{conditions:[q,k,p],endpoint:{url:"https://maps.geo-fips.{Region}.us-gov.{PartitionResult#dnsSuffix}/v2",properties:m,headers:m},type:e},{conditions:[q,o,l],endpoint:{url:"https://maps.geo.{Region}.us-gov.{PartitionResult#dualStackDnsSuffix}/v2",properties:m,headers:m},type:e},{conditions:[k,l],rules:[{conditions:[{[v]:c,[w]:[a,r]},s],rules:[{endpoint:{url:"https://geo-maps-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[k,p],rules:[{conditions:[{[v]:c,[w]:[r,a]}],rules:[{endpoint:{url:"https://geo-maps-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[o,l],rules:[{conditions:[s],rules:[{endpoint:{url:"https://geo-maps.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://geo-maps.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
