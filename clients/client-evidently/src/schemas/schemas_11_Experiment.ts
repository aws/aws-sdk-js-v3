// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cT,
  _d,
  _eCx,
  _h,
  _hQ,
  _lC,
  _LS,
  _LSR,
  _LSRi,
  _lUT,
  _mR,
  _n,
  _nT,
  _pa,
  _S,
  _seg,
  _SL,
  _ta,
  n0,
} from "./schemas_0";
import { SegmentPattern } from "./schemas_16_Segment";

/* eslint no-var: 0 */

export var ListSegmentsRequest = struct(
  n0,
  _LSR,
  0,
  [_mR, _nT],
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
export var ListSegmentsResponse = struct(n0, _LSRi, 0, [_seg, _nT], [[() => SegmentList, 0], 0]);
export var Segment = struct(
  n0,
  _S,
  0,
  [_ar, _n, _pa, _cT, _lUT, _d, _eCx, _lC, _ta],
  [0, 0, [() => SegmentPattern, 0], 4, 4, 0, 1, 1, 128 | 0]
);
export var SegmentList = list(n0, _SL, 0, [() => Segment, 0]);
export var ListSegments = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/segments", 200],
  },
  () => ListSegmentsRequest,
  () => ListSegmentsResponse
);
