// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DuplicateSSHPublicKeyException as __DuplicateSSHPublicKeyException,
  InvalidPublicKeyException as __InvalidPublicKeyException,
  UnrecognizedPublicKeyEncodingException as __UnrecognizedPublicKeyEncodingException,
} from "../models/index";
import {
  _aQE,
  _c,
  _DSSHPK,
  _DSSHPKE,
  _DSSHPKR,
  _e,
  _En,
  _Fi,
  _GSSHPK,
  _GSSHPKR,
  _GSSHPKRe,
  _hE,
  _IPKE,
  _IT,
  _LSSHPK,
  _LSSHPKR,
  _LSSHPKRi,
  _m,
  _Ma,
  _MI,
  _S,
  _SSHPK,
  _SSHPKB,
  _SSHPKI,
  _SSHPKLT,
  _SSHPKM,
  _SSHPKu,
  _UDp,
  _UN,
  _UPKEE,
  _USSHPK,
  _USSHPKp,
  _USSHPKR,
  _USSHPKRp,
  _USSHPKRpl,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSSHPublicKeyRequest = struct(n0, _DSSHPKR, 0, [_UN, _SSHPKI], [0, 0]);
export var DuplicateSSHPublicKeyException = error(
  n0,
  _DSSHPKE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateSSHPublicKey`, 400],
  },
  [_m],
  [0],

  __DuplicateSSHPublicKeyException
);
export var GetSSHPublicKeyRequest = struct(n0, _GSSHPKR, 0, [_UN, _SSHPKI, _En], [0, 0, 0]);
export var GetSSHPublicKeyResponse = struct(n0, _GSSHPKRe, 0, [_SSHPK], [() => SSHPublicKey]);
export var InvalidPublicKeyException = error(
  n0,
  _IPKE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidPublicKey`, 400],
  },
  [_m],
  [0],

  __InvalidPublicKeyException
);
export var ListSSHPublicKeysRequest = struct(n0, _LSSHPKR, 0, [_UN, _Ma, _MI], [0, 0, 1]);
export var ListSSHPublicKeysResponse = struct(
  n0,
  _LSSHPKRi,
  0,
  [_SSHPKu, _IT, _Ma],
  [() => SSHPublicKeyListType, 2, 0]
);
export var SSHPublicKey = struct(n0, _SSHPK, 0, [_UN, _SSHPKI, _Fi, _SSHPKB, _S, _UDp], [0, 0, 0, 0, 0, 4]);
export var SSHPublicKeyMetadata = struct(n0, _SSHPKM, 0, [_UN, _SSHPKI, _S, _UDp], [0, 0, 0, 4]);
export var UnrecognizedPublicKeyEncodingException = error(
  n0,
  _UPKEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UnrecognizedPublicKeyEncoding`, 400],
  },
  [_m],
  [0],

  __UnrecognizedPublicKeyEncodingException
);
export var UpdateSSHPublicKeyRequest = struct(n0, _USSHPKR, 0, [_UN, _SSHPKI, _S], [0, 0, 0]);
export var UploadSSHPublicKeyRequest = struct(n0, _USSHPKRp, 0, [_UN, _SSHPKB], [0, 0]);
export var UploadSSHPublicKeyResponse = struct(n0, _USSHPKRpl, 0, [_SSHPK], [() => SSHPublicKey]);
export var SSHPublicKeyListType = list(n0, _SSHPKLT, 0, () => SSHPublicKeyMetadata);
export var DeleteSSHPublicKey = op(
  n0,
  _DSSHPK,
  0,
  () => DeleteSSHPublicKeyRequest,
  () => Unit
);
export var GetSSHPublicKey = op(
  n0,
  _GSSHPK,
  0,
  () => GetSSHPublicKeyRequest,
  () => GetSSHPublicKeyResponse
);
export var ListSSHPublicKeys = op(
  n0,
  _LSSHPK,
  0,
  () => ListSSHPublicKeysRequest,
  () => ListSSHPublicKeysResponse
);
export var UpdateSSHPublicKey = op(
  n0,
  _USSHPK,
  0,
  () => UpdateSSHPublicKeyRequest,
  () => Unit
);
export var UploadSSHPublicKey = op(
  n0,
  _USSHPKp,
  0,
  () => UploadSSHPublicKeyRequest,
  () => UploadSSHPublicKeyResponse
);
