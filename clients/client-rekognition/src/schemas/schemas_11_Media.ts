// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidManifestException as __InvalidManifestException } from "../models/index";
import {
  _AIL,
  _C,
  _c,
  _CFLS,
  _CFLSR,
  _CFLSRr,
  _CFLSRS,
  _CP,
  _CPh,
  _CRT,
  _CTom,
  _CTr,
  _DML,
  _e,
  _FDai,
  _GMAJ,
  _GMAJR,
  _GMAJRe,
  _IME,
  _In,
  _JI,
  _JN,
  _KKI,
  _L,
  _LMAJ,
  _LMAJR,
  _LMAJRi,
  _LOC,
  _M,
  _Ma,
  _MADMLC,
  _MAI,
  _MAJ,
  _MAJD,
  _MAJDe,
  _MAJFD,
  _MAMS,
  _MAMV,
  _MAOC,
  _MAOCe,
  _MAR,
  _MCi,
  _Mi,
  _Mo,
  _MR,
  _MS,
  _MV,
  _NT,
  _OC,
  _OCp,
  _PV,
  _Re,
  _SBu,
  _Se,
  _SIe,
  _SKP,
  _SMAJ,
  _SMAJR,
  _SMAJRt,
  _SO,
  _St,
  _Ty,
  _Ver,
  n0,
  S3Object,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChallengePreference = struct(n0, _CP, 0, [_Ty, _Ver], [0, () => Versions]);
export var CreateFaceLivenessSessionRequest = struct(
  n0,
  _CFLSR,
  0,
  [_KKI, _Se, _CRT],
  [0, () => CreateFaceLivenessSessionRequestSettings, 0]
);
export var CreateFaceLivenessSessionRequestSettings = struct(
  n0,
  _CFLSRS,
  0,
  [_OC, _AIL, _CPh],
  [() => LivenessOutputConfig, 1, () => ChallengePreferences]
);
export var CreateFaceLivenessSessionResponse = struct(n0, _CFLSRr, 0, [_SIe], [0]);
export var GetMediaAnalysisJobRequest = struct(n0, _GMAJR, 0, [_JI], [0]);
export var GetMediaAnalysisJobResponse = struct(
  n0,
  _GMAJRe,
  0,
  [_JI, _JN, _OCp, _St, _FDai, _CTr, _CTom, _In, _OC, _KKI, _Re, _MS],
  [
    0,
    0,
    () => MediaAnalysisOperationsConfig,
    0,
    () => MediaAnalysisJobFailureDetails,
    4,
    4,
    () => MediaAnalysisInput,
    () => MediaAnalysisOutputConfig,
    0,
    () => MediaAnalysisResults,
    () => MediaAnalysisManifestSummary,
  ]
);
export var InvalidManifestException = error(
  n0,
  _IME,
  {
    [_e]: _c,
  },
  [_M, _C, _L],
  [0, 0, 0],

  __InvalidManifestException
);
export var ListMediaAnalysisJobsRequest = struct(n0, _LMAJR, 0, [_NT, _MR], [0, 1]);
export var ListMediaAnalysisJobsResponse = struct(n0, _LMAJRi, 0, [_NT, _MAJ], [0, () => MediaAnalysisJobDescriptions]);
export var LivenessOutputConfig = struct(n0, _LOC, 0, [_SBu, _SKP], [0, 0]);
export var MediaAnalysisDetectModerationLabelsConfig = struct(n0, _MADMLC, 0, [_MCi, _PV], [1, 0]);
export var MediaAnalysisInput = struct(n0, _MAI, 0, [_SO], [() => S3Object]);
export var MediaAnalysisJobDescription = struct(
  n0,
  _MAJD,
  0,
  [_JI, _JN, _OCp, _St, _FDai, _CTr, _CTom, _In, _OC, _KKI, _Re, _MS],
  [
    0,
    0,
    () => MediaAnalysisOperationsConfig,
    0,
    () => MediaAnalysisJobFailureDetails,
    4,
    4,
    () => MediaAnalysisInput,
    () => MediaAnalysisOutputConfig,
    0,
    () => MediaAnalysisResults,
    () => MediaAnalysisManifestSummary,
  ]
);
export var MediaAnalysisJobFailureDetails = struct(n0, _MAJFD, 0, [_C, _M], [0, 0]);
export var MediaAnalysisManifestSummary = struct(n0, _MAMS, 0, [_SO], [() => S3Object]);
export var MediaAnalysisModelVersions = struct(n0, _MAMV, 0, [_Mo], [0]);
export var MediaAnalysisOperationsConfig = struct(
  n0,
  _MAOC,
  0,
  [_DML],
  [() => MediaAnalysisDetectModerationLabelsConfig]
);
export var MediaAnalysisOutputConfig = struct(n0, _MAOCe, 0, [_SBu, _SKP], [0, 0]);
export var MediaAnalysisResults = struct(n0, _MAR, 0, [_SO, _MV], [() => S3Object, () => MediaAnalysisModelVersions]);
export var StartMediaAnalysisJobRequest = struct(
  n0,
  _SMAJR,
  0,
  [_CRT, _JN, _OCp, _In, _OC, _KKI],
  [[0, 4], 0, () => MediaAnalysisOperationsConfig, () => MediaAnalysisInput, () => MediaAnalysisOutputConfig, 0]
);
export var StartMediaAnalysisJobResponse = struct(n0, _SMAJRt, 0, [_JI], [0]);
export var Versions = struct(n0, _Ver, 0, [_Mi, _Ma], [0, 0]);
export var ChallengePreferences = list(n0, _CPh, 0, () => ChallengePreference);
export var MediaAnalysisJobDescriptions = list(n0, _MAJDe, 0, () => MediaAnalysisJobDescription);
export var CreateFaceLivenessSession = op(
  n0,
  _CFLS,
  2,
  () => CreateFaceLivenessSessionRequest,
  () => CreateFaceLivenessSessionResponse
);
export var GetMediaAnalysisJob = op(
  n0,
  _GMAJ,
  0,
  () => GetMediaAnalysisJobRequest,
  () => GetMediaAnalysisJobResponse
);
export var ListMediaAnalysisJobs = op(
  n0,
  _LMAJ,
  0,
  () => ListMediaAnalysisJobsRequest,
  () => ListMediaAnalysisJobsResponse
);
export var StartMediaAnalysisJob = op(
  n0,
  _SMAJ,
  2,
  () => StartMediaAnalysisJobRequest,
  () => StartMediaAnalysisJobResponse
);
