// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aEc,
  _bMA,
  _bMI,
  _cA,
  _cC,
  _CMCJr,
  _CMCJRre,
  _CMCJRrea,
  _CMIJ,
  _CMIJR,
  _CMIJr,
  _CMIJRr,
  _CMIJRre,
  _CMIJRrea,
  _cMKKI,
  _CMME,
  _CMMER,
  _CMMERr,
  _cMN,
  _cMT,
  _cRT,
  _cTr,
  _cTu,
  _eA,
  _EC,
  _eCn,
  _eI,
  _eN,
  _eRx,
  _eS,
  _eSM,
  _eT,
  _fMa,
  _GMCJe,
  _GMCJRet,
  _GMCJReto,
  _GMIJ,
  _GMIJe,
  _GMIJR,
  _GMIJRe,
  _GMIJRet,
  _GMIJReto,
  _GMME,
  _GMMER,
  _GMMERe,
  _hP,
  _hQ,
  _ht,
  _iDC,
  _iIC,
  _iJS,
  _iMA,
  _iMKKA,
  _iMKKI,
  _iMN,
  _iMT,
  _iT,
  _jA,
  _jET,
  _jI,
  _jN,
  _jT,
  _kEK,
  _LMIJi,
  _LMIJRis,
  _LMIJRist,
  _lMT,
  _M,
  _m,
  _mDS,
  _MIJIDC,
  _MIJODC,
  _MIJSIDC,
  _MIJSo,
  _MIJSODC,
  _MIJSode,
  _mIo,
  _MME,
  _mME,
  _mR,
  _mSI,
  _nC,
  _nT,
  _oDC,
  _oMA,
  _oMKKA,
  _oMN,
  _rA,
  _RMME,
  _RMMER,
  _RMMERe,
  _s,
  _sB,
  _sBO,
  _sD,
  _sEKI,
  _sEt,
  _sGI,
  _sI,
  _sIDC,
  _sIF,
  _sM,
  _sMa,
  _SME,
  _sO,
  _sODC,
  _sTA,
  _sTB,
  _sTu,
  _sU,
  _ta,
  _tDC,
  _tDIH,
  _tM,
  _uA,
  _UMME,
  _UMMER,
  _UMMERp,
  _VC,
  _vCp,
  _vDC,
  _vM,
  _vp,
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

