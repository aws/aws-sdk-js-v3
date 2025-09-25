// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAre,
  _CBr,
  _CT,
  _DNi,
  _GLGP,
  _GLGPR,
  _GLGPRe,
  _LGA,
  _LGN,
  _LGS,
  _LGSi,
  _LLG,
  _LLGR,
  _LLGRi,
  _LMT,
  _MR,
  _NT,
  _RPes,
  _SBo,
  _SO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetLineageGroupPolicyRequest = struct(n0, _GLGPR, 0, [_LGN], [0]);
export var GetLineageGroupPolicyResponse = struct(n0, _GLGPRe, 0, [_LGA, _RPes], [0, 0]);
export var LineageGroupSummary = struct(n0, _LGS, 0, [_LGA, _LGN, _DNi, _CT, _LMT], [0, 0, 0, 4, 4]);
export var ListLineageGroupsRequest = struct(n0, _LLGR, 0, [_CAre, _CBr, _SBo, _SO, _NT, _MR], [4, 4, 0, 0, 0, 1]);
export var ListLineageGroupsResponse = struct(n0, _LLGRi, 0, [_LGSi, _NT], [() => LineageGroupSummaries, 0]);
export var LineageGroupSummaries = list(n0, _LGSi, 0, () => LineageGroupSummary);
export var GetLineageGroupPolicy = op(
  n0,
  _GLGP,
  0,
  () => GetLineageGroupPolicyRequest,
  () => GetLineageGroupPolicyResponse
);
export var ListLineageGroups = op(
  n0,
  _LLG,
  0,
  () => ListLineageGroupsRequest,
  () => ListLineageGroupsResponse
);
