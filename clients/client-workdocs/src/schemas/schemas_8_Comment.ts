// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DocumentLockedForCommentsException as __DocumentLockedForCommentsException } from "../models/index";
import {
  _A,
  _AT,
  _c,
  _CI,
  _DC,
  _DCR,
  _DI,
  _DLFCE,
  _e,
  _h,
  _hE,
  _hH,
  _M,
  _VI,
  AuthenticationHeaderType,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCommentRequest = struct(
  n0,
  _DCR,
  0,
  [_AT, _DI, _VI, _CI],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DocumentLockedForCommentsException = error(
  n0,
  _DLFCE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __DocumentLockedForCommentsException
);
export var DeleteComment = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}", 204],
  },
  () => DeleteCommentRequest,
  () => Unit
);
