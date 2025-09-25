// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _AC,
  _c,
  _CDR,
  _CDr,
  _CDRr,
  _CEr,
  _Co,
  _CP,
  _CPJ,
  _CPJR,
  _CPJRr,
  _CPR,
  _CPRr,
  _CRJ,
  _CRJR,
  _CRJRr,
  _CRR,
  _CRr,
  _CRre,
  _CRRr,
  _CRRre,
  _CRRrea,
  _CSI,
  _CSR,
  _CSr,
  _CSRr,
  _D,
  _DCO,
  _DN,
  _DO,
  _e,
  _EKA,
  _EM,
  _F,
  _FO,
  _h,
  _hE,
  _I,
  _JN,
  _JS,
  _LS,
  _M,
  _MC,
  _MR,
  _N,
  _O,
  _OL,
  _PN,
  _PO,
  _PR,
  _PRR,
  _PRRu,
  _RA,
  _RI,
  _RN,
  _RR,
  _Ru,
  _Sa,
  _SJR,
  _SJRR,
  _SJRRt,
  _SPS,
  _SPSR,
  _SPSRt,
  _SQEE,
  _St,
  _T,
  _TA,
  _Ti,
  _US,
  _USR,
  _USRp,
  _VC,
  n0,
} from "./schemas_0";
import {
  DatabaseOutputList,
  DataCatalogOutputList,
  FormatOptions,
  Input,
  OutputList,
  PathOptions,
  RecipeReference,
} from "./schemas_1_Job";
import { ProfileConfiguration, RecipeStepList } from "./schemas_4_Recipe";
import { JobSample, ValidationConfigurationList } from "./schemas_10_Job";
import { RuleList } from "./schemas_11_Job";
import { Sample } from "./schemas_14_Project";
import { S3Location } from "./schemas_20_Job";
import { ClientSessionId } from "./schemas_21_Project";

/* eslint no-var: 0 */

export var CreateDatasetRequest = struct(
  n0,
  _CDR,
  0,
  [_N, _F, _FO, _I, _PO, _T],
  [0, 0, () => FormatOptions, () => Input, () => PathOptions, 128 | 0]
);
export var CreateDatasetResponse = struct(n0, _CDRr, 0, [_N], [0]);
export var CreateProfileJobRequest = struct(
  n0,
  _CPJR,
  0,
  [_DN, _EKA, _EM, _N, _LS, _MC, _MR, _OL, _Co, _VC, _RA, _T, _Ti, _JS],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    () => S3Location,
    () => ProfileConfiguration,
    () => ValidationConfigurationList,
    0,
    128 | 0,
    1,
    () => JobSample,
  ]
);
export var CreateProfileJobResponse = struct(n0, _CPJRr, 0, [_N], [0]);
export var CreateProjectRequest = struct(
  n0,
  _CPR,
  0,
  [_DN, _N, _RN, _Sa, _RA, _T],
  [0, 0, 0, () => Sample, 0, 128 | 0]
);
export var CreateProjectResponse = struct(n0, _CPRr, 0, [_N], [0]);
export var CreateRecipeJobRequest = struct(
  n0,
  _CRJR,
  0,
  [_DN, _EKA, _EM, _N, _LS, _MC, _MR, _O, _DCO, _DO, _PN, _RR, _RA, _T, _Ti],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    () => OutputList,
    () => DataCatalogOutputList,
    () => DatabaseOutputList,
    0,
    () => RecipeReference,
    0,
    128 | 0,
    1,
  ]
);
export var CreateRecipeJobResponse = struct(n0, _CRJRr, 0, [_N], [0]);
export var CreateRecipeRequest = struct(n0, _CRR, 0, [_D, _N, _St, _T], [0, 0, () => RecipeStepList, 128 | 0]);
export var CreateRecipeResponse = struct(n0, _CRRr, 0, [_N], [0]);
export var CreateRulesetRequest = struct(n0, _CRRre, 0, [_N, _D, _TA, _Ru, _T], [0, 0, 0, () => RuleList, 128 | 0]);
export var CreateRulesetResponse = struct(n0, _CRRrea, 0, [_N], [0]);
export var CreateScheduleRequest = struct(n0, _CSR, 0, [_JN, _CEr, _T, _N], [64 | 0, 0, 128 | 0, 0]);
export var CreateScheduleResponse = struct(n0, _CSRr, 0, [_N], [0]);
export var PublishRecipeRequest = struct(n0, _PRR, 0, [_D, _N], [0, [0, 1]]);
export var PublishRecipeResponse = struct(n0, _PRRu, 0, [_N], [0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var StartJobRunRequest = struct(n0, _SJRR, 0, [_N], [[0, 1]]);
export var StartJobRunResponse = struct(n0, _SJRRt, 0, [_RI], [0]);
export var StartProjectSessionRequest = struct(n0, _SPSR, 0, [_N, _AC], [[0, 1], 2]);
export var StartProjectSessionResponse = struct(n0, _SPSRt, 0, [_N, _CSI], [0, [() => ClientSessionId, 0]]);
export var UpdateScheduleRequest = struct(n0, _USR, 0, [_JN, _CEr, _N], [64 | 0, 0, [0, 1]]);
export var UpdateScheduleResponse = struct(n0, _USRp, 0, [_N], [0]);
export var CreateDataset = op(
  n0,
  _CDr,
  {
    [_h]: ["POST", "/datasets", 200],
  },
  () => CreateDatasetRequest,
  () => CreateDatasetResponse
);
export var CreateProfileJob = op(
  n0,
  _CPJ,
  {
    [_h]: ["POST", "/profileJobs", 200],
  },
  () => CreateProfileJobRequest,
  () => CreateProfileJobResponse
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
export var CreateRecipe = op(
  n0,
  _CRr,
  {
    [_h]: ["POST", "/recipes", 200],
  },
  () => CreateRecipeRequest,
  () => CreateRecipeResponse
);
export var CreateRecipeJob = op(
  n0,
  _CRJ,
  {
    [_h]: ["POST", "/recipeJobs", 200],
  },
  () => CreateRecipeJobRequest,
  () => CreateRecipeJobResponse
);
export var CreateRuleset = op(
  n0,
  _CRre,
  {
    [_h]: ["POST", "/rulesets", 200],
  },
  () => CreateRulesetRequest,
  () => CreateRulesetResponse
);
export var CreateSchedule = op(
  n0,
  _CSr,
  {
    [_h]: ["POST", "/schedules", 200],
  },
  () => CreateScheduleRequest,
  () => CreateScheduleResponse
);
export var PublishRecipe = op(
  n0,
  _PR,
  {
    [_h]: ["POST", "/recipes/{Name}/publishRecipe", 200],
  },
  () => PublishRecipeRequest,
  () => PublishRecipeResponse
);
export var StartJobRun = op(
  n0,
  _SJR,
  {
    [_h]: ["POST", "/jobs/{Name}/startJobRun", 200],
  },
  () => StartJobRunRequest,
  () => StartJobRunResponse
);
export var StartProjectSession = op(
  n0,
  _SPS,
  {
    [_h]: ["PUT", "/projects/{Name}/startProjectSession", 200],
  },
  () => StartProjectSessionRequest,
  () => StartProjectSessionResponse
);
export var UpdateSchedule = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/schedules/{Name}", 200],
  },
  () => UpdateScheduleRequest,
  () => UpdateScheduleResponse
);
