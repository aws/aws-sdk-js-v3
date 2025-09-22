// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aM,
  _BIJ,
  _bIJ,
  _bIJA,
  _BIJC,
  _bIJC,
  _BIJI,
  _bIJM,
  _BIJO,
  _BSJ,
  _bSJ,
  _bSJA,
  _BSJI,
  _BSJO,
  _CBIJ,
  _CBIJR,
  _CBIJRr,
  _CBSJ,
  _CBSJR,
  _CBSJRr,
  _CDEJ,
  _CDEJR,
  _CDEJRr,
  _CDG,
  _CDGR,
  _CDGRr,
  _cDT,
  _CMA,
  _CMAR,
  _CMARr,
  _d,
  _dA,
  _DBIJ,
  _DBIJR,
  _DBIJRe,
  _DBSJ,
  _DBSJR,
  _DBSJRe,
  _DDEJ,
  _DDEJR,
  _DDEJRe,
  _DDGe,
  _DDGRe,
  _DDGRes,
  _DEJ,
  _dEJ,
  _dEJA,
  _DEJO,
  _DG,
  _dG,
  _dGA,
  _DMAe,
  _DMARe,
  _DMARes,
  _fA,
  _FFTG,
  _fFTG,
  _fR,
  _iEC,
  _iM,
  _iN,
  _jI,
  _jN,
  _jO,
  _kKA,
  _lUDT,
  _m,
  _mA,
  _mAA,
  _MAe,
  _MAO,
  _mOC,
  _n,
  _nR,
  _p,
  _rA,
  _rM,
  _s,
  _SDC,
  _sDD,
  _sDS,
  _sVA,
  _t,
  _TGC,
  _tGC,
  _UMA,
  _UMAR,
  _UMARp,
  n0,
  Tags,
} from "./schemas_0";
import { MetricAttributes } from "./schemas_8_Solution";

/* eslint no-var: 0 */

export var BatchInferenceJob = struct(
  n0,
  _BIJ,
  0,
  [_jN, _bIJA, _fA, _fR, _sVA, _nR, _jI, _jO, _bIJC, _rA, _bIJM, _tGC, _s, _cDT, _lUDT],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    () => BatchInferenceJobInput,
    () => BatchInferenceJobOutput,
    () => BatchInferenceJobConfig,
    0,
    0,
    () => ThemeGenerationConfig,
    0,
    4,
    4,
  ]
);
export var BatchInferenceJobConfig = struct(n0, _BIJC, 0, [_iEC], [128 | 0]);
export var BatchInferenceJobInput = struct(n0, _BIJI, 0, [_sDS], [() => S3DataConfig]);
export var BatchInferenceJobOutput = struct(n0, _BIJO, 0, [_sDD], [() => S3DataConfig]);
export var BatchSegmentJob = struct(
  n0,
  _BSJ,
  0,
  [_jN, _bSJA, _fA, _fR, _sVA, _nR, _jI, _jO, _rA, _s, _cDT, _lUDT],
  [0, 0, 0, 0, 0, 1, () => BatchSegmentJobInput, () => BatchSegmentJobOutput, 0, 0, 4, 4]
);
export var BatchSegmentJobInput = struct(n0, _BSJI, 0, [_sDS], [() => S3DataConfig]);
export var BatchSegmentJobOutput = struct(n0, _BSJO, 0, [_sDD], [() => S3DataConfig]);
export var CreateBatchInferenceJobRequest = struct(
  n0,
  _CBIJR,
  0,
  [_jN, _sVA, _fA, _nR, _jI, _jO, _rA, _bIJC, _t, _bIJM, _tGC],
  [
    0,
    0,
    0,
    1,
    () => BatchInferenceJobInput,
    () => BatchInferenceJobOutput,
    0,
    () => BatchInferenceJobConfig,
    [() => Tags, 0],
    0,
    () => ThemeGenerationConfig,
  ]
);
export var CreateBatchInferenceJobResponse = struct(n0, _CBIJRr, 0, [_bIJA], [0]);
export var CreateBatchSegmentJobRequest = struct(
  n0,
  _CBSJR,
  0,
  [_jN, _sVA, _fA, _nR, _jI, _jO, _rA, _t],
  [0, 0, 0, 1, () => BatchSegmentJobInput, () => BatchSegmentJobOutput, 0, [() => Tags, 0]]
);
export var CreateBatchSegmentJobResponse = struct(n0, _CBSJRr, 0, [_bSJA], [0]);
export var CreateDatasetExportJobRequest = struct(
  n0,
  _CDEJR,
  0,
  [_jN, _dA, _iM, _rA, _jO, _t],
  [0, 0, 0, 0, () => DatasetExportJobOutput, [() => Tags, 0]]
);
export var CreateDatasetExportJobResponse = struct(n0, _CDEJRr, 0, [_dEJA], [0]);
export var CreateDatasetGroupRequest = struct(n0, _CDGR, 0, [_n, _rA, _kKA, _d, _t], [0, 0, 0, 0, [() => Tags, 0]]);
export var CreateDatasetGroupResponse = struct(n0, _CDGRr, 0, [_dGA, _d], [0, 0]);
export var CreateMetricAttributionRequest = struct(
  n0,
  _CMAR,
  0,
  [_n, _dGA, _m, _mOC],
  [0, 0, () => MetricAttributes, () => MetricAttributionOutput]
);
export var CreateMetricAttributionResponse = struct(n0, _CMARr, 0, [_mAA], [0]);
export var DatasetExportJob = struct(
  n0,
  _DEJ,
  0,
  [_jN, _dEJA, _dA, _iM, _rA, _s, _jO, _cDT, _lUDT, _fR],
  [0, 0, 0, 0, 0, 0, () => DatasetExportJobOutput, 4, 4, 0]
);
export var DatasetExportJobOutput = struct(n0, _DEJO, 0, [_sDD], [() => S3DataConfig]);
export var DatasetGroup = struct(
  n0,
  _DG,
  0,
  [_n, _dGA, _s, _rA, _kKA, _cDT, _lUDT, _fR, _d],
  [0, 0, 0, 0, 0, 4, 4, 0, 0]
);
export var DescribeBatchInferenceJobRequest = struct(n0, _DBIJR, 0, [_bIJA], [0]);
export var DescribeBatchInferenceJobResponse = struct(n0, _DBIJRe, 0, [_bIJ], [() => BatchInferenceJob]);
export var DescribeBatchSegmentJobRequest = struct(n0, _DBSJR, 0, [_bSJA], [0]);
export var DescribeBatchSegmentJobResponse = struct(n0, _DBSJRe, 0, [_bSJ], [() => BatchSegmentJob]);
export var DescribeDatasetExportJobRequest = struct(n0, _DDEJR, 0, [_dEJA], [0]);
export var DescribeDatasetExportJobResponse = struct(n0, _DDEJRe, 0, [_dEJ], [() => DatasetExportJob]);
export var DescribeDatasetGroupRequest = struct(n0, _DDGRe, 0, [_dGA], [0]);
export var DescribeDatasetGroupResponse = struct(n0, _DDGRes, 0, [_dG], [() => DatasetGroup]);
export var DescribeMetricAttributionRequest = struct(n0, _DMARe, 0, [_mAA], [0]);
export var DescribeMetricAttributionResponse = struct(n0, _DMARes, 0, [_mA], [() => MetricAttribution]);
export var FieldsForThemeGeneration = struct(n0, _FFTG, 0, [_iN], [0]);
export var MetricAttribution = struct(
  n0,
  _MAe,
  0,
  [_n, _mAA, _dGA, _mOC, _s, _cDT, _lUDT, _fR],
  [0, 0, 0, () => MetricAttributionOutput, 0, 4, 4, 0]
);
export var MetricAttributionOutput = struct(n0, _MAO, 0, [_sDD, _rA], [() => S3DataConfig, 0]);
export var S3DataConfig = struct(n0, _SDC, 0, [_p, _kKA], [0, 0]);
export var ThemeGenerationConfig = struct(n0, _TGC, 0, [_fFTG], [() => FieldsForThemeGeneration]);
export var UpdateMetricAttributionRequest = struct(
  n0,
  _UMAR,
  0,
  [_aM, _rM, _mOC, _mAA],
  [() => MetricAttributes, 64 | 0, () => MetricAttributionOutput, 0]
);
export var UpdateMetricAttributionResponse = struct(n0, _UMARp, 0, [_mAA], [0]);
export var MetricAttributesNamesList = 64 | 0;

