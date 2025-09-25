// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aSGI,
  _aSI,
  _BGVE,
  _BGVER,
  _BGVERa,
  _cD,
  _cT,
  _DVE,
  _DVED,
  _dVED,
  _DVER,
  _DVERe,
  _eC,
  _eM,
  _fC,
  _fM,
  _i,
  _id_,
  _lMD,
  _n,
  _rSGI,
  _rSI,
  _s,
  _sGI,
  _sI,
  _UVE,
  _UVED,
  _UVER,
  _UVERp,
  _VED,
  _vED,
  _VEDp,
  _VEED,
  _vEED,
  _VEEDp,
  _vI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetVpcEndpointRequest = struct(n0, _BGVER, 0, [_i], [64 | 0]);
export var BatchGetVpcEndpointResponse = struct(
  n0,
  _BGVERa,
  0,
  [_vED, _vEED],
  [() => VpcEndpointDetails, () => VpcEndpointErrorDetails]
);
export var DeleteVpcEndpointDetail = struct(n0, _DVED, 0, [_id_, _n, _s], [0, 0, 0]);
export var DeleteVpcEndpointRequest = struct(n0, _DVER, 0, [_id_, _cT], [0, [0, 4]]);
export var DeleteVpcEndpointResponse = struct(n0, _DVERe, 0, [_dVED], [() => DeleteVpcEndpointDetail]);
export var UpdateVpcEndpointDetail = struct(
  n0,
  _UVED,
  0,
  [_id_, _n, _s, _sI, _sGI, _lMD],
  [0, 0, 0, 64 | 0, 64 | 0, 1]
);
export var UpdateVpcEndpointRequest = struct(
  n0,
  _UVER,
  0,
  [_id_, _aSI, _rSI, _aSGI, _rSGI, _cT],
  [0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, [0, 4]]
);
export var UpdateVpcEndpointResponse = struct(n0, _UVERp, 0, [_UVED], [() => UpdateVpcEndpointDetail]);
export var VpcEndpointDetail = struct(
  n0,
  _VED,
  0,
  [_id_, _n, _vI, _sI, _sGI, _s, _cD, _fC, _fM],
  [0, 0, 0, 64 | 0, 64 | 0, 0, 1, 0, 0]
);
export var VpcEndpointErrorDetail = struct(n0, _VEED, 0, [_id_, _eM, _eC], [0, 0, 0]);
export var SecurityGroupIds = 64 | 0;

export var SubnetIds = 64 | 0;

export var VpcEndpointDetails = list(n0, _VEDp, 0, () => VpcEndpointDetail);
export var VpcEndpointErrorDetails = list(n0, _VEEDp, 0, () => VpcEndpointErrorDetail);
export var VpcEndpointIds = 64 | 0;

export var BatchGetVpcEndpoint = op(
  n0,
  _BGVE,
  0,
  () => BatchGetVpcEndpointRequest,
  () => BatchGetVpcEndpointResponse
);
export var DeleteVpcEndpoint = op(
  n0,
  _DVE,
  2,
  () => DeleteVpcEndpointRequest,
  () => DeleteVpcEndpointResponse
);
export var UpdateVpcEndpoint = op(
  n0,
  _UVE,
  2,
  () => UpdateVpcEndpointRequest,
  () => UpdateVpcEndpointResponse
);