export var Message = sim(n0, _M, 0, 8);
export var CreateMarketplaceModelEndpointRequest = struct(
  n0,
  _CMMER,
  0,
  [_mSI, _eCn, _aEc, _eN, _cRT, _ta],
  [0, () => EndpointConfig, 2, 0, [0, 4], () => TagList]
);
export var CreateMarketplaceModelEndpointResponse = struct(n0, _CMMERr, 0, [_mME], [() => MarketplaceModelEndpoint]);
export var CreateModelCustomizationJobRequest = struct(
  n0,
  _CMCJRre,
  0,
  [_jN, _cMN, _rA, _cRT, _bMI, _cTu, _cMKKI, _jT, _cMT, _tDC, _vDC, _oDC, _hP, _vCp, _cC],
  [
    0,
    0,
    0,
    [0, 4],
    0,
    0,
    0,
    () => TagList,
    () => TagList,
    [() => TrainingDataConfig, 0],
    () => ValidationDataConfig,
    () => OutputDataConfig,
    128 | 0,
    () => VpcConfig,
    () => CustomizationConfig,
  ]
);
export var CreateModelCustomizationJobResponse = struct(n0, _CMCJRrea, 0, [_jA], [0]);
export var CreateModelImportJobRequest = struct(
  n0,
  _CMIJR,
  0,
  [_jN, _iMN, _rA, _mDS, _jT, _iMT, _cRT, _vCp, _iMKKI],
  [0, 0, 0, () => ModelDataSource, () => TagList, () => TagList, 0, () => VpcConfig, 0]
);
export var CreateModelImportJobResponse = struct(n0, _CMIJRr, 0, [_jA], [0]);
export var CreateModelInvocationJobRequest = struct(
  n0,
  _CMIJRre,
  0,
  [_jN, _rA, _cRT, _mIo, _iDC, _oDC, _vCp, _tDIH, _ta],
  [
    0,
    0,
    [0, 4],
    0,
    () => ModelInvocationJobInputDataConfig,
    () => ModelInvocationJobOutputDataConfig,
    () => VpcConfig,
    1,
    () => TagList,
  ]
);
export var CreateModelInvocationJobResponse = struct(n0, _CMIJRrea, 0, [_jA], [0]);
export var GetMarketplaceModelEndpointRequest = struct(n0, _GMMER, 0, [_eA], [[0, 1]]);
export var GetMarketplaceModelEndpointResponse = struct(n0, _GMMERe, 0, [_mME], [() => MarketplaceModelEndpoint]);
export var GetModelCustomizationJobRequest = struct(n0, _GMCJRet, 0, [_jI], [[0, 1]]);
export var GetModelCustomizationJobResponse = struct(
  n0,
  _GMCJReto,
  0,
  [
    _jA,
    _jN,
    _oMN,
    _oMA,
    _cRT,
    _rA,
    _s,
    _sD,
    _fMa,
    _cTr,
    _lMT,
    _eT,
    _bMA,
    _hP,
    _tDC,
    _vDC,
    _oDC,
    _cTu,
    _oMKKA,
    _tM,
    _vM,
    _vCp,
    _cC,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => StatusDetails,
    0,
    5,
    5,
    5,
    0,
    128 | 0,
    [() => TrainingDataConfig, 0],
    () => ValidationDataConfig,
    () => OutputDataConfig,
    0,
    0,
    () => TrainingMetrics,
    () => ValidationMetrics,
    () => VpcConfig,
    () => CustomizationConfig,
  ]
);
export var GetModelImportJobRequest = struct(n0, _GMIJR, 0, [_jI], [[0, 1]]);
export var GetModelImportJobResponse = struct(
  n0,
  _GMIJRe,
  0,
  [_jA, _jN, _iMN, _iMA, _rA, _mDS, _s, _fMa, _cTr, _lMT, _eT, _vCp, _iMKKA],
  [0, 0, 0, 0, 0, () => ModelDataSource, 0, 0, 5, 5, 5, () => VpcConfig, 0]
);
export var GetModelInvocationJobRequest = struct(n0, _GMIJRet, 0, [_jI], [[0, 1]]);
export var GetModelInvocationJobResponse = struct(
  n0,
  _GMIJReto,
  0,
  [_jA, _jN, _mIo, _cRT, _rA, _s, _m, _sTu, _lMT, _eT, _iDC, _oDC, _vCp, _tDIH, _jET],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    [() => Message, 0],
    5,
    5,
    5,
    () => ModelInvocationJobInputDataConfig,
    () => ModelInvocationJobOutputDataConfig,
    () => VpcConfig,
    1,
    5,
  ]
);
export var ListModelInvocationJobsRequest = struct(
  n0,
  _LMIJRis,
  0,
  [_sTA, _sTB, _sEt, _nC, _mR, _nT, _sB, _sO],
  [
    [
      5,
      {
        [_hQ]: _sTA,
      },
    ],
    [
      5,
      {
        [_hQ]: _sTB,
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
export var ListModelInvocationJobsResponse = struct(
  n0,
  _LMIJRist,
  0,
  [_nT, _iJS],
  [0, [() => ModelInvocationJobSummaries, 0]]
);
export var MarketplaceModelEndpoint = struct(
  n0,
  _MME,
  0,
  [_eA, _mSI, _s, _sM, _cA, _uA, _eCn, _eS, _eSM],
  [0, 0, 0, 0, 5, 5, () => EndpointConfig, 0, 0]
);
export var ModelInvocationJobS3InputDataConfig = struct(n0, _MIJSIDC, 0, [_sIF, _sU, _sBO], [0, 0, 0]);
export var ModelInvocationJobS3OutputDataConfig = struct(n0, _MIJSODC, 0, [_sU, _sEKI, _sBO], [0, 0, 0]);
export var ModelInvocationJobSummary = struct(
  n0,
  _MIJSo,
  0,
  [_jA, _jN, _mIo, _cRT, _rA, _s, _m, _sTu, _lMT, _eT, _iDC, _oDC, _vCp, _tDIH, _jET],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    [() => Message, 0],
    5,
    5,
    5,
    () => ModelInvocationJobInputDataConfig,
    () => ModelInvocationJobOutputDataConfig,
    () => VpcConfig,
    1,
    5,
  ]
);
export var RegisterMarketplaceModelEndpointRequest = struct(n0, _RMMER, 0, [_eI, _mSI], [[0, 1], 0]);
export var RegisterMarketplaceModelEndpointResponse = struct(n0, _RMMERe, 0, [_mME], [() => MarketplaceModelEndpoint]);
export var SageMakerEndpoint = struct(n0, _SME, 0, [_iIC, _iT, _eRx, _kEK, _vp], [1, 0, 0, 0, () => VpcConfig]);
export var UpdateMarketplaceModelEndpointRequest = struct(
  n0,
  _UMMER,
  0,
  [_eA, _eCn, _cRT],
  [[0, 1], () => EndpointConfig, [0, 4]]
);
export var UpdateMarketplaceModelEndpointResponse = struct(n0, _UMMERp, 0, [_mME], [() => MarketplaceModelEndpoint]);
export var VpcConfig = struct(n0, _VC, 0, [_sI, _sGI], [64 | 0, 64 | 0]);
export var ModelInvocationJobSummaries = list(n0, _MIJSode, 0, [() => ModelInvocationJobSummary, 0]);
export var SecurityGroupIds = 64 | 0;

export var SubnetIds = 64 | 0;

export var EndpointConfig = uni(n0, _EC, 0, [_sMa], [() => SageMakerEndpoint]);
export var ModelInvocationJobInputDataConfig = uni(
  n0,
  _MIJIDC,
  0,
  [_sIDC],
  [() => ModelInvocationJobS3InputDataConfig]
);
export var ModelInvocationJobOutputDataConfig = uni(
  n0,
  _MIJODC,
  0,
  [_sODC],
  [() => ModelInvocationJobS3OutputDataConfig]
);
export var CreateMarketplaceModelEndpoint = op(
  n0,
  _CMME,
  {
    [_ht]: ["POST", "/marketplace-model/endpoints", 200],
  },
  () => CreateMarketplaceModelEndpointRequest,
  () => CreateMarketplaceModelEndpointResponse
);
export var CreateModelCustomizationJob = op(
  n0,
  _CMCJr,
  {
    [_ht]: ["POST", "/model-customization-jobs", 201],
  },
  () => CreateModelCustomizationJobRequest,
  () => CreateModelCustomizationJobResponse
);
export var CreateModelImportJob = op(
  n0,
  _CMIJ,
  {
    [_ht]: ["POST", "/model-import-jobs", 201],
  },
  () => CreateModelImportJobRequest,
  () => CreateModelImportJobResponse
);
export var CreateModelInvocationJob = op(
  n0,
  _CMIJr,
  {
    [_ht]: ["POST", "/model-invocation-job", 200],
  },
  () => CreateModelInvocationJobRequest,
  () => CreateModelInvocationJobResponse
);
export var GetMarketplaceModelEndpoint = op(
  n0,
  _GMME,
  {
    [_ht]: ["GET", "/marketplace-model/endpoints/{endpointArn}", 200],
  },
  () => GetMarketplaceModelEndpointRequest,
  () => GetMarketplaceModelEndpointResponse
);
export var GetModelCustomizationJob = op(
  n0,
  _GMCJe,
  {
    [_ht]: ["GET", "/model-customization-jobs/{jobIdentifier}", 200],
  },
  () => GetModelCustomizationJobRequest,
  () => GetModelCustomizationJobResponse
);
export var GetModelImportJob = op(
  n0,
  _GMIJ,
  {
    [_ht]: ["GET", "/model-import-jobs/{jobIdentifier}", 200],
  },
  () => GetModelImportJobRequest,
  () => GetModelImportJobResponse
);
export var GetModelInvocationJob = op(
  n0,
  _GMIJe,
  {
    [_ht]: ["GET", "/model-invocation-job/{jobIdentifier}", 200],
  },
  () => GetModelInvocationJobRequest,
  () => GetModelInvocationJobResponse
);
export var ListModelInvocationJobs = op(
  n0,
  _LMIJi,
  {
    [_ht]: ["GET", "/model-invocation-jobs", 200],
  },
  () => ListModelInvocationJobsRequest,
  () => ListModelInvocationJobsResponse
);
export var RegisterMarketplaceModelEndpoint = op(
  n0,
  _RMME,
  {
    [_ht]: ["POST", "/marketplace-model/endpoints/{endpointIdentifier}/registration", 200],
  },
  () => RegisterMarketplaceModelEndpointRequest,
  () => RegisterMarketplaceModelEndpointResponse
);
export var UpdateMarketplaceModelEndpoint = op(
  n0,
  _UMME,
  {
    [_ht]: ["PATCH", "/marketplace-model/endpoints/{endpointArn}", 200],
  },
  () => UpdateMarketplaceModelEndpointRequest,
  () => UpdateMarketplaceModelEndpointResponse
);
