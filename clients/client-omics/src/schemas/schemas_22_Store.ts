// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aS,
  _ASI,
  _ASIn,
  _aT,
  _cT,
  _d,
  _DAS,
  _DASR,
  _DASRe,
  _DVS,
  _DVSR,
  _DVSRe,
  _end,
  _f,
  _filt,
  _fTH,
  _GAS,
  _GASR,
  _GASRe,
  _GVS,
  _GVSR,
  _GVSRe,
  _hQ,
  _ht,
  _i,
  _id,
  _LAS,
  _LASF,
  _LASR,
  _LASRi,
  _LVS,
  _LVSF,
  _LVSR,
  _LVSRi,
  _mRa,
  _n,
  _nT,
  _nV,
  _r,
  _rAe,
  _RI,
  _S,
  _sA,
  _sC,
  _sc,
  _sF,
  _sM,
  _SO,
  _sO,
  _sSB,
  _st,
  _ta,
  _TSO,
  _tSO,
  _UAS,
  _UASR,
  _UASRp,
  _uT,
  _UVS,
  _UVSR,
  _UVSRp,
  _vS,
  _VSI,
  _VSIa,
  n0,
  SseConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnnotationStoreItem = struct(
  n0,
  _ASI,
  0,
  [_i, _r, _st, _sA, _n, _sF, _d, _sC, _cT, _uT, _sM, _sSB],
  [0, () => ReferenceItem, 0, 0, 0, 0, 0, () => SseConfig, 5, 5, 0, 1]
);
export var DeleteAnnotationStoreRequest = struct(
  n0,
  _DASR,
  0,
  [_n, _f],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _f,
      },
    ],
  ]
);
export var DeleteAnnotationStoreResponse = struct(n0, _DASRe, 0, [_st], [0]);
export var DeleteVariantStoreRequest = struct(
  n0,
  _DVSR,
  0,
  [_n, _f],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _f,
      },
    ],
  ]
);
export var DeleteVariantStoreResponse = struct(n0, _DVSRe, 0, [_st], [0]);
export var GetAnnotationStoreRequest = struct(n0, _GASR, 0, [_n], [[0, 1]]);
export var GetAnnotationStoreResponse = struct(
  n0,
  _GASRe,
  0,
  [_i, _r, _st, _sA, _n, _d, _sC, _cT, _uT, _ta, _sO, _sF, _sM, _sSB, _nV],
  [0, () => ReferenceItem, 0, 0, 0, 0, () => SseConfig, 5, 5, 128 | 0, () => StoreOptions, 0, 0, 1, 1]
);
export var GetVariantStoreRequest = struct(n0, _GVSR, 0, [_n], [[0, 1]]);
export var GetVariantStoreResponse = struct(
  n0,
  _GVSRe,
  0,
  [_i, _r, _st, _sA, _n, _d, _sC, _cT, _uT, _ta, _sM, _sSB],
  [0, () => ReferenceItem, 0, 0, 0, 0, () => SseConfig, 5, 5, 128 | 0, 0, 1]
);
export var ListAnnotationStoresFilter = struct(n0, _LASF, 0, [_st], [0]);
export var ListAnnotationStoresRequest = struct(
  n0,
  _LASR,
  0,
  [_id, _mRa, _nT, _filt],
  [
    64 | 0,
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => ListAnnotationStoresFilter,
  ]
);
export var ListAnnotationStoresResponse = struct(n0, _LASRi, 0, [_aS, _nT], [() => AnnotationStoreItems, 0]);
export var ListVariantStoresFilter = struct(n0, _LVSF, 0, [_st], [0]);
export var ListVariantStoresRequest = struct(
  n0,
  _LVSR,
  0,
  [_mRa, _id, _nT, _filt],
  [
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    64 | 0,
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => ListVariantStoresFilter,
  ]
);
export var ListVariantStoresResponse = struct(n0, _LVSRi, 0, [_vS, _nT], [() => VariantStoreItems, 0]);
export var TsvStoreOptions = struct(n0, _TSO, 0, [_aT, _fTH, _sc], [0, 128 | 0, list(n0, _S, 0, 128 | 0)]);
export var UpdateAnnotationStoreRequest = struct(n0, _UASR, 0, [_n, _d], [[0, 1], 0]);
export var UpdateAnnotationStoreResponse = struct(
  n0,
  _UASRp,
  0,
  [_i, _r, _st, _n, _d, _cT, _uT, _sO, _sF],
  [0, () => ReferenceItem, 0, 0, 0, 5, 5, () => StoreOptions, 0]
);
export var UpdateVariantStoreRequest = struct(n0, _UVSR, 0, [_n, _d], [[0, 1], 0]);
export var UpdateVariantStoreResponse = struct(
  n0,
  _UVSRp,
  0,
  [_i, _r, _st, _n, _d, _cT, _uT],
  [0, () => ReferenceItem, 0, 0, 0, 5, 5]
);
export var VariantStoreItem = struct(
  n0,
  _VSI,
  0,
  [_i, _r, _st, _sA, _n, _d, _sC, _cT, _uT, _sM, _sSB],
  [0, () => ReferenceItem, 0, 0, 0, 0, () => SseConfig, 5, 5, 0, 1]
);
export var AnnotationStoreItems = list(n0, _ASIn, 0, () => AnnotationStoreItem);
export var VariantStoreItems = list(n0, _VSIa, 0, () => VariantStoreItem);
export var ReferenceItem = uni(n0, _RI, 0, [_rAe], [0]);
export var StoreOptions = uni(n0, _SO, 0, [_tSO], [() => TsvStoreOptions]);
export var DeleteAnnotationStore = op(
  n0,
  _DAS,
  {
    [_ht]: ["DELETE", "/annotationStore/{name}", 200],
    [_end]: ["analytics-"],
  },
  () => DeleteAnnotationStoreRequest,
  () => DeleteAnnotationStoreResponse
);
export var DeleteVariantStore = op(
  n0,
  _DVS,
  {
    [_ht]: ["DELETE", "/variantStore/{name}", 200],
    [_end]: ["analytics-"],
  },
  () => DeleteVariantStoreRequest,
  () => DeleteVariantStoreResponse
);
export var GetAnnotationStore = op(
  n0,
  _GAS,
  {
    [_end]: ["analytics-"],
    [_ht]: ["GET", "/annotationStore/{name}", 200],
  },
  () => GetAnnotationStoreRequest,
  () => GetAnnotationStoreResponse
);
export var GetVariantStore = op(
  n0,
  _GVS,
  {
    [_end]: ["analytics-"],
    [_ht]: ["GET", "/variantStore/{name}", 200],
  },
  () => GetVariantStoreRequest,
  () => GetVariantStoreResponse
);
export var ListAnnotationStores = op(
  n0,
  _LAS,
  {
    [_end]: ["analytics-"],
    [_ht]: ["POST", "/annotationStores", 200],
  },
  () => ListAnnotationStoresRequest,
  () => ListAnnotationStoresResponse
);
export var ListVariantStores = op(
  n0,
  _LVS,
  {
    [_end]: ["analytics-"],
    [_ht]: ["POST", "/variantStores", 200],
  },
  () => ListVariantStoresRequest,
  () => ListVariantStoresResponse
);
export var UpdateAnnotationStore = op(
  n0,
  _UAS,
  {
    [_ht]: ["POST", "/annotationStore/{name}", 200],
    [_end]: ["analytics-"],
  },
  () => UpdateAnnotationStoreRequest,
  () => UpdateAnnotationStoreResponse
);
export var UpdateVariantStore = op(
  n0,
  _UVS,
  {
    [_ht]: ["POST", "/variantStore/{name}", 200],
    [_end]: ["analytics-"],
  },
  () => UpdateVariantStoreRequest,
  () => UpdateVariantStoreResponse
);
