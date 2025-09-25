// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AGIA,
  _AGII,
  _AI,
  _CA,
  _GAGI,
  _GAGIR,
  _GAGIRe,
  _h,
  _hCR,
  _hH,
  _hL,
  _ICA,
  _ICAA,
  _ICIA,
  _xaai,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccessGrantsInstanceRequest = struct(
  n0,
  _GAGIR,
  0,
  [_AI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var GetAccessGrantsInstanceResult = struct(
  n0,
  _GAGIRe,
  0,
  [_AGIA, _AGII, _ICA, _ICIA, _ICAA, _CA],
  [0, 0, 0, 0, 0, 4]
);
export var GetAccessGrantsInstance = op(
  n0,
  _GAGI,
  {
    [_h]: ["GET", "/v20180820/accessgrantsinstance", 200],
    [_hCR]: 1,
  },
  () => GetAccessGrantsInstanceRequest,
  () => GetAccessGrantsInstanceResult
);
