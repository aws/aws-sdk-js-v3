// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARN,
  _AZ,
  _CCS,
  _ch,
  _CI,
  _CP,
  _CPS,
  _CPSD,
  _CPSh,
  _CPSha,
  _CPSL,
  _CT,
  _CVE,
  _CVER,
  _CVERr,
  _DA,
  _DDCP,
  _DDCPR,
  _DDCPRe,
  _De,
  _DN,
  _DVEe,
  _DVERes,
  _DVEResc,
  _EC,
  _EM,
  _En,
  _h,
  _hQ,
  _IB,
  _LU,
  _LUT,
  _N,
  _PP,
  _RT,
  _RTR,
  _S,
  _SGI,
  _SI,
  _ST,
  _TK,
  _TNOS,
  _UVE,
  _UVER,
  _UVERp,
  _VE,
  _VEE,
  _VEEL,
  _VEEp,
  _VEI,
  _VEIp,
  _VEO,
  _VEp,
  _VO,
  _VPCDI,
  _VPCI,
  _VPCO,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChangeProgressStage = struct(n0, _CPS, 0, [_N, _S, _De, _LU], [0, 0, 0, 4]);
export var ChangeProgressStatusDetails = struct(
  n0,
  _CPSD,
  0,
  [_CI, _ST, _S, _PP, _CP, _TNOS, _CPSh, _CCS, _LUT, _IB],
  [0, 4, 0, 64 | 0, 64 | 0, 1, () => ChangeProgressStageList, 0, 4, 0]
);
export var CreateVpcEndpointRequest = struct(n0, _CVER, 0, [_DA, _VO, _CT], [0, () => VPCOptions, 0]);
export var CreateVpcEndpointResponse = struct(n0, _CVERr, 0, [_VE], [() => VpcEndpoint]);
export var DescribeDomainChangeProgressRequest = struct(
  n0,
  _DDCPR,
  0,
  [_DN, _CI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ch,
      },
    ],
  ]
);
export var DescribeDomainChangeProgressResponse = struct(n0, _DDCPRe, 0, [_CPSha], [() => ChangeProgressStatusDetails]);
export var DescribeVpcEndpointsRequest = struct(n0, _DVERes, 0, [_VEIp], [64 | 0]);
export var DescribeVpcEndpointsResponse = struct(
  n0,
  _DVEResc,
  0,
  [_VEp, _VEE],
  [() => VpcEndpoints, () => VpcEndpointErrorList]
);
export var RemoveTagsRequest = struct(n0, _RTR, 0, [_ARN, _TK], [0, 64 | 0]);
export var UpdateVpcEndpointRequest = struct(n0, _UVER, 0, [_VEI, _VO], [0, () => VPCOptions]);
export var UpdateVpcEndpointResponse = struct(n0, _UVERp, 0, [_VE], [() => VpcEndpoint]);
export var VPCDerivedInfo = struct(n0, _VPCDI, 0, [_VPCI, _SI, _AZ, _SGI], [0, 64 | 0, 64 | 0, 64 | 0]);
export var VpcEndpoint = struct(n0, _VE, 0, [_VEI, _VEO, _DA, _VO, _S, _En], [0, 0, 0, () => VPCDerivedInfo, 0, 0]);
export var VpcEndpointError = struct(n0, _VEEp, 0, [_VEI, _EC, _EM], [0, 0, 0]);
export var VPCOptions = struct(n0, _VPCO, 0, [_SI, _SGI], [64 | 0, 64 | 0]);
export var ChangeProgressStageList = list(n0, _CPSL, 0, () => ChangeProgressStage);
export var StringList = 64 | 0;

export var VpcEndpointErrorList = list(n0, _VEEL, 0, () => VpcEndpointError);
export var VpcEndpointIdList = 64 | 0;

export var VpcEndpoints = list(n0, _VEp, 0, () => VpcEndpoint);
export var CreateVpcEndpoint = op(
  n0,
  _CVE,
  {
    [_h]: ["POST", "/2015-01-01/es/vpcEndpoints", 200],
  },
  () => CreateVpcEndpointRequest,
  () => CreateVpcEndpointResponse
);
export var DescribeDomainChangeProgress = op(
  n0,
  _DDCP,
  {
    [_h]: ["GET", "/2015-01-01/es/domain/{DomainName}/progress", 200],
  },
  () => DescribeDomainChangeProgressRequest,
  () => DescribeDomainChangeProgressResponse
);
export var DescribeVpcEndpoints = op(
  n0,
  _DVEe,
  {
    [_h]: ["POST", "/2015-01-01/es/vpcEndpoints/describe", 200],
  },
  () => DescribeVpcEndpointsRequest,
  () => DescribeVpcEndpointsResponse
);
export var RemoveTags = op(
  n0,
  _RT,
  {
    [_h]: ["POST", "/2015-01-01/tags-removal", 200],
  },
  () => RemoveTagsRequest,
  () => Unit
);
export var UpdateVpcEndpoint = op(
  n0,
  _UVE,
  {
    [_h]: ["POST", "/2015-01-01/es/vpcEndpoints/update", 200],
  },
  () => UpdateVpcEndpointRequest,
  () => UpdateVpcEndpointResponse
);
