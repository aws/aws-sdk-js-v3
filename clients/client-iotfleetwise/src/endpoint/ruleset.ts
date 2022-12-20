// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/iotfleetwise.json */

const r="fn",
s="argv",
t="ref";
const a=true,
b=false,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="error",
h="endpoint",
i={[t]:"Endpoint"},
j={[r]:"booleanEquals",[s]:[{[t]:"UseFIPS"},true]},
k={[r]:"booleanEquals",[s]:[{[t]:"UseDualStack"},true]},
l={},
m={[r]:"booleanEquals",[s]:[true,{[r]:"getAttr",[s]:[{[t]:e},"supportsFIPS"]}]},
n={[r]:"booleanEquals",[s]:[true,{[r]:"getAttr",[s]:[{[t]:e},"supportsDualStack"]}]},
o=[j],
p=[],
q=[k];
const _data={version:"1.0",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",type:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:a,default:b,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",type:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",type:d},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",type:c}},rules:[{conditions:[{[r]:"aws.partition",[s]:[{[t]:"Region"}],assign:e}],type:f,rules:[{conditions:[{[r]:"isSet",[s]:[i]}],type:f,rules:[{conditions:o,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:g},{conditions:p,type:f,rules:[{conditions:q,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:g},{conditions:p,endpoint:{url:i,properties:l,headers:l},type:h}]}]},{conditions:[j,k],type:f,rules:[{conditions:[m,n],type:f,rules:[{conditions:p,endpoint:{url:"https://iotfleetwise-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:h}]},{conditions:p,error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:g}]},{conditions:o,type:f,rules:[{conditions:[m],type:f,rules:[{conditions:p,type:f,rules:[{conditions:p,endpoint:{url:"https://iotfleetwise-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:h}]}]},{conditions:p,error:"FIPS is enabled but this partition does not support FIPS",type:g}]},{conditions:q,type:f,rules:[{conditions:[n],type:f,rules:[{conditions:p,endpoint:{url:"https://iotfleetwise.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:h}]},{conditions:p,error:"DualStack is enabled but this partition does not support DualStack",type:g}]},{conditions:p,endpoint:{url:"https://iotfleetwise.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:h}]}]};
export const ruleSet: RuleSetObject = _data;
