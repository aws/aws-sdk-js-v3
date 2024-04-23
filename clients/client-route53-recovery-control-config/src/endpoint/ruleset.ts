// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/route53-recovery-control-config.json */

const t="required",
u="fn",
v="argv",
w="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h={[t]:false,"type":"String"},
i={[t]:true,"default":false,"type":"Boolean"},
j={[w]:"Endpoint"},
k={[u]:c,[v]:[{[w]:"UseFIPS"},true]},
l={[u]:c,[v]:[{[w]:"UseDualStack"},true]},
m={},
n={[w]:"Region"},
o={[u]:"getAttr",[v]:[{[w]:g},"supportsFIPS"]},
p={[u]:c,[v]:[true,{[u]:"getAttr",[v]:[{[w]:g},"supportsDualStack"]}]},
q=[k],
r=[l],
s=[n];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h},rules:[{conditions:[{[u]:b,[v]:[j]}],rules:[{conditions:q,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:r,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:j,properties:m,headers:m},type:e}],type:f},{conditions:[{[u]:b,[v]:s}],rules:[{conditions:[{[u]:"aws.partition",[v]:s,assign:g}],rules:[{conditions:[k,l],rules:[{conditions:[{[u]:c,[v]:[a,o]},p],rules:[{endpoint:{url:"https://route53-recovery-control-config-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:q,rules:[{conditions:[{[u]:c,[v]:[o,a]}],rules:[{endpoint:{url:"https://route53-recovery-control-config-fips.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:r,rules:[{conditions:[p],rules:[{endpoint:{url:"https://route53-recovery-control-config.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:m,headers:m},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{conditions:[{[u]:"stringEquals",[v]:[n,"aws-global"]}],endpoint:{url:"https://route53-recovery-control-config.us-west-2.amazonaws.com",properties:{authSchemes:[{name:"sigv4",signingName:"route53-recovery-control-config",signingRegion:"us-west-2"}]},headers:m},type:e},{endpoint:{url:"https://route53-recovery-control-config.{Region}.{PartitionResult#dnsSuffix}",properties:m,headers:m},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
