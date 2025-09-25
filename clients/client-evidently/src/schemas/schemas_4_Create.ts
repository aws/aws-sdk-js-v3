// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _aCR,
  _aCT,
  _aI,
  _aOUV,
  _b,
  _c,
  _CER,
  _CEr,
  _CERr,
  _CF,
  _CFR,
  _CFRr,
  _CL,
  _CLR,
  _CLRr,
  _CP,
  _CPR,
  _CPRr,
  _CS,
  _CSR,
  _CSRr,
  _cWL,
  _CWLDC,
  _d,
  _dD,
  _dS,
  _dV,
  _e,
  _eIn,
  _eO,
  _eS,
  _eT,
  _ex,
  _f,
  _g,
  _h,
  _hE,
  _l,
  _lG,
  _m,
  _mG,
  _mM,
  _n,
  _oAC,
  _p,
  _pa,
  _PACRC,
  _PDDC,
  _pre,
  _qC,
  _rea,
  _rI,
  _rS,
  _rT,
  _rV,
  _s,
  _sC,
  _sD,
  _SDC,
  _SE,
  _SER,
  _SERt,
  _SERto,
  _SERtop,
  _SEt,
  _SLR,
  _SLRt,
  _SLt,
  _SQEE,
  _sR,
  _sSC,
  _sT,
  _t,
  _ta,
  _UF,
  _UFR,
  _UFRp,
  _UP,
  _UPDD,
  _UPDDR,
  _UPDDRp,
  _UPR,
  _UPRp,
  _v,
  _val,
  _VC,
  _VCL,
  n0,
} from "./schemas_0";
import { Experiment } from "./schemas_1_Experiment";
import {
  Launch,
  LaunchGroupConfigList,
  MetricGoalConfigList,
  MetricMonitorConfigList,
  OnlineAbConfig,
  ScheduledSplitsLaunchConfig,
  TreatmentConfigList,
} from "./schemas_3_Launch";
import { Project } from "./schemas_5_Project";
import { Segment } from "./schemas_11_Experiment";
import { Feature, VariableValue } from "./schemas_13_Feature";
import { SegmentPattern } from "./schemas_16_Segment";

/* eslint no-var: 0 */

