// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidScheduleFault as __InvalidScheduleFault,
  ScheduleDefinitionTypeUnsupportedFault as __ScheduleDefinitionTypeUnsupportedFault,
  SnapshotScheduleAlreadyExistsFault as __SnapshotScheduleAlreadyExistsFault,
  SnapshotScheduleQuotaExceededFault as __SnapshotScheduleQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CSS,
  _CSSM,
  _DRr,
  _e,
  _hE,
  _ISF,
  _m,
  _NI,
  _SD,
  _SDc,
  _SDTUF,
  _SIc,
  _SSAEF,
  _SSQEF,
  _T,
  n0,
  TagList,
} from "./schemas_0";
import { ScheduleDefinitionList, SnapshotSchedule } from "./schemas_1_Snapshot";

/* eslint no-var: 0 */

export var CreateSnapshotScheduleMessage = struct(
  n0,
  _CSSM,
  0,
  [_SD, _SIc, _SDc, _T, _DRr, _NI],
  [[() => ScheduleDefinitionList, 0], 0, 0, [() => TagList, 0], 2, 1]
);
export var InvalidScheduleFault = error(
  n0,
  _ISF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSchedule`, 400],
  },
  [_m],
  [0],

  __InvalidScheduleFault
);
export var ScheduleDefinitionTypeUnsupportedFault = error(
  n0,
  _SDTUF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ScheduleDefinitionTypeUnsupported`, 400],
  },
  [_m],
  [0],

  __ScheduleDefinitionTypeUnsupportedFault
);
export var SnapshotScheduleAlreadyExistsFault = error(
  n0,
  _SSAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotScheduleAlreadyExists`, 400],
  },
  [_m],
  [0],

  __SnapshotScheduleAlreadyExistsFault
);
export var SnapshotScheduleQuotaExceededFault = error(
  n0,
  _SSQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotScheduleQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __SnapshotScheduleQuotaExceededFault
);
export var CreateSnapshotSchedule = op(
  n0,
  _CSS,
  0,
  () => CreateSnapshotScheduleMessage,
  () => SnapshotSchedule
);
