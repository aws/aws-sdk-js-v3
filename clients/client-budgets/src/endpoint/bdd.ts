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
    [g,[k,"aws-iso-b"]],
    [g,[k,"aws-iso-e"]],
    [g,[k,"aws"]],
    [g,[k,"aws-iso-f"]],
    [g,[k,"aws-eusc"]],
    [e,[{fn:f,argv:[j,"supportsDualStack"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [i,{}],
    ["https://budgets.us-east-1.api.aws",{authSchemes:[{name:h,signingRegion:"us-east-1"}]}],
    ["https://budgets.global.sc2s.sgov.gov",{authSchemes:[{name:h,signingRegion:"us-isob-east-1"}]}],
    ["https://budgets.global.cloud.adc-e.uk",{authSchemes:[{name:h,signingRegion:"eu-isoe-west-1"}]}],
    ["https://budgets.global.csp.hci.ic.gov",{authSchemes:[{name:h,signingRegion:"us-isof-south-1"}]}],
    ["https://budgets.eusc-de-east-1.api.amazonwebservices.eu",{authSchemes:[{name:h,signingRegion:"eusc-de-east-1"}]}],
    ["https://budgets-fips.{PartitionResult#dualStackDnsSuffix}",l],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://budgets-fips.{PartitionResult#dnsSuffix}",l],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://budgets.{PartitionResult#dualStackDnsSuffix}",l],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://budgets.{PartitionResult#dnsSuffix}",l],
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
  3, 14, 6,
  5, 11, 7,
  6, r + 5, 8,
  7, r + 6, 9,
  9, r + 7, 10,
  10, r + 8, r + 15,
  8, r + 4, 12,
  10, r + 8, 13,
  11, r + 13, r + 14,
  4, 16, 15,
  5, r + 10, r + 12,
  5, 17, r + 11,
  11, r + 9, r + 10,
  3, r + 1, 19,
  5, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
