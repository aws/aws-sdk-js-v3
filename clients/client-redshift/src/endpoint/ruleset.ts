// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/redshift.json */

const s="fn",
t="argv",
u="ref";
const a=false,
b=true,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i={[u]:"Endpoint"},
j={[s]:"booleanEquals",[t]:[{[u]:"UseFIPS"},true]},
k={[s]:"booleanEquals",[t]:[{[u]:"UseDualStack"},true]},
l={},
m={[s]:"booleanEquals",[t]:[true,{[s]:"getAttr",[t]:[{[u]:e},"supportsFIPS"]}]},
n={[s]:"booleanEquals",[t]:[true,{[s]:"getAttr",[t]:[{[u]:e},"supportsDualStack"]}]},
o=[i],
p=[j],
q=[],
r=[k];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:b,default:a,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:b,default:a,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:a,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[s]:"aws.partition",[t]:[{[u]:"Region"}],assign:e}],type:f,rules:[{conditions:[{[s]:"isSet",[t]:o},{[s]:"parseURL",[t]:o,assign:"url"}],type:f,rules:[{conditions:p,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:q,type:f,rules:[{conditions:r,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:q,endpoint:{url:i,properties:l,headers:l},type:h}]}]},{conditions:[j,k],type:f,rules:[{conditions:[m,n],type:f,rules:[{conditions:q,endpoint:{url:"https://redshift-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:h}]},{conditions:q,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:p,type:f,rules:[{conditions:[m],type:f,rules:[{conditions:q,type:f,rules:[{conditions:q,endpoint:{url:"https://redshift-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:h}]}]},{conditions:q,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:r,type:f,rules:[{conditions:[n],type:f,rules:[{conditions:q,endpoint:{url:"https://redshift.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:h}]},{conditions:q,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:q,endpoint:{url:"https://redshift.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:h}]}]};
export const ruleSet: RuleSetObject = _data;
