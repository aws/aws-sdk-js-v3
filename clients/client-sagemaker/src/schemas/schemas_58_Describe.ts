// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AAr,
  _AN,
  _ANr,
  _AT,
  _ATr,
  _Av,
  _CAR,
  _CArea,
  _CAreater,
  _CARr,
  _CARreat,
  _CARreate,
  _CB,
  _CIom,
  _Cou,
  _CT,
  _CTCR,
  _CTCr,
  _CTCRr,
  _CTR,
  _CTr,
  _CTRr,
  _D,
  _DAes,
  _DAescri,
  _DARes,
  _DAResc,
  _DARescrib,
  _DARescribe,
  _DNi,
  _DTCe,
  _DTCRes,
  _DTCResc,
  _DTes,
  _DTRes,
  _DTResc,
  _ENx,
  _ETn,
  _GB,
  _IAn,
  _Las,
  _LGA,
  _LMB,
  _LMT,
  _Ma,
  _Met,
  _Mi,
  _MN,
  _MP,
  _OA,
  _P,
  _PIro,
  _Pr,
  _Rep,
  _S,
  _SA,
  _SDtd,
  _So,
  _St,
  _STt,
  _T,
  _TA,
  _TCA,
  _TCMS,
  _TCMSr,
  _TCN,
  _TCSrial,
  _TN,
  _TSi,
  n0,
  TagList,
  UserContext,
} from "./schemas_0";
import { TrialSource } from "./schemas_43_Trial";
import { ActionSource, ArtifactSource } from "./schemas_50_Artifact";
import {
  TrialComponentArtifacts,
  TrialComponentParameters,
  TrialComponentSource,
  TrialComponentStatus,
} from "./schemas_91_Trial";

/* eslint no-var: 0 */

export var CreateActionRequest = struct(
  n0,
  _CAR,
  0,
  [_AN, _S, _AT, _D, _St, _Pr, _MP, _T],
  [0, () => ActionSource, 0, 0, 0, 128 | 0, () => MetadataProperties, () => TagList]
);
export var CreateActionResponse = struct(n0, _CARr, 0, [_AA], [0]);
export var CreateArtifactRequest = struct(
  n0,
  _CARreat,
  0,
  [_ANr, _S, _ATr, _Pr, _MP, _T],
  [0, () => ArtifactSource, 0, 128 | 0, () => MetadataProperties, () => TagList]
);
export var CreateArtifactResponse = struct(n0, _CARreate, 0, [_AAr], [0]);
export var CreateTrialComponentRequest = struct(
  n0,
  _CTCR,
  0,
  [_TCN, _DNi, _St, _STt, _ETn, _P, _IAn, _OA, _MP, _T],
  [
    0,
    0,
    () => TrialComponentStatus,
    4,
    4,
    () => TrialComponentParameters,
    () => TrialComponentArtifacts,
    () => TrialComponentArtifacts,
    () => MetadataProperties,
    () => TagList,
  ]
);
export var CreateTrialComponentResponse = struct(n0, _CTCRr, 0, [_TCA], [0]);
export var CreateTrialRequest = struct(
  n0,
  _CTR,
  0,
  [_TN, _DNi, _ENx, _MP, _T],
  [0, 0, 0, () => MetadataProperties, () => TagList]
);
export var CreateTrialResponse = struct(n0, _CTRr, 0, [_TA], [0]);
export var DescribeActionRequest = struct(n0, _DARes, 0, [_AN], [0]);
export var DescribeActionResponse = struct(
  n0,
  _DAResc,
  0,
  [_AN, _AA, _S, _AT, _D, _St, _Pr, _CT, _CB, _LMT, _LMB, _MP, _LGA],
  [0, 0, () => ActionSource, 0, 0, 0, 128 | 0, 4, () => UserContext, 4, () => UserContext, () => MetadataProperties, 0]
);
export var DescribeArtifactRequest = struct(n0, _DARescrib, 0, [_AAr], [0]);
export var DescribeArtifactResponse = struct(
  n0,
  _DARescribe,
  0,
  [_ANr, _AAr, _S, _ATr, _Pr, _CT, _CB, _LMT, _LMB, _MP, _LGA],
  [0, 0, () => ArtifactSource, 0, 128 | 0, 4, () => UserContext, 4, () => UserContext, () => MetadataProperties, 0]
);
export var DescribeTrialComponentRequest = struct(n0, _DTCRes, 0, [_TCN], [0]);
export var DescribeTrialComponentResponse = struct(
  n0,
  _DTCResc,
  0,
  [_TCN, _TCA, _DNi, _S, _St, _STt, _ETn, _CT, _CB, _LMT, _LMB, _P, _IAn, _OA, _MP, _Met, _LGA, _So],
  [
    0,
    0,
    0,
    () => TrialComponentSource,
    () => TrialComponentStatus,
    4,
    4,
    4,
    () => UserContext,
    4,
    () => UserContext,
    () => TrialComponentParameters,
    () => TrialComponentArtifacts,
    () => TrialComponentArtifacts,
    () => MetadataProperties,
    () => TrialComponentMetricSummaries,
    0,
    () => TrialComponentSources,
  ]
);
export var DescribeTrialRequest = struct(n0, _DTRes, 0, [_TN], [0]);
export var DescribeTrialResponse = struct(
  n0,
  _DTResc,
  0,
  [_TN, _TA, _DNi, _ENx, _S, _CT, _CB, _LMT, _LMB, _MP],
  [0, 0, 0, 0, () => TrialSource, 4, () => UserContext, 4, () => UserContext, () => MetadataProperties]
);
export var MetadataProperties = struct(n0, _MP, 0, [_CIom, _Rep, _GB, _PIro], [0, 0, 0, 0]);
export var TrialComponentMetricSummary = struct(
  n0,
  _TCMS,
  0,
  [_MN, _SA, _TSi, _Ma, _Mi, _Las, _Cou, _Av, _SDtd],
  [0, 0, 4, 1, 1, 1, 1, 1, 1]
);
export var TrialComponentMetricSummaries = list(n0, _TCMSr, 0, () => TrialComponentMetricSummary);
export var TrialComponentSources = list(n0, _TCSrial, 0, () => TrialComponentSource);
export var CreateAction = op(
  n0,
  _CArea,
  0,
  () => CreateActionRequest,
  () => CreateActionResponse
);
export var CreateArtifact = op(
  n0,
  _CAreater,
  0,
  () => CreateArtifactRequest,
  () => CreateArtifactResponse
);
export var CreateTrial = op(
  n0,
  _CTr,
  0,
  () => CreateTrialRequest,
  () => CreateTrialResponse
);
export var CreateTrialComponent = op(
  n0,
  _CTCr,
  0,
  () => CreateTrialComponentRequest,
  () => CreateTrialComponentResponse
);
export var DescribeAction = op(
  n0,
  _DAes,
  0,
  () => DescribeActionRequest,
  () => DescribeActionResponse
);
export var DescribeArtifact = op(
  n0,
  _DAescri,
  0,
  () => DescribeArtifactRequest,
  () => DescribeArtifactResponse
);
export var DescribeTrial = op(
  n0,
  _DTes,
  0,
  () => DescribeTrialRequest,
  () => DescribeTrialResponse
);
export var DescribeTrialComponent = op(
  n0,
  _DTCe,
  0,
  () => DescribeTrialComponentRequest,
  () => DescribeTrialComponentResponse
);
