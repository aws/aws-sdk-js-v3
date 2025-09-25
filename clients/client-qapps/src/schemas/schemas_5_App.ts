// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ContentTooLargeException as __ContentTooLargeException } from "../models/index";
import {
  _aI,
  _c,
  _cI,
  _CPU,
  _CPUI,
  _CPUO,
  _CTLE,
  _e,
  _fCB,
  _fCS,
  _fI,
  _fN,
  _h,
  _hE,
  _hH,
  _ID,
  _IDI,
  _IDO,
  _iI,
  _ii,
  _m,
  _pU,
  _pUE,
  _pUF,
  _rI,
  _rT,
  _sc,
  _sI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContentTooLargeException = error(
  n0,
  _CTLE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ContentTooLargeException
);
export var CreatePresignedUrlInput = struct(
  n0,
  _CPUI,
  0,
  [_iI, _cI, _aI, _fCS, _fN, _sc, _sI],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
    0,
    0,
    0,
    0,
    0,
  ]
);
export var CreatePresignedUrlOutput = struct(n0, _CPUO, 0, [_fI, _pU, _pUF, _pUE], [0, 0, 128 | 0, 5]);
export var ImportDocumentInput = struct(
  n0,
  _IDI,
  0,
  [_iI, _cI, _aI, _fCB, _fN, _sc, _sI],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
    0,
    0,
    0,
    0,
    0,
  ]
);
export var ImportDocumentOutput = struct(n0, _IDO, 0, [_fI], [0]);
export var PresignedUrlFields = 128 | 0;

export var CreatePresignedUrl = op(
  n0,
  _CPU,
  {
    [_h]: ["POST", "/apps.createPresignedUrl", 200],
  },
  () => CreatePresignedUrlInput,
  () => CreatePresignedUrlOutput
);
export var ImportDocument = op(
  n0,
  _ID,
  {
    [_h]: ["POST", "/apps.importDocument", 200],
  },
  () => ImportDocumentInput,
  () => ImportDocumentOutput
);
