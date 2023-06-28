// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/chime.json */

const w="required",
x="fn",
y="argv",
z="ref";
const a=false,
b="isSet",
c="tree",
d="booleanEquals",
e="error",
f="endpoint",
g="PartitionResult",
h="getAttr",
i={[w]:false,"type":"String"},
j={[w]:true,"default":false,"type":"Boolean"},
k={[z]:"Endpoint"},
l={[x]:d,[y]:[{[z]:"UseFIPS"},true]},
m={[z]:"UseFIPS"},
n={[x]:d,[y]:[{[z]:"UseDualStack"},true]},
o={[z]:"UseDualStack"},
p={},
q={[z]:g},
r={[x]:d,[y]:[true,{[x]:h,[y]:[q,"supportsFIPS"]}]},
s={[x]:d,[y]:[true,{[x]:h,[y]:[q,"supportsDualStack"]}]},
t=[l],
u=[n],
v=[{[z]:"Region"}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[x]:b,[y]:[k]}],type:c,rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{type:c,rules:[{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:e},{endpoint:{url:k,properties:p,headers:p},type:f}]}]},{type:c,rules:[{conditions:[{[x]:b,[y]:v}],type:c,rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:g}],type:c,rules:[{conditions:[{[x]:"stringEquals",[y]:[{[x]:h,[y]:[q,"name"]},"aws"]},{[x]:d,[y]:[m,a]},{[x]:d,[y]:[o,a]}],endpoint:{url:"https://chime.us-east-1.amazonaws.com",properties:{authSchemes:[{name:"sigv4",signingName:"chime",signingRegion:"us-east-1"}]},headers:p},type:f},{conditions:[l,n],type:c,rules:[{conditions:[r,s],type:c,rules:[{type:c,rules:[{endpoint:{url:"https://chime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:f}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:e}]},{conditions:t,type:c,rules:[{conditions:[r],type:c,rules:[{type:c,rules:[{endpoint:{url:"https://chime-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:f}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:e}]},{conditions:u,type:c,rules:[{conditions:[s],type:c,rules:[{type:c,rules:[{endpoint:{url:"https://chime.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:f}]}]},{error:"DualStack is enabled but this partition does not support DualStack",type:e}]},{type:c,rules:[{endpoint:{url:"https://chime.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:f}]}]}]},{error:"Invalid Configuration: Missing Region",type:e}]}]};
export const ruleSet: RuleSetObject = _data;
