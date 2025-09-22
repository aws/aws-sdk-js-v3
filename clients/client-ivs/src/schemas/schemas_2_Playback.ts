// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _a,
  _aC,
  _aO,
  _au,
  _c,
  _CE,
  _cF,
  _ch,
  _cha,
  _CL,
  _CRC,
  _CRCR,
  _CRCRr,
  _CS,
  _dC,
  _DCe,
  _DCR,
  _DPRP,
  _DPRPR,
  _DRC,
  _DRCR,
  _e,
  _eM,
  _eSOE,
  _fBN,
  _fBPRPA,
  _fBRCA,
  _hE,
  _ht,
  _iI,
  _IPKP,
  _IPKPR,
  _IPKPRm,
  _kP,
  _LC,
  _LCR,
  _LCRi,
  _lM,
  _LPRP,
  _LPRPR,
  _LPRPRi,
  _mIC,
  _mR,
  _n,
  _nT,
  _p,
  _pKM,
  _pRP,
  _pRPA,
  _PRPL,
  _pRPl,
  _PRPS,
  _rC,
  _rCA,
  _rCe,
  _rRWS,
  _ta,
  _tC,
  _ty,
  _UC,
  _UCR,
  _UCRp,
  _UPRP,
  _UPRPR,
  _UPRPRp,
  n0,
} from "./schemas_0";
import {
  Channel,
  MultitrackInputConfiguration,
  RecordingConfiguration,
  RenditionConfiguration,
  ThumbnailConfiguration,
  Unit,
} from "./schemas_4_Channel";
import { PlaybackKeyPair } from "./schemas_9_Playback";
import { DestinationConfiguration } from "./schemas_10_Recording";
import { PlaybackRestrictionPolicy } from "./schemas_11_Restriction";

/* eslint no-var: 0 */

export var ChannelSummary = struct(
  n0,
  _CS,
  0,
  [_a, _n, _lM, _au, _rCA, _ta, _iI, _ty, _p, _pRPA],
  [0, 0, 0, 2, 0, 128 | 0, 2, 0, 0, 0]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_eM],
  [0],

  __ConflictException
);
export var CreateRecordingConfigurationRequest = struct(
  n0,
  _CRCR,
  0,
  [_n, _dC, _ta, _tC, _rRWS, _rC],
  [0, () => DestinationConfiguration, 128 | 0, () => ThumbnailConfiguration, 1, () => RenditionConfiguration]
);
export var CreateRecordingConfigurationResponse = struct(n0, _CRCRr, 0, [_rCe], [() => RecordingConfiguration]);
export var DeleteChannelRequest = struct(n0, _DCR, 0, [_a], [0]);
export var DeletePlaybackRestrictionPolicyRequest = struct(n0, _DPRPR, 0, [_a], [0]);
export var DeleteRecordingConfigurationRequest = struct(n0, _DRCR, 0, [_a], [0]);
export var ImportPlaybackKeyPairRequest = struct(n0, _IPKPR, 0, [_pKM, _n, _ta], [0, 0, 128 | 0]);
export var ImportPlaybackKeyPairResponse = struct(n0, _IPKPRm, 0, [_kP], [() => PlaybackKeyPair]);
export var ListChannelsRequest = struct(n0, _LCR, 0, [_fBN, _fBRCA, _fBPRPA, _nT, _mR], [0, 0, 0, 0, 1]);
export var ListChannelsResponse = struct(n0, _LCRi, 0, [_ch, _nT], [() => ChannelList, 0]);
export var ListPlaybackRestrictionPoliciesRequest = struct(n0, _LPRPR, 0, [_nT, _mR], [0, 1]);
export var ListPlaybackRestrictionPoliciesResponse = struct(
  n0,
  _LPRPRi,
  0,
  [_pRPl, _nT],
  [() => PlaybackRestrictionPolicyList, 0]
);
export var PlaybackRestrictionPolicySummary = struct(
  n0,
  _PRPS,
  0,
  [_a, _aC, _aO, _eSOE, _n, _ta],
  [0, 64 | 0, 64 | 0, 2, 0, 128 | 0]
);
export var UpdateChannelRequest = struct(
  n0,
  _UCR,
  0,
  [_a, _n, _lM, _ty, _au, _rCA, _iI, _p, _pRPA, _mIC, _cF],
  [0, 0, 0, 0, 2, 0, 2, 0, 0, () => MultitrackInputConfiguration, 0]
);
export var UpdateChannelResponse = struct(n0, _UCRp, 0, [_cha], [[() => Channel, 0]]);
export var UpdatePlaybackRestrictionPolicyRequest = struct(
  n0,
  _UPRPR,
  0,
  [_a, _aC, _aO, _eSOE, _n],
  [0, 64 | 0, 64 | 0, 2, 0]
);
export var UpdatePlaybackRestrictionPolicyResponse = struct(n0, _UPRPRp, 0, [_pRP], [() => PlaybackRestrictionPolicy]);
export var ChannelList = list(n0, _CL, 0, () => ChannelSummary);
export var PlaybackRestrictionPolicyList = list(n0, _PRPL, 0, () => PlaybackRestrictionPolicySummary);
export var CreateRecordingConfiguration = op(
  n0,
  _CRC,
  {
    [_ht]: ["POST", "/CreateRecordingConfiguration", 200],
  },
  () => CreateRecordingConfigurationRequest,
  () => CreateRecordingConfigurationResponse
);
export var DeleteChannel = op(
  n0,
  _DCe,
  {
    [_ht]: ["POST", "/DeleteChannel", 204],
  },
  () => DeleteChannelRequest,
  () => Unit
);
export var DeletePlaybackRestrictionPolicy = op(
  n0,
  _DPRP,
  {
    [_ht]: ["POST", "/DeletePlaybackRestrictionPolicy", 204],
  },
  () => DeletePlaybackRestrictionPolicyRequest,
  () => Unit
);
export var DeleteRecordingConfiguration = op(
  n0,
  _DRC,
  {
    [_ht]: ["POST", "/DeleteRecordingConfiguration", 204],
  },
  () => DeleteRecordingConfigurationRequest,
  () => Unit
);
export var ImportPlaybackKeyPair = op(
  n0,
  _IPKP,
  {
    [_ht]: ["POST", "/ImportPlaybackKeyPair", 200],
  },
  () => ImportPlaybackKeyPairRequest,
  () => ImportPlaybackKeyPairResponse
);
export var ListChannels = op(
  n0,
  _LC,
  {
    [_ht]: ["POST", "/ListChannels", 200],
  },
  () => ListChannelsRequest,
  () => ListChannelsResponse
);
export var ListPlaybackRestrictionPolicies = op(
  n0,
  _LPRP,
  {
    [_ht]: ["POST", "/ListPlaybackRestrictionPolicies", 200],
  },
  () => ListPlaybackRestrictionPoliciesRequest,
  () => ListPlaybackRestrictionPoliciesResponse
);
export var UpdateChannel = op(
  n0,
  _UC,
  {
    [_ht]: ["POST", "/UpdateChannel", 200],
  },
  () => UpdateChannelRequest,
  () => UpdateChannelResponse
);
export var UpdatePlaybackRestrictionPolicy = op(
  n0,
  _UPRP,
  {
    [_ht]: ["POST", "/UpdatePlaybackRestrictionPolicy", 200],
  },
  () => UpdatePlaybackRestrictionPolicyRequest,
  () => UpdatePlaybackRestrictionPolicyResponse
);
