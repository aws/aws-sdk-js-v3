// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aD,
  _aDc,
  _aMP,
  _aP,
  _ar,
  _BVL,
  _cD,
  _cMA,
  _CMADC,
  _CMC,
  _cMC,
  _cMCD,
  _cMD,
  _CMDB,
  _cMDB,
  _CMDBV,
  _cMIo,
  _cMLUD,
  _cMN,
  _cMS,
  _CMSo,
  _cMSo,
  _CMSom,
  _cMT,
  _cMV,
  _cT,
  _d,
  _dAa,
  _dCDa,
  _DCMe,
  _DCMRes,
  _DCMResc,
  _dDat,
  _DDesc,
  _DDRescr,
  _DDRescri,
  _dIa,
  _dLUDa,
  _dNa,
  _dS,
  _DSa,
  _dSa,
  _dSat,
  _DSata,
  _DSatas,
  _dVa,
  _end,
  _hQ,
  _ht,
  _i,
  _iP,
  _kBA,
  _ke,
  _KSD,
  _l,
  _LCM,
  _LCMR,
  _LCMRi,
  _LDi,
  _LDRis,
  _LDRist,
  _lUD,
  _mR,
  _n,
  _nT,
  _rAo,
  _rP,
  _SD,
  _sDo,
  _sF,
  _sta,
  _sTo,
  _ty,
  _UCM,
  _UCMR,
  _UCMRp,
  _UDp,
  _UDRpd,
  _UDRpda,
  _ve,
  n0,
} from "./schemas_0";
import { AssetModelPropertyBindingValue, AssetPropertyBindingValue } from "./schemas_16_Computation";
import { DatasetStatus } from "./schemas_24_Dataset";
import { ComputationModelStatus } from "./schemas_35_Computation";
import { ActionDefinitions } from "./schemas_43_Describe";

/* eslint no-var: 0 */

