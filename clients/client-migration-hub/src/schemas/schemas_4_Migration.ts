// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _AIp,
  _AS,
  _ASL,
  _ASp,
  _DAS,
  _DASR,
  _DASRe,
  _DMT,
  _DMTR,
  _DMTRe,
  _DR,
  _LAS,
  _LASR,
  _LASRi,
  _LMT,
  _LMTR,
  _LMTRi,
  _LMTU,
  _LMTUR,
  _LMTURi,
  _LRAL,
  _LUT,
  _MR,
  _MT,
  _MTN,
  _MTS,
  _MTSi,
  _MTSL,
  _MTU,
  _MTUL,
  _NAS,
  _NASR,
  _NASRo,
  _NMTS,
  _NMTSR,
  _NMTSRo,
  _NT,
  _NUS,
  _PP,
  _PRA,
  _PRAR,
  _PRARu,
  _PUS,
  _RA,
  _RAL,
  _RN,
  _S,
  _SD,
  _T,
  _Ty,
  _UDT,
  _UT,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationState = struct(n0, _AS, 0, [_AI, _ASp, _LUT], [0, 0, 4]);
export var DescribeApplicationStateRequest = struct(n0, _DASR, 0, [_AI], [0]);
export var DescribeApplicationStateResult = struct(n0, _DASRe, 0, [_ASp, _LUT], [0, 4]);
export var DescribeMigrationTaskRequest = struct(n0, _DMTR, 0, [_PUS, _MTN], [0, 0]);
export var DescribeMigrationTaskResult = struct(n0, _DMTRe, 0, [_MT], [() => MigrationTask]);
export var ListApplicationStatesRequest = struct(n0, _LASR, 0, [_AIp, _NT, _MR], [64 | 0, 0, 1]);
export var ListApplicationStatesResult = struct(n0, _LASRi, 0, [_ASL, _NT], [() => ApplicationStateList, 0]);
export var ListMigrationTasksRequest = struct(n0, _LMTR, 0, [_NT, _MR, _RN], [0, 1, 0]);
export var ListMigrationTasksResult = struct(n0, _LMTRi, 0, [_NT, _MTSL], [0, () => MigrationTaskSummaryList]);
export var ListMigrationTaskUpdatesRequest = struct(n0, _LMTUR, 0, [_PUS, _MTN, _NT, _MR], [0, 0, 0, 1]);
export var ListMigrationTaskUpdatesResult = struct(n0, _LMTURi, 0, [_NT, _MTUL], [0, () => MigrationTaskUpdateList]);
export var MigrationTask = struct(
  n0,
  _MT,
  0,
  [_PUS, _MTN, _T, _UDT, _RAL],
  [0, 0, () => Task, 4, () => LatestResourceAttributeList]
);
export var MigrationTaskSummary = struct(n0, _MTS, 0, [_PUS, _MTN, _S, _PP, _SD, _UDT], [0, 0, 0, 1, 0, 4]);
export var MigrationTaskUpdate = struct(n0, _MTU, 0, [_UDT, _UT, _MTSi], [4, 0, () => Task]);
export var NotifyApplicationStateRequest = struct(n0, _NASR, 0, [_AI, _S, _UDT, _DR], [0, 0, 4, 2]);
export var NotifyApplicationStateResult = struct(n0, _NASRo, 0, [], []);
export var NotifyMigrationTaskStateRequest = struct(
  n0,
  _NMTSR,
  0,
  [_PUS, _MTN, _T, _UDT, _NUS, _DR],
  [0, 0, () => Task, 4, 1, 2]
);
export var NotifyMigrationTaskStateResult = struct(n0, _NMTSRo, 0, [], []);
export var PutResourceAttributesRequest = struct(
  n0,
  _PRAR,
  0,
  [_PUS, _MTN, _RAL, _DR],
  [0, 0, () => ResourceAttributeList, 2]
);
export var PutResourceAttributesResult = struct(n0, _PRARu, 0, [], []);
export var ResourceAttribute = struct(n0, _RA, 0, [_Ty, _V], [0, 0]);
export var Task = struct(n0, _T, 0, [_S, _SD, _PP], [0, 0, 1]);
export var Unit = "unit" as const;

export var ApplicationIds = 64 | 0;

export var ApplicationStateList = list(n0, _ASL, 0, () => ApplicationState);
export var LatestResourceAttributeList = list(n0, _LRAL, 0, () => ResourceAttribute);
export var MigrationTaskSummaryList = list(n0, _MTSL, 0, () => MigrationTaskSummary);
export var MigrationTaskUpdateList = list(n0, _MTUL, 0, () => MigrationTaskUpdate);
export var ResourceAttributeList = list(n0, _RAL, 0, () => ResourceAttribute);
export var DescribeApplicationState = op(
  n0,
  _DAS,
  0,
  () => DescribeApplicationStateRequest,
  () => DescribeApplicationStateResult
);
export var DescribeMigrationTask = op(
  n0,
  _DMT,
  0,
  () => DescribeMigrationTaskRequest,
  () => DescribeMigrationTaskResult
);
export var ListApplicationStates = op(
  n0,
  _LAS,
  0,
  () => ListApplicationStatesRequest,
  () => ListApplicationStatesResult
);
export var ListMigrationTasks = op(
  n0,
  _LMT,
  0,
  () => ListMigrationTasksRequest,
  () => ListMigrationTasksResult
);
export var ListMigrationTaskUpdates = op(
  n0,
  _LMTU,
  0,
  () => ListMigrationTaskUpdatesRequest,
  () => ListMigrationTaskUpdatesResult
);
export var NotifyApplicationState = op(
  n0,
  _NAS,
  0,
  () => NotifyApplicationStateRequest,
  () => NotifyApplicationStateResult
);
export var NotifyMigrationTaskState = op(
  n0,
  _NMTS,
  0,
  () => NotifyMigrationTaskStateRequest,
  () => NotifyMigrationTaskStateResult
);
export var PutResourceAttributes = op(
  n0,
  _PRA,
  0,
  () => PutResourceAttributesRequest,
  () => PutResourceAttributesResult
);
