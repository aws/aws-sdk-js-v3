// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidStateException as __InvalidStateException } from "../models/index";
import {
  _a,
  _aMDC,
  _C,
  _c,
  _ca,
  _cCFI,
  _CF,
  _cIC,
  _cII,
  _cIOJS,
  _cQI,
  _CS,
  _CSL,
  _cSL,
  _cSPN,
  _DCes,
  _dCi,
  _DCIC,
  _DCICR,
  _DCRe,
  _DCRes,
  _DIOJ,
  _DIOJR,
  _e,
  _EC,
  _eC,
  _en,
  _eTn,
  _f,
  _fC,
  _GCIC,
  _GCICR,
  _GCICRe,
  _GIOJS,
  _GIOJSR,
  _GIOJSRe,
  _h,
  _hE,
  _hH,
  _i,
  _IC,
  _IIF,
  _iIF,
  _IOJS,
  _ISEn,
  _kA,
  _LC,
  _LCR,
  _LCRi,
  _m,
  _mR,
  _n,
  _nT,
  _o,
  _OCC,
  _oCC,
  _sLRA,
  _st,
  _t,
  _v,
  _xaE,
  _xAET,
  n0,
  Unit,
} from "./schemas_0";
import { AnswerMachineDetectionConfig } from "./schemas_4_Campaign";
import { DialerConfig } from "./schemas_5_Campaign";

/* eslint no-var: 0 */

export var Campaign = struct(
  n0,
  _C,
  0,
  [_i, _a, _n, _cII, _dCi, _oCC, _t],
  [0, 0, 0, 0, () => DialerConfig, () => OutboundCallConfig, 128 | 0]
);
export var CampaignFilters = struct(n0, _CF, 0, [_iIF], [() => InstanceIdFilter]);
export var CampaignSummary = struct(n0, _CS, 0, [_i, _a, _n, _cII], [0, 0, 0, 0]);
export var DeleteConnectInstanceConfigRequest = struct(n0, _DCICR, 0, [_cII], [[0, 1]]);
export var DeleteInstanceOnboardingJobRequest = struct(n0, _DIOJR, 0, [_cII], [[0, 1]]);
export var DescribeCampaignRequest = struct(n0, _DCRe, 0, [_i], [[0, 1]]);
export var DescribeCampaignResponse = struct(n0, _DCRes, 0, [_ca], [() => Campaign]);
export var EncryptionConfig = struct(n0, _EC, 0, [_en, _eTn, _kA], [2, 0, 0]);
export var GetConnectInstanceConfigRequest = struct(n0, _GCICR, 0, [_cII], [[0, 1]]);
export var GetConnectInstanceConfigResponse = struct(n0, _GCICRe, 0, [_cIC], [() => InstanceConfig]);
export var GetInstanceOnboardingJobStatusRequest = struct(n0, _GIOJSR, 0, [_cII], [[0, 1]]);
export var GetInstanceOnboardingJobStatusResponse = struct(
  n0,
  _GIOJSRe,
  0,
  [_cIOJS],
  [() => InstanceOnboardingJobStatus]
);
export var InstanceConfig = struct(n0, _IC, 0, [_cII, _sLRA, _eC], [0, 0, () => EncryptionConfig]);
export var InstanceIdFilter = struct(n0, _IIF, 0, [_v, _o], [0, 0]);
export var InstanceOnboardingJobStatus = struct(n0, _IOJS, 0, [_cII, _st, _fC], [0, 0, 0]);
export var InvalidStateException = error(
  n0,
  _ISEn,
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

  __InvalidStateException
);
export var ListCampaignsRequest = struct(n0, _LCR, 0, [_mR, _nT, _f], [1, 0, () => CampaignFilters]);
export var ListCampaignsResponse = struct(n0, _LCRi, 0, [_nT, _cSL], [0, () => CampaignSummaryList]);
export var OutboundCallConfig = struct(
  n0,
  _OCC,
  0,
  [_cCFI, _cSPN, _cQI, _aMDC],
  [0, 0, 0, () => AnswerMachineDetectionConfig]
);
export var CampaignSummaryList = list(n0, _CSL, 0, () => CampaignSummary);
export var DeleteConnectInstanceConfig = op(
  n0,
  _DCIC,
  {
    [_h]: ["DELETE", "/connect-instance/{connectInstanceId}/config", 200],
  },
  () => DeleteConnectInstanceConfigRequest,
  () => Unit
);
export var DeleteInstanceOnboardingJob = op(
  n0,
  _DIOJ,
  {
    [_h]: ["DELETE", "/connect-instance/{connectInstanceId}/onboarding", 200],
  },
  () => DeleteInstanceOnboardingJobRequest,
  () => Unit
);
export var DescribeCampaign = op(
  n0,
  _DCes,
  {
    [_h]: ["GET", "/campaigns/{id}", 200],
  },
  () => DescribeCampaignRequest,
  () => DescribeCampaignResponse
);
export var GetConnectInstanceConfig = op(
  n0,
  _GCIC,
  {
    [_h]: ["GET", "/connect-instance/{connectInstanceId}/config", 200],
  },
  () => GetConnectInstanceConfigRequest,
  () => GetConnectInstanceConfigResponse
);
export var GetInstanceOnboardingJobStatus = op(
  n0,
  _GIOJS,
  {
    [_h]: ["GET", "/connect-instance/{connectInstanceId}/onboarding", 200],
  },
  () => GetInstanceOnboardingJobStatusRequest,
  () => GetInstanceOnboardingJobStatusResponse
);
export var ListCampaigns = op(
  n0,
  _LC,
  {
    [_h]: ["POST", "/campaigns-summary", 200],
  },
  () => ListCampaignsRequest,
  () => ListCampaignsResponse
);
