// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _ac,
  _aI,
  _aIc,
  _aM,
  _aT,
  _bN,
  _CET,
  _CETAI,
  _CETAIM,
  _CETEOI,
  _CETLCI,
  _CETR,
  _CETRCI,
  _CETRr,
  _CETSCI,
  _CETSCIL,
  _CETTI,
  _CETTIM,
  _co,
  _cT,
  _cTr,
  _cWD,
  _cWLC,
  _d,
  _DET,
  _DETR,
  _DETRe,
  _dI,
  _dS,
  _E,
  _e,
  _EA,
  _EAM,
  _EAS,
  _ECWLLC,
  _EE,
  _ELC,
  _EO,
  _eO,
  _ER,
  _eR,
  _ERC,
  _eRC,
  _ERCCWD,
  _ERCCWDL,
  _ERCDS,
  _ERCO,
  _ERCOSC,
  _ERE,
  _ERS,
  _ERSR,
  _ERSRL,
  _ES,
  _ESC,
  _ESCL,
  _ESL,
  _ESLC,
  _ESx,
  _ET,
  _eT,
  _ETA,
  _ETAM,
  _ETCWLLC,
  _ETCWLLCI,
  _ETEO,
  _ETF,
  _ETFL,
  _eTI,
  _ETLC,
  _ETM,
  _eTn,
  _ETRC,
  _ETRCCWD,
  _ETRCCWDL,
  _ETRCDS,
  _ETRCDSI,
  _ETRCO,
  _ETRCOI,
  _eTRM,
  _ETSC,
  _ETSCL,
  _ETSLC,
  _ETSLCI,
  _ETT,
  _ETTF,
  _ETTFIL,
  _ETTFL,
  _ETTIF,
  _ETTM,
  _ETx,
  _ex,
  _exp,
  _f,
  _GE,
  _GER,
  _GERe,
  _GET,
  _GETR,
  _GETRe,
  _GSL,
  _GSLR,
  _GSLRe,
  _h,
  _hQ,
  _i,
  _l,
  _lC,
  _LE,
  _LER,
  _LERi,
  _lGA,
  _lSV,
  _lUT,
  _mR,
  _nT,
  _o,
  _p,
  _pa,
  _pED,
  _pEDo,
  _pr,
  _rA,
  _rAe,
  _RCCWDI,
  _RCCWDIL,
  _RCSO,
  _RCSOI,
  _re,
  _rT,
  _rTe,
  _rTep,
  _s,
  _sA,
  _sC,
  _sCt,
  _SE,
  _SEEOI,
  _SER,
  _SERt,
  _SERto,
  _SERtop,
  _SEt,
  _SL,
  _sL,
  _SLS,
  _sM,
  _sR,
  _sT,
  _st,
  _sta,
  _t,
  _ta,
  _tACC,
  _UET,
  _UETAII,
  _UETAIM,
  _UETEOI,
  _UETLCI,
  _UETR,
  _UETRCI,
  _UETRp,
  _UETSCI,
  _UETSCIL,
  _UETTI,
  _UETTIM,
  _USLS,
  _USLSI,
  _USLSR,
  _USLSRp,
  _v,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateExperimentTemplateActionInput = struct(
  n0,
  _CETAI,
  0,
  [_aI, _d, _p, _t, _sA],
  [0, 0, 128 | 0, 128 | 0, 64 | 0]
);
export var CreateExperimentTemplateExperimentOptionsInput = struct(n0, _CETEOI, 0, [_aT, _eTRM], [0, 0]);
export var CreateExperimentTemplateLogConfigurationInput = struct(
  n0,
  _CETLCI,
  0,
  [_cWLC, _sC, _lSV],
  [() => ExperimentTemplateCloudWatchLogsLogConfigurationInput, () => ExperimentTemplateS3LogConfigurationInput, 1]
);
export var CreateExperimentTemplateReportConfigurationInput = struct(
  n0,
  _CETRCI,
  0,
  [_o, _dS, _pED, _pEDo],
  [
    () => ExperimentTemplateReportConfigurationOutputsInput,
    () => ExperimentTemplateReportConfigurationDataSourcesInput,
    0,
    0,
  ]
);
export var CreateExperimentTemplateRequest = struct(
  n0,
  _CETR,
  0,
  [_cT, _d, _sCt, _t, _ac, _rA, _ta, _lC, _eO, _eRC],
  [
    [0, 4],
    0,
    () => CreateExperimentTemplateStopConditionInputList,
    () => CreateExperimentTemplateTargetInputMap,
    () => CreateExperimentTemplateActionInputMap,
    0,
    128 | 0,
    () => CreateExperimentTemplateLogConfigurationInput,
    () => CreateExperimentTemplateExperimentOptionsInput,
    () => CreateExperimentTemplateReportConfigurationInput,
  ]
);
export var CreateExperimentTemplateResponse = struct(n0, _CETRr, 0, [_eT], [() => ExperimentTemplate]);
export var CreateExperimentTemplateStopConditionInput = struct(n0, _CETSCI, 0, [_s, _v], [0, 0]);
export var CreateExperimentTemplateTargetInput = struct(
  n0,
  _CETTI,
  0,
  [_rT, _rAe, _rTe, _f, _sM, _p],
  [0, 64 | 0, 128 | 0, () => ExperimentTemplateTargetFilterInputList, 0, 128 | 0]
);
export var DeleteExperimentTemplateRequest = struct(n0, _DETR, 0, [_i], [[0, 1]]);
export var DeleteExperimentTemplateResponse = struct(n0, _DETRe, 0, [_eT], [() => ExperimentTemplate]);
export var Experiment = struct(
  n0,
  _E,
  0,
  [_i, _a, _eTI, _rA, _st, _t, _ac, _sCt, _cTr, _sT, _eTn, _ta, _lC, _eO, _tACC, _eRC, _eR],
  [
    0,
    0,
    0,
    0,
    () => ExperimentState,
    () => ExperimentTargetMap,
    () => ExperimentActionMap,
    () => ExperimentStopConditionList,
    4,
    4,
    4,
    128 | 0,
    () => ExperimentLogConfiguration,
    () => ExperimentOptions,
    1,
    () => ExperimentReportConfiguration,
    () => ExperimentReport,
  ]
);
export var ExperimentAction = struct(
  n0,
  _EA,
  0,
  [_aI, _d, _p, _t, _sA, _st, _sT, _eTn],
  [0, 0, 128 | 0, 128 | 0, 64 | 0, () => ExperimentActionState, 4, 4]
);
export var ExperimentActionState = struct(n0, _EAS, 0, [_sta, _re], [0, 0]);
export var ExperimentCloudWatchLogsLogConfiguration = struct(n0, _ECWLLC, 0, [_lGA], [0]);
export var ExperimentError = struct(n0, _EE, 0, [_aIc, _co, _l], [0, 0, 0]);
export var ExperimentLogConfiguration = struct(
  n0,
  _ELC,
  0,
  [_cWLC, _sC, _lSV],
  [() => ExperimentCloudWatchLogsLogConfiguration, () => ExperimentS3LogConfiguration, 1]
);
export var ExperimentOptions = struct(n0, _EO, 0, [_aT, _eTRM, _aM], [0, 0, 0]);
export var ExperimentReport = struct(
  n0,
  _ER,
  0,
  [_st, _sR],
  [() => ExperimentReportState, () => ExperimentReportS3ReportList]
);
export var ExperimentReportConfiguration = struct(
  n0,
  _ERC,
  0,
  [_o, _dS, _pED, _pEDo],
  [() => ExperimentReportConfigurationOutputs, () => ExperimentReportConfigurationDataSources, 0, 0]
);
export var ExperimentReportConfigurationCloudWatchDashboard = struct(n0, _ERCCWD, 0, [_dI], [0]);
export var ExperimentReportConfigurationDataSources = struct(
  n0,
  _ERCDS,
  0,
  [_cWD],
  [() => ExperimentReportConfigurationCloudWatchDashboardList]
);
export var ExperimentReportConfigurationOutputs = struct(
  n0,
  _ERCO,
  0,
  [_sC],
  [() => ExperimentReportConfigurationOutputsS3Configuration]
);
export var ExperimentReportConfigurationOutputsS3Configuration = struct(n0, _ERCOSC, 0, [_bN, _pr], [0, 0]);
export var ExperimentReportError = struct(n0, _ERE, 0, [_co], [0]);
export var ExperimentReportS3Report = struct(n0, _ERSR, 0, [_a, _rTep], [0, 0]);
export var ExperimentReportState = struct(n0, _ERS, 0, [_sta, _re, _e], [0, 0, () => ExperimentReportError]);
export var ExperimentS3LogConfiguration = struct(n0, _ESLC, 0, [_bN, _pr], [0, 0]);
export var ExperimentState = struct(n0, _ES, 0, [_sta, _re, _e], [0, 0, () => ExperimentError]);
export var ExperimentStopCondition = struct(n0, _ESC, 0, [_s, _v], [0, 0]);
export var ExperimentSummary = struct(
  n0,
  _ESx,
  0,
  [_i, _a, _eTI, _st, _cTr, _ta, _eO],
  [0, 0, 0, () => ExperimentState, 4, 128 | 0, () => ExperimentOptions]
);
export var ExperimentTarget = struct(
  n0,
  _ET,
  0,
  [_rT, _rAe, _rTe, _f, _sM, _p],
  [0, 64 | 0, 128 | 0, () => ExperimentTargetFilterList, 0, 128 | 0]
);
export var ExperimentTargetFilter = struct(n0, _ETF, 0, [_pa, _va], [0, 64 | 0]);
export var ExperimentTemplate = struct(
  n0,
  _ETx,
  0,
  [_i, _a, _d, _t, _ac, _sCt, _cTr, _lUT, _rA, _ta, _lC, _eO, _tACC, _eRC],
  [
    0,
    0,
    0,
    () => ExperimentTemplateTargetMap,
    () => ExperimentTemplateActionMap,
    () => ExperimentTemplateStopConditionList,
    4,
    4,
    0,
    128 | 0,
    () => ExperimentTemplateLogConfiguration,
    () => ExperimentTemplateExperimentOptions,
    1,
    () => ExperimentTemplateReportConfiguration,
  ]
);
export var ExperimentTemplateAction = struct(n0, _ETA, 0, [_aI, _d, _p, _t, _sA], [0, 0, 128 | 0, 128 | 0, 64 | 0]);
export var ExperimentTemplateCloudWatchLogsLogConfiguration = struct(n0, _ETCWLLC, 0, [_lGA], [0]);
export var ExperimentTemplateCloudWatchLogsLogConfigurationInput = struct(n0, _ETCWLLCI, 0, [_lGA], [0]);
export var ExperimentTemplateExperimentOptions = struct(n0, _ETEO, 0, [_aT, _eTRM], [0, 0]);
export var ExperimentTemplateLogConfiguration = struct(
  n0,
  _ETLC,
  0,
  [_cWLC, _sC, _lSV],
  [() => ExperimentTemplateCloudWatchLogsLogConfiguration, () => ExperimentTemplateS3LogConfiguration, 1]
);
export var ExperimentTemplateReportConfiguration = struct(
  n0,
  _ETRC,
  0,
  [_o, _dS, _pED, _pEDo],
  [() => ExperimentTemplateReportConfigurationOutputs, () => ExperimentTemplateReportConfigurationDataSources, 0, 0]
);
export var ExperimentTemplateReportConfigurationCloudWatchDashboard = struct(n0, _ETRCCWD, 0, [_dI], [0]);
export var ExperimentTemplateReportConfigurationDataSources = struct(
  n0,
  _ETRCDS,
  0,
  [_cWD],
  [() => ExperimentTemplateReportConfigurationCloudWatchDashboardList]
);
export var ExperimentTemplateReportConfigurationDataSourcesInput = struct(
  n0,
  _ETRCDSI,
  0,
  [_cWD],
  [() => ReportConfigurationCloudWatchDashboardInputList]
);
export var ExperimentTemplateReportConfigurationOutputs = struct(
  n0,
  _ETRCO,
  0,
  [_sC],
  [() => ReportConfigurationS3Output]
);
export var ExperimentTemplateReportConfigurationOutputsInput = struct(
  n0,
  _ETRCOI,
  0,
  [_sC],
  [() => ReportConfigurationS3OutputInput]
);
export var ExperimentTemplateS3LogConfiguration = struct(n0, _ETSLC, 0, [_bN, _pr], [0, 0]);
export var ExperimentTemplateS3LogConfigurationInput = struct(n0, _ETSLCI, 0, [_bN, _pr], [0, 0]);
export var ExperimentTemplateStopCondition = struct(n0, _ETSC, 0, [_s, _v], [0, 0]);
export var ExperimentTemplateTarget = struct(
  n0,
  _ETT,
  0,
  [_rT, _rAe, _rTe, _f, _sM, _p],
  [0, 64 | 0, 128 | 0, () => ExperimentTemplateTargetFilterList, 0, 128 | 0]
);
export var ExperimentTemplateTargetFilter = struct(n0, _ETTF, 0, [_pa, _va], [0, 64 | 0]);
export var ExperimentTemplateTargetInputFilter = struct(n0, _ETTIF, 0, [_pa, _va], [0, 64 | 0]);
export var GetExperimentRequest = struct(n0, _GER, 0, [_i], [[0, 1]]);
export var GetExperimentResponse = struct(n0, _GERe, 0, [_ex], [() => Experiment]);
export var GetExperimentTemplateRequest = struct(n0, _GETR, 0, [_i], [[0, 1]]);
export var GetExperimentTemplateResponse = struct(n0, _GETRe, 0, [_eT], [() => ExperimentTemplate]);
export var GetSafetyLeverRequest = struct(n0, _GSLR, 0, [_i], [[0, 1]]);
export var GetSafetyLeverResponse = struct(n0, _GSLRe, 0, [_sL], [() => SafetyLever]);
export var ListExperimentsRequest = struct(
  n0,
  _LER,
  0,
  [_mR, _nT, _eTI],
  [
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
        [_hQ]: _eTI,
      },
    ],
  ]
);
export var ListExperimentsResponse = struct(n0, _LERi, 0, [_exp, _nT], [() => ExperimentSummaryList, 0]);
export var ReportConfigurationCloudWatchDashboardInput = struct(n0, _RCCWDI, 0, [_dI], [0]);
export var ReportConfigurationS3Output = struct(n0, _RCSO, 0, [_bN, _pr], [0, 0]);
export var ReportConfigurationS3OutputInput = struct(n0, _RCSOI, 0, [_bN, _pr], [0, 0]);
export var SafetyLever = struct(n0, _SL, 0, [_i, _a, _st], [0, 0, () => SafetyLeverState]);
export var SafetyLeverState = struct(n0, _SLS, 0, [_sta, _re], [0, 0]);
export var StartExperimentExperimentOptionsInput = struct(n0, _SEEOI, 0, [_aM], [0]);
export var StartExperimentRequest = struct(
  n0,
  _SER,
  0,
  [_cT, _eTI, _eO, _ta],
  [[0, 4], 0, () => StartExperimentExperimentOptionsInput, 128 | 0]
);
export var StartExperimentResponse = struct(n0, _SERt, 0, [_ex], [() => Experiment]);
export var StopExperimentRequest = struct(n0, _SERto, 0, [_i], [[0, 1]]);
export var StopExperimentResponse = struct(n0, _SERtop, 0, [_ex], [() => Experiment]);
export var UpdateExperimentTemplateActionInputItem = struct(
  n0,
  _UETAII,
  0,
  [_aI, _d, _p, _t, _sA],
  [0, 0, 128 | 0, 128 | 0, 64 | 0]
);
export var UpdateExperimentTemplateExperimentOptionsInput = struct(n0, _UETEOI, 0, [_eTRM], [0]);
export var UpdateExperimentTemplateLogConfigurationInput = struct(
  n0,
  _UETLCI,
  0,
  [_cWLC, _sC, _lSV],
  [() => ExperimentTemplateCloudWatchLogsLogConfigurationInput, () => ExperimentTemplateS3LogConfigurationInput, 1]
);
export var UpdateExperimentTemplateReportConfigurationInput = struct(
  n0,
  _UETRCI,
  0,
  [_o, _dS, _pED, _pEDo],
  [
    () => ExperimentTemplateReportConfigurationOutputsInput,
    () => ExperimentTemplateReportConfigurationDataSourcesInput,
    0,
    0,
  ]
);
export var UpdateExperimentTemplateRequest = struct(
  n0,
  _UETR,
  0,
  [_i, _d, _sCt, _t, _ac, _rA, _lC, _eO, _eRC],
  [
    [0, 1],
    0,
    () => UpdateExperimentTemplateStopConditionInputList,
    () => UpdateExperimentTemplateTargetInputMap,
    () => UpdateExperimentTemplateActionInputMap,
    0,
    () => UpdateExperimentTemplateLogConfigurationInput,
    () => UpdateExperimentTemplateExperimentOptionsInput,
    () => UpdateExperimentTemplateReportConfigurationInput,
  ]
);
export var UpdateExperimentTemplateResponse = struct(n0, _UETRp, 0, [_eT], [() => ExperimentTemplate]);
export var UpdateExperimentTemplateStopConditionInput = struct(n0, _UETSCI, 0, [_s, _v], [0, 0]);
export var UpdateExperimentTemplateTargetInput = struct(
  n0,
  _UETTI,
  0,
  [_rT, _rAe, _rTe, _f, _sM, _p],
  [0, 64 | 0, 128 | 0, () => ExperimentTemplateTargetFilterInputList, 0, 128 | 0]
);
export var UpdateSafetyLeverStateInput = struct(n0, _USLSI, 0, [_sta, _re], [0, 0]);
export var UpdateSafetyLeverStateRequest = struct(
  n0,
  _USLSR,
  0,
  [_i, _st],
  [[0, 1], () => UpdateSafetyLeverStateInput]
);
export var UpdateSafetyLeverStateResponse = struct(n0, _USLSRp, 0, [_sL], [() => SafetyLever]);
export var Unit = "unit" as const;

