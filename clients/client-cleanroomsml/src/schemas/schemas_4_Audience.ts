// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AD,
  _aGJ,
  _aGJA,
  _AGJL,
  _AGJS,
  _aMA,
  _aSB,
  _ASC,
  _aSC,
  _aST,
  _cAM,
  _cAMA,
  _CAML,
  _CAMOC,
  _cAMP,
  _CAMS,
  _cI,
  _cRTOCP,
  _cT,
  _d,
  _DCAM,
  _DCAMP,
  _DCAMPR,
  _DCAMR,
  _de,
  _GCAM,
  _GCAMP,
  _GCAMPR,
  _GCAMPRe,
  _GCAMR,
  _GCAMRe,
  _hQ,
  _ht,
  _LAGJ,
  _LAGJR,
  _LAGJRi,
  _LCAM,
  _LCAMR,
  _LCAMRi,
  _mMSS,
  _mR,
  _n,
  _nT,
  _oCu,
  _PCAMP,
  _PCAMPR,
  _PCAMPRu,
  _pEC,
  _pH,
  _pPH,
  _rA,
  _s,
  _sAM,
  _sB,
  _sD,
  _ta,
  _UCAM,
  _UCAMR,
  _UCAMRp,
  _uT,
  n0,
  Unit,
} from "./schemas_0";
import { S3ConfigMap } from "./schemas_10_Audience";

/* eslint no-var: 0 */

