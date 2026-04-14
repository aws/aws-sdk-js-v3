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
h="sigv4",
i="support",
j={[o]:"Endpoint"},
k={"fn":g,"argv":[{[o]:d},"name"]},
l={[o]:d},
m={},
n=[{[o]:"Region"}];
const _data={
  conditions: [
    [c,[j]],
    [c,n],
    ["aws.partition",n,d],
    [e,[{[o]:"UseFIPS"},b]],
    [e,[{[o]:"UseDualStack"},b]],
    [f,[k,"aws"]],
    [e,[{fn:g,argv:[l,"supportsDualStack"]},b]],
    [f,[k,"aws-cn"]],
    [f,[k,"aws-us-gov"]],
    [e,[{fn:g,argv:[l,"supportsFIPS"]},b]],
    [f,[k,"aws-iso"]],
    [f,[k,"aws-iso-b"]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [j,m],
    ["https://support.us-east-1.amazonaws.com",{authSchemes:[{name:h,signingName:i,signingRegion:"us-east-1"}]}],
    ["https://support.cn-north-1.amazonaws.com.cn",{authSchemes:[{name:h,signingName:i,signingRegion:"cn-north-1"}]}],
    ["https://support.us-gov-west-1.amazonaws.com",{authSchemes:[{name:h,signingName:i,signingRegion:"us-gov-west-1"}]}],
    ["https://support.us-iso-east-1.c2s.ic.gov",{authSchemes:[{name:h,signingName:i,signingRegion:"us-iso-east-1"}]}],
    ["https://support.us-isob-east-1.sc2s.sgov.gov",{authSchemes:[{name:h,signingName:i,signingRegion:"us-isob-east-1"}]}],
    ["https://support-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",m],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://support-fips.{Region}.{PartitionResult#dnsSuffix}",m],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://support.{Region}.{PartitionResult#dualStackDnsSuffix}",m],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://support.{Region}.{PartitionResult#dnsSuffix}",m],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 18, 3,
  1, 4, r + 16,
  2, 5, r + 16,
  3, 13, 6,
  4, 12, 7,
  5, r + 4, 8,
  7, r + 5, 9,
  8, r + 6, 10,
  10, r + 7, 11,
  11, r + 8, r + 15,
  6, r + 13, r + 14,
  4, 16, 14,
  8, r + 6, 15,
  9, r + 11, r + 12,
  6, 17, r + 10,
  9, r + 9, r + 10,
  3, r + 1, 19,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
