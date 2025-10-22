// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/iam.json */

const H="required",
I="fn",
J="argv",
K="ref",
L="properties",
M="headers",
N="authSchemes",
O="name",
P="signingRegion";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="sigv4",
j={[H]:true,"default":false,"type":"boolean"},
k={[H]:false,"type":"string"},
l={[K]:"Endpoint"},
m={[I]:c,[J]:[{[K]:"UseFIPS"},true]},
n={[I]:c,[J]:[{[K]:"UseDualStack"},true]},
o={},
p={[I]:h,[J]:[{[I]:"getAttr",[J]:[{[K]:g},"name"]},"aws"]},
q={[I]:"getAttr",[J]:[{[K]:g},"name"]},
r={[I]:c,[J]:[{[K]:"UseFIPS"},false]},
s={[N]:[{[O]:i,[P]:"us-east-1"}]},
t={[I]:h,[J]:[q,"aws-cn"]},
u={[N]:[{[O]:i,[P]:"cn-north-1"}]},
v={[I]:c,[J]:[{[K]:"UseDualStack"},false]},
w={[I]:h,[J]:[q,"aws-us-gov"]},
x={"url":"https://iam.us-gov.api.aws",[L]:{[N]:[{[O]:i,[P]:"us-gov-west-1"}]},[M]:{}},
y={"url":"https://iam.us-gov.amazonaws.com",[L]:{[N]:[{[O]:i,[P]:"us-gov-west-1"}]},[M]:{}},
z={[I]:h,[J]:[q,"aws-iso"]},
A={[N]:[{[O]:i,[P]:"us-iso-east-1"}]},
B={[I]:h,[J]:[q,"aws-iso-b"]},
C={[N]:[{[O]:i,[P]:"us-isob-east-1"}]},
D={[I]:"getAttr",[J]:[{[K]:g},"supportsFIPS"]},
E={[I]:c,[J]:[true,{[I]:"getAttr",[J]:[{[K]:g},"supportsDualStack"]}]},
F={[N]:[{[O]:i,[P]:"{PartitionResult#implicitGlobalRegion}"}]},
G=[{[K]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:j,UseFIPS:j,Endpoint:k,Region:k},rules:[{conditions:[{[I]:b,[J]:[l]}],rules:[{conditions:[m],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[n],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:l,[L]:o,[M]:o},type:e}],type:f}],type:f},{rules:[{conditions:[{[I]:b,[J]:G}],rules:[{conditions:[{[I]:"aws.partition",[J]:G,assign:g}],rules:[{conditions:[p,r,n],endpoint:{url:"https://iam.global.api.aws",[L]:s,[M]:o},type:e},{conditions:[p,m,n],endpoint:{url:"https://iam-fips.global.api.aws",[L]:s,[M]:o},type:e},{conditions:[t,r,n],endpoint:{url:"https://iam.global.api.amazonwebservices.com.cn",[L]:u,[M]:o},type:e},{conditions:[t,r,v],endpoint:{url:"https://iam.cn-north-1.amazonaws.com.cn",[L]:u,[M]:o},type:e},{conditions:[w,r,n],endpoint:x,type:e},{conditions:[w,m,n],endpoint:x,type:e},{conditions:[w,r,v],endpoint:y,type:e},{conditions:[w,m,v],endpoint:y,type:e},{conditions:[z,r,v],endpoint:{url:"https://iam.us-iso-east-1.c2s.ic.gov",[L]:A,[M]:o},type:e},{conditions:[z,m,v],endpoint:{url:"https://iam-fips.us-iso-east-1.c2s.ic.gov",[L]:A,[M]:o},type:e},{conditions:[B,r,v],endpoint:{url:"https://iam.us-isob-east-1.sc2s.sgov.gov",[L]:C,[M]:o},type:e},{conditions:[B,m,v],endpoint:{url:"https://iam-fips.us-isob-east-1.sc2s.sgov.gov",[L]:C,[M]:o},type:e},{conditions:[{[I]:h,[J]:[q,"aws-iso-e"]},r,v],endpoint:{url:"https://iam.eu-isoe-west-1.cloud.adc-e.uk",[L]:{[N]:[{[O]:i,[P]:"eu-isoe-west-1"}]},[M]:o},type:e},{conditions:[{[I]:h,[J]:[q,"aws-iso-f"]},r,v],endpoint:{url:"https://iam.us-isof-south-1.csp.hci.ic.gov",[L]:{[N]:[{[O]:i,[P]:"us-isof-south-1"}]},[M]:o},type:e},{conditions:[{[I]:h,[J]:[q,"aws-eusc"]},r,v],endpoint:{url:"https://iam.eusc-de-east-1.amazonaws.eu",[L]:{[N]:[{[O]:i,[P]:"eusc-de-east-1"}]},[M]:o},type:e},{conditions:[m,n],rules:[{conditions:[{[I]:c,[J]:[a,D]},E],rules:[{endpoint:{url:"https://iam-fips.{PartitionResult#dualStackDnsSuffix}",[L]:F,[M]:o},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[m,v],rules:[{conditions:[{[I]:c,[J]:[D,a]}],rules:[{endpoint:{url:"https://iam-fips.{PartitionResult#dnsSuffix}",[L]:F,[M]:o},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[r,n],rules:[{conditions:[E],rules:[{endpoint:{url:"https://iam.{PartitionResult#dualStackDnsSuffix}",[L]:F,[M]:o},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://iam.{PartitionResult#dnsSuffix}",[L]:F,[M]:o},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
