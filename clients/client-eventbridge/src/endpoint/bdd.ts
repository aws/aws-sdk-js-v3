// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const o="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="stringEquals",
g="getAttr",
h={[o]:"Endpoint"},
i={[o]:"EndpointId"},
j={[o]:d},
k={[o]:"Region"},
l={},
m={"authSchemes":[{"name":"sigv4a","signingName":"events","signingRegionSet":["*"]}]},
n=[k];
const _data={
  conditions: [
    [c,n],
    [c,[h]],
    [c,[i]],
    ["aws.partition",n,d],
    [e,[{[o]:"UseFIPS"},b]],
    [e,[{[o]:"UseDualStack"},b]],
    [f,[{fn:g,argv:[j,"name"]},"aws-us-gov"]],
    ["isValidHostLabel",[i,b]],
    [e,[{fn:g,argv:[j,"supportsFIPS"]},b]],
    [e,[{fn:g,argv:[j,"supportsDualStack"]},b]],
    [f,[k,"us-gov-east-1"]],
    [f,[k,"us-gov-west-1"]]
  ],
  results: [
    [a],
    ["https://events.{Region}.{PartitionResult#dualStackDnsSuffix}",l],
    [h,m],
    ["https://{EndpointId}.endpoint.events.{PartitionResult#dualStackDnsSuffix}",m],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://{EndpointId}.endpoint.events.{PartitionResult#dnsSuffix}",m],
    [a,"Invalid Configuration: FIPS is not supported with EventBridge multi-region endpoints."],
    [a,"EndpointId must be a valid host label."],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,l],
    ["https://events-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",l],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://events.us-gov-east-1.amazonaws.com",l],
    ["https://events.us-gov-west-1.amazonaws.com",l],
    ["https://events-fips.{Region}.{PartitionResult#dnsSuffix}",l],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://events.{Region}.{PartitionResult#dnsSuffix}",l],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 4, 3,
  1, 27, r + 18,
  1, 25, 5,
  2, 17, 6,
  3, 7, r + 18,
  4, 10, 8,
  5, 9, r + 17,
  9, r + 1, r + 4,
  5, 14, 11,
  8, 12, r + 16,
  10, r + 13, 13,
  11, r + 14, r + 15,
  6, r + 1, 15,
  8, 16, r + 12,
  9, r + 11, r + 12,
  3, 18, r + 18,
  4, 23, 19,
  5, 21, 20,
  7, r + 5, r + 7,
  7, 22, r + 7,
  9, r + 3, r + 4,
  5, 24, 31,
  6, r + 1, 31,
  2, 26, 27,
  3, 29, 27,
  4, r + 8, 28,
  5, r + 9, r + 10,
  4, 31, 30,
  7, r + 2, r + 7,
  7, r + 6, r + 7,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
