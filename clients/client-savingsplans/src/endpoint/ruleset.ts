// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/savingsplans.json */

const D="required",
E="type",
F="fn",
G="argv",
H="ref",
I="properties",
J="authSchemes",
K="signingName",
L="signingRegion",
M="headers";
const a=false,
b=true,
c="not",
d="booleanEquals",
e="endpoint",
f="tree",
g="error",
h={[D]:false,[E]:"string"},
i={[D]:true,"default":false,[E]:"boolean"},
j={[H]:"Endpoint"},
k={[F]:d,[G]:[{[H]:"UseFIPS"},false]},
l={[F]:d,[G]:[{[H]:"UseDualStack"},true]},
m={[H]:"UseDualStack"},
n={[F]:"isSet",[G]:[{[H]:"Region"}]},
o={[F]:"aws.partition",[G]:[{[H]:"Region"}],"assign":"PartitionResult"},
p={[F]:"stringEquals",[G]:[{[F]:"getAttr",[G]:[{[H]:"PartitionResult"},"name"]},"aws"]},
q={"url":"https://savingsplans.global.api.aws",[I]:{[J]:[{"name":"sigv4",[K]:"savingsplans",[L]:"us-east-1"}]},[M]:{}},
r={[J]:[{"name":"sigv4",[K]:"savingsplans",[L]:"us-east-1"}]},
s={},
t={[F]:"getAttr",[G]:[{[H]:"PartitionResult"},"supportsDualStack"]},
u={[g]:"DualStack is enabled but this partition does not support DualStack",[E]:g},
v={[F]:d,[G]:[{[H]:"UseFIPS"},true]},
w={[F]:"getAttr",[G]:[{[H]:"PartitionResult"},"supportsFIPS"]},
x={[F]:d,[G]:[true,t]},
y=[{[F]:"isSet",[G]:[j]}],
z=[{[e]:{"url":"https://savingsplans.{Region}.{PartitionResult#dualStackDnsSuffix}",[I]:{},[M]:{}},[E]:e}],
A=[n],
B=[v],
C=[l];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h},rules:[{conditions:[{[F]:c,[G]:y},k,l],rules:[{conditions:[n,o],rules:[{conditions:[p],endpoint:q,[E]:e},{conditions:[{[F]:d,[G]:[t,b]}],rules:z,[E]:f},u],[E]:f},{conditions:[{[F]:c,[G]:A}],endpoint:q,[E]:e}],[E]:f},{conditions:y,rules:[{conditions:B,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[E]:g},{conditions:C,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[E]:g},{endpoint:{url:j,[I]:s,[M]:s},[E]:e}],[E]:f},{conditions:A,rules:[{conditions:[o],rules:[{conditions:[p,k,{[F]:d,[G]:[m,a]}],endpoint:{url:"https://savingsplans.amazonaws.com",[I]:r,[M]:s},[E]:e},{conditions:[v,l],rules:[{conditions:[{[F]:d,[G]:[b,w]},x],rules:[{endpoint:{url:"https://savingsplans-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[I]:s,[M]:s},[E]:e}],[E]:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[E]:g}],[E]:f},{conditions:B,rules:[{conditions:[{[F]:d,[G]:[w,b]}],rules:[{endpoint:{url:"https://savingsplans-fips.{Region}.{PartitionResult#dnsSuffix}",[I]:s,[M]:s},[E]:e}],[E]:f},{error:"FIPS is enabled but this partition does not support FIPS",[E]:g}],[E]:f},{conditions:C,rules:[{conditions:[x],rules:z,[E]:f},u],[E]:f},{endpoint:{url:"https://savingsplans.{Region}.{PartitionResult#dnsSuffix}",[I]:s,[M]:s},[E]:e}],[E]:f}],[E]:f},{error:"Invalid Configuration: Missing Region",[E]:g}]};
export const ruleSet: RuleSetObject = _data;
