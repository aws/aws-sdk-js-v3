// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BGCE,
  _BGCEI,
  _BGCEO,
  _CE,
  _cE,
  _cEI,
  _cENF,
  _CEo,
  _cEo,
  _com,
  _cWL,
  _cWLA,
  _dL,
  _eC,
  _eT,
  _gN,
  _id,
  _l,
  _LCEFS,
  _LCEFSI,
  _LCEFSO,
  _LL,
  _mR,
  _nT,
  _sAa,
  _SCE,
  _SCEI,
  _SCEO,
  _sDL,
  _sEC,
  _sI,
  _sL,
  _sLA,
  _sN,
  _sO,
  _sOC,
  _sT,
  _st,
  _sTu,
  _t,
  CloudWatchLogsConfig,
  n0,
  S3LogsConfig,
} from "./schemas_0";
import { SensitiveString } from "./schemas_13_List";
import { SensitiveNonEmptyString } from "./schemas_34_Command";

/* eslint no-var: 0 */

export var BatchGetCommandExecutionsInput = struct(n0, _BGCEI, 0, [_sI, _cEI], [0, 64 | 0]);
export var BatchGetCommandExecutionsOutput = struct(
  n0,
  _BGCEO,
  0,
  [_cE, _cENF],
  [[() => CommandExecutions, 0], 64 | 0]
);
export var CommandExecution = struct(
  n0,
  _CE,
  0,
  [_id, _sI, _sTu, _sT, _eT, _st, _com, _t, _eC, _sOC, _sEC, _l, _sAa],
  [
    0,
    0,
    4,
    4,
    4,
    0,
    [() => SensitiveNonEmptyString, 0],
    0,
    0,
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    () => LogsLocation,
    0,
  ]
);
export var ListCommandExecutionsForSandboxInput = struct(
  n0,
  _LCEFSI,
  0,
  [_sI, _mR, _sO, _nT],
  [0, 1, 0, [() => SensitiveString, 0]]
);
export var ListCommandExecutionsForSandboxOutput = struct(
  n0,
  _LCEFSO,
  0,
  [_cE, _nT],
  [[() => CommandExecutions, 0], 0]
);
export var LogsLocation = struct(
  n0,
  _LL,
  0,
  [_gN, _sN, _dL, _sDL, _cWLA, _sLA, _cWL, _sL],
  [0, 0, 0, 0, 0, 0, () => CloudWatchLogsConfig, () => S3LogsConfig]
);
export var StartCommandExecutionInput = struct(
  n0,
  _SCEI,
  0,
  [_sI, _com, _t],
  [0, [() => SensitiveNonEmptyString, 0], 0]
);
export var StartCommandExecutionOutput = struct(n0, _SCEO, 0, [_cEo], [[() => CommandExecution, 0]]);
export var CommandExecutionIds = 64 | 0;

export var CommandExecutions = list(n0, _CEo, 0, [() => CommandExecution, 0]);
export var BatchGetCommandExecutions = op(
  n0,
  _BGCE,
  0,
  () => BatchGetCommandExecutionsInput,
  () => BatchGetCommandExecutionsOutput
);
export var ListCommandExecutionsForSandbox = op(
  n0,
  _LCEFS,
  0,
  () => ListCommandExecutionsForSandboxInput,
  () => ListCommandExecutionsForSandboxOutput
);
export var StartCommandExecution = op(
  n0,
  _SCE,
  0,
  () => StartCommandExecutionInput,
  () => StartCommandExecutionOutput
);
