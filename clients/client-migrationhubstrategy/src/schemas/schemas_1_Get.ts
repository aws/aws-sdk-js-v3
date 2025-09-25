// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _AA,
  _aA,
  _AAs,
  _aCD,
  _aCI,
  _ACS,
  _aCS,
  _ACSpp,
  _aM,
  _aP,
  _aSIs,
  _aT,
  _aTs,
  _c,
  _cO,
  _cT,
  _DCDa,
  _dCDa,
  _dP,
  _e,
  _f,
  _GA,
  _GACD,
  _GACDR,
  _GACDRe,
  _GACS,
  _GACSR,
  _GACSRe,
  _GAR,
  _GARe,
  _GIFT,
  _GIFTR,
  _GIFTRe,
  _GPP,
  _GPPR,
  _GPPRe,
  _GRRD,
  _GRRDR,
  _GRRDRe,
  _GSD,
  _GSDR,
  _GSDRe,
  _GSS,
  _GSSR,
  _GSSRe,
  _hE,
  _hQ,
  _ht,
  _i,
  _iN,
  _iP,
  _iPn,
  _iS,
  _iSB,
  _iSK,
  _l,
  _m,
  _mAR,
  _mR,
  _n,
  _nOAC,
  _nORF,
  _nORS,
  _nT,
  _pBG,
  _pN,
  _r,
  _RNFE,
  _RRD,
  _rRD,
  _sB,
  _SC,
  _SCL,
  _sCL,
  _sD,
  _ser,
  _sI,
  _sK,
  _sM,
  _SMK,
  _sMK,
  _sO,
  _SOt,
  _sRSB,
  _sRSK,
  _SS,
  _sS,
  _SSer,
  _sT,
  _st,
  _str,
  _su,
  _sV,
  _tD,
  _tN,
  _UACC,
  _UACCR,
  _UACCRp,
  _USC,
  _USCR,
  _USCRp,
  _vC,
  n0,
} from "./schemas_0";
import { AssessmentTargets } from "./schemas_2_Assessment";
import { ApplicationComponentDetail, ServerDetail } from "./schemas_3_Get";
import { ApplicationPreferences, DatabasePreferences, PrioritizeBusinessGoals } from "./schemas_4_Portfolio";
import { RecommendationSet } from "./schemas_6_Get";

/* eslint no-var: 0 */

