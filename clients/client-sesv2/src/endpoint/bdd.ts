// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const m="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g={[m]:"EndpointId"},
h={[m]:"Endpoint"},
i={[m]:d},
j={"authSchemes":[{"name":"sigv4a","signingName":"ses","signingRegionSet":["*"]}]},
k={},
l=[{[m]:"Region"}];
const _data={
  conditions: [
    [c,l],
    ["aws.partition",l,d],
    [c,[g]],
    ["isValidHostLabel",[g,b]],
    [c,[h]],
    [e,[{[m]:"UseFIPS"},b]],
    [e,[{[m]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[i,"supportsDualStack"]},b]],
    [e,[{fn:f,argv:[i,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [h,j],
    ["https://{EndpointId}.endpoints.email.global.{PartitionResult#dualStackDnsSuffix}",j],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://{EndpointId}.endpoints.email.{PartitionResult#dnsSuffix}",j],
    [a,"Invalid Configuration: FIPS is not supported with multi-region endpoints"],
    [a,"EndpointId must be a valid host label"],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,k],
    ["https://email-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://email-fips.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://email.{Region}.{PartitionResult#dualStackDnsSuffix}",k],
    ["https://email.{Region}.{PartitionResult#dnsSuffix}",k],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 3, 4,
  1, 5, 4,
  4, 14, r + 16,
  2, 16, 6,
  4, 14, 7,
  5, 10, 8,
  6, 9, r + 15,
  7, r + 14, r + 3,
  6, 12, 11,
  8, r + 12, r + 13,
  7, 13, r + 11,
  8, r + 10, r + 11,
  5, r + 7, 15,
  6, r + 8, r + 9,
  3, 17, r + 6,
  4, 21, 18,
  5, r + 5, 19,
  6, 20, r + 4,
  7, r + 2, r + 3,
  5, r + 5, r + 1,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
