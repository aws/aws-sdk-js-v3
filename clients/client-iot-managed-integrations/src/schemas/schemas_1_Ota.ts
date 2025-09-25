// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _c,
  _DOT,
  _DOTR,
  _e,
  _EN,
  _ES,
  _h,
  _hE,
  _hQ,
  _Id,
  _LEE,
  _LOTE,
  _LOTER,
  _LOTERi,
  _LUA,
  _Me,
  _MR,
  _MTI,
  _NT,
  _OTES,
  _OTESLD,
  _OTESt,
  _QA,
  _RAet,
  _SA,
  _St,
  _TES,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOtaTaskRequest = struct(n0, _DOTR, 0, [_Id], [[0, 1]]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 410,
  },
  [_Me],
  [0],

  __LimitExceededException
);
export var ListOtaTaskExecutionsRequest = struct(
  n0,
  _LOTER,
  0,
  [_Id, _NT, _MR],
  [
    [0, 1],
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
export var ListOtaTaskExecutionsResponse = struct(
  n0,
  _LOTERi,
  0,
  [_ES, _NT],
  [() => OtaTaskExecutionSummariesListDefinition, 0]
);
export var OtaTaskExecutionSummaries = struct(n0, _OTES, 0, [_TES, _MTI], [() => OtaTaskExecutionSummary, 0]);
export var OtaTaskExecutionSummary = struct(n0, _OTESt, 0, [_EN, _LUA, _QA, _RAet, _SA, _St], [1, 4, 4, 1, 4, 0]);
export var OtaTaskExecutionSummariesListDefinition = list(n0, _OTESLD, 0, () => OtaTaskExecutionSummaries);
export var DeleteOtaTask = op(
  n0,
  _DOT,
  {
    [_h]: ["DELETE", "/ota-tasks/{Identifier}", 200],
  },
  () => DeleteOtaTaskRequest,
  () => Unit
);
export var ListOtaTaskExecutions = op(
  n0,
  _LOTE,
  {
    [_h]: ["GET", "/ota-tasks/{Identifier}/devices", 200],
  },
  () => ListOtaTaskExecutionsRequest,
  () => ListOtaTaskExecutionsResponse
);
