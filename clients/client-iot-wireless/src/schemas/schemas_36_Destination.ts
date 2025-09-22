// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CD,
  _CDR,
  _CDRr,
  _CRT,
  _D,
  _Des,
  _DL,
  _E,
  _ET,
  _GD,
  _GDR,
  _GDRe,
  _h,
  _hQ,
  _LD,
  _LDR,
  _LDRi,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _RA,
  _Ta,
  _UD,
  _UDR,
  _UDRp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDestinationRequest = struct(
  n0,
  _CDR,
  0,
  [_N, _ET, _E, _D, _RA, _Ta, _CRT],
  [0, 0, 0, 0, 0, () => TagList, [0, 4]]
);
export var CreateDestinationResponse = struct(n0, _CDRr, 0, [_Ar, _N], [0, 0]);
export var Destinations = struct(n0, _Des, 0, [_Ar, _N, _ET, _E, _D, _RA], [0, 0, 0, 0, 0, 0]);
export var GetDestinationRequest = struct(n0, _GDR, 0, [_N], [[0, 1]]);
export var GetDestinationResponse = struct(n0, _GDRe, 0, [_Ar, _N, _E, _ET, _D, _RA], [0, 0, 0, 0, 0, 0]);
export var ListDestinationsRequest = struct(
  n0,
  _LDR,
  0,
  [_MR, _NT],
  [
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
export var ListDestinationsResponse = struct(n0, _LDRi, 0, [_NT, _DL], [0, () => DestinationList]);
export var UpdateDestinationRequest = struct(n0, _UDR, 0, [_N, _ET, _E, _D, _RA], [[0, 1], 0, 0, 0, 0]);
export var UpdateDestinationResponse = struct(n0, _UDRp, 0, [], []);
export var DestinationList = list(n0, _DL, 0, () => Destinations);
export var CreateDestination = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/destinations", 201],
  },
  () => CreateDestinationRequest,
  () => CreateDestinationResponse
);
export var GetDestination = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/destinations/{Name}", 200],
  },
  () => GetDestinationRequest,
  () => GetDestinationResponse
);
export var ListDestinations = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/destinations", 200],
  },
  () => ListDestinationsRequest,
  () => ListDestinationsResponse
);
export var UpdateDestination = op(
  n0,
  _UD,
  {
    [_h]: ["PATCH", "/destinations/{Name}", 204],
  },
  () => UpdateDestinationRequest,
  () => UpdateDestinationResponse
);
