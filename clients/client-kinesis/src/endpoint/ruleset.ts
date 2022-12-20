// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/kinesis.json */

const D="type",
E="rules",
F="conditions",
G="fn",
H="argv",
I="ref",
J="url",
K="properties",
L="headers";
const a=true,
b=false,
c="String",
d="Boolean",
e="PartitionResult",
f="tree",
g="isSet",
h="aws.parseArn",
i="arn",
j="endpoint",
k="error",
l={[G]:"not",[H]:[{[G]:g,[H]:[{[I]:"Endpoint"}]}]},
m={[I]:"Endpoint"},
n={[G]:"not",[H]:[{[G]:"stringEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:e},"name"]},"aws-iso"]}]},
o={[G]:"not",[H]:[{[G]:"stringEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:e},"name"]},"aws-iso-b"]}]},
p={},
q={[F]:[],[k]:"FIPS is enabled but this partition does not support FIPS",[D]:k},
r={[F]:[],[k]:"DualStack is enabled but this partition does not support DualStack",[D]:k},
s={[F]:[],[k]:"Invalid ARN: Failed to parse ARN.",[D]:k},
t={[G]:"booleanEquals",[H]:[true,{[G]:"getAttr",[H]:[{[I]:e},"supportsFIPS"]}]},
u={[G]:"booleanEquals",[H]:[true,{[G]:"getAttr",[H]:[{[I]:e},"supportsDualStack"]}]},
v=[{[I]:"StreamARN"}],
w=[{[G]:g,[H]:[m]}],
x=[{[F]:[],[D]:f,[E]:[{[F]:[{[G]:"isValidHostLabel",[H]:[{[G]:"getAttr",[H]:[{[I]:i},"accountId"]},false]}],[D]:f,[E]:[{[F]:[],[D]:f,[E]:[{[F]:[{[G]:"isValidHostLabel",[H]:[{[G]:"getAttr",[H]:[{[I]:i},"region"]},false]}],[D]:f,[E]:[{[F]:[],[D]:f,[E]:[{[F]:[{[G]:"stringEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:i},"service"]},"kinesis"]}],[D]:f,[E]:[{[F]:[],[D]:f,[E]:[{[F]:[{[G]:"getAttr",[H]:[{[I]:i},"resourceId[0]"],"assign":"arnType"},{[G]:"not",[H]:[{[G]:"stringEquals",[H]:[{[I]:"arnType"},""]}]}],[D]:f,[E]:[{[F]:[],[D]:f,[E]:[{[F]:[{[G]:"stringEquals",[H]:[{[I]:"arnType"},"stream"]}],[D]:f,[E]:[{[F]:[],[D]:f,[E]:[{[F]:[{[G]:"stringEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:e},"name"]},"{arn#partition}"]}],[D]:f,[E]:[{[F]:[],[D]:f,[E]:[{[F]:[{[G]:g,[H]:[{[I]:"OperationType"}]}],[D]:f,[E]:[{[F]:[],[D]:f,[E]:[{[F]:[{[G]:"booleanEquals",[H]:[{[I]:"UseFIPS"},true]},{[G]:"booleanEquals",[H]:[{[I]:"UseDualStack"},true]}],[D]:f,[E]:[{[F]:[{[G]:"booleanEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:e},"supportsFIPS"]},true]}],[D]:f,[E]:[{[F]:[],[D]:f,[E]:[{[F]:[{[G]:"booleanEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:e},"supportsDualStack"]},true]}],[D]:f,[E]:[{[F]:[],[j]:{[J]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[K]:{},[L]:{}},[D]:j}]},{[F]:[],[k]:"DualStack is enabled, but this partition does not support DualStack.",[D]:k}]}]},{[F]:[],[k]:"FIPS is enabled, but this partition does not support FIPS.",[D]:k}]},{[F]:[{[G]:"booleanEquals",[H]:[{[I]:"UseFIPS"},true]}],[D]:f,[E]:[{[F]:[{[G]:"booleanEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:e},"supportsFIPS"]},true]}],[D]:f,[E]:[{[F]:[],[j]:{[J]:"https://{arn#accountId}.{OperationType}-kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[K]:{},[L]:{}},[D]:j}]},q]},{[F]:[{[G]:"booleanEquals",[H]:[{[I]:"UseDualStack"},true]}],[D]:f,[E]:[{[F]:[{[G]:"booleanEquals",[H]:[{[G]:"getAttr",[H]:[{[I]:e},"supportsDualStack"]},true]}],[D]:f,[E]:[{[F]:[],[j]:{[J]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[K]:{},[L]:{}},[D]:j}]},r]},{[F]:[],[j]:{[J]:"https://{arn#accountId}.{OperationType}-kinesis.{Region}.{PartitionResult#dnsSuffix}",[K]:{},[L]:{}},[D]:j}]}]},{[F]:[],[k]:"Operation Type is not set. Please contact service team for resolution.",[D]:k}]}]},{[F]:[],[k]:"Partition: {arn#partition} from ARN doesn't match with partition name: {PartitionResult#name}.",[D]:k}]}]},{[F]:[],[k]:"Invalid ARN: Kinesis ARNs don't support `{arnType}` arn types.",[D]:k}]}]},{[F]:[],[k]:"Invalid ARN: No ARN type specified",[D]:k}]}]},{[F]:[],[k]:"Invalid ARN: The ARN was not for the Kinesis service, found: {arn#service}.",[D]:k}]}]},{[F]:[],[k]:"Invalid ARN: Invalid region.",[D]:k}]}]},{[F]:[],[k]:"Invalid ARN: Invalid account id.",[D]:k}]}],
y=[],
z=[{[G]:"booleanEquals",[H]:[{[I]:"UseFIPS"},true]},{[G]:"booleanEquals",[H]:[{[I]:"UseDualStack"},true]}],
A=[{[G]:"booleanEquals",[H]:[{[I]:"UseFIPS"},true]}],
B=[{[G]:"booleanEquals",[H]:[{[I]:"UseDualStack"},true]}],
C=[{[I]:"ConsumerARN"}];
const _data={version:"1.3",parameters:{Region:{builtIn:"AWS::Region",required:a,documentation:"The AWS region used to dispatch the request.",[D]:c},UseDualStack:{builtIn:"AWS::UseDualStack",required:a,default:b,documentation:"When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",[D]:d},UseFIPS:{builtIn:"AWS::UseFIPS",required:a,default:b,documentation:"When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",[D]:d},Endpoint:{builtIn:"SDK::Endpoint",required:b,documentation:"Override the endpoint used to send this request",[D]:c},StreamARN:{required:b,documentation:"The ARN of the Kinesis stream",[D]:c},OperationType:{required:b,documentation:"Internal parameter to distinguish between Control/Data plane API and accordingly generate control/data plane endpoint",[D]:c},ConsumerARN:{required:b,documentation:"The ARN of the Kinesis consumer",[D]:c}},[E]:[{[F]:[{[G]:"aws.partition",[H]:[{[I]:"Region"}],assign:e}],[D]:f,[E]:[{[F]:[{[G]:g,[H]:v},l,n,o],[D]:f,[E]:[{[F]:[{[G]:h,[H]:v,assign:i}],[D]:f,[E]:x},s]},{[F]:[{[G]:g,[H]:C},l,n,o],[D]:f,[E]:[{[F]:[{[G]:h,[H]:C,assign:i}],[D]:f,[E]:x},s]},{[F]:w,[D]:f,[E]:[{[F]:A,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[D]:k},{[F]:y,[D]:f,[E]:[{[F]:B,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[D]:k},{[F]:y,endpoint:{[J]:m,[K]:p,[L]:p},[D]:j}]}]},{[F]:z,[D]:f,[E]:[{[F]:[t,u],[D]:f,[E]:[{[F]:y,endpoint:{[J]:"https://kinesis-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[K]:p,[L]:p},[D]:j}]},{[F]:y,error:"FIPS and DualStack are enabled, but this partition does not support one or both",[D]:k}]},{[F]:A,[D]:f,[E]:[{[F]:[t],[D]:f,[E]:[{[F]:y,[D]:f,[E]:[{[F]:y,endpoint:{[J]:"https://kinesis-fips.{Region}.{PartitionResult#dnsSuffix}",[K]:p,[L]:p},[D]:j}]}]},q]},{[F]:B,[D]:f,[E]:[{[F]:[u],[D]:f,[E]:[{[F]:y,endpoint:{[J]:"https://kinesis.{Region}.{PartitionResult#dualStackDnsSuffix}",[K]:p,[L]:p},[D]:j}]},r]},{[F]:y,endpoint:{[J]:"https://kinesis.{Region}.{PartitionResult#dnsSuffix}",[K]:p,[L]:p},[D]:j}]}]};
export const ruleSet: RuleSetObject = _data;
