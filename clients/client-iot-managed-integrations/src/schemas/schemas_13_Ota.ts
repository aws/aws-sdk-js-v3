// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _ACb,
  _ACC,
  _ACCL,
  _BRPM,
  _CAr,
  _COT,
  _COTC,
  _COTCR,
  _COTCRr,
  _COTR,
  _COTRr,
  _CT,
  _D,
  _DIM,
  _DOTC,
  _DOTCR,
  _EB,
  _ERR,
  _ETn,
  _FT,
  _GOT,
  _GOTC,
  _GOTCR,
  _GOTCRe,
  _GOTR,
  _GOTRe,
  _h,
  _hQ,
  _Id,
  _IF,
  _IPTIM,
  _It,
  _LOT,
  _LOTC,
  _LOTCR,
  _LOTCRi,
  _LOTR,
  _LOTRi,
  _LUA,
  _MNOET,
  _MNOR,
  _MPM,
  _MR,
  _MW,
  _N,
  _NOCT,
  _NOFT,
  _NOIPT,
  _nONT,
  _nOQT,
  _nORT,
  _nORTu,
  _nOST,
  _nOTOT,
  _NT,
  _OM,
  _OSC,
  _OT,
  _OTAC,
  _OTCLD,
  _OTCN,
  _OTCS,
  _OTERC,
  _OTERCt,
  _OTLD,
  _OTQS,
  _OTS,
  _OTSC,
  _OTTC,
  _P,
  _PC,
  _pT,
  _RC,
  _RCC,
  _RCCL,
  _RIC,
  _RRIC,
  _SMW,
  _SMWL,
  _ST,
  _St,
  _SU,
  _TA,
  _Ta,
  _Tar,
  _Tas,
  _TC,
  _TCI,
  _TI,
  _TP,
  _TPD,
  _UOT,
  _UOTR,
  n0,
  TagsMap,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var OtaTaskConfigurationName = sim(n0, _OTCN, 0, 8);
