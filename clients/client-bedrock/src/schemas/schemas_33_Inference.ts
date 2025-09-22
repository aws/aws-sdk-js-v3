// smithy-typescript generated code
import { op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _cF,
  _CIP,
  _CIPR,
  _CIPRr,
  _cRT,
  _d,
  _ht,
  _iPA,
  _IPD,
  _IPMS,
  _iPN,
  _mS,
  _s,
  _ta,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InferenceProfileDescription = sim(n0, _IPD, 0, 8);
export var CreateInferenceProfileRequest = struct(
  n0,
  _CIPR,
  0,
  [_iPN, _d, _cRT, _mS, _ta],
  [0, [() => InferenceProfileDescription, 0], [0, 4], () => InferenceProfileModelSource, () => TagList]
);
export var CreateInferenceProfileResponse = struct(n0, _CIPRr, 0, [_iPA, _s], [0, 0]);
export var InferenceProfileModelSource = uni(n0, _IPMS, 0, [_cF], [0]);
export var CreateInferenceProfile = op(
  n0,
  _CIP,
  {
    [_ht]: ["POST", "/inference-profiles", 201],
  },
  () => CreateInferenceProfileRequest,
  () => CreateInferenceProfileResponse
);
