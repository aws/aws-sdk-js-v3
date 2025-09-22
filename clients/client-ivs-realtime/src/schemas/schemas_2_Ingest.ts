// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _APRC,
  _aPRC,
  _aSI,
  _at,
  _bN,
  _bV,
  _C,
  _cA,
  _ca,
  _CDC,
  _ch,
  _CIC,
  _CICR,
  _CICRr,
  _co,
  _com,
  _CRHC,
  _CSR,
  _CSr,
  _CSRr,
  _CTC,
  _CTCL,
  _D,
  _d,
  _DC,
  _DCL,
  _DD,
  _de,
  _DL,
  _dSA,
  _dSI,
  _du,
  _E,
  _eCA,
  _eCAn,
  _eCr,
  _EL,
  _en,
  _eT,
  _eTv,
  _ev,
  _fBS,
  _fBSA,
  _fJT,
  _fo,
  _fPA,
  _g,
  _GC,
  _GCe,
  _GCR,
  _GCRe,
  _gG,
  _GIC,
  _GICR,
  _GICRe,
  _GP,
  _GPR,
  _GPRe,
  _GS,
  _GSR,
  _GSRe,
  _hC,
  _ht,
  _i,
  _IC,
  _iC,
  _ICL,
  _iCn,
  _ICS,
  _iI,
  _iN,
  _iP,
  _iT,
  _l,
  _LC,
  _LIC,
  _LICR,
  _LICRi,
  _LPE,
  _LPER,
  _LPERi,
  _mR,
  _mT,
  _n,
  _nT,
  _oN,
  _oSV,
  _oV,
  _P,
  _p,
  _pB,
  _PC,
  _pH,
  _pI,
  _pi,
  _pO,
  _pOA,
  _pP,
  _pPA,
  _pr,
  _PRHC,
  _pTa,
  _PTC,
  _pTC,
  _PTCa,
  _PTCar,
  _PTL,
  _pu,
  _pW,
  _RC,
  _rC,
  _re,
  _rM,
  _rP,
  _rPI,
  _rPR,
  _rRWS,
  _rS,
  _rSBN,
  _rSe,
  _rSP,
  _rT,
  _rt,
  _rtm,
  _S,
  _s,
  _s_,
  _sA,
  _sCA,
  _SCR,
  _SCRt,
  _SCt,
  _SD,
  _SDC,
  _SE,
  _sI,
  _SK,
  _sK,
  _sSA,
  _sSI,
  _sT,
  _st,
  _sta,
  _sV,
  _t,
  _tC,
  _tCh,
  _tIS,
  _tSDS,
  _uI,
  _UIC,
  _UICR,
  _UICRp,
  _US,
  _USR,
  _USRp,
  _vAR,
  _vFM,
  _w,
  n0,
} from "./schemas_0";
import { ParticipantToken } from "./schemas_6_Participant";

/* eslint no-var: 0 */