export var SecretsManagerKey = sim(n0, _SMK, 0, 8);
export var ApplicationComponentStrategy = struct(n0, _ACS, 0, [_r, _st, _iP], [() => RecommendationSet, 0, 2]);
export var AssociatedApplication = struct(n0, _AA, 0, [_n, _i], [0, 0]);
export var DataCollectionDetails = struct(
  n0,
  _DCDa,
  0,
  [_st, _ser, _f, _su, _iPn, _sT, _cT, _sM],
  [0, 1, 1, 1, 1, 4, 4, 0]
);
export var GetApplicationComponentDetailsRequest = struct(n0, _GACDR, 0, [_aCI], [[0, 1]]);
export var GetApplicationComponentDetailsResponse = struct(
  n0,
  _GACDRe,
  0,
  [_aCD, _aA, _mAR, _aSIs],
  [() => ApplicationComponentDetail, () => AssociatedApplications, 2, 64 | 0]
);
export var GetApplicationComponentStrategiesRequest = struct(n0, _GACSR, 0, [_aCI], [[0, 1]]);
export var GetApplicationComponentStrategiesResponse = struct(
  n0,
  _GACSRe,
  0,
  [_aCS],
  [() => ApplicationComponentStrategies]
);
export var GetAssessmentRequest = struct(n0, _GAR, 0, [_i], [[0, 1]]);
export var GetAssessmentResponse = struct(
  n0,
  _GARe,
  0,
  [_i, _dCDa, _aTs],
  [0, () => DataCollectionDetails, () => AssessmentTargets]
);
export var GetImportFileTaskRequest = struct(n0, _GIFTR, 0, [_i], [[0, 1]]);
export var GetImportFileTaskResponse = struct(
  n0,
  _GIFTRe,
  0,
  [_i, _st, _sT, _iSB, _iSK, _sRSB, _sRSK, _cT, _nORS, _nORF, _iN],
  [0, 0, 4, 0, 0, 0, 0, 4, 1, 1, 0]
);
export var GetPortfolioPreferencesRequest = struct(n0, _GPPR, 0, [], []);
export var GetPortfolioPreferencesResponse = struct(
  n0,
  _GPPRe,
  0,
  [_pBG, _aP, _dP, _aM],
  [() => PrioritizeBusinessGoals, () => ApplicationPreferences, () => DatabasePreferences, 0]
);
export var GetRecommendationReportDetailsRequest = struct(n0, _GRRDR, 0, [_i], [[0, 1]]);
export var GetRecommendationReportDetailsResponse = struct(
  n0,
  _GRRDRe,
  0,
  [_i, _rRD],
  [0, () => RecommendationReportDetails]
);
export var GetServerDetailsRequest = struct(
  n0,
  _GSDR,
  0,
  [_sI, _nT, _mR],
  [
    [0, 1],
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
export var GetServerDetailsResponse = struct(
  n0,
  _GSDRe,
  0,
  [_nT, _sD, _aA],
  [0, () => ServerDetail, () => AssociatedApplications]
);
export var GetServerStrategiesRequest = struct(n0, _GSSR, 0, [_sI], [[0, 1]]);
export var GetServerStrategiesResponse = struct(n0, _GSSRe, 0, [_sS], [() => ServerStrategies]);
export var RecommendationReportDetails = struct(n0, _RRD, 0, [_st, _sM, _sT, _cT, _sB, _sK], [0, 0, 4, 4, 0, 64 | 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ServerStrategy = struct(n0, _SS, 0, [_r, _st, _nOAC, _iP], [() => RecommendationSet, 0, 1, 2]);
export var SourceCode = struct(n0, _SC, 0, [_vC, _sV, _l, _pN], [0, 0, 0, 0]);
export var StrategyOption = struct(n0, _SOt, 0, [_str, _tN, _tD, _iP], [0, 0, 0, 2]);
export var UpdateApplicationComponentConfigRequest = struct(
  n0,
  _UACCR,
  0,
  [_aCI, _iS, _sO, _sCL, _sMK, _cO, _aT],
  [0, 0, () => StrategyOption, () => SourceCodeList, [() => SecretsManagerKey, 0], 2, 0]
);
export var UpdateApplicationComponentConfigResponse = struct(n0, _UACCRp, 0, [], []);
export var UpdateServerConfigRequest = struct(n0, _USCR, 0, [_sI, _sO], [0, () => StrategyOption]);
export var UpdateServerConfigResponse = struct(n0, _USCRp, 0, [], []);
export var ApplicationComponentStrategies = list(n0, _ACSpp, 0, () => ApplicationComponentStrategy);
export var AssociatedApplications = list(n0, _AAs, 0, () => AssociatedApplication);
export var AssociatedServerIDs = 64 | 0;

export var S3Keys = 64 | 0;

export var ServerStrategies = list(n0, _SSer, 0, () => ServerStrategy);
export var SourceCodeList = list(n0, _SCL, 0, () => SourceCode);
export var GetApplicationComponentDetails = op(
  n0,
  _GACD,
  {
    [_ht]: ["GET", "/get-applicationcomponent-details/{applicationComponentId}", 200],
  },
  () => GetApplicationComponentDetailsRequest,
  () => GetApplicationComponentDetailsResponse
);
export var GetApplicationComponentStrategies = op(
  n0,
  _GACS,
  {
    [_ht]: ["GET", "/get-applicationcomponent-strategies/{applicationComponentId}", 200],
  },
  () => GetApplicationComponentStrategiesRequest,
  () => GetApplicationComponentStrategiesResponse
);
export var GetAssessment = op(
  n0,
  _GA,
  {
    [_ht]: ["GET", "/get-assessment/{id}", 200],
  },
  () => GetAssessmentRequest,
  () => GetAssessmentResponse
);
export var GetImportFileTask = op(
  n0,
  _GIFT,
  {
    [_ht]: ["GET", "/get-import-file-task/{id}", 200],
  },
  () => GetImportFileTaskRequest,
  () => GetImportFileTaskResponse
);
export var GetPortfolioPreferences = op(
  n0,
  _GPP,
  {
    [_ht]: ["GET", "/get-portfolio-preferences", 200],
  },
  () => GetPortfolioPreferencesRequest,
  () => GetPortfolioPreferencesResponse
);
export var GetRecommendationReportDetails = op(
  n0,
  _GRRD,
  {
    [_ht]: ["GET", "/get-recommendation-report-details/{id}", 200],
  },
  () => GetRecommendationReportDetailsRequest,
  () => GetRecommendationReportDetailsResponse
);
export var GetServerDetails = op(
  n0,
  _GSD,
  {
    [_ht]: ["GET", "/get-server-details/{serverId}", 200],
  },
  () => GetServerDetailsRequest,
  () => GetServerDetailsResponse
);
export var GetServerStrategies = op(
  n0,
  _GSS,
  {
    [_ht]: ["GET", "/get-server-strategies/{serverId}", 200],
  },
  () => GetServerStrategiesRequest,
  () => GetServerStrategiesResponse
);
export var UpdateApplicationComponentConfig = op(
  n0,
  _UACC,
  {
    [_ht]: ["POST", "/update-applicationcomponent-config/", 200],
  },
  () => UpdateApplicationComponentConfigRequest,
  () => UpdateApplicationComponentConfigResponse
);
export var UpdateServerConfig = op(
  n0,
  _USC,
  {
    [_ht]: ["POST", "/update-server-config/", 200],
  },
  () => UpdateServerConfigRequest,
  () => UpdateServerConfigResponse
);
