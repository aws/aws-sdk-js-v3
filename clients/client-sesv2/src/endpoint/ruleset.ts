// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/sesv2.json */

const z="required",
A="type",
B="fn",
C="argv",
D="ref";
const a=false,
b=true,
c="isSet",
d="booleanEquals",
e="endpoint",
f="tree",
g="error",
h={[z]:false,[A]:"String"},
i={[z]:true,"default":false,[A]:"Boolean"},
j={[D]:"EndpointId"},
k={[B]:c,[C]:[{[D]:"Region"}]},
l={[B]:"aws.partition",[C]:[{[D]:"Region"}],"assign":"PartitionResult"},
m={[D]:"UseFIPS"},
n={[D]:"Endpoint"},
o={"authSchemes":[{"name":"sigv4a","signingName":"ses","signingRegionSet":["*"]}]},
p={},
q={[B]:d,[C]:[{[D]:"UseDualStack"},true]},
r={[B]:d,[C]:[true,{[B]:"getAttr",[C]:[{[D]:"PartitionResult"},"supportsDualStack"]}]},
s={[g]:"DualStack is enabled but this partition does not support DualStack",[A]:g},
t={[B]:d,[C]:[m,true]},
u={[B]:"getAttr",[C]:[{[D]:"PartitionResult"},"supportsFIPS"]},
v=[{[B]:c,[C]:[n]}],
w=[q],
x=[r],
y=[t];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h,EndpointId:h},rules:[{conditions:[{[B]:c,[C]:[j]},k,l],rules:[{conditions:[{[B]:"isValidHostLabel",[C]:[j,b]}],rules:[{conditions:[{[B]:d,[C]:[m,a]}],rules:[{conditions:v,endpoint:{url:n,properties:o,headers:p},[A]:e},{conditions:w,rules:[{conditions:x,rules:[{endpoint:{url:"https://{EndpointId}.endpoints.email.global.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:p},[A]:e}],[A]:f},s],[A]:f},{endpoint:{url:"https://{EndpointId}.endpoints.email.{PartitionResult#dnsSuffix}",properties:o,headers:p},[A]:e}],[A]:f},{error:"Invalid Configuration: FIPS is not supported with multi-region endpoints",[A]:g}],[A]:f},{error:"EndpointId must be a valid host label",[A]:g}],[A]:f},{conditions:v,rules:[{conditions:y,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[A]:g},{conditions:w,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[A]:g},{endpoint:{url:n,properties:p,headers:p},[A]:e}],[A]:f},{conditions:[k],rules:[{conditions:[l],rules:[{conditions:[t,q],rules:[{conditions:[{[B]:d,[C]:[b,u]},r],rules:[{endpoint:{url:"https://email-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},[A]:e}],[A]:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[A]:g}],[A]:f},{conditions:y,rules:[{conditions:[{[B]:d,[C]:[u,b]}],rules:[{endpoint:{url:"https://email-fips.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},[A]:e}],[A]:f},{error:"FIPS is enabled but this partition does not support FIPS",[A]:g}],[A]:f},{conditions:w,rules:[{conditions:x,rules:[{endpoint:{url:"https://email.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:p,headers:p},[A]:e}],[A]:f},s],[A]:f},{endpoint:{url:"https://email.{Region}.{PartitionResult#dnsSuffix}",properties:p,headers:p},[A]:e}],[A]:f}],[A]:f},{error:"Invalid Configuration: Missing Region",[A]:g}]};
export const ruleSet: RuleSetObject = _data;
