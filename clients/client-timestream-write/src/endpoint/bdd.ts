// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

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
j={"fn":f,"argv":[i,"name"]},
k={},
l=[{[m]:"Region"}];
const _data={
  conditions: [
    [c,[h]],
    [c,l],
    ["aws.partition",l,d],
    [e,[{[m]:"UseFIPS"},b]],
    [e,[{[m]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[i,"supportsFIPS"]},b]],
    [e,[{fn:f,argv:[i,"supportsDualStack"]},b]],
    [g,[j,"aws"]],
    [g,[j,"aws-us-gov"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://timestream-ingest-fips.{Region}.api.aws",k],
    ["https://timestream-ingest.{Region}.api.aws",k],
    ["https://ingest.timestream-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://ingest.timestream.{Region}.amazonaws.com",k],
    ["https://ingest.timestream-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://ingest.timestream.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://ingest.timestream.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 17, 3,
  1, 4, r + 14,
  2, 5, r + 14,
  3, 10, 6,
  4, 7, r + 13,
  6, 8, r + 12,
  7, r + 5, 9,
  8, r + 5, r + 11,
  4, 13, 11,
  5, 12, r + 10,
  8, r + 8, r + 9,
  5, 14, r + 7,
  6, 15, r + 7,
  7, r + 4, 16,
  8, r + 5, r + 6,
  3, r + 1, 18,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
