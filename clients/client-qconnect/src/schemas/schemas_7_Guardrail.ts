// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aA,
  _ac,
  _aG,
  _aGA,
  _aGI,
  _aGS,
  _aGSi,
  _aGVS,
  _aI,
  _AIGBM,
  _AIGCGPC,
  _AIGCPC,
  _AIGD,
  _AIGDu,
  _AIGS,
  _AIGSIPC,
  _AIGSL,
  _AIGTPC,
  _AIGVS,
  _AIGVSL,
  _AIGWPC,
  _bIM,
  _bOM,
  _CAIG,
  _CAIGR,
  _CAIGRr,
  _CAIGV,
  _CAIGVR,
  _CAIGVRr,
  _cGPC,
  _cPC,
  _cTl,
  _d,
  _def,
  _exa,
  _fC,
  _GAIG,
  _GAIGR,
  _GAIGRe,
  _GCFC,
  _GCFCu,
  _GCFT,
  _GCGFC,
  _GCGFCu,
  _GCGFT,
  _GCGFTu,
  _GFS,
  _GMWC,
  _GMWLC,
  _GMWT,
  _GPEC,
  _GPECu,
  _GPET,
  _GRC,
  _GRCu,
  _GRD,
  _GRN,
  _GRP,
  _GSIA,
  _GTC,
  _GTCu,
  _GTD,
  _GTE,
  _GTEu,
  _GTN,
  _GTT,
  _GWC,
  _GWCu,
  _GWT,
  _hQ,
  _htt,
  _iS,
  _LAIG,
  _LAIGR,
  _LAIGRi,
  _LAIGV,
  _LAIGVR,
  _LAIGVRi,
  _mR,
  _mT,
  _mWLC,
  _n,
  _nT,
  _oS,
  _pa,
  _pEC,
  _rC,
  _s,
  _sIPC,
  _t,
  _ta,
  _tC,
  _te,
  _th,
  _tPC,
  _UAIG,
  _UAIGR,
  _UAIGRp,
  _vN,
  _vS,
  _wC,
  _wPC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AIGuardrailBlockedMessaging = sim(n0, _AIGBM, 0, 8);
