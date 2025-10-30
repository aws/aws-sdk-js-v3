// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/eks-auth.json */

const r="argv",
s="ref";
const a=false,
b=true,
c="isSet",
d="booleanEquals",
e="error",
f="endpoint",
g="tree",
h="PartitionResult",
i="getAttr",
j={"required":false,"type":"string"},
k={[s]:"Endpoint"},
l={},
m={[s]:h},
n={[e]:"FIPS is enabled but this partition does not support FIPS","type":e},
o=[{"fn":d,[r]:[{[s]:"UseFIPS"},true]}],
p=[{[s]:"Region"}],
q=[{"fn":d,[r]:[{"fn":i,[r]:[m,"supportsFIPS"]},true]}];
const _data={version:"1.0",parameters:{Region:j,UseFIPS:{required:b,default:a,type:"boolean"},Endpoint:j},rules:[{conditions:[{fn:c,[r]:[k]}],rules:[{conditions:o,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:e},{endpoint:{url:k,properties:l,headers:l},type:f}],type:g},{conditions:[{fn:c,[r]:p}],rules:[{conditions:[{fn:"aws.partition",[r]:p,assign:h}],rules:[{conditions:[{fn:d,[r]:[b,{fn:i,[r]:[m,"supportsDualStack"]}]}],rules:[{conditions:o,rules:[{conditions:q,rules:[{endpoint:{url:"https://eks-auth-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:f}],type:g},n],type:g},{endpoint:{url:"https://eks-auth.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:f}],type:g},{conditions:o,rules:[{conditions:q,rules:[{endpoint:{url:"https://eks-auth-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:f}],type:g},n],type:g},{endpoint:{url:"https://eks-auth.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:e}]};
export const ruleSet: RuleSetObject = _data;