export var CreateExperimentTemplateStopConditionInputList = list(
  n0,
  _CETSCIL,
  0,
  () => CreateExperimentTemplateStopConditionInput
);
export var ExperimentActionStartAfterList = 64 | 0;

export var ExperimentReportConfigurationCloudWatchDashboardList = list(
  n0,
  _ERCCWDL,
  0,
  () => ExperimentReportConfigurationCloudWatchDashboard
);
export var ExperimentReportS3ReportList = list(n0, _ERSRL, 0, () => ExperimentReportS3Report);
export var ExperimentStopConditionList = list(n0, _ESCL, 0, () => ExperimentStopCondition);
export var ExperimentSummaryList = list(n0, _ESL, 0, () => ExperimentSummary);
export var ExperimentTargetFilterList = list(n0, _ETFL, 0, () => ExperimentTargetFilter);
export var ExperimentTargetFilterValues = 64 | 0;

export var ExperimentTemplateActionStartAfterList = 64 | 0;

export var ExperimentTemplateReportConfigurationCloudWatchDashboardList = list(
  n0,
  _ETRCCWDL,
  0,
  () => ExperimentTemplateReportConfigurationCloudWatchDashboard
);
export var ExperimentTemplateStopConditionList = list(n0, _ETSCL, 0, () => ExperimentTemplateStopCondition);
export var ExperimentTemplateTargetFilterInputList = list(n0, _ETTFIL, 0, () => ExperimentTemplateTargetInputFilter);
export var ExperimentTemplateTargetFilterList = list(n0, _ETTFL, 0, () => ExperimentTemplateTargetFilter);
export var ExperimentTemplateTargetFilterValues = 64 | 0;

