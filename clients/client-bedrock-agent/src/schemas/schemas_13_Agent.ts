// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aGI,
  _aGN,
  _AGS,
  _aGS,
  _AGSc,
  _aGSc,
  _aI,
  _aV,
  _d,
  _h,
  _LAAG,
  _LAAGR,
  _LAAGRi,
  _mR,
  _nT,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionGroupSummary = struct(n0, _AGS, 0, [_aGI, _aGN, _aGS, _d, _uA], [0, 0, 0, 0, 5]);
export var ListAgentActionGroupsRequest = struct(n0, _LAAGR, 0, [_aI, _aV, _mR, _nT], [[0, 1], [0, 1], 1, 0]);
export var ListAgentActionGroupsResponse = struct(n0, _LAAGRi, 0, [_aGSc, _nT], [() => ActionGroupSummaries, 0]);
export var ActionGroupSummaries = list(n0, _AGSc, 0, () => ActionGroupSummary);
export var ListAgentActionGroups = op(
  n0,
  _LAAG,
  {
    [_h]: ["POST", "/agents/{agentId}/agentversions/{agentVersion}/actiongroups/", 200],
  },
  () => ListAgentActionGroupsRequest,
  () => ListAgentActionGroupsResponse
);
