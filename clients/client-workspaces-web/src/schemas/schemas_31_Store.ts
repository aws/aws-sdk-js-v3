// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cL,
  _CS,
  _CSL,
  _h,
  _hQ,
  _i,
  _LTSC,
  _LTSCR,
  _LTSCRi,
  _mR,
  _nT,
  _nVA,
  _nVB,
  _s,
  _t,
  _tSA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CertificateSummary = struct(n0, _CS, 0, [_t, _s, _i, _nVB, _nVA], [0, 0, 0, 4, 4]);
export var ListTrustStoreCertificatesRequest = struct(
  n0,
  _LTSCR,
  0,
  [_tSA, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListTrustStoreCertificatesResponse = struct(
  n0,
  _LTSCRi,
  0,
  [_cL, _tSA, _nT],
  [() => CertificateSummaryList, 0, 0]
);
export var CertificateSummaryList = list(n0, _CSL, 0, () => CertificateSummary);
export var ListTrustStoreCertificates = op(
  n0,
  _LTSC,
  {
    [_h]: ["GET", "/trustStores/{trustStoreArn+}/certificates", 200],
  },
  () => ListTrustStoreCertificatesRequest,
  () => ListTrustStoreCertificatesResponse
);
