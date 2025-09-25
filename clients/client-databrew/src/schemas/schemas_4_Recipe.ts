// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _AIc,
  _An,
  _AS,
  _ASL,
  _C,
  _CE,
  _CEL,
  _CEon,
  _Co,
  _CR,
  _CSC,
  _CSCL,
  _CSCo,
  _CSI,
  _D,
  _DSC,
  _EDC,
  _EKA,
  _EM,
  _ETn,
  _h,
  _HC,
  _IS,
  _JS,
  _LS,
  _MC,
  _MR,
  _N,
  _OL,
  _Op,
  _Ove,
  _Pa,
  _PC,
  _PCr,
  _Pre,
  _RA,
  _RAec,
  _Res,
  _RRo,
  _RS,
  _RSL,
  _S,
  _SC,
  _SCI,
  _Se,
  _SIt,
  _SOL,
  _SOta,
  _SPSA,
  _SPSAR,
  _SPSARe,
  _SRI,
  _St,
  _Stat,
  _TC,
  _Ti,
  _UPJ,
  _UPJR,
  _UPJRp,
  _URp,
  _URRp,
  _URRpd,
  _V,
  _VC,
  _VF,
  n0,
} from "./schemas_0";
import { JobSample, ValidationConfigurationList } from "./schemas_10_Job";
import { ColumnSelectorList } from "./schemas_11_Job";
import { S3Location } from "./schemas_20_Job";
import { ClientSessionId } from "./schemas_21_Project";

/* eslint no-var: 0 */

export var AllowedStatistics = struct(n0, _AS, 0, [_S], [64 | 0]);
export var ColumnStatisticsConfiguration = struct(
  n0,
  _CSC,
  0,
  [_Se, _S],
  [() => ColumnSelectorList, () => StatisticsConfiguration]
);
export var ConditionExpression = struct(n0, _CE, 0, [_C, _V, _TC], [0, 0, 0]);
export var EntityDetectorConfiguration = struct(n0, _EDC, 0, [_ETn, _AS], [64 | 0, () => AllowedStatisticList]);
export var ProfileConfiguration = struct(
  n0,
  _PC,
  0,
  [_DSC, _PCr, _CSCo, _EDC],
  [
    () => StatisticsConfiguration,
    () => ColumnSelectorList,
    () => ColumnStatisticsConfigurationList,
    () => EntityDetectorConfiguration,
  ]
);
export var RecipeAction = struct(n0, _RAec, 0, [_Op, _Pa], [0, 128 | 0]);
export var RecipeStep = struct(n0, _RS, 0, [_Ac, _CEon], [() => RecipeAction, () => ConditionExpressionList]);
export var SendProjectSessionActionRequest = struct(
  n0,
  _SPSAR,
  0,
  [_Pre, _N, _RS, _SIt, _CSI, _VF],
  [2, [0, 1], () => RecipeStep, 1, [() => ClientSessionId, 0], () => ViewFrame]
);
export var SendProjectSessionActionResponse = struct(n0, _SPSARe, 0, [_Res, _N, _AIc], [0, 0, 1]);
export var StatisticOverride = struct(n0, _SOta, 0, [_Stat, _Pa], [0, 128 | 0]);
export var StatisticsConfiguration = struct(n0, _SC, 0, [_IS, _Ove], [64 | 0, () => StatisticOverrideList]);
export var UpdateProfileJobRequest = struct(
  n0,
  _UPJR,
  0,
  [_Co, _EKA, _EM, _N, _LS, _MC, _MR, _OL, _VC, _RA, _Ti, _JS],
  [
    () => ProfileConfiguration,
    0,
    0,
    [0, 1],
    0,
    1,
    1,
    () => S3Location,
    () => ValidationConfigurationList,
    0,
    1,
    () => JobSample,
  ]
);
export var UpdateProfileJobResponse = struct(n0, _UPJRp, 0, [_N], [0]);
export var UpdateRecipeRequest = struct(n0, _URRp, 0, [_D, _N, _St], [0, [0, 1], () => RecipeStepList]);
export var UpdateRecipeResponse = struct(n0, _URRpd, 0, [_N], [0]);
export var ViewFrame = struct(n0, _VF, 0, [_SCI, _CR, _HC, _SRI, _RRo, _An], [1, 1, 64 | 0, 1, 1, 0]);
export var AllowedStatisticList = list(n0, _ASL, 0, () => AllowedStatistics);
export var ColumnStatisticsConfigurationList = list(n0, _CSCL, 0, () => ColumnStatisticsConfiguration);
export var ConditionExpressionList = list(n0, _CEL, 0, () => ConditionExpression);
export var EntityTypeList = 64 | 0;

export var HiddenColumnList = 64 | 0;

export var RecipeStepList = list(n0, _RSL, 0, () => RecipeStep);
export var StatisticList = 64 | 0;

export var StatisticOverrideList = list(n0, _SOL, 0, () => StatisticOverride);
export var ParameterMap = 128 | 0;

export var SendProjectSessionAction = op(
  n0,
  _SPSA,
  {
    [_h]: ["PUT", "/projects/{Name}/sendProjectSessionAction", 200],
  },
  () => SendProjectSessionActionRequest,
  () => SendProjectSessionActionResponse
);
export var UpdateProfileJob = op(
  n0,
  _UPJ,
  {
    [_h]: ["PUT", "/profileJobs/{Name}", 200],
  },
  () => UpdateProfileJobRequest,
  () => UpdateProfileJobResponse
);
export var UpdateRecipe = op(
  n0,
  _URp,
  {
    [_h]: ["PUT", "/recipes/{Name}", 200],
  },
  () => UpdateRecipeRequest,
  () => UpdateRecipeResponse
);
