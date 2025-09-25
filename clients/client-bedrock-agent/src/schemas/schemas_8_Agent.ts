// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aAI,
  _aAN,
  _AARC,
  _AARCLI,
  _AAS,
  _aAS,
  _AASg,
  _aASg,
  _aI,
  _aIS,
  _aV,
  _cA,
  _d,
  _DAA,
  _DAAR,
  _DAARe,
  _h,
  _LAA,
  _LAAR,
  _LAARi,
  _mR,
  _nT,
  _pT,
  _rC,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AgentAliasRoutingConfigurationListItem = struct(n0, _AARCLI, 0, [_aV, _pT], [0, 0]);
export var AgentAliasSummary = struct(
  n0,
  _AAS,
  0,
  [_aAI, _aAN, _d, _rC, _aAS, _cA, _uA, _aIS],
  [0, 0, 0, () => AgentAliasRoutingConfiguration, 0, 5, 5, 0]
);
export var DeleteAgentAliasRequest = struct(
  n0,
  _DAAR,
  0,
  [_aI, _aAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAgentAliasResponse = struct(n0, _DAARe, 0, [_aI, _aAI, _aAS], [0, 0, 0]);
export var ListAgentAliasesRequest = struct(n0, _LAAR, 0, [_aI, _mR, _nT], [[0, 1], 1, 0]);
export var ListAgentAliasesResponse = struct(n0, _LAARi, 0, [_aASg, _nT], [() => AgentAliasSummaries, 0]);
export var AgentAliasRoutingConfiguration = list(n0, _AARC, 0, () => AgentAliasRoutingConfigurationListItem);
export var AgentAliasSummaries = list(n0, _AASg, 0, () => AgentAliasSummary);
export var DeleteAgentAlias = op(
  n0,
  _DAA,
  {
    [_h]: ["DELETE", "/agents/{agentId}/agentaliases/{agentAliasId}/", 202],
  },
  () => DeleteAgentAliasRequest,
  () => DeleteAgentAliasResponse
);
export var ListAgentAliases = op(
  n0,
  _LAA,
  {
    [_h]: ["POST", "/agents/{agentId}/agentaliases/", 200],
  },
  () => ListAgentAliasesRequest,
  () => ListAgentAliasesResponse
);
