// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _AT,
  _DI,
  _FI,
  _h,
  _hH,
  _N,
  _PFI,
  _RS,
  _UD,
  _UDR,
  _UF,
  _UFR,
  AuthenticationHeaderType,
  n0,
  ResourceNameType,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDocumentRequest = struct(
  n0,
  _UDR,
  0,
  [_AT, _DI, _N, _PFI, _RS],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [() => ResourceNameType, 0],
    0,
    0,
  ]
);
export var UpdateFolderRequest = struct(
  n0,
  _UFR,
  0,
  [_AT, _FI, _N, _PFI, _RS],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [() => ResourceNameType, 0],
    0,
    0,
  ]
);
export var UpdateDocument = op(
  n0,
  _UD,
  {
    [_h]: ["PATCH", "/api/v1/documents/{DocumentId}", 200],
  },
  () => UpdateDocumentRequest,
  () => Unit
);
export var UpdateFolder = op(
  n0,
  _UF,
  {
    [_h]: ["PATCH", "/api/v1/folders/{FolderId}", 200],
  },
  () => UpdateFolderRequest,
  () => Unit
);
