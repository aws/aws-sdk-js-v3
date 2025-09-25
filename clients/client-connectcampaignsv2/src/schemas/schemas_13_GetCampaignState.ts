// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GCS, _GCSR, _GCSRe, _h, _i, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetCampaignStateRequest = struct(n0, _GCSR, 0, [_i], [[0, 1]]);
export var GetCampaignStateResponse = struct(n0, _GCSRe, 0, [_st], [0]);
export var GetCampaignState = op(
  n0,
  _GCS,
  {
    [_h]: ["GET", "/v2/campaigns/{id}/state", 200],
  },
  () => GetCampaignStateRequest,
  () => GetCampaignStateResponse
);
