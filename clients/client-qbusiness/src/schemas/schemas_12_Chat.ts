// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ACMC,
  _aIp,
  _AOC,
  _bP,
  _BPC,
  _BPCU,
  _bPCU,
  _bPTCOU,
  _bPTD,
  _CBR,
  _cBR,
  _CMC,
  _cMC,
  _cMCr,
  _co,
  _CRR,
  _cRR,
  _cT,
  _d,
  _dSI,
  _eCM,
  _EDS,
  _eDS,
  _EDSl,
  _eUAG,
  _GCCC,
  _GCCCR,
  _GCCCRe,
  _hQ,
  _HRC,
  _hRC,
  _hRCa,
  _ht,
  _iI,
  _iUAG,
  _mRa,
  _n,
  _nT,
  _OC,
  _oC,
  _RCu,
  _rCu,
  _rS,
  _rTu,
  _Ru,
  _ru,
  _Rul,
  _sMO,
  _TC,
  _tC,
  _TCo,
  _tCTCOU,
  _tCTD,
  _UAG,
  _UCCC,
  _UCCCR,
  _UCCCRp,
  _uG,
  _uIs,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AppliedCreatorModeConfiguration = struct(n0, _ACMC, 0, [_cMC], [0]);
export var AppliedOrchestrationConfiguration = struct(n0, _AOC, 0, [_co], [0]);
export var BlockedPhrasesConfiguration = struct(n0, _BPC, 0, [_bP, _sMO], [64 | 0, 0]);
export var BlockedPhrasesConfigurationUpdate = struct(n0, _BPCU, 0, [_bPTCOU, _bPTD, _sMO], [64 | 0, 64 | 0, 0]);
export var ContentBlockerRule = struct(n0, _CBR, 0, [_sMO], [0]);
export var ContentRetrievalRule = struct(n0, _CRR, 0, [_eDS], [() => EligibleDataSources]);
export var CreatorModeConfiguration = struct(n0, _CMC, 0, [_cMC], [0]);
export var EligibleDataSource = struct(n0, _EDS, 0, [_iI, _dSI], [0, 0]);
export var GetChatControlsConfigurationRequest = struct(
  n0,
  _GCCCR,
  0,
  [_aIp, _mRa, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetChatControlsConfigurationResponse = struct(
  n0,
  _GCCCRe,
  0,
  [_rS, _oC, _bP, _tC, _cMCr, _nT, _hRC],
  [
    0,
    () => AppliedOrchestrationConfiguration,
    () => BlockedPhrasesConfiguration,
    () => TopicConfigurations,
    () => AppliedCreatorModeConfiguration,
    0,
    () => HallucinationReductionConfiguration,
  ]
);
export var HallucinationReductionConfiguration = struct(n0, _HRC, 0, [_hRCa], [0]);
export var OrchestrationConfiguration = struct(n0, _OC, 0, [_co], [0]);
export var Rule = struct(
  n0,
  _Ru,
  0,
  [_iUAG, _eUAG, _rTu, _rCu],
  [() => UsersAndGroups, () => UsersAndGroups, 0, () => RuleConfiguration]
);
export var TopicConfiguration = struct(n0, _TC, 0, [_n, _d, _eCM, _ru], [0, 0, 64 | 0, () => Rules]);
export var UpdateChatControlsConfigurationRequest = struct(
  n0,
  _UCCCR,
  0,
  [_aIp, _cT, _rS, _oC, _bPCU, _tCTCOU, _tCTD, _cMCr, _hRC],
  [
    [0, 1],
    [0, 4],
    0,
    () => OrchestrationConfiguration,
    () => BlockedPhrasesConfigurationUpdate,
    () => TopicConfigurations,
    () => TopicConfigurations,
    () => CreatorModeConfiguration,
    () => HallucinationReductionConfiguration,
  ]
);
export var UpdateChatControlsConfigurationResponse = struct(n0, _UCCCRp, 0, [], []);
export var UsersAndGroups = struct(n0, _UAG, 0, [_uIs, _uG], [64 | 0, 64 | 0]);
export var BlockedPhrases = 64 | 0;

export var EligibleDataSources = list(n0, _EDSl, 0, () => EligibleDataSource);
export var ExampleChatMessages = 64 | 0;

export var Rules = list(n0, _Rul, 0, () => Rule);
export var TopicConfigurations = list(n0, _TCo, 0, () => TopicConfiguration);
export var UserGroups = 64 | 0;

export var UserIds = 64 | 0;

export var RuleConfiguration = uni(n0, _RCu, 0, [_cBR, _cRR], [() => ContentBlockerRule, () => ContentRetrievalRule]);
export var GetChatControlsConfiguration = op(
  n0,
  _GCCC,
  {
    [_ht]: ["GET", "/applications/{applicationId}/chatcontrols", 200],
  },
  () => GetChatControlsConfigurationRequest,
  () => GetChatControlsConfigurationResponse
);
export var UpdateChatControlsConfiguration = op(
  n0,
  _UCCC,
  {
    [_ht]: ["PATCH", "/applications/{applicationId}/chatcontrols", 200],
  },
  () => UpdateChatControlsConfigurationRequest,
  () => UpdateChatControlsConfigurationResponse
);
