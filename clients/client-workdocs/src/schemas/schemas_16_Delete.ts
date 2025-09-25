// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictingOperationException as __ConflictingOperationException } from "../models/index";
import {
  _A,
  _AT,
  _c,
  _COE,
  _DFC,
  _DFCR,
  _e,
  _FI,
  _h,
  _hE,
  _hH,
  _M,
  AuthenticationHeaderType,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictingOperationException = error(
  n0,
  _COE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictingOperationException
);
export var DeleteFolderContentsRequest = struct(
  n0,
  _DFCR,
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
export var DeleteFolderContents = op(
  n0,
  _DFC,
  {
    [_h]: ["DELETE", "/api/v1/folders/{FolderId}/contents", 204],
  },
  () => DeleteFolderContentsRequest,
  () => Unit
);
