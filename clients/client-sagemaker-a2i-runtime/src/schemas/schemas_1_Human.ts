// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _c,
  _CC,
  _CE,
  _CT,
  _CTA,
  _CTB,
  _DA,
  _DHL,
  _DHLe,
  _DHLR,
  _DHLRe,
  _DHLRes,
  _DHLResc,
  _e,
  _FC,
  _FDA,
  _FR,
  _h,
  _hE,
  _HLA,
  _HLDA,
  _HLI,
  _HLN,
  _HLO,
  _HLS,
  _HLSu,
  _HLSum,
  _hQ,
  _IC,
  _ISE,
  _LHL,
  _LHLR,
  _LHLRi,
  _M,
  _MR,
  _NT,
  _OSU,
  _RNFE,
  _s,
  _SHL,
  _SHLR,
  _SHLRt,
  _SHLRto,
  _SHLRtop,
  _SHLt,
  _SO,
  _SQEE,
  _TE,
  _VE,
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
  [_M],
  [0],

  __ConflictException
);
export var DeleteHumanLoopRequest = struct(n0, _DHLR, 0, [_HLN], [[0, 1]]);
export var DeleteHumanLoopResponse = struct(n0, _DHLRe, 0, [], []);
export var DescribeHumanLoopRequest = struct(n0, _DHLRes, 0, [_HLN], [[0, 1]]);
export var DescribeHumanLoopResponse = struct(
  n0,
  _DHLResc,
  0,
  [_CT, _FR, _FC, _HLS, _HLN, _HLA, _FDA, _HLO],
  [5, 0, 0, 0, 0, 0, 0, () => HumanLoopOutput]
);
export var HumanLoopDataAttributes = struct(n0, _HLDA, 0, [_CC], [64 | 0]);
export var HumanLoopInput = struct(n0, _HLI, 0, [_IC], [0]);
export var HumanLoopOutput = struct(n0, _HLO, 0, [_OSU], [0]);
export var HumanLoopSummary = struct(n0, _HLSu, 0, [_HLN, _HLS, _CT, _FR, _FDA], [0, 0, 5, 0, 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ListHumanLoopsRequest = struct(
  n0,
  _LHLR,
  0,
  [_CTA, _CTB, _FDA, _SO, _NT, _MR],
  [
    [
      5,
      {
        [_hQ]: _CTA,
      },
    ],
    [
      5,
      {
        [_hQ]: _CTB,
      },
    ],
    [
      0,
      {
        [_hQ]: _FDA,
      },
    ],
    [
      0,
      {
        [_hQ]: _SO,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListHumanLoopsResponse = struct(n0, _LHLRi, 0, [_HLSum, _NT], [() => HumanLoopSummaries, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var StartHumanLoopRequest = struct(
  n0,
  _SHLR,
  0,
  [_HLN, _FDA, _HLI, _DA],
  [0, 0, () => HumanLoopInput, () => HumanLoopDataAttributes]
);
export var StartHumanLoopResponse = struct(n0, _SHLRt, 0, [_HLA], [0]);
export var StopHumanLoopRequest = struct(n0, _SHLRto, 0, [_HLN], [0]);
export var StopHumanLoopResponse = struct(n0, _SHLRtop, 0, [], []);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var ContentClassifiers = 64 | 0;

export var HumanLoopSummaries = list(n0, _HLSum, 0, () => HumanLoopSummary);
export var DeleteHumanLoop = op(
  n0,
  _DHL,
  {
    [_h]: ["DELETE", "/human-loops/{HumanLoopName}", 200],
  },
  () => DeleteHumanLoopRequest,
  () => DeleteHumanLoopResponse
);
export var DescribeHumanLoop = op(
  n0,
  _DHLe,
  {
    [_h]: ["GET", "/human-loops/{HumanLoopName}", 200],
  },
  () => DescribeHumanLoopRequest,
  () => DescribeHumanLoopResponse
);
export var ListHumanLoops = op(
  n0,
  _LHL,
  {
    [_h]: ["GET", "/human-loops", 200],
  },
  () => ListHumanLoopsRequest,
  () => ListHumanLoopsResponse
);
export var StartHumanLoop = op(
  n0,
  _SHL,
  {
    [_h]: ["POST", "/human-loops", 200],
  },
  () => StartHumanLoopRequest,
  () => StartHumanLoopResponse
);
export var StopHumanLoop = op(
  n0,
  _SHLt,
  {
    [_h]: ["POST", "/human-loops/stop", 200],
  },
  () => StopHumanLoopRequest,
  () => StopHumanLoopResponse
);
