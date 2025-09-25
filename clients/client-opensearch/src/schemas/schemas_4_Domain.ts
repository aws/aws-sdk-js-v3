// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZv,
  _DA,
  _DVEe,
  _DVERes,
  _DVEResc,
  _EC,
  _EM,
  _En,
  _h,
  _S,
  _SGI,
  _SI,
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
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeVpcEndpointsRequest = struct(n0, _DVERes, 0, [_VEIp], [64 | 0]);
export var DescribeVpcEndpointsResponse = struct(
  n0,
  _DVEResc,
  0,
  [_VEp, _VEE],
  [() => VpcEndpoints, () => VpcEndpointErrorList]
);
export var VPCDerivedInfo = struct(n0, _VPCDI, 0, [_VPCI, _SI, _AZv, _SGI], [0, 64 | 0, 64 | 0, 64 | 0]);
export var VpcEndpoint = struct(n0, _VE, 0, [_VEI, _VEO, _DA, _VO, _S, _En], [0, 0, 0, () => VPCDerivedInfo, 0, 0]);
export var VpcEndpointError = struct(n0, _VEEp, 0, [_VEI, _EC, _EM], [0, 0, 0]);
export var VPCOptions = struct(n0, _VPCO, 0, [_SI, _SGI], [64 | 0, 64 | 0]);
export var VpcEndpointErrorList = list(n0, _VEEL, 0, () => VpcEndpointError);
export var VpcEndpointIdList = 64 | 0;

export var VpcEndpoints = list(n0, _VEp, 0, () => VpcEndpoint);
export var DescribeVpcEndpoints = op(
  n0,
  _DVEe,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/vpcEndpoints/describe", 200],
  },
  () => DescribeVpcEndpointsRequest,
  () => DescribeVpcEndpointsResponse
);
