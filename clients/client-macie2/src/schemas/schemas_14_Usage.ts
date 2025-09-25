// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _cu, _eCs, _GUT, _GUTR, _GUTRe, _h, _hQ, _jN, _lOUT, _tR, _ty, _UT, _uT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetUsageTotalsRequest = struct(
  n0,
  _GUTR,
  0,
  [_tR],
  [
    [
      0,
      {
        [_hQ]: _tR,
      },
    ],
  ]
);
export var GetUsageTotalsResponse = struct(
  n0,
  _GUTRe,
  0,
  [_tR, _uT],
  [
    [
      0,
      {
        [_jN]: _tR,
      },
    ],
    [
      () => __listOfUsageTotal,
      {
        [_jN]: _uT,
      },
    ],
  ]
);
export var UsageTotal = struct(
  n0,
  _UT,
  0,
  [_cu, _eCs, _ty],
  [
    [
      0,
      {
        [_jN]: _cu,
      },
    ],
    [
      0,
      {
        [_jN]: _eCs,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var __listOfUsageTotal = list(n0, _lOUT, 0, [() => UsageTotal, 0]);
export var GetUsageTotals = op(
  n0,
  _GUT,
  {
    [_h]: ["GET", "/usage", 200],
  },
  () => GetUsageTotalsRequest,
  () => GetUsageTotalsResponse
);
