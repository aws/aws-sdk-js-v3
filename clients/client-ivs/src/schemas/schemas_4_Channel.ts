// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _AC,
  _ACL,
  _aCu,
  _aL,
  _aP,
  _ar,
  _au,
  _aud,
  _BGC,
  _BGCR,
  _BGCRa,
  _C,
  _cA,
  _CC,
  _CCR,
  _CCRr,
  _cF,
  _Ch,
  _ch,
  _cha,
  _co,
  _cod,
  _dC,
  _en,
  _enc,
  _end,
  _er,
  _eT,
  _eTn,
  _GC,
  _GCR,
  _GCRe,
  _GRC,
  _GRCR,
  _GRCRe,
  _GSS,
  _GSSR,
  _GSSRe,
  _ht,
  _IC,
  _iC,
  _ICn,
  _iCn,
  _iE,
  _iI,
  _l,
  _lM,
  _MIC,
  _mIC,
  _mRa,
  _n,
  _p,
  _pa,
  _po,
  _pr,
  _pRPA,
  _pU,
  _r,
  _RC,
  _rC,
  _rCA,
  _RCe,
  _rCe,
  _re,
  _rM,
  _rRWS,
  _rS,
  _S,
  _s,
  _SE,
  _SEt,
  _sI,
  _sKt,
  _SP,
  _sR,
  _SS,
  _sS,
  _sT,
  _sta,
  _sto,
  _t,
  _ta,
  _tB,
  _TC,
  _tC,
  _tE,
  _tF,
  _tIS,
  _ty,
  _v,
  _VC,
  _vC,
  _VCL,
  _vH,
  _vW,
  n0,
} from "./schemas_0";
import { StreamKey } from "./schemas_1_Stream";
import { BatchErrors } from "./schemas_8_Resource";
import { DestinationConfiguration } from "./schemas_10_Recording";

/* eslint no-var: 0 */

export var SrtPassphrase = sim(n0, _SP, 0, 8);
export var AudioConfiguration = struct(n0, _AC, 0, [_co, _tB, _sR, _ch, _t], [0, 1, 1, 1, 0]);
export var BatchGetChannelRequest = struct(n0, _BGCR, 0, [_ar], [64 | 0]);
export var BatchGetChannelResponse = struct(n0, _BGCRa, 0, [_ch, _er], [[() => Channels, 0], () => BatchErrors]);
export var Channel = struct(
  n0,
  _C,
  0,
  [_a, _n, _lM, _ty, _rCA, _iE, _pU, _au, _ta, _iI, _p, _s, _pRPA, _mIC, _cF],
  [0, 0, 0, 0, 0, 0, 0, 2, 128 | 0, 2, 0, [() => Srt, 0], 0, () => MultitrackInputConfiguration, 0]
);
export var CreateChannelRequest = struct(
  n0,
  _CCR,
  0,
  [_n, _lM, _ty, _au, _rCA, _ta, _iI, _p, _pRPA, _mIC, _cF],
  [0, 0, 0, 2, 0, 128 | 0, 2, 0, 0, () => MultitrackInputConfiguration, 0]
);
export var CreateChannelResponse = struct(
  n0,
  _CCRr,
  0,
  [_cha, _sKt],
  [
    [() => Channel, 0],
    [() => StreamKey, 0],
  ]
);
export var GetChannelRequest = struct(n0, _GCR, 0, [_a], [0]);
export var GetChannelResponse = struct(n0, _GCRe, 0, [_cha], [[() => Channel, 0]]);
export var GetRecordingConfigurationRequest = struct(n0, _GRCR, 0, [_a], [0]);
export var GetRecordingConfigurationResponse = struct(n0, _GRCRe, 0, [_rCe], [() => RecordingConfiguration]);
export var GetStreamSessionRequest = struct(n0, _GSSR, 0, [_cA, _sI], [0, 0]);
export var GetStreamSessionResponse = struct(n0, _GSSRe, 0, [_sS], [[() => StreamSession, 0]]);
export var IngestConfiguration = struct(n0, _IC, 0, [_v, _aud], [() => VideoConfiguration, () => AudioConfiguration]);
export var IngestConfigurations = struct(
  n0,
  _ICn,
  0,
  [_vC, _aCu],
  [() => VideoConfigurationList, () => AudioConfigurationList]
);
export var MultitrackInputConfiguration = struct(n0, _MIC, 0, [_en, _po, _mRa], [2, 0, 0]);
export var RecordingConfiguration = struct(
  n0,
  _RC,
  0,
  [_a, _n, _dC, _sta, _ta, _tC, _rRWS, _rC],
  [0, 0, () => DestinationConfiguration, 0, 128 | 0, () => ThumbnailConfiguration, 1, () => RenditionConfiguration]
);
export var RenditionConfiguration = struct(n0, _RCe, 0, [_rS, _r], [0, 64 | 0]);
export var Srt = struct(n0, _S, 0, [_end, _pa], [0, [() => SrtPassphrase, 0]]);
export var StreamEvent = struct(n0, _SE, 0, [_n, _ty, _eT, _cod], [0, 0, 5, 0]);
export var StreamSession = struct(
  n0,
  _SS,
  0,
  [_sI, _sT, _eTn, _cha, _iC, _iCn, _rCe, _tE],
  [
    0,
    5,
    5,
    [() => Channel, 0],
    () => IngestConfiguration,
    () => IngestConfigurations,
    () => RecordingConfiguration,
    () => StreamEvents,
  ]
);
export var ThumbnailConfiguration = struct(n0, _TC, 0, [_rM, _tIS, _re, _sto], [0, 1, 0, 64 | 0]);
export var VideoConfiguration = struct(
  n0,
  _VC,
  0,
  [_aP, _aL, _co, _enc, _tB, _tF, _vH, _vW, _l, _t, _pr],
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
);
export var Unit = "unit" as const;

export var AudioConfigurationList = list(n0, _ACL, 0, () => AudioConfiguration);
export var ChannelArnList = 64 | 0;

export var Channels = list(n0, _Ch, 0, [() => Channel, 0]);
export var RenditionConfigurationRenditionList = 64 | 0;

export var StreamEvents = list(n0, _SEt, 0, () => StreamEvent);
export var ThumbnailConfigurationStorageList = 64 | 0;

export var VideoConfigurationList = list(n0, _VCL, 0, () => VideoConfiguration);
export var BatchGetChannel = op(
  n0,
  _BGC,
  {
    [_ht]: ["POST", "/BatchGetChannel", 200],
  },
  () => BatchGetChannelRequest,
  () => BatchGetChannelResponse
);
export var CreateChannel = op(
  n0,
  _CC,
  {
    [_ht]: ["POST", "/CreateChannel", 200],
  },
  () => CreateChannelRequest,
  () => CreateChannelResponse
);
export var GetChannel = op(
  n0,
  _GC,
  {
    [_ht]: ["POST", "/GetChannel", 200],
  },
  () => GetChannelRequest,
  () => GetChannelResponse
);
export var GetRecordingConfiguration = op(
  n0,
  _GRC,
  {
    [_ht]: ["POST", "/GetRecordingConfiguration", 200],
  },
  () => GetRecordingConfigurationRequest,
  () => GetRecordingConfigurationResponse
);
export var GetStreamSession = op(
  n0,
  _GSS,
  {
    [_ht]: ["POST", "/GetStreamSession", 200],
  },
  () => GetStreamSessionRequest,
  () => GetStreamSessionResponse
);