export var AbortConfigCriteria = struct(n0, _ACC, 0, [_A, _FT, _MNOET, _TP], [0, 0, 1, 1]);
export var CreateOtaTaskConfigurationRequest = struct(
  n0,
  _COTCR,
  0,
  [_D, _N, _PC, _CT],
  [0, [() => OtaTaskConfigurationName, 0], () => PushConfig, [0, 4]]
);
export var CreateOtaTaskConfigurationResponse = struct(n0, _COTCRr, 0, [_TCI], [0]);
export var CreateOtaTaskRequest = struct(
  n0,
  _COTR,
  0,
  [_D, _SU, _P, _Tar, _TCI, _OM, _OT, _OTQS, _CT, _OSC, _OTERC, _Ta],
  [
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    0,
    0,
    [0, 4],
    () => OtaTaskSchedulingConfig,
    () => OtaTaskExecutionRetryConfig,
    [() => TagsMap, 0],
  ]
);
export var CreateOtaTaskResponse = struct(n0, _COTRr, 0, [_TI, _TA, _D], [0, 0, 0]);
export var DeleteOtaTaskConfigurationRequest = struct(n0, _DOTCR, 0, [_Id], [[0, 1]]);
export var ExponentialRolloutRate = struct(n0, _ERR, 0, [_BRPM, _IF, _RIC], [1, 1, () => RolloutRateIncreaseCriteria]);
export var GetOtaTaskConfigurationRequest = struct(n0, _GOTCR, 0, [_Id], [[0, 1]]);
export var GetOtaTaskConfigurationResponse = struct(
  n0,
  _GOTCRe,
  0,
  [_TCI, _N, _PC, _D, _CAr],
  [0, [() => OtaTaskConfigurationName, 0], () => PushConfig, 0, 4]
);
export var GetOtaTaskRequest = struct(n0, _GOTR, 0, [_Id], [[0, 1]]);
export var GetOtaTaskResponse = struct(
  n0,
  _GOTRe,
  0,
  [_TI, _TA, _D, _SU, _P, _OT, _OTQS, _OM, _Tar, _CAr, _LUA, _TCI, _TPD, _OSC, _OTERC, _St, _Ta],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    4,
    4,
    0,
    () => TaskProcessingDetails,
    () => OtaTaskSchedulingConfig,
    () => OtaTaskExecutionRetryConfig,
    0,
    [() => TagsMap, 0],
  ]
);
export var ListOtaTaskConfigurationsRequest = struct(
  n0,
  _LOTCR,
  0,
  [_NT, _MR],
  [
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
export var ListOtaTaskConfigurationsResponse = struct(
  n0,
  _LOTCRi,
  0,
  [_It, _NT],
  [[() => OtaTaskConfigurationListDefinition, 0], 0]
);
export var ListOtaTasksRequest = struct(
  n0,
  _LOTR,
  0,
  [_NT, _MR],
  [
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
export var ListOtaTasksResponse = struct(n0, _LOTRi, 0, [_Tas, _NT], [() => OtaTaskListDefinition, 0]);
export var OtaTaskAbortConfig = struct(n0, _OTAC, 0, [_ACCL], [() => AbortConfigCriteriaList]);
export var OtaTaskConfigurationSummary = struct(
  n0,
  _OTCS,
  0,
  [_TCI, _N, _CAr],
  [0, [() => OtaTaskConfigurationName, 0], 4]
);
export var OtaTaskExecutionRetryConfig = struct(n0, _OTERC, 0, [_RCC], [() => RetryConfigCriteriaList]);
export var OtaTaskExecutionRolloutConfig = struct(n0, _OTERCt, 0, [_ERR, _MPM], [() => ExponentialRolloutRate, 1]);
export var OtaTaskSchedulingConfig = struct(
  n0,
  _OTSC,
  0,
  [_EB, _ETn, _MW, _ST],
  [0, 0, () => ScheduleMaintenanceWindowList, 0]
);
export var OtaTaskSummary = struct(n0, _OTS, 0, [_TI, _TA, _CAr, _LUA, _TCI, _St], [0, 0, 4, 4, 0, 0]);
export var OtaTaskTimeoutConfig = struct(n0, _OTTC, 0, [_IPTIM], [1]);
export var PushConfig = struct(
  n0,
  _PC,
  0,
  [_ACb, _RC, _TC],
  [() => OtaTaskAbortConfig, () => OtaTaskExecutionRolloutConfig, () => OtaTaskTimeoutConfig]
);
export var RetryConfigCriteria = struct(n0, _RCC, 0, [_FT, _MNOR], [0, 1]);
export var RolloutRateIncreaseCriteria = struct(n0, _RRIC, 0, [_nONT, _nOST], [1, 1]);
export var ScheduleMaintenanceWindow = struct(n0, _SMW, 0, [_DIM, _ST], [1, 0]);
export var TaskProcessingDetails = struct(
  n0,
  _TPD,
  0,
  [_NOCT, _NOFT, _NOIPT, _nOQT, _nORT, _nORTu, _nOST, _nOTOT, _pT],
  [1, 1, 1, 1, 1, 1, 1, 1, 64 | 0]
);
export var UpdateOtaTaskRequest = struct(n0, _UOTR, 0, [_Id, _D, _TCI], [[0, 1], 0, 0]);
export var AbortConfigCriteriaList = list(n0, _ACCL, 0, () => AbortConfigCriteria);
export var OtaTaskConfigurationListDefinition = list(n0, _OTCLD, 0, [() => OtaTaskConfigurationSummary, 0]);
export var OtaTaskListDefinition = list(n0, _OTLD, 0, () => OtaTaskSummary);
export var RetryConfigCriteriaList = list(n0, _RCCL, 0, () => RetryConfigCriteria);
export var ScheduleMaintenanceWindowList = list(n0, _SMWL, 0, () => ScheduleMaintenanceWindow);
export var Target = 64 | 0;

export var CreateOtaTask = op(
  n0,
  _COT,
  {
    [_h]: ["POST", "/ota-tasks", 201],
  },
  () => CreateOtaTaskRequest,
  () => CreateOtaTaskResponse
);
export var CreateOtaTaskConfiguration = op(
  n0,
  _COTC,
  {
    [_h]: ["POST", "/ota-task-configurations", 201],
  },
  () => CreateOtaTaskConfigurationRequest,
  () => CreateOtaTaskConfigurationResponse
);
export var DeleteOtaTaskConfiguration = op(
  n0,
  _DOTC,
  {
    [_h]: ["DELETE", "/ota-task-configurations/{Identifier}", 204],
  },
  () => DeleteOtaTaskConfigurationRequest,
  () => Unit
);
export var GetOtaTask = op(
  n0,
  _GOT,
  {
    [_h]: ["GET", "/ota-tasks/{Identifier}", 200],
  },
  () => GetOtaTaskRequest,
  () => GetOtaTaskResponse
);
export var GetOtaTaskConfiguration = op(
  n0,
  _GOTC,
  {
    [_h]: ["GET", "/ota-task-configurations/{Identifier}", 200],
  },
  () => GetOtaTaskConfigurationRequest,
  () => GetOtaTaskConfigurationResponse
);
export var ListOtaTaskConfigurations = op(
  n0,
  _LOTC,
  {
    [_h]: ["GET", "/ota-task-configurations", 200],
  },
  () => ListOtaTaskConfigurationsRequest,
  () => ListOtaTaskConfigurationsResponse
);
export var ListOtaTasks = op(
  n0,
  _LOT,
  {
    [_h]: ["GET", "/ota-tasks", 200],
  },
  () => ListOtaTasksRequest,
  () => ListOtaTasksResponse
);
export var UpdateOtaTask = op(
  n0,
  _UOT,
  {
    [_h]: ["PUT", "/ota-tasks/{Identifier}", 204],
  },
  () => UpdateOtaTaskRequest,
  () => Unit
);
