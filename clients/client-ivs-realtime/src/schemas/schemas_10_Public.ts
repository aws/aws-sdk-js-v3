// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _DPK,
  _DPKR,
  _DPKRe,
  _fi,
  _GPK,
  _GPKR,
  _GPKRe,
  _ht,
  _IPK,
  _IPKR,
  _IPKRm,
  _n,
  _PK,
  _pK,
  _pKM,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePublicKeyRequest = struct(n0, _DPKR, 0, [_a], [0]);
export var DeletePublicKeyResponse = struct(n0, _DPKRe, 0, [], []);
export var GetPublicKeyRequest = struct(n0, _GPKR, 0, [_a], [0]);
export var GetPublicKeyResponse = struct(n0, _GPKRe, 0, [_pK], [() => PublicKey]);
export var ImportPublicKeyRequest = struct(n0, _IPKR, 0, [_pKM, _n, _t], [0, 0, 128 | 0]);
export var ImportPublicKeyResponse = struct(n0, _IPKRm, 0, [_pK], [() => PublicKey]);
export var PublicKey = struct(n0, _PK, 0, [_a, _n, _pKM, _fi, _t], [0, 0, 0, 0, 128 | 0]);
export var DeletePublicKey = op(
  n0,
  _DPK,
  {
    [_ht]: ["POST", "/DeletePublicKey", 200],
  },
  () => DeletePublicKeyRequest,
  () => DeletePublicKeyResponse
);
export var GetPublicKey = op(
  n0,
  _GPK,
  {
    [_ht]: ["POST", "/GetPublicKey", 200],
  },
  () => GetPublicKeyRequest,
  () => GetPublicKeyResponse
);
export var ImportPublicKey = op(
  n0,
  _IPK,
  {
    [_ht]: ["POST", "/ImportPublicKey", 200],
  },
  () => ImportPublicKeyRequest,
  () => ImportPublicKeyResponse
);
