// smithy-typescript generated code
import { error, list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { ExternalResourceException as __ExternalResourceException } from "../models/index";
import {
  _ACR,
  _aCR,
  _ACRE,
  _aCRE,
  _ACREu,
  _aCREu,
  _ACRu,
  _aCRu,
  _aCu,
  _aCut,
  _aE,
  _AEE,
  _aEE,
  _aEt,
  _aFt,
  _AI,
  _AIE,
  _aIp,
  _AIt,
  _APIS,
  _aR,
  _ARE,
  _aRE,
  _aSp,
  _aST,
  _at,
  _att,
  _aU,
  _aUn,
  _BAC,
  _bAC,
  _bEC,
  _bS,
  _c,
  _cA,
  _CAWEU,
  _CAWEUR,
  _CAWEURr,
  _cCu,
  _CE,
  _cE,
  _cF,
  _Ch,
  _CI,
  _cI,
  _CIS,
  _cM,
  _CMCh,
  _cMCh,
  _CO,
  _cont,
  _COS,
  _CPC,
  _cPC,
  _CSh,
  _CSI,
  _CSO,
  _CSo,
  _cSo,
  _cT,
  _d,
  _da,
  _dAoc,
  _dE,
  _dI,
  _dN,
  _dT,
  _dU,
  _e,
  _EOIE,
  _eOIE,
  _ERE,
  _fA,
  _FAE,
  _fAE,
  _fTM,
  _GP,
  _GPR,
  _GPRe,
  _GWE,
  _GWER,
  _GWERe,
  _hE,
  _hQ,
  _ht,
  _iAA,
  _IAC,
  _iAC,
  _iPC,
  _iS,
  _iTd,
  _LP,
  _LPR,
  _LPRi,
  _LWE,
  _LWER,
  _LWERi,
  _m,
  _ME,
  _mE,
  _mRa,
  _n,
  _NAC,
  _nAC,
  _nT,
  _o,
  _OACCC,
  _oACCC,
  _oS,
  _P,
  _pA,
  _pa,
  _PAC,
  _PCl,
  _pCl,
  _pFNS,
  _pI,
  _Pl,
  _pl,
  _Plu,
  _pMI,
  _pT,
  _qT,
  _rA,
  _RC,
  _rCe,
  _RCL,
  _RCS,
  _ret,
  _rIe,
  _rM,
  _s,
  _s_,
  _SA,
  _sA,
  _sAc,
  _sAo,
  _sC,
  _sDIM,
  _sM,
  _sMI,
  _sMT,
  _sPCM,
  _SRC,
  _SRCR,
  _SRCRe,
  _sta,
  _str,
  _sU,
  _su,
  _t,
  _tE,
  _ti,
  _TIE,
  _TOE,
  _tU,
  _uA,
  _uG,
  _uI,
  _uM,
  _uMI,
  _UP,
  _UPR,
  _UPRp,
  _WE,
  _wE,
  _wEA,
  _WEe,
  _wEI,
  _wM,
  ErrorDetail,
  n0,
} from "./schemas_0";
import { S3 } from "./schemas_2_Data";
import { CopyFromSource } from "./schemas_7_List";
import { AttributeFilter, DocumentAttributes } from "./schemas_10_Data";
import {
  ActionExecution,
  ActionExecutionPayload,
  ActionReview,
  ActionReviewPayload,
  AttachmentOutput,
  AttachmentsOutput,
  SourceAttributions,
} from "./schemas_16_Plugin";
import {
  BrowserExtensionConfiguration,
  CustomizationConfiguration,
  IdentityProviderConfiguration,
  WebExperienceAuthConfiguration,
} from "./schemas_18_Experience";

/* eslint no-var: 0 */

export var Payload = sim(n0, _P, 0, 8);
export var ActionExecutionEvent = struct(n0, _AEE, 0, [_pI, _pa, _pFNS], [0, () => ActionExecutionPayload, 0]);
export var ActionReviewEvent = struct(
  n0,
  _ARE,
  0,
  [_cI, _uMI, _sMI, _pI, _pT, _pa, _pFNS],
  [0, 0, 0, 0, 0, () => ActionReviewPayload, 0]
);
export var AttachmentInput = struct(n0, _AI, 0, [_da, _n, _cF], [21, 0, () => CopyFromSource]);
export var AttachmentInputEvent = struct(n0, _AIE, 0, [_at], [() => AttachmentInput]);
export var AuthChallengeRequest = struct(n0, _ACR, 0, [_aU], [0]);
export var AuthChallengeRequestEvent = struct(n0, _ACRE, 0, [_aU], [0]);
export var AuthChallengeResponse = struct(n0, _ACRu, 0, [_rM], [128 | 0]);
export var AuthChallengeResponseEvent = struct(n0, _ACREu, 0, [_rM], [128 | 0]);
export var BasicAuthConfiguration = struct(n0, _BAC, 0, [_sA, _rA], [0, 0]);
export var ChatInput = struct(
  n0,
  _CI,
  0,
  [_aIp, _uI, _uG, _cI, _pMI, _cT, _iS],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _uG,
      },
    ],
    [
      0,
      {
        [_hQ]: _cI,
      },
    ],
    [
      0,
      {
        [_hQ]: _pMI,
      },
    ],
    [
      0,
      {
        [_iTd]: 1,
        [_hQ]: _cT,
      },
    ],
    [() => ChatInputStream, 16],
  ]
);
export var ChatOutput = struct(n0, _CO, 0, [_oS], [[() => ChatOutputStream, 16]]);
export var ChatSyncInput = struct(
  n0,
  _CSI,
  0,
  [_aIp, _uI, _uG, _uM, _att, _aE, _aCR, _cI, _pMI, _aFt, _cM, _cMCh, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _uG,
      },
    ],
    0,
    () => AttachmentsInput,
    () => ActionExecution,
    () => AuthChallengeResponse,
    0,
    0,
    () => AttributeFilter,
    0,
    () => ChatModeConfiguration,
    [0, 4],
  ]
);
export var ChatSyncOutput = struct(
  n0,
  _CSO,
  0,
  [_cI, _sM, _sMI, _uMI, _aR, _aCRu, _sAo, _fA],
  [0, 0, 0, 0, () => ActionReview, () => AuthChallengeRequest, [() => SourceAttributions, 0], () => AttachmentsOutput]
);
export var ConfigurationEvent = struct(
  n0,
  _CE,
  0,
  [_cM, _cMCh, _aFt],
  [0, () => ChatModeConfiguration, () => AttributeFilter]
);
export var CreateAnonymousWebExperienceUrlRequest = struct(n0, _CAWEUR, 0, [_aIp, _wEI, _sDIM], [[0, 1], [0, 1], 1]);
export var CreateAnonymousWebExperienceUrlResponse = struct(n0, _CAWEURr, 0, [_aUn], [0]);
export var CustomPluginConfiguration = struct(n0, _CPC, 0, [_d, _aST, _aSp], [0, 0, [() => APISchema, 0]]);
export var EndOfInputEvent = struct(n0, _EOIE, 0, [], []);
export var ExternalResourceException = error(
  n0,
  _ERE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_m],
  [0],

  __ExternalResourceException
);
export var FailedAttachmentEvent = struct(n0, _FAE, 0, [_cI, _uMI, _sMI, _at], [0, 0, 0, () => AttachmentOutput]);
export var GetPluginRequest = struct(
  n0,
  _GPR,
  0,
  [_aIp, _pI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetPluginResponse = struct(
  n0,
  _GPRe,
  0,
  [_aIp, _pI, _dN, _t, _sU, _aCu, _cPC, _bS, _pA, _sta, _cA, _uA],
  [0, 0, 0, 0, 0, () => PluginAuthConfiguration, [() => CustomPluginConfiguration, 0], 0, 0, 0, 4, 4]
);
export var GetWebExperienceRequest = struct(
  n0,
  _GWER,
  0,
  [_aIp, _wEI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetWebExperienceResponse = struct(
  n0,
  _GWERe,
  0,
  [_aIp, _wEI, _wEA, _dE, _s, _cA, _uA, _ti, _su, _wM, _sPCM, _o, _rA, _iPC, _aCut, _e, _bEC, _cCu],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    () => IdentityProviderConfiguration,
    () => WebExperienceAuthConfiguration,
    () => ErrorDetail,
    () => BrowserExtensionConfiguration,
    () => CustomizationConfiguration,
  ]
);
export var IdcAuthConfiguration = struct(n0, _IAC, 0, [_iAA, _rA], [0, 0]);
export var ListPluginsRequest = struct(
  n0,
  _LPR,
  0,
  [_aIp, _nT, _mRa],
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
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListPluginsResponse = struct(n0, _LPRi, 0, [_nT, _pl], [0, () => Plugins]);
export var ListWebExperiencesRequest = struct(
  n0,
  _LWER,
  0,
  [_aIp, _nT, _mRa],
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
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListWebExperiencesResponse = struct(n0, _LWERi, 0, [_wE, _nT], [() => WebExperiences, 0]);
export var MetadataEvent = struct(
  n0,
  _ME,
  0,
  [_cI, _uMI, _sMI, _sAo, _fTM],
  [0, 0, 0, [() => SourceAttributions, 0], 0]
);
export var NoAuthConfiguration = struct(n0, _NAC, 0, [], []);
export var OAuth2ClientCredentialConfiguration = struct(n0, _OACCC, 0, [_sA, _rA, _aU, _tU], [0, 0, 0, 0]);
export var Plugin = struct(n0, _Pl, 0, [_pI, _dN, _t, _sU, _sta, _bS, _cA, _uA], [0, 0, 0, 0, 0, 0, 4, 4]);
export var PluginConfiguration = struct(n0, _PCl, 0, [_pI], [0]);
export var RelevantContent = struct(
  n0,
  _RC,
  0,
  [_cont, _dI, _dT, _dU, _dAoc, _sAc],
  [0, 0, 0, 0, () => DocumentAttributes, () => ScoreAttributes]
);
export var RetrieverContentSource = struct(n0, _RCS, 0, [_rIe], [0]);
export var ScoreAttributes = struct(n0, _SA, 0, [_sC], [0]);
export var SearchRelevantContentRequest = struct(
  n0,
  _SRCR,
  0,
  [_aIp, _qT, _cSo, _aFt, _mRa, _nT],
  [[0, 1], 0, () => ContentSource, () => AttributeFilter, 1, 0]
);
export var SearchRelevantContentResponse = struct(n0, _SRCRe, 0, [_rCe, _nT], [() => RelevantContentList, 0]);
export var TextInputEvent = struct(n0, _TIE, 0, [_uM], [0]);
export var TextOutputEvent = struct(n0, _TOE, 0, [_sMT, _cI, _uMI, _sMI, _sM], [0, 0, 0, 0, 0]);
export var UpdatePluginRequest = struct(
  n0,
  _UPR,
  0,
  [_aIp, _pI, _dN, _sta, _sU, _cPC, _aCu],
  [[0, 1], [0, 1], 0, 0, 0, [() => CustomPluginConfiguration, 0], () => PluginAuthConfiguration]
);
export var UpdatePluginResponse = struct(n0, _UPRp, 0, [], []);
export var WebExperience = struct(n0, _WE, 0, [_wEI, _cA, _uA, _dE, _s], [0, 4, 4, 0, 0]);
export var AttachmentsInput = list(n0, _AIt, 0, () => AttachmentInput);
export var Plugins = list(n0, _Plu, 0, () => Plugin);
export var RelevantContentList = list(n0, _RCL, 0, () => RelevantContent);
export var WebExperiences = list(n0, _WEe, 0, () => WebExperience);
export var AuthorizationResponseMap = 128 | 0;

export var APISchema = uni(n0, _APIS, 0, [_pa, _s_], [[() => Payload, 0], () => S3]);
export var ChatInputStream = uni(
  n0,
  _CIS,
  {
    [_str]: 1,
  },
  [_cE, _tE, _aEt, _aEE, _eOIE, _aCRE],
  [
    () => ConfigurationEvent,
    () => TextInputEvent,
    () => AttachmentInputEvent,
    () => ActionExecutionEvent,
    () => EndOfInputEvent,
    () => AuthChallengeResponseEvent,
  ]
);
export var ChatModeConfiguration = uni(n0, _CMCh, 0, [_pCl], [() => PluginConfiguration]);
export var ChatOutputStream = uni(
  n0,
  _COS,
  {
    [_str]: 1,
  },
  [_tE, _mE, _aRE, _fAE, _aCREu],
  [
    () => TextOutputEvent,
    [() => MetadataEvent, 0],
    () => ActionReviewEvent,
    () => FailedAttachmentEvent,
    () => AuthChallengeRequestEvent,
  ]
);
export var ContentSource = uni(n0, _CSo, 0, [_ret], [() => RetrieverContentSource]);
export var PluginAuthConfiguration = uni(
  n0,
  _PAC,
  0,
  [_bAC, _oACCC, _nAC, _iAC],
  [
    () => BasicAuthConfiguration,
    () => OAuth2ClientCredentialConfiguration,
    () => NoAuthConfiguration,
    () => IdcAuthConfiguration,
  ]
);
export var Chat = op(
  n0,
  _Ch,
  {
    [_ht]: ["POST", "/applications/{applicationId}/conversations", 200],
  },
  () => ChatInput,
  () => ChatOutput
);
export var ChatSync = op(
  n0,
  _CSh,
  {
    [_ht]: ["POST", "/applications/{applicationId}/conversations?sync", 200],
  },
  () => ChatSyncInput,
  () => ChatSyncOutput
);
export var CreateAnonymousWebExperienceUrl = op(
  n0,
  _CAWEU,
  {
    [_ht]: ["POST", "/applications/{applicationId}/experiences/{webExperienceId}/anonymous-url", 200],
  },
  () => CreateAnonymousWebExperienceUrlRequest,
  () => CreateAnonymousWebExperienceUrlResponse
);
export var GetPlugin = op(
  n0,
  _GP,
  {
    [_ht]: ["GET", "/applications/{applicationId}/plugins/{pluginId}", 200],
  },
  () => GetPluginRequest,
  () => GetPluginResponse
);
export var GetWebExperience = op(
  n0,
  _GWE,
  {
    [_ht]: ["GET", "/applications/{applicationId}/experiences/{webExperienceId}", 200],
  },
  () => GetWebExperienceRequest,
  () => GetWebExperienceResponse
);
export var ListPlugins = op(
  n0,
  _LP,
  {
    [_ht]: ["GET", "/applications/{applicationId}/plugins", 200],
  },
  () => ListPluginsRequest,
  () => ListPluginsResponse
);
export var ListWebExperiences = op(
  n0,
  _LWE,
  {
    [_ht]: ["GET", "/applications/{applicationId}/experiences", 200],
  },
  () => ListWebExperiencesRequest,
  () => ListWebExperiencesResponse
);
export var SearchRelevantContent = op(
  n0,
  _SRC,
  {
    [_ht]: ["POST", "/applications/{applicationId}/relevant-content", 200],
  },
  () => SearchRelevantContentRequest,
  () => SearchRelevantContentResponse
);
export var UpdatePlugin = op(
  n0,
  _UP,
  {
    [_ht]: ["PUT", "/applications/{applicationId}/plugins/{pluginId}", 200],
  },
  () => UpdatePluginRequest,
  () => UpdatePluginResponse
);
