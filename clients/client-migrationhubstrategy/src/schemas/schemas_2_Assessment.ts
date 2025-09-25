// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { DependencyException as __DependencyException } from "../models/index";
import {
  _aDST,
  _aI,
  _AT,
  _ATs,
  _aTs,
  _con,
  _DE,
  _e,
  _GLAI,
  _GLAIR,
  _GLAIRe,
  _hE,
  _ht,
  _i,
  _m,
  _n,
  _SA,
  _SAR,
  _SARt,
  _SARto,
  _SARtop,
  _SAt,
  _serv,
  _sFAD,
  _sFRD,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssessmentTarget = struct(n0, _AT, 0, [_con, _n, _v], [0, 0, 64 | 0]);
export var DependencyException = error(
  n0,
  _DE,
  {
    [_e]: _serv,
    [_hE]: 500,
  },
  [_m],
  [0],

  __DependencyException
);
export var GetLatestAssessmentIdRequest = struct(n0, _GLAIR, 0, [], []);
export var GetLatestAssessmentIdResponse = struct(n0, _GLAIRe, 0, [_i], [0]);
export var StartAssessmentRequest = struct(
  n0,
  _SAR,
  0,
  [_sFAD, _sFRD, _aTs, _aDST],
  [0, 0, () => AssessmentTargets, 0]
);
export var StartAssessmentResponse = struct(n0, _SARt, 0, [_aI], [0]);
export var StopAssessmentRequest = struct(n0, _SARto, 0, [_aI], [0]);
export var StopAssessmentResponse = struct(n0, _SARtop, 0, [], []);
export var AssessmentTargets = list(n0, _ATs, 0, () => AssessmentTarget);
export var AssessmentTargetValues = 64 | 0;

export var GetLatestAssessmentId = op(
  n0,
  _GLAI,
  {
    [_ht]: ["GET", "/get-latest-assessment-id", 200],
  },
  () => GetLatestAssessmentIdRequest,
  () => GetLatestAssessmentIdResponse
);
export var StartAssessment = op(
  n0,
  _SA,
  {
    [_ht]: ["POST", "/start-assessment", 200],
  },
  () => StartAssessmentRequest,
  () => StartAssessmentResponse
);
export var StopAssessment = op(
  n0,
  _SAt,
  {
    [_ht]: ["POST", "/stop-assessment", 200],
  },
  () => StopAssessmentRequest,
  () => StopAssessmentResponse
);
