// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aO,
  _C,
  _cAe,
  _cCI,
  _cD,
  _Ce,
  _ce,
  _cI,
  _cMe,
  _h,
  _hQ,
  _iAO,
  _LC,
  _LCBCA,
  _LCBCAR,
  _LCBCARi,
  _LCR,
  _LCRi,
  _ma,
  _nM,
  _pS,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Certificate = struct(n0, _C, 0, [_cAe, _cI, _st, _cMe, _cD], [0, 0, 0, 0, 4]);
export var ListCertificatesByCARequest = struct(
  n0,
  _LCBCAR,
  0,
  [_cCI, _pS, _ma, _aO],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
    [
      0,
      {
        [_hQ]: _ma,
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
export var ListCertificatesByCAResponse = struct(n0, _LCBCARi, 0, [_ce, _nM], [() => Certificates, 0]);
export var ListCertificatesRequest = struct(
  n0,
  _LCR,
  0,
  [_pS, _ma, _aO],
  [
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
    [
      0,
      {
        [_hQ]: _ma,
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
export var ListCertificatesResponse = struct(n0, _LCRi, 0, [_ce, _nM], [() => Certificates, 0]);
export var Certificates = list(n0, _Ce, 0, () => Certificate);
export var ListCertificates = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/certificates", 200],
  },
  () => ListCertificatesRequest,
  () => ListCertificatesResponse
);
export var ListCertificatesByCA = op(
  n0,
  _LCBCA,
  {
    [_h]: ["GET", "/certificates-by-ca/{caCertificateId}", 200],
  },
  () => ListCertificatesByCARequest,
  () => ListCertificatesByCAResponse
);
