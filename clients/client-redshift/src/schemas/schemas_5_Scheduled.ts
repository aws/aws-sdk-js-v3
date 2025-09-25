// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidScheduledActionFault as __InvalidScheduledActionFault,
  ScheduledActionAlreadyExistsFault as __ScheduledActionAlreadyExistsFault,
  ScheduledActionQuotaExceededFault as __ScheduledActionQuotaExceededFault,
  ScheduledActionTypeUnsupportedFault as __ScheduledActionTypeUnsupportedFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CIl,
  _Cla,
  _CSA,
  _CSAM,
  _CT,
  _e,
  _Enab,
  _ET,
  _hE,
  _IRa,
  _ISAF,
  _m,
  _MSA,
  _MSAM,
  _NI,
  _NON,
  _NT,
  _PC,
  _RCes,
  _RCesu,
  _RCMe,
  _RNI,
  _SAAEF,
  _SAc,
  _SAD,
  _SAN,
  _SAQEF,
  _SAT,
  _SATc,
  _SATL,
  _SATUF,
  _Sc,
  _Sta,
  _STt,
  _TAa,
  _TRNOI,
  _xN,
  n0,
} from "./schemas_0";
import { PauseClusterMessage } from "./schemas_30_Scheduled";
import { ResumeClusterMessage } from "./schemas_72_Scheduled";

/* eslint no-var: 0 */

export var CreateScheduledActionMessage = struct(
  n0,
  _CSAM,
  0,
  [_SAN, _TAa, _Sc, _IRa, _SAD, _STt, _ET, _Enab],
  [0, () => ScheduledActionType, 0, 0, 0, 4, 4, 2]
);
export var InvalidScheduledActionFault = error(
  n0,
  _ISAF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidScheduledAction`, 400],
  },
  [_m],
  [0],

  __InvalidScheduledActionFault
);
export var ModifyScheduledActionMessage = struct(
  n0,
  _MSAM,
  0,
  [_SAN, _TAa, _Sc, _IRa, _SAD, _STt, _ET, _Enab],
  [0, () => ScheduledActionType, 0, 0, 0, 4, 4, 2]
);
export var ResizeClusterMessage = struct(
  n0,
  _RCMe,
  0,
  [_CIl, _CT, _NT, _NON, _Cla, _RNI, _TRNOI],
  [0, 0, 0, 1, 2, 0, 0]
);
export var ScheduledAction = struct(
  n0,
  _SAc,
  0,
  [_SAN, _TAa, _Sc, _IRa, _SAD, _Sta, _NI, _STt, _ET],
  [0, () => ScheduledActionType, 0, 0, 0, 0, [() => ScheduledActionTimeList, 0], 4, 4]
);
export var ScheduledActionAlreadyExistsFault = error(
  n0,
  _SAAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ScheduledActionAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ScheduledActionAlreadyExistsFault
);
export var ScheduledActionQuotaExceededFault = error(
  n0,
  _SAQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ScheduledActionQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ScheduledActionQuotaExceededFault
);
export var ScheduledActionType = struct(
  n0,
  _SAT,
  0,
  [_RCes, _PC, _RCesu],
  [() => ResizeClusterMessage, () => PauseClusterMessage, () => ResumeClusterMessage]
);
export var ScheduledActionTypeUnsupportedFault = error(
  n0,
  _SATUF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ScheduledActionTypeUnsupported`, 400],
  },
  [_m],
  [0],

  __ScheduledActionTypeUnsupportedFault
);
export var ScheduledActionTimeList = list(n0, _SATL, 0, [
  4,
  {
    [_xN]: _SATc,
  },
]);
export var CreateScheduledAction = op(
  n0,
  _CSA,
  0,
  () => CreateScheduledActionMessage,
  () => ScheduledAction
);
export var ModifyScheduledAction = op(
  n0,
  _MSA,
  0,
  () => ModifyScheduledActionMessage,
  () => ScheduledAction
);
