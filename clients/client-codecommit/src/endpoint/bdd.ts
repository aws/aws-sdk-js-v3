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
    [e,[{fn:f,argv:[h,"supportsDualStack"]},b]],
    [e,[{fn:f,argv:[h,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [g,i],
    ["https://codecommit-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",i],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://codecommit-fips.{Region}.{PartitionResult#dnsSuffix}",i],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://codecommit.{Region}.{PartitionResult#dualStackDnsSuffix}",i],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://codecommit.{Region}.{PartitionResult#dnsSuffix}",i],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 12, 3,
  1, 4, r + 11,
  2, 5, r + 11,
  3, 8, 6,
  4, 7, r + 10,
  5, r + 8, r + 9,
  4, 10, 9,
  6, r + 6, r + 7,
  5, 11, r + 5,
  6, r + 4, r + 5,
  3, r + 1, 13,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
