// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _BGC,
  _BGCR,
  _BGCRa,
  _CD,
  _cD,
  _CDo,
  _cDo,
  _cE,
  _CED,
  _cED,
  _CEDo,
  _CF,
  _cF,
  _CI,
  _CIR,
  _CIRr,
  _CS,
  _cS,
  _CSo,
  _cT,
  _d,
  _DC,
  _DCD,
  _dCD,
  _DCR,
  _DCRe,
  _dE,
  _DI,
  _DIR,
  _DIRe,
  _eC,
  _eM,
  _fC,
  _FE,
  _fE,
  _fM,
  _GI,
  _GIR,
  _GIRe,
  _i,
  _id_,
  _iN,
  _iS,
  _kKA,
  _LC,
  _LCR,
  _LCRi,
  _lMD,
  _mR,
  _n,
  _na,
  _nT,
  _s,
  _sR,
  _t,
  _UC,
  _UCD,
  _uCD,
  _UCR,
  _UCRp,
  _UI,
  _UIR,
  _UIRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetCollectionRequest = struct(n0, _BGCR, 0, [_i, _na], [64 | 0, 64 | 0]);
export var BatchGetCollectionResponse = struct(
  n0,
  _BGCRa,
  0,
  [_cDo, _cED],
  [() => CollectionDetails, () => CollectionErrorDetails]
);
export var CollectionDetail = struct(
  n0,
  _CD,
  0,
  [_id_, _n, _s, _t, _d, _a, _kKA, _sR, _cD, _lMD, _cE, _dE, _fE, _fC, _fM],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, () => FipsEndpoints, 0, 0]
);
export var CollectionErrorDetail = struct(n0, _CED, 0, [_id_, _n, _eM, _eC], [0, 0, 0, 0]);
export var CollectionFilters = struct(n0, _CF, 0, [_n, _s], [0, 0]);
export var CollectionSummary = struct(n0, _CS, 0, [_id_, _n, _s, _a], [0, 0, 0, 0]);
export var CreateIndexRequest = struct(n0, _CIR, 0, [_id_, _iN, _iS], [0, 0, 15]);
export var CreateIndexResponse = struct(n0, _CIRr, 0, [], []);
export var DeleteCollectionDetail = struct(n0, _DCD, 0, [_id_, _n, _s], [0, 0, 0]);
export var DeleteCollectionRequest = struct(n0, _DCR, 0, [_id_, _cT], [0, [0, 4]]);
export var DeleteCollectionResponse = struct(n0, _DCRe, 0, [_dCD], [() => DeleteCollectionDetail]);
export var DeleteIndexRequest = struct(n0, _DIR, 0, [_id_, _iN], [0, 0]);
export var DeleteIndexResponse = struct(n0, _DIRe, 0, [], []);
export var FipsEndpoints = struct(n0, _FE, 0, [_cE, _dE], [0, 0]);
export var GetIndexRequest = struct(n0, _GIR, 0, [_id_, _iN], [0, 0]);
export var GetIndexResponse = struct(n0, _GIRe, 0, [_iS], [15]);
export var ListCollectionsRequest = struct(n0, _LCR, 0, [_cF, _nT, _mR], [() => CollectionFilters, 0, 1]);
export var ListCollectionsResponse = struct(n0, _LCRi, 0, [_cS, _nT], [() => CollectionSummaries, 0]);
export var UpdateCollectionDetail = struct(
  n0,
  _UCD,
  0,
  [_id_, _n, _s, _t, _d, _a, _cD, _lMD],
  [0, 0, 0, 0, 0, 0, 1, 1]
);
export var UpdateCollectionRequest = struct(n0, _UCR, 0, [_id_, _d, _cT], [0, 0, [0, 4]]);
export var UpdateCollectionResponse = struct(n0, _UCRp, 0, [_uCD], [() => UpdateCollectionDetail]);
export var UpdateIndexRequest = struct(n0, _UIR, 0, [_id_, _iN, _iS], [0, 0, 15]);
export var UpdateIndexResponse = struct(n0, _UIRp, 0, [], []);
export var CollectionDetails = list(n0, _CDo, 0, () => CollectionDetail);
export var CollectionErrorDetails = list(n0, _CEDo, 0, () => CollectionErrorDetail);
export var CollectionIds = 64 | 0;

export var CollectionNames = 64 | 0;

export var CollectionSummaries = list(n0, _CSo, 0, () => CollectionSummary);
export var BatchGetCollection = op(
  n0,
  _BGC,
  0,
  () => BatchGetCollectionRequest,
  () => BatchGetCollectionResponse
);
export var CreateIndex = op(
  n0,
  _CI,
  2,
  () => CreateIndexRequest,
  () => CreateIndexResponse
);
export var DeleteCollection = op(
  n0,
  _DC,
  2,
  () => DeleteCollectionRequest,
  () => DeleteCollectionResponse
);
export var DeleteIndex = op(
  n0,
  _DI,
  2,
  () => DeleteIndexRequest,
  () => DeleteIndexResponse
);
export var GetIndex = op(
  n0,
  _GI,
  0,
  () => GetIndexRequest,
  () => GetIndexResponse
);
export var ListCollections = op(
  n0,
  _LC,
  0,
  () => ListCollectionsRequest,
  () => ListCollectionsResponse
);
export var UpdateCollection = op(
  n0,
  _UC,
  2,
  () => UpdateCollectionRequest,
  () => UpdateCollectionResponse
);
export var UpdateIndex = op(
  n0,
  _UI,
  2,
  () => UpdateIndexRequest,
  () => UpdateIndexResponse
);