export var AudienceDestination = struct(n0, _AD, 0, [_sD], [() => S3ConfigMap]);
export var AudienceGenerationJobSummary = struct(
  n0,
  _AGJS,
  0,
  [_cT, _uT, _aGJA, _n, _d, _s, _cAMA, _cI, _sB],
  [5, 5, 0, 0, 0, 0, 0, 0, 0]
);
export var AudienceSizeConfig = struct(n0, _ASC, 0, [_aST, _aSB], [0, 64 | 1]);
export var ConfiguredAudienceModelOutputConfig = struct(n0, _CAMOC, 0, [_de, _rA], [() => AudienceDestination, 0]);
export var ConfiguredAudienceModelSummary = struct(
  n0,
  _CAMS,
  0,
  [_cT, _uT, _n, _aMA, _oCu, _d, _cAMA, _s],
  [5, 5, 0, 0, () => ConfiguredAudienceModelOutputConfig, 0, 0, 0]
);
export var DeleteConfiguredAudienceModelPolicyRequest = struct(n0, _DCAMPR, 0, [_cAMA], [[0, 1]]);
export var DeleteConfiguredAudienceModelRequest = struct(n0, _DCAMR, 0, [_cAMA], [[0, 1]]);
export var GetConfiguredAudienceModelPolicyRequest = struct(n0, _GCAMPR, 0, [_cAMA], [[0, 1]]);
export var GetConfiguredAudienceModelPolicyResponse = struct(n0, _GCAMPRe, 0, [_cAMA, _cAMP, _pH], [0, 0, 0]);
export var GetConfiguredAudienceModelRequest = struct(n0, _GCAMR, 0, [_cAMA], [[0, 1]]);
export var GetConfiguredAudienceModelResponse = struct(
  n0,
  _GCAMRe,
  0,
  [_cT, _uT, _cAMA, _n, _aMA, _oCu, _d, _s, _sAM, _mMSS, _aSC, _ta, _cRTOCP],
  [5, 5, 0, 0, 0, () => ConfiguredAudienceModelOutputConfig, 0, 0, 64 | 0, 1, () => AudienceSizeConfig, 128 | 0, 0]
);
export var ListAudienceGenerationJobsRequest = struct(
  n0,
  _LAGJR,
  0,
  [_nT, _mR, _cAMA, _cI],
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
    [
      0,
      {
        [_hQ]: _cAMA,
      },
    ],
    [
      0,
      {
        [_hQ]: _cI,
      },
    ],
  ]
);
export var ListAudienceGenerationJobsResponse = struct(
  n0,
  _LAGJRi,
  0,
  [_nT, _aGJ],
  [0, () => AudienceGenerationJobList]
);
export var ListConfiguredAudienceModelsRequest = struct(
  n0,
  _LCAMR,
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
export var ListConfiguredAudienceModelsResponse = struct(
  n0,
  _LCAMRi,
  0,
  [_nT, _cAM],
  [0, () => ConfiguredAudienceModelList]
);
export var PutConfiguredAudienceModelPolicyRequest = struct(
  n0,
  _PCAMPR,
  0,
  [_cAMA, _cAMP, _pPH, _pEC],
  [[0, 1], 0, 0, 0]
);
export var PutConfiguredAudienceModelPolicyResponse = struct(n0, _PCAMPRu, 0, [_cAMP, _pH], [0, 0]);
export var UpdateConfiguredAudienceModelRequest = struct(
  n0,
  _UCAMR,
  0,
  [_cAMA, _oCu, _aMA, _sAM, _mMSS, _aSC, _d],
  [[0, 1], () => ConfiguredAudienceModelOutputConfig, 0, 64 | 0, 1, () => AudienceSizeConfig, 0]
);
export var UpdateConfiguredAudienceModelResponse = struct(n0, _UCAMRp, 0, [_cAMA], [0]);
export var AudienceGenerationJobList = list(n0, _AGJL, 0, () => AudienceGenerationJobSummary);
export var AudienceSizeBins = 64 | 1;

export var ConfiguredAudienceModelList = list(n0, _CAML, 0, () => ConfiguredAudienceModelSummary);
export var MetricsList = 64 | 0;

export var DeleteConfiguredAudienceModel = op(
  n0,
  _DCAM,
  {
    [_ht]: ["DELETE", "/configured-audience-model/{configuredAudienceModelArn}", 200],
  },
  () => DeleteConfiguredAudienceModelRequest,
  () => Unit
);
export var DeleteConfiguredAudienceModelPolicy = op(
  n0,
  _DCAMP,
  {
    [_ht]: ["DELETE", "/configured-audience-model/{configuredAudienceModelArn}/policy", 200],
  },
  () => DeleteConfiguredAudienceModelPolicyRequest,
  () => Unit
);
export var GetConfiguredAudienceModel = op(
  n0,
  _GCAM,
  {
    [_ht]: ["GET", "/configured-audience-model/{configuredAudienceModelArn}", 200],
  },
  () => GetConfiguredAudienceModelRequest,
  () => GetConfiguredAudienceModelResponse
);
export var GetConfiguredAudienceModelPolicy = op(
  n0,
  _GCAMP,
  {
    [_ht]: ["GET", "/configured-audience-model/{configuredAudienceModelArn}/policy", 200],
  },
  () => GetConfiguredAudienceModelPolicyRequest,
  () => GetConfiguredAudienceModelPolicyResponse
);
export var ListAudienceGenerationJobs = op(
  n0,
  _LAGJ,
  {
    [_ht]: ["GET", "/audience-generation-job", 200],
  },
  () => ListAudienceGenerationJobsRequest,
  () => ListAudienceGenerationJobsResponse
);
export var ListConfiguredAudienceModels = op(
  n0,
  _LCAM,
  {
    [_ht]: ["GET", "/configured-audience-model", 200],
  },
  () => ListConfiguredAudienceModelsRequest,
  () => ListConfiguredAudienceModelsResponse
);
export var PutConfiguredAudienceModelPolicy = op(
  n0,
  _PCAMP,
  {
    [_ht]: ["PUT", "/configured-audience-model/{configuredAudienceModelArn}/policy", 200],
  },
  () => PutConfiguredAudienceModelPolicyRequest,
  () => PutConfiguredAudienceModelPolicyResponse
);
export var UpdateConfiguredAudienceModel = op(
  n0,
  _UCAM,
  {
    [_ht]: ["PATCH", "/configured-audience-model/{configuredAudienceModelArn}", 200],
  },
  () => UpdateConfiguredAudienceModelRequest,
  () => UpdateConfiguredAudienceModelResponse
);
