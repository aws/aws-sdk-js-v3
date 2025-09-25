// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aT,
  _cA,
  _cEKI,
  _cMDA,
  _cMDI,
  _cTr,
  _d,
  _eC,
  _fMa,
  _fMai,
  _GCMD,
  _GCMDR,
  _GCMDRe,
  _GEJ,
  _GEJR,
  _GEJRe,
  _ht,
  _iC,
  _jA,
  _jD,
  _jI,
  _jN,
  _jTo,
  _lMT,
  _lUA,
  _mA,
  _mDN,
  _oDC,
  _rA,
  _s,
  n0,
} from "./schemas_0";
import {
  EvaluationConfig,
  EvaluationInferenceConfig,
  EvaluationJobDescription,
  EvaluationOutputDataConfig,
} from "./schemas_5_Get";
import { EvaluationJobIdentifier } from "./schemas_29_Evaluation";

/* eslint no-var: 0 */

export var GetCustomModelDeploymentRequest = struct(n0, _GCMDR, 0, [_cMDI], [[0, 1]]);
export var GetCustomModelDeploymentResponse = struct(
  n0,
  _GCMDRe,
  0,
  [_cMDA, _mDN, _mA, _cA, _s, _d, _fMa, _lUA],
  [0, 0, 0, 5, 0, 0, 0, 5]
);
export var GetEvaluationJobRequest = struct(n0, _GEJR, 0, [_jI], [[() => EvaluationJobIdentifier, 1]]);
export var GetEvaluationJobResponse = struct(
  n0,
  _GEJRe,
  0,
  [_jN, _s, _jA, _jD, _rA, _cEKI, _jTo, _aT, _eC, _iC, _oDC, _cTr, _lMT, _fMai],
  [
    0,
    0,
    0,
    [() => EvaluationJobDescription, 0],
    0,
    0,
    0,
    0,
    [() => EvaluationConfig, 0],
    [() => EvaluationInferenceConfig, 0],
    () => EvaluationOutputDataConfig,
    5,
    5,
    64 | 0,
  ]
);
export var ErrorMessages = 64 | 0;

export var GetCustomModelDeployment = op(
  n0,
  _GCMD,
  {
    [_ht]: ["GET", "/model-customization/custom-model-deployments/{customModelDeploymentIdentifier}", 200],
  },
  () => GetCustomModelDeploymentRequest,
  () => GetCustomModelDeploymentResponse
);
export var GetEvaluationJob = op(
  n0,
  _GEJ,
  {
    [_ht]: ["GET", "/evaluation-jobs/{jobIdentifier}", 200],
  },
  () => GetEvaluationJobRequest,
  () => GetEvaluationJobResponse
);
