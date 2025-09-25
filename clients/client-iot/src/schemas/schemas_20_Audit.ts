// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _ACD,
  _ADu,
  _aDu,
  _ATM,
  _ATML,
  _CAT,
  _CATR,
  _CATRa,
  _cC,
  _cCan,
  _cCo,
  _cRS,
  _DAT,
  _DATR,
  _DATRe,
  _eC,
  _eT,
  _fCa,
  _h,
  _hQ,
  _iPC,
  _LAT,
  _LATR,
  _LATRi,
  _me,
  _mR,
  _nCC,
  _nCRC,
  _nT,
  _sAN,
  _sNCRC,
  _SODAT,
  _SODATR,
  _SODATRt,
  _sT,
  _tas,
  _tCN,
  _tCot,
  _tI,
  _tRC,
  _TS,
  _tS,
  _tSas,
  _tST,
  _tT,
  _wFDCC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuditCheckDetails = struct(n0, _ACD, 0, [_cRS, _cC, _tRC, _nCRC, _sNCRC, _eC, _me], [0, 2, 1, 1, 1, 0, 0]);
export var AuditTaskMetadata = struct(n0, _ATM, 0, [_tI, _tS, _tT], [0, 0, 0]);
export var CancelAuditTaskRequest = struct(n0, _CATR, 0, [_tI], [[0, 1]]);
export var CancelAuditTaskResponse = struct(n0, _CATRa, 0, [], []);
export var DescribeAuditTaskRequest = struct(n0, _DATR, 0, [_tI], [[0, 1]]);
export var DescribeAuditTaskResponse = struct(
  n0,
  _DATRe,
  0,
  [_tS, _tT, _tST, _tSas, _sAN, _aDu],
  [0, 0, 4, () => TaskStatistics, 0, () => AuditDetails]
);
export var ListAuditTasksRequest = struct(
  n0,
  _LATR,
  0,
  [_sT, _eT, _tT, _tS, _nT, _mR],
  [
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
      0,
      {
        [_hQ]: _tT,
      },
    ],
    [
      0,
      {
        [_hQ]: _tS,
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
export var ListAuditTasksResponse = struct(n0, _LATRi, 0, [_tas, _nT], [() => AuditTaskMetadataList, 0]);
export var StartOnDemandAuditTaskRequest = struct(n0, _SODATR, 0, [_tCN], [64 | 0]);
export var StartOnDemandAuditTaskResponse = struct(n0, _SODATRt, 0, [_tI], [0]);
export var TaskStatistics = struct(n0, _TS, 0, [_tCot, _iPC, _wFDCC, _cCo, _nCC, _fCa, _cCan], [1, 1, 1, 1, 1, 1, 1]);
export var AuditTaskMetadataList = list(n0, _ATML, 0, () => AuditTaskMetadata);
export var AuditDetails = map(n0, _ADu, 0, 0, () => AuditCheckDetails);
export var CancelAuditTask = op(
  n0,
  _CAT,
  {
    [_h]: ["PUT", "/audit/tasks/{taskId}/cancel", 200],
  },
  () => CancelAuditTaskRequest,
  () => CancelAuditTaskResponse
);
export var DescribeAuditTask = op(
  n0,
  _DAT,
  {
    [_h]: ["GET", "/audit/tasks/{taskId}", 200],
  },
  () => DescribeAuditTaskRequest,
  () => DescribeAuditTaskResponse
);
export var ListAuditTasks = op(
  n0,
  _LAT,
  {
    [_h]: ["GET", "/audit/tasks", 200],
  },
  () => ListAuditTasksRequest,
  () => ListAuditTasksResponse
);
export var StartOnDemandAuditTask = op(
  n0,
  _SODAT,
  {
    [_h]: ["POST", "/audit/tasks", 200],
  },
  () => StartOnDemandAuditTaskRequest,
  () => StartOnDemandAuditTaskResponse
);
