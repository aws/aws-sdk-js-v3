// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CIha,
  _cIha,
  _hQ,
  _ht,
  _jN,
  _LMP,
  _LMPR,
  _LMPRi,
  _lOMPS,
  _MIu,
  _MPSu,
  _MPu,
  _mPu,
  _MR,
  _mR,
  _NT,
  _nT,
  _PNr,
  _pNr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListMultiplexProgramsRequest = struct(
  n0,
  _LMPR,
  0,
  [_MR, _MIu, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListMultiplexProgramsResponse = struct(
  n0,
  _LMPRi,
  0,
  [_MPu, _NT],
  [
    [
      () => __listOfMultiplexProgramSummary,
      {
        [_jN]: _mPu,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var MultiplexProgramSummary = struct(
  n0,
  _MPSu,
  0,
  [_CIha, _PNr],
  [
    [
      0,
      {
        [_jN]: _cIha,
      },
    ],
    [
      0,
      {
        [_jN]: _pNr,
      },
    ],
  ]
);
export var __listOfMultiplexProgramSummary = list(n0, _lOMPS, 0, [() => MultiplexProgramSummary, 0]);
export var ListMultiplexPrograms = op(
  n0,
  _LMP,
  {
    [_ht]: ["GET", "/prod/multiplexes/{MultiplexId}/programs", 200],
  },
  () => ListMultiplexProgramsRequest,
  () => ListMultiplexProgramsResponse
);
