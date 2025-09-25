// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _dN,
  _end,
  _fI,
  _h,
  _hQ,
  _LSP,
  _LSPFQ,
  _LSPFQR,
  _LSPFQRi,
  _LSPR,
  _LSPRi,
  _mR,
  _nT,
  _oF,
  _qI,
  _sP,
  _sPI,
  _SPS,
  _SPSt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListStorageProfilesForQueueRequest = struct(
  n0,
  _LSPFQR,
  0,
  [_fI, _qI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListStorageProfilesForQueueResponse = struct(
  n0,
  _LSPFQRi,
  0,
  [_sP, _nT],
  [() => StorageProfileSummaries, 0]
);
export var ListStorageProfilesRequest = struct(
  n0,
  _LSPR,
  0,
  [_fI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListStorageProfilesResponse = struct(n0, _LSPRi, 0, [_sP, _nT], [() => StorageProfileSummaries, 0]);
export var StorageProfileSummary = struct(n0, _SPS, 0, [_sPI, _dN, _oF], [0, 0, 0]);
export var StorageProfileSummaries = list(n0, _SPSt, 0, () => StorageProfileSummary);
export var ListStorageProfiles = op(
  n0,
  _LSP,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/storage-profiles", 200],
  },
  () => ListStorageProfilesRequest,
  () => ListStorageProfilesResponse
);
export var ListStorageProfilesForQueue = op(
  n0,
  _LSPFQ,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles", 200],
  },
  () => ListStorageProfilesForQueueRequest,
  () => ListStorageProfilesForQueueResponse
);