export var CloudWatchLogsDestinationConfig = struct(n0, _CWLDC, 0, [_lG], [0]);
export var CreateExperimentRequest = struct(
  n0,
  _CER,
  0,
  [_p, _n, _d, _t, _mG, _rS, _sR, _oAC, _s, _ta],
  [[0, 1], 0, 0, () => TreatmentConfigList, [() => MetricGoalConfigList, 0], 0, 1, () => OnlineAbConfig, 0, 128 | 0]
);
export var CreateExperimentResponse = struct(n0, _CERr, 0, [_ex], [[() => Experiment, 0]]);
export var CreateFeatureRequest = struct(
  n0,
  _CFR,
  0,
  [_p, _n, _eS, _d, _v, _dV, _ta, _eO],
  [[0, 1], 0, 0, 0, () => VariationConfigsList, 0, 128 | 0, 128 | 0]
);
export var CreateFeatureResponse = struct(n0, _CFRr, 0, [_f], [() => Feature]);
export var CreateLaunchRequest = struct(
  n0,
  _CLR,
  0,
  [_p, _n, _d, _sSC, _mM, _g, _rS, _ta],
  [
    [0, 1],
    0,
    0,
    () => ScheduledSplitsLaunchConfig,
    [() => MetricMonitorConfigList, 0],
    () => LaunchGroupConfigList,
    0,
    128 | 0,
  ]
);
export var CreateLaunchResponse = struct(n0, _CLRr, 0, [_l], [[() => Launch, 0]]);
export var CreateProjectRequest = struct(
  n0,
  _CPR,
  0,
  [_n, _d, _dD, _aCR, _ta],
  [0, 0, () => ProjectDataDeliveryConfig, () => ProjectAppConfigResourceConfig, 128 | 0]
);
export var CreateProjectResponse = struct(n0, _CPRr, 0, [_p], [() => Project]);
export var CreateSegmentRequest = struct(n0, _CSR, 0, [_n, _pa, _d, _ta], [0, [() => SegmentPattern, 0], 0, 128 | 0]);
export var CreateSegmentResponse = struct(n0, _CSRr, 0, [_s], [[() => Segment, 0]]);
export var ProjectAppConfigResourceConfig = struct(n0, _PACRC, 0, [_aI, _eIn], [0, 0]);
export var ProjectDataDeliveryConfig = struct(
  n0,
  _PDDC,
  0,
  [_sD, _cWL],
  [() => S3DestinationConfig, () => CloudWatchLogsDestinationConfig]
);
export var S3DestinationConfig = struct(n0, _SDC, 0, [_b, _pre], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var StartExperimentRequest = struct(n0, _SER, 0, [_p, _ex, _aCT], [[0, 1], [0, 1], 4]);
export var StartExperimentResponse = struct(n0, _SERt, 0, [_sT], [4]);
export var StartLaunchRequest = struct(
  n0,
  _SLR,
  0,
  [_p, _l],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StartLaunchResponse = struct(n0, _SLRt, 0, [_l], [[() => Launch, 0]]);
export var StopExperimentRequest = struct(n0, _SERto, 0, [_p, _ex, _dS, _rea], [[0, 1], [0, 1], 0, 0]);
export var StopExperimentResponse = struct(n0, _SERtop, 0, [_eT], [4]);
export var UpdateFeatureRequest = struct(
  n0,
  _UFR,
  0,
  [_p, _f, _eS, _d, _aOUV, _rV, _dV, _eO],
  [[0, 1], [0, 1], 0, 0, () => VariationConfigsList, 64 | 0, 0, 128 | 0]
);
export var UpdateFeatureResponse = struct(n0, _UFRp, 0, [_f], [() => Feature]);
export var UpdateProjectDataDeliveryRequest = struct(
  n0,
  _UPDDR,
  0,
  [_p, _sD, _cWL],
  [[0, 1], () => S3DestinationConfig, () => CloudWatchLogsDestinationConfig]
);
export var UpdateProjectDataDeliveryResponse = struct(n0, _UPDDRp, 0, [_p], [() => Project]);
export var UpdateProjectRequest = struct(
  n0,
  _UPR,
  0,
  [_p, _aCR, _d],
  [[0, 1], () => ProjectAppConfigResourceConfig, 0]
);
export var UpdateProjectResponse = struct(n0, _UPRp, 0, [_p], [() => Project]);
export var VariationConfig = struct(n0, _VC, 0, [_n, _val], [0, () => VariableValue]);
export var VariationConfigsList = list(n0, _VCL, 0, () => VariationConfig);
export var VariationNameList = 64 | 0;

export var CreateExperiment = op(
  n0,
  _CEr,
  {
    [_h]: ["POST", "/projects/{project}/experiments", 200],
  },
  () => CreateExperimentRequest,
  () => CreateExperimentResponse
);
export var CreateFeature = op(
  n0,
  _CF,
  {
    [_h]: ["POST", "/projects/{project}/features", 200],
  },
  () => CreateFeatureRequest,
  () => CreateFeatureResponse
);
export var CreateLaunch = op(
  n0,
  _CL,
  {
    [_h]: ["POST", "/projects/{project}/launches", 200],
  },
  () => CreateLaunchRequest,
  () => CreateLaunchResponse
);
export var CreateProject = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/projects", 200],
  },
  () => CreateProjectRequest,
  () => CreateProjectResponse
);
export var CreateSegment = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/segments", 200],
  },
  () => CreateSegmentRequest,
  () => CreateSegmentResponse
);
export var StartExperiment = op(
  n0,
  _SE,
  {
    [_h]: ["POST", "/projects/{project}/experiments/{experiment}/start", 200],
  },
  () => StartExperimentRequest,
  () => StartExperimentResponse
);
export var StartLaunch = op(
  n0,
  _SLt,
  {
    [_h]: ["POST", "/projects/{project}/launches/{launch}/start", 200],
  },
  () => StartLaunchRequest,
  () => StartLaunchResponse
);
export var StopExperiment = op(
  n0,
  _SEt,
  {
    [_h]: ["POST", "/projects/{project}/experiments/{experiment}/cancel", 200],
  },
  () => StopExperimentRequest,
  () => StopExperimentResponse
);
export var UpdateFeature = op(
  n0,
  _UF,
  {
    [_h]: ["PATCH", "/projects/{project}/features/{feature}", 200],
  },
  () => UpdateFeatureRequest,
  () => UpdateFeatureResponse
);
export var UpdateProject = op(
  n0,
  _UP,
  {
    [_h]: ["PATCH", "/projects/{project}", 200],
  },
  () => UpdateProjectRequest,
  () => UpdateProjectResponse
);
export var UpdateProjectDataDelivery = op(
  n0,
  _UPDD,
  {
    [_h]: ["PATCH", "/projects/{project}/data-delivery", 200],
  },
  () => UpdateProjectDataDeliveryRequest,
  () => UpdateProjectDataDeliveryResponse
);
