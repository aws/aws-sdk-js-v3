// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cIa,
  _cN,
  _CS,
  _cT,
  _CTD,
  _CTDR,
  _CTDRr,
  _cTo,
  _D,
  _d,
  _DIC,
  _DL,
  _dN,
  _DS,
  _dS,
  _DSL,
  _DTD,
  _DTDR,
  _GDS,
  _gDS,
  _GTD,
  _GTDR,
  _GTDRe,
  _hQ,
  _ht,
  _iCn,
  _LTD,
  _LTDR,
  _LTDRi,
  _mR,
  _n,
  _nT,
  _rA,
  _s,
  _sc,
  _t,
  _ta,
  _tD,
  _tDA,
  _TDL,
  _tDr,
  _TDS,
  _tN,
  _uT,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ColumnSchema = struct(n0, _CS, 0, [_cN, _cTo], [0, 64 | 0]);
export var CreateTrainingDatasetRequest = struct(
  n0,
  _CTDR,
  0,
  [_n, _rA, _tD, _ta, _d],
  [0, 0, () => DatasetList, 128 | 0, 0]
);
export var CreateTrainingDatasetResponse = struct(n0, _CTDRr, 0, [_tDA], [0]);
export var Dataset = struct(n0, _D, 0, [_t, _iCn], [0, () => DatasetInputConfig]);
export var DatasetInputConfig = struct(n0, _DIC, 0, [_sc, _dS], [() => DatasetSchemaList, () => DataSource]);
export var DataSource = struct(n0, _DS, 0, [_gDS], [() => GlueDataSource]);
export var DeleteTrainingDatasetRequest = struct(n0, _DTDR, 0, [_tDA], [[0, 1]]);
export var GetTrainingDatasetRequest = struct(n0, _GTDR, 0, [_tDA], [[0, 1]]);
export var GetTrainingDatasetResponse = struct(
  n0,
  _GTDRe,
  0,
  [_cT, _uT, _tDA, _n, _tD, _s, _rA, _ta, _d],
  [5, 5, 0, 0, () => DatasetList, 0, 0, 128 | 0, 0]
);
export var GlueDataSource = struct(n0, _GDS, 0, [_tN, _dN, _cIa], [0, 0, 0]);
export var ListTrainingDatasetsRequest = struct(
  n0,
  _LTDR,
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
export var ListTrainingDatasetsResponse = struct(n0, _LTDRi, 0, [_nT, _tDr], [0, () => TrainingDatasetList]);
export var TrainingDatasetSummary = struct(n0, _TDS, 0, [_cT, _uT, _tDA, _n, _s, _d], [5, 5, 0, 0, 0, 0]);
export var ColumnTypeList = 64 | 0;

export var DatasetList = list(n0, _DL, 0, () => Dataset);
export var DatasetSchemaList = list(n0, _DSL, 0, () => ColumnSchema);
export var TrainingDatasetList = list(n0, _TDL, 0, () => TrainingDatasetSummary);
export var CreateTrainingDataset = op(
  n0,
  _CTD,
  {
    [_ht]: ["POST", "/training-dataset", 200],
  },
  () => CreateTrainingDatasetRequest,
  () => CreateTrainingDatasetResponse
);
export var DeleteTrainingDataset = op(
  n0,
  _DTD,
  {
    [_ht]: ["DELETE", "/training-dataset/{trainingDatasetArn}", 200],
  },
  () => DeleteTrainingDatasetRequest,
  () => Unit
);
export var GetTrainingDataset = op(
  n0,
  _GTD,
  {
    [_ht]: ["GET", "/training-dataset/{trainingDatasetArn}", 200],
  },
  () => GetTrainingDatasetRequest,
  () => GetTrainingDatasetResponse
);
export var ListTrainingDatasets = op(
  n0,
  _LTD,
  {
    [_ht]: ["GET", "/training-dataset", 200],
  },
  () => ListTrainingDatasetsRequest,
  () => ListTrainingDatasetsResponse
);
