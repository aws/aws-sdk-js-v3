// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/util-endpoints";

const o="ref",
p="authSchemes",
q="name",
s="signingRegion";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="stringEquals",
g="getAttr",
h={[o]:"Endpoint"},
i={"fn":g,"argv":[{[o]:d},"name"]},
j={[o]:d},
k={[p]:[{[q]:"sigv4",[s]:"us-east-1"}]},
l={[p]:[{[q]:"sigv4",[s]:"cn-northwest-1"}]},
m={[p]:[{[q]:"sigv4",[s]:"{PartitionResult#implicitGlobalRegion}"}]},
n=[{[o]:"Region"}];
const _data={
  conditions: [
    [c,[h]],
    [c,n],
    ["aws.partition",n,d],
    [e,[{[o]:"UseFIPS"},b]],
    [e,[{[o]:"UseDualStack"},b]],
    [f,[i,"aws"]],
    [f,[i,"aws-cn"]],
    [e,[{fn:g,argv:[j,"supportsDualStack"]},b]],
    [e,[{fn:g,argv:[j,"supportsFIPS"]},b]]
  ],
  results: [
    [a],
    [a,"Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a,"Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h,{}],
    ["https://cloudfront.global.api.aws",k],
    ["https://cloudfront-fips.global.api.aws",k],
    ["https://cloudfront.cn-northwest-1.amazonaws.com.cn",l],
    ["https://cloudfront-fips.cn-northwest-1.amazonaws.com.cn",l],
    ["https://cloudfront-fips.{PartitionResult#dualStackDnsSuffix}",m],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://cloudfront-fips.{PartitionResult#dnsSuffix}",m],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://cloudfront.{PartitionResult#dualStackDnsSuffix}",m],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://cloudfront.{PartitionResult#dnsSuffix}",m],
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
  4, 8, 7,
  6, r + 6, r + 14,
  5, r + 4, 9,
  7, r + 12, r + 13,
  4, 13, 11,
  6, r + 7, 12,
  8, r + 10, r + 11,
  5, r + 5, 14,
  7, 15, r + 9,
  8, r + 8, r + 9,
  3, r + 1, 17,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
