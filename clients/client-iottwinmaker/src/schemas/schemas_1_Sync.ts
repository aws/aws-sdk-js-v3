// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _cDT,
  _DSJ,
  _DSJR,
  _DSJRe,
  _e,
  _eIx,
  _end,
  _fi,
  _GSJ,
  _GSJR,
  _GSJRe,
  _h,
  _hQ,
  _LSJ,
  _LSJR,
  _LSJRi,
  _LSRis,
  _LSRR,
  _LSRRi,
  _mR,
  _nTe,
  _rI,
  _rTe,
  _s,
  _SJS,
  _sJS,
  _SJSy,
  _SJSyn,
  _sR,
  _SRF,
  _SRFy,
  _SRS,
  _SRSy,
  _SRSyn,
  _sRy,
  _sS,
  _st,
  _uDT,
  _w,
  _wI,
  n0,
} from "./schemas_0";
import { ErrorDetails } from "./schemas_13_List";

/* eslint no-var: 0 */

export var DeleteSyncJobRequest = struct(
  n0,
  _DSJR,
  0,
  [_wI, _sS],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSyncJobResponse = struct(n0, _DSJRe, 0, [_st], [0]);
export var GetSyncJobRequest = struct(
  n0,
  _GSJR,
  0,
  [_sS, _wI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _w,
      },
    ],
  ]
);
export var GetSyncJobResponse = struct(
  n0,
  _GSJRe,
  0,
  [_a, _wI, _sS, _sR, _s, _cDT, _uDT],
  [0, 0, 0, 0, () => SyncJobStatus, 4, 4]
);
export var ListSyncJobsRequest = struct(n0, _LSJR, 0, [_wI, _mR, _nTe], [[0, 1], 1, 0]);
export var ListSyncJobsResponse = struct(n0, _LSJRi, 0, [_sJS, _nTe], [() => SyncJobSummaries, 0]);
export var ListSyncResourcesRequest = struct(
  n0,
  _LSRR,
  0,
  [_wI, _sS, _fi, _mR, _nTe],
  [[0, 1], [0, 1], () => SyncResourceFilters, 1, 0]
);
export var ListSyncResourcesResponse = struct(n0, _LSRRi, 0, [_sRy, _nTe], [() => SyncResourceSummaries, 0]);
export var SyncJobStatus = struct(n0, _SJS, 0, [_st, _e], [0, () => ErrorDetails]);
export var SyncJobSummary = struct(n0, _SJSy, 0, [_a, _wI, _sS, _s, _cDT, _uDT], [0, 0, 0, () => SyncJobStatus, 4, 4]);
export var SyncResourceStatus = struct(n0, _SRS, 0, [_st, _e], [0, () => ErrorDetails]);
export var SyncResourceSummary = struct(
  n0,
  _SRSy,
  0,
  [_rTe, _eIx, _rI, _s, _uDT],
  [0, 0, 0, () => SyncResourceStatus, 4]
);
export var SyncJobSummaries = list(n0, _SJSyn, 0, () => SyncJobSummary);
export var SyncResourceFilters = list(n0, _SRF, 0, () => SyncResourceFilter);
export var SyncResourceSummaries = list(n0, _SRSyn, 0, () => SyncResourceSummary);
export var SyncResourceFilter = uni(n0, _SRFy, 0, [_st, _rTe, _rI, _eIx], [0, 0, 0, 0]);
export var DeleteSyncJob = op(
  n0,
  _DSJ,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/sync-jobs/{syncSource}", 200],
    [_end]: ["api."],
  },
  () => DeleteSyncJobRequest,
  () => DeleteSyncJobResponse
);
export var GetSyncJob = op(
  n0,
  _GSJ,
  {
    [_h]: ["GET", "/sync-jobs/{syncSource}", 200],
    [_end]: ["api."],
  },
  () => GetSyncJobRequest,
  () => GetSyncJobResponse
);
export var ListSyncJobs = op(
  n0,
  _LSJ,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/sync-jobs-list", 200],
    [_end]: ["api."],
  },
  () => ListSyncJobsRequest,
  () => ListSyncJobsResponse
);
export var ListSyncResources = op(
  n0,
  _LSRis,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/sync-jobs/{syncSource}/resources-list", 200],
    [_end]: ["api."],
  },
  () => ListSyncResourcesRequest,
  () => ListSyncResourcesResponse
);
