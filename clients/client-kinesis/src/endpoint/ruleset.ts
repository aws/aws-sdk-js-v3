// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/kinesis.json */

const C="required",
D="type",
E="rules",
F="conditions",
G="fn",
H="argv",
I="ref",
J="url",
K="properties",
L="headers";
const a=true,
b="String",
c="PartitionResult",
d="tree",
e="isSet",
f="aws.parseArn",
g="arn",
h="endpoint",
i="error",
j={[C]:true,"default":false,[D]:"Boolean"},
k={[C]:false,[D]:b},
l={[G]:"not",[H]:[{[G]:e,[H]:[{[I]:"Endpoint"}]}]},
m={[I]:"Endpoint"},
n={[G]:"not",[H]:[{[G]:"stringEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:c},"name"]},"aws-iso"]}]},
o={[G]:"not",[H]:[{[G]:"stringEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:c},"name"]},"aws-iso-b"]}]},
p={},
q={[i]:"FIPS is enabled but this partition does not support FIPS",[D]:i},
r={[i]:"DualStack is enabled but this partition does not support DualStack",[D]:i},
s={[i]:"Invalid ARN: Failed to parse ARN.",[D]:i},
t={[G]:"booleanEquals",[H]:[true,{[G]:"getAttr",[H]:[{[I]:c},"supportsFIPS"]}]},
u={[G]:"booleanEquals",[H]:[true,{[G]:"getAttr",[H]:[{[I]:c},"supportsDualStack"]}]},
v=[{[I]:"StreamARN"}],
w=[{[G]:e,[H]:[m]}],
x=[{[D]:d,[E]:[{[F]:[{[G]:"isValidHostLabel",[H]:[{[G]:"getAttr",[H]:[{[I]:g},"accountId"]},false]}],[D]:d,[E]:[{[D]:d,[E]:[{[F]:[{[G]:"isValidHostLabel",[H]:[{[G]:"getAttr",[H]:[{[I]:g},"region"]},false]}],[D]:d,[E]:[{[D]:d,[E]:[{[F]:[{[G]:"stringEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:g},"service"]},"kinesis"]}],[D]:d,[E]:[{[D]:d,[E]:[{[F]:[{[G]:"getAttr",[H]:[{[I]:g},"resourceId[0]"],"assign":"arnType"},{[G]:"not",[H]:[{[G]:"stringEquals",[H]:[{[I]:"arnType"},""]}]}],[D]:d,[E]:[{[D]:d,[E]:[{[F]:[{[G]:"stringEquals",[H]:[{[I]:"arnType"},"stream"]}],[D]:d,[E]:[{[D]:d,[E]:[{[F]:[{[G]:"stringEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:c},"name"]},"{arn#partition}"]}],[D]:d,[E]:[{[D]:d,[E]:[{[F]:[{[G]:e,[H]:[{[I]:"OperationType"}]}],[D]:d,[E]:[{[D]:d,[E]:[{[F]:[{[G]:"booleanEquals",[H]:[{[I]:"UseFIPS"},true]},{[G]:"booleanEquals",[H]:[{[I]:"UseDualStack"},true]}],[D]:d,[E]:[{[F]:[{[G]:"booleanEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:c},"supportsFIPS"]},true]}],[D]:d,[E]:[{[D]:d,[E]:[{[F]:[{[G]:"booleanEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:c},"supportsDualStack"]},true]}],[D]:d,[E]:[{[h]:{[J]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[K]:{},[L]:{}},[D]:h}]},{[i]:"DualStack is enabled, but this partition does not support DualStack.",[D]:i}]}]},{[i]:"FIPS is enabled, but this partition does not support FIPS.",[D]:i}]},{[F]:[{[G]:"booleanEquals",[H]:[{[I]:"UseFIPS"},true]}],[D]:d,[E]:[{[F]:[{[G]:"booleanEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:c},"supportsFIPS"]},true]}],[D]:d,[E]:[{[h]:{[J]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[K]:{},[L]:{}},[D]:h}]},q]},{[F]:[{[G]:"booleanEquals",[H]:[{[I]:"UseDualStack"},true]}],[D]:d,[E]:[{[F]:[{[G]:"booleanEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:c},"supportsDualStack"]},true]}],[D]:d,[E]:[{[h]:{[J]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[K]:{},[L]:{}},[D]:h}]},r]},{[h]:{[J]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dnsSuffix}",[K]:{},[L]:{}},[D]:h}]}]},{[i]:"Operation Type is not set. Please contact service team for resolution.",[D]:i}]}]},{[i]:"Partition: {arn#partition} from ARN doesn't match with partition name: {PartitionResult#name}.",[D]:i}]}]},{[i]:"Invalid ARN: Kinesis ARNs don't support `{arnType}` arn types.",[D]:i}]}]},{[i]:"Invalid ARN: No ARN type specified",[D]:i}]}]},{[i]:"Invalid ARN: The ARN was not for the Kinesis service, found: {arn#service}.",[D]:i}]}]},{[i]:"Invalid ARN: Invalid region.",[D]:i}]}]},{[i]:"Invalid ARN: Invalid account id.",[D]:i}]}],
y=[{[G]:"booleanEquals",[H]:[{[I]:"UseFIPS"},true]},{[G]:"booleanEquals",[H]:[{[I]:"UseDualStack"},true]}],
z=[{[G]:"booleanEquals",[H]:[{[I]:"UseFIPS"},true]}],
A=[{[G]:"booleanEquals",[H]:[{[I]:"UseDualStack"},true]}],
B=[{[I]:"ConsumerARN"}];
const _data={version:"1.3",parameters:{Region:{[C]:a,[D]:b},UseDualStack:j,UseFIPS:j,Endpoint:k,StreamARN:k,OperationType:k,ConsumerARN:k},[E]:[{[F]:[{[G]:"aws.partition",[H]:[{[I]:"Region"}],assign:c}],[D]:d,[E]:[{[F]:[{[G]:e,[H]:v},l,n,o],[D]:d,[E]:[{[F]:[{[G]:f,[H]:v,assign:g}],[D]:d,[E]:x},s]},{[F]:[{[G]:e,[H]:B},l,n,o],[D]:d,[E]:[{[F]:[{[G]:f,[H]:B,assign:g}],[D]:d,[E]:x},s]},{[F]:w,[D]:d,[E]:[{[F]:z,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[D]:i},{[D]:d,[E]:[{[F]:A,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[D]:i},{endpoint:{[J]:m,[K]:p,[L]:p},[D]:h}]}]},{[F]:y,[D]:d,[E]:[{[F]:[t,u],[D]:d,[E]:[{endpoint:{[J]:"https://kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[K]:p,[L]:p},[D]:h}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[D]:i}]},{[F]:z,[D]:d,[E]:[{[F]:[t],[D]:d,[E]:[{[D]:d,[E]:[{endpoint:{[J]:"https://kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[K]:p,[L]:p},[D]:h}]}]},q]},{[F]:A,[D]:d,[E]:[{[F]:[u],[D]:d,[E]:[{endpoint:{[J]:"https://kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[K]:p,[L]:p},[D]:h}]},r]},{endpoint:{[J]:"https://kinesis.{Region}.{PartitionResult#dnsSuffix}",[K]:p,[L]:p},[D]:h}]}]};
export const ruleSet: RuleSetObject = _data;
