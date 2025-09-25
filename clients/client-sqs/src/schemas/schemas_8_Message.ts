// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  BatchEntryIdsNotDistinct as __BatchEntryIdsNotDistinct,
  EmptyBatchRequest as __EmptyBatchRequest,
  InvalidBatchEntryId as __InvalidBatchEntryId,
  TooManyEntriesInBatchRequest as __TooManyEntriesInBatchRequest,
} from "../models/index";
import {
  _aQE,
  _BEIND,
  _BREE,
  _BREEL,
  _C,
  _c,
  _DMB,
  _DMBR,
  _DMBRE,
  _DMBRe,
  _DMBREe,
  _DMBREL,
  _DMBRELe,
  _E,
  _e,
  _EBR,
  _F,
  _hE,
  _I,
  _IBEI,
  _M,
  _m,
  _QU,
  _RH,
  _S,
  _SF,
  _TMEIBR,
  _xF,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchEntryIdsNotDistinct = error(
  n0,
  _BEIND,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AWS.SimpleQueueService.BatchEntryIdsNotDistinct`, 400],
  },
  [_m],
  [0],

  __BatchEntryIdsNotDistinct
);
export var BatchResultErrorEntry = struct(n0, _BREE, 0, [_I, _SF, _C, _M], [0, 2, 0, 0]);
export var DeleteMessageBatchRequest = struct(
  n0,
  _DMBR,
  0,
  [_QU, _E],
  [
    0,
    [
      () => DeleteMessageBatchRequestEntryList,
      {
        [_xN]: _DMBRE,
        [_xF]: 1,
      },
    ],
  ]
);
export var DeleteMessageBatchRequestEntry = struct(n0, _DMBRE, 0, [_I, _RH], [0, 0]);
export var DeleteMessageBatchResult = struct(
  n0,
  _DMBRe,
  0,
  [_S, _F],
  [
    [
      () => DeleteMessageBatchResultEntryList,
      {
        [_xN]: _DMBREe,
        [_xF]: 1,
      },
    ],
    [
      () => BatchResultErrorEntryList,
      {
        [_xN]: _BREE,
        [_xF]: 1,
      },
    ],
  ]
);
export var DeleteMessageBatchResultEntry = struct(n0, _DMBREe, 0, [_I], [0]);
export var EmptyBatchRequest = error(
  n0,
  _EBR,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AWS.SimpleQueueService.EmptyBatchRequest`, 400],
  },
  [_m],
  [0],

  __EmptyBatchRequest
);
export var InvalidBatchEntryId = error(
  n0,
  _IBEI,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AWS.SimpleQueueService.InvalidBatchEntryId`, 400],
  },
  [_m],
  [0],

  __InvalidBatchEntryId
);
export var TooManyEntriesInBatchRequest = error(
  n0,
  _TMEIBR,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AWS.SimpleQueueService.TooManyEntriesInBatchRequest`, 400],
  },
  [_m],
  [0],

  __TooManyEntriesInBatchRequest
);
export var BatchResultErrorEntryList = list(n0, _BREEL, 0, () => BatchResultErrorEntry);
export var DeleteMessageBatchRequestEntryList = list(n0, _DMBREL, 0, () => DeleteMessageBatchRequestEntry);
export var DeleteMessageBatchResultEntryList = list(n0, _DMBRELe, 0, () => DeleteMessageBatchResultEntry);
export var DeleteMessageBatch = op(
  n0,
  _DMB,
  0,
  () => DeleteMessageBatchRequest,
  () => DeleteMessageBatchResult
);
