// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _ADE,
  _aWJ,
  _c,
  _de,
  _DS,
  _DSL,
  _e,
  _h,
  _hE,
  _hQ,
  _jI,
  _LD,
  _LDI,
  _LDO,
  _LT,
  _LTI,
  _LTO,
  _m,
  _mDA,
  _mDI,
  _mR,
  _nT,
  _st,
  _tA,
  _tag,
  _tas,
  _TE,
  _tI,
  _TS,
  _TSL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var DeviceSummary = struct(n0, _DS, 0, [_mDI, _mDA, _aWJ, _tag], [0, 0, 0, 128 | 0]);
export var ListDevicesInput = struct(
  n0,
  _LDI,
  0,
  [_jI, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _jI,
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
export var ListDevicesOutput = struct(n0, _LDO, 0, [_de, _nT], [() => DeviceSummaryList, 0]);
export var ListTasksInput = struct(
  n0,
  _LTI,
  0,
  [_st, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _st,
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
export var ListTasksOutput = struct(n0, _LTO, 0, [_tas, _nT], [() => TaskSummaryList, 0]);
export var TaskSummary = struct(n0, _TS, 0, [_tI, _tA, _st, _tag], [0, 0, 0, 128 | 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var DeviceSummaryList = list(n0, _DSL, 0, () => DeviceSummary);
export var TaskSummaryList = list(n0, _TSL, 0, () => TaskSummary);
export var ListDevices = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/managed-devices", 200],
  },
  () => ListDevicesInput,
  () => ListDevicesOutput
);
export var ListTasks = op(
  n0,
  _LT,
  {
    [_h]: ["GET", "/tasks", 200],
  },
  () => ListTasksInput,
  () => ListTasksOutput
);
