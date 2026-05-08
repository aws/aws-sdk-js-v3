// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const l="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g={[l]:"Endpoint"},
h={[l]:d},
i={"authSchemes":[{"name":"sigv4","signingName":"savingsplans","signingRegion":"us-east-1"}]},
j={},
k=[{[l]:"Region"}];
const _data={
  conditions: [
    [c,[g]],
    [c,k],
    ["aws.partition",k,d],
    [e,[{[l]:"UseFIPS"},b]],
    ["stringEquals",[{fn:f,argv:[h,"name"]},"aws"]],
    [e,[{[l]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[h,"supportsFIPS"]},b]],
    [e,[{fn:f,argv:[h,"supportsDualStack"]},b]]
  ],
  results: [
    [a],
    ["https://savingsplans.global.api.aws",i],
    ["https://savingsplans.{Region}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [g,j],
    ["https://savingsplans.amazonaws.com",i],
    ["https://savingsplans-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://savingsplans-fips.{Region}.{PartitionResult#dnsSuffix}",j],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://savingsplans.{Region}.{PartitionResult#dnsSuffix}",j],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 16, 3,
  1, 6, 4,
  3, r + 13, 5,
  5, r + 1, r + 13,
  2, 7, r + 13,
  3, 12, 8,
  4, 11, 9,
  5, 10, r + 12,
  7, r + 2, r + 3,
  5, r + 1, r + 7,
  5, 14, 13,
  6, r + 10, r + 11,
  6, 15, r + 9,
  7, r + 8, r + 9,
  3, r + 4, 17,
  5, r + 5, r + 6,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