export var ReportConfigurationCloudWatchDashboardInputList = list(
  n0,
  _RCCWDIL,
  0,
  () => ReportConfigurationCloudWatchDashboardInput
);
export var ResourceArnList = 64 | 0;

export var UpdateExperimentTemplateStopConditionInputList = list(
  n0,
  _UETSCIL,
  0,
  () => UpdateExperimentTemplateStopConditionInput
);
export var CreateExperimentTemplateActionInputMap = map(n0, _CETAIM, 0, 0, () => CreateExperimentTemplateActionInput);
export var CreateExperimentTemplateTargetInputMap = map(n0, _CETTIM, 0, 0, () => CreateExperimentTemplateTargetInput);
export var ExperimentActionMap = map(n0, _EAM, 0, 0, () => ExperimentAction);
export var ExperimentActionParameterMap = 128 | 0;

export var ExperimentActionTargetMap = 128 | 0;

export var ExperimentTargetMap = map(n0, _ETM, 0, 0, () => ExperimentTarget);
export var ExperimentTargetParameterMap = 128 | 0;

export var ExperimentTemplateActionMap = map(n0, _ETAM, 0, 0, () => ExperimentTemplateAction);
export var ExperimentTemplateActionParameterMap = 128 | 0;

export var ExperimentTemplateActionTargetMap = 128 | 0;