export var StreamKey = sim(n0, _SK, 0, 8);
export var AutoParticipantRecordingConfiguration = struct(
  n0,
  _APRC,
  0,
  [_sCA, _mT, _tC, _rRWS, _hC, _rPR],
  [0, 64 | 0, () => ParticipantThumbnailConfiguration, 1, () => ParticipantRecordingHlsConfiguration, 2]
);
export var ChannelDestinationConfiguration = struct(n0, _CDC, 0, [_cA, _eCA], [0, 0]);
export var Composition = struct(
  n0,
  _C,
  0,
  [_a, _sA, _s, _l, _d, _t, _sT, _eT],
  [0, 0, 0, () => LayoutConfiguration, () => DestinationList, 128 | 0, 5, 5]
);
export var CompositionRecordingHlsConfiguration = struct(n0, _CRHC, 0, [_tSDS], [1]);
export var CompositionThumbnailConfiguration = struct(n0, _CTC, 0, [_tIS, _st], [1, 64 | 0]);
export var CreateIngestConfigurationRequest = struct(
  n0,
  _CICR,
  0,
  [_n, _sA, _uI, _at, _iP, _iI, _t],
  [0, 0, 0, 128 | 0, 0, 2, 128 | 0]
);
export var CreateIngestConfigurationResponse = struct(n0, _CICRr, 0, [_iC], [[() => IngestConfiguration, 0]]);
export var CreateStageRequest = struct(
  n0,
  _CSR,
  0,
  [_n, _pTC, _t, _aPRC],
  [0, () => ParticipantTokenConfigurations, 128 | 0, () => AutoParticipantRecordingConfiguration]
);
export var CreateStageResponse = struct(n0, _CSRr, 0, [_sta, _pTa], [() => Stage, [() => ParticipantTokenList, 0]]);
export var Destination = struct(
  n0,
  _D,
  0,
  [_i, _s, _sT, _eT, _co, _de],
  [0, 0, 5, 5, () => DestinationConfiguration, () => DestinationDetail]
);
export var DestinationConfiguration = struct(
  n0,
  _DC,
  0,
  [_n, _ch, _s_],
  [0, () => ChannelDestinationConfiguration, () => S3DestinationConfiguration]
);
export var DestinationDetail = struct(n0, _DD, 0, [_s_], [() => S3Detail]);
export var Event = struct(n0, _E, 0, [_n, _pI, _eTv, _rPI, _eCr, _dSA, _dSI, _re], [0, 0, 5, 0, 0, 0, 0, 2]);
export var GetCompositionRequest = struct(n0, _GCR, 0, [_a], [0]);
export var GetCompositionResponse = struct(n0, _GCRe, 0, [_com], [() => Composition]);
export var GetIngestConfigurationRequest = struct(n0, _GICR, 0, [_a], [0]);
export var GetIngestConfigurationResponse = struct(n0, _GICRe, 0, [_iC], [[() => IngestConfiguration, 0]]);
export var GetParticipantRequest = struct(n0, _GPR, 0, [_sA, _sI, _pI], [0, 0, 0]);
export var GetParticipantResponse = struct(n0, _GPRe, 0, [_p], [() => Participant]);
export var GetStageRequest = struct(n0, _GSR, 0, [_a], [0]);
export var GetStageResponse = struct(n0, _GSRe, 0, [_sta], [() => Stage]);
export var GridConfiguration = struct(n0, _GC, 0, [_fPA, _oSV, _vAR, _vFM, _gG, _pOA], [0, 2, 0, 0, 1, 0]);
export var IngestConfiguration = struct(
  n0,
  _IC,
  0,
  [_n, _a, _iP, _sK, _sA, _pI, _s, _uI, _at, _t],
  [0, 0, 0, [() => StreamKey, 0], 0, 0, 0, 0, 128 | 0, 128 | 0]
);
export var IngestConfigurationSummary = struct(n0, _ICS, 0, [_n, _a, _iP, _sA, _pI, _s, _uI], [0, 0, 0, 0, 0, 0, 0]);
export var LayoutConfiguration = struct(n0, _LC, 0, [_g, _pi], [() => GridConfiguration, () => PipConfiguration]);
export var ListIngestConfigurationsRequest = struct(n0, _LICR, 0, [_fBSA, _fBS, _nT, _mR], [0, 0, 0, 1]);
export var ListIngestConfigurationsResponse = struct(n0, _LICRi, 0, [_iCn, _nT], [() => IngestConfigurationList, 0]);
export var ListParticipantEventsRequest = struct(n0, _LPER, 0, [_sA, _sI, _pI, _nT, _mR], [0, 0, 0, 0, 1]);
export var ListParticipantEventsResponse = struct(n0, _LPERi, 0, [_ev, _nT], [() => EventList, 0]);
export var Participant = struct(
  n0,
  _P,
  0,
  [_pI, _uI, _s, _fJT, _at, _pu, _iN, _oN, _oV, _bN, _bV, _sV, _rSBN, _rSP, _rS, _pr, _rT, _rSe, _sSA, _sSI],
  [0, 0, 0, 5, 128 | 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ParticipantRecordingHlsConfiguration = struct(n0, _PRHC, 0, [_tSDS], [1]);
export var ParticipantThumbnailConfiguration = struct(n0, _PTC, 0, [_tIS, _st, _rM], [1, 64 | 0, 0]);
export var ParticipantTokenConfiguration = struct(n0, _PTCa, 0, [_du, _uI, _at, _ca], [1, 0, 128 | 0, 64 | 0]);
export var PipConfiguration = struct(
  n0,
  _PC,
  0,
  [_fPA, _oSV, _vFM, _gG, _pPA, _pB, _pO, _pP, _pW, _pH, _pOA],
  [0, 2, 0, 1, 0, 0, 1, 0, 1, 1, 0]
);
export var RecordingConfiguration = struct(n0, _RC, 0, [_hC, _fo], [() => CompositionRecordingHlsConfiguration, 0]);
export var S3DestinationConfiguration = struct(
  n0,
  _SDC,
  0,
  [_sCA, _eCAn, _rC, _tCh],
  [0, 64 | 0, () => RecordingConfiguration, () => CompositionThumbnailConfigurationList]
);
export var S3Detail = struct(n0, _SD, 0, [_rP], [0]);
export var Stage = struct(
  n0,
  _S,
  0,
  [_a, _n, _aSI, _t, _aPRC, _en],
  [0, 0, 0, 128 | 0, () => AutoParticipantRecordingConfiguration, () => StageEndpoints]
);
export var StageEndpoints = struct(n0, _SE, 0, [_ev, _w, _rt, _rtm], [0, 0, 0, 0]);
export var StartCompositionRequest = struct(
  n0,
  _SCR,
  0,
  [_sA, _iT, _l, _d, _t],
  [0, [0, 4], () => LayoutConfiguration, () => DestinationConfigurationList, 128 | 0]
);
export var StartCompositionResponse = struct(n0, _SCRt, 0, [_com], [() => Composition]);
export var UpdateIngestConfigurationRequest = struct(n0, _UICR, 0, [_a, _sA], [0, 0]);
export var UpdateIngestConfigurationResponse = struct(n0, _UICRp, 0, [_iC], [[() => IngestConfiguration, 0]]);
export var UpdateStageRequest = struct(
  n0,
  _USR,
  0,
  [_a, _n, _aPRC],
  [0, 0, () => AutoParticipantRecordingConfiguration]
);
export var UpdateStageResponse = struct(n0, _USRp, 0, [_sta], [() => Stage]);
export var Unit = "unit" as const;

export var CompositionThumbnailConfigurationList = list(n0, _CTCL, 0, () => CompositionThumbnailConfiguration);
export var DestinationConfigurationList = list(n0, _DCL, 0, () => DestinationConfiguration);
export var DestinationList = list(n0, _DL, 0, () => Destination);
export var EncoderConfigurationArnList = 64 | 0;

export var EventList = list(n0, _EL, 0, () => Event);
export var IngestConfigurationList = list(n0, _ICL, 0, () => IngestConfigurationSummary);
export var ParticipantRecordingMediaTypeList = 64 | 0;

export var ParticipantTokenConfigurations = list(n0, _PTCar, 0, () => ParticipantTokenConfiguration);
export var ParticipantTokenList = list(n0, _PTL, 0, [() => ParticipantToken, 0]);
export var ThumbnailStorageTypeList = 64 | 0;

export var CreateIngestConfiguration = op(
  n0,
  _CIC,
  {
    [_ht]: ["POST", "/CreateIngestConfiguration", 200],
  },
  () => CreateIngestConfigurationRequest,
  () => CreateIngestConfigurationResponse
);
export var CreateStage = op(
  n0,
  _CSr,
  {
    [_ht]: ["POST", "/CreateStage", 200],
  },
  () => CreateStageRequest,
  () => CreateStageResponse
);
export var GetComposition = op(
  n0,
  _GCe,
  {
    [_ht]: ["POST", "/GetComposition", 200],
  },
  () => GetCompositionRequest,
  () => GetCompositionResponse
);
export var GetIngestConfiguration = op(
  n0,
  _GIC,
  {
    [_ht]: ["POST", "/GetIngestConfiguration", 200],
  },
  () => GetIngestConfigurationRequest,
  () => GetIngestConfigurationResponse
);
export var GetParticipant = op(
  n0,
  _GP,
  {
    [_ht]: ["POST", "/GetParticipant", 200],
  },
  () => GetParticipantRequest,
  () => GetParticipantResponse
);
export var GetStage = op(
  n0,
  _GS,
  {
    [_ht]: ["POST", "/GetStage", 200],
  },
  () => GetStageRequest,
  () => GetStageResponse
);
export var ListIngestConfigurations = op(
  n0,
  _LIC,
  {
    [_ht]: ["POST", "/ListIngestConfigurations", 200],
  },
  () => ListIngestConfigurationsRequest,
  () => ListIngestConfigurationsResponse
);
export var ListParticipantEvents = op(
  n0,
  _LPE,
  {
    [_ht]: ["POST", "/ListParticipantEvents", 200],
  },
  () => ListParticipantEventsRequest,
  () => ListParticipantEventsResponse
);
export var StartComposition = op(
  n0,
  _SCt,
  {
    [_ht]: ["POST", "/StartComposition", 200],
  },
  () => StartCompositionRequest,
  () => StartCompositionResponse
);
export var UpdateIngestConfiguration = op(
  n0,
  _UIC,
  {
    [_ht]: ["POST", "/UpdateIngestConfiguration", 200],
  },
  () => UpdateIngestConfigurationRequest,
  () => UpdateIngestConfigurationResponse
);
export var UpdateStage = op(
  n0,
  _US,
  {
    [_ht]: ["POST", "/UpdateStage", 200],
  },
  () => UpdateStageRequest,
  () => UpdateStageResponse
);
