// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/health.json */

const w="required",
x="fn",
y="argv",
z="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="sigv4",
j="health",
k={[w]:false,"type":"string"},
l={[w]:true,"default":false,"type":"boolean"},
m={[z]:"Endpoint"},
n={[x]:c,[y]:[{[z]:"UseFIPS"},true]},
o={[x]:c,[y]:[{[z]:"UseDualStack"},true]},
p={},
q={[z]:"Region"},
r={[x]:"getAttr",[y]:[{[z]:g},"supportsFIPS"]},
s={[x]:c,[y]:[true,{[x]:"getAttr",[y]:[{[z]:g},"supportsDualStack"]}]},
t=[n],
u=[o],
v=[q];
const _data={version:"1.0",parameters:{Region:k,UseDualStack:l,UseFIPS:l,Endpoint:k},rules:[{conditions:[{[x]:b,[y]:[m]}],rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:m,properties:p,headers:p},type:e}],type:f},{conditions:[{[x]:b,[y]:v}],rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:g}],rules:[{conditions:[n,o],rules:[{conditions:[{[x]:c,[y]:[a,r]},s],rules:[{endpoint:{url:"https://health-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:t,rules:[{conditions:[{[x]:c,[y]:[r,a]}],rules:[{endpoint:{url:"https://health-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:u,rules:[{conditions:[s],rules:[{endpoint:{url:"https://health.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{conditions:[{[x]:h,[y]:[q,"aws-global"]}],endpoint:{url:"https://global.health.amazonaws.com",properties:{authSchemes:[{name:i,signingName:j,signingRegion:"us-east-1"}]},headers:p},type:e},{conditions:[{[x]:h,[y]:[q,"aws-cn-global"]}],endpoint:{url:"https://global.health.amazonaws.com.cn",properties:{authSchemes:[{name:i,signingName:j,signingRegion:"cn-northwest-1"}]},headers:p},type:e},{endpoint:{url:"https://health.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
