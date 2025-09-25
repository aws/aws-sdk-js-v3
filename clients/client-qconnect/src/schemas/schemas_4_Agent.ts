// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _aAA,
  _aAC,
  _aAI,
  _aAi,
  _aAS,
  _aASi,
  _aAVS,
  _AC,
  _aC,
  _ACD,
  _aCD,
  _ACL,
  _ACn,
  _aCn,
  _aGAIGI,
  _aGAIPI,
  _aI,
  _AIAC,
  _AIAD,
  _AIAS,
  _AIASL,
  _AIAVS,
  _AIAVSL,
  _aIs,
  _ARAIAC,
  _aRAIAC,
  _aT,
  _CAIA,
  _CAIAR,
  _CAIARr,
  _CAIAV,
  _CAIAVR,
  _CAIAVRr,
  _co,
  _CSR,
  _CSr,
  _CSRr,
  _cTF,
  _cTl,
  _d,
  _GAIA,
  _GAIAR,
  _GAIARe,
  _GS,
  _GSR,
  _GSRe,
  _hQ,
  _htt,
  _iC,
  _iLGAIPI,
  _k,
  _KBACD,
  _kBACD,
  _l,
  _LAIA,
  _LAIAR,
  _LAIARi,
  _LAIAV,
  _LAIAVR,
  _LAIAVRi,
  _mR,
  _MSAIAC,
  _mSAIAC,
  _mT,
  _n,
  _nT,
  _o,
  _OC,
  _oC,
  _OCr,
  _oKBST,
  _qRAIPI,
  _s,
  _sAe,
  _SD,
  _se,
  _sI,
  _SIC,
  _sSAGAIPI,
  _SSAIAC,
  _sSAIAC,
  _sSAIGI,
  _sSPPAIPI,
  _t,
  _ta,
  _TC,
  _tCa,
  _TF,
  _tF,
  _tIA,
  _UAIA,
  _UAIAR,
  _UAIARp,
  _US,
  _USR,
  _USRp,
  _v,
  _vN,
  _vS,
  n0,
} from "./schemas_0";
import { AIAgentConfigurationMap } from "./schemas_13_Assistant";

/* eslint no-var: 0 */

