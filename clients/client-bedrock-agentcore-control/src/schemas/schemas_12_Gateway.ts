// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConcurrentModificationException as __ConcurrentModificationException } from "../models/index";
import {
  _c,
  _CME,
  _e,
  _GTV,
  _GTVR,
  _GTVRe,
  _h,
  _hE,
  _KC,
  _kC,
  _kKA,
  _kT,
  _lMD,
  _m,
  _STVCMK,
  _STVCMKR,
  _STVCMKRe,
  _tVI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConcurrentModificationException
);
export var GetTokenVaultRequest = struct(n0, _GTVR, 0, [_tVI], [0]);
export var GetTokenVaultResponse = struct(n0, _GTVRe, 0, [_tVI, _kC, _lMD], [0, () => KmsConfiguration, 4]);
export var KmsConfiguration = struct(n0, _KC, 0, [_kT, _kKA], [0, 0]);
export var SetTokenVaultCMKRequest = struct(n0, _STVCMKR, 0, [_tVI, _kC], [0, () => KmsConfiguration]);
export var SetTokenVaultCMKResponse = struct(n0, _STVCMKRe, 0, [_tVI, _kC, _lMD], [0, () => KmsConfiguration, 4]);
export var GetTokenVault = op(
  n0,
  _GTV,
  {
    [_h]: ["POST", "/identities/get-token-vault", 200],
  },
  () => GetTokenVaultRequest,
  () => GetTokenVaultResponse
);
export var SetTokenVaultCMK = op(
  n0,
  _STVCMK,
  {
    [_h]: ["POST", "/identities/set-token-vault-cmk", 200],
  },
  () => SetTokenVaultCMKRequest,
  () => SetTokenVaultCMKResponse
);
