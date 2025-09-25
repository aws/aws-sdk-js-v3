// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GPTAM, _GPTAMI, _GPTAMR, _IPI, _IPNd, _PT, _SPTAM, _SPTAMI, _SPTAMR, _UD, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPrincipalTagAttributeMapInput = struct(n0, _GPTAMI, 0, [_IPI, _IPNd], [0, 0]);
export var GetPrincipalTagAttributeMapResponse = struct(n0, _GPTAMR, 0, [_IPI, _IPNd, _UD, _PT], [0, 0, 2, 128 | 0]);
export var SetPrincipalTagAttributeMapInput = struct(n0, _SPTAMI, 0, [_IPI, _IPNd, _UD, _PT], [0, 0, 2, 128 | 0]);
export var SetPrincipalTagAttributeMapResponse = struct(n0, _SPTAMR, 0, [_IPI, _IPNd, _UD, _PT], [0, 0, 2, 128 | 0]);
export var PrincipalTags = 128 | 0;

export var GetPrincipalTagAttributeMap = op(
  n0,
  _GPTAM,
  0,
  () => GetPrincipalTagAttributeMapInput,
  () => GetPrincipalTagAttributeMapResponse
);
export var SetPrincipalTagAttributeMap = op(
  n0,
  _SPTAM,
  0,
  () => SetPrincipalTagAttributeMapInput,
  () => SetPrincipalTagAttributeMapResponse
);
