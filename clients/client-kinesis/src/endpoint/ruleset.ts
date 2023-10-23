// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/kinesis.json */

const G="required",
H="type",
I="rules",
J="conditions",
K="fn",
L="argv",
M="ref",
N="assign",
O="url",
P="properties",
Q="headers";
const a=true,
b="isSet",
c="stringEquals",
d="aws.parseArn",
e="arn",
f="booleanEquals",
g="endpoint",
h="tree",
i="error",
j={[G]:false,[H]:"String"},
k={[G]:true,"default":false,[H]:"Boolean"},
l={[K]:"not",[L]:[{[K]:b,[L]:[{[M]:"Endpoint"}]}]},
m={[M]:"Endpoint"},
n={[K]:b,[L]:[{[M]:"Region"}]},
o={[K]:"aws.partition",[L]:[{[M]:"Region"}],[N]:"PartitionResult"},
p={[K]:"not",[L]:[{[K]:c,[L]:[{[K]:"getAttr",[L]:[{[M]:"PartitionResult"},"name"]},"aws-iso"]}]},
q={[K]:"getAttr",[L]:[{[M]:"PartitionResult"},"name"]},
r={[K]:"not",[L]:[{[K]:c,[L]:[q,"aws-iso-b"]}]},
s={[K]:"getAttr",[L]:[{[M]:"PartitionResult"},"supportsFIPS"]},
t={},
u={[i]:"FIPS is enabled but this partition does not support FIPS",[H]:i},
v={[i]:"DualStack is enabled but this partition does not support DualStack",[H]:i},
w={[i]:"Invalid ARN: Failed to parse ARN.",[H]:i},
x={[K]:f,[L]:[true,{[K]:"getAttr",[L]:[{[M]:"PartitionResult"},"supportsDualStack"]}]},
y=[{[M]:"StreamARN"}],
z=[{[K]:b,[L]:[m]}],
A=[{[J]:[{[K]:"isValidHostLabel",[L]:[{[K]:"getAttr",[L]:[{[M]:e},"accountId"]},false]}],[I]:[{[J]:[{[K]:"isValidHostLabel",[L]:[{[K]:"getAttr",[L]:[{[M]:e},"region"]},false]}],[I]:[{[J]:[{[K]:c,[L]:[{[K]:"getAttr",[L]:[{[M]:e},"service"]},"kinesis"]}],[I]:[{[J]:[{[K]:"getAttr",[L]:[{[M]:e},"resourceId[0]"],[N]:"arnType"},{[K]:"not",[L]:[{[K]:c,[L]:[{[M]:"arnType"},""]}]}],[I]:[{[J]:[{[K]:c,[L]:[{[M]:"arnType"},"stream"]}],[I]:[{[J]:[{[K]:c,[L]:[q,"{arn#partition}"]}],[I]:[{[J]:[{[K]:b,[L]:[{[M]:"OperationType"}]}],[I]:[{[J]:[{[K]:f,[L]:[{[M]:"UseFIPS"},true]},{[K]:f,[L]:[{[M]:"UseDualStack"},true]}],[I]:[{[J]:[{[K]:f,[L]:[s,true]}],[I]:[{[J]:[{[K]:f,[L]:[{[K]:"getAttr",[L]:[{[M]:"PartitionResult"},"supportsDualStack"]},true]}],[I]:[{[g]:{[O]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[P]:{},[Q]:{}},[H]:g}],[H]:h},{[i]:"DualStack is enabled, but this partition does not support DualStack.",[H]:i}],[H]:h},{[i]:"FIPS is enabled, but this partition does not support FIPS.",[H]:i}],[H]:h},{[J]:[{[K]:f,[L]:[{[M]:"UseFIPS"},true]}],[I]:[{[J]:[{[K]:f,[L]:[s,true]}],[I]:[{[g]:{[O]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[P]:{},[Q]:{}},[H]:g}],[H]:h},u],[H]:h},{[J]:[{[K]:f,[L]:[{[M]:"UseDualStack"},true]}],[I]:[{[J]:[{[K]:f,[L]:[{[K]:"getAttr",[L]:[{[M]:"PartitionResult"},"supportsDualStack"]},true]}],[I]:[{[g]:{[O]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[P]:{},[Q]:{}},[H]:g}],[H]:h},v],[H]:h},{[g]:{[O]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dnsSuffix}",[P]:{},[Q]:{}},[H]:g}],[H]:h},{[i]:"Operation Type is not set. Please contact service team for resolution.",[H]:i}],[H]:h},{[i]:"Partition: {arn#partition} from ARN doesn't match with partition name: {PartitionResult#name}.",[H]:i}],[H]:h},{[i]:"Invalid ARN: Kinesis ARNs don't support `{arnType}` arn types.",[H]:i}],[H]:h},{[i]:"Invalid ARN: No ARN type specified",[H]:i}],[H]:h},{[i]:"Invalid ARN: The ARN was not for the Kinesis service, found: {arn#service}.",[H]:i}],[H]:h},{[i]:"Invalid ARN: Invalid region.",[H]:i}],[H]:h},{[i]:"Invalid ARN: Invalid account id.",[H]:i}],
B=[{[K]:f,[L]:[{[M]:"UseFIPS"},true]},{[K]:f,[L]:[{[M]:"UseDualStack"},true]}],
C=[{[K]:f,[L]:[s,true]}],
D=[{[K]:f,[L]:[{[M]:"UseFIPS"},true]}],
E=[{[K]:f,[L]:[{[M]:"UseDualStack"},true]}],
F=[{[M]:"ConsumerARN"}];
const _data={version:"1.0",parameters:{Region:j,UseDualStack:k,UseFIPS:k,Endpoint:j,StreamARN:j,OperationType:j,ConsumerARN:j},[I]:[{[J]:[{[K]:b,[L]:y},l,n,o,p,r],[I]:[{[J]:[{[K]:d,[L]:y,[N]:e}],[I]:A,[H]:h},w],[H]:h},{[J]:[{[K]:b,[L]:F},l,n,o,p,r],[I]:[{[J]:[{[K]:d,[L]:F,[N]:e}],[I]:A,[H]:h},w],[H]:h},{[J]:z,[I]:[{[J]:D,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[H]:i},{[J]:E,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[H]:i},{endpoint:{[O]:m,[P]:t,[Q]:t},[H]:g}],[H]:h},{[J]:[n],[I]:[{[J]:[o],[I]:[{[J]:B,[I]:[{[J]:[{[K]:f,[L]:[a,s]},x],[I]:[{endpoint:{[O]:"https://kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[P]:t,[Q]:t},[H]:g}],[H]:h},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[H]:i}],[H]:h},{[J]:D,[I]:[{[J]:C,[I]:[{[J]:[{[K]:c,[L]:[q,"aws-us-gov"]}],endpoint:{[O]:"https://kinesis.{Region}.amazonaws.com",[P]:t,[Q]:t},[H]:g},{endpoint:{[O]:"https://kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[P]:t,[Q]:t},[H]:g}],[H]:h},u],[H]:h},{[J]:E,[I]:[{[J]:[x],[I]:[{endpoint:{[O]:"https://kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[P]:t,[Q]:t},[H]:g}],[H]:h},v],[H]:h},{endpoint:{[O]:"https://kinesis.{Region}.{PartitionResult#dnsSuffix}",[P]:t,[Q]:t},[H]:g}],[H]:h}],[H]:h},{error:"Invalid Configuration: Missing Region",[H]:i}]};
export const ruleSet: RuleSetObject = _data;
