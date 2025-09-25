// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aO,
  _d,
  _h,
  _hQ,
  _iAO,
  _LS,
  _LSR,
  _LSRi,
  _mR,
  _nT,
  _sAtr,
  _sIt,
  _SS,
  _SSt,
  _stre,
  _sVtr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListStreamsRequest = struct(
  n0,
  _LSR,
  0,
  [_mR, _nT, _aO],
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
    [
      2,
      {
        [_hQ]: _iAO,
      },
    ],
  ]
);
export var ListStreamsResponse = struct(n0, _LSRi, 0, [_stre, _nT], [() => StreamsSummary, 0]);
export var StreamSummary = struct(n0, _SS, 0, [_sIt, _sAtr, _sVtr, _d], [0, 0, 1, 0]);
export var StreamsSummary = list(n0, _SSt, 0, () => StreamSummary);
export var ListStreams = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/streams", 200],
  },
  () => ListStreamsRequest,
  () => ListStreamsResponse
);
