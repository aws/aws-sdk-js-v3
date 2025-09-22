// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  IndexedAttributeMissingException as __IndexedAttributeMissingException,
  InvalidAttachmentException as __InvalidAttachmentException,
} from "../models/index";
import {
  _AOI,
  _AS,
  _ASA,
  _ASR,
  _ASRp,
  _ATI,
  _ATIR,
  _ATIRt,
  _c,
  _DA,
  _e,
  _h,
  _hE,
  _hH,
  _IAEn,
  _IAME,
  _IR,
  _M,
  _PSA,
  _TR,
  _xadp,
  n0,
  ObjectReference,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplySchemaRequest = struct(
  n0,
  _ASR,
  0,
  [_PSA, _DA],
  [
    0,
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
  ]
);
export var ApplySchemaResponse = struct(n0, _ASRp, 0, [_ASA, _DA], [0, 0]);
export var AttachToIndexRequest = struct(
  n0,
  _ATIR,
  0,
  [_DA, _IR, _TR],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    () => ObjectReference,
  ]
);
export var AttachToIndexResponse = struct(n0, _ATIRt, 0, [_AOI], [0]);
export var IndexedAttributeMissingException = error(
  n0,
  _IAME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __IndexedAttributeMissingException
);
export var InvalidAttachmentException = error(
  n0,
  _IAEn,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidAttachmentException
);
export var ApplySchema = op(
  n0,
  _AS,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/schema/apply", 200],
  },
  () => ApplySchemaRequest,
  () => ApplySchemaResponse
);
export var AttachToIndex = op(
  n0,
  _ATI,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/index/attach", 200],
  },
  () => AttachToIndexRequest,
  () => AttachToIndexResponse
);
