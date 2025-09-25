// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CTr,
  _ET,
  _GVO,
  _GVOR,
  _GVORe,
  _h,
  _hH,
  _HTTPP,
  _HTTPSP,
  _Id,
  _LMT,
  _N,
  _OPP,
  _OSP,
  _S,
  _VO,
  _VOEC,
  n0,
  OriginSslProtocols,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetVpcOriginRequest = struct(n0, _GVOR, 0, [_Id], [[0, 1]]);
export var GetVpcOriginResult = struct(
  n0,
  _GVORe,
  0,
  [_VO, _ET],
  [
    [() => VpcOrigin, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var VpcOrigin = struct(
  n0,
  _VO,
  0,
  [_Id, _Ar, _S, _CTr, _LMT, _VOEC],
  [0, 0, 0, 4, 4, [() => VpcOriginEndpointConfig, 0]]
);
export var VpcOriginEndpointConfig = struct(
  n0,
  _VOEC,
  0,
  [_N, _Ar, _HTTPP, _HTTPSP, _OPP, _OSP],
  [0, 0, 1, 1, 0, [() => OriginSslProtocols, 0]]
);
export var GetVpcOrigin = op(
  n0,
  _GVO,
  {
    [_h]: ["GET", "/2020-05-31/vpc-origin/{Id}", 200],
  },
  () => GetVpcOriginRequest,
  () => GetVpcOriginResult
);
