// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { TaskAlreadyExistsException as __TaskAlreadyExistsException } from "../models/index";
import {
  _ACTAM,
  _aCTAM,
  _ACTRCF,
  _aCTRCF,
  _aDc,
  _aEc,
  _aI,
  _AMAEM,
  _AMAEML,
  _AMATM,
  _AMATML,
  _AMATS,
  _AMATT,
  _aN,
  _aPc,
  _aSc,
  _aTI,
  _CAMAT,
  _CAMATR,
  _CAMATRa,
  _CDMAT,
  _CDMATR,
  _CDMATRa,
  _cFC,
  _cl,
  _cRT,
  _DAMAT,
  _DAMATR,
  _DAMATRe,
  _DMAE,
  _DMAEL,
  _eC,
  _eED,
  _er,
  _eSD,
  _eT,
  _fFC,
  _fI,
  _fIi,
  _h,
  _hE,
  _hQ,
  _id,
  _LAMAE,
  _LAMAER,
  _LAMAERi,
  _LAMAT,
  _LAMATR,
  _LAMATRi,
  _LDMAE,
  _LDMAER,
  _LDMAERi,
  _MA,
  _MAL,
  _me,
  _mR,
  _n,
  _nT,
  _rA,
  _SAMAT,
  _SAMATR,
  _SAMATRt,
  _sFC,
  _sFCk,
  _sT,
  _st,
  _TAEE,
  _tar,
  _tas,
  _tFC,
  _tI,
  _tN,
  _tS,
  _tSas,
  _TSFAC,
  _vI,
  n0,
} from "./schemas_0";
import { MitigationActionParams } from "./schemas_47_Mitigation";

/* eslint no-var: 0 */

export var AuditMitigationActionExecutionMetadata = struct(
  n0,
  _AMAEM,
  0,
  [_tI, _fI, _aN, _aI, _st, _sT, _eT, _eC, _me],
  [0, 0, 0, 0, 0, 4, 4, 0, 0]
);
export var AuditMitigationActionsTaskMetadata = struct(n0, _AMATM, 0, [_tI, _sT, _tS], [0, 4, 0]);
export var AuditMitigationActionsTaskTarget = struct(
  n0,
  _AMATT,
  0,
  [_aTI, _fIi, _aCTRCF],
  [0, 64 | 0, map(n0, _ACTRCF, 0, 0, 64 | 0)]
);
export var CancelAuditMitigationActionsTaskRequest = struct(n0, _CAMATR, 0, [_tI], [[0, 1]]);
export var CancelAuditMitigationActionsTaskResponse = struct(n0, _CAMATRa, 0, [], []);
export var CancelDetectMitigationActionsTaskRequest = struct(n0, _CDMATR, 0, [_tI], [[0, 1]]);
export var CancelDetectMitigationActionsTaskResponse = struct(n0, _CDMATRa, 0, [], []);
export var DescribeAuditMitigationActionsTaskRequest = struct(n0, _DAMATR, 0, [_tI], [[0, 1]]);
export var DescribeAuditMitigationActionsTaskResponse = struct(
  n0,
  _DAMATRe,
  0,
  [_tS, _sT, _eT, _tSas, _tar, _aCTAM, _aDc],
  [
    0,
    4,
    4,
    () => AuditMitigationActionsTaskStatistics,
    () => AuditMitigationActionsTaskTarget,
    map(n0, _ACTAM, 0, 0, 64 | 0),
    () => MitigationActionList,
  ]
);
export var DetectMitigationActionExecution = struct(
  n0,
  _DMAE,
  0,
  [_tI, _vI, _aN, _tN, _eSD, _eED, _st, _eC, _me],
  [0, 0, 0, 0, 4, 4, 0, 0, 0]
);
export var ListAuditMitigationActionsExecutionsRequest = struct(
  n0,
  _LAMAER,
  0,
  [_tI, _aSc, _fI, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _tI,
      },
    ],
    [
      0,
      {
        [_hQ]: _aSc,
      },
    ],
    [
      0,
      {
        [_hQ]: _fI,
      },
    ],
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
export var ListAuditMitigationActionsExecutionsResponse = struct(
  n0,
  _LAMAERi,
  0,
  [_aEc, _nT],
  [() => AuditMitigationActionExecutionMetadataList, 0]
);
export var ListAuditMitigationActionsTasksRequest = struct(
  n0,
  _LAMATR,
  0,
  [_aTI, _fI, _tS, _mR, _nT, _sT, _eT],
  [
    [
      0,
      {
        [_hQ]: _aTI,
      },
    ],
    [
      0,
      {
        [_hQ]: _fI,
      },
    ],
    [
      0,
      {
        [_hQ]: _tS,
      },
    ],
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
      4,
      {
        [_hQ]: _sT,
      },
    ],
    [
      4,
      {
        [_hQ]: _eT,
      },
    ],
  ]
);
export var ListAuditMitigationActionsTasksResponse = struct(
  n0,
  _LAMATRi,
  0,
  [_tas, _nT],
  [() => AuditMitigationActionsTaskMetadataList, 0]
);
export var ListDetectMitigationActionsExecutionsRequest = struct(
  n0,
  _LDMAER,
  0,
  [_tI, _vI, _tN, _sT, _eT, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _tI,
      },
    ],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      0,
      {
        [_hQ]: _tN,
      },
    ],
    [
      4,
      {
        [_hQ]: _sT,
      },
    ],
    [
      4,
      {
        [_hQ]: _eT,
      },
    ],
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
export var ListDetectMitigationActionsExecutionsResponse = struct(
  n0,
  _LDMAERi,
  0,
  [_aEc, _nT],
  [() => DetectMitigationActionExecutionList, 0]
);
export var MitigationAction = struct(n0, _MA, 0, [_n, _id, _rA, _aPc], [0, 0, 0, () => MitigationActionParams]);
export var StartAuditMitigationActionsTaskRequest = struct(
  n0,
  _SAMATR,
  0,
  [_tI, _tar, _aCTAM, _cRT],
  [[0, 1], () => AuditMitigationActionsTaskTarget, map(n0, _ACTAM, 0, 0, 64 | 0), [0, 4]]
);
export var StartAuditMitigationActionsTaskResponse = struct(n0, _SAMATRt, 0, [_tI], [0]);
export var TaskAlreadyExistsException = error(
  n0,
  _TAEE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __TaskAlreadyExistsException
);
export var TaskStatisticsForAuditCheck = struct(n0, _TSFAC, 0, [_tFC, _fFC, _sFC, _sFCk, _cFC], [1, 1, 1, 1, 1]);
export var AuditMitigationActionExecutionMetadataList = list(
  n0,
  _AMAEML,
  0,
  () => AuditMitigationActionExecutionMetadata
);
export var AuditMitigationActionsTaskMetadataList = list(n0, _AMATML, 0, () => AuditMitigationActionsTaskMetadata);
export var DetectMitigationActionExecutionList = list(n0, _DMAEL, 0, () => DetectMitigationActionExecution);
export var FindingIds = 64 | 0;

