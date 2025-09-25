// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _A,
  _a,
  _aMDC,
  _at,
  _C,
  _c,
  _ca,
  _CC,
  _cCFA,
  _CCR,
  _CCRr,
  _CF,
  _cII,
  _cLO,
  _CS,
  _cS,
  _cSC,
  _cSEA,
  _CSL,
  _cSL,
  _CSP,
  _cSP,
  _cSPN,
  _cSPNA,
  _cT,
  _cTC,
  _DCe,
  _DCRe,
  _DCRes,
  _dEA,
  _DPN,
  _dPN,
  _e,
  _ECSP,
  _em,
  _eTn,
  _eTx,
  _fC,
  _fi,
  _FPOR,
  _FPORL,
  _FR,
  _fR,
  _FRL,
  _h,
  _hE,
  _hH,
  _i,
  _IIF,
  _iIF,
  _LC,
  _LCR,
  _LCRi,
  _m,
  _mR,
  _n,
  _nT,
  _o,
  _OR,
  _oR,
  _ORL,
  _pI,
  _POR,
  _pOR,
  _PORB,
  _PORBR,
  _PORBRu,
  _PORL,
  _PPORB,
  _PPORBR,
  _PPORBRu,
  _rF,
  _S,
  _s,
  _sc,
  _SCSP,
  _sm,
  _SPOR,
  _SPORL,
  _SQEE,
  _SR,
  _sR,
  _SRL,
  _sT,
  _t,
  _tA,
  _TCSP,
  _te,
  _tP,
  _UCS,
  _UCSR,
  _v,
  _xaE,
  _xAET,
  n0,
  Unit,
} from "./schemas_0";
import { CommunicationLimitsConfig } from "./schemas_6_Limits";
import { CommunicationTimeConfig } from "./schemas_7_Campaign";
import { AnswerMachineDetectionConfig, ChannelSubtypeConfig, EmailAddress } from "./schemas_10_Campaign";
import { Source } from "./schemas_20_Campaign";

/* eslint no-var: 0 */

export var DestinationPhoneNumber = sim(n0, _DPN, 0, 8);
export var Campaign = struct(
  n0,
  _C,
  0,
  [_i, _a, _n, _cII, _cSC, _s, _cCFA, _sc, _cTC, _cLO, _t],
  [
    0,
    0,
    0,
    0,
    [() => ChannelSubtypeConfig, 0],
    () => Source,
    0,
    () => Schedule,
    () => CommunicationTimeConfig,
    () => CommunicationLimitsConfig,
    128 | 0,
  ]
);
export var CampaignFilters = struct(n0, _CF, 0, [_iIF], [() => InstanceIdFilter]);
export var CampaignSummary = struct(
  n0,
  _CS,
  0,
  [_i, _a, _n, _cII, _cS, _sc, _cCFA],
  [0, 0, 0, 0, 64 | 0, () => Schedule, 0]
);
export var CreateCampaignRequest = struct(
  n0,
  _CCR,
  0,
  [_n, _cII, _cSC, _s, _cCFA, _sc, _cTC, _cLO, _t],
  [
    0,
    0,
    [() => ChannelSubtypeConfig, 0],
    () => Source,
    0,
    () => Schedule,
    () => CommunicationTimeConfig,
    () => CommunicationLimitsConfig,
    128 | 0,
  ]
);
export var CreateCampaignResponse = struct(n0, _CCRr, 0, [_i, _a, _t], [0, 0, 128 | 0]);
export var DescribeCampaignRequest = struct(n0, _DCRe, 0, [_i], [[0, 1]]);
export var DescribeCampaignResponse = struct(n0, _DCRes, 0, [_ca], [[() => Campaign, 0]]);
export var EmailChannelSubtypeParameters = struct(
  n0,
  _ECSP,
  0,
  [_dEA, _cSEA, _tA, _tP],
  [[() => EmailAddress, 0], [() => EmailAddress, 0], 0, [() => Attributes, 0]]
);
export var FailedProfileOutboundRequest = struct(n0, _FPOR, 0, [_cT, _i, _fC], [0, 0, 0]);
export var FailedRequest = struct(n0, _FR, 0, [_cT, _i, _fC], [0, 0, 0]);
export var InstanceIdFilter = struct(n0, _IIF, 0, [_v, _o], [0, 0]);
export var ListCampaignsRequest = struct(n0, _LCR, 0, [_mR, _nT, _fi], [1, 0, () => CampaignFilters]);
export var ListCampaignsResponse = struct(n0, _LCRi, 0, [_nT, _cSL], [0, () => CampaignSummaryList]);
export var OutboundRequest = struct(n0, _OR, 0, [_cT, _eTx, _cSP], [0, 5, [() => ChannelSubtypeParameters, 0]]);
export var ProfileOutboundRequest = struct(n0, _POR, 0, [_cT, _pI, _eTx], [0, 0, 5]);
export var PutOutboundRequestBatchRequest = struct(
  n0,
  _PORBR,
  0,
  [_i, _oR],
  [
    [0, 1],
    [() => OutboundRequestList, 0],
  ]
);
export var PutOutboundRequestBatchResponse = struct(
  n0,
  _PORBRu,
  0,
  [_sR, _fR],
  [() => SuccessfulRequestList, () => FailedRequestList]
);
export var PutProfileOutboundRequestBatchRequest = struct(
  n0,
  _PPORBR,
  0,
  [_i, _pOR],
  [[0, 1], () => ProfileOutboundRequestList]
);
export var PutProfileOutboundRequestBatchResponse = struct(
  n0,
  _PPORBRu,
  0,
  [_sR, _fR],
  [() => SuccessfulProfileOutboundRequestList, () => FailedProfileOutboundRequestList]
);
export var Schedule = struct(n0, _S, 0, [_sT, _eTn, _rF], [5, 5, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _xAET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],

  __ServiceQuotaExceededException
);
export var SmsChannelSubtypeParameters = struct(
  n0,
  _SCSP,
  0,
  [_dPN, _cSPNA, _tA, _tP],
  [[() => DestinationPhoneNumber, 0], 0, 0, [() => Attributes, 0]]
);
export var SuccessfulProfileOutboundRequest = struct(n0, _SPOR, 0, [_cT, _i], [0, 0]);
export var SuccessfulRequest = struct(n0, _SR, 0, [_cT, _i], [0, 0]);
export var TelephonyChannelSubtypeParameters = struct(
  n0,
  _TCSP,
  0,
  [_dPN, _at, _cSPN, _aMDC],
  [[() => DestinationPhoneNumber, 0], [() => Attributes, 0], 0, () => AnswerMachineDetectionConfig]
);
export var UpdateCampaignScheduleRequest = struct(n0, _UCSR, 0, [_i, _sc], [[0, 1], () => Schedule]);
export var CampaignSummaryList = list(n0, _CSL, 0, () => CampaignSummary);
export var ChannelSubtypeList = 64 | 0;

