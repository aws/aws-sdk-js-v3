// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/kinesis.json */

const D="required",
E="type",
F="rules",
G="conditions",
H="fn",
I="argv",
J="ref",
K="assign",
L="url",
M="properties",
N="headers";
const a="isSet",
b="stringEquals",
c="tree",
d="aws.parseArn",
e="arn",
f="endpoint",
g="error",
h={[D]:false,[E]:"String"},
i={[D]:true,"default":false,[E]:"Boolean"},
j={[H]:"not",[I]:[{[H]:a,[I]:[{[J]:"Endpoint"}]}]},
k={[J]:"Endpoint"},
l={[H]:a,[I]:[{[J]:"Region"}]},
m={[H]:"aws.partition",[I]:[{[J]:"Region"}],[K]:"PartitionResult"},
n={[H]:"not",[I]:[{[H]:b,[I]:[{[H]:"getAttr",[I]:[{[J]:"PartitionResult"},"name"]},"aws-iso"]}]},
o={[H]:"getAttr",[I]:[{[J]:"PartitionResult"},"name"]},
p={[H]:"not",[I]:[{[H]:b,[I]:[o,"aws-iso-b"]}]},
q={},
r={[g]:"FIPS is enabled but this partition does not support FIPS",[E]:g},
s={[g]:"DualStack is enabled but this partition does not support DualStack",[E]:g},
t={[g]:"Invalid ARN: Failed to parse ARN.",[E]:g},
u={[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:"PartitionResult"},"supportsFIPS"]}]},
v={[H]:"booleanEquals",[I]:[true,{[H]:"getAttr",[I]:[{[J]:"PartitionResult"},"supportsDualStack"]}]},
w=[{[J]:"StreamARN"}],
x=[{[H]:a,[I]:[k]}],
y=[{[G]:[{[H]:"isValidHostLabel",[I]:[{[H]:"getAttr",[I]:[{[J]:e},"accountId"]},false]}],[E]:c,[F]:[{[G]:[{[H]:"isValidHostLabel",[I]:[{[H]:"getAttr",[I]:[{[J]:e},"region"]},false]}],[E]:c,[F]:[{[G]:[{[H]:b,[I]:[{[H]:"getAttr",[I]:[{[J]:e},"service"]},"kinesis"]}],[E]:c,[F]:[{[G]:[{[H]:"getAttr",[I]:[{[J]:e},"resourceId[0]"],[K]:"arnType"},{[H]:"not",[I]:[{[H]:b,[I]:[{[J]:"arnType"},""]}]}],[E]:c,[F]:[{[G]:[{[H]:b,[I]:[{[J]:"arnType"},"stream"]}],[E]:c,[F]:[{[G]:[{[H]:b,[I]:[o,"{arn#partition}"]}],[E]:c,[F]:[{[G]:[{[H]:a,[I]:[{[J]:"OperationType"}]}],[E]:c,[F]:[{[G]:[{[H]:"booleanEquals",[I]:[{[J]:"UseFIPS"},true]},{[H]:"booleanEquals",[I]:[{[J]:"UseDualStack"},true]}],[E]:c,[F]:[{[G]:[{[H]:"booleanEquals",[I]:[{[H]:"getAttr",[I]:[{[J]:"PartitionResult"},"supportsFIPS"]},true]}],[E]:c,[F]:[{[G]:[{[H]:"booleanEquals",[I]:[{[H]:"getAttr",[I]:[{[J]:"PartitionResult"},"supportsDualStack"]},true]}],[E]:c,[F]:[{[f]:{[L]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[M]:{},[N]:{}},[E]:f}]},{[g]:"DualStack is enabled, but this partition does not support DualStack.",[E]:g}]},{[g]:"FIPS is enabled, but this partition does not support FIPS.",[E]:g}]},{[G]:[{[H]:"booleanEquals",[I]:[{[J]:"UseFIPS"},true]}],[E]:c,[F]:[{[G]:[{[H]:"booleanEquals",[I]:[{[H]:"getAttr",[I]:[{[J]:"PartitionResult"},"supportsFIPS"]},true]}],[E]:c,[F]:[{[f]:{[L]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[M]:{},[N]:{}},[E]:f}]},r]},{[G]:[{[H]:"booleanEquals",[I]:[{[J]:"UseDualStack"},true]}],[E]:c,[F]:[{[G]:[{[H]:"booleanEquals",[I]:[{[H]:"getAttr",[I]:[{[J]:"PartitionResult"},"supportsDualStack"]},true]}],[E]:c,[F]:[{[f]:{[L]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[M]:{},[N]:{}},[E]:f}]},s]},{[f]:{[L]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dnsSuffix}",[M]:{},[N]:{}},[E]:f}]},{[g]:"Operation Type is not set. Please contact service team for resolution.",[E]:g}]},{[g]:"Partition: {arn#partition} from ARN doesn't match with partition name: {PartitionResult#name}.",[E]:g}]},{[g]:"Invalid ARN: Kinesis ARNs don't support `{arnType}` arn types.",[E]:g}]},{[g]:"Invalid ARN: No ARN type specified",[E]:g}]},{[g]:"Invalid ARN: The ARN was not for the Kinesis service, found: {arn#service}.",[E]:g}]},{[g]:"Invalid ARN: Invalid region.",[E]:g}]},{[g]:"Invalid ARN: Invalid account id.",[E]:g}],
z=[{[H]:"booleanEquals",[I]:[{[J]:"UseFIPS"},true]},{[H]:"booleanEquals",[I]:[{[J]:"UseDualStack"},true]}],
A=[{[H]:"booleanEquals",[I]:[{[J]:"UseFIPS"},true]}],
B=[{[H]:"booleanEquals",[I]:[{[J]:"UseDualStack"},true]}],
C=[{[J]:"ConsumerARN"}];
const _data={version:"1.0",parameters:{Region:h,UseDualStack:i,UseFIPS:i,Endpoint:h,StreamARN:h,OperationType:h,ConsumerARN:h},[F]:[{[G]:[{[H]:a,[I]:w},j,l,m,n,p],[E]:c,[F]:[{[G]:[{[H]:d,[I]:w,[K]:e}],[E]:c,[F]:y},t]},{[G]:[{[H]:a,[I]:C},j,l,m,n,p],[E]:c,[F]:[{[G]:[{[H]:d,[I]:C,[K]:e}],[E]:c,[F]:y},t]},{[G]:x,[E]:c,[F]:[{[G]:A,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[E]:g},{[G]:B,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[E]:g},{endpoint:{[L]:k,[M]:q,[N]:q},[E]:f}]},{[G]:[l],[E]:c,[F]:[{[G]:[m],[E]:c,[F]:[{[G]:z,[E]:c,[F]:[{[G]:[u,v],[E]:c,[F]:[{endpoint:{[L]:"https://kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[M]:q,[N]:q},[E]:f}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[E]:g}]},{[G]:A,[E]:c,[F]:[{[G]:[u],[E]:c,[F]:[{[G]:[{[H]:b,[I]:["aws-us-gov",o]}],endpoint:{[L]:"https://kinesis.{Region}.amazonaws.com",[M]:q,[N]:q},[E]:f},{endpoint:{[L]:"https://kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[M]:q,[N]:q},[E]:f}]},r]},{[G]:B,[E]:c,[F]:[{[G]:[v],[E]:c,[F]:[{endpoint:{[L]:"https://kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[M]:q,[N]:q},[E]:f}]},s]},{endpoint:{[L]:"https://kinesis.{Region}.{PartitionResult#dnsSuffix}",[M]:q,[N]:q},[E]:f}]}]},{error:"Invalid Configuration: Missing Region",[E]:g}]};
export const ruleSet: RuleSetObject = _data;
