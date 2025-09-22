// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AL,
  _aL,
  _ALc,
  _aRN,
  _c,
  _cA,
  _cB,
  _cC,
  _CL,
  _CLR,
  _CLRr,
  _CQLA,
  _CQLAR,
  _CQLARr,
  _cT,
  _d,
  _de,
  _DL,
  _DLR,
  _DLRe,
  _dN,
  _DQLA,
  _DQLAR,
  _DQLARe,
  _eA,
  _eE,
  _eEn,
  _EESAD,
  _EESADn,
  _eI,
  _end,
  _fI,
  _GL,
  _GLR,
  _GLRe,
  _GQLA,
  _GQLAR,
  _GQLARe,
  _GSA,
  _GSAR,
  _GSARe,
  _h,
  _hH,
  _hQ,
  _iT,
  _jI,
  _lI,
  _li,
  _LL,
  _LLR,
  _LLRi,
  _LQLA,
  _LQLAR,
  _LQLARi,
  _LS,
  _LSi,
  _man,
  _mC,
  _mR,
  _nT,
  _p,
  _pEC,
  _pM,
  _pP,
  _qI,
  _qLA,
  _QLAS,
  _QLASu,
  _SAD,
  _sAI,
  _sAt,
  _sI,
  _sIe,
  _sIJA,
  _SIJASAD,
  _st,
  _tI,
  _tRa,
  _TRSAD,
  _uA,
  _uB,
  _UL,
  _ULR,
  _ULRp,
  _UQLA,
  _UQLAR,
  _UQLARp,
  _wUA,
  _XACT,
  Description,
  n0,
} from "./schemas_0";
import { SessionActionProgressMessage, TaskParameters, TaskRunManifestPropertiesListResponse } from "./schemas_2_Get";

/* eslint no-var: 0 */

