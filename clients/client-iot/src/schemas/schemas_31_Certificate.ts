// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aDFO,
  _aO,
  _cD,
  _cPA,
  _CPe,
  _cPe,
  _cPN,
  _CPS,
  _DCPe,
  _DCPRes,
  _DCPResc,
  _h,
  _hQ,
  _iAO,
  _LCP,
  _LCPR,
  _LCPRi,
  _lFA,
  _lMD,
  _nT,
  _UCP,
  _UCPR,
  _UCPRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CertificateProviderSummary = struct(n0, _CPS, 0, [_cPN, _cPA], [0, 0]);
export var DescribeCertificateProviderRequest = struct(n0, _DCPRes, 0, [_cPN], [[0, 1]]);
export var DescribeCertificateProviderResponse = struct(
  n0,
  _DCPResc,
  0,
  [_cPN, _cPA, _lFA, _aDFO, _cD, _lMD],
  [0, 0, 0, 64 | 0, 4, 4]
);
export var ListCertificateProvidersRequest = struct(
  n0,
  _LCPR,
  0,
  [_nT, _aO],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      2,
      {
        [_hQ]: _iAO,
      },
    ],
  ]
);
export var ListCertificateProvidersResponse = struct(n0, _LCPRi, 0, [_cPe, _nT], [() => CertificateProviders, 0]);
export var UpdateCertificateProviderRequest = struct(n0, _UCPR, 0, [_cPN, _lFA, _aDFO], [[0, 1], 0, 64 | 0]);
export var UpdateCertificateProviderResponse = struct(n0, _UCPRp, 0, [_cPN, _cPA], [0, 0]);
export var CertificateProviderAccountDefaultForOperations = 64 | 0;

export var CertificateProviders = list(n0, _CPe, 0, () => CertificateProviderSummary);
export var DescribeCertificateProvider = op(
  n0,
  _DCPe,
  {
    [_h]: ["GET", "/certificate-providers/{certificateProviderName}", 200],
  },
  () => DescribeCertificateProviderRequest,
  () => DescribeCertificateProviderResponse
);
export var ListCertificateProviders = op(
  n0,
  _LCP,
  {
    [_h]: ["GET", "/certificate-providers", 200],
  },
  () => ListCertificateProvidersRequest,
  () => ListCertificateProvidersResponse
);
export var UpdateCertificateProvider = op(
  n0,
  _UCP,
  {
    [_h]: ["PUT", "/certificate-providers/{certificateProviderName}", 200],
  },
  () => UpdateCertificateProviderRequest,
  () => UpdateCertificateProviderResponse
);
