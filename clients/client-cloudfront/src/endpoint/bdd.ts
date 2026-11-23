// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const p="ref",
q="authSchemes",
s="name",
t="signingRegion";
const a=-1,
b=true,
c="isSet",
d="PartitionResult",
e="booleanEquals",
f="stringEquals",
g="getAttr",
h={[p]:"Endpoint"},
i={"fn":g,"argv":[{[p]:d},"name"]},
j={[p]:d},
k={[q]:[{[s]:"sigv4",[t]:"us-east-1"}]},
l={[q]:[{[s]:"sigv4",[t]:"cn-northwest-1"}]},
m={[q]:[{[s]:"sigv4",[t]:"eusc-de-east-1"}]},
n={[q]:[{[s]:"sigv4",[t]:"{PartitionResult#implicitGlobalRegion}"}]},
o=[{[p]:"Region"}];
const _data={
  conditions: [
    [c,[h]],
    [c,o],
    ["aws.partition",o,d],
    [e,[{[p]:"UseFIPS"},b]],
    [e,[{[p]:"UseDualStack"},b]],
    [f,[i,"aws"]],
    [f,[i,"aws-cn"]],
    [f,[i,"aws-eusc"]],
    [e,[{fn:g,argv:[j,"supportsFIPS"]},b]],
    [e,[{fn:g,argv:[j,"supportsDualStack"]},b]]
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
    ["https://cloudfront.amazonaws.eu",m],
    ["https://cloudfront.global.api.amazonwebservices.eu",m],
    ["https://cloudfront-fips.{PartitionResult#dualStackDnsSuffix}",n],
    [a,"FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://cloudfront-fips.{PartitionResult#dnsSuffix}",n],
    [a,"FIPS is enabled but this partition does not support FIPS"],
    ["https://cloudfront.{PartitionResult#dualStackDnsSuffix}",n],
    [a,"DualStack is enabled but this partition does not support DualStack"],
    ["https://cloudfront.{PartitionResult#dnsSuffix}",n],
    [a,"Invalid Configuration: Missing Region"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, 18, 3,
  1, 4, r + 17,
  2, 5, r + 17,
  3, 12, 6,
  4, 9, 7,
  6, r + 6, 8,
  7, r + 8, r + 16,
  5, r + 4, 10,
  7, r + 9, 11,
  9, r + 14, r + 15,
  4, 15, 13,
  6, r + 7, 14,
  8, r + 12, r + 13,
  5, r + 5, 16,
  8, 17, r + 11,
  9, r + 10, r + 11,
  3, r + 1, 19,
  4, r + 2, r + 3,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
