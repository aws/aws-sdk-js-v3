// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _aF,
  _aI,
  _AIPD,
  _AIPS,
  _AIPSL,
  _AIPTC,
  _AIPVS,
  _AIPVSL,
  _aP,
  _aPA,
  _aPI,
  _aPS,
  _aPSi,
  _aPVS,
  _CAIP,
  _CAIPR,
  _CAIPRr,
  _CAIPV,
  _CAIPVR,
  _CAIPVRr,
  _cTl,
  _d,
  _GAIP,
  _GAIPR,
  _GAIPRe,
  _hQ,
  _htt,
  _LAIP,
  _LAIPR,
  _LAIPRi,
  _LAIPV,
  _LAIPVR,
  _LAIPVRi,
  _mI,
  _mR,
  _mT,
  _n,
  _nT,
  _o,
  _s,
  _t,
  _ta,
  _TAIP,
  _tCe,
  _te,
  _TFAIPETC,
  _tFAIPETC,
  _tT,
  _UAIP,
  _UAIPR,
  _UAIPRp,
  _vN,
  _vS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TextAIPrompt = sim(n0, _TAIP, 0, 8);
export var AIPromptData = struct(
  n0,
  _AIPD,
  0,
  [_aI, _aA, _aPI, _aPA, _n, _t, _tT, _mI, _aF, _tCe, _mT, _d, _vS, _ta, _o, _s],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, [() => AIPromptTemplateConfiguration, 0], 4, 0, 0, 128 | 0, 0, 0]
);
export var AIPromptSummary = struct(
  n0,
  _AIPS,
  0,
  [_n, _aI, _aA, _aPI, _t, _aPA, _mT, _tT, _mI, _aF, _vS, _o, _d, _s, _ta],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var AIPromptVersionSummary = struct(n0, _AIPVS, 0, [_aPS, _vN], [() => AIPromptSummary, 1]);
export var CreateAIPromptRequest = struct(
  n0,
  _CAIPR,
  0,
  [_cTl, _aI, _n, _t, _tCe, _vS, _tT, _mI, _aF, _ta, _d],
  [[0, 4], [0, 1], 0, 0, [() => AIPromptTemplateConfiguration, 0], 0, 0, 0, 0, 128 | 0, 0]
);
export var CreateAIPromptResponse = struct(n0, _CAIPRr, 0, [_aP], [[() => AIPromptData, 0]]);
export var CreateAIPromptVersionRequest = struct(n0, _CAIPVR, 0, [_aI, _aPI, _mT, _cTl], [[0, 1], [0, 1], 4, [0, 4]]);
export var CreateAIPromptVersionResponse = struct(n0, _CAIPVRr, 0, [_aP, _vN], [[() => AIPromptData, 0], 1]);
export var GetAIPromptRequest = struct(
  n0,
  _GAIPR,
  0,
  [_aI, _aPI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAIPromptResponse = struct(n0, _GAIPRe, 0, [_aP, _vN], [[() => AIPromptData, 0], 1]);
export var ListAIPromptsRequest = struct(
  n0,
  _LAIPR,
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
export var ListAIPromptsResponse = struct(n0, _LAIPRi, 0, [_aPSi, _nT], [() => AIPromptSummaryList, 0]);
export var ListAIPromptVersionsRequest = struct(
  n0,
  _LAIPVR,
  0,
  [_aI, _aPI, _nT, _mR, _o],
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
export var ListAIPromptVersionsResponse = struct(
  n0,
  _LAIPVRi,
  0,
  [_aPVS, _nT],
  [() => AIPromptVersionSummariesList, 0]
);
export var TextFullAIPromptEditTemplateConfiguration = struct(n0, _TFAIPETC, 0, [_te], [[() => TextAIPrompt, 0]]);
export var UpdateAIPromptRequest = struct(
  n0,
  _UAIPR,
  0,
  [_cTl, _aI, _aPI, _vS, _tCe, _d, _mI],
  [[0, 4], [0, 1], [0, 1], 0, [() => AIPromptTemplateConfiguration, 0], 0, 0]
);
export var UpdateAIPromptResponse = struct(n0, _UAIPRp, 0, [_aP], [[() => AIPromptData, 0]]);
export var AIPromptSummaryList = list(n0, _AIPSL, 0, () => AIPromptSummary);
export var AIPromptVersionSummariesList = list(n0, _AIPVSL, 0, () => AIPromptVersionSummary);
export var AIPromptTemplateConfiguration = uni(
  n0,
  _AIPTC,
  0,
  [_tFAIPETC],
  [[() => TextFullAIPromptEditTemplateConfiguration, 0]]
);
export var CreateAIPrompt = op(
  n0,
  _CAIP,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/aiprompts", 200],
  },
  () => CreateAIPromptRequest,
  () => CreateAIPromptResponse
);
export var CreateAIPromptVersion = op(
  n0,
  _CAIPV,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/aiprompts/{aiPromptId}/versions", 200],
  },
  () => CreateAIPromptVersionRequest,
  () => CreateAIPromptVersionResponse
);
export var GetAIPrompt = op(
  n0,
  _GAIP,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/aiprompts/{aiPromptId}", 200],
  },
  () => GetAIPromptRequest,
  () => GetAIPromptResponse
);
export var ListAIPrompts = op(
  n0,
  _LAIP,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/aiprompts", 200],
  },
  () => ListAIPromptsRequest,
  () => ListAIPromptsResponse
);
export var ListAIPromptVersions = op(
  n0,
  _LAIPV,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/aiprompts/{aiPromptId}/versions", 200],
  },
  () => ListAIPromptVersionsRequest,
  () => ListAIPromptVersionsResponse
);
export var UpdateAIPrompt = op(
  n0,
  _UAIP,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/aiprompts/{aiPromptId}", 200],
  },
  () => UpdateAIPromptRequest,
  () => UpdateAIPromptResponse
);
