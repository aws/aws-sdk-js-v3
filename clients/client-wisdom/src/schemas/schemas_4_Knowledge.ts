// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _AD,
  _aI,
  _aIA,
  _AIC,
  _AICs,
  _aIp,
  _as,
  _d,
  _GA,
  _GAR,
  _GARe,
  _GKB,
  _GKBR,
  _GKBRe,
  _GS,
  _GSR,
  _GSRe,
  _ht,
  _iC,
  _kB,
  _kBA,
  _KBD,
  _kBI,
  _kBT,
  _kKI,
  _lCMT,
  _n,
  _oF,
  _RC,
  _rC,
  _s,
  _sA,
  _SC,
  _sC,
  _SD,
  _se,
  _sI,
  _SIC,
  _SSEC,
  _sSEC,
  _t,
  _tIA,
  _tU,
  _ty,
  _UKBTU,
  _UKBTUR,
  _UKBTURp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AppIntegrationsConfiguration = struct(n0, _AIC, 0, [_aIA, _oF], [0, 64 | 0]);
export var AssistantData = struct(
  n0,
  _AD,
  0,
  [_aI, _aA, _n, _ty, _s, _d, _t, _sSEC, _iC],
  [0, 0, 0, 0, 0, 0, 128 | 0, () => ServerSideEncryptionConfiguration, () => AssistantIntegrationConfiguration]
);
export var AssistantIntegrationConfiguration = struct(n0, _AICs, 0, [_tIA], [0]);
export var GetAssistantRequest = struct(n0, _GAR, 0, [_aI], [[0, 1]]);
export var GetAssistantResponse = struct(n0, _GARe, 0, [_as], [() => AssistantData]);
export var GetKnowledgeBaseRequest = struct(n0, _GKBR, 0, [_kBI], [[0, 1]]);
export var GetKnowledgeBaseResponse = struct(n0, _GKBRe, 0, [_kB], [() => KnowledgeBaseData]);
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
export var KnowledgeBaseData = struct(
  n0,
  _KBD,
  0,
  [_kBI, _kBA, _n, _kBT, _s, _lCMT, _sC, _rC, _sSEC, _d, _t],
  [
    0,
    0,
    0,
    0,
    0,
    7,
    () => SourceConfiguration,
    () => RenderingConfiguration,
    () => ServerSideEncryptionConfiguration,
    0,
    128 | 0,
  ]
);
export var RenderingConfiguration = struct(n0, _RC, 0, [_tU], [0]);
export var ServerSideEncryptionConfiguration = struct(n0, _SSEC, 0, [_kKI], [0]);
export var SessionData = struct(
  n0,
  _SD,
  0,
  [_sA, _sI, _n, _d, _t, _iC],
  [0, 0, 0, 0, 128 | 0, () => SessionIntegrationConfiguration]
);
export var SessionIntegrationConfiguration = struct(n0, _SIC, 0, [_tIA], [0]);
export var UpdateKnowledgeBaseTemplateUriRequest = struct(n0, _UKBTUR, 0, [_kBI, _tU], [[0, 1], 0]);
export var UpdateKnowledgeBaseTemplateUriResponse = struct(n0, _UKBTURp, 0, [_kB], [() => KnowledgeBaseData]);
export var ObjectFieldsList = 64 | 0;

export var SourceConfiguration = uni(n0, _SC, 0, [_aIp], [() => AppIntegrationsConfiguration]);
export var GetAssistant = op(
  n0,
  _GA,
  {
    [_ht]: ["GET", "/assistants/{assistantId}", 200],
  },
  () => GetAssistantRequest,
  () => GetAssistantResponse
);
export var GetKnowledgeBase = op(
  n0,
  _GKB,
  {
    [_ht]: ["GET", "/knowledgeBases/{knowledgeBaseId}", 200],
  },
  () => GetKnowledgeBaseRequest,
  () => GetKnowledgeBaseResponse
);
export var GetSession = op(
  n0,
  _GS,
  {
    [_ht]: ["GET", "/assistants/{assistantId}/sessions/{sessionId}", 200],
  },
  () => GetSessionRequest,
  () => GetSessionResponse
);
export var UpdateKnowledgeBaseTemplateUri = op(
  n0,
  _UKBTU,
  {
    [_ht]: ["POST", "/knowledgeBases/{knowledgeBaseId}/templateUri", 200],
  },
  () => UpdateKnowledgeBaseTemplateUriRequest,
  () => UpdateKnowledgeBaseTemplateUriResponse
);
