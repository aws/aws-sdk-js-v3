// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _C,
  _c,
  _cA,
  _CC,
  _cC,
  _CCR,
  _CCr,
  _CCRr,
  _CDIJ,
  _CDIJR,
  _CDIJRr,
  _cDT,
  _CR,
  _CRR,
  _CRRr,
  _CSre,
  _CSRre,
  _CSRrea,
  _CUS,
  _dA,
  _DCe,
  _DCRe,
  _DCRes,
  _DDIJ,
  _DDIJR,
  _DDIJRe,
  _dGA,
  _DIJ,
  _dIJ,
  _dIJA,
  _DRes,
  _DRResc,
  _DRRescr,
  _dS,
  _eMWR,
  _eT,
  _fR,
  _iEC,
  _iMm,
  _jN,
  _lCU,
  _LRi,
  _LRRis,
  _LRRist,
  _lRU,
  _lUDT,
  _mM,
  _mPTPS,
  _mRa,
  _mRRPS,
  _n,
  _nT,
  _pAML,
  _pAMTS,
  _pAT,
  _pHPO,
  _rA,
  _rAe,
  _rAec,
  _RC,
  _rC,
  _Re,
  _re,
  _Reco,
  _reco,
  _RSe,
  _RUS,
  _s,
  _sAo,
  _sC,
  _sVA,
  _sWLSV,
  _t,
  _tDC,
  _UC,
  _UCR,
  _UCRp,
  _URp,
  _URRp,
  _URRpd,
  n0,
  Tags,
} from "./schemas_0";
import { SolutionConfig, TrainingDataConfig } from "./schemas_4_Describe";
import { DataSource } from "./schemas_9_Job";

/* eslint no-var: 0 */

