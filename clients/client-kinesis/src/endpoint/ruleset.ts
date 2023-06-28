// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/kinesis.json */

const F="required",
G="type",
H="rules",
I="conditions",
J="fn",
K="argv",
L="ref",
M="url",
N="properties",
O="headers";
const a=true,
b="String",
c="PartitionResult",
d="tree",
e="isSet",
f="stringEquals",
g="aws.parseArn",
h="arn",
i="endpoint",
j="error",
k={[F]:true,"default":false,[G]:"Boolean"},
l={[F]:false,[G]:b},
m={[L]:"Region"},
n={[J]:"not",[K]:[{[J]:e,[K]:[{[L]:"Endpoint"}]}]},
o={[L]:"Endpoint"},
p={[J]:"not",[K]:[{[J]:f,[K]:[{[J]:"getAttr",[K]:[{[L]:c},"name"]},"aws-iso"]}]},
q={[J]:"getAttr",[K]:[{[L]:c},"name"]},
r={[J]:"not",[K]:[{[J]:f,[K]:[q,"aws-iso-b"]}]},
s={},
t={[j]:"FIPS is enabled but this partition does not support FIPS",[G]:j},
u={[j]:"DualStack is enabled but this partition does not support DualStack",[G]:j},
v={[j]:"Invalid ARN: Failed to parse ARN.",[G]:j},
w={[J]:"booleanEquals",[K]:[true,{[J]:"getAttr",[K]:[{[L]:c},"supportsFIPS"]}]},
x={[J]:"booleanEquals",[K]:[true,{[J]:"getAttr",[K]:[{[L]:c},"supportsDualStack"]}]},
y=[{[L]:"StreamARN"}],
z=[{[J]:e,[K]:[o]}],
A=[{[G]:d,[H]:[{[I]:[{[J]:"isValidHostLabel",[K]:[{[J]:"getAttr",[K]:[{[L]:h},"accountId"]},false]}],[G]:d,[H]:[{[G]:d,[H]:[{[I]:[{[J]:"isValidHostLabel",[K]:[{[J]:"getAttr",[K]:[{[L]:h},"region"]},false]}],[G]:d,[H]:[{[G]:d,[H]:[{[I]:[{[J]:f,[K]:[{[J]:"getAttr",[K]:[{[L]:h},"service"]},"kinesis"]}],[G]:d,[H]:[{[G]:d,[H]:[{[I]:[{[J]:"getAttr",[K]:[{[L]:h},"resourceId[0]"],"assign":"arnType"},{[J]:"not",[K]:[{[J]:f,[K]:[{[L]:"arnType"},""]}]}],[G]:d,[H]:[{[G]:d,[H]:[{[I]:[{[J]:f,[K]:[{[L]:"arnType"},"stream"]}],[G]:d,[H]:[{[G]:d,[H]:[{[I]:[{[J]:f,[K]:[q,"{arn#partition}"]}],[G]:d,[H]:[{[G]:d,[H]:[{[I]:[{[J]:e,[K]:[{[L]:"OperationType"}]}],[G]:d,[H]:[{[G]:d,[H]:[{[I]:[{[J]:"booleanEquals",[K]:[{[L]:"UseFIPS"},true]},{[J]:"booleanEquals",[K]:[{[L]:"UseDualStack"},true]}],[G]:d,[H]:[{[I]:[{[J]:"booleanEquals",[K]:[{[J]:"getAttr",[K]:[{[L]:c},"supportsFIPS"]},true]}],[G]:d,[H]:[{[G]:d,[H]:[{[I]:[{[J]:"booleanEquals",[K]:[{[J]:"getAttr",[K]:[{[L]:c},"supportsDualStack"]},true]}],[G]:d,[H]:[{[i]:{[M]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[N]:{},[O]:{}},[G]:i}]},{[j]:"DualStack is enabled, but this partition does not support DualStack.",[G]:j}]}]},{[j]:"FIPS is enabled, but this partition does not support FIPS.",[G]:j}]},{[I]:[{[J]:"booleanEquals",[K]:[{[L]:"UseFIPS"},true]}],[G]:d,[H]:[{[I]:[{[J]:"booleanEquals",[K]:[{[J]:"getAttr",[K]:[{[L]:c},"supportsFIPS"]},true]}],[G]:d,[H]:[{[i]:{[M]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[N]:{},[O]:{}},[G]:i}]},t]},{[I]:[{[J]:"booleanEquals",[K]:[{[L]:"UseDualStack"},true]}],[G]:d,[H]:[{[I]:[{[J]:"booleanEquals",[K]:[{[J]:"getAttr",[K]:[{[L]:c},"supportsDualStack"]},true]}],[G]:d,[H]:[{[i]:{[M]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[N]:{},[O]:{}},[G]:i}]},u]},{[i]:{[M]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dnsSuffix}",[N]:{},[O]:{}},[G]:i}]}]},{[j]:"Operation Type is not set. Please contact service team for resolution.",[G]:j}]}]},{[j]:"Partition: {arn#partition} from ARN doesn't match with partition name: {PartitionResult#name}.",[G]:j}]}]},{[j]:"Invalid ARN: Kinesis ARNs don't support `{arnType}` arn types.",[G]:j}]}]},{[j]:"Invalid ARN: No ARN type specified",[G]:j}]}]},{[j]:"Invalid ARN: The ARN was not for the Kinesis service, found: {arn#service}.",[G]:j}]}]},{[j]:"Invalid ARN: Invalid region.",[G]:j}]}]},{[j]:"Invalid ARN: Invalid account id.",[G]:j}]}],
B=[{[J]:"booleanEquals",[K]:[{[L]:"UseFIPS"},true]},{[J]:"booleanEquals",[K]:[{[L]:"UseDualStack"},true]}],
C=[{[J]:"booleanEquals",[K]:[{[L]:"UseFIPS"},true]}],
D=[{[J]:"booleanEquals",[K]:[{[L]:"UseDualStack"},true]}],
E=[{[L]:"ConsumerARN"}];
const _data={version:"1.3",parameters:{Region:{[F]:a,[G]:b},UseDualStack:k,UseFIPS:k,Endpoint:l,StreamARN:l,OperationType:l,ConsumerARN:l},[H]:[{[I]:[{[J]:"aws.partition",[K]:[m],assign:c}],[G]:d,[H]:[{[I]:[{[J]:e,[K]:y},n,p,r],[G]:d,[H]:[{[I]:[{[J]:g,[K]:y,assign:h}],[G]:d,[H]:A},v]},{[I]:[{[J]:e,[K]:E},n,p,r],[G]:d,[H]:[{[I]:[{[J]:g,[K]:E,assign:h}],[G]:d,[H]:A},v]},{[I]:z,[G]:d,[H]:[{[I]:C,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[G]:j},{[G]:d,[H]:[{[I]:D,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[G]:j},{endpoint:{[M]:o,[N]:s,[O]:s},[G]:i}]}]},{[I]:B,[G]:d,[H]:[{[I]:[w,x],[G]:d,[H]:[{[G]:d,[H]:[{endpoint:{[M]:"https://kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[N]:s,[O]:s},[G]:i}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[G]:j}]},{[I]:C,[G]:d,[H]:[{[I]:[w],[G]:d,[H]:[{[G]:d,[H]:[{[I]:[{[J]:f,[K]:["aws-us-gov",q]}],endpoint:{[M]:"https://kinesis.{Region}.amazonaws.com",[N]:s,[O]:s},[G]:i},{endpoint:{[M]:"https://kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[N]:s,[O]:s},[G]:i}]}]},t]},{[I]:D,[G]:d,[H]:[{[I]:[x],[G]:d,[H]:[{[G]:d,[H]:[{endpoint:{[M]:"https://kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[N]:s,[O]:s},[G]:i}]}]},u]},{[G]:d,[H]:[{[I]:[{[J]:f,[K]:[m,"us-gov-east-1"]}],endpoint:{[M]:"https://kinesis.us-gov-east-1.amazonaws.com",[N]:s,[O]:s},[G]:i},{[I]:[{[J]:f,[K]:[m,"us-gov-west-1"]}],endpoint:{[M]:"https://kinesis.us-gov-west-1.amazonaws.com",[N]:s,[O]:s},[G]:i},{endpoint:{[M]:"https://kinesis.{Region}.{PartitionResult#dnsSuffix}",[N]:s,[O]:s},[G]:i}]}]}]};
export const ruleSet: RuleSetObject = _data;