export var AIAgentData = struct(
  n0,
  _AIAD,
  0,
  [_aI, _aA, _aAI, _aAA, _n, _t, _co, _mT, _d, _vS, _ta, _o, _s],
  [0, 0, 0, 0, 0, 0, () => AIAgentConfiguration, 4, 0, 0, 128 | 0, 0, 0]
);
export var AIAgentSummary = struct(
  n0,
  _AIAS,
  0,
  [_n, _aI, _aA, _aAI, _t, _aAA, _mT, _vS, _co, _o, _d, _s, _ta],
  [0, 0, 0, 0, 0, 0, 4, 0, () => AIAgentConfiguration, 0, 0, 0, 128 | 0]
);
export var AIAgentVersionSummary = struct(n0, _AIAVS, 0, [_aAS, _vN], [() => AIAgentSummary, 1]);
export var AnswerRecommendationAIAgentConfiguration = struct(
  n0,
  _ARAIAC,
  0,
  [_iLGAIPI, _qRAIPI, _aGAIPI, _aGAIGI, _aC, _l],
  [0, 0, 0, 0, () => AssociationConfigurationList, 0]
);
export var AssociationConfiguration = struct(n0, _AC, 0, [_aIs, _aT, _aCD], [0, 0, () => AssociationConfigurationData]);
export var CreateAIAgentRequest = struct(
  n0,
  _CAIAR,
  0,
  [_cTl, _aI, _n, _t, _co, _vS, _ta, _d],
  [[0, 4], [0, 1], 0, 0, () => AIAgentConfiguration, 0, 128 | 0, 0]
);
export var CreateAIAgentResponse = struct(n0, _CAIARr, 0, [_aAi], [() => AIAgentData]);
export var CreateAIAgentVersionRequest = struct(n0, _CAIAVR, 0, [_aI, _aAI, _mT, _cTl], [[0, 1], [0, 1], 4, [0, 4]]);
export var CreateAIAgentVersionResponse = struct(n0, _CAIAVRr, 0, [_aAi, _vN], [() => AIAgentData, 1]);
export var CreateSessionRequest = struct(
  n0,
  _CSR,
  0,
  [_cTl, _aI, _n, _d, _ta, _tF, _aAC],
  [[0, 4], [0, 1], 0, 0, 128 | 0, () => TagFilter, () => AIAgentConfigurationMap]
);
export var CreateSessionResponse = struct(n0, _CSRr, 0, [_se], [() => SessionData]);
export var GetAIAgentRequest = struct(
  n0,
  _GAIAR,
  0,
  [_aI, _aAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAIAgentResponse = struct(n0, _GAIARe, 0, [_aAi, _vN], [() => AIAgentData, 1]);
export var GetSessionRequest = struct(
  n0,
  _GSR,
  0,
  [_aI, _sI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSessionResponse = struct(n0, _GSRe, 0, [_se], [() => SessionData]);
export var KnowledgeBaseAssociationConfigurationData = struct(
  n0,
  _KBACD,
  0,
  [_cTF, _mR, _oKBST],
  [() => TagFilter, 1, 0]
);
export var ListAIAgentsRequest = struct(
  n0,
  _LAIAR,
  0,
  [_aI, _nT, _mR, _o],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _o,
      },
    ],
  ]
);
export var ListAIAgentsResponse = struct(n0, _LAIARi, 0, [_aASi, _nT], [() => AIAgentSummaryList, 0]);
export var ListAIAgentVersionsRequest = struct(
  n0,
  _LAIAVR,
  0,
  [_aI, _aAI, _nT, _mR, _o],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _o,
      },
    ],
  ]
);
export var ListAIAgentVersionsResponse = struct(n0, _LAIAVRi, 0, [_aAVS, _nT], [() => AIAgentVersionSummariesList, 0]);
export var ManualSearchAIAgentConfiguration = struct(
  n0,
  _MSAIAC,
  0,
  [_aGAIPI, _aGAIGI, _aC, _l],
  [0, 0, () => AssociationConfigurationList, 0]
);
export var SelfServiceAIAgentConfiguration = struct(
  n0,
  _SSAIAC,
  0,
  [_sSPPAIPI, _sSAGAIPI, _sSAIGI, _aC],
  [0, 0, 0, () => AssociationConfigurationList]
);
export var SessionData = struct(
  n0,
  _SD,
  0,
  [_sAe, _sI, _n, _d, _ta, _iC, _tF, _aAC, _o],
  [0, 0, 0, 0, 128 | 0, () => SessionIntegrationConfiguration, () => TagFilter, () => AIAgentConfigurationMap, 0]
);
export var SessionIntegrationConfiguration = struct(n0, _SIC, 0, [_tIA], [0]);
export var TagCondition = struct(n0, _TC, 0, [_k, _v], [0, 0]);
export var UpdateAIAgentRequest = struct(
  n0,
  _UAIAR,
  0,
  [_cTl, _aI, _aAI, _vS, _co, _d],
  [[0, 4], [0, 1], [0, 1], 0, () => AIAgentConfiguration, 0]
);
export var UpdateAIAgentResponse = struct(n0, _UAIARp, 0, [_aAi], [() => AIAgentData]);
export var UpdateSessionRequest = struct(
  n0,
  _USR,
  0,
  [_aI, _sI, _d, _tF, _aAC],
  [[0, 1], [0, 1], 0, () => TagFilter, () => AIAgentConfigurationMap]
);
export var UpdateSessionResponse = struct(n0, _USRp, 0, [_se], [() => SessionData]);
export var AIAgentSummaryList = list(n0, _AIASL, 0, () => AIAgentSummary);
export var AIAgentVersionSummariesList = list(n0, _AIAVSL, 0, () => AIAgentVersionSummary);
export var AndConditions = list(n0, _ACn, 0, () => TagCondition);
export var AssociationConfigurationList = list(n0, _ACL, 0, () => AssociationConfiguration);
export var OrConditions = list(n0, _OC, 0, () => OrCondition);
export var AIAgentConfiguration = uni(
  n0,
  _AIAC,
  0,
  [_mSAIAC, _aRAIAC, _sSAIAC],
  [
    () => ManualSearchAIAgentConfiguration,
    () => AnswerRecommendationAIAgentConfiguration,
    () => SelfServiceAIAgentConfiguration,
  ]
);
export var AssociationConfigurationData = uni(n0, _ACD, 0, [_kBACD], [() => KnowledgeBaseAssociationConfigurationData]);
export var OrCondition = uni(n0, _OCr, 0, [_aCn, _tCa], [() => AndConditions, () => TagCondition]);
export var TagFilter = uni(
  n0,
  _TF,
  0,
  [_tCa, _aCn, _oC],
  [() => TagCondition, () => AndConditions, () => OrConditions]
);
export var CreateAIAgent = op(
  n0,
  _CAIA,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/aiagents", 200],
  },
  () => CreateAIAgentRequest,
  () => CreateAIAgentResponse
);
export var CreateAIAgentVersion = op(
  n0,
  _CAIAV,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/aiagents/{aiAgentId}/versions", 200],
  },
  () => CreateAIAgentVersionRequest,
  () => CreateAIAgentVersionResponse
);
export var CreateSession = op(
  n0,
  _CSr,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/sessions", 200],
  },
  () => CreateSessionRequest,
  () => CreateSessionResponse
);
export var GetAIAgent = op(
  n0,
  _GAIA,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/aiagents/{aiAgentId}", 200],
  },
  () => GetAIAgentRequest,
  () => GetAIAgentResponse
);
export var GetSession = op(
  n0,
  _GS,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/sessions/{sessionId}", 200],
  },
  () => GetSessionRequest,
  () => GetSessionResponse
);
export var ListAIAgents = op(
  n0,
  _LAIA,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/aiagents", 200],
  },
  () => ListAIAgentsRequest,
  () => ListAIAgentsResponse
);
export var ListAIAgentVersions = op(
  n0,
  _LAIAV,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/aiagents/{aiAgentId}/versions", 200],
  },
  () => ListAIAgentVersionsRequest,
  () => ListAIAgentVersionsResponse
);
export var UpdateAIAgent = op(
  n0,
  _UAIA,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/aiagents/{aiAgentId}", 200],
  },
  () => UpdateAIAgentRequest,
  () => UpdateAIAgentResponse
);
export var UpdateSession = op(
  n0,
  _US,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/sessions/{sessionId}", 200],
  },
  () => UpdateSessionRequest,
  () => UpdateSessionResponse
);
