// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { FeaturedResultsConflictException as __FeaturedResultsConflictException } from "../models/index";
import {
  _BDD,
  _BDDR,
  _BDDRa,
  _BDDRFD,
  _BDDRFDa,
  _c,
  _CI,
  _CIo,
  _CTr,
  _De,
  _DIL,
  _DSI,
  _DSSJI,
  _DSSJMT,
  _e,
  _EC,
  _EM,
  _FD,
  _FDe,
  _FDea,
  _FDL,
  _FRCE,
  _FRS,
  _FRSIe,
  _FRSN,
  _hE,
  _I,
  _II,
  _LUT,
  _M,
  _QT,
  _QTu,
  _SIe,
  _SN,
  _St,
  _UFRS,
  _UFRSR,
  _UFRSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteDocumentRequest = struct(
  n0,
  _BDDR,
  0,
  [_II, _DIL, _DSSJMT],
  [0, 64 | 0, () => DataSourceSyncJobMetricTarget]
);
export var BatchDeleteDocumentResponse = struct(
  n0,
  _BDDRa,
  0,
  [_FD],
  [() => BatchDeleteDocumentResponseFailedDocuments]
);
export var BatchDeleteDocumentResponseFailedDocument = struct(n0, _BDDRFD, 0, [_I, _DSI, _EC, _EM], [0, 0, 0, 0]);
export var ConflictingItem = struct(n0, _CI, 0, [_QT, _SN, _SIe], [0, 0, 0]);
export var DataSourceSyncJobMetricTarget = struct(n0, _DSSJMT, 0, [_DSI, _DSSJI], [0, 0]);
export var FeaturedDocument = struct(n0, _FDea, 0, [_I], [0]);
export var FeaturedResultsConflictException = error(
  n0,
  _FRCE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _CIo],
  [0, () => ConflictingItems],

  __FeaturedResultsConflictException
);
export var FeaturedResultsSet = struct(
  n0,
  _FRS,
  0,
  [_FRSIe, _FRSN, _De, _St, _QTu, _FDe, _LUT, _CTr],
  [0, 0, 0, 0, 64 | 0, () => FeaturedDocumentList, 1, 1]
);
export var UpdateFeaturedResultsSetRequest = struct(
  n0,
  _UFRSR,
  0,
  [_II, _FRSIe, _FRSN, _De, _St, _QTu, _FDe],
  [0, 0, 0, 0, 0, 64 | 0, () => FeaturedDocumentList]
);
export var UpdateFeaturedResultsSetResponse = struct(n0, _UFRSRp, 0, [_FRS], [() => FeaturedResultsSet]);
export var BatchDeleteDocumentResponseFailedDocuments = list(
  n0,
  _BDDRFDa,
  0,
  () => BatchDeleteDocumentResponseFailedDocument
);
export var ConflictingItems = list(n0, _CIo, 0, () => ConflictingItem);
export var DocumentIdList = 64 | 0;

export var FeaturedDocumentList = list(n0, _FDL, 0, () => FeaturedDocument);
export var QueryTextList = 64 | 0;

export var BatchDeleteDocument = op(
  n0,
  _BDD,
  0,
  () => BatchDeleteDocumentRequest,
  () => BatchDeleteDocumentResponse
);
export var UpdateFeaturedResultsSet = op(
  n0,
  _UFRS,
  0,
  () => UpdateFeaturedResultsSetRequest,
  () => UpdateFeaturedResultsSetResponse
);
