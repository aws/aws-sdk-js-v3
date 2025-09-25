// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _b,
  _CSSC,
  _CSSCI,
  _CSSCO,
  _DSSC,
  _DSSCI,
  _DSSCO,
  _fP,
  _GSSC,
  _GSSCI,
  _GSSCO,
  _rN,
  _rP,
  _sN,
  _SSC,
  _sSC,
  _USSC,
  _USSCI,
  _USSCO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateServiceSyncConfigInput = struct(n0, _CSSCI, 0, [_sN, _rP, _rN, _b, _fP], [0, 0, 0, 0, 0]);
export var CreateServiceSyncConfigOutput = struct(n0, _CSSCO, 0, [_sSC], [() => ServiceSyncConfig]);
export var DeleteServiceSyncConfigInput = struct(n0, _DSSCI, 0, [_sN], [0]);
export var DeleteServiceSyncConfigOutput = struct(n0, _DSSCO, 0, [_sSC], [() => ServiceSyncConfig]);
export var GetServiceSyncConfigInput = struct(n0, _GSSCI, 0, [_sN], [0]);
export var GetServiceSyncConfigOutput = struct(n0, _GSSCO, 0, [_sSC], [() => ServiceSyncConfig]);
export var ServiceSyncConfig = struct(n0, _SSC, 0, [_sN, _rP, _rN, _b, _fP], [0, 0, 0, 0, 0]);
export var UpdateServiceSyncConfigInput = struct(n0, _USSCI, 0, [_sN, _rP, _rN, _b, _fP], [0, 0, 0, 0, 0]);
export var UpdateServiceSyncConfigOutput = struct(n0, _USSCO, 0, [_sSC], [() => ServiceSyncConfig]);
export var CreateServiceSyncConfig = op(
  n0,
  _CSSC,
  2,
  () => CreateServiceSyncConfigInput,
  () => CreateServiceSyncConfigOutput
);
export var DeleteServiceSyncConfig = op(
  n0,
  _DSSC,
  2,
  () => DeleteServiceSyncConfigInput,
  () => DeleteServiceSyncConfigOutput
);
export var GetServiceSyncConfig = op(
  n0,
  _GSSC,
  0,
  () => GetServiceSyncConfigInput,
  () => GetServiceSyncConfigOutput
);
export var UpdateServiceSyncConfig = op(
  n0,
  _USSC,
  0,
  () => UpdateServiceSyncConfigInput,
  () => UpdateServiceSyncConfigOutput
);
