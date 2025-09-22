// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NoSuchGeoLocation as __NoSuchGeoLocation } from "../models/index";
import {
  _c,
  _CCo,
  _CCou,
  _CN,
  _CNo,
  _co,
  _cou,
  _e,
  _GGL,
  _GGLR,
  _GGLRe,
  _GLD,
  _hE,
  _hQ,
  _ht,
  _m,
  _NSGL,
  _s,
  _SC,
  _SN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GeoLocationDetails = struct(n0, _GLD, 0, [_CCo, _CN, _CCou, _CNo, _SC, _SN], [0, 0, 0, 0, 0, 0]);
export var GetGeoLocationRequest = struct(
  n0,
  _GGLR,
  0,
  [_CCo, _CCou, _SC],
  [
    [
      0,
      {
        [_hQ]: _co,
      },
    ],
    [
      0,
      {
        [_hQ]: _cou,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
  ]
);
export var GetGeoLocationResponse = struct(n0, _GGLRe, 0, [_GLD], [() => GeoLocationDetails]);
export var NoSuchGeoLocation = error(
  n0,
  _NSGL,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NoSuchGeoLocation
);
export var GetGeoLocation = op(
  n0,
  _GGL,
  {
    [_ht]: ["GET", "/2013-04-01/geolocation", 200],
  },
  () => GetGeoLocationRequest,
  () => GetGeoLocationResponse
);