export var AIGuardrailDescription = sim(n0, _AIGD, 0, 8);
export var GuardrailContentFilterType = sim(n0, _GCFT, 0, 8);
export var GuardrailContextualGroundingFilterThreshold = sim(n0, _GCGFT, 1, 8);
export var GuardrailContextualGroundingFilterType = sim(n0, _GCGFTu, 0, 8);
export var GuardrailFilterStrength = sim(n0, _GFS, 0, 8);
export var GuardrailManagedWordsType = sim(n0, _GMWT, 0, 8);
export var GuardrailPiiEntityType = sim(n0, _GPET, 0, 8);
export var GuardrailRegexDescription = sim(n0, _GRD, 0, 8);
export var GuardrailRegexName = sim(n0, _GRN, 0, 8);
export var GuardrailRegexPattern = sim(n0, _GRP, 0, 8);
export var GuardrailSensitiveInformationAction = sim(n0, _GSIA, 0, 8);
export var GuardrailTopicDefinition = sim(n0, _GTD, 0, 8);
export var GuardrailTopicExample = sim(n0, _GTE, 0, 8);
export var GuardrailTopicName = sim(n0, _GTN, 0, 8);
export var GuardrailTopicType = sim(n0, _GTT, 0, 8);
export var GuardrailWordText = sim(n0, _GWT, 0, 8);
export var AIGuardrailContentPolicyConfig = struct(n0, _AIGCPC, 0, [_fC], [[() => GuardrailContentFiltersConfig, 0]]);
export var AIGuardrailContextualGroundingPolicyConfig = struct(
  n0,
  _AIGCGPC,
  0,
  [_fC],
  [[() => GuardrailContextualGroundingFiltersConfig, 0]]
);
export var AIGuardrailData = struct(
  n0,
  _AIGDu,
  0,
  [_aI, _aA, _aGA, _aGI, _n, _vS, _bIM, _bOM, _d, _tPC, _cPC, _wPC, _sIPC, _cGPC, _ta, _s, _mT],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    [() => AIGuardrailBlockedMessaging, 0],
    [() => AIGuardrailBlockedMessaging, 0],
    [() => AIGuardrailDescription, 0],
    [() => AIGuardrailTopicPolicyConfig, 0],
    [() => AIGuardrailContentPolicyConfig, 0],
    [() => AIGuardrailWordPolicyConfig, 0],
    [() => AIGuardrailSensitiveInformationPolicyConfig, 0],
    [() => AIGuardrailContextualGroundingPolicyConfig, 0],
    128 | 0,
    0,
    4,
  ]
);
export var AIGuardrailSensitiveInformationPolicyConfig = struct(
  n0,
  _AIGSIPC,
  0,
  [_pEC, _rC],
  [
    [() => GuardrailPiiEntitiesConfig, 0],
    [() => GuardrailRegexesConfig, 0],
  ]
);
export var AIGuardrailSummary = struct(
  n0,
  _AIGS,
  0,
  [_n, _aI, _aA, _aGI, _aGA, _mT, _vS, _d, _s, _ta],
  [0, 0, 0, 0, 0, 4, 0, [() => AIGuardrailDescription, 0], 0, 128 | 0]
);
export var AIGuardrailTopicPolicyConfig = struct(n0, _AIGTPC, 0, [_tC], [[() => GuardrailTopicsConfig, 0]]);
export var AIGuardrailVersionSummary = struct(n0, _AIGVS, 0, [_aGS, _vN], [[() => AIGuardrailSummary, 0], 1]);
export var AIGuardrailWordPolicyConfig = struct(
  n0,
  _AIGWPC,
  0,
  [_wC, _mWLC],
  [
    [() => GuardrailWordsConfig, 0],
    [() => GuardrailManagedWordListsConfig, 0],
  ]
);
export var CreateAIGuardrailRequest = struct(
  n0,
  _CAIGR,
  0,
  [_cTl, _aI, _n, _bIM, _bOM, _vS, _d, _tPC, _cPC, _wPC, _sIPC, _cGPC, _ta],
  [
    [0, 4],
    [0, 1],
    0,
    [() => AIGuardrailBlockedMessaging, 0],
    [() => AIGuardrailBlockedMessaging, 0],
    0,
    [() => AIGuardrailDescription, 0],
    [() => AIGuardrailTopicPolicyConfig, 0],
    [() => AIGuardrailContentPolicyConfig, 0],
    [() => AIGuardrailWordPolicyConfig, 0],
    [() => AIGuardrailSensitiveInformationPolicyConfig, 0],
    [() => AIGuardrailContextualGroundingPolicyConfig, 0],
    128 | 0,
  ]
);
export var CreateAIGuardrailResponse = struct(n0, _CAIGRr, 0, [_aG], [[() => AIGuardrailData, 0]]);
export var CreateAIGuardrailVersionRequest = struct(
  n0,
  _CAIGVR,
  0,
  [_aI, _aGI, _mT, _cTl],
  [[0, 1], [0, 1], 4, [0, 4]]
);
export var CreateAIGuardrailVersionResponse = struct(n0, _CAIGVRr, 0, [_aG, _vN], [[() => AIGuardrailData, 0], 1]);
export var GetAIGuardrailRequest = struct(
  n0,
  _GAIGR,
  0,
  [_aI, _aGI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAIGuardrailResponse = struct(n0, _GAIGRe, 0, [_aG, _vN], [[() => AIGuardrailData, 0], 1]);
export var GuardrailContentFilterConfig = struct(
  n0,
  _GCFC,
  0,
  [_t, _iS, _oS],
  [
    [() => GuardrailContentFilterType, 0],
    [() => GuardrailFilterStrength, 0],
    [() => GuardrailFilterStrength, 0],
  ]
);
export var GuardrailContextualGroundingFilterConfig = struct(
  n0,
  _GCGFC,
  0,
  [_t, _th],
  [
    [() => GuardrailContextualGroundingFilterType, 0],
    [() => GuardrailContextualGroundingFilterThreshold, 0],
  ]
);
export var GuardrailManagedWordsConfig = struct(n0, _GMWC, 0, [_t], [[() => GuardrailManagedWordsType, 0]]);
export var GuardrailPiiEntityConfig = struct(
  n0,
  _GPEC,
  0,
  [_t, _ac],
  [
    [() => GuardrailPiiEntityType, 0],
    [() => GuardrailSensitiveInformationAction, 0],
  ]
);
export var GuardrailRegexConfig = struct(
  n0,
  _GRC,
  0,
  [_n, _d, _pa, _ac],
  [
    [() => GuardrailRegexName, 0],
    [() => GuardrailRegexDescription, 0],
    [() => GuardrailRegexPattern, 0],
    [() => GuardrailSensitiveInformationAction, 0],
  ]
);
export var GuardrailTopicConfig = struct(
  n0,
  _GTC,
  0,
  [_n, _def, _exa, _t],
  [
    [() => GuardrailTopicName, 0],
    [() => GuardrailTopicDefinition, 0],
    [() => GuardrailTopicExamples, 0],
    [() => GuardrailTopicType, 0],
  ]
);
export var GuardrailWordConfig = struct(n0, _GWC, 0, [_te], [[() => GuardrailWordText, 0]]);
export var ListAIGuardrailsRequest = struct(
  n0,
  _LAIGR,
  0,
  [_aI, _nT, _mR],
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
  ]
);
export var ListAIGuardrailsResponse = struct(n0, _LAIGRi, 0, [_aGSi, _nT], [[() => AIGuardrailSummariesList, 0], 0]);
export var ListAIGuardrailVersionsRequest = struct(
  n0,
  _LAIGVR,
  0,
  [_aI, _aGI, _nT, _mR],
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
  ]
);
export var ListAIGuardrailVersionsResponse = struct(
  n0,
  _LAIGVRi,
  0,
  [_aGVS, _nT],
  [[() => AIGuardrailVersionSummariesList, 0], 0]
);
export var UpdateAIGuardrailRequest = struct(
  n0,
  _UAIGR,
  0,
  [_cTl, _aI, _aGI, _vS, _bIM, _bOM, _d, _tPC, _cPC, _wPC, _sIPC, _cGPC],
  [
    [0, 4],
    [0, 1],
    [0, 1],
    0,
    [() => AIGuardrailBlockedMessaging, 0],
    [() => AIGuardrailBlockedMessaging, 0],
    [() => AIGuardrailDescription, 0],
    [() => AIGuardrailTopicPolicyConfig, 0],
    [() => AIGuardrailContentPolicyConfig, 0],
    [() => AIGuardrailWordPolicyConfig, 0],
    [() => AIGuardrailSensitiveInformationPolicyConfig, 0],
    [() => AIGuardrailContextualGroundingPolicyConfig, 0],
  ]
);
export var UpdateAIGuardrailResponse = struct(n0, _UAIGRp, 0, [_aG], [[() => AIGuardrailData, 0]]);
export var AIGuardrailSummariesList = list(n0, _AIGSL, 0, [() => AIGuardrailSummary, 0]);
export var AIGuardrailVersionSummariesList = list(n0, _AIGVSL, 0, [() => AIGuardrailVersionSummary, 0]);
export var GuardrailContentFiltersConfig = list(n0, _GCFCu, 0, [() => GuardrailContentFilterConfig, 0]);
export var GuardrailContextualGroundingFiltersConfig = list(n0, _GCGFCu, 0, [
  () => GuardrailContextualGroundingFilterConfig,
  0,
]);
export var GuardrailManagedWordListsConfig = list(n0, _GMWLC, 0, [() => GuardrailManagedWordsConfig, 0]);
export var GuardrailPiiEntitiesConfig = list(n0, _GPECu, 0, [() => GuardrailPiiEntityConfig, 0]);
export var GuardrailRegexesConfig = list(n0, _GRCu, 0, [() => GuardrailRegexConfig, 0]);
export var GuardrailTopicExamples = list(n0, _GTEu, 0, [() => GuardrailTopicExample, 0]);
export var GuardrailTopicsConfig = list(n0, _GTCu, 0, [() => GuardrailTopicConfig, 0]);
export var GuardrailWordsConfig = list(n0, _GWCu, 0, [() => GuardrailWordConfig, 0]);
export var CreateAIGuardrail = op(
  n0,
  _CAIG,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/aiguardrails", 200],
  },
  () => CreateAIGuardrailRequest,
  () => CreateAIGuardrailResponse
);
export var CreateAIGuardrailVersion = op(
  n0,
  _CAIGV,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions", 200],
  },
  () => CreateAIGuardrailVersionRequest,
  () => CreateAIGuardrailVersionResponse
);
export var GetAIGuardrail = op(
  n0,
  _GAIG,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}", 200],
  },
  () => GetAIGuardrailRequest,
  () => GetAIGuardrailResponse
);
export var ListAIGuardrails = op(
  n0,
  _LAIG,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/aiguardrails", 200],
  },
  () => ListAIGuardrailsRequest,
  () => ListAIGuardrailsResponse
);
export var ListAIGuardrailVersions = op(
  n0,
  _LAIGV,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions", 200],
  },
  () => ListAIGuardrailVersionsRequest,
  () => ListAIGuardrailVersionsResponse
);
export var UpdateAIGuardrail = op(
  n0,
  _UAIG,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}", 200],
  },
  () => UpdateAIGuardrailRequest,
  () => UpdateAIGuardrailResponse
);
