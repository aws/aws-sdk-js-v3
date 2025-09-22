// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aD,
  _alg,
  _aT,
  _cA,
  _ciph,
  _cK,
  _eA,
  _fSHA,
  _fSHAi,
  _GIAD,
  _GIADR,
  _GIADRe,
  _GSI,
  _GSIe,
  _GSIR,
  _GSIRe,
  _GSIRet,
  _GSIRett,
  _hK,
  _HKA,
  _HKL,
  _ht,
  _IAD,
  _iAp,
  _iApd,
  _iAst,
  _iN,
  _kPN,
  _l,
  _n,
  _nPT,
  _nVA,
  _nVB,
  _pas,
  _PD,
  _pD,
  _pK,
  _pKr,
  _pro,
  _pT,
  _rT,
  _sC,
  _SI,
  _SIL,
  _sIN,
  _sIt,
  _sIta,
  _us,
  _wA,
  n0,
  ResourceLocation,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetInstanceAccessDetailsRequest = struct(n0, _GIADR, 0, [_iN, _pro], [0, 0]);
export var GetInstanceAccessDetailsResult = struct(n0, _GIADRe, 0, [_aD], [() => InstanceAccessDetails]);
export var GetStaticIpRequest = struct(n0, _GSIR, 0, [_sIN], [0]);
export var GetStaticIpResult = struct(n0, _GSIRe, 0, [_sIt], [() => StaticIp]);
export var GetStaticIpsRequest = struct(n0, _GSIRet, 0, [_pT], [0]);
export var GetStaticIpsResult = struct(n0, _GSIRett, 0, [_sIta, _nPT], [() => StaticIpList, 0]);
export var HostKeyAttributes = struct(n0, _HKA, 0, [_alg, _pK, _wA, _fSHA, _fSHAi, _nVB, _nVA], [0, 0, 4, 0, 0, 4, 4]);
export var InstanceAccessDetails = struct(
  n0,
  _IAD,
  0,
  [_cK, _eA, _iApd, _iAp, _pas, _pD, _pKr, _pro, _iN, _us, _hK],
  [0, 4, 0, 64 | 0, 0, () => PasswordData, 0, 0, 0, 0, () => HostKeysList]
);
export var PasswordData = struct(n0, _PD, 0, [_ciph, _kPN], [0, 0]);
export var StaticIp = struct(
  n0,
  _SI,
  0,
  [_n, _a, _sC, _cA, _l, _rT, _iApd, _aT, _iAst],
  [0, 0, 0, 4, () => ResourceLocation, 0, 0, 0, 2]
);
export var HostKeysList = list(n0, _HKL, 0, () => HostKeyAttributes);
export var Ipv6AddressList = 64 | 0;

export var StaticIpList = list(n0, _SIL, 0, () => StaticIp);
export var GetInstanceAccessDetails = op(
  n0,
  _GIAD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetInstanceAccessDetails", 200],
  },
  () => GetInstanceAccessDetailsRequest,
  () => GetInstanceAccessDetailsResult
);
export var GetStaticIp = op(
  n0,
  _GSI,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetStaticIp", 200],
  },
  () => GetStaticIpRequest,
  () => GetStaticIpResult
);
export var GetStaticIps = op(
  n0,
  _GSIe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetStaticIps", 200],
  },
  () => GetStaticIpsRequest,
  () => GetStaticIpsResult
);
