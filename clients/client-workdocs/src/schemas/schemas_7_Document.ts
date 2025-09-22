// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConcurrentModificationException as __ConcurrentModificationException,
  InvalidOperationException as __InvalidOperationException,
} from "../models/index";
import {
  _A,
  _ADVU,
  _ADVUR,
  _AT,
  _c,
  _CME,
  _DD,
  _DDR,
  _DDV,
  _DDVR,
  _DF,
  _DFR,
  _DI,
  _DPV,
  _dPV,
  _e,
  _FI,
  _h,
  _hE,
  _hH,
  _hQ,
  _IOE,
  _M,
  _RDV,
  _RDVR,
  _UDV,
  _UDVR,
  _VI,
  _VS,
  AuthenticationHeaderType,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AbortDocumentVersionUploadRequest = struct(
  n0,
  _ADVUR,
  0,
  [_AT, _DI, _VI],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [0, 1],
  ]
);
export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConcurrentModificationException
);
export var DeleteDocumentRequest = struct(
  n0,
  _DDR,
  0,
  [_AT, _DI],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
  ]
);
export var DeleteDocumentVersionRequest = struct(
  n0,
  _DDVR,
  0,
  [_AT, _DI, _VI, _DPV],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _dPV,
      },
    ],
  ]
);
export var DeleteFolderRequest = struct(
  n0,
  _DFR,
  0,
  [_AT, _FI],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
  ]
);
export var InvalidOperationException = error(
  n0,
  _IOE,
  {
    [_e]: _c,
    [_hE]: 405,
  },
  [_M],
  [0],

  __InvalidOperationException
);
export var RestoreDocumentVersionsRequest = struct(
  n0,
  _RDVR,
  0,
  [_AT, _DI],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
  ]
);
export var UpdateDocumentVersionRequest = struct(
  n0,
  _UDVR,
  0,
  [_AT, _DI, _VI, _VS],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [0, 1],
    0,
  ]
);
export var AbortDocumentVersionUpload = op(
  n0,
  _ADVU,
  {
    [_h]: ["DELETE", "/api/v1/documents/{DocumentId}/versions/{VersionId}", 204],
  },
  () => AbortDocumentVersionUploadRequest,
  () => Unit
);
export var DeleteDocument = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/api/v1/documents/{DocumentId}", 204],
  },
  () => DeleteDocumentRequest,
  () => Unit
);
export var DeleteDocumentVersion = op(
  n0,
  _DDV,
  {
    [_h]: ["DELETE", "/api/v1/documentVersions/{DocumentId}/versions/{VersionId}", 204],
  },
  () => DeleteDocumentVersionRequest,
  () => Unit
);
export var DeleteFolder = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/api/v1/folders/{FolderId}", 204],
  },
  () => DeleteFolderRequest,
  () => Unit
);
export var RestoreDocumentVersions = op(
  n0,
  _RDV,
  {
    [_h]: ["POST", "/api/v1/documentVersions/restore/{DocumentId}", 204],
  },
  () => RestoreDocumentVersionsRequest,
  () => Unit
);
export var UpdateDocumentVersion = op(
  n0,
  _UDV,
  {
    [_h]: ["PATCH", "/api/v1/documents/{DocumentId}/versions/{VersionId}", 200],
  },
  () => UpdateDocumentVersionRequest,
  () => Unit
);
