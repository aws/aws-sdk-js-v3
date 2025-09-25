// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _C,
  _cA,
  _cAe,
  _CC,
  _CCR,
  _CCRr,
  _cD,
  _ce,
  _cer,
  _cN,
  _co,
  _CSe,
  _cSe,
  _CSL,
  _DC,
  _DCR,
  _DCRe,
  _dNo,
  _DRCS,
  _dRCS,
  _DVR,
  _dVR,
  _DVRL,
  _eTR,
  _GC,
  _GCR,
  _GCRe,
  _ht,
  _iAs,
  _iCA,
  _iCD,
  _iURC,
  _kA,
  _m,
  _n,
  _nA,
  _nB,
  _nPT,
  _o,
  _pT,
  _rA,
  _rFR,
  _RR,
  _rR,
  _rRe,
  _RS,
  _rS,
  _rSe,
  _rSR,
  _s,
  _sAN,
  _sC,
  _sNe,
  _ta,
  _ty,
  _uA,
  _va,
  _vS,
  n0,
  OperationList,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Certificate = struct(
  n0,
  _C,
  0,
  [_a, _n, _dNo, _s, _sNe, _sAN, _dVR, _rFR, _iURC, _kA, _cA, _iAs, _iCA, _nB, _nA, _eTR, _rS, _rA, _rR, _ta, _sC],
  [
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    () => DomainValidationRecordList,
    0,
    1,
    0,
    4,
    4,
    0,
    4,
    4,
    0,
    () => RenewalSummary,
    4,
    0,
    () => TagList,
    0,
  ]
);
export var CertificateSummary = struct(
  n0,
  _CSe,
  0,
  [_cAe, _cN, _dNo, _cD, _ta],
  [0, 0, 0, () => Certificate, () => TagList]
);
export var CreateCertificateRequest = struct(n0, _CCR, 0, [_cN, _dNo, _sAN, _ta], [0, 0, 64 | 0, () => TagList]);
export var CreateCertificateResult = struct(n0, _CCRr, 0, [_ce, _o], [() => CertificateSummary, () => OperationList]);
export var DeleteCertificateRequest = struct(n0, _DCR, 0, [_cN], [0]);
export var DeleteCertificateResult = struct(n0, _DCRe, 0, [_o], [() => OperationList]);
export var DnsRecordCreationState = struct(n0, _DRCS, 0, [_co, _m], [0, 0]);
export var DomainValidationRecord = struct(
  n0,
  _DVR,
  0,
  [_dNo, _rRe, _dRCS, _vS],
  [0, () => ResourceRecord, () => DnsRecordCreationState, 0]
);
export var GetCertificatesRequest = struct(n0, _GCR, 0, [_cSe, _iCD, _cN, _pT], [64 | 0, 2, 0, 0]);
export var GetCertificatesResult = struct(n0, _GCRe, 0, [_cer, _nPT], [() => CertificateSummaryList, 0]);
export var RenewalSummary = struct(n0, _RS, 0, [_dVR, _rSe, _rSR, _uA], [() => DomainValidationRecordList, 0, 0, 4]);
export var ResourceRecord = struct(n0, _RR, 0, [_n, _ty, _va], [0, 0, 0]);
export var CertificateStatusList = 64 | 0;

export var CertificateSummaryList = list(n0, _CSL, 0, () => CertificateSummary);
export var DomainValidationRecordList = list(n0, _DVRL, 0, () => DomainValidationRecord);
export var SubjectAlternativeNameList = 64 | 0;

export var CreateCertificate = op(
  n0,
  _CC,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateCertificate", 200],
  },
  () => CreateCertificateRequest,
  () => CreateCertificateResult
);
export var DeleteCertificate = op(
  n0,
  _DC,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteCertificate", 200],
  },
  () => DeleteCertificateRequest,
  () => DeleteCertificateResult
);
export var GetCertificates = op(
  n0,
  _GC,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetCertificates", 200],
  },
  () => GetCertificatesRequest,
  () => GetCertificatesResult
);
