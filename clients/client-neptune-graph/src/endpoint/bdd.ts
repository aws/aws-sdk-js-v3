// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const m="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g="stringEquals",
h={[m]:"Endpoint"},
i={[m]:d},
j={[m]:"ApiType"},
k={},
l=[{[m]:"Region"}];
const _data={
  conditions: [
    [c,[h]],
    [c,l],
    ["aws.partition",l,d],
    [e,[{[m]:"UseFIPS"},b]],
    [e,[{[m]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[i,"supportsDualStack"]},b]],
    [e,[{fn:f,argv:[i,"supportsFIPS"]},b]],
    [g,[j,"ControlPlane"]],
    [g,[j,"DataPlane"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://neptune-graph-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"Invalid Configuration: fips endpoint is not supported for this API"],
    [a,"Invalid Configuration: Unknown ApiType"],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://neptune-graph-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://neptune-graph.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://neptune-graph.{Region}.on.aws",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://neptune-graph.{Region}.{PartitionResult#dnsSuffix}",k],
    ["https://{Region}.neptune-graph.{PartitionResult#dnsSuffix}",k],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 19, 3,
  1, 4, r + 15,
  2, 5, r + 15,
  3, 12, 6,
  4, 9, 7,
  7, r + 13, 8,
  8, r + 14, r + 6,
  5, 10, r + 12,
  7, r + 10, 11,
  8, r + 11, r + 6,
  4, 15, 13,
  6, 14, r + 9,
  7, r + 8, 18,
  5, 16, r + 7,
  6, 17, r + 7,
  7, r + 4, 18,
  8, r + 5, r + 6,
  3, r + 1, 20,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