export var FailedProfileOutboundRequestList = list(n0, _FPORL, 0, () => FailedProfileOutboundRequest);
export var FailedRequestList = list(n0, _FRL, 0, () => FailedRequest);
export var OutboundRequestList = list(n0, _ORL, 0, [() => OutboundRequest, 0]);
export var ProfileOutboundRequestList = list(n0, _PORL, 0, () => ProfileOutboundRequest);
export var SuccessfulProfileOutboundRequestList = list(n0, _SPORL, 0, () => SuccessfulProfileOutboundRequest);
export var SuccessfulRequestList = list(n0, _SRL, 0, () => SuccessfulRequest);
export var Attributes = map(n0, _A, 8, 0, 0);
export var ChannelSubtypeParameters = uni(
  n0,
  _CSP,
  0,
  [_te, _sm, _em],
  [
    [() => TelephonyChannelSubtypeParameters, 0],
    [() => SmsChannelSubtypeParameters, 0],
    [() => EmailChannelSubtypeParameters, 0],
  ]
);
export var CreateCampaign = op(
  n0,
  _CC,
  {
    [_h]: ["PUT", "/v2/campaigns", 200],
  },
  () => CreateCampaignRequest,
  () => CreateCampaignResponse
);
export var DescribeCampaign = op(
  n0,
  _DCe,
  {
    [_h]: ["GET", "/v2/campaigns/{id}", 200],
  },
  () => DescribeCampaignRequest,
  () => DescribeCampaignResponse
);
export var ListCampaigns = op(
  n0,
  _LC,
  {
    [_h]: ["POST", "/v2/campaigns-summary", 200],
  },
  () => ListCampaignsRequest,
  () => ListCampaignsResponse
);
export var PutOutboundRequestBatch = op(
  n0,
  _PORB,
  {
    [_h]: ["PUT", "/v2/campaigns/{id}/outbound-requests", 200],
  },
  () => PutOutboundRequestBatchRequest,
  () => PutOutboundRequestBatchResponse
);
export var PutProfileOutboundRequestBatch = op(
  n0,
  _PPORB,
  {
    [_h]: ["PUT", "/v2/campaigns/{id}/profile-outbound-requests", 200],
  },
  () => PutProfileOutboundRequestBatchRequest,
  () => PutProfileOutboundRequestBatchResponse
);
export var UpdateCampaignSchedule = op(
  n0,
  _UCS,
  {
    [_h]: ["POST", "/v2/campaigns/{id}/schedule", 200],
  },
  () => UpdateCampaignScheduleRequest,
  () => Unit
);
