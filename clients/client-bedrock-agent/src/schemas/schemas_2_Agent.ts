// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAKB,
  _AAKBR,
  _AAKBRs,
  _aI,
  _AKB,
  _aKB,
  _AKBS,
  _aKBS,
  _AKBSg,
  _aV,
  _cA,
  _d,
  _GAKB,
  _GAKBR,
  _GAKBRe,
  _h,
  _kBI,
  _kBS,
  _LAKB,
  _LAKBR,
  _LAKBRi,
  _mR,
  _nT,
  _uA,
  _UAKB,
  _UAKBR,
  _UAKBRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AgentKnowledgeBase = struct(n0, _AKB, 0, [_aI, _aV, _kBI, _d, _cA, _uA, _kBS], [0, 0, 0, 0, 5, 5, 0]);
export var AgentKnowledgeBaseSummary = struct(n0, _AKBS, 0, [_kBI, _d, _kBS, _uA], [0, 0, 0, 5]);
export var AssociateAgentKnowledgeBaseRequest = struct(
  n0,
  _AAKBR,
  0,
  [_aI, _aV, _kBI, _d, _kBS],
  [[0, 1], [0, 1], 0, 0, 0]
);
export var AssociateAgentKnowledgeBaseResponse = struct(n0, _AAKBRs, 0, [_aKB], [() => AgentKnowledgeBase]);
export var GetAgentKnowledgeBaseRequest = struct(
  n0,
  _GAKBR,
  0,
  [_aI, _aV, _kBI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetAgentKnowledgeBaseResponse = struct(n0, _GAKBRe, 0, [_aKB], [() => AgentKnowledgeBase]);
export var ListAgentKnowledgeBasesRequest = struct(n0, _LAKBR, 0, [_aI, _aV, _mR, _nT], [[0, 1], [0, 1], 1, 0]);
export var ListAgentKnowledgeBasesResponse = struct(
  n0,
  _LAKBRi,
  0,
  [_aKBS, _nT],
  [() => AgentKnowledgeBaseSummaries, 0]
);
export var UpdateAgentKnowledgeBaseRequest = struct(
  n0,
  _UAKBR,
  0,
  [_aI, _aV, _kBI, _d, _kBS],
  [[0, 1], [0, 1], [0, 1], 0, 0]
);
export var UpdateAgentKnowledgeBaseResponse = struct(n0, _UAKBRp, 0, [_aKB], [() => AgentKnowledgeBase]);
export var AgentKnowledgeBaseSummaries = list(n0, _AKBSg, 0, () => AgentKnowledgeBaseSummary);
export var AssociateAgentKnowledgeBase = op(
  n0,
  _AAKB,
  {
    [_h]: ["PUT", "/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/", 200],
  },
  () => AssociateAgentKnowledgeBaseRequest,
  () => AssociateAgentKnowledgeBaseResponse
);
export var GetAgentKnowledgeBase = op(
  n0,
  _GAKB,
  {
    [_h]: ["GET", "/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/", 200],
  },
  () => GetAgentKnowledgeBaseRequest,
  () => GetAgentKnowledgeBaseResponse
);
export var ListAgentKnowledgeBases = op(
  n0,
  _LAKB,
  {
    [_h]: ["POST", "/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/", 200],
  },
  () => ListAgentKnowledgeBasesRequest,
  () => ListAgentKnowledgeBasesResponse
);
export var UpdateAgentKnowledgeBase = op(
  n0,
  _UAKB,
  {
    [_h]: ["PUT", "/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/", 200],
  },
  () => UpdateAgentKnowledgeBaseRequest,
  () => UpdateAgentKnowledgeBaseResponse
);
