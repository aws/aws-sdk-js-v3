// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  QueryTimeoutException as __QueryTimeoutException,
  ServiceUnavailableException as __ServiceUnavailableException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _a,
  _aIs,
  _APV,
  _aPV,
  _APVH,
  _aPVH,
  _APVs,
  _aTg,
  _AV,
  _aV,
  _AVg,
  _aVr,
  _BGAPA,
  _BGAPAE,
  _BGAPAEa,
  _BGAPAEE,
  _BGAPAEEa,
  _BGAPAEI,
  _BGAPAR,
  _BGAPARa,
  _BGAPASE,
  _BGAPASEa,
  _BGAPASEat,
  _BGAPASEatc,
  _BGAPV,
  _BGAPVE,
  _BGAPVEa,
  _BGAPVEE,
  _BGAPVEEa,
  _BGAPVEI,
  _BGAPVH,
  _BGAPVHE,
  _BGAPVHEa,
  _BGAPVHEE,
  _BGAPVHEEa,
  _BGAPVHEI,
  _BGAPVHR,
  _BGAPVHRa,
  _BGAPVHSE,
  _BGAPVHSEa,
  _BGAPVHSEat,
  _BGAPVHSEatc,
  _BGAPVR,
  _BGAPVRa,
  _BGAPVSE,
  _BGAPVSEa,
  _BGAPVSEat,
  _BGAPVSEatc,
  _BPAPE,
  _BPAPEa,
  _BPAPEE,
  _BPAPEEa,
  _BPAPV,
  _BPAPVR,
  _BPAPVRa,
  _bV,
  _c,
  _CI,
  _CL,
  _co,
  _col,
  _cS,
  _CT,
  _cT,
  _D,
  _da,
  _DL,
  _dVo,
  _e,
  _eC,
  _eD,
  _eE,
  _eIn,
  _eIr,
  _eM,
  _en,
  _end,
  _ePEP,
  _EQ,
  _EQR,
  _EQRx,
  _er,
  _eT,
  _eTIS,
  _eTOIN,
  _GAPA,
  _GAPAR,
  _GAPARe,
  _GAPV,
  _GAPVH,
  _GAPVHR,
  _GAPVHRe,
  _GAPVR,
  _GAPVRe,
  _GIAPV,
  _GIAPVR,
  _GIAPVRe,
  _hE,
  _hQ,
  _ht,
  _IAPV,
  _iAPV,
  _IAPVn,
  _iIS,
  _iV,
  _iWIS,
  _m,
  _ma,
  _mi,
  _mR,
  _n,
  _nT,
  _nV,
  _oIN,
  _pA,
  _PAPVE,
  _PAPVEu,
  _pI,
  _pV,
  _PVNV,
  _pVr,
  _q,
  _qS,
  _QTE,
  _qu,
  _re,
  _Ro,
  _ro,
  _Row,
  _rV,
  _s,
  _sD,
  _sDt,
  _sE,
  _se,
  _sEk,
  _sT,
  _sTIS,
  _sTOIN,
  _SUE,
  _sV,
  _sVc,
  _t,
  _Ti,
  _ti,
  _TIN,
  _tIS,
  _tO,
  _ty,
  _V,
  _v,
  _VE,
  _vT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AggregatedValue = struct(n0, _AV, 0, [_t, _q, _v], [4, 0, () => Aggregates]);
