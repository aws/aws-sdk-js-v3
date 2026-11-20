// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const a=-1,
b="isSet",
c="booleanEquals",
d="stringEquals",
e="us-east-1",
f="eu-west-1",
g="ap-northeast-1",
h="sigv4",
i="agent-discovery",
j={"ref":"Endpoint"},
k={"ref":"Region"},
l=[k];
const _data={
  conditions: [
    [b,[j]],
    [b,l],
    ["aws.partition",l,"PartitionResult"],
    [c,[{ref:"UseFIPS"},true]],
    [d,[k,e]],
    [d,[k,f]],
    [d,[k,g]],
    [c,[{ref:"UseDualStack"},true]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [j,{}],
    [a,"FIPS is enabled but Agent Discovery does not have a FIPS endpoint"],
    ["https://agent-discovery.us-east-1.api.aws",{authSchemes:[{name:h,signingName:i,signingRegion:e}]}],
    ["https://agent-discovery.eu-west-1.api.aws",{authSchemes:[{name:h,signingName:i,signingRegion:f}]}],
    ["https://agent-discovery.ap-northeast-1.api.aws",{authSchemes:[{name:h,signingName:i,signingRegion:g}]}],
    ["https://agent-discovery.{Region}.{PartitionResult#dualStackDnsSuffix}",{}],
    ["https://agent-discovery.{Region}.{PartitionResult#dnsSuffix}",{}],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 10, 3,
  1, 4, r + 10,
  2, 5, r + 10,
  3, r + 4, 6,
  4, r + 5, 7,
  5, r + 6, 8,
  6, r + 7, 9,
  7, r + 8, r + 9,
  3, r + 1, 11,
  7, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
