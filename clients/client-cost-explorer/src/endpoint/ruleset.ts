// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cost-explorer.json */

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
j={[w]:true,"default":false,"type":"Boolean"},
k={[w]:false,"type":"String"},
l={[z]:"Endpoint"},
m={[x]:c,[y]:[{[z]:"UseFIPS"},true]},
n={[x]:c,[y]:[{[z]:"UseDualStack"},true]},
o={},
p={[x]:"getAttr",[y]:[{[z]:g},"name"]},
q={[x]:c,[y]:[{[z]:"UseFIPS"},false]},
r={[x]:c,[y]:[{[z]:"UseDualStack"},false]},
s={[x]:"getAttr",[y]:[{[z]:g},"supportsFIPS"]},
t={[x]:c,[y]:[true,{[x]:"getAttr",[y]:[{[z]:g},"supportsDualStack"]}]},
u={"authSchemes":[{"name":i,"signingRegion":"{PartitionResult#implicitGlobalRegion}"}]},
v=[{[z]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:j,UseFIPS:j,Endpoint:k,Region:k},rules:[{conditions:[{[x]:b,[y]:[l]}],rules:[{conditions:[m],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[n],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:l,properties:o,headers:o},type:e}],type:f}],type:f},{rules:[{conditions:[{[x]:b,[y]:v}],rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:g}],rules:[{conditions:[{[x]:h,[y]:[p,"aws"]},q,n],endpoint:{url:"https://ce.us-east-1.api.aws",properties:{authSchemes:[{name:i,signingRegion:"us-east-1"}]},headers:o},type:e},{conditions:[{[x]:h,[y]:[p,"aws-cn"]},q,n],endpoint:{url:"https://ce.cn-northwest-1.api.amazonwebservices.com.cn",properties:{authSchemes:[{name:i,signingRegion:"cn-northwest-1"}]},headers:o},type:e},{conditions:[{[x]:h,[y]:[p,"aws-iso"]},q,r],endpoint:{url:"https://ce.us-iso-east-1.c2s.ic.gov",properties:{authSchemes:[{name:i,signingRegion:"us-iso-east-1"}]},headers:o},type:e},{conditions:[{[x]:h,[y]:[p,"aws-iso-b"]},q,r],endpoint:{url:"https://ce.us-isob-east-1.sc2s.sgov.gov",properties:{authSchemes:[{name:i,signingRegion:"us-isob-east-1"}]},headers:o},type:e},{conditions:[{[x]:h,[y]:[p,"aws-iso-e"]},q,r],endpoint:{url:"https://ce.eu-isoe-west-1.cloud.adc-e.uk",properties:{authSchemes:[{name:i,signingRegion:"eu-isoe-west-1"}]},headers:o},type:e},{conditions:[{[x]:h,[y]:[p,"aws-iso-f"]},q,r],endpoint:{url:"https://ce.us-isof-south-1.csp.hci.ic.gov",properties:{authSchemes:[{name:i,signingRegion:"us-isof-south-1"}]},headers:o},type:e},{conditions:[m,n],rules:[{conditions:[{[x]:c,[y]:[a,s]},t],rules:[{endpoint:{url:"https://ce-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:u,headers:o},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[m,r],rules:[{conditions:[{[x]:c,[y]:[s,a]}],rules:[{endpoint:{url:"https://ce-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",properties:u,headers:o},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[q,n],rules:[{conditions:[t],rules:[{endpoint:{url:"https://ce.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:u,headers:o},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://ce.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",properties:u,headers:o},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
