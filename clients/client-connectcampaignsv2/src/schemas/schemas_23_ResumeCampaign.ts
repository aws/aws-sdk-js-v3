// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _i, _RC, _RCR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ResumeCampaignRequest = struct(n0, _RCR, 0, [_i], [[0, 1]]);
export var ResumeCampaign = op(
  n0,
  _RC,
  {
    [_h]: ["POST", "/v2/campaigns/{id}/resume", 200],
  },
  () => ResumeCampaignRequest,
  () => Unit
);
