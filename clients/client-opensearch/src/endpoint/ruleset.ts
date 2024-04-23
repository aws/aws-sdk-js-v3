// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/opensearch.json */

const v="required",
w="fn",
x="argv",
y="ref";
const a=true,
b="isSet",
c="booleanEquals",
d="error",
e="endpoint",
f="tree",
g="PartitionResult",
h="stringEquals",
i={[v]:false,"type":"String"},
j={[v]:true,"default":false,"type":"Boolean"},
k={[y]:"Endpoint"},
l={[w]:c,[x]:[{[y]:"UseFIPS"},true]},
m={[w]:c,[x]:[{[y]:"UseDualStack"},true]},
n={},
o={[w]:"getAttr",[x]:[{[y]:g},"supportsFIPS"]},
p={[w]:c,[x]:[true,{[w]:"getAttr",[x]:[{[y]:g},"supportsDualStack"]}]},
q={[w]:"getAttr",[x]:[{[y]:g},"name"]},
r={"url":"https://aos.{Region}.api.aws","properties":{},"headers":{}},
s=[l],
t=[m],
u=[{[y]:"Region"}];
const _data={version:"1.0",parameters:{Region:i,UseDualStack:j,UseFIPS:j,Endpoint:i},rules:[{conditions:[{[w]:b,[x]:[k]}],rules:[{conditions:s,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{conditions:t,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:d},{endpoint:{url:k,properties:n,headers:n},type:e}],type:f},{conditions:[{[w]:b,[x]:u}],rules:[{conditions:[{[w]:"aws.partition",[x]:u,assign:g}],rules:[{conditions:[l,m],rules:[{conditions:[{[w]:c,[x]:[a,o]},p],rules:[{endpoint:{url:"https://es-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:d}],type:f},{conditions:s,rules:[{conditions:[{[w]:c,[x]:[o,a]}],rules:[{endpoint:{url:"https://es-fips.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"FIPS is enabled but this partition does not support FIPS",type:d}],type:f},{conditions:t,rules:[{conditions:[p],rules:[{conditions:[{[w]:h,[x]:["aws",q]}],endpoint:r,type:e},{conditions:[{[w]:h,[x]:["aws-cn",q]}],endpoint:{url:"https://aos.{Region}.api.amazonwebservices.com.cn",properties:n,headers:n},type:e},{conditions:[{[w]:h,[x]:["aws-us-gov",q]}],endpoint:r,type:e},{endpoint:{url:"https://es.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:n,headers:n},type:e}],type:f},{error:"DualStack is enabled but this partition does not support DualStack",type:d}],type:f},{endpoint:{url:"https://es.{Region}.{PartitionResult#dnsSuffix}",properties:n,headers:n},type:e}],type:f}],type:f},{error:"Invalid Configuration: Missing Region",type:d}]};
export const ruleSet: RuleSetObject = _data;
