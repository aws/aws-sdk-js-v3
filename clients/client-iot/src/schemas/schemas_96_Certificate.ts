// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aO,
  _cAe,
  _cD,
  _cI,
  _h,
  _hQ,
  _iAO,
  _LOC,
  _LOCR,
  _LOCRi,
  _ma,
  _nM,
  _OC,
  _oC,
  _OCu,
  _pS,
  _RCT,
  _RCTR,
  _rRe,
  _tDr,
  _tM,
  _tTr,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListOutgoingCertificatesRequest = struct(
  n0,
  _LOCR,
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
export var ListOutgoingCertificatesResponse = struct(n0, _LOCRi, 0, [_oC, _nM], [() => OutgoingCertificates, 0]);
export var OutgoingCertificate = struct(n0, _OC, 0, [_cAe, _cI, _tTr, _tDr, _tM, _cD], [0, 0, 0, 4, 0, 4]);
export var RejectCertificateTransferRequest = struct(n0, _RCTR, 0, [_cI, _rRe], [[0, 1], 0]);
export var OutgoingCertificates = list(n0, _OCu, 0, () => OutgoingCertificate);
export var ListOutgoingCertificates = op(
  n0,
  _LOC,
  {
    [_h]: ["GET", "/certificates-out-going", 200],
  },
  () => ListOutgoingCertificatesRequest,
  () => ListOutgoingCertificatesResponse
);
export var RejectCertificateTransfer = op(
  n0,
  _RCT,
  {
    [_h]: ["PATCH", "/reject-certificate-transfer/{certificateId}", 200],
  },
  () => RejectCertificateTransferRequest,
  () => Unit
);
