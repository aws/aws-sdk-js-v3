// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _CIo,
  _CT,
  _CTo,
  _DOM,
  _DOW,
  _DS,
  _E,
  _GR,
  _GRR,
  _GRRe,
  _HOD,
  _HOT,
  _MOH,
  _MS,
  _MSo,
  _Na,
  _NOOC,
  _R,
  _RA,
  _RIo,
  _RM,
  _RSe,
  _S,
  _SC,
  _SCM,
  _ST,
  _TZI,
  _WS,
  _WSe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CoverageTime = struct(n0, _CT, 0, [_S, _E], [() => HandOffTime, () => HandOffTime]);
export var GetRotationRequest = struct(n0, _GRR, 0, [_RIo], [0]);
export var GetRotationResult = struct(
  n0,
  _GRRe,
  0,
  [_RA, _Na, _CIo, _ST, _TZI, _R],
  [0, 0, 64 | 0, 4, 0, () => RecurrenceSettings]
);
export var HandOffTime = struct(n0, _HOT, 0, [_HOD, _MOH], [1, 1]);
export var MonthlySetting = struct(n0, _MS, 0, [_DOM, _HOT], [1, () => HandOffTime]);
export var RecurrenceSettings = struct(
  n0,
  _RSe,
  0,
  [_MSo, _WS, _DS, _NOOC, _SC, _RM],
  [() => MonthlySettings, () => WeeklySettings, () => DailySettings, 1, () => ShiftCoveragesMap, 1]
);
export var WeeklySetting = struct(n0, _WSe, 0, [_DOW, _HOT], [0, () => HandOffTime]);
export var CoverageTimes = list(n0, _CTo, 0, () => CoverageTime);
export var DailySettings = list(n0, _DS, 0, () => HandOffTime);
export var MonthlySettings = list(n0, _MSo, 0, () => MonthlySetting);
export var RotationContactsArnList = 64 | 0;

export var WeeklySettings = list(n0, _WS, 0, () => WeeklySetting);
export var ShiftCoveragesMap = map(n0, _SCM, 0, 0, () => CoverageTimes);
export var GetRotation = op(
  n0,
  _GR,
  0,
  () => GetRotationRequest,
  () => GetRotationResult
);
