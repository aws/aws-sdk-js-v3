// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const n="ref";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="getAttr",
g="stringEquals",
h="sigv4",
i={[n]:"Endpoint"},
j={[n]:d},
k={"fn":f,"argv":[j,"name"]},
l={"authSchemes":[{"name":h,"signingRegion":"{PartitionResult#implicitGlobalRegion}"}]},
m=[{[n]:"Region"}];
const _data={
  conditions: [
    [c,[i]],
    [c,m],
    ["aws.partition",m,d],
    [e,[{[n]:"UseFIPS"},b]],
    [e,[{fn:f,argv:[j,"supportsFIPS"]},b]],
    [e,[{[n]:"UseDualStack"},b]],
    [g,[k,"aws-iso"]],
    [g,[k,"aws-iso-b"]],
    [g,[k,"aws-iso-e"]],
    [g,[k,"aws"]],
    [g,[k,"aws-cn"]],
    [g,[k,"aws-iso-f"]],
    [g,[k,"aws-eusc"]],
    [e,[{fn:f,argv:[j,"supportsDualStack"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [i,{}],
    ["https://ce.us-east-1.api.aws",{authSchemes:[{name:h,signingRegion:"us-east-1"}]}],
    ["https://ce.cn-northwest-1.api.amazonwebservices.com.cn",{authSchemes:[{name:h,signingRegion:"cn-northwest-1"}]}],
    ["https://ce.us-iso-east-1.c2s.ic.gov",{authSchemes:[{name:h,signingRegion:"us-iso-east-1"}]}],
    ["https://ce.us-isob-east-1.sc2s.sgov.gov",{authSchemes:[{name:h,signingRegion:"us-isob-east-1"}]}],
    ["https://ce.eu-isoe-west-1.cloud.adc-e.uk",{authSchemes:[{name:h,signingRegion:"eu-isoe-west-1"}]}],
    ["https://ce.us-isof-south-1.csp.hci.ic.gov",{authSchemes:[{name:h,signingRegion:"us-isof-south-1"}]}],
    ["https://ce.eusc-de-east-1.api.amazonwebservices.eu",{authSchemes:[{name:h,signingRegion:"eusc-de-east-1"}]}],
    ["https://ce-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",l],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://ce-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",l],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://ce.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}",l],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://ce.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}",l],
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
  3, 16, 6,
  5, 12, 7,
  6, r + 6, 8,
  7, r + 7, 9,
  8, r + 8, 10,
  11, r + 9, 11,
  12, r + 10, r + 17,
  9, r + 4, 13,
  10, r + 5, 14,
  12, r + 10, 15,
  13, r + 15, r + 16,
  4, 18, 17,
  5, r + 12, r + 14,
  5, 19, r + 13,
  13, r + 11, r + 12,
  3, r + 1, 21,
  5, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
