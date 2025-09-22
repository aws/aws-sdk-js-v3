// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _co,
  _dNo,
  _dRCS,
  _dVO,
  _dVR,
  _fR,
  _GLBTC,
  _GLBTCR,
  _GLBTCRe,
  _ht,
  _iAs,
  _iAst,
  _is,
  _kA,
  _l,
  _lBN,
  _LBTC,
  _LBTCDRCS,
  _LBTCDVO,
  _LBTCDVOL,
  _LBTCDVR,
  _LBTCDVRL,
  _LBTCL,
  _LBTCRS,
  _m,
  _n,
  _nA,
  _nB,
  _rA,
  _rR,
  _rS,
  _rSe,
  _rT,
  _s,
  _sA,
  _sAN,
  _sC,
  _seri,
  _su,
  _ta,
  _tC,
  _ty,
  _va,
  _vS,
  n0,
  ResourceLocation,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetLoadBalancerTlsCertificatesRequest = struct(n0, _GLBTCR, 0, [_lBN], [0]);
export var GetLoadBalancerTlsCertificatesResult = struct(
  n0,
  _GLBTCRe,
  0,
  [_tC],
  [() => LoadBalancerTlsCertificateList]
);
export var LoadBalancerTlsCertificate = struct(
  n0,
  _LBTC,
  0,
  [
    _n,
    _a,
    _sC,
    _cA,
    _l,
    _rT,
    _ta,
    _lBN,
    _iAst,
    _s,
    _dNo,
    _dVR,
    _fR,
    _iAs,
    _is,
    _kA,
    _nA,
    _nB,
    _rS,
    _rR,
    _rA,
    _seri,
    _sA,
    _su,
    _sAN,
  ],
  [
    0,
    0,
    0,
    4,
    () => ResourceLocation,
    0,
    () => TagList,
    0,
    2,
    0,
    0,
    () => LoadBalancerTlsCertificateDomainValidationRecordList,
    0,
    4,
    0,
    0,
    4,
    4,
    () => LoadBalancerTlsCertificateRenewalSummary,
    0,
    4,
    0,
    0,
    0,
    64 | 0,
  ]
);
export var LoadBalancerTlsCertificateDnsRecordCreationState = struct(n0, _LBTCDRCS, 0, [_co, _m], [0, 0]);
export var LoadBalancerTlsCertificateDomainValidationOption = struct(n0, _LBTCDVO, 0, [_dNo, _vS], [0, 0]);
export var LoadBalancerTlsCertificateDomainValidationRecord = struct(
  n0,
  _LBTCDVR,
  0,
  [_n, _ty, _va, _vS, _dNo, _dRCS],
  [0, 0, 0, 0, 0, () => LoadBalancerTlsCertificateDnsRecordCreationState]
);
export var LoadBalancerTlsCertificateRenewalSummary = struct(
  n0,
  _LBTCRS,
  0,
  [_rSe, _dVO],
  [0, () => LoadBalancerTlsCertificateDomainValidationOptionList]
);
export var LoadBalancerTlsCertificateDomainValidationOptionList = list(
  n0,
  _LBTCDVOL,
  0,
  () => LoadBalancerTlsCertificateDomainValidationOption
);
export var LoadBalancerTlsCertificateDomainValidationRecordList = list(
  n0,
  _LBTCDVRL,
  0,
  () => LoadBalancerTlsCertificateDomainValidationRecord
);
export var LoadBalancerTlsCertificateList = list(n0, _LBTCL, 0, () => LoadBalancerTlsCertificate);
export var GetLoadBalancerTlsCertificates = op(
  n0,
  _GLBTC,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetLoadBalancerTlsCertificates", 200],
  },
  () => GetLoadBalancerTlsCertificatesRequest,
  () => GetLoadBalancerTlsCertificatesResult
);
