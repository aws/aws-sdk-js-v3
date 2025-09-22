// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ad,
  _aI,
  _AIc,
  _AR,
  _aR,
  _CH,
  _CNI,
  _cNI,
  _GNI,
  _GNT,
  _GNTR,
  _GNTRe,
  _H,
  _h,
  _hQ,
  _MR,
  _mR,
  _NT,
  _nT,
  _NTe,
  _NTL,
  _RA,
  _rA,
  _RGA,
  _rGA,
  _RIe,
  _RT,
  _rT,
  _St,
  _Ti,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectionHealth = struct(n0, _CH, 0, [_Ty, _St, _Ti], [0, 0, 4]);
export var GetNetworkTelemetryRequest = struct(
  n0,
  _GNTR,
  0,
  [_GNI, _CNI, _RGA, _AR, _AIc, _RT, _RA, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cNI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rGA,
      },
    ],
    [
      0,
      {
        [_hQ]: _aR,
      },
    ],
    [
      0,
      {
        [_hQ]: _aI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetNetworkTelemetryResponse = struct(n0, _GNTRe, 0, [_NTe, _NT], [() => NetworkTelemetryList, 0]);
export var NetworkTelemetry = struct(
  n0,
  _NTe,
  0,
  [_RGA, _CNI, _AR, _AIc, _RT, _RIe, _RA, _Ad, _H],
  [0, 0, 0, 0, 0, 0, 0, 0, () => ConnectionHealth]
);
export var NetworkTelemetryList = list(n0, _NTL, 0, () => NetworkTelemetry);
export var GetNetworkTelemetry = op(
  n0,
  _GNT,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/network-telemetry", 200],
  },
  () => GetNetworkTelemetryRequest,
  () => GetNetworkTelemetryResponse
);
