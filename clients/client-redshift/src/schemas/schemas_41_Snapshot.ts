// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidClusterSnapshotScheduleStateFault as __InvalidClusterSnapshotScheduleStateFault,
  SnapshotScheduleNotFoundFault as __SnapshotScheduleNotFoundFault,
  SnapshotScheduleUpdateInProgressFault as __SnapshotScheduleUpdateInProgressFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CIl,
  _DSi,
  _DSS,
  _DSSM,
  _e,
  _hE,
  _ICSSSF,
  _m,
  _MCSS,
  _MCSSM,
  _MSS,
  _MSSM,
  _SD,
  _SIc,
  _SSNFF,
  _SSUIPF,
  n0,
  Unit,
} from "./schemas_0";
import { ScheduleDefinitionList, SnapshotSchedule } from "./schemas_1_Snapshot";

/* eslint no-var: 0 */

export var DeleteSnapshotScheduleMessage = struct(n0, _DSSM, 0, [_SIc], [0]);
export var InvalidClusterSnapshotScheduleStateFault = error(
  n0,
  _ICSSSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidClusterSnapshotScheduleState`, 400],
  },
  [_m],
  [0],

  __InvalidClusterSnapshotScheduleStateFault
);
export var ModifyClusterSnapshotScheduleMessage = struct(n0, _MCSSM, 0, [_CIl, _SIc, _DSi], [0, 0, 2]);
export var ModifySnapshotScheduleMessage = struct(n0, _MSSM, 0, [_SIc, _SD], [0, [() => ScheduleDefinitionList, 0]]);
export var SnapshotScheduleNotFoundFault = error(
  n0,
  _SSNFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotScheduleNotFound`, 400],
  },
  [_m],
  [0],

  __SnapshotScheduleNotFoundFault
);
export var SnapshotScheduleUpdateInProgressFault = error(
  n0,
  _SSUIPF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotScheduleUpdateInProgress`, 400],
  },
  [_m],
  [0],

  __SnapshotScheduleUpdateInProgressFault
);
export var DeleteSnapshotSchedule = op(
  n0,
  _DSS,
  0,
  () => DeleteSnapshotScheduleMessage,
  () => Unit
);
export var ModifyClusterSnapshotSchedule = op(
  n0,
  _MCSS,
  0,
  () => ModifyClusterSnapshotScheduleMessage,
  () => Unit
);
export var ModifySnapshotSchedule = op(
  n0,
  _MSS,
  0,
  () => ModifySnapshotScheduleMessage,
  () => SnapshotSchedule
);
