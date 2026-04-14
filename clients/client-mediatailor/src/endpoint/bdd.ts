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
    [e,[{fn:f,argv:[h,"supportsFIPS"]},b]],
    [e,[{[k]:"UseDualStack"},b]],
    ["stringEquals",[{fn:f,argv:[h,"name"]},"aws"]],
    [e,[{fn:f,argv:[h,"supportsDualStack"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [g,i],
    ["https://mediatailor.{Region}.{PartitionResult#dualStackDnsSuffix}",i],
    ["https://api.mediatailor-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",i],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://api.mediatailor-fips.{Region}.{PartitionResult#dnsSuffix}",i],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://api.mediatailor.{Region}.{PartitionResult#dualStackDnsSuffix}",i],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://api.mediatailor.{Region}.{PartitionResult#dnsSuffix}",i],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 13, 3,
  1, 4, r + 12,
  2, 5, r + 12,
  3, 9, 6,
  5, 7, r + 11,
  6, r + 4, 8,
  7, r + 9, r + 10,
  4, 11, 10,
  5, r + 6, r + 8,
  5, 12, r + 7,
  7, r + 5, r + 6,
  3, r + 1, 14,
  5, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
