// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/route-53.json */

const F="required",
G="fn",
H="argv",
I="ref",
J="properties",
K="headers",
L="authSchemes",
M="name",
N="signingRegion";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="sigv4",
j={[F]:true,"default":false,"type":"boolean"},
k={[F]:false,"type":"string"},
l={[I]:"Endpoint"},
m={[G]:c,[H]:[{[I]:"UseFIPS"},true]},
n={[G]:c,[H]:[{[I]:"UseDualStack"},true]},
o={},
p={[G]:h,[H]:[{[G]:"getAttr",[H]:[{[I]:g},"name"]},"aws"]},
q={[G]:"getAttr",[H]:[{[I]:g},"name"]},
r={[G]:c,[H]:[{[I]:"UseFIPS"},false]},
s={[G]:c,[H]:[{[I]:"UseDualStack"},false]},
t={[L]:[{[M]:i,[N]:"us-east-1"}]},
u={[G]:h,[H]:[q,"aws-cn"]},
v={[L]:[{[M]:i,[N]:"cn-northwest-1"}]},
w={[G]:h,[H]:[q,"aws-us-gov"]},
x={"url":"https://route53.us-gov.amazonaws.com",[J]:{[L]:[{[M]:i,[N]:"us-gov-west-1"}]},[K]:{}},
y={"url":"https://route53.us-gov.api.aws",[J]:{[L]:[{[M]:i,[N]:"us-gov-west-1"}]},[K]:{}},
z={[G]:h,[H]:[q,"aws-eusc"]},
A={[L]:[{[M]:i,[N]:"eusc-de-east-1"}]},
B={[G]:"getAttr",[H]:[{[I]:g},"supportsFIPS"]},
C={[G]:c,[H]:[true,{[G]:"getAttr",[H]:[{[I]:g},"supportsDualStack"]}]},
D={[L]:[{[M]:i,[N]:"{PartitionResult#implicitGlobalRegion}"}]},
E=[{[I]:"Region"}];
const _data={version:"1.0",parameters:{UseDualStack:j,UseFIPS:j,Endpoint:k,Region:k},rules:[{conditions:[{[G]:b,[H]:[l]}],rules:[{conditions:[m],error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{rules:[{conditions:[n],error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:l,[J]:o,[K]:o},type:e}],type:f}],type:f},{rules:[{conditions:[{[G]:b,[H]:E}],rules:[{conditions:[{[G]:"aws.partition",[H]:E,assign:g}],rules:[{conditions:[p,r,s],endpoint:{url:"https://route53.amazonaws.com",[J]:t,[K]:o},type:e},{conditions:[p,m,s],endpoint:{url:"https://route53-fips.amazonaws.com",[J]:t,[K]:o},type:e},{conditions:[p,r,n],endpoint:{url:"https://route53.global.api.aws",[J]:t,[K]:o},type:e},{conditions:[p,m,n],endpoint:{url:"https://route53-fips.global.api.aws",[J]:t,[K]:o},type:e},{conditions:[u,r,s],endpoint:{url:"https://route53.amazonaws.com.cn",[J]:v,[K]:o},type:e},{conditions:[u,r,n],endpoint:{url:"https://route53.global.api.amazonwebservices.com.cn",[J]:v,[K]:o},type:e},{conditions:[w,r,s],endpoint:x,type:e},{conditions:[w,m,s],endpoint:x,type:e},{conditions:[w,r,n],endpoint:y,type:e},{conditions:[w,m,n],endpoint:y,type:e},{conditions:[{[G]:h,[H]:[q,"aws-iso"]},r,s],endpoint:{url:"https://route53.c2s.ic.gov",[J]:{[L]:[{[M]:i,[N]:"us-iso-east-1"}]},[K]:o},type:e},{conditions:[{[G]:h,[H]:[q,"aws-iso-b"]},r,s],endpoint:{url:"https://route53.sc2s.sgov.gov",[J]:{[L]:[{[M]:i,[N]:"us-isob-east-1"}]},[K]:o},type:e},{conditions:[{[G]:h,[H]:[q,"aws-iso-e"]},r,s],endpoint:{url:"https://route53.cloud.adc-e.uk",[J]:{[L]:[{[M]:i,[N]:"eu-isoe-west-1"}]},[K]:o},type:e},{conditions:[{[G]:h,[H]:[q,"aws-iso-f"]},r,s],endpoint:{url:"https://route53.csp.hci.ic.gov",[J]:{[L]:[{[M]:i,[N]:"us-isof-south-1"}]},[K]:o},type:e},{conditions:[z,r,s],endpoint:{url:"https://route53.amazonaws.eu",[J]:A,[K]:o},type:e},{conditions:[z,r,n],endpoint:{url:"https://route53.global.api.amazonwebservices.eu",[J]:A,[K]:o},type:e},{conditions:[m,n],rules:[{conditions:[{[G]:c,[H]:[a,B]},C],rules:[{endpoint:{url:"https://route53-fips.{PartitionResult#dualStackDnsSuffix}",[J]:D,[K]:o},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:[m,s],rules:[{conditions:[{[G]:c,[H]:[B,a]}],rules:[{endpoint:{url:"https://route53-fips.{PartitionResult#dnsSuffix}",[J]:D,[K]:o},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:[r,n],rules:[{conditions:[C],rules:[{endpoint:{url:"https://route53.{PartitionResult#dualStackDnsSuffix}",[J]:D,[K]:o},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://route53.{PartitionResult#dnsSuffix}",[J]:D,[K]:o},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
