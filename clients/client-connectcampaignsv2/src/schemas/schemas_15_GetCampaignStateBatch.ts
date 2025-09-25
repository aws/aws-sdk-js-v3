// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cI,
  _cIa,
  _fC,
  _FCSR,
  _FCSRL,
  _fR,
  _GCSB,
  _GCSBR,
  _GCSBRe,
  _h,
  _SCSR,
  _SCSRL,
  _sR,
  _st,
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
export var SuccessfulCampaignStateResponse = struct(n0, _SCSR, 0, [_cI, _st], [0, 0]);
export var CampaignIdList = 64 | 0;

export var FailedCampaignStateResponseList = list(n0, _FCSRL, 0, () => FailedCampaignStateResponse);
export var SuccessfulCampaignStateResponseList = list(n0, _SCSRL, 0, () => SuccessfulCampaignStateResponse);
export var GetCampaignStateBatch = op(
  n0,
  _GCSB,
  {
    [_h]: ["POST", "/v2/campaigns-state", 200],
  },
  () => GetCampaignStateBatchRequest,
  () => GetCampaignStateBatchResponse
);
