// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/freetier.json */

const v="type",
w="argv",
x="ref";
const a=false,
b=true,
c="isSet",
d="booleanEquals",
e="error",
f="endpoint",
g="tree",
h="PartitionResult",
i="stringEquals",
j="getAttr",
k="sigv4",
l="freetier",
m={"required":false,[v]:"string"},
n={[x]:"Endpoint"},
o={},
p={[x]:h},
q={[e]:"FIPS is enabled but this partition does not support FIPS",[v]:e},
r={"conditions":[{"fn":i,[w]:[{[x]:"Region"},"aws-cn-global"]}],[f]:{"url":"https://freetier.cn-northwest-1.api.amazonwebservices.com.cn","properties":{"authSchemes":[{"name":k,"signingName":l,"signingRegion":"cn-northwest-1"}]},"headers":{}},[v]:f},
s=[{"fn":d,[w]:[{[x]:"UseFIPS"},true]}],
t=[{[x]:"Region"}],
u=[{"fn":d,[w]:[{"fn":j,[w]:[p,"supportsFIPS"]},true]}];
const _data={version:"1.0",parameters:{Region:m,UseFIPS:{required:b,default:a,[v]:"boolean"},Endpoint:m},rules:[{conditions:[{fn:c,[w]:[n]}],rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[v]:e},{endpoint:{url:n,properties:o,headers:o},[v]:f}],[v]:g},{conditions:[{fn:c,[w]:t}],rules:[{conditions:[{fn:"aws.partition",[w]:t,assign:h}],rules:[{conditions:[{fn:i,[w]:[{fn:j,[w]:[p,"name"]},"aws"]}],rules:[{conditions:s,rules:[{conditions:u,rules:[{endpoint:{url:"https://freetier-fips.{Region}.api.aws",properties:o,headers:o},[v]:f}],[v]:g},q],[v]:g},{endpoint:{url:"https://freetier.us-east-1.api.aws",properties:{authSchemes:[{name:k,signingName:l,signingRegion:"us-east-1"}]},headers:o},[v]:f}],[v]:g},{conditions:[{fn:d,[w]:[b,{fn:j,[w]:[p,"supportsDualStack"]}]}],rules:[{conditions:s,rules:[{conditions:u,rules:[{endpoint:{url:"https://freetier-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},[v]:f}],[v]:g},q],[v]:g},r,{endpoint:{url:"https://freetier.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:o,headers:o},[v]:f}],[v]:g},{conditions:s,rules:[{conditions:u,rules:[{endpoint:{url:"https://freetier-fips.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},[v]:f}],[v]:g},q],[v]:g},r,{endpoint:{url:"https://freetier.{Region}.{PartitionResult#dnsSuffix}",properties:o,headers:o},[v]:f}],[v]:g}],[v]:g},{error:"Invalid Configuration: Missing Region",[v]:e}]};
export const ruleSet: RuleSetObject = _data;
