// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const k="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g={[k]:"Endpoint"},
h={[k]:d},
i={},
j=[{[k]:"Region"}];
const _data={
  conditions: [
    [c,[g]],
    [c,j],
    ["aws.partition",j,d],
    [e,[{[k]:"UseFIPS"},b]],
    [e,[{[k]:"UseDualStack"},b]],
    ["stringEquals",[{fn:f,argv:[h,"name"]},"aws-us-gov"]],
    [e,[{fn:f,argv:[h,"supportsFIPS"]},b]],
    [e,[{fn:f,argv:[h,"supportsDualStack"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [g,i],
    ["https://kafkaconnect.{Region}.{PartitionResult#dnsSuffix}",i],
    ["https://kafkaconnect.{Region}.{PartitionResult#dualStackDnsSuffix}",i],
    ["https://kafkaconnect-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",i],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://kafkaconnect-fips.{Region}.{PartitionResult#dnsSuffix}",i],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 14, 3,
  1, 4, r + 11,
  2, 5, r + 11,
  3, 8, 6,
  4, 7, r + 4,
  7, r + 5, r + 10,
  4, 11, 9,
  5, r + 4, 10,
  6, r + 8, r + 9,
  5, r + 5, 12,
  6, 13, r + 7,
  7, r + 6, r + 7,
  3, r + 1, 15,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
