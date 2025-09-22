// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aFT,
  _aOT,
  _aU,
  _aUT,
  _cA,
  _ch,
  _cI,
  _CL,
  _CS,
  _cTh,
  _cTr,
  _D,
  _dA,
  _da,
  _dD,
  _dI,
  _DL,
  _dTa,
  _dTPe,
  _dV,
  _dVA,
  _dVI,
  _DVL,
  _DVS,
  _eI,
  _fP,
  _h,
  _hQ,
  _k,
  _LC,
  _LCR,
  _LCRi,
  _LD,
  _LDR,
  _LDRi,
  _LDV,
  _LDVR,
  _LDVRi,
  _lMT,
  _mR,
  _nT,
  _oI,
  _pC,
  _s,
  _sCo,
  _sD,
  _sP,
  _uBCI,
  _uCI,
  n0,
} from "./schemas_0";
import { ChangesetErrorInfo, DataViewDestinationTypeParams, DataViewErrorInfo } from "./schemas_4_Changeset";
import { SchemaUnion } from "./schemas_6_Dataset";
import { DatasetOwnerInfo } from "./schemas_10_User";

/* eslint no-var: 0 */

export var ChangesetSummary = struct(
  n0,
  _CS,
  0,
  [_cI, _cA, _dI, _cTh, _sP, _fP, _cTr, _s, _eI, _aUT, _aFT, _uCI, _uBCI],
  [0, 0, 0, 0, 128 | 0, 128 | 0, 1, 0, () => ChangesetErrorInfo, 1, 1, 0, 0]
);
export var Dataset = struct(
  n0,
  _D,
  0,
  [_dI, _dA, _dTa, _k, _dD, _oI, _cTr, _lMT, _sD, _a],
  [0, 0, 0, 0, 0, [() => DatasetOwnerInfo, 0], 1, 1, () => SchemaUnion, 0]
);
export var DataViewSummary = struct(
  n0,
  _DVS,
  0,
  [_dVI, _dVA, _dI, _aOT, _pC, _sCo, _s, _eI, _dTPe, _aU, _cTr, _lMT],
  [0, 0, 0, 1, 64 | 0, 64 | 0, 0, () => DataViewErrorInfo, () => DataViewDestinationTypeParams, 2, 1, 1]
);
export var ListChangesetsRequest = struct(
  n0,
  _LCR,
  0,
  [_dI, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListChangesetsResponse = struct(n0, _LCRi, 0, [_ch, _nT], [() => ChangesetList, 0]);
export var ListDatasetsRequest = struct(
  n0,
  _LDR,
  0,
  [_nT, _mR],
  [
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
export var ListDatasetsResponse = struct(n0, _LDRi, 0, [_da, _nT], [[() => DatasetList, 0], 0]);
export var ListDataViewsRequest = struct(
  n0,
  _LDVR,
  0,
  [_dI, _nT, _mR],
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
export var ListDataViewsResponse = struct(n0, _LDVRi, 0, [_nT, _dV], [0, () => DataViewList]);
export var ChangesetList = list(n0, _CL, 0, () => ChangesetSummary);
export var DatasetList = list(n0, _DL, 0, [() => Dataset, 0]);
export var DataViewList = list(n0, _DVL, 0, () => DataViewSummary);
export var ListChangesets = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/datasets/{datasetId}/changesetsv2", 200],
  },
  () => ListChangesetsRequest,
  () => ListChangesetsResponse
);
export var ListDatasets = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/datasetsv2", 200],
  },
  () => ListDatasetsRequest,
  () => ListDatasetsResponse
);
export var ListDataViews = op(
  n0,
  _LDV,
  {
    [_h]: ["GET", "/datasets/{datasetId}/dataviewsv2", 200],
  },
  () => ListDataViewsRequest,
  () => ListDataViewsResponse
);
