// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _d,
  _GIP,
  _GIPR,
  _GIPRe,
  _hQ,
  _ht,
  _iPA,
  _iPI,
  _iPIn,
  _IPM,
  _IPMn,
  _iPN,
  _IPS,
  _iPS,
  _IPSn,
  _LIP,
  _LIPR,
  _LIPRi,
  _mA,
  _mo,
  _mR,
  _nT,
  _s,
  _tE,
  _ty,
  _uA,
  n0,
} from "./schemas_0";
import { InferenceProfileDescription } from "./schemas_33_Inference";

/* eslint no-var: 0 */

export var GetInferenceProfileRequest = struct(n0, _GIPR, 0, [_iPI], [[0, 1]]);
export var GetInferenceProfileResponse = struct(
  n0,
  _GIPRe,
  0,
  [_iPN, _d, _cA, _uA, _iPA, _mo, _iPIn, _s, _ty],
  [0, [() => InferenceProfileDescription, 0], 5, 5, 0, () => InferenceProfileModels, 0, 0, 0]
);
export var InferenceProfileModel = struct(n0, _IPM, 0, [_mA], [0]);
export var InferenceProfileSummary = struct(
  n0,
  _IPS,
  0,
  [_iPN, _d, _cA, _uA, _iPA, _mo, _iPIn, _s, _ty],
  [0, [() => InferenceProfileDescription, 0], 5, 5, 0, () => InferenceProfileModels, 0, 0, 0]
);
export var ListInferenceProfilesRequest = struct(
  n0,
  _LIPR,
  0,
  [_mR, _nT, _tE],
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
        [_hQ]: _ty,
      },
    ],
  ]
);
export var ListInferenceProfilesResponse = struct(
  n0,
  _LIPRi,
  0,
  [_iPS, _nT],
  [[() => InferenceProfileSummaries, 0], 0]
);
export var InferenceProfileModels = list(n0, _IPMn, 0, () => InferenceProfileModel);
export var InferenceProfileSummaries = list(n0, _IPSn, 0, [() => InferenceProfileSummary, 0]);
export var GetInferenceProfile = op(
  n0,
  _GIP,
  {
    [_ht]: ["GET", "/inference-profiles/{inferenceProfileIdentifier}", 200],
  },
  () => GetInferenceProfileRequest,
  () => GetInferenceProfileResponse
);
export var ListInferenceProfiles = op(
  n0,
  _LIP,
  {
    [_ht]: ["GET", "/inference-profiles", 200],
  },
  () => ListInferenceProfilesRequest,
  () => ListInferenceProfilesResponse
);
