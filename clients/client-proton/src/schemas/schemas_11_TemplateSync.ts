// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _b,
  _CTSC,
  _CTSCI,
  _CTSCO,
  _dSe,
  _DTSC,
  _DTSCI,
  _DTSCO,
  _GTSC,
  _GTSCI,
  _GTSCO,
  _GTSS,
  _GTSSI,
  _GTSSO,
  _lS,
  _lSS,
  _rN,
  _rP,
  _su,
  _tN,
  _TSC,
  _tSC,
  _tT,
  _tV,
  _UTSC,
  _UTSCI,
  _UTSCO,
  n0,
} from "./schemas_0";
import { ResourceSyncAttempt, Revision } from "./schemas_17_Status";

/* eslint no-var: 0 */

export var CreateTemplateSyncConfigInput = struct(n0, _CTSCI, 0, [_tN, _tT, _rP, _rN, _b, _su], [0, 0, 0, 0, 0, 0]);
export var CreateTemplateSyncConfigOutput = struct(n0, _CTSCO, 0, [_tSC], [() => TemplateSyncConfig]);
export var DeleteTemplateSyncConfigInput = struct(n0, _DTSCI, 0, [_tN, _tT], [0, 0]);
export var DeleteTemplateSyncConfigOutput = struct(n0, _DTSCO, 0, [_tSC], [() => TemplateSyncConfig]);
export var GetTemplateSyncConfigInput = struct(n0, _GTSCI, 0, [_tN, _tT], [0, 0]);
export var GetTemplateSyncConfigOutput = struct(n0, _GTSCO, 0, [_tSC], [() => TemplateSyncConfig]);
export var GetTemplateSyncStatusInput = struct(n0, _GTSSI, 0, [_tN, _tT, _tV], [0, 0, 0]);
export var GetTemplateSyncStatusOutput = struct(
  n0,
  _GTSSO,
  0,
  [_lS, _lSS, _dSe],
  [() => ResourceSyncAttempt, () => ResourceSyncAttempt, () => Revision]
);
export var TemplateSyncConfig = struct(n0, _TSC, 0, [_tN, _tT, _rP, _rN, _b, _su], [0, 0, 0, 0, 0, 0]);
export var UpdateTemplateSyncConfigInput = struct(n0, _UTSCI, 0, [_tN, _tT, _rP, _rN, _b, _su], [0, 0, 0, 0, 0, 0]);
export var UpdateTemplateSyncConfigOutput = struct(n0, _UTSCO, 0, [_tSC], [() => TemplateSyncConfig]);
export var CreateTemplateSyncConfig = op(
  n0,
  _CTSC,
  2,
  () => CreateTemplateSyncConfigInput,
  () => CreateTemplateSyncConfigOutput
);
export var DeleteTemplateSyncConfig = op(
  n0,
  _DTSC,
  2,
  () => DeleteTemplateSyncConfigInput,
  () => DeleteTemplateSyncConfigOutput
);
export var GetTemplateSyncConfig = op(
  n0,
  _GTSC,
  0,
  () => GetTemplateSyncConfigInput,
  () => GetTemplateSyncConfigOutput
);
export var GetTemplateSyncStatus = op(
  n0,
  _GTSS,
  0,
  () => GetTemplateSyncStatusInput,
  () => GetTemplateSyncStatusOutput
);
export var UpdateTemplateSyncConfig = op(
  n0,
  _UTSC,
  0,
  () => UpdateTemplateSyncConfigInput,
  () => UpdateTemplateSyncConfigOutput
);
