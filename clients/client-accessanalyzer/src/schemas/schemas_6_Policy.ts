// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aRl,
  _cO,
  _cod,
  _CPG,
  _CPGR,
  _CPGRa,
  _cTA,
  _CTP,
  _cTP,
  _eT,
  _GGP,
  _GGPR,
  _GGPRe,
  _GP,
  _gP,
  _GPL,
  _GPP,
  _GPR,
  _gPR,
  _h,
  _hQ,
  _iC,
  _iRP,
  _iSLT,
  _JD,
  _jD,
  _JE,
  _jE,
  _jI,
  _m,
  _pA,
  _po,
  _pr,
  _reg,
  _s,
  _sO,
  _sT,
  _TP,
  _tP,
  _TPL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelPolicyGenerationRequest = struct(n0, _CPGR, 0, [_jI], [[0, 1]]);
export var CancelPolicyGenerationResponse = struct(n0, _CPGRa, 0, [], []);
export var CloudTrailProperties = struct(n0, _CTP, 0, [_tP, _sT, _eT], [() => TrailPropertiesList, 5, 5]);
export var GeneratedPolicy = struct(n0, _GP, 0, [_po], [0]);
export var GeneratedPolicyProperties = struct(n0, _GPP, 0, [_iC, _pA, _cTP], [2, 0, () => CloudTrailProperties]);
export var GeneratedPolicyResult = struct(
  n0,
  _GPR,
  0,
  [_pr, _gP],
  [() => GeneratedPolicyProperties, () => GeneratedPolicyList]
);
export var GetGeneratedPolicyRequest = struct(
  n0,
  _GGPR,
  0,
  [_jI, _iRP, _iSLT],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _iRP,
      },
    ],
    [
      2,
      {
        [_hQ]: _iSLT,
      },
    ],
  ]
);
export var GetGeneratedPolicyResponse = struct(
  n0,
  _GGPRe,
  0,
  [_jD, _gPR],
  [() => JobDetails, () => GeneratedPolicyResult]
);
export var JobDetails = struct(n0, _JD, 0, [_jI, _s, _sO, _cO, _jE], [0, 0, 5, 5, () => JobError]);
export var JobError = struct(n0, _JE, 0, [_cod, _m], [0, 0]);
export var TrailProperties = struct(n0, _TP, 0, [_cTA, _reg, _aRl], [0, 64 | 0, 2]);
export var GeneratedPolicyList = list(n0, _GPL, 0, () => GeneratedPolicy);
export var RegionList = 64 | 0;

export var TrailPropertiesList = list(n0, _TPL, 0, () => TrailProperties);
export var CancelPolicyGeneration = op(
  n0,
  _CPG,
  {
    [_h]: ["PUT", "/policy/generation/{jobId}", 200],
  },
  () => CancelPolicyGenerationRequest,
  () => CancelPolicyGenerationResponse
);
export var GetGeneratedPolicy = op(
  n0,
  _GGP,
  {
    [_h]: ["GET", "/policy/generation/{jobId}", 200],
  },
  () => GetGeneratedPolicyRequest,
  () => GetGeneratedPolicyResponse
);
