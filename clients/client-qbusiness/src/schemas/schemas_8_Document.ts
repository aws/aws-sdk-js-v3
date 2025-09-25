// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIp,
  _BDD,
  _BDDR,
  _BDDRa,
  _cA,
  _DD,
  _DDe,
  _DDL,
  _dDL,
  _DDo,
  _dI,
  _do,
  _dSI,
  _dSIa,
  _dSSI,
  _e,
  _FD,
  _fD,
  _FDa,
  _GDC,
  _GDCR,
  _GDCRe,
  _hQ,
  _ht,
  _i,
  _iI,
  _LD,
  _LDR,
  _LDRi,
  _mRa,
  _mT,
  _nT,
  _oF,
  _pU,
  _s,
  _uA,
  ErrorDetail,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteDocumentRequest = struct(
  n0,
  _BDDR,
  0,
  [_aIp, _iI, _do, _dSSI],
  [[0, 1], [0, 1], () => DeleteDocuments, 0]
);
export var BatchDeleteDocumentResponse = struct(n0, _BDDRa, 0, [_fD], [() => FailedDocuments]);
export var DeleteDocument = struct(n0, _DD, 0, [_dI], [0]);
export var DocumentDetails = struct(n0, _DDo, 0, [_dI, _s, _e, _cA, _uA], [0, 0, () => ErrorDetail, 4, 4]);
export var FailedDocument = struct(n0, _FD, 0, [_i, _e, _dSI], [0, () => ErrorDetail, 0]);
export var GetDocumentContentRequest = struct(
  n0,
  _GDCR,
  0,
  [_aIp, _iI, _dSI, _dI, _oF],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _dSI,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _oF,
      },
    ],
  ]
);
export var GetDocumentContentResponse = struct(n0, _GDCRe, 0, [_pU, _mT], [0, 0]);
export var ListDocumentsRequest = struct(
  n0,
  _LDR,
  0,
  [_aIp, _iI, _dSIa, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _dSIa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListDocumentsResponse = struct(n0, _LDRi, 0, [_dDL, _nT], [() => DocumentDetailList, 0]);
export var DataSourceIds = 64 | 0;

export var DeleteDocuments = list(n0, _DDe, 0, () => DeleteDocument);
export var DocumentDetailList = list(n0, _DDL, 0, () => DocumentDetails);
export var FailedDocuments = list(n0, _FDa, 0, () => FailedDocument);
export var BatchDeleteDocument = op(
  n0,
  _BDD,
  {
    [_ht]: ["POST", "/applications/{applicationId}/indices/{indexId}/documents/delete", 200],
  },
  () => BatchDeleteDocumentRequest,
  () => BatchDeleteDocumentResponse
);
export var GetDocumentContent = op(
  n0,
  _GDC,
  {
    [_ht]: ["GET", "/applications/{applicationId}/index/{indexId}/documents/{documentId}/content", 200],
  },
  () => GetDocumentContentRequest,
  () => GetDocumentContentResponse
);
export var ListDocuments = op(
  n0,
  _LD,
  {
    [_ht]: ["GET", "/applications/{applicationId}/index/{indexId}/documents", 200],
  },
  () => ListDocumentsRequest,
  () => ListDocumentsResponse
);
