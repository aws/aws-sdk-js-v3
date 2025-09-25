// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _b, _EA, _EAR, _EARx, _EV, _eV, _hQ, _ht, _IE, _iE, _OT, _oT, _SN, _sN, _Sp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExportApiRequest = struct(
  n0,
  _EAR,
  0,
  [_AI, _EV, _IE, _OT, _Sp, _SN],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _eV,
      },
    ],
    [
      2,
      {
        [_hQ]: _iE,
      },
    ],
    [
      0,
      {
        [_hQ]: _oT,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _sN,
      },
    ],
  ]
);
export var ExportApiResponse = struct(n0, _EARx, 0, [_b], [[21, 16]]);
export var ExportApi = op(
  n0,
  _EA,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/exports/{Specification}", 200],
  },
  () => ExportApiRequest,
  () => ExportApiResponse
);
