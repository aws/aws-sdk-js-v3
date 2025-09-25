// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _CKP,
  _CKPR,
  _CKPRr,
  _DDKP,
  _DDKPR,
  _DDKPRo,
  _fi,
  _GKP,
  _GKPe,
  _GKPR,
  _GKPRe,
  _GKPRet,
  _GKPRete,
  _ht,
  _iDKP,
  _IKP,
  _IKPR,
  _IKPRm,
  _KP,
  _kP,
  _kPe,
  _KPL,
  _kPN,
  _l,
  _n,
  _nPT,
  _op,
  _pKB,
  _pKBr,
  _pT,
  _rT,
  _sC,
  _ta,
  n0,
  Operation,
  ResourceLocation,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateKeyPairRequest = struct(n0, _CKPR, 0, [_kPN, _ta], [0, () => TagList]);
export var CreateKeyPairResult = struct(n0, _CKPRr, 0, [_kP, _pKB, _pKBr, _op], [() => KeyPair, 0, 0, () => Operation]);
export var DownloadDefaultKeyPairRequest = struct(n0, _DDKPR, 0, [], []);
export var DownloadDefaultKeyPairResult = struct(n0, _DDKPRo, 0, [_pKB, _pKBr, _cA], [0, 0, 4]);
export var GetKeyPairRequest = struct(n0, _GKPR, 0, [_kPN], [0]);
export var GetKeyPairResult = struct(n0, _GKPRe, 0, [_kP], [() => KeyPair]);
export var GetKeyPairsRequest = struct(n0, _GKPRet, 0, [_pT, _iDKP], [0, 2]);
export var GetKeyPairsResult = struct(n0, _GKPRete, 0, [_kPe, _nPT], [() => KeyPairList, 0]);
export var ImportKeyPairRequest = struct(n0, _IKPR, 0, [_kPN, _pKB], [0, 0]);
export var ImportKeyPairResult = struct(n0, _IKPRm, 0, [_op], [() => Operation]);
export var KeyPair = struct(
  n0,
  _KP,
  0,
  [_n, _a, _sC, _cA, _l, _rT, _ta, _fi],
  [0, 0, 0, 4, () => ResourceLocation, 0, () => TagList, 0]
);
export var KeyPairList = list(n0, _KPL, 0, () => KeyPair);
export var CreateKeyPair = op(
  n0,
  _CKP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateKeyPair", 200],
  },
  () => CreateKeyPairRequest,
  () => CreateKeyPairResult
);
export var DownloadDefaultKeyPair = op(
  n0,
  _DDKP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DownloadDefaultKeyPair", 200],
  },
  () => DownloadDefaultKeyPairRequest,
  () => DownloadDefaultKeyPairResult
);
export var GetKeyPair = op(
  n0,
  _GKP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetKeyPair", 200],
  },
  () => GetKeyPairRequest,
  () => GetKeyPairResult
);
export var GetKeyPairs = op(
  n0,
  _GKPe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetKeyPairs", 200],
  },
  () => GetKeyPairsRequest,
  () => GetKeyPairsResult
);
export var ImportKeyPair = op(
  n0,
  _IKP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/ImportKeyPair", 200],
  },
  () => ImportKeyPairRequest,
  () => ImportKeyPairResult
);
