// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _b,
  _C,
  _ce,
  _cL,
  _cT,
  _cTA,
  _cTD,
  _CTS,
  _CTSR,
  _CTSRr,
  _GTSC,
  _GTSCR,
  _GTSCRe,
  _h,
  _hQ,
  _i,
  _nVA,
  _nVB,
  _s,
  _t,
  _ta,
  _tSA,
  _UTS,
  _UTSR,
  _UTSRp,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_8_Create";

/* eslint no-var: 0 */

export var Certificate = struct(n0, _C, 0, [_t, _s, _i, _nVB, _nVA, _b], [0, 0, 0, 4, 4, 21]);
export var CreateTrustStoreRequest = struct(n0, _CTSR, 0, [_cL, _ta, _cT], [64 | 21, [() => TagList, 0], [0, 4]]);
export var CreateTrustStoreResponse = struct(n0, _CTSRr, 0, [_tSA], [0]);
export var GetTrustStoreCertificateRequest = struct(
  n0,
  _GTSCR,
  0,
  [_tSA, _t],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _t,
      },
    ],
  ]
);
export var GetTrustStoreCertificateResponse = struct(n0, _GTSCRe, 0, [_tSA, _ce], [0, () => Certificate]);
export var UpdateTrustStoreRequest = struct(n0, _UTSR, 0, [_tSA, _cTA, _cTD, _cT], [[0, 1], 64 | 21, 64 | 0, [0, 4]]);
export var UpdateTrustStoreResponse = struct(n0, _UTSRp, 0, [_tSA], [0]);
export var CertificateList = 64 | 21;

export var CertificateThumbprintList = 64 | 0;

export var CreateTrustStore = op(
  n0,
  _CTS,
  {
    [_h]: ["POST", "/trustStores", 200],
  },
  () => CreateTrustStoreRequest,
  () => CreateTrustStoreResponse
);
export var GetTrustStoreCertificate = op(
  n0,
  _GTSC,
  {
    [_h]: ["GET", "/trustStores/{trustStoreArn+}/certificate", 200],
  },
  () => GetTrustStoreCertificateRequest,
  () => GetTrustStoreCertificateResponse
);
export var UpdateTrustStore = op(
  n0,
  _UTS,
  {
    [_h]: ["PATCH", "/trustStores/{trustStoreArn+}", 200],
  },
  () => UpdateTrustStoreRequest,
  () => UpdateTrustStoreResponse
);
