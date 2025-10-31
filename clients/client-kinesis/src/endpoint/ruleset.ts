// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/kinesis.json */

const H="required",
I="type",
J="rules",
K="conditions",
L="fn",
M="argv",
N="ref",
O="assign",
P="url",
Q="properties",
R="headers";
const a=true,
b="isSet",
c="stringEquals",
d="aws.parseArn",
e="arn",
f="booleanEquals",
g="endpoint",
h="tree",
i="error",
j={[H]:false,[I]:"string"},
k={[H]:true,"default":false,[I]:"boolean"},
l={[L]:"not",[M]:[{[L]:b,[M]:[{[N]:"Endpoint"}]}]},
m={[N]:"Endpoint"},
n={[L]:b,[M]:[{[N]:"Region"}]},
o={[L]:"aws.partition",[M]:[{[N]:"Region"}],[O]:"PartitionResult"},
p={[L]:"not",[M]:[{[L]:c,[M]:[{[L]:"getAttr",[M]:[{[N]:"PartitionResult"},"name"]},"aws-iso"]}]},
q={[L]:"getAttr",[M]:[{[N]:"PartitionResult"},"name"]},
r={[L]:"not",[M]:[{[L]:c,[M]:[q,"aws-iso-b"]}]},
s={[L]:"getAttr",[M]:[{[N]:"PartitionResult"},"supportsFIPS"]},
t={},
u={[i]:"FIPS is enabled but this partition does not support FIPS",[I]:i},
v={[i]:"DualStack is enabled but this partition does not support DualStack",[I]:i},
w={[i]:"Invalid ARN: Failed to parse ARN.",[I]:i},
x={[L]:f,[M]:[true,{[L]:"getAttr",[M]:[{[N]:"PartitionResult"},"supportsDualStack"]}]},
y=[{[N]:"StreamARN"}],
z=[{[L]:b,[M]:[m]}],
A=[{[K]:[{[L]:"isValidHostLabel",[M]:[{[L]:"getAttr",[M]:[{[N]:e},"accountId"]},false]}],[J]:[{[K]:[{[L]:"isValidHostLabel",[M]:[{[L]:"getAttr",[M]:[{[N]:e},"region"]},false]}],[J]:[{[K]:[{[L]:c,[M]:[{[L]:"getAttr",[M]:[{[N]:e},"service"]},"kinesis"]}],[J]:[{[K]:[{[L]:"getAttr",[M]:[{[N]:e},"resourceId[0]"],[O]:"arnType"},{[L]:"not",[M]:[{[L]:c,[M]:[{[N]:"arnType"},""]}]}],[J]:[{[K]:[{[L]:c,[M]:[{[N]:"arnType"},"stream"]}],[J]:[{[K]:[{[L]:c,[M]:[q,"{arn#partition}"]}],[J]:[{[K]:[{[L]:b,[M]:[{[N]:"OperationType"}]}],[J]:[{[K]:[{[L]:f,[M]:[{[N]:"UseFIPS"},true]},{[L]:f,[M]:[{[N]:"UseDualStack"},true]}],[J]:[{[K]:[{[L]:f,[M]:[s,true]}],[J]:[{[K]:[{[L]:f,[M]:[{[L]:"getAttr",[M]:[{[N]:"PartitionResult"},"supportsDualStack"]},true]}],[J]:[{[g]:{[P]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[Q]:{},[R]:{}},[I]:g}],[I]:h},{[i]:"DualStack is enabled, but this partition does not support DualStack.",[I]:i}],[I]:h},{[i]:"FIPS is enabled, but this partition does not support FIPS.",[I]:i}],[I]:h},{[K]:[{[L]:f,[M]:[{[N]:"UseFIPS"},true]}],[J]:[{[K]:[{[L]:f,[M]:[s,true]}],[J]:[{[g]:{[P]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[Q]:{},[R]:{}},[I]:g}],[I]:h},u],[I]:h},{[K]:[{[L]:f,[M]:[{[N]:"UseDualStack"},true]}],[J]:[{[K]:[{[L]:f,[M]:[{[L]:"getAttr",[M]:[{[N]:"PartitionResult"},"supportsDualStack"]},true]}],[J]:[{[g]:{[P]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[Q]:{},[R]:{}},[I]:g}],[I]:h},v],[I]:h},{[g]:{[P]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dnsSuffix}",[Q]:{},[R]:{}},[I]:g}],[I]:h},{[i]:"Operation Type is not set. Please contact service team for resolution.",[I]:i}],[I]:h},{[i]:"Partition: {arn#partition} from ARN doesn't match with partition name: {PartitionResult#name}.",[I]:i}],[I]:h},{[i]:"Invalid ARN: Kinesis ARNs don't support `{arnType}` arn types.",[I]:i}],[I]:h},{[i]:"Invalid ARN: No ARN type specified",[I]:i}],[I]:h},{[i]:"Invalid ARN: The ARN was not for the Kinesis service, found: {arn#service}.",[I]:i}],[I]:h},{[i]:"Invalid ARN: Invalid region.",[I]:i}],[I]:h},{[i]:"Invalid ARN: Invalid account id.",[I]:i}],
B=[{[L]:f,[M]:[{[N]:"UseFIPS"},true]},{[L]:f,[M]:[{[N]:"UseDualStack"},true]}],
C=[{[L]:f,[M]:[s,true]}],
D=[{[L]:f,[M]:[{[N]:"UseFIPS"},true]}],
E=[{[L]:f,[M]:[{[N]:"UseDualStack"},true]}],
F=[{[N]:"ConsumerARN"}],
G=[{[N]:"ResourceARN"}];
const _data={version:"1.0",parameters:{Region:j,UseDualStack:k,UseFIPS:k,Endpoint:j,StreamARN:j,OperationType:j,ConsumerARN:j,ResourceARN:j},[J]:[{[K]:[{[L]:b,[M]:y},l,n,o,p,r],[J]:[{[K]:[{[L]:d,[M]:y,[O]:e}],[J]:A,[I]:h},w],[I]:h},{[K]:[{[L]:b,[M]:F},l,n,o,p,r],[J]:[{[K]:[{[L]:d,[M]:F,[O]:e}],[J]:A,[I]:h},w],[I]:h},{[K]:[{[L]:b,[M]:G},l,n,o,p,r],[J]:[{[K]:[{[L]:d,[M]:G,[O]:e}],[J]:A,[I]:h},w],[I]:h},{[K]:z,[J]:[{[K]:D,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[I]:i},{[K]:E,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[I]:i},{endpoint:{[P]:m,[Q]:t,[R]:t},[I]:g}],[I]:h},{[K]:[n],[J]:[{[K]:[o],[J]:[{[K]:B,[J]:[{[K]:[{[L]:f,[M]:[a,s]},x],[J]:[{endpoint:{[P]:"https://kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[Q]:t,[R]:t},[I]:g}],[I]:h},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[I]:i}],[I]:h},{[K]:D,[J]:[{[K]:C,[J]:[{[K]:[{[L]:c,[M]:[q,"aws-us-gov"]}],endpoint:{[P]:"https://kinesis.{Region}.amazonaws.com",[Q]:t,[R]:t},[I]:g},{endpoint:{[P]:"https://kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[Q]:t,[R]:t},[I]:g}],[I]:h},u],[I]:h},{[K]:E,[J]:[{[K]:[x],[J]:[{endpoint:{[P]:"https://kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[Q]:t,[R]:t},[I]:g}],[I]:h},v],[I]:h},{endpoint:{[P]:"https://kinesis.{Region}.{PartitionResult#dnsSuffix}",[Q]:t,[R]:t},[I]:g}],[I]:h}],[I]:h},{error:"Invalid Configuration: Missing Region",[I]:i}]};
export const ruleSet: RuleSetObject = _data;
