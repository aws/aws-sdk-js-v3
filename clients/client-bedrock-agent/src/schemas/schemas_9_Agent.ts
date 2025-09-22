// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aN,
  _AS,
  _aS,
  _ASg,
  _aSg,
  _aV,
  _AVS,
  _aVS,
  _AVSg,
  _cA,
  _d,
  _DA,
  _DAR,
  _DARe,
  _DAV,
  _DAVR,
  _DAVRe,
  _gC,
  _h,
  _hQ,
  _LA,
  _LAR,
  _LARi,
  _LAV,
  _lAV,
  _LAVR,
  _LAVRi,
  _mR,
  _nT,
  _PA,
  _pA,
  _PAR,
  _PARr,
  _sRIUC,
  _uA,
  n0,
} from "./schemas_0";
import { GuardrailConfiguration } from "./schemas_11_Flow";

/* eslint no-var: 0 */

export var AgentSummary = struct(
  n0,
  _AS,
  0,
  [_aI, _aN, _aS, _d, _uA, _lAV, _gC],
  [0, 0, 0, 0, 5, 0, () => GuardrailConfiguration]
);
export var AgentVersionSummary = struct(
  n0,
  _AVS,
  0,
  [_aN, _aS, _aV, _cA, _uA, _d, _gC],
  [0, 0, 0, 5, 5, 0, () => GuardrailConfiguration]
);
export var DeleteAgentRequest = struct(
  n0,
  _DAR,
  0,
  [_aI, _sRIUC],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _sRIUC,
      },
    ],
  ]
);
export var DeleteAgentResponse = struct(n0, _DARe, 0, [_aI, _aS], [0, 0]);
export var DeleteAgentVersionRequest = struct(
  n0,
  _DAVR,
  0,
  [_aI, _aV, _sRIUC],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _sRIUC,
      },
    ],
  ]
);
export var DeleteAgentVersionResponse = struct(n0, _DAVRe, 0, [_aI, _aV, _aS], [0, 0, 0]);
export var ListAgentsRequest = struct(n0, _LAR, 0, [_mR, _nT], [1, 0]);
export var ListAgentsResponse = struct(n0, _LARi, 0, [_aSg, _nT], [() => AgentSummaries, 0]);
export var ListAgentVersionsRequest = struct(n0, _LAVR, 0, [_aI, _mR, _nT], [[0, 1], 1, 0]);
export var ListAgentVersionsResponse = struct(n0, _LAVRi, 0, [_aVS, _nT], [() => AgentVersionSummaries, 0]);
export var PrepareAgentRequest = struct(n0, _PAR, 0, [_aI], [[0, 1]]);
export var PrepareAgentResponse = struct(n0, _PARr, 0, [_aI, _aS, _aV, _pA], [0, 0, 0, 5]);
export var AgentSummaries = list(n0, _ASg, 0, () => AgentSummary);
export var AgentVersionSummaries = list(n0, _AVSg, 0, () => AgentVersionSummary);
export var DeleteAgent = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/agents/{agentId}/", 202],
  },
  () => DeleteAgentRequest,
  () => DeleteAgentResponse
);
export var DeleteAgentVersion = op(
  n0,
  _DAV,
  {
    [_h]: ["DELETE", "/agents/{agentId}/agentversions/{agentVersion}/", 202],
  },
  () => DeleteAgentVersionRequest,
  () => DeleteAgentVersionResponse
);
export var ListAgents = op(
  n0,
  _LA,
  {
    [_h]: ["POST", "/agents/", 200],
  },
  () => ListAgentsRequest,
  () => ListAgentsResponse
);
export var ListAgentVersions = op(
  n0,
  _LAV,
  {
    [_h]: ["POST", "/agents/{agentId}/agentversions/", 200],
  },
  () => ListAgentVersionsRequest,
  () => ListAgentVersionsResponse
);
export var PrepareAgent = op(
  n0,
  _PA,
  {
    [_h]: ["POST", "/agents/{agentId}/", 202],
  },
  () => PrepareAgentRequest,
  () => PrepareAgentResponse
);
