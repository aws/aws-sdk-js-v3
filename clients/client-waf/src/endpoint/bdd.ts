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
i={},
j={"authSchemes":[{"name":"sigv4","signingName":"waf","signingRegion":"us-east-1"}]},
k=[{[l]:"Region"}];
const _data={
  conditions: [
    [c,[g]],
    [c,k],
    ["aws.partition",k,d],
    [e,[{[l]:"UseFIPS"},b]],
    [e,[{[l]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[h,"supportsDualStack"]},b]],
    ["stringEquals",[{fn:f,argv:[h,"name"]},"aws"]],
    [e,[{fn:f,argv:[h,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [g,i],
    ["https://waf.amazonaws.com",j],
    ["https://waf-fips.amazonaws.com",j],
    ["https://waf-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",i],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://waf-fips.{Region}.{PartitionResult#dnsSuffix}",i],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://waf.{Region}.{PartitionResult#dualStackDnsSuffix}",i],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://waf.{Region}.{PartitionResult#dnsSuffix}",i],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 14, 3,
  1, 4, r + 13,
  2, 5, r + 13,
  3, 9, 6,
  4, 8, 7,
  6, r + 4, r + 12,
  5, r + 10, r + 11,
  4, 12, 10,
  6, r + 5, 11,
  7, r + 8, r + 9,
  5, 13, r + 7,
  7, r + 6, r + 7,
  3, r + 1, 15,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