export var MitigationActionList = list(n0, _MAL, 0, () => MitigationAction);
export var MitigationActionNameList = 64 | 0;

export var ReasonForNonComplianceCodes = 64 | 0;

export var AuditCheckToActionsMapping = map(n0, _ACTAM, 0, 0, 64 | 0);
export var AuditCheckToReasonCodeFilter = map(n0, _ACTRCF, 0, 0, 64 | 0);
export var AuditMitigationActionsTaskStatistics = map(n0, _AMATS, 0, 0, () => TaskStatisticsForAuditCheck);
export var CancelAuditMitigationActionsTask = op(
  n0,
  _CAMAT,
  {
    [_h]: ["PUT", "/audit/mitigationactions/tasks/{taskId}/cancel", 200],
  },
  () => CancelAuditMitigationActionsTaskRequest,
  () => CancelAuditMitigationActionsTaskResponse
);
export var CancelDetectMitigationActionsTask = op(
  n0,
  _CDMAT,
  {
    [_h]: ["PUT", "/detect/mitigationactions/tasks/{taskId}/cancel", 200],
  },
  () => CancelDetectMitigationActionsTaskRequest,
  () => CancelDetectMitigationActionsTaskResponse
);
export var DescribeAuditMitigationActionsTask = op(
  n0,
  _DAMAT,
  {
    [_h]: ["GET", "/audit/mitigationactions/tasks/{taskId}", 200],
  },
  () => DescribeAuditMitigationActionsTaskRequest,
  () => DescribeAuditMitigationActionsTaskResponse
);
export var ListAuditMitigationActionsExecutions = op(
  n0,
  _LAMAE,
  {
    [_h]: ["GET", "/audit/mitigationactions/executions", 200],
  },
  () => ListAuditMitigationActionsExecutionsRequest,
  () => ListAuditMitigationActionsExecutionsResponse
);
export var ListAuditMitigationActionsTasks = op(
  n0,
  _LAMAT,
  {
    [_h]: ["GET", "/audit/mitigationactions/tasks", 200],
  },
  () => ListAuditMitigationActionsTasksRequest,
  () => ListAuditMitigationActionsTasksResponse
);
export var ListDetectMitigationActionsExecutions = op(
  n0,
  _LDMAE,
  {
    [_h]: ["GET", "/detect/mitigationactions/executions", 200],
  },
  () => ListDetectMitigationActionsExecutionsRequest,
  () => ListDetectMitigationActionsExecutionsResponse
);
export var StartAuditMitigationActionsTask = op(
  n0,
  _SAMAT,
  {
    [_h]: ["POST", "/audit/mitigationactions/tasks/{taskId}", 200],
  },
  () => StartAuditMitigationActionsTaskRequest,
  () => StartAuditMitigationActionsTaskResponse
);
