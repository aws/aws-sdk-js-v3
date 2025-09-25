// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _i, _n, _UCN, _UCNR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateCampaignNameRequest = struct(n0, _UCNR, 0, [_i, _n], [[0, 1], 0]);
export var UpdateCampaignName = op(
  n0,
  _UCN,
  {
    [_h]: ["POST", "/v2/campaigns/{id}/name", 200],
  },
  () => UpdateCampaignNameRequest,
  () => Unit
);
