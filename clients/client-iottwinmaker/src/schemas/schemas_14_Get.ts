// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _cDT,
  _d,
  _de,
  _end,
  _GMTJ,
  _GMTJR,
  _GMTJRe,
  _GW,
  _GWR,
  _GWRe,
  _h,
  _lS,
  _mTJI,
  _mTJR,
  _p,
  _r,
  _rU,
  _s,
  _sL,
  _so,
  _uDT,
  _UW,
  _UWR,
  _UWRp,
  _wI,
  n0,
} from "./schemas_0";
import {
  DestinationConfiguration,
  MetadataTransferJobProgress,
  MetadataTransferJobStatus,
  SourceConfigurations,
} from "./schemas_6_MetadataTransfer";

/* eslint no-var: 0 */

export var GetMetadataTransferJobRequest = struct(n0, _GMTJR, 0, [_mTJI], [[0, 1]]);
export var GetMetadataTransferJobResponse = struct(
  n0,
  _GMTJRe,
  0,
  [_mTJI, _a, _d, _so, _de, _mTJR, _rU, _cDT, _uDT, _s, _p],
  [
    0,
    0,
    0,
    () => SourceConfigurations,
    () => DestinationConfiguration,
    0,
    0,
    4,
    4,
    () => MetadataTransferJobStatus,
    () => MetadataTransferJobProgress,
  ]
);
export var GetWorkspaceRequest = struct(n0, _GWR, 0, [_wI], [[0, 1]]);
export var GetWorkspaceResponse = struct(
  n0,
  _GWRe,
  0,
  [_wI, _a, _d, _lS, _sL, _r, _cDT, _uDT],
  [0, 0, 0, 64 | 0, 0, 0, 4, 4]
);
export var UpdateWorkspaceRequest = struct(n0, _UWR, 0, [_wI, _d, _r, _sL], [[0, 1], 0, 0, 0]);
export var UpdateWorkspaceResponse = struct(n0, _UWRp, 0, [_uDT], [4]);
export var GetMetadataTransferJob = op(
  n0,
  _GMTJ,
  {
    [_h]: ["GET", "/metadata-transfer-jobs/{metadataTransferJobId}", 200],
    [_end]: ["api."],
  },
  () => GetMetadataTransferJobRequest,
  () => GetMetadataTransferJobResponse
);
export var GetWorkspace = op(
  n0,
  _GW,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}", 200],
    [_end]: ["api."],
  },
  () => GetWorkspaceRequest,
  () => GetWorkspaceResponse
);
export var UpdateWorkspace = op(
  n0,
  _UW,
  {
    [_h]: ["PUT", "/workspaces/{workspaceId}", 200],
    [_end]: ["api."],
  },
  () => UpdateWorkspaceRequest,
  () => UpdateWorkspaceResponse
);
