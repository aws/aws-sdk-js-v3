// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  RetryLatestCommitFailedException as __RetryLatestCommitFailedException,
  SyncBlockerDoesNotExistException as __SyncBlockerDoesNotExistException,
} from "../models/index";
import {
  _B,
  _c,
  _CAr,
  _Con,
  _CR,
  _D,
  _DS,
  _DSC,
  _DSCI,
  _DSCO,
  _E,
  _e,
  _EI,
  _Ev,
  _GRSSe,
  _GRSSIe,
  _GRSSOe,
  _GSBS,
  _GSBSI,
  _GSBSO,
  _hE,
  _I,
  _IR,
  _K,
  _LB,
  _LS,
  _LSBL,
  _LSS,
  _M,
  _OI,
  _PRN,
  _PT,
  _R,
  _RAes,
  _RLCFE,
  _RN,
  _RNe,
  _RR,
  _RSAe,
  _RSEe,
  _RSELe,
  _S,
  _s,
  _SA,
  _SB,
  _SBC,
  _SBCL,
  _SBDNEE,
  _SBS,
  _Sh,
  _ST,
  _Ta,
  _Ti,
  _TR,
  _Ty,
  _USB,
  _USBI,
  _USBO,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSyncConfigurationInput = struct(n0, _DSCI, 0, [_ST, _RNe], [0, 0]);
export var DeleteSyncConfigurationOutput = struct(n0, _DSCO, 0, [], []);
export var GetResourceSyncStatusInput = struct(n0, _GRSSIe, 0, [_RNe, _ST], [0, 0]);
export var GetResourceSyncStatusOutput = struct(
  n0,
  _GRSSOe,
  0,
  [_DS, _LSS, _LS],
  [() => Revision, () => ResourceSyncAttempt, () => ResourceSyncAttempt]
);
export var GetSyncBlockerSummaryInput = struct(n0, _GSBSI, 0, [_ST, _RNe], [0, 0]);
export var GetSyncBlockerSummaryOutput = struct(n0, _GSBSO, 0, [_SBS], [() => SyncBlockerSummary]);
export var ResourceSyncAttempt = struct(
  n0,
  _RSAe,
  0,
  [_E, _IR, _SA, _S, _TR, _Ta],
  [() => ResourceSyncEventList, () => Revision, 4, 0, () => Revision, 0]
);
export var ResourceSyncEvent = struct(n0, _RSEe, 0, [_Ev, _EI, _Ti, _Ty], [0, 0, 4, 0]);
export var RetryLatestCommitFailedException = error(
  n0,
  _RLCFE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_M],
  [0],

  __RetryLatestCommitFailedException
);
export var Revision = struct(n0, _R, 0, [_B, _D, _OI, _RN, _PT, _Sh], [0, 0, 0, 0, 0, 0]);
export var SyncBlocker = struct(
  n0,
  _SB,
  0,
  [_I, _Ty, _S, _CR, _CAr, _Con, _RR, _RAes],
  [0, 0, 0, 0, 4, () => SyncBlockerContextList, 0, 4]
);
export var SyncBlockerContext = struct(n0, _SBC, 0, [_K, _V], [0, 0]);
export var SyncBlockerDoesNotExistException = error(
  n0,
  _SBDNEE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __SyncBlockerDoesNotExistException
);
export var SyncBlockerSummary = struct(n0, _SBS, 0, [_RNe, _PRN, _LB], [0, 0, () => LatestSyncBlockerList]);
export var UpdateSyncBlockerInput = struct(n0, _USBI, 0, [_I, _ST, _RNe, _RR], [0, 0, 0, 0]);
export var UpdateSyncBlockerOutput = struct(n0, _USBO, 0, [_RNe, _PRN, _SB], [0, 0, () => SyncBlocker]);
export var LatestSyncBlockerList = list(n0, _LSBL, 0, () => SyncBlocker);
export var ResourceSyncEventList = list(n0, _RSELe, 0, () => ResourceSyncEvent);
export var SyncBlockerContextList = list(n0, _SBCL, 0, () => SyncBlockerContext);
export var DeleteSyncConfiguration = op(
  n0,
  _DSC,
  0,
  () => DeleteSyncConfigurationInput,
  () => DeleteSyncConfigurationOutput
);
export var GetResourceSyncStatus = op(
  n0,
  _GRSSe,
  0,
  () => GetResourceSyncStatusInput,
  () => GetResourceSyncStatusOutput
);
export var GetSyncBlockerSummary = op(
  n0,
  _GSBS,
  0,
  () => GetSyncBlockerSummaryInput,
  () => GetSyncBlockerSummaryOutput
);
export var UpdateSyncBlocker = op(
  n0,
  _USB,
  0,
  () => UpdateSyncBlockerInput,
  () => UpdateSyncBlockerOutput
);
