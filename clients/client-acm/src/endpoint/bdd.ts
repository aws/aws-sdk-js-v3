// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const a="PartitionResult",
b="stringEquals",
c="booleanEquals",
d={"fn":"getAttr","argv":[{"ref":a},"name"]},
e={};
const _data={
  conditions: [
    ["isSet",[{ref:"Endpoint"}]],
    ["aws.partition",[{ref:"Region"}],a],
    [b,[{ref:"ServiceType"},"ACM-ACME"]],
    [c,[{ref:"UseFIPS"},true]],
    [b,[d,"aws"]],
    [c,[{ref:"UseDualStack"},true]],
    [b,[d,"aws-us-gov"]]
  ],
  results: [
    [-1],
    ["{Endpoint}",e],
    [-1,"FIPS endpoints are not available for ACME operations"],
    ["https://acm-acme.{Region}.{PartitionResult#dualStackDnsSuffix}",e],
    [-1,"ACME operations are only available in the aws and aws-us-gov partitions"],
    ["https://acm-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",e],
    ["https://acm.{Region}.amazonaws.com",e],
    ["https://acm-fips.{Region}.{PartitionResult#dnsSuffix}",e],
    ["https://acm.{Region}.{PartitionResult#dualStackDnsSuffix}",e],
    ["https://acm.{Region}.{PartitionResult#dnsSuffix}",e],
    [-1,"Region must be set to resolve an endpoint."]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, r + 1, 3,
  1, 4, r + 10,
  2, 9, 5,
  3, 7, 6,
  5, r + 8, r + 9,
  5, r + 5, 8,
  6, r + 6, r + 7,
  3, 12, 10,
  4, r + 3, 11,
  6, r + 3, r + 4,
  4, r + 2, 13,
  6, r + 2, r + 4,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
