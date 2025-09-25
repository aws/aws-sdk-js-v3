// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidArgsException as __InvalidArgsException } from "../models/index";
import {
  _C,
  _c,
  _CA,
  _CAA,
  _CAr,
  _CD,
  _CO,
  _CS,
  _CSe,
  _CSL,
  _CTLP,
  _DCe,
  _DCRe,
  _DCRes,
  _DN,
  _DV,
  _DVL,
  _DVO,
  _DVOL,
  _DVOo,
  _E,
  _e,
  _EKU,
  _eKU,
  _EKUL,
  _EKUx,
  _EO,
  _eO,
  _Ex,
  _F,
  _FR,
  _HASAN,
  _HR,
  _I,
  _IA,
  _IAE,
  _IAm,
  _In,
  _IT,
  _IU,
  _IUB,
  _KA,
  _kT,
  _KU,
  _kU,
  _KUe,
  _KUL,
  _LC,
  _LCR,
  _LCRi,
  _m,
  _MB,
  _mB,
  _MI,
  _N,
  _NA,
  _NB,
  _NT,
  _O,
  _OID,
  _RA,
  _RCe,
  _RCRe,
  _RCReq,
  _RE,
  _RF,
  _RR,
  _RRe,
  _RS,
  _RSe,
  _RSR,
  _RT,
  _S,
  _SA,
  _SAN,
  _SANS,
  _SB,
  _SO,
  _St,
  _Su,
  _T,
  _Ty,
  _UA,
  _UCO,
  _UCOR,
  _V,
  _VD,
  _VE,
  _VM,
  _VS,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Certificate";

/* eslint no-var: 0 */

export var CertificateDetail = struct(
  n0,
  _CD,
  0,
  [
    _CA,
    _DN,
    _SAN,
    _MB,
    _DVO,
    _S,
    _Su,
    _I,
    _CAr,
    _IA,
    _IAm,
    _St,
    _RA,
    _RR,
    _NB,
    _NA,
    _KA,
    _SA,
    _IUB,
    _FR,
    _Ty,
    _RS,
    _KU,
    _EKU,
    _CAA,
    _RE,
    _O,
  ],
  [
    0,
    0,
    64 | 0,
    0,
    () => DomainValidationList,
    0,
    0,
    0,
    4,
    4,
    4,
    0,
    4,
    0,
    4,
    4,
    0,
    0,
    64 | 0,
    0,
    0,
    () => RenewalSummary,
    () => KeyUsageList,
    () => ExtendedKeyUsageList,
    0,
    0,
    () => CertificateOptions,
  ]
);
export var CertificateOptions = struct(n0, _CO, 0, [_CTLP, _E], [0, 0]);
export var CertificateSummary = struct(
  n0,
  _CS,
  0,
  [_CA, _DN, _SANS, _HASAN, _St, _Ty, _KA, _KU, _EKU, _EO, _IU, _Ex, _RE, _NB, _NA, _CAr, _IA, _IAm, _RA, _MB],
  [0, 0, 64 | 0, 2, 0, 0, 0, 64 | 0, 64 | 0, 0, 2, 2, 0, 4, 4, 4, 4, 4, 4, 0]
);
export var DescribeCertificateRequest = struct(n0, _DCRe, 0, [_CA], [0]);
export var DescribeCertificateResponse = struct(n0, _DCRes, 0, [_C], [() => CertificateDetail]);
export var DomainValidation = struct(
  n0,
  _DV,
  0,
  [_DN, _VE, _VD, _VS, _RRe, _HR, _VM],
  [0, 64 | 0, 0, 0, () => ResourceRecord, () => HttpRedirect, 0]
);
export var DomainValidationOption = struct(n0, _DVOo, 0, [_DN, _VD], [0, 0]);
export var ExtendedKeyUsage = struct(n0, _EKUx, 0, [_N, _OID], [0, 0]);
export var Filters = struct(n0, _F, 0, [_eKU, _kU, _kT, _eO, _mB], [64 | 0, 64 | 0, 64 | 0, 0, 0]);
export var HttpRedirect = struct(n0, _HR, 0, [_RF, _RT], [0, 0]);
export var InvalidArgsException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidArgsException
);
export var KeyUsage = struct(n0, _KUe, 0, [_N], [0]);
export var ListCertificatesRequest = struct(
  n0,
  _LCR,
  0,
  [_CSe, _In, _NT, _MI, _SB, _SO],
  [64 | 0, () => Filters, 0, 1, 0, 0]
);
export var ListCertificatesResponse = struct(n0, _LCRi, 0, [_NT, _CSL], [0, () => CertificateSummaryList]);
export var RenewalSummary = struct(n0, _RS, 0, [_RSe, _DVO, _RSR, _UA], [0, () => DomainValidationList, 0, 4]);
export var RequestCertificateRequest = struct(
  n0,
  _RCRe,
  0,
  [_DN, _VM, _SAN, _IT, _DVO, _O, _CAA, _T, _KA, _MB],
  [0, 0, 64 | 0, 0, () => DomainValidationOptionList, () => CertificateOptions, 0, () => TagList, 0, 0]
);
export var RequestCertificateResponse = struct(n0, _RCReq, 0, [_CA], [0]);
export var ResourceRecord = struct(n0, _RRe, 0, [_N, _Ty, _V], [0, 0, 0]);
export var UpdateCertificateOptionsRequest = struct(n0, _UCOR, 0, [_CA, _O], [0, () => CertificateOptions]);
export var Unit = "unit" as const;

export var CertificateStatuses = 64 | 0;

export var CertificateSummaryList = list(n0, _CSL, 0, () => CertificateSummary);
export var DomainList = 64 | 0;

export var DomainValidationList = list(n0, _DVL, 0, () => DomainValidation);
export var DomainValidationOptionList = list(n0, _DVOL, 0, () => DomainValidationOption);
export var ExtendedKeyUsageFilterList = 64 | 0;

export var ExtendedKeyUsageList = list(n0, _EKUL, 0, () => ExtendedKeyUsage);
export var ExtendedKeyUsageNames = 64 | 0;

export var InUseList = 64 | 0;

export var KeyAlgorithmList = 64 | 0;

export var KeyUsageFilterList = 64 | 0;

export var KeyUsageList = list(n0, _KUL, 0, () => KeyUsage);
export var KeyUsageNames = 64 | 0;

export var ValidationEmailList = 64 | 0;

export var DescribeCertificate = op(
  n0,
  _DCe,
  0,
  () => DescribeCertificateRequest,
  () => DescribeCertificateResponse
);
export var ListCertificates = op(
  n0,
  _LC,
  0,
  () => ListCertificatesRequest,
  () => ListCertificatesResponse
);
export var RequestCertificate = op(
  n0,
  _RCe,
  0,
  () => RequestCertificateRequest,
  () => RequestCertificateResponse
);
export var UpdateCertificateOptions = op(
  n0,
  _UCO,
  0,
  () => UpdateCertificateOptionsRequest,
  () => Unit
);
