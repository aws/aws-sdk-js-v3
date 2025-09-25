// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _i, _SC, _SCR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StartCampaignRequest = struct(n0, _SCR, 0, [_i], [[0, 1]]);
export var StartCampaign = op(
  n0,
  _SC,
  {
    [_h]: ["POST", "/v2/campaigns/{id}/start", 200],
  },
  () => StartCampaignRequest,
  () => Unit
);
