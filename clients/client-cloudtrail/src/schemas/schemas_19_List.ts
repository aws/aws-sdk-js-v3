// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidTokenException as __InvalidTokenException } from "../models/index";
import {
  _aQE,
  _c,
  _e,
  _ETn,
  _Fi,
  _hE,
  _ITE,
  _LPK,
  _LPKR,
  _LPKRi,
  _M,
  _NT,
  _PKL,
  _PKu,
  _ST,
  _Va,
  _VET,
  _VST,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidTokenException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidToken`, 400],
  },
  [_M],
  [0],

  __InvalidTokenException
);
export var ListPublicKeysRequest = struct(n0, _LPKR, 0, [_ST, _ETn, _NT], [4, 4, 0]);
export var ListPublicKeysResponse = struct(n0, _LPKRi, 0, [_PKL, _NT], [() => PublicKeyList, 0]);
export var PublicKey = struct(n0, _PKu, 0, [_Va, _VST, _VET, _Fi], [21, 4, 4, 0]);
export var PublicKeyList = list(n0, _PKL, 0, () => PublicKey);
export var ListPublicKeys = op(
  n0,
  _LPK,
  2,
  () => ListPublicKeysRequest,
  () => ListPublicKeysResponse
);
