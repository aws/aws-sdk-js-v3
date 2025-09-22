// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  PublicKeyAlreadyExists as __PublicKeyAlreadyExists,
  TooManyPublicKeys as __TooManyPublicKeys,
} from "../models/index";
import {
  _c,
  _Co,
  _CPK,
  _CPKR,
  _CPKRr,
  _CR,
  _CTr,
  _e,
  _EK,
  _ET,
  _h,
  _hE,
  _hH,
  _hP,
  _Id,
  _L,
  _M,
  _N,
  _PK,
  _PKAE,
  _PKC,
  _TMPK,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePublicKeyRequest = struct(
  n0,
  _CPKR,
  0,
  [_PKC],
  [
    [
      () => PublicKeyConfig,
      {
        [_xN]: _PKC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreatePublicKeyResult = struct(
  n0,
  _CPKRr,
  0,
  [_PK, _L, _ET],
  [
    [() => PublicKey, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var PublicKey = struct(n0, _PK, 0, [_Id, _CTr, _PKC], [0, 4, () => PublicKeyConfig]);
export var PublicKeyAlreadyExists = error(
  n0,
  _PKAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __PublicKeyAlreadyExists
);
export var PublicKeyConfig = struct(n0, _PKC, 0, [_CR, _N, _EK, _Co], [0, 0, 0, 0]);
export var TooManyPublicKeys = error(
  n0,
  _TMPK,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyPublicKeys
);
export var CreatePublicKey = op(
  n0,
  _CPK,
  {
    [_h]: ["POST", "/2020-05-31/public-key", 201],
  },
  () => CreatePublicKeyRequest,
  () => CreatePublicKeyResult
);
