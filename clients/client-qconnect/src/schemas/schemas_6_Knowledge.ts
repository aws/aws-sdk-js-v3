// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _aAC,
  _aAT,
  _ACC,
  _AD,
  _aI,
  _aIA,
  _AIC,
  _AICs,
  _aIp,
  _AL,
  _AS,
  _aS,
  _as,
  _bFMC,
  _BFMCFP,
  _bPT,
  _bSu,
  _CAR,
  _CAr,
  _CARr,
  _CC,
  _cC,
  _cCh,
  _CKB,
  _CKBR,
  _CKBRr,
  _cL,
  _co,
  _cS,
  _cTl,
  _d,
  _eF,
  _FSCC,
  _fSCC,
  _GA,
  _GAR,
  _GARe,
  _GKB,
  _GKBR,
  _GKBRe,
  _HCC,
  _hCC,
  _HCLC,
  _HCLCi,
  _hQ,
  _htt,
  _iC,
  _iF,
  _iFR,
  _iSn,
  _kB,
  _kBA,
  _KBD,
  _kBI,
  _KBL,
  _KBS,
  _kBS,
  _kBT,
  _kKI,
  _LA,
  _LAR,
  _LARi,
  _lC,
  _lCMT,
  _LKB,
  _LKBR,
  _LKBRi,
  _mA,
  _mR,
  _MSC,
  _mSC,
  _mTa,
  _n,
  _nT,
  _oF,
  _oP,
  _oT,
  _PC,
  _pCa,
  _PP,
  _pP,
  _pPT,
  _pS,
  _RC,
  _rCe,
  _rLa,
  _s,
  _SC,
  _sC,
  _sc,
  _SCC,
  _sCC,
  _SSEC,
  _sSEC,
  _SU,
  _sU,
  _SUe,
  _t,
  _ta,
  _tIA,
  _tU,
  _u,
  _UAAIA,
  _UAAIAR,
  _UAAIARp,
  _UC,
  _uC,
  _UFL,
  _UFP,
  _UKBTU,
  _UKBTUR,
  _UKBTURp,
  _VIC,
  _vIC,
  _WCC,
  _wCC,
  _WCL,
  n0,
} from "./schemas_0";
import { AIAgentConfigurationData, AIAgentConfigurationMap } from "./schemas_13_Assistant";

/* eslint no-var: 0 */

