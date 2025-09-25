// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _bMA,
  _bMAE,
  _bMN,
  _cA,
  _cAr,
  _cB,
  _cC,
  _CCM,
  _CCMR,
  _CCMRr,
  _cD,
  _cET,
  _cMA,
  _CMCJ,
  _CMCJR,
  _CMCJRr,
  _cMDA,
  _cMDN,
  _CMDS,
  _CMDSL,
  _cMN,
  _CMS,
  _CMSL,
  _cRT,
  _cTA,
  _cTB,
  _cTr,
  _cTu,
  _dMA,
  _dMU,
  _eT,
  _fMA,
  _fMa,
  _fMAE,
  _GCM,
  _GCMR,
  _GCMRe,
  _GMCJ,
  _GMCJR,
  _GMCJRe,
  _GPMT,
  _GPMTR,
  _GPMTRe,
  _hP,
  _hQ,
  _ht,
  _iO,
  _jA,
  _jN,
  _LCM,
  _LCMD,
  _LCMDR,
  _LCMDRi,
  _LCMR,
  _LCMRi,
  _LMCJ,
  _LMCJi,
  _LMCJR,
  _LMCJRi,
  _LMCJRis,
  _LMCJRist,
  _lMT,
  _LPMT,
  _LPMTR,
  _LPMTRi,
  _lUA,
  _mA,
  _mAE,
  _MCJS,
  _mCJS,
  _MCJSo,
  _mCJSo,
  _MCJSod,
  _MCJSode,
  _mDSo,
  _mI,
  _mKKA,
  _mKKI,
  _mN,
  _mR,
  _mSC,
  _mSo,
  _mSod,
  _mTo,
  _mU,
  _nC,
  _nT,
  _oAI,
  _oDC,
  _oMNC,
  _pMA,
  _pMI,
  _pMN,
  _PMS,
  _pMS,
  _PMSr,
  _rA,
  _s,
  _sAE,
  _sAI,
  _sB,
  _sD,
  _sEt,
  _sMA,
  _sMAE,
  _sMN,
  _sO,
  _tDC,
  _tM,
  _tMA,
  _tMKKA,
  _tMN,
  _tMNC,
  _tMT,
  _vDC,
  _vM,
  n0,
  TagList,
} from "./schemas_0";
import {
  CustomizationConfig,
  OutputDataConfig,
  StatusDetails,
  TrainingDataConfig,
  TrainingMetrics,
  ValidationDataConfig,
  ValidationMetrics,
} from "./schemas_19_Model";
import { ModelDataSource } from "./schemas_27_Model";

/* eslint no-var: 0 */

