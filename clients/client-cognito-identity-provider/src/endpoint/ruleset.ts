// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/cognito-identity-provider.json */

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
h="getAttr",
i="stringEquals",
j={[w]:false,"type":"String"},
k={[w]:true,"default":false,"type":"Boolean"},
l={[z]:"Endpoint"},
m={[x]:c,[y]:[{[z]:"UseFIPS"},true]},
n={[x]:c,[y]:[{[z]:"UseDualStack"},true]},
o={},
p={[z]:"Region"},
q={[x]:h,[y]:[{[z]:g},"supportsFIPS"]},
r={[z]:g},
s={[x]:c,[y]:[true,{[x]:h,[y]:[r,"supportsDualStack"]}]},
t=[m],
u=[n],
v=[p];
const _data={version:"1.0",parameters:{Region:j,UseDualStack:k,UseFIPS:k,Endpoint:j},rules:[{conditions:[{[x]:b,[y]:[l]}],rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:u,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:l,properties:o,headers:o},type:e}],type:f},{conditions:[{[x]:b,[y]:v}],rules:[{conditions:[{[x]:"aws.partition",[y]:v,assign:g}],rules:[{conditions:[m,n],rules:[{conditions:[{[x]:c,[y]:[a,q]},s],rules:[{conditions:[{[x]:i,[y]:[p,"us-east-1"]}],endpoint:{url:"https://cognito-idp-fips.us-east-1.amazonaws.com",properties:o,headers:o},type:e},{conditions:[{[x]:i,[y]:[p,"us-east-2"]}],endpoint:{url:"https://cognito-idp-fips.us-east-2.amazonaws.com",properties:o,headers:o},type:e},{conditions:[{[x]:i,[y]:[p,"us-west-1"]}],endpoint:{url:"https://cognito-idp-fips.us-west-1.amazonaws.com",properties:o,headers:o},type:e},{conditions:[{[x]:i,[y]:[p,"us-west-2"]}],endpoint:{url:"https://cognito-idp-fips.us-west-2.amazonaws.com",properties:o,headers:o},type:e},{endpoint:{url:"https://cognito-idp-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:t,rules:[{conditions:[{[x]:c,[y]:[q,a]}],rules:[{endpoint:{url:"https://cognito-idp-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:u,rules:[{conditions:[s],rules:[{conditions:[{[x]:i,[y]:["aws",{[x]:h,[y]:[r,"name"]}]}],endpoint:{url:"https://cognito-idp.{Region}.amazonaws.com",properties:o,headers:o},type:e},{endpoint:{url:"https://cognito-idp.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://cognito-idp.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
