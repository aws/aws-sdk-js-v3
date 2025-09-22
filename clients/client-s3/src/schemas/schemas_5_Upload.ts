// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NoSuchUpload as __NoSuchUpload } from "../models/index";
import {
  _AMU,
  _AMUO,
  _AMUR,
  _B,
  _c,
  _e,
  _EBO,
  _h,
  _hE,
  _hH,
  _hQ,
  _IMIT,
  _K,
  _NSU,
  _RC,
  _RP,
  _UI,
  _uI,
  _xaebo,
  _xaimit,
  _xarc,
  _xarp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AbortMultipartUploadOutput = struct(
  n0,
  _AMUO,
  0,
  [_RC],
  [
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var AbortMultipartUploadRequest = struct(
  n0,
  _AMUR,
  0,
  [_B, _K, _UI, _RP, _EBO, _IMIT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      6,
      {
        [_hH]: _xaimit,
      },
    ],
  ]
);
export var NoSuchUpload = error(
  n0,
  _NSU,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [],
  [],

  __NoSuchUpload
);
export var AbortMultipartUpload = op(
  n0,
  _AMU,
  {
    [_h]: ["DELETE", "/{Key+}?x-id=AbortMultipartUpload", 204],
  },
  () => AbortMultipartUploadRequest,
  () => AbortMultipartUploadOutput
);