export var CreateCustomModelRequest = struct(
  n0,
  _CCMR,
  0,
  [_mN, _mSC, _mKKA, _rA, _mTo, _cRT],
  [0, () => ModelDataSource, 0, 0, () => TagList, [0, 4]]
);
export var CreateCustomModelResponse = struct(n0, _CCMRr, 0, [_mA], [0]);
export var CreateModelCopyJobRequest = struct(
  n0,
  _CMCJR,
  0,
  [_sMA, _tMN, _mKKI, _tMT, _cRT],
  [0, 0, 0, () => TagList, [0, 4]]
);
export var CreateModelCopyJobResponse = struct(n0, _CMCJRr, 0, [_jA], [0]);
export var CustomModelDeploymentSummary = struct(
  n0,
  _CMDS,
  0,
  [_cMDA, _cMDN, _mA, _cA, _s, _lUA, _fMa],
  [0, 0, 0, 5, 0, 5, 0]
);
export var CustomModelSummary = struct(
  n0,
  _CMS,
  0,
  [_mA, _mN, _cTr, _bMA, _bMN, _cTu, _oAI, _mSo],
  [0, 0, 5, 0, 0, 0, 0, 0]
);
export var GetCustomModelRequest = struct(n0, _GCMR, 0, [_mI], [[0, 1]]);
export var GetCustomModelResponse = struct(
  n0,
  _GCMRe,
  0,
  [_mA, _mN, _jN, _jA, _bMA, _cTu, _mKKA, _hP, _tDC, _vDC, _oDC, _tM, _vM, _cTr, _cC, _mSo, _fMa],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    128 | 0,
    [() => TrainingDataConfig, 0],
    () => ValidationDataConfig,
    () => OutputDataConfig,
    () => TrainingMetrics,
    () => ValidationMetrics,
    5,
    () => CustomizationConfig,
    0,
    0,
  ]
);
export var GetModelCopyJobRequest = struct(n0, _GMCJR, 0, [_jA], [[0, 1]]);
export var GetModelCopyJobResponse = struct(
  n0,
  _GMCJRe,
  0,
  [_jA, _s, _cTr, _tMA, _tMN, _sAI, _sMA, _tMKKA, _tMT, _fMa, _sMN],
  [0, 0, 5, 0, 0, 0, 0, 0, () => TagList, 0, 0]
);
export var GetProvisionedModelThroughputRequest = struct(n0, _GPMTR, 0, [_pMI], [[0, 1]]);
export var GetProvisionedModelThroughputResponse = struct(
  n0,
  _GPMTRe,
  0,
  [_mU, _dMU, _pMN, _pMA, _mA, _dMA, _fMA, _s, _cTr, _lMT, _fMa, _cD, _cET],
  [1, 1, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 5]
);
export var ListCustomModelDeploymentsRequest = struct(
  n0,
  _LCMDR,
  0,
  [_cB, _cAr, _nC, _mR, _nT, _sB, _sO, _sEt, _mAE],
  [
    [
      5,
      {
        [_hQ]: _cB,
      },
    ],
    [
      5,
      {
        [_hQ]: _cAr,
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
    [
      0,
      {
        [_hQ]: _sEt,
      },
    ],
    [
      0,
      {
        [_hQ]: _mAE,
      },
    ],
  ]
);
export var ListCustomModelDeploymentsResponse = struct(
  n0,
  _LCMDRi,
  0,
  [_nT, _mDSo],
  [0, () => CustomModelDeploymentSummaryList]
);
export var ListCustomModelsRequest = struct(
  n0,
  _LCMR,
  0,
  [_cTB, _cTA, _nC, _bMAE, _fMAE, _mR, _nT, _sB, _sO, _iO, _mSo],
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
      0,
      {
        [_hQ]: _bMAE,
      },
    ],
    [
      0,
      {
        [_hQ]: _fMAE,
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
    [
      2,
      {
        [_hQ]: _iO,
      },
    ],
    [
      0,
      {
        [_hQ]: _mSo,
      },
    ],
  ]
);
export var ListCustomModelsResponse = struct(n0, _LCMRi, 0, [_nT, _mSod], [0, () => CustomModelSummaryList]);
export var ListModelCopyJobsRequest = struct(
  n0,
  _LMCJR,
  0,
  [_cTA, _cTB, _sEt, _sAE, _sMAE, _tMNC, _mR, _nT, _sB, _sO],
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
        [_hQ]: _sAE,
      },
    ],
    [
      0,
      {
        [_hQ]: _sMAE,
      },
    ],
    [
      0,
      {
        [_hQ]: _oMNC,
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
export var ListModelCopyJobsResponse = struct(n0, _LMCJRi, 0, [_nT, _mCJS], [0, () => ModelCopyJobSummaries]);
export var ListModelCustomizationJobsRequest = struct(
  n0,
  _LMCJRis,
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
export var ListModelCustomizationJobsResponse = struct(
  n0,
  _LMCJRist,
  0,
  [_nT, _mCJSo],
  [0, () => ModelCustomizationJobSummaries]
);
export var ListProvisionedModelThroughputsRequest = struct(
  n0,
  _LPMTR,
  0,
  [_cTA, _cTB, _sEt, _mAE, _nC, _mR, _nT, _sB, _sO],
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
        [_hQ]: _mAE,
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
export var ListProvisionedModelThroughputsResponse = struct(
  n0,
  _LPMTRi,
  0,
  [_nT, _pMS],
  [0, () => ProvisionedModelSummaries]
);
export var ModelCopyJobSummary = struct(
  n0,
  _MCJS,
  0,
  [_jA, _s, _cTr, _tMA, _tMN, _sAI, _sMA, _tMKKA, _tMT, _fMa, _sMN],
  [0, 0, 5, 0, 0, 0, 0, 0, () => TagList, 0, 0]
);
export var ModelCustomizationJobSummary = struct(
  n0,
  _MCJSo,
  0,
  [_jA, _bMA, _jN, _s, _sD, _lMT, _cTr, _eT, _cMA, _cMN, _cTu],
  [0, 0, 0, 0, () => StatusDetails, 5, 5, 5, 0, 0, 0]
);
export var ProvisionedModelSummary = struct(
  n0,
  _PMS,
  0,
  [_pMN, _pMA, _mA, _dMA, _fMA, _mU, _dMU, _s, _cD, _cET, _cTr, _lMT],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 5, 5]
);
export var CustomModelDeploymentSummaryList = list(n0, _CMDSL, 0, () => CustomModelDeploymentSummary);
export var CustomModelSummaryList = list(n0, _CMSL, 0, () => CustomModelSummary);
export var ModelCopyJobSummaries = list(n0, _MCJSod, 0, () => ModelCopyJobSummary);
export var ModelCustomizationJobSummaries = list(n0, _MCJSode, 0, () => ModelCustomizationJobSummary);
export var ProvisionedModelSummaries = list(n0, _PMSr, 0, () => ProvisionedModelSummary);
export var CreateCustomModel = op(
  n0,
  _CCM,
  {
    [_ht]: ["POST", "/custom-models/create-custom-model", 202],
  },
  () => CreateCustomModelRequest,
  () => CreateCustomModelResponse
);
export var CreateModelCopyJob = op(
  n0,
  _CMCJ,
  {
    [_ht]: ["POST", "/model-copy-jobs", 201],
  },
  () => CreateModelCopyJobRequest,
  () => CreateModelCopyJobResponse
);
export var GetCustomModel = op(
  n0,
  _GCM,
  {
    [_ht]: ["GET", "/custom-models/{modelIdentifier}", 200],
  },
  () => GetCustomModelRequest,
  () => GetCustomModelResponse
);
export var GetModelCopyJob = op(
  n0,
  _GMCJ,
  {
    [_ht]: ["GET", "/model-copy-jobs/{jobArn}", 200],
  },
  () => GetModelCopyJobRequest,
  () => GetModelCopyJobResponse
);
export var GetProvisionedModelThroughput = op(
  n0,
  _GPMT,
  {
    [_ht]: ["GET", "/provisioned-model-throughput/{provisionedModelId}", 200],
  },
  () => GetProvisionedModelThroughputRequest,
  () => GetProvisionedModelThroughputResponse
);
export var ListCustomModelDeployments = op(
  n0,
  _LCMD,
  {
    [_ht]: ["GET", "/model-customization/custom-model-deployments", 200],
  },
  () => ListCustomModelDeploymentsRequest,
  () => ListCustomModelDeploymentsResponse
);
export var ListCustomModels = op(
  n0,
  _LCM,
  {
    [_ht]: ["GET", "/custom-models", 200],
  },
  () => ListCustomModelsRequest,
  () => ListCustomModelsResponse
);
export var ListModelCopyJobs = op(
  n0,
  _LMCJ,
  {
    [_ht]: ["GET", "/model-copy-jobs", 200],
  },
  () => ListModelCopyJobsRequest,
  () => ListModelCopyJobsResponse
);
export var ListModelCustomizationJobs = op(
  n0,
  _LMCJi,
  {
    [_ht]: ["GET", "/model-customization-jobs", 200],
  },
  () => ListModelCustomizationJobsRequest,
  () => ListModelCustomizationJobsResponse
);
export var ListProvisionedModelThroughputs = op(
  n0,
  _LPMT,
  {
    [_ht]: ["GET", "/provisioned-model-throughputs", 200],
  },
  () => ListProvisionedModelThroughputsRequest,
  () => ListProvisionedModelThroughputsResponse
);
