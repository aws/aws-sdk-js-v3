// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { AttachmentNotFoundException as __AttachmentNotFoundException } from "../models/index";
import { _AAt, _ANFEt, _c, _DCAA, _DCAAR, _e, _hE, _M, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AttachmentNotFoundException = error(
  n0,
  _ANFEt,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __AttachmentNotFoundException
);
export var DeleteCrossAccountAttachmentRequest = struct(n0, _DCAAR, 0, [_AAt], [0]);
export var DeleteCrossAccountAttachment = op(
  n0,
  _DCAA,
  0,
  () => DeleteCrossAccountAttachmentRequest,
  () => Unit
);
