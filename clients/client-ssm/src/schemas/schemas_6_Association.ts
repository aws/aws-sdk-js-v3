// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  InvalidNotificationConfig as __InvalidNotificationConfig,
  InvalidOutputFolder as __InvalidOutputFolder,
  InvalidRole as __InvalidRole,
  UnsupportedPlatformType as __UnsupportedPlatformType,
} from "../models/index";
import {
  _AC,
  _aQE,
  _C,
  _c,
  _CC,
  _CI,
  _CLo,
  _Co,
  _Com,
  _CWOC,
  _DH,
  _DHT,
  _DN,
  _DTOC,
  _DV,
  _e,
  _EA,
  _EC,
  _Fi,
  _II,
  _IIn,
  _INC,
  _IOF,
  _IRnv,
  _LCi,
  _LCR,
  _LCRi,
  _M,
  _MC,
  _ME,
  _MR,
  _NC,
  _NT,
  _OSBN,
  _OSKP,
  _OSR,
  _P,
  _RDT,
  _SCen,
  _SCR,
  _SCRe,
  _SD,
  _SR,
  _SRA,
  _St,
  _TA,
  _Ta,
  _TC,
  _TS,
  _UPTn,
  AlarmConfiguration,
  AlarmStateInformationList,
  n0,
  Targets,
} from "./schemas_0";
import { CommandFilterList } from "./schemas_3_Describe";
import { NotificationConfig } from "./schemas_18_Window";
import { CloudWatchOutputConfig } from "./schemas_38_Command";

/* eslint no-var: 0 */

export var Command = struct(
  n0,
  _C,
  0,
  [
    _CI,
    _DN,
    _DV,
    _Co,
    _EA,
    _P,
    _IIn,
    _Ta,
    _RDT,
    _St,
    _SD,
    _OSR,
    _OSBN,
    _OSKP,
    _MC,
    _ME,
    _TC,
    _CC,
    _EC,
    _DTOC,
    _SR,
    _NC,
    _CWOC,
    _TS,
    _AC,
    _TA,
  ],
  [
    0,
    0,
    0,
    0,
    4,
    [() => _Parameters, 0],
    64 | 0,
    () => Targets,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    () => NotificationConfig,
    () => CloudWatchOutputConfig,
    1,
    () => AlarmConfiguration,
    () => AlarmStateInformationList,
  ]
);
export var InvalidNotificationConfig = error(
  n0,
  _INC,
  {
    [_e]: _c,
    [_aQE]: [`InvalidNotificationConfig`, 400],
  },
  [_M],
  [0],

  __InvalidNotificationConfig
);
export var InvalidOutputFolder = error(
  n0,
  _IOF,
  {
    [_e]: _c,
    [_aQE]: [`InvalidOutputFolder`, 400],
  },
  [],
  [],

  __InvalidOutputFolder
);
export var InvalidRole = error(
  n0,
  _IRnv,
  {
    [_e]: _c,
    [_aQE]: [`InvalidRole`, 400],
  },
  [_M],
  [0],

  __InvalidRole
);
export var ListCommandsRequest = struct(n0, _LCR, 0, [_CI, _II, _MR, _NT, _Fi], [0, 0, 1, 0, () => CommandFilterList]);
export var ListCommandsResult = struct(n0, _LCRi, 0, [_Com, _NT], [[() => CommandList, 0], 0]);
export var SendCommandRequest = struct(
  n0,
  _SCR,
  0,
  [_IIn, _Ta, _DN, _DV, _DH, _DHT, _TS, _Co, _P, _OSR, _OSBN, _OSKP, _MC, _ME, _SRA, _NC, _CWOC, _AC],
  [
    64 | 0,
    () => Targets,
    0,
    0,
    0,
    0,
    1,
    0,
    [() => _Parameters, 0],
    0,
    0,
    0,
    0,
    0,
    0,
    () => NotificationConfig,
    () => CloudWatchOutputConfig,
    () => AlarmConfiguration,
  ]
);
export var SendCommandResult = struct(n0, _SCRe, 0, [_C], [[() => Command, 0]]);
export var UnsupportedPlatformType = error(
  n0,
  _UPTn,
  {
    [_e]: _c,
    [_aQE]: [`UnsupportedPlatformType`, 400],
  },
  [_M],
  [0],

  __UnsupportedPlatformType
);
export var CommandList = list(n0, _CLo, 0, [() => Command, 0]);
export var ParameterValueList = 64 | 0;

export var _Parameters = map(n0, _P, 8, 0, 64 | 0);
export var ListCommands = op(
  n0,
  _LCi,
  0,
  () => ListCommandsRequest,
  () => ListCommandsResult
);
export var SendCommand = op(
  n0,
  _SCen,
  0,
  () => SendCommandRequest,
  () => SendCommandResult
);
