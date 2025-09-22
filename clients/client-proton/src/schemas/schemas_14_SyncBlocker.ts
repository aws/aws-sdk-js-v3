// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _con,
  _cR,
  _GSSBS,
  _GSSBSI,
  _GSSBSO,
  _i,
  _k,
  _lB,
  _LSB,
  _rAeso,
  _rR,
  _SB,
  _SBC,
  _SBCy,
  _sIN,
  _sN,
  _sSB,
  _SSBS,
  _sSBS,
  _st,
  _ty,
  _USSB,
  _USSBI,
  _USSBO,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetServiceSyncBlockerSummaryInput = struct(n0, _GSSBSI, 0, [_sN, _sIN], [0, 0]);
export var GetServiceSyncBlockerSummaryOutput = struct(n0, _GSSBSO, 0, [_sSBS], [() => ServiceSyncBlockerSummary]);
export var ServiceSyncBlockerSummary = struct(n0, _SSBS, 0, [_sN, _sIN, _lB], [0, 0, () => LatestSyncBlockers]);
export var SyncBlocker = struct(
  n0,
  _SB,
  0,
  [_i, _ty, _st, _cR, _cA, _con, _rR, _rAeso],
  [0, 0, 0, 0, 4, () => SyncBlockerContexts, 0, 4]
);
export var SyncBlockerContext = struct(n0, _SBC, 0, [_k, _v], [0, 0]);
export var UpdateServiceSyncBlockerInput = struct(n0, _USSBI, 0, [_i, _rR], [0, 0]);
export var UpdateServiceSyncBlockerOutput = struct(n0, _USSBO, 0, [_sN, _sIN, _sSB], [0, 0, () => SyncBlocker]);
export var LatestSyncBlockers = list(n0, _LSB, 0, () => SyncBlocker);
export var SyncBlockerContexts = list(n0, _SBCy, 0, () => SyncBlockerContext);
export var GetServiceSyncBlockerSummary = op(
  n0,
  _GSSBS,
  0,
  () => GetServiceSyncBlockerSummaryInput,
  () => GetServiceSyncBlockerSummaryOutput
);
export var UpdateServiceSyncBlocker = op(
  n0,
  _USSB,
  0,
  () => UpdateServiceSyncBlockerInput,
  () => UpdateServiceSyncBlockerOutput
);
