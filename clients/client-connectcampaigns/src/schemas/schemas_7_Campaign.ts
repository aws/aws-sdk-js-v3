// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cI,
  _cIa,
  _fC,
  _FCSR,
  _FCSRL,
  _fR,
  _GCS,
  _GCSB,
  _GCSBR,
  _GCSBRe,
  _GCSR,
  _GCSRe,
  _h,
  _i,
  _s,
  _SCSR,
  _SCSRL,
  _sR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FailedCampaignStateResponse = struct(n0, _FCSR, 0, [_cI, _fC], [0, 0]);
export var GetCampaignStateBatchRequest = struct(n0, _GCSBR, 0, [_cIa], [64 | 0]);
export var GetCampaignStateBatchResponse = struct(
  n0,
  _GCSBRe,
  0,
  [_sR, _fR],
  [() => SuccessfulCampaignStateResponseList, () => FailedCampaignStateResponseList]
);
export var GetCampaignStateRequest = struct(n0, _GCSR, 0, [_i], [[0, 1]]);
export var GetCampaignStateResponse = struct(n0, _GCSRe, 0, [_s], [0]);
export var SuccessfulCampaignStateResponse = struct(n0, _SCSR, 0, [_cI, _s], [0, 0]);
export var CampaignIdList = 64 | 0;

export var FailedCampaignStateResponseList = list(n0, _FCSRL, 0, () => FailedCampaignStateResponse);
export var SuccessfulCampaignStateResponseList = list(n0, _SCSRL, 0, () => SuccessfulCampaignStateResponse);
export var GetCampaignState = op(
  n0,
  _GCS,
  {
    [_h]: ["GET", "/campaigns/{id}/state", 200],
  },
  () => GetCampaignStateRequest,
  () => GetCampaignStateResponse
);
export var GetCampaignStateBatch = op(
  n0,
  _GCSB,
  {
    [_h]: ["POST", "/campaigns-state", 200],
  },
  () => GetCampaignStateBatchRequest,
  () => GetCampaignStateBatchResponse
);