export var Aggregates = struct(n0, _A, 0, [_a, _co, _ma, _mi, _s, _sD], [1, 1, 1, 1, 1, 1]);
export var AssetPropertyValue = struct(n0, _APV, 0, [_v, _t, _q], [() => Variant, () => TimeInNanos, 0]);
export var BatchGetAssetPropertyAggregatesEntry = struct(
  n0,
  _BGAPAE,
  0,
  [_eIn, _aIs, _pI, _pA, _aTg, _re, _sDt, _eD, _qu, _tO],
  [0, 0, 0, 0, 64 | 0, 0, 4, 4, 64 | 0, 0]
);
export var BatchGetAssetPropertyAggregatesErrorEntry = struct(n0, _BGAPAEE, 0, [_eC, _eM, _eIn], [0, 0, 0]);
export var BatchGetAssetPropertyAggregatesErrorInfo = struct(n0, _BGAPAEI, 0, [_eC, _eT], [0, 4]);
export var BatchGetAssetPropertyAggregatesRequest = struct(
  n0,
  _BGAPAR,
  0,
  [_en, _nT, _mR],
  [() => BatchGetAssetPropertyAggregatesEntries, 0, 1]
);
export var BatchGetAssetPropertyAggregatesResponse = struct(
  n0,
  _BGAPARa,
  0,
  [_eE, _sE, _sEk, _nT],
  [
    () => BatchGetAssetPropertyAggregatesErrorEntries,
    () => BatchGetAssetPropertyAggregatesSuccessEntries,
    () => BatchGetAssetPropertyAggregatesSkippedEntries,
    0,
  ]
);
export var BatchGetAssetPropertyAggregatesSkippedEntry = struct(
  n0,
  _BGAPASE,
  0,
  [_eIn, _cS, _eIr],
  [0, 0, () => BatchGetAssetPropertyAggregatesErrorInfo]
);
export var BatchGetAssetPropertyAggregatesSuccessEntry = struct(
  n0,
  _BGAPASEa,
  0,
  [_eIn, _aV],
  [0, () => AggregatedValues]
);
export var BatchGetAssetPropertyValueEntry = struct(n0, _BGAPVE, 0, [_eIn, _aIs, _pI, _pA], [0, 0, 0, 0]);
export var BatchGetAssetPropertyValueErrorEntry = struct(n0, _BGAPVEE, 0, [_eC, _eM, _eIn], [0, 0, 0]);
export var BatchGetAssetPropertyValueErrorInfo = struct(n0, _BGAPVEI, 0, [_eC, _eT], [0, 4]);
export var BatchGetAssetPropertyValueHistoryEntry = struct(
  n0,
  _BGAPVHE,
  0,
  [_eIn, _aIs, _pI, _pA, _sDt, _eD, _qu, _tO],
  [0, 0, 0, 0, 4, 4, 64 | 0, 0]
);
export var BatchGetAssetPropertyValueHistoryErrorEntry = struct(n0, _BGAPVHEE, 0, [_eC, _eM, _eIn], [0, 0, 0]);
export var BatchGetAssetPropertyValueHistoryErrorInfo = struct(n0, _BGAPVHEI, 0, [_eC, _eT], [0, 4]);
export var BatchGetAssetPropertyValueHistoryRequest = struct(
  n0,
  _BGAPVHR,
  0,
  [_en, _nT, _mR],
  [() => BatchGetAssetPropertyValueHistoryEntries, 0, 1]
);
export var BatchGetAssetPropertyValueHistoryResponse = struct(
  n0,
  _BGAPVHRa,
  0,
  [_eE, _sE, _sEk, _nT],
  [
    () => BatchGetAssetPropertyValueHistoryErrorEntries,
    () => BatchGetAssetPropertyValueHistorySuccessEntries,
    () => BatchGetAssetPropertyValueHistorySkippedEntries,
    0,
  ]
);
export var BatchGetAssetPropertyValueHistorySkippedEntry = struct(
  n0,
  _BGAPVHSE,
  0,
  [_eIn, _cS, _eIr],
  [0, 0, () => BatchGetAssetPropertyValueHistoryErrorInfo]
);
export var BatchGetAssetPropertyValueHistorySuccessEntry = struct(
  n0,
  _BGAPVHSEa,
  0,
  [_eIn, _aPVH],
  [0, () => AssetPropertyValueHistory]
);
export var BatchGetAssetPropertyValueRequest = struct(
  n0,
  _BGAPVR,
  0,
  [_en, _nT],
  [() => BatchGetAssetPropertyValueEntries, 0]
);
export var BatchGetAssetPropertyValueResponse = struct(
  n0,
  _BGAPVRa,
  0,
  [_eE, _sE, _sEk, _nT],
  [
    () => BatchGetAssetPropertyValueErrorEntries,
    () => BatchGetAssetPropertyValueSuccessEntries,
    () => BatchGetAssetPropertyValueSkippedEntries,
    0,
  ]
);
export var BatchGetAssetPropertyValueSkippedEntry = struct(
  n0,
  _BGAPVSE,
  0,
  [_eIn, _cS, _eIr],
  [0, 0, () => BatchGetAssetPropertyValueErrorInfo]
);
export var BatchGetAssetPropertyValueSuccessEntry = struct(
  n0,
  _BGAPVSEa,
  0,
  [_eIn, _aPV],
  [0, () => AssetPropertyValue]
);
export var BatchPutAssetPropertyError = struct(n0, _BPAPE, 0, [_eC, _eM, _ti], [0, 0, () => Timestamps]);
export var BatchPutAssetPropertyErrorEntry = struct(
  n0,
  _BPAPEE,
  0,
  [_eIn, _er],
  [0, () => BatchPutAssetPropertyErrors]
);
export var BatchPutAssetPropertyValueRequest = struct(
  n0,
  _BPAPVR,
  0,
  [_ePEP, _en],
  [2, () => PutAssetPropertyValueEntries]
);
export var BatchPutAssetPropertyValueResponse = struct(
  n0,
  _BPAPVRa,
  0,
  [_eE],
  [() => BatchPutAssetPropertyErrorEntries]
);
export var ColumnInfo = struct(n0, _CI, 0, [_n, _ty], [0, () => ColumnType]);
export var ColumnType = struct(n0, _CT, 0, [_sT], [0]);
export var Datum = struct(n0, _D, 0, [_sVc, _aVr, _rV, _nV], [0, () => DatumList, () => Row, 2]);
export var ExecuteQueryRequest = struct(n0, _EQR, 0, [_qS, _nT, _mR, _cT], [0, 0, 1, [0, 4]]);
export var ExecuteQueryResponse = struct(n0, _EQRx, 0, [_col, _ro, _nT], [() => ColumnsList, () => Rows, 0]);
export var GetAssetPropertyAggregatesRequest = struct(
  n0,
  _GAPAR,
  0,
  [_aIs, _pI, _pA, _aTg, _re, _qu, _sDt, _eD, _tO, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _aIs,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      0,
      {
        [_hQ]: _pA,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _aTg,
      },
    ],
    [
      0,
      {
        [_hQ]: _re,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _qu,
      },
    ],
    [
      4,
      {
        [_hQ]: _sDt,
      },
    ],
    [
      4,
      {
        [_hQ]: _eD,
      },
    ],
    [
      0,
      {
        [_hQ]: _tO,
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
        [_hQ]: _mR,
      },
    ],
  ]
);
export var GetAssetPropertyAggregatesResponse = struct(n0, _GAPARe, 0, [_aV, _nT], [() => AggregatedValues, 0]);
export var GetAssetPropertyValueHistoryRequest = struct(
  n0,
  _GAPVHR,
  0,
  [_aIs, _pI, _pA, _sDt, _eD, _qu, _tO, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _aIs,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      0,
      {
        [_hQ]: _pA,
      },
    ],
    [
      4,
      {
        [_hQ]: _sDt,
      },
    ],
    [
      4,
      {
        [_hQ]: _eD,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _qu,
      },
    ],
    [
      0,
      {
        [_hQ]: _tO,
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
        [_hQ]: _mR,
      },
    ],
  ]
);
export var GetAssetPropertyValueHistoryResponse = struct(
  n0,
  _GAPVHRe,
  0,
  [_aPVH, _nT],
  [() => AssetPropertyValueHistory, 0]
);
export var GetAssetPropertyValueRequest = struct(
  n0,
  _GAPVR,
  0,
  [_aIs, _pI, _pA],
  [
    [
      0,
      {
        [_hQ]: _aIs,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      0,
      {
        [_hQ]: _pA,
      },
    ],
  ]
);
export var GetAssetPropertyValueResponse = struct(n0, _GAPVRe, 0, [_pV], [() => AssetPropertyValue]);
export var GetInterpolatedAssetPropertyValuesRequest = struct(
  n0,
  _GIAPVR,
  0,
  [_aIs, _pI, _pA, _sTIS, _sTOIN, _eTIS, _eTOIN, _q, _iIS, _nT, _mR, _ty, _iWIS],
  [
    [
      0,
      {
        [_hQ]: _aIs,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      0,
      {
        [_hQ]: _pA,
      },
    ],
    [
      1,
      {
        [_hQ]: _sTIS,
      },
    ],
    [
      1,
      {
        [_hQ]: _sTOIN,
      },
    ],
    [
      1,
      {
        [_hQ]: _eTIS,
      },
    ],
    [
      1,
      {
        [_hQ]: _eTOIN,
      },
    ],
    [
      0,
      {
        [_hQ]: _q,
      },
    ],
    [
      1,
      {
        [_hQ]: _iIS,
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
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
    [
      1,
      {
        [_hQ]: _iWIS,
      },
    ],
  ]
);
export var GetInterpolatedAssetPropertyValuesResponse = struct(
  n0,
  _GIAPVRe,
  0,
  [_iAPV, _nT],
  [() => InterpolatedAssetPropertyValues, 0]
);
export var InterpolatedAssetPropertyValue = struct(n0, _IAPV, 0, [_t, _v], [() => TimeInNanos, () => Variant]);
export var PropertyValueNullValue = struct(n0, _PVNV, 0, [_vT], [0]);
export var PutAssetPropertyValueEntry = struct(
  n0,
  _PAPVE,
  0,
  [_eIn, _aIs, _pI, _pA, _pVr],
  [0, 0, 0, 0, () => AssetPropertyValues]
);
export var QueryTimeoutException = error(
  n0,
  _QTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __QueryTimeoutException
);
export var Row = struct(n0, _Ro, 0, [_da], [() => DatumList]);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
export var TimeInNanos = struct(n0, _TIN, 0, [_tIS, _oIN], [1, 1]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var Variant = struct(n0, _V, 0, [_sV, _iV, _dVo, _bV, _nV], [0, 1, 1, 2, () => PropertyValueNullValue]);
export var AggregatedValues = list(n0, _AVg, 0, () => AggregatedValue);
export var AggregateTypes = 64 | 0;

export var AssetPropertyValueHistory = list(n0, _APVH, 0, () => AssetPropertyValue);
export var AssetPropertyValues = list(n0, _APVs, 0, () => AssetPropertyValue);
export var BatchGetAssetPropertyAggregatesEntries = list(n0, _BGAPAEa, 0, () => BatchGetAssetPropertyAggregatesEntry);
export var BatchGetAssetPropertyAggregatesErrorEntries = list(
  n0,
  _BGAPAEEa,
  0,
  () => BatchGetAssetPropertyAggregatesErrorEntry
);
export var BatchGetAssetPropertyAggregatesSkippedEntries = list(
  n0,
  _BGAPASEat,
  0,
  () => BatchGetAssetPropertyAggregatesSkippedEntry
);
export var BatchGetAssetPropertyAggregatesSuccessEntries = list(
  n0,
  _BGAPASEatc,
  0,
  () => BatchGetAssetPropertyAggregatesSuccessEntry
);
export var BatchGetAssetPropertyValueEntries = list(n0, _BGAPVEa, 0, () => BatchGetAssetPropertyValueEntry);
export var BatchGetAssetPropertyValueErrorEntries = list(n0, _BGAPVEEa, 0, () => BatchGetAssetPropertyValueErrorEntry);
export var BatchGetAssetPropertyValueHistoryEntries = list(
  n0,
  _BGAPVHEa,
  0,
  () => BatchGetAssetPropertyValueHistoryEntry
);
export var BatchGetAssetPropertyValueHistoryErrorEntries = list(
  n0,
  _BGAPVHEEa,
  0,
  () => BatchGetAssetPropertyValueHistoryErrorEntry
);
export var BatchGetAssetPropertyValueHistorySkippedEntries = list(
  n0,
  _BGAPVHSEat,
  0,
  () => BatchGetAssetPropertyValueHistorySkippedEntry
);
export var BatchGetAssetPropertyValueHistorySuccessEntries = list(
  n0,
  _BGAPVHSEatc,
  0,
  () => BatchGetAssetPropertyValueHistorySuccessEntry
);
export var BatchGetAssetPropertyValueSkippedEntries = list(
  n0,
  _BGAPVSEat,
  0,
  () => BatchGetAssetPropertyValueSkippedEntry
);
export var BatchGetAssetPropertyValueSuccessEntries = list(
  n0,
  _BGAPVSEatc,
  0,
  () => BatchGetAssetPropertyValueSuccessEntry
);
export var BatchPutAssetPropertyErrorEntries = list(n0, _BPAPEEa, 0, () => BatchPutAssetPropertyErrorEntry);
export var BatchPutAssetPropertyErrors = list(n0, _BPAPEa, 0, () => BatchPutAssetPropertyError);
export var ColumnsList = list(n0, _CL, 0, () => ColumnInfo);
export var DatumList = list(n0, _DL, 0, () => Datum);
export var InterpolatedAssetPropertyValues = list(n0, _IAPVn, 0, () => InterpolatedAssetPropertyValue);
export var PutAssetPropertyValueEntries = list(n0, _PAPVEu, 0, () => PutAssetPropertyValueEntry);
export var Qualities = 64 | 0;

export var Rows = list(n0, _Row, 0, () => Row);
export var Timestamps = list(n0, _Ti, 0, () => TimeInNanos);
export var BatchGetAssetPropertyAggregates = op(
  n0,
  _BGAPA,
  {
    [_ht]: ["POST", "/properties/batch/aggregates", 200],
    [_end]: ["data."],
  },
  () => BatchGetAssetPropertyAggregatesRequest,
  () => BatchGetAssetPropertyAggregatesResponse
);
export var BatchGetAssetPropertyValue = op(
  n0,
  _BGAPV,
  {
    [_ht]: ["POST", "/properties/batch/latest", 200],
    [_end]: ["data."],
  },
  () => BatchGetAssetPropertyValueRequest,
  () => BatchGetAssetPropertyValueResponse
);
export var BatchGetAssetPropertyValueHistory = op(
  n0,
  _BGAPVH,
  {
    [_ht]: ["POST", "/properties/batch/history", 200],
    [_end]: ["data."],
  },
  () => BatchGetAssetPropertyValueHistoryRequest,
  () => BatchGetAssetPropertyValueHistoryResponse
);
export var BatchPutAssetPropertyValue = op(
  n0,
  _BPAPV,
  {
    [_ht]: ["POST", "/properties", 200],
    [_end]: ["data."],
  },
  () => BatchPutAssetPropertyValueRequest,
  () => BatchPutAssetPropertyValueResponse
);
export var ExecuteQuery = op(
  n0,
  _EQ,
  {
    [_ht]: ["POST", "/queries/execution", 200],
    [_end]: ["data."],
  },
  () => ExecuteQueryRequest,
  () => ExecuteQueryResponse
);
export var GetAssetPropertyAggregates = op(
  n0,
  _GAPA,
  {
    [_ht]: ["GET", "/properties/aggregates", 200],
    [_end]: ["data."],
  },
  () => GetAssetPropertyAggregatesRequest,
  () => GetAssetPropertyAggregatesResponse
);
export var GetAssetPropertyValue = op(
  n0,
  _GAPV,
  {
    [_ht]: ["GET", "/properties/latest", 200],
    [_end]: ["data."],
  },
  () => GetAssetPropertyValueRequest,
  () => GetAssetPropertyValueResponse
);
export var GetAssetPropertyValueHistory = op(
  n0,
  _GAPVH,
  {
    [_ht]: ["GET", "/properties/history", 200],
    [_end]: ["data."],
  },
  () => GetAssetPropertyValueHistoryRequest,
  () => GetAssetPropertyValueHistoryResponse
);
export var GetInterpolatedAssetPropertyValues = op(
  n0,
  _GIAPV,
  {
    [_ht]: ["GET", "/properties/interpolated", 200],
    [_end]: ["data."],
  },
  () => GetInterpolatedAssetPropertyValuesRequest,
  () => GetInterpolatedAssetPropertyValuesResponse
);
