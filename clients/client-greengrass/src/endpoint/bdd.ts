// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const q="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g="stringEquals",
h="us-gov-east-1",
i="us-gov-west-1",
j="sigv4",
k="greengrass",
l={[q]:"Endpoint"},
m={[q]:d},
n={[q]:"Region"},
o={},
p=[n];
const _data={
  conditions: [
    [c,[l]],
    [c,p],
    ["aws.partition",p,d],
    [e,[{[q]:"UseFIPS"},b]],
    [e,[{[q]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[m,"supportsDualStack"]},b]],
    [e,[{fn:f,argv:[m,"supportsFIPS"]},b]],
    [g,[n,h]],
    [g,[n,i]],
    [g,[n,"dataplane-us-gov-east-1"]],
    [g,[n,"dataplane-us-gov-west-1"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [l,o],
    ["https://greengrass-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",o],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://greengrass.us-gov-east-1.amazonaws.com",o],
    ["https://greengrass.us-gov-west-1.amazonaws.com",o],
    ["https://greengrass-fips.{Region}.{PartitionResult#dnsSuffix}",o],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://greengrass.{Region}.{PartitionResult#dualStackDnsSuffix}",o],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://greengrass-ats.iot.us-gov-east-1.amazonaws.com",{authSchemes:[{name:j,signingName:k,signingRegion:h}]}],
    ["https://greengrass-ats.iot.us-gov-west-1.amazonaws.com",{authSchemes:[{name:j,signingName:k,signingRegion:i}]}],
    ["https://greengrass.{Region}.{PartitionResult#dnsSuffix}",o],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 16, 3,
  1, 4, r + 15,
  2, 5, r + 15,
  3, 10, 6,
  4, 9, 7,
  9, r + 12, 8,
  10, r + 13, r + 14,
  5, r + 10, r + 11,
  4, 14, 11,
  6, 12, r + 9,
  7, r + 6, 13,
  8, r + 7, r + 8,
  5, 15, r + 5,
  6, r + 4, r + 5,
  3, r + 1, 17,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
