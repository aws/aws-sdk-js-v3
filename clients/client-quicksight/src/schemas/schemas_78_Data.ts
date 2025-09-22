// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _ASv,
  _CSr,
  _CVPCC,
  _CVPCCR,
  _CVPCCRr,
  _DR,
  _h,
  _N,
  _RA,
  _RI,
  _SGI,
  _SIu,
  _St,
  _Ta,
  _USpd,
  _UVPCC,
  _UVPCCR,
  _UVPCCRp,
  _VPCCI,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVPCConnectionRequest = struct(
  n0,
  _CVPCCR,
  0,
  [_AAI, _VPCCI, _N, _SIu, _SGI, _DR, _RA, _Ta],
  [[0, 1], 0, 0, 64 | 0, 64 | 0, 64 | 0, 0, () => TagList]
);
export var CreateVPCConnectionResponse = struct(
  n0,
  _CVPCCRr,
  0,
  [_Ar, _VPCCI, _CSr, _ASv, _RI, _St],
  [0, 0, 0, 0, 0, [1, 32]]
);
export var UpdateVPCConnectionRequest = struct(
  n0,
  _UVPCCR,
  0,
  [_AAI, _VPCCI, _N, _SIu, _SGI, _DR, _RA],
  [[0, 1], [0, 1], 0, 64 | 0, 64 | 0, 64 | 0, 0]
);
export var UpdateVPCConnectionResponse = struct(
  n0,
  _UVPCCRp,
  0,
  [_Ar, _VPCCI, _USpd, _ASv, _RI, _St],
  [0, 0, 0, 0, 0, [1, 32]]
);
export var DnsResolverList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var CreateVPCConnection = op(
  n0,
  _CVPCC,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/vpc-connections", 200],
  },
  () => CreateVPCConnectionRequest,
  () => CreateVPCConnectionResponse
);
export var UpdateVPCConnection = op(
  n0,
  _UVPCC,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}", 200],
  },
  () => UpdateVPCConnectionRequest,
  () => UpdateVPCConnectionResponse
);
