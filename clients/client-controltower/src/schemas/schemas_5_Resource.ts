// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _CLZ,
  _CLZI,
  _CLZO,
  _h,
  _hQ,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _ma,
  _oI,
  _rA,
  _t,
  _tK,
  _TRa,
  _TRI,
  _TRO,
  _UR,
  _URI,
  _URO,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateLandingZoneInput = struct(n0, _CLZI, 0, [_v, _ma, _t], [0, 15, 128 | 0]);
export var CreateLandingZoneOutput = struct(n0, _CLZO, 0, [_a, _oI], [0, 0]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_t], [128 | 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeys = 64 | 0;

export var TagMap = 128 | 0;

export var CreateLandingZone = op(
  n0,
  _CLZ,
  {
    [_h]: ["POST", "/create-landingzone", 200],
  },
  () => CreateLandingZoneInput,
  () => CreateLandingZoneOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 204],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 204],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