export var AcquiredLimit = struct(n0, _AL, 0, [_lI, _c], [0, 1]);
export var CreateLimitRequest = struct(
  n0,
  _CLR,
  0,
  [_cT, _dN, _aRN, _mC, _fI, _de],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    0,
    0,
    1,
    [0, 1],
    [() => Description, 0],
  ]
);
export var CreateLimitResponse = struct(n0, _CLRr, 0, [_lI], [0]);
export var CreateQueueLimitAssociationRequest = struct(n0, _CQLAR, 0, [_fI, _qI, _lI], [[0, 1], 0, 0]);
export var CreateQueueLimitAssociationResponse = struct(n0, _CQLARr, 0, [], []);
export var DeleteLimitRequest = struct(
  n0,
  _DLR,
  0,
  [_fI, _lI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteLimitResponse = struct(n0, _DLRe, 0, [], []);
export var DeleteQueueLimitAssociationRequest = struct(
  n0,
  _DQLAR,
  0,
  [_fI, _qI, _lI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteQueueLimitAssociationResponse = struct(n0, _DQLARe, 0, [], []);
export var EnvironmentEnterSessionActionDefinition = struct(n0, _EESAD, 0, [_eI], [0]);
export var EnvironmentExitSessionActionDefinition = struct(n0, _EESADn, 0, [_eI], [0]);
export var GetLimitRequest = struct(
  n0,
  _GLR,
  0,
  [_fI, _lI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetLimitResponse = struct(
  n0,
  _GLRe,
  0,
  [_dN, _aRN, _mC, _cA, _cB, _uA, _uB, _fI, _lI, _cC, _de],
  [0, 0, 1, 5, 0, 5, 0, 0, 0, 1, [() => Description, 0]]
);
export var GetQueueLimitAssociationRequest = struct(
  n0,
  _GQLAR,
  0,
  [_fI, _qI, _lI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetQueueLimitAssociationResponse = struct(
  n0,
  _GQLARe,
  0,
  [_cA, _cB, _uA, _uB, _qI, _lI, _st],
  [5, 0, 5, 0, 0, 0, 0]
);
export var GetSessionActionRequest = struct(
  n0,
  _GSAR,
  0,
  [_fI, _qI, _jI, _sAI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetSessionActionResponse = struct(
  n0,
  _GSARe,
  0,
  [_sAI, _st, _sAt, _eA, _wUA, _pP, _sIe, _pEC, _pM, _d, _aL, _man],
  [
    0,
    0,
    5,
    5,
    5,
    1,
    0,
    1,
    [() => SessionActionProgressMessage, 0],
    [() => SessionActionDefinition, 0],
    () => AcquiredLimits,
    () => TaskRunManifestPropertiesListResponse,
  ]
);
export var LimitSummary = struct(
  n0,
  _LS,
  0,
  [_dN, _aRN, _mC, _cA, _cB, _uA, _uB, _fI, _lI, _cC],
  [0, 0, 1, 5, 0, 5, 0, 0, 0, 1]
);
export var ListLimitsRequest = struct(
  n0,
  _LLR,
  0,
  [_fI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListLimitsResponse = struct(n0, _LLRi, 0, [_li, _nT], [() => LimitSummaries, 0]);
export var ListQueueLimitAssociationsRequest = struct(
  n0,
  _LQLAR,
  0,
  [_fI, _qI, _lI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _qI,
      },
    ],
    [
      0,
      {
        [_hQ]: _lI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListQueueLimitAssociationsResponse = struct(
  n0,
  _LQLARi,
  0,
  [_qLA, _nT],
  [() => QueueLimitAssociationSummaries, 0]
);
export var QueueLimitAssociationSummary = struct(
  n0,
  _QLAS,
  0,
  [_cA, _cB, _uA, _uB, _qI, _lI, _st],
  [5, 0, 5, 0, 0, 0, 0]
);
export var SyncInputJobAttachmentsSessionActionDefinition = struct(n0, _SIJASAD, 0, [_sI], [0]);
export var TaskRunSessionActionDefinition = struct(n0, _TRSAD, 0, [_tI, _sI, _p], [0, 0, [() => TaskParameters, 0]]);
export var UpdateLimitRequest = struct(
  n0,
  _ULR,
  0,
  [_fI, _lI, _dN, _de, _mC],
  [[0, 1], [0, 1], 0, [() => Description, 0], 1]
);
export var UpdateLimitResponse = struct(n0, _ULRp, 0, [], []);
export var UpdateQueueLimitAssociationRequest = struct(
  n0,
  _UQLAR,
  0,
  [_fI, _qI, _lI, _st],
  [[0, 1], [0, 1], [0, 1], 0]
);
export var UpdateQueueLimitAssociationResponse = struct(n0, _UQLARp, 0, [], []);
export var AcquiredLimits = list(n0, _ALc, 0, () => AcquiredLimit);
export var LimitSummaries = list(n0, _LSi, 0, () => LimitSummary);
export var QueueLimitAssociationSummaries = list(n0, _QLASu, 0, () => QueueLimitAssociationSummary);
export var SessionActionDefinition = uni(
  n0,
  _SAD,
  0,
  [_eE, _eEn, _tRa, _sIJA],
  [
    () => EnvironmentEnterSessionActionDefinition,
    () => EnvironmentExitSessionActionDefinition,
    [() => TaskRunSessionActionDefinition, 0],
    () => SyncInputJobAttachmentsSessionActionDefinition,
  ]
);
export var CreateLimit = op(
  n0,
  _CL,
  {
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/limits", 200],
    [_end]: ["management."],
  },
  () => CreateLimitRequest,
  () => CreateLimitResponse
);
export var CreateQueueLimitAssociation = op(
  n0,
  _CQLA,
  {
    [_h]: ["PUT", "/2023-10-12/farms/{farmId}/queue-limit-associations", 200],
    [_end]: ["management."],
  },
  () => CreateQueueLimitAssociationRequest,
  () => CreateQueueLimitAssociationResponse
);
export var DeleteLimit = op(
  n0,
  _DL,
  {
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/limits/{limitId}", 200],
    [_end]: ["management."],
  },
  () => DeleteLimitRequest,
  () => DeleteLimitResponse
);
export var DeleteQueueLimitAssociation = op(
  n0,
  _DQLA,
  {
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}", 200],
    [_end]: ["management."],
  },
  () => DeleteQueueLimitAssociationRequest,
  () => DeleteQueueLimitAssociationResponse
);
export var GetLimit = op(
  n0,
  _GL,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/limits/{limitId}", 200],
    [_end]: ["management."],
  },
  () => GetLimitRequest,
  () => GetLimitResponse
);
export var GetQueueLimitAssociation = op(
  n0,
  _GQLA,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}", 200],
  },
  () => GetQueueLimitAssociationRequest,
  () => GetQueueLimitAssociationResponse
);
export var GetSessionAction = op(
  n0,
  _GSA,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions/{sessionActionId}", 200],
    [_end]: ["management."],
  },
  () => GetSessionActionRequest,
  () => GetSessionActionResponse
);
export var ListLimits = op(
  n0,
  _LL,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/limits", 200],
  },
  () => ListLimitsRequest,
  () => ListLimitsResponse
);
export var ListQueueLimitAssociations = op(
  n0,
  _LQLA,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queue-limit-associations", 200],
  },
  () => ListQueueLimitAssociationsRequest,
  () => ListQueueLimitAssociationsResponse
);
export var UpdateLimit = op(
  n0,
  _UL,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/limits/{limitId}", 200],
    [_end]: ["management."],
  },
  () => UpdateLimitRequest,
  () => UpdateLimitResponse
);
export var UpdateQueueLimitAssociation = op(
  n0,
  _UQLA,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}", 200],
    [_end]: ["management."],
  },
  () => UpdateQueueLimitAssociationRequest,
  () => UpdateQueueLimitAssociationResponse
);