export var UrlFilterPattern = sim(n0, _UFP, 0, 8);
export var AppIntegrationsConfiguration = struct(n0, _AIC, 0, [_aIA, _oF], [0, 64 | 0]);
export var AssistantCapabilityConfiguration = struct(n0, _ACC, 0, [_t], [0]);
export var AssistantData = struct(
  n0,
  _AD,
  0,
  [_aI, _aA, _n, _t, _s, _d, _ta, _sSEC, _iC, _cC, _aAC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    128 | 0,
    () => ServerSideEncryptionConfiguration,
    () => AssistantIntegrationConfiguration,
    () => AssistantCapabilityConfiguration,
    () => AIAgentConfigurationMap,
  ]
);
export var AssistantIntegrationConfiguration = struct(n0, _AICs, 0, [_tIA], [0]);
export var AssistantSummary = struct(
  n0,
  _AS,
  0,
  [_aI, _aA, _n, _t, _s, _d, _ta, _sSEC, _iC, _cC, _aAC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    128 | 0,
    () => ServerSideEncryptionConfiguration,
    () => AssistantIntegrationConfiguration,
    () => AssistantCapabilityConfiguration,
    () => AIAgentConfigurationMap,
  ]
);
export var BedrockFoundationModelConfigurationForParsing = struct(n0, _BFMCFP, 0, [_mA, _pP], [0, () => ParsingPrompt]);
export var ChunkingConfiguration = struct(
  n0,
  _CC,
  0,
  [_cS, _fSCC, _hCC, _sCC],
  [
    0,
    () => FixedSizeChunkingConfiguration,
    () => HierarchicalChunkingConfiguration,
    () => SemanticChunkingConfiguration,
  ]
);
export var CreateAssistantRequest = struct(
  n0,
  _CAR,
  0,
  [_cTl, _n, _t, _d, _ta, _sSEC],
  [[0, 4], 0, 0, 0, 128 | 0, () => ServerSideEncryptionConfiguration]
);
export var CreateAssistantResponse = struct(n0, _CARr, 0, [_as], [() => AssistantData]);
export var CreateKnowledgeBaseRequest = struct(
  n0,
  _CKBR,
  0,
  [_cTl, _n, _kBT, _sC, _rCe, _vIC, _sSEC, _d, _ta],
  [
    [0, 4],
    0,
    0,
    [() => SourceConfiguration, 0],
    () => RenderingConfiguration,
    () => VectorIngestionConfiguration,
    () => ServerSideEncryptionConfiguration,
    0,
    128 | 0,
  ]
);
export var CreateKnowledgeBaseResponse = struct(n0, _CKBRr, 0, [_kB], [[() => KnowledgeBaseData, 0]]);
export var FixedSizeChunkingConfiguration = struct(n0, _FSCC, 0, [_mTa, _oP], [1, 1]);
export var GetAssistantRequest = struct(n0, _GAR, 0, [_aI], [[0, 1]]);
export var GetAssistantResponse = struct(n0, _GARe, 0, [_as], [() => AssistantData]);
export var GetKnowledgeBaseRequest = struct(n0, _GKBR, 0, [_kBI], [[0, 1]]);
export var GetKnowledgeBaseResponse = struct(n0, _GKBRe, 0, [_kB], [[() => KnowledgeBaseData, 0]]);
export var HierarchicalChunkingConfiguration = struct(
  n0,
  _HCC,
  0,
  [_lC, _oT],
  [() => HierarchicalChunkingLevelConfigurations, 1]
);
export var HierarchicalChunkingLevelConfiguration = struct(n0, _HCLC, 0, [_mTa], [1]);
export var KnowledgeBaseData = struct(
  n0,
  _KBD,
  0,
  [_kBI, _kBA, _n, _kBT, _s, _lCMT, _vIC, _sC, _rCe, _sSEC, _d, _ta, _iSn, _iFR],
  [
    0,
    0,
    0,
    0,
    0,
    7,
    () => VectorIngestionConfiguration,
    [() => SourceConfiguration, 0],
    () => RenderingConfiguration,
    () => ServerSideEncryptionConfiguration,
    0,
    128 | 0,
    0,
    64 | 0,
  ]
);
export var KnowledgeBaseSummary = struct(
  n0,
  _KBS,
  0,
  [_kBI, _kBA, _n, _kBT, _s, _sC, _vIC, _rCe, _sSEC, _d, _ta],
  [
    0,
    0,
    0,
    0,
    0,
    [() => SourceConfiguration, 0],
    () => VectorIngestionConfiguration,
    () => RenderingConfiguration,
    () => ServerSideEncryptionConfiguration,
    0,
    128 | 0,
  ]
);
export var ListAssistantsRequest = struct(
  n0,
  _LAR,
  0,
  [_nT, _mR],
  [
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
  ]
);
export var ListAssistantsResponse = struct(n0, _LARi, 0, [_aS, _nT], [() => AssistantList, 0]);
export var ListKnowledgeBasesRequest = struct(
  n0,
  _LKBR,
  0,
  [_nT, _mR],
  [
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
  ]
);
export var ListKnowledgeBasesResponse = struct(n0, _LKBRi, 0, [_kBS, _nT], [[() => KnowledgeBaseList, 0], 0]);
export var ParsingConfiguration = struct(
  n0,
  _PC,
  0,
  [_pS, _bFMC],
  [0, () => BedrockFoundationModelConfigurationForParsing]
);
export var ParsingPrompt = struct(n0, _PP, 0, [_pPT], [0]);
export var RenderingConfiguration = struct(n0, _RC, 0, [_tU], [0]);
export var SeedUrl = struct(n0, _SU, 0, [_u], [0]);
export var SemanticChunkingConfiguration = struct(n0, _SCC, 0, [_mTa, _bSu, _bPT], [1, 1, 1]);
export var ServerSideEncryptionConfiguration = struct(n0, _SSEC, 0, [_kKI], [0]);
export var UpdateAssistantAIAgentRequest = struct(
  n0,
  _UAAIAR,
  0,
  [_aI, _aAT, _co],
  [[0, 1], 0, () => AIAgentConfigurationData]
);
export var UpdateAssistantAIAgentResponse = struct(n0, _UAAIARp, 0, [_as], [() => AssistantData]);
export var UpdateKnowledgeBaseTemplateUriRequest = struct(n0, _UKBTUR, 0, [_kBI, _tU], [[0, 1], 0]);
export var UpdateKnowledgeBaseTemplateUriResponse = struct(n0, _UKBTURp, 0, [_kB], [[() => KnowledgeBaseData, 0]]);
export var UrlConfiguration = struct(n0, _UC, 0, [_sU], [() => SeedUrls]);
export var VectorIngestionConfiguration = struct(
  n0,
  _VIC,
  0,
  [_cCh, _pCa],
  [() => ChunkingConfiguration, () => ParsingConfiguration]
);
export var WebCrawlerConfiguration = struct(
  n0,
  _WCC,
  0,
  [_uC, _cL, _iF, _eF, _sc],
  [() => UrlConfiguration, () => WebCrawlerLimits, [() => UrlFilterList, 0], [() => UrlFilterList, 0], 0]
);
export var WebCrawlerLimits = struct(n0, _WCL, 0, [_rLa], [1]);
export var AssistantList = list(n0, _AL, 0, () => AssistantSummary);
export var FailureReason = 64 | 0;

