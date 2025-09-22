// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _d, _DPGS, _DPGSL, _i, _it, _LDPG, _LDPGI, _LDPGO, _mR, _n, _nTe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DbParameterGroupSummary = struct(n0, _DPGS, 0, [_i, _n, _a, _d], [0, 0, 0, 0]);
export var ListDbParameterGroupsInput = struct(n0, _LDPGI, 0, [_nTe, _mR], [0, 1]);
export var ListDbParameterGroupsOutput = struct(n0, _LDPGO, 0, [_it, _nTe], [() => DbParameterGroupSummaryList, 0]);
export var DbParameterGroupSummaryList = list(n0, _DPGSL, 0, () => DbParameterGroupSummary);
export var ListDbParameterGroups = op(
  n0,
  _LDPG,
  0,
  () => ListDbParameterGroupsInput,
  () => ListDbParameterGroupsOutput
);
