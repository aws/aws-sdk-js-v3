// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _c,
  _CE,
  _cT,
  _DD,
  _DDe,
  _DDR,
  _DDRe,
  _DDRer,
  _DDRere,
  _e,
  _end,
  _h,
  _hE,
  _hQ,
  _i,
  _iT,
  _m,
  _rI,
  _rT,
  _tDS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var DeleteDeviceRequest = struct(
  n0,
  _DDR,
  0,
  [_i, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteDeviceResponse = struct(n0, _DDRe, 0, [], []);
export var DeregisterDeviceRequest = struct(n0, _DDRer, 0, [_i, _tDS, _cT], [[0, 1], 0, [0, 4]]);
export var DeregisterDeviceResponse = struct(n0, _DDRere, 0, [], []);
export var DeleteDevice = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/devices/{id}", 204],
    [_end]: ["api."],
  },
  () => DeleteDeviceRequest,
  () => DeleteDeviceResponse
);
export var DeregisterDevice = op(
  n0,
  _DDe,
  {
    [_h]: ["POST", "/deregister-device/{id}", 202],
    [_end]: ["api."],
  },
  () => DeregisterDeviceRequest,
  () => DeregisterDeviceResponse
);
