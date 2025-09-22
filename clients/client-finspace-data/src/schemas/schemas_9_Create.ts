// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _aOT,
  _aU,
  _c,
  _CC,
  _CCR,
  _CCRr,
  _CDV,
  _CDVR,
  _CDVRr,
  _cI,
  _cT,
  _cTh,
  _DD,
  _DDR,
  _DDRe,
  _dI,
  _dTP,
  _dVI,
  _e,
  _fP,
  _h,
  _hE,
  _hQ,
  _iT,
  _LEE,
  _m,
  _pC,
  _sCo,
  _sP,
  n0,
} from "./schemas_0";
import { DataViewDestinationTypeParams } from "./schemas_4_Changeset";

/* eslint no-var: 0 */

export var CreateChangesetRequest = struct(
  n0,
  _CCR,
  0,
  [_cT, _dI, _cTh, _sP, _fP],
  [[0, 4], [0, 1], 0, 128 | 0, 128 | 0]
);
export var CreateChangesetResponse = struct(n0, _CCRr, 0, [_dI, _cI], [0, 0]);
export var CreateDataViewRequest = struct(
  n0,
  _CDVR,
  0,
  [_cT, _dI, _aU, _sCo, _pC, _aOT, _dTP],
  [[0, 4], [0, 1], 2, 64 | 0, 64 | 0, 1, () => DataViewDestinationTypeParams]
);
export var CreateDataViewResponse = struct(n0, _CDVRr, 0, [_dI, _dVI], [0, 0]);
export var DeleteDatasetRequest = struct(
  n0,
  _DDR,
  0,
  [_cT, _dI],
  [
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
    [0, 1],
  ]
);
export var DeleteDatasetResponse = struct(n0, _DDRe, 0, [_dI], [0]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var CreateChangeset = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/datasets/{datasetId}/changesetsv2", 200],
  },
  () => CreateChangesetRequest,
  () => CreateChangesetResponse
);
export var CreateDataView = op(
  n0,
  _CDV,
  {
    [_h]: ["POST", "/datasets/{datasetId}/dataviewsv2", 200],
  },
  () => CreateDataViewRequest,
  () => CreateDataViewResponse
);
export var DeleteDataset = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/datasetsv2/{datasetId}", 200],
  },
  () => DeleteDatasetRequest,
  () => DeleteDatasetResponse
);
