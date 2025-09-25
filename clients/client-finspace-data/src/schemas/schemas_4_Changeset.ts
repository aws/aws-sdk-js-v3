// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aFT,
  _aOT,
  _aU,
  _aUT,
  _cA,
  _CEI,
  _cI,
  _cT,
  _cTh,
  _cTr,
  _dI,
  _dTe,
  _dTP,
  _dVA,
  _DVDTP,
  _DVEI,
  _dVI,
  _eC,
  _eI,
  _eM,
  _fP,
  _GC,
  _GCR,
  _GCRe,
  _GDV,
  _GDVR,
  _GDVRe,
  _h,
  _lMT,
  _pC,
  _s,
  _sCo,
  _sDEFF,
  _sDEFFO,
  _sP,
  _uBCI,
  _UC,
  _uCI,
  _UCR,
  _UCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChangesetErrorInfo = struct(n0, _CEI, 0, [_eM, _eC], [0, 0]);
export var DataViewDestinationTypeParams = struct(n0, _DVDTP, 0, [_dTe, _sDEFF, _sDEFFO], [0, 0, 128 | 0]);
export var DataViewErrorInfo = struct(n0, _DVEI, 0, [_eM, _eC], [0, 0]);
export var GetChangesetRequest = struct(
  n0,
  _GCR,
  0,
  [_dI, _cI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetChangesetResponse = struct(
  n0,
  _GCRe,
  0,
  [_cI, _cA, _dI, _cTh, _sP, _fP, _cTr, _s, _eI, _aUT, _aFT, _uCI, _uBCI],
  [0, 0, 0, 0, 128 | 0, 128 | 0, 1, 0, () => ChangesetErrorInfo, 1, 1, 0, 0]
);
export var GetDataViewRequest = struct(
  n0,
  _GDVR,
  0,
  [_dVI, _dI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataViewResponse = struct(
  n0,
  _GDVRe,
  0,
  [_aU, _pC, _dI, _aOT, _eI, _lMT, _cTr, _sCo, _dVI, _dVA, _dTP, _s],
  [2, 64 | 0, 0, 1, () => DataViewErrorInfo, 1, 1, 64 | 0, 0, 0, () => DataViewDestinationTypeParams, 0]
);
export var UpdateChangesetRequest = struct(
  n0,
  _UCR,
  0,
  [_cT, _dI, _cI, _sP, _fP],
  [[0, 4], [0, 1], [0, 1], 128 | 0, 128 | 0]
);
export var UpdateChangesetResponse = struct(n0, _UCRp, 0, [_cI, _dI], [0, 0]);
export var PartitionColumnList = 64 | 0;

export var SortColumnList = 64 | 0;

export var FormatParams = 128 | 0;

export var S3DestinationFormatOptions = 128 | 0;

export var SourceParams = 128 | 0;

export var GetChangeset = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/datasets/{datasetId}/changesetsv2/{changesetId}", 200],
  },
  () => GetChangesetRequest,
  () => GetChangesetResponse
);
export var GetDataView = op(
  n0,
  _GDV,
  {
    [_h]: ["GET", "/datasets/{datasetId}/dataviewsv2/{dataViewId}", 200],
  },
  () => GetDataViewRequest,
  () => GetDataViewResponse
);
export var UpdateChangeset = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/datasets/{datasetId}/changesetsv2/{changesetId}", 200],
  },
  () => UpdateChangesetRequest,
  () => UpdateChangesetResponse
);
