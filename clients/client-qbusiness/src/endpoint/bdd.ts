// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const j="ref";
const a=true,
b="isSet",
c="PartitionResult",
d="booleanEquals",
e="getAttr",
f={[j]:"Endpoint"},
g={[j]:c},
h={},
i=[{[j]:"Region"}];
const _data={
  conditions: [
    [b,[f]],
    [b,i],
    ["aws.partition",i,c],
    [d,[{[j]:"UseFIPS"},a]],
    [d,[{fn:e,argv:[g,"supportsFIPS"]},a]],
    [d,[{fn:e,argv:[g,"supportsDualStack"]},a]]
  ],
  results: [
    [-1],
    [-1,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [f,h],
    ["https://qbusiness-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",h],
    [-1,"FIPS is enabled but this partition does not support FIPS"],
    ["https://qbusiness.{Region}.{PartitionResult#dualStackDnsSuffix}",h],
    ["https://qbusiness-fips.{Region}.{PartitionResult#dnsSuffix}",h],
    ["https://qbusiness.{Region}.{PartitionResult#dnsSuffix}",h],
    [-1,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 9, 3,
  1, 4, r + 8,
  2, 5, r + 8,
  3, 7, 6,
  5, r + 5, r + 7,
  4, 8, r + 4,
  5, r + 3, r + 6,
  3, r + 1, r + 2,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
