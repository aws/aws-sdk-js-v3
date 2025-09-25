// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _dST,
  _G,
  _GI,
  _gI,
  _gIF,
  _ht,
  _i,
  _n,
  _oF,
  _SB,
  _sFRD,
  _SIFT,
  _SIFTR,
  _SIFTRt,
  _sk,
  _SRRG,
  _SRRGR,
  _SRRGRt,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Group = struct(n0, _G, 0, [_n, _va], [0, 0]);
export var StartImportFileTaskRequest = struct(
  n0,
  _SIFTR,
  0,
  [_n, _SB, _sk, _dST, _gI, _sFRD],
  [0, 0, 0, 0, () => GroupIds, 0]
);
export var StartImportFileTaskResponse = struct(n0, _SIFTRt, 0, [_i], [0]);
export var StartRecommendationReportGenerationRequest = struct(n0, _SRRGR, 0, [_oF, _gIF], [0, () => GroupIds]);
export var StartRecommendationReportGenerationResponse = struct(n0, _SRRGRt, 0, [_i], [0]);
export var GroupIds = list(n0, _GI, 0, () => Group);
export var StartImportFileTask = op(
  n0,
  _SIFT,
  {
    [_ht]: ["POST", "/start-import-file-task", 200],
  },
  () => StartImportFileTaskRequest,
  () => StartImportFileTaskResponse
);
export var StartRecommendationReportGeneration = op(
  n0,
  _SRRG,
  {
    [_ht]: ["POST", "/start-recommendation-report-generation", 200],
  },
  () => StartRecommendationReportGenerationRequest,
  () => StartRecommendationReportGenerationResponse
);
