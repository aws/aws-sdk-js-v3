// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _i, _PCa, _PCR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var PauseCampaignRequest = struct(n0, _PCR, 0, [_i], [[0, 1]]);
export var PauseCampaign = op(
  n0,
  _PCa,
  {
    [_h]: ["POST", "/v2/campaigns/{id}/pause", 200],
  },
  () => PauseCampaignRequest,
  () => Unit
);