export var CreateBatchInferenceJob = op(
  n0,
  _CBIJ,
  0,
  () => CreateBatchInferenceJobRequest,
  () => CreateBatchInferenceJobResponse
);
export var CreateBatchSegmentJob = op(
  n0,
  _CBSJ,
  0,
  () => CreateBatchSegmentJobRequest,
  () => CreateBatchSegmentJobResponse
);
export var CreateDatasetExportJob = op(
  n0,
  _CDEJ,
  2,
  () => CreateDatasetExportJobRequest,
  () => CreateDatasetExportJobResponse
);
export var CreateDatasetGroup = op(
  n0,
  _CDG,
  0,
  () => CreateDatasetGroupRequest,
  () => CreateDatasetGroupResponse
);
export var CreateMetricAttribution = op(
  n0,
  _CMA,
  0,
  () => CreateMetricAttributionRequest,
  () => CreateMetricAttributionResponse
);
export var DescribeBatchInferenceJob = op(
  n0,
  _DBIJ,
  2,
  () => DescribeBatchInferenceJobRequest,
  () => DescribeBatchInferenceJobResponse
);
export var DescribeBatchSegmentJob = op(
  n0,
  _DBSJ,
  2,
  () => DescribeBatchSegmentJobRequest,
  () => DescribeBatchSegmentJobResponse
);
export var DescribeDatasetExportJob = op(
  n0,
  _DDEJ,
  2,
  () => DescribeDatasetExportJobRequest,
  () => DescribeDatasetExportJobResponse
);
export var DescribeDatasetGroup = op(
  n0,
  _DDGe,
  2,
  () => DescribeDatasetGroupRequest,
  () => DescribeDatasetGroupResponse
);
export var DescribeMetricAttribution = op(
  n0,
  _DMAe,
  0,
  () => DescribeMetricAttributionRequest,
  () => DescribeMetricAttributionResponse
);
export var UpdateMetricAttribution = op(
  n0,
  _UMA,
  0,
  () => UpdateMetricAttributionRequest,
  () => UpdateMetricAttributionResponse
);