export var ExperimentTemplateTargetMap = map(n0, _ETTM, 0, 0, () => ExperimentTemplateTarget);
export var ExperimentTemplateTargetParameterMap = 128 | 0;

export var UpdateExperimentTemplateActionInputMap = map(
  n0,
  _UETAIM,
  0,
  0,
  () => UpdateExperimentTemplateActionInputItem
);
export var UpdateExperimentTemplateTargetInputMap = map(n0, _UETTIM, 0, 0, () => UpdateExperimentTemplateTargetInput);
export var CreateExperimentTemplate = op(
  n0,
  _CET,
  {
    [_h]: ["POST", "/experimentTemplates", 200],
  },
  () => CreateExperimentTemplateRequest,
  () => CreateExperimentTemplateResponse
);
export var DeleteExperimentTemplate = op(
  n0,
  _DET,
  {
    [_h]: ["DELETE", "/experimentTemplates/{id}", 200],
  },
  () => DeleteExperimentTemplateRequest,
  () => DeleteExperimentTemplateResponse
);
export var GetExperiment = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/experiments/{id}", 200],
  },
  () => GetExperimentRequest,
  () => GetExperimentResponse
);
export var GetExperimentTemplate = op(
  n0,
  _GET,
  {
    [_h]: ["GET", "/experimentTemplates/{id}", 200],
  },
  () => GetExperimentTemplateRequest,
  () => GetExperimentTemplateResponse
);
export var GetSafetyLever = op(
  n0,
  _GSL,
  {
    [_h]: ["GET", "/safetyLevers/{id}", 200],
  },
  () => GetSafetyLeverRequest,
  () => GetSafetyLeverResponse
);
export var ListExperiments = op(
  n0,
  _LE,
  {
    [_h]: ["GET", "/experiments", 200],
  },
  () => ListExperimentsRequest,
  () => ListExperimentsResponse
);
export var StartExperiment = op(
  n0,
  _SE,
  {
    [_h]: ["POST", "/experiments", 200],
  },
  () => StartExperimentRequest,
  () => StartExperimentResponse
);
export var StopExperiment = op(
  n0,
  _SEt,
  {
    [_h]: ["DELETE", "/experiments/{id}", 200],
  },
  () => StopExperimentRequest,
  () => StopExperimentResponse
);
export var UpdateExperimentTemplate = op(
  n0,
  _UET,
  {
    [_h]: ["PATCH", "/experimentTemplates/{id}", 200],
  },
  () => UpdateExperimentTemplateRequest,
  () => UpdateExperimentTemplateResponse
);
export var UpdateSafetyLeverState = op(
  n0,
  _USLS,
  {
    [_h]: ["PATCH", "/safetyLevers/{id}/state", 200],
  },
  () => UpdateSafetyLeverStateRequest,
  () => UpdateSafetyLeverStateResponse
);