export var ComputationModelAnomalyDetectionConfiguration = struct(n0, _CMADC, 0, [_iP, _rP], [0, 0]);
export var ComputationModelConfiguration = struct(
  n0,
  _CMC,
  0,
  [_aD],
  [() => ComputationModelAnomalyDetectionConfiguration]
);
export var ComputationModelDataBindingValue = struct(
  n0,
  _CMDBV,
  0,
  [_aMP, _aP, _l],
  [() => AssetModelPropertyBindingValue, () => AssetPropertyBindingValue, () => BindingValueList]
);
export var ComputationModelSummary = struct(
  n0,
  _CMSo,
  0,
  [_i, _ar, _n, _d, _ty, _cD, _lUD, _sta, _ve],
  [0, 0, 0, 0, 0, 4, 4, () => ComputationModelStatus, 0]
);
export var DatasetSource = struct(n0, _DSa, 0, [_sTo, _sF, _sDo], [0, 0, () => SourceDetail]);
export var DatasetSummary = struct(
  n0,
  _DSata,
  0,
  [_i, _ar, _n, _d, _cD, _lUD, _sta],
  [0, 0, 0, 0, 4, 4, () => DatasetStatus]
);
export var DescribeComputationModelRequest = struct(
  n0,
  _DCMRes,
  0,
  [_cMIo, _cMV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cMV,
      },
    ],
  ]
);
export var DescribeComputationModelResponse = struct(
  n0,
  _DCMResc,
  0,
  [_cMIo, _cMA, _cMN, _cMD, _cMC, _cMDB, _cMCD, _cMLUD, _cMS, _cMV, _aDc],
  [
    0,
    0,
    0,
    0,
    () => ComputationModelConfiguration,
    () => ComputationModelDataBinding,
    4,
    4,
    () => ComputationModelStatus,
    0,
    () => ActionDefinitions,
  ]
);
export var DescribeDatasetRequest = struct(n0, _DDRescr, 0, [_dIa], [[0, 1]]);
export var DescribeDatasetResponse = struct(
  n0,
  _DDRescri,
  0,
  [_dIa, _dAa, _dNa, _dDat, _dS, _dSa, _dCDa, _dLUDa, _dVa],
  [0, 0, 0, 0, () => DatasetSource, () => DatasetStatus, 4, 4, 0]
);
export var KendraSourceDetail = struct(n0, _KSD, 0, [_kBA, _rAo], [0, 0]);
export var ListComputationModelsRequest = struct(
  n0,
  _LCMR,
  0,
  [_cMT, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _cMT,
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
export var ListComputationModelsResponse = struct(n0, _LCMRi, 0, [_cMSo, _nT], [() => ComputationModelSummaries, 0]);
export var ListDatasetsRequest = struct(
  n0,
  _LDRis,
  0,
  [_sTo, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _sTo,
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
export var ListDatasetsResponse = struct(n0, _LDRist, 0, [_dSat, _nT], [() => DatasetSummaries, 0]);
export var SourceDetail = struct(n0, _SD, 0, [_ke], [() => KendraSourceDetail]);
export var UpdateComputationModelRequest = struct(
  n0,
  _UCMR,
  0,
  [_cMIo, _cMN, _cMD, _cMC, _cMDB, _cT],
  [[0, 1], 0, 0, () => ComputationModelConfiguration, () => ComputationModelDataBinding, [0, 4]]
);
export var UpdateComputationModelResponse = struct(n0, _UCMRp, 0, [_cMS], [() => ComputationModelStatus]);
export var UpdateDatasetRequest = struct(
  n0,
  _UDRpd,
  0,
  [_dIa, _dNa, _dDat, _dS, _cT],
  [[0, 1], 0, 0, () => DatasetSource, [0, 4]]
);
export var UpdateDatasetResponse = struct(n0, _UDRpda, 0, [_dIa, _dAa, _dSa], [0, 0, () => DatasetStatus]);
export var BindingValueList = list(n0, _BVL, 0, () => ComputationModelDataBindingValue);
export var ComputationModelSummaries = list(n0, _CMSom, 0, () => ComputationModelSummary);
export var DatasetSummaries = list(n0, _DSatas, 0, () => DatasetSummary);
export var ComputationModelDataBinding = map(n0, _CMDB, 0, 0, () => ComputationModelDataBindingValue);
export var DescribeComputationModel = op(
  n0,
  _DCMe,
  {
    [_ht]: ["GET", "/computation-models/{computationModelId}", 200],
    [_end]: ["api."],
  },
  () => DescribeComputationModelRequest,
  () => DescribeComputationModelResponse
);
export var DescribeDataset = op(
  n0,
  _DDesc,
  {
    [_ht]: ["GET", "/datasets/{datasetId}", 200],
    [_end]: ["api."],
  },
  () => DescribeDatasetRequest,
  () => DescribeDatasetResponse
);
export var ListComputationModels = op(
  n0,
  _LCM,
  {
    [_ht]: ["GET", "/computation-models", 200],
    [_end]: ["api."],
  },
  () => ListComputationModelsRequest,
  () => ListComputationModelsResponse
);
export var ListDatasets = op(
  n0,
  _LDi,
  {
    [_ht]: ["GET", "/datasets", 200],
    [_end]: ["api."],
  },
  () => ListDatasetsRequest,
  () => ListDatasetsResponse
);
export var UpdateComputationModel = op(
  n0,
  _UCM,
  {
    [_ht]: ["POST", "/computation-models/{computationModelId}", 202],
    [_end]: ["api."],
  },
  () => UpdateComputationModelRequest,
  () => UpdateComputationModelResponse
);
export var UpdateDataset = op(
  n0,
  _UDp,
  {
    [_ht]: ["PUT", "/datasets/{datasetId}", 202],
    [_end]: ["api."],
  },
  () => UpdateDatasetRequest,
  () => UpdateDatasetResponse
);
