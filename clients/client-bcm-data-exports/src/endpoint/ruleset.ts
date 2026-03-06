// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/bcm-data-exports.json */

const r="argv",
s="ref";
const a=true,
b=false,
c="isSet",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i="sigv4",
j={"required":false,"type":"string"},
k={[s]:"Endpoint"},
l={},
m={"fn":"getAttr",[r]:[{[s]:g},"name"]},
n={"fn":"booleanEquals",[r]:[{[s]:"UseFIPS"},false]},
o={"authSchemes":[{"name":i,"signingRegion":"{PartitionResult#implicitGlobalRegion}"}]},
p=[{"fn":"booleanEquals",[r]:[{[s]:"UseFIPS"},true]}],
q=[{[s]:"Region"}];
const _data={version:"1.0",parameters:{UseFIPS:{required:a,default:b,type:"boolean"},Endpoint:j,Region:j},rules:[{conditions:[{fn:c,[r]:[k]}],rules:[{conditions:p,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{endpoint:{url:k,properties:l,headers:l},type:e}],type:f},{rules:[{conditions:[{fn:c,[r]:q}],rules:[{conditions:[{fn:"aws.partition",[r]:q,assign:g}],rules:[{conditions:[{fn:h,[r]:[m,"aws-iso"]},n],endpoint:{url:"https://bcm-data-exports.us-iso-east-1.c2s.ic.gov",properties:{authSchemes:[{name:i,signingRegion:"us-iso-east-1"}]},headers:l},type:e},{conditions:[{fn:h,[r]:[m,"aws-iso-b"]},n],endpoint:{url:"https://bcm-data-exports.us-isob-east-1.sc2s.sgov.gov",properties:{authSchemes:[{name:i,signingRegion:"us-isob-east-1"}]},headers:l},type:e},{conditions:[{fn:h,[r]:[m,"aws-iso-e"]},n],endpoint:{url:"https://bcm-data-exports.eu-isoe-west-1.cloud.adc-e.uk",properties:{authSchemes:[{name:i,signingRegion:"eu-isoe-west-1"}]},headers:l},type:e},{conditions:[{fn:h,[r]:[m,"aws-iso-f"]},n],endpoint:{url:"https://bcm-data-exports.us-isof-south-1.csp.hci.ic.gov",properties:{authSchemes:[{name:i,signingRegion:"us-isof-south-1"}]},headers:l},type:e},{conditions:p,endpoint:{url:"https://bcm-data-exports-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:l},type:e},{endpoint:{url:"https://bcm-data-exports.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:l},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}],type:f}]};
export const ruleSet: RuleSetObject = _data;
