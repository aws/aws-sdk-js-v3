// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DC, _DCR, _h, _i, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCampaignRequest = struct(n0, _DCR, 0, [_i], [[0, 1]]);
export var DeleteCampaign = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/v2/campaigns/{id}", 200],
  },
  () => DeleteCampaignRequest,
  () => Unit
);
