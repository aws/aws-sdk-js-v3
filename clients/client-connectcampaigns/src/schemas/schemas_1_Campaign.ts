// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  InvalidCampaignStateException as __InvalidCampaignStateException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _A,
  _a,
  _aMDC,
  _at,
  _c,
  _CC,
  _cCFI,
  _CCR,
  _CCRr,
  _CE,
  _cII,
  _cIOJS,
  _cSPN,
  _cT,
  _dCi,
  _DPN,
  _DR,
  _dR,
  _DRL,
  _e,
  _eC,
  _eT,
  _fC,
  _FR,
  _fR,
  _FRL,
  _h,
  _hE,
  _hH,
  _i,
  _ICSE,
  _m,
  _n,
  _oCC,
  _PC,
  _PCR,
  _PDRB,
  _PDRBR,
  _PDRBRu,
  _pN,
  _RC,
  _RCR,
  _s,
  _SC,
  _SCR,
  _SCRt,
  _SCt,
  _SIOJ,
  _SIOJR,
  _SIOJRt,
  _SQEE,
  _SR,
  _sR,
  _SRL,
  _t,
  _UCDC,
  _UCDCR,
  _UCN,
  _UCNR,
  _UCOCC,
  _UCOCCR,
  _xaE,
  _xAET,
  n0,
  Unit,
} from "./schemas_0";
import { EncryptionConfig, InstanceOnboardingJobStatus, OutboundCallConfig } from "./schemas_3_Instance";
import { AnswerMachineDetectionConfig } from "./schemas_4_Campaign";
import { DialerConfig } from "./schemas_5_Campaign";

/* eslint no-var: 0 */

export var DestinationPhoneNumber = sim(n0, _DPN, 0, 8);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
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

  __ConflictException
);
export var CreateCampaignRequest = struct(
  n0,
  _CCR,
  0,
  [_n, _cII, _dCi, _oCC, _t],
  [0, 0, () => DialerConfig, () => OutboundCallConfig, 128 | 0]
);
export var CreateCampaignResponse = struct(n0, _CCRr, 0, [_i, _a, _t], [0, 0, 128 | 0]);
export var DialRequest = struct(
  n0,
  _DR,
  0,
  [_cT, _pN, _eT, _at],
  [0, [() => DestinationPhoneNumber, 0], 5, [() => Attributes, 0]]
);
export var FailedRequest = struct(n0, _FR, 0, [_cT, _i, _fC], [0, 0, 0]);
export var InvalidCampaignStateException = error(
  n0,
  _ICSE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_s, _m, _xAET],
  [
    0,
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],

  __InvalidCampaignStateException
);
export var PauseCampaignRequest = struct(n0, _PCR, 0, [_i], [[0, 1]]);
export var PutDialRequestBatchRequest = struct(
  n0,
  _PDRBR,
  0,
  [_i, _dR],
  [
    [0, 1],
    [() => DialRequestList, 0],
  ]
);
export var PutDialRequestBatchResponse = struct(
  n0,
  _PDRBRu,
  0,
  [_sR, _fR],
  [() => SuccessfulRequestList, () => FailedRequestList]
);
export var ResumeCampaignRequest = struct(n0, _RCR, 0, [_i], [[0, 1]]);
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
export var StartCampaignRequest = struct(n0, _SCR, 0, [_i], [[0, 1]]);
export var StartInstanceOnboardingJobRequest = struct(n0, _SIOJR, 0, [_cII, _eC], [[0, 1], () => EncryptionConfig]);
export var StartInstanceOnboardingJobResponse = struct(n0, _SIOJRt, 0, [_cIOJS], [() => InstanceOnboardingJobStatus]);
export var StopCampaignRequest = struct(n0, _SCRt, 0, [_i], [[0, 1]]);
export var SuccessfulRequest = struct(n0, _SR, 0, [_cT, _i], [0, 0]);
export var UpdateCampaignDialerConfigRequest = struct(n0, _UCDCR, 0, [_i, _dCi], [[0, 1], () => DialerConfig]);
export var UpdateCampaignNameRequest = struct(n0, _UCNR, 0, [_i, _n], [[0, 1], 0]);
export var UpdateCampaignOutboundCallConfigRequest = struct(
  n0,
  _UCOCCR,
  0,
  [_i, _cCFI, _cSPN, _aMDC],
  [[0, 1], 0, 0, () => AnswerMachineDetectionConfig]
);
export var DialRequestList = list(n0, _DRL, 0, [() => DialRequest, 0]);
export var FailedRequestList = list(n0, _FRL, 0, () => FailedRequest);
export var SuccessfulRequestList = list(n0, _SRL, 0, () => SuccessfulRequest);
export var Attributes = map(n0, _A, 8, 0, 0);
export var CreateCampaign = op(
  n0,
  _CC,
  {
    [_h]: ["PUT", "/campaigns", 200],
  },
  () => CreateCampaignRequest,
  () => CreateCampaignResponse
);
export var PauseCampaign = op(
  n0,
  _PC,
  {
    [_h]: ["POST", "/campaigns/{id}/pause", 200],
  },
  () => PauseCampaignRequest,
  () => Unit
);
export var PutDialRequestBatch = op(
  n0,
  _PDRB,
  {
    [_h]: ["PUT", "/campaigns/{id}/dial-requests", 200],
  },
  () => PutDialRequestBatchRequest,
  () => PutDialRequestBatchResponse
);
export var ResumeCampaign = op(
  n0,
  _RC,
  {
    [_h]: ["POST", "/campaigns/{id}/resume", 200],
  },
  () => ResumeCampaignRequest,
  () => Unit
);
export var StartCampaign = op(
  n0,
  _SC,
  {
    [_h]: ["POST", "/campaigns/{id}/start", 200],
  },
  () => StartCampaignRequest,
  () => Unit
);
export var StartInstanceOnboardingJob = op(
  n0,
  _SIOJ,
  {
    [_h]: ["PUT", "/connect-instance/{connectInstanceId}/onboarding", 200],
  },
  () => StartInstanceOnboardingJobRequest,
  () => StartInstanceOnboardingJobResponse
);
export var StopCampaign = op(
  n0,
  _SCt,
  {
    [_h]: ["POST", "/campaigns/{id}/stop", 200],
  },
  () => StopCampaignRequest,
  () => Unit
);
export var UpdateCampaignDialerConfig = op(
  n0,
  _UCDC,
  {
    [_h]: ["POST", "/campaigns/{id}/dialer-config", 200],
  },
  () => UpdateCampaignDialerConfigRequest,
  () => Unit
);
export var UpdateCampaignName = op(
  n0,
  _UCN,
  {
    [_h]: ["POST", "/campaigns/{id}/name", 200],
  },
  () => UpdateCampaignNameRequest,
  () => Unit
);
export var UpdateCampaignOutboundCallConfig = op(
  n0,
  _UCOCC,
  {
    [_h]: ["POST", "/campaigns/{id}/outbound-call-config", 200],
  },
  () => UpdateCampaignOutboundCallConfigRequest,
  () => Unit
);
