// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const p="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g="stringEquals",
h="sigv4",
i="organizations",
j={[p]:"Endpoint"},
k={[p]:d},
l={"fn":f,"argv":[k,"name"]},
m={},
n={"authSchemes":[{"name":h,"signingName":i,"signingRegion":"us-east-1"}]},
o=[{[p]:"Region"}];
const _data={
  conditions: [
    [c,[j]],
    [c,o],
    ["aws.partition",o,d],
    [e,[{[p]:"UseFIPS"},b]],
    [e,[{[p]:"UseDualStack"},b]],
    [e,[{fn:f,argv:[k,"supportsDualStack"]},b]],
    [g,[l,"aws"]],
    [g,[l,"aws-cn"]],
    [g,[l,"aws-us-gov"]],
    [g,[l,"aws-iso"]],
    [e,[{fn:f,argv:[k,"supportsFIPS"]},b]],
    [g,[l,"aws-iso-b"]],
    [g,[l,"aws-iso-f"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [j,m],
    ["https://organizations.us-east-1.amazonaws.com",n],
    ["https://organizations-fips.us-east-1.amazonaws.com",n],
    ["https://organizations.cn-northwest-1.amazonaws.com.cn",{authSchemes:[{name:h,signingName:i,signingRegion:"cn-northwest-1"}]}],
    ["https://organizations.us-gov-west-1.amazonaws.com",{authSchemes:[{name:h,signingName:i,signingRegion:"us-gov-west-1"}]}],
    ["https://organizations.us-iso-east-1.c2s.ic.gov",{authSchemes:[{name:h,signingName:i,signingRegion:"us-iso-east-1"}]}],
    ["https://organizations.us-isob-east-1.sc2s.sgov.gov",{authSchemes:[{name:h,signingName:i,signingRegion:"us-isob-east-1"}]}],
    ["https://organizations.us-isof-south-1.csp.hci.ic.gov",{authSchemes:[{name:h,signingName:i,signingRegion:"us-isof-south-1"}]}],
    ["https://organizations-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",m],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://organizations-fips.{Region}.{PartitionResult#dnsSuffix}",m],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://organizations.{Region}.{PartitionResult#dualStackDnsSuffix}",m],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://organizations.{Region}.{PartitionResult#dnsSuffix}",m],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 20, 3,
  1, 4, r + 18,
  2, 5, r + 18,
  3, 14, 6,
  4, 13, 7,
  6, r + 4, 8,
  7, r + 6, 9,
  8, r + 7, 10,
  9, r + 8, 11,
  11, r + 9, 12,
  12, r + 10, r + 17,
  5, r + 15, r + 16,
  4, 18, 15,
  6, r + 5, 16,
  8, r + 7, 17,
  10, r + 13, r + 14,
  5, 19, r + 12,
  10, r + 11, r + 12,
  3, r + 1, 21,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