export var Campaign = struct(
  n0,
  _C,
  0,
  [_n, _cA, _sVA, _mPTPS, _cC, _s, _fR, _cDT, _lUDT, _lCU],
  [0, 0, 0, 1, () => CampaignConfig, 0, 0, 4, 4, () => CampaignUpdateSummary]
);
export var CampaignConfig = struct(n0, _CC, 0, [_iEC, _eMWR, _sWLSV], [128 | 0, 2, 2]);
export var CampaignUpdateSummary = struct(
  n0,
  _CUS,
  0,
  [_sVA, _mPTPS, _cC, _s, _fR, _cDT, _lUDT],
  [0, 1, () => CampaignConfig, 0, 0, 4, 4]
);
export var CreateCampaignRequest = struct(
  n0,
  _CCR,
  0,
  [_n, _sVA, _mPTPS, _cC, _t],
  [0, 0, 1, () => CampaignConfig, [() => Tags, 0]]
);
export var CreateCampaignResponse = struct(n0, _CCRr, 0, [_cA], [0]);
export var CreateDatasetImportJobRequest = struct(
  n0,
  _CDIJR,
  0,
  [_jN, _dA, _dS, _rA, _t, _iMm, _pAMTS],
  [0, 0, () => DataSource, 0, [() => Tags, 0], 0, 2]
);
export var CreateDatasetImportJobResponse = struct(n0, _CDIJRr, 0, [_dIJA], [0]);
export var CreateRecommenderRequest = struct(
  n0,
  _CRR,
  0,
  [_n, _dGA, _rAe, _rC, _t],
  [0, 0, 0, () => RecommenderConfig, [() => Tags, 0]]
);
export var CreateRecommenderResponse = struct(n0, _CRRr, 0, [_rAec], [0]);
export var CreateSolutionRequest = struct(
  n0,
  _CSRre,
  0,
  [_n, _pHPO, _pAML, _pAT, _rAe, _dGA, _eT, _sC, _t],
  [0, 2, 2, 2, 0, 0, 0, () => SolutionConfig, [() => Tags, 0]]
);
export var CreateSolutionResponse = struct(n0, _CSRrea, 0, [_sAo], [0]);
export var DatasetImportJob = struct(
  n0,
  _DIJ,
  0,
  [_jN, _dIJA, _dA, _dS, _rA, _s, _cDT, _lUDT, _fR, _iMm, _pAMTS],
  [0, 0, 0, () => DataSource, 0, 0, 4, 4, 0, 0, 2]
);
export var DescribeCampaignRequest = struct(n0, _DCRe, 0, [_cA], [0]);
export var DescribeCampaignResponse = struct(n0, _DCRes, 0, [_c], [() => Campaign]);
export var DescribeDatasetImportJobRequest = struct(n0, _DDIJR, 0, [_dIJA], [0]);
export var DescribeDatasetImportJobResponse = struct(n0, _DDIJRe, 0, [_dIJ], [() => DatasetImportJob]);
export var DescribeRecommenderRequest = struct(n0, _DRResc, 0, [_rAec], [0]);
export var DescribeRecommenderResponse = struct(n0, _DRRescr, 0, [_re], [() => Recommender]);
export var ListRecommendersRequest = struct(n0, _LRRis, 0, [_dGA, _nT, _mRa], [0, 0, 1]);
export var ListRecommendersResponse = struct(n0, _LRRist, 0, [_reco, _nT], [() => Recommenders, 0]);
export var Recommender = struct(
  n0,
  _Re,
  0,
  [_rAec, _dGA, _n, _rAe, _rC, _cDT, _lUDT, _s, _fR, _lRU, _mM],
  [0, 0, 0, 0, () => RecommenderConfig, 4, 4, 0, 0, () => RecommenderUpdateSummary, 128 | 1]
);
export var RecommenderConfig = struct(
  n0,
  _RC,
  0,
  [_iEC, _mRRPS, _tDC, _eMWR],
  [128 | 0, 1, () => TrainingDataConfig, 2]
);
export var RecommenderSummary = struct(
  n0,
  _RSe,
  0,
  [_n, _rAec, _dGA, _rAe, _rC, _s, _cDT, _lUDT],
  [0, 0, 0, 0, () => RecommenderConfig, 0, 4, 4]
);
export var RecommenderUpdateSummary = struct(
  n0,
  _RUS,
  0,
  [_rC, _cDT, _lUDT, _s, _fR],
  [() => RecommenderConfig, 4, 4, 0, 0]
);
export var UpdateCampaignRequest = struct(n0, _UCR, 0, [_cA, _sVA, _mPTPS, _cC], [0, 0, 1, () => CampaignConfig]);
export var UpdateCampaignResponse = struct(n0, _UCRp, 0, [_cA], [0]);
export var UpdateRecommenderRequest = struct(n0, _URRp, 0, [_rAec, _rC], [0, () => RecommenderConfig]);
export var UpdateRecommenderResponse = struct(n0, _URRpd, 0, [_rAec], [0]);
export var Recommenders = list(n0, _Reco, 0, () => RecommenderSummary);
export var CreateCampaign = op(
  n0,
  _CCr,
  2,
  () => CreateCampaignRequest,
  () => CreateCampaignResponse
);
export var CreateDatasetImportJob = op(
  n0,
  _CDIJ,
  0,
  () => CreateDatasetImportJobRequest,
  () => CreateDatasetImportJobResponse
);
export var CreateRecommender = op(
  n0,
  _CR,
  2,
  () => CreateRecommenderRequest,
  () => CreateRecommenderResponse
);
export var CreateSolution = op(
  n0,
  _CSre,
  0,
  () => CreateSolutionRequest,
  () => CreateSolutionResponse
);
export var DescribeCampaign = op(
  n0,
  _DCe,
  2,
  () => DescribeCampaignRequest,
  () => DescribeCampaignResponse
);
export var DescribeDatasetImportJob = op(
  n0,
  _DDIJ,
  2,
  () => DescribeDatasetImportJobRequest,
  () => DescribeDatasetImportJobResponse
);
export var DescribeRecommender = op(
  n0,
  _DRes,
  2,
  () => DescribeRecommenderRequest,
  () => DescribeRecommenderResponse
);
export var ListRecommenders = op(
  n0,
  _LRi,
  2,
  () => ListRecommendersRequest,
  () => ListRecommendersResponse
);
export var UpdateCampaign = op(
  n0,
  _UC,
  2,
  () => UpdateCampaignRequest,
  () => UpdateCampaignResponse
);
export var UpdateRecommender = op(
  n0,
  _URp,
  2,
  () => UpdateRecommenderRequest,
  () => UpdateRecommenderResponse
);
