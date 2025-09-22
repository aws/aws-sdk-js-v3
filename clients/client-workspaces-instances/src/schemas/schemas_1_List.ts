// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import { _ITI, _ITn, _ITns, _LIT, _LITR, _LITRi, _LR, _LRR, _LRRi, _MR, _NT, _R, _Re, _RL, _RN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var NextToken = sim(n0, _NT, 0, 8);
export var InstanceTypeInfo = struct(n0, _ITI, 0, [_ITn], [0]);
export var ListInstanceTypesRequest = struct(n0, _LITR, 0, [_MR, _NT], [1, [() => NextToken, 0]]);
export var ListInstanceTypesResponse = struct(n0, _LITRi, 0, [_ITns, _NT], [() => InstanceTypes, [() => NextToken, 0]]);
export var ListRegionsRequest = struct(n0, _LRR, 0, [_MR, _NT], [1, [() => NextToken, 0]]);
export var ListRegionsResponse = struct(n0, _LRRi, 0, [_R, _NT], [() => RegionList, [() => NextToken, 0]]);
export var Region = struct(n0, _Re, 0, [_RN], [0]);
export var InstanceTypes = list(n0, _ITns, 0, () => InstanceTypeInfo);
export var RegionList = list(n0, _RL, 0, () => Region);
export var ListInstanceTypes = op(
  n0,
  _LIT,
  0,
  () => ListInstanceTypesRequest,
  () => ListInstanceTypesResponse
);
export var ListRegions = op(
  n0,
  _LR,
  0,
  () => ListRegionsRequest,
  () => ListRegionsResponse
);
