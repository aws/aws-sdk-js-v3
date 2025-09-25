// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _c,
  _CE,
  _DP,
  _DPR,
  _DPRe,
  _e,
  _h,
  _hQ,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _P,
  _PI,
  _RA,
  _T,
  _TK,
  _tK,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { Profile } from "./schemas_4_Profile";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ConflictException
);
export var DeleteProfileRequest = struct(n0, _DPR, 0, [_PI], [[0, 1]]);
export var DeleteProfileResponse = struct(n0, _DPRe, 0, [_P], [() => Profile]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [128 | 0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RA, _TK],
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
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var DeleteProfile = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/profile/{ProfileId}", 200],
  },
  () => DeleteProfileRequest,
  () => DeleteProfileResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
