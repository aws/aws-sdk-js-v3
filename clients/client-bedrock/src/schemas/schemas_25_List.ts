// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aT,
  _aTE,
  _bKBI,
  _bMIe,
  _cMEMI,
  _cTA,
  _cTB,
  _cTr,
  _EICS,
  _EMCS,
  _eMI,
  _ERCS,
  _ES,
  _ESv,
  _eT,
  _eTT,
  _hQ,
  _ht,
  _iCS,
  _iMA,
  _iMN,
  _IMS,
  _IMSL,
  _iS,
  _jA,
  _jN,
  _jSo,
  _jTo,
  _LEJ,
  _LEJR,
  _LEJRi,
  _LIM,
  _LIMR,
  _LIMRi,
  _LMIJ,
  _LMIJR,
  _LMIJRi,
  _lMT,
  _mA,
  _mAo,
  _mCS,
  _MIJS,
  _mIJS,
  _MIJSod,
  _mIod,
  _mN,
  _mR,
  _mSod,
  _nC,
  _nT,
  _pISI,
  _pRSI,
  _rCS,
  _rIa,
  _s,
  _sB,
  _sEt,
  _sO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EvaluationInferenceConfigSummary = struct(
  n0,
  _EICS,
  0,
  [_mCS, _rCS],
  [() => EvaluationModelConfigSummary, () => EvaluationRagConfigSummary]
);
export var EvaluationModelConfigSummary = struct(n0, _EMCS, 0, [_bMIe, _pISI], [64 | 0, 64 | 0]);
export var EvaluationRagConfigSummary = struct(n0, _ERCS, 0, [_bKBI, _pRSI], [64 | 0, 64 | 0]);
export var EvaluationSummary = struct(
  n0,
  _ES,
  0,
  [_jA, _jN, _s, _cTr, _jTo, _eTT, _mIod, _rIa, _eMI, _cMEMI, _iCS, _aT],
  [0, 0, 0, 5, 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, () => EvaluationInferenceConfigSummary, 0]
);
export var ImportedModelSummary = struct(n0, _IMS, 0, [_mA, _mN, _cTr, _iS, _mAo], [0, 0, 5, 2, 0]);
export var ListEvaluationJobsRequest = struct(
  n0,
  _LEJR,
  0,
  [_cTA, _cTB, _sEt, _aTE, _nC, _mR, _nT, _sB, _sO],
  [
    [
      5,
      {
        [_hQ]: _cTA,
      },
    ],
    [
      5,
      {
        [_hQ]: _cTB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sEt,
      },
    ],
    [
      0,
      {
        [_hQ]: _aTE,
      },
    ],
    [
      0,
      {
        [_hQ]: _nC,
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
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
      },
    ],
  ]
);
export var ListEvaluationJobsResponse = struct(n0, _LEJRi, 0, [_nT, _jSo], [0, () => EvaluationSummaries]);
export var ListImportedModelsRequest = struct(
  n0,
  _LIMR,
  0,
  [_cTB, _cTA, _nC, _mR, _nT, _sB, _sO],
  [
    [
      5,
      {
        [_hQ]: _cTB,
      },
    ],
    [
      5,
      {
        [_hQ]: _cTA,
      },
    ],
    [
      0,
      {
        [_hQ]: _nC,
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
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
      },
    ],
  ]
);
export var ListImportedModelsResponse = struct(n0, _LIMRi, 0, [_nT, _mSod], [0, () => ImportedModelSummaryList]);
export var ListModelImportJobsRequest = struct(
  n0,
  _LMIJR,
  0,
  [_cTA, _cTB, _sEt, _nC, _mR, _nT, _sB, _sO],
  [
    [
      5,
      {
        [_hQ]: _cTA,
      },
    ],
    [
      5,
      {
        [_hQ]: _cTB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sEt,
      },
    ],
    [
      0,
      {
        [_hQ]: _nC,
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
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
      },
    ],
  ]
);
export var ListModelImportJobsResponse = struct(n0, _LMIJRi, 0, [_nT, _mIJS], [0, () => ModelImportJobSummaries]);
export var ModelImportJobSummary = struct(
  n0,
  _MIJS,
  0,
  [_jA, _jN, _s, _lMT, _cTr, _eT, _iMA, _iMN],
  [0, 0, 0, 5, 5, 5, 0, 0]
);
export var EvaluationBedrockKnowledgeBaseIdentifiers = 64 | 0;

export var EvaluationBedrockModelIdentifiers = 64 | 0;

export var EvaluationPrecomputedInferenceSourceIdentifiers = 64 | 0;

export var EvaluationPrecomputedRagSourceIdentifiers = 64 | 0;

export var EvaluationSummaries = list(n0, _ESv, 0, () => EvaluationSummary);
export var EvaluationTaskTypes = 64 | 0;

export var EvaluatorModelIdentifiers = 64 | 0;

export var ImportedModelSummaryList = list(n0, _IMSL, 0, () => ImportedModelSummary);
export var ModelImportJobSummaries = list(n0, _MIJSod, 0, () => ModelImportJobSummary);
export var ListEvaluationJobs = op(
  n0,
  _LEJ,
  {
    [_ht]: ["GET", "/evaluation-jobs", 200],
  },
  () => ListEvaluationJobsRequest,
  () => ListEvaluationJobsResponse
);
export var ListImportedModels = op(
  n0,
  _LIM,
  {
    [_ht]: ["GET", "/imported-models", 200],
  },
  () => ListImportedModelsRequest,
  () => ListImportedModelsResponse
);
export var ListModelImportJobs = op(
  n0,
  _LMIJ,
  {
    [_ht]: ["GET", "/model-import-jobs", 200],
  },
  () => ListModelImportJobsRequest,
  () => ListModelImportJobsResponse
);
