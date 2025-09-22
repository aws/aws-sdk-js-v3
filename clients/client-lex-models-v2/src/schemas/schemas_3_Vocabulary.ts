// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BCCVI,
  _BCCVIR,
  _BCCVIRa,
  _BDCVI,
  _BDCVIR,
  _BDCVIRa,
  _bI,
  _BUCVI,
  _BUCVIR,
  _BUCVIRa,
  _bV,
  _CCVIL,
  _CVEI,
  _CVI,
  _cVI,
  _cVIL,
  _CVIu,
  _dA,
  _DCVIL,
  _eCr,
  _eM,
  _er,
  _FCVI,
  _FCVIa,
  _h,
  _iIt,
  _LCVI,
  _LCVIR,
  _LCVIRi,
  _lI,
  _mRax,
  _NCVI,
  _nTe,
  _ph,
  _r,
  _UCVIL,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchCreateCustomVocabularyItemRequest = struct(
  n0,
  _BCCVIR,
  0,
  [_bI, _bV, _lI, _cVIL],
  [[0, 1], [0, 1], [0, 1], () => CreateCustomVocabularyItemsList]
);
export var BatchCreateCustomVocabularyItemResponse = struct(
  n0,
  _BCCVIRa,
  0,
  [_bI, _bV, _lI, _er, _r],
  [0, 0, 0, () => FailedCustomVocabularyItems, () => CustomVocabularyItems]
);
export var BatchDeleteCustomVocabularyItemRequest = struct(
  n0,
  _BDCVIR,
  0,
  [_bI, _bV, _lI, _cVIL],
  [[0, 1], [0, 1], [0, 1], () => DeleteCustomVocabularyItemsList]
);
export var BatchDeleteCustomVocabularyItemResponse = struct(
  n0,
  _BDCVIRa,
  0,
  [_bI, _bV, _lI, _er, _r],
  [0, 0, 0, () => FailedCustomVocabularyItems, () => CustomVocabularyItems]
);
export var BatchUpdateCustomVocabularyItemRequest = struct(
  n0,
  _BUCVIR,
  0,
  [_bI, _bV, _lI, _cVIL],
  [[0, 1], [0, 1], [0, 1], () => UpdateCustomVocabularyItemsList]
);
export var BatchUpdateCustomVocabularyItemResponse = struct(
  n0,
  _BUCVIRa,
  0,
  [_bI, _bV, _lI, _er, _r],
  [0, 0, 0, () => FailedCustomVocabularyItems, () => CustomVocabularyItems]
);
export var CustomVocabularyEntryId = struct(n0, _CVEI, 0, [_iIt], [0]);
export var CustomVocabularyItem = struct(n0, _CVI, 0, [_iIt, _ph, _w, _dA], [0, 0, 1, 0]);
export var FailedCustomVocabularyItem = struct(n0, _FCVI, 0, [_iIt, _eM, _eCr], [0, 0, 0]);
export var ListCustomVocabularyItemsRequest = struct(
  n0,
  _LCVIR,
  0,
  [_bI, _bV, _lI, _mRax, _nTe],
  [[0, 1], [0, 1], [0, 1], 1, 0]
);
export var ListCustomVocabularyItemsResponse = struct(
  n0,
  _LCVIRi,
  0,
  [_bI, _bV, _lI, _cVI, _nTe],
  [0, 0, 0, () => CustomVocabularyItems, 0]
);
export var NewCustomVocabularyItem = struct(n0, _NCVI, 0, [_ph, _w, _dA], [0, 1, 0]);
export var CreateCustomVocabularyItemsList = list(n0, _CCVIL, 0, () => NewCustomVocabularyItem);
export var CustomVocabularyItems = list(n0, _CVIu, 0, () => CustomVocabularyItem);
export var DeleteCustomVocabularyItemsList = list(n0, _DCVIL, 0, () => CustomVocabularyEntryId);
export var FailedCustomVocabularyItems = list(n0, _FCVIa, 0, () => FailedCustomVocabularyItem);
export var UpdateCustomVocabularyItemsList = list(n0, _UCVIL, 0, () => CustomVocabularyItem);
export var BatchCreateCustomVocabularyItem = op(
  n0,
  _BCCVI,
  {
    [_h]: [
      "PUT",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate",
      200,
    ],
  },
  () => BatchCreateCustomVocabularyItemRequest,
  () => BatchCreateCustomVocabularyItemResponse
);
export var BatchDeleteCustomVocabularyItem = op(
  n0,
  _BDCVI,
  {
    [_h]: [
      "POST",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete",
      200,
    ],
  },
  () => BatchDeleteCustomVocabularyItemRequest,
  () => BatchDeleteCustomVocabularyItemResponse
);
export var BatchUpdateCustomVocabularyItem = op(
  n0,
  _BUCVI,
  {
    [_h]: [
      "PUT",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate",
      200,
    ],
  },
  () => BatchUpdateCustomVocabularyItemRequest,
  () => BatchUpdateCustomVocabularyItemResponse
);
export var ListCustomVocabularyItems = op(
  n0,
  _LCVI,
  {
    [_h]: ["POST", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list", 200],
  },
  () => ListCustomVocabularyItemsRequest,
  () => ListCustomVocabularyItemsResponse
);