export var HierarchicalChunkingLevelConfigurations = list(n0, _HCLCi, 0, () => HierarchicalChunkingLevelConfiguration);
export var KnowledgeBaseList = list(n0, _KBL, 0, [() => KnowledgeBaseSummary, 0]);
export var ObjectFieldsList = 64 | 0;

export var SeedUrls = list(n0, _SUe, 0, () => SeedUrl);
export var UrlFilterList = list(n0, _UFL, 8, [() => UrlFilterPattern, 0]);
export var ManagedSourceConfiguration = uni(n0, _MSC, 0, [_wCC], [[() => WebCrawlerConfiguration, 0]]);
export var SourceConfiguration = uni(
  n0,
  _SC,
  0,
  [_aIp, _mSC],
  [() => AppIntegrationsConfiguration, [() => ManagedSourceConfiguration, 0]]
);
export var CreateAssistant = op(
  n0,
  _CAr,
  {
    [_htt]: ["POST", "/assistants", 200],
  },
  () => CreateAssistantRequest,
  () => CreateAssistantResponse
);
export var CreateKnowledgeBase = op(
  n0,
  _CKB,
  {
    [_htt]: ["POST", "/knowledgeBases", 200],
  },
  () => CreateKnowledgeBaseRequest,
  () => CreateKnowledgeBaseResponse
);
export var GetAssistant = op(
  n0,
  _GA,
  {
    [_htt]: ["GET", "/assistants/{assistantId}", 200],
  },
  () => GetAssistantRequest,
  () => GetAssistantResponse
);
export var GetKnowledgeBase = op(
  n0,
  _GKB,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}", 200],
  },
  () => GetKnowledgeBaseRequest,
  () => GetKnowledgeBaseResponse
);
export var ListAssistants = op(
  n0,
  _LA,
  {
    [_htt]: ["GET", "/assistants", 200],
  },
  () => ListAssistantsRequest,
  () => ListAssistantsResponse
);
export var ListKnowledgeBases = op(
  n0,
  _LKB,
  {
    [_htt]: ["GET", "/knowledgeBases", 200],
  },
  () => ListKnowledgeBasesRequest,
  () => ListKnowledgeBasesResponse
);
export var UpdateAssistantAIAgent = op(
  n0,
  _UAAIA,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/aiagentConfiguration", 200],
  },
  () => UpdateAssistantAIAgentRequest,
  () => UpdateAssistantAIAgentResponse
);
export var UpdateKnowledgeBaseTemplateUri = op(
  n0,
  _UKBTU,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/templateUri", 200],
  },
  () => UpdateKnowledgeBaseTemplateUriRequest,
  () => UpdateKnowledgeBaseTemplateUriResponse
);
