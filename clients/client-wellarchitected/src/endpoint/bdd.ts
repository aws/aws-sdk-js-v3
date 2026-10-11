// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const m="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g={[m]:"Endpoint"},
h={[m]:d},
i={[m]:"SubServiceType"},
j={},
k={"authSchemes":[{"name":"sigv4","signingName":"wellarchitected","signingRegion":"{Region}"}]},
l=[{[m]:"Region"}];
const _data={
  conditions: [
    [c,[g]],
    [c,l],
    ["aws.partition",l,d],
    [e,[{[m]:"UseFIPS"},b]],
    [e,[{fn:f,argv:[h,"supportsFIPS"]},b]],
    [c,[i]],
    ["stringEquals",[i,"AGENT"]],
    [e,[{[m]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[h,"supportsDualStack"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [g,j],
    ["https://wellarchitected-agent-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://wellarchitected-agent-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://wellarchitected-agent.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://wellarchitected-agent.{Region}.{PartitionResult#dnsSuffix}",k],
    ["https://wellarchitected-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",j],
    ["https://wellarchitected-fips.{Region}.{PartitionResult#dnsSuffix}",j],
    ["https://wellarchitected.{Region}.{PartitionResult#dualStackDnsSuffix}",j],
    ["https://wellarchitected.{Region}.{PartitionResult#dnsSuffix}",j],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 20, 3,
  1, 4, r + 15,
  2, 5, r + 15,
  3, 12, 6,
  5, 7, 8,
  6, 10, 8,
  7, 9, r + 14,
  8, r + 13, r + 9,
  7, 11, r + 10,
  8, r + 8, r + 9,
  4, 14, 13,
  7, r + 5, r + 7,
  5, 15, 16,
  6, 18, 16,
  7, 17, r + 12,
  8, r + 11, r + 5,
  7, 19, r + 6,
  8, r + 4, r + 5,
  3, r + 1, 21,
  7, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
