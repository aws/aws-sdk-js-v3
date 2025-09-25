// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _i, _SCRt, _SCt, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopCampaignRequest = struct(n0, _SCRt, 0, [_i], [[0, 1]]);
export var StopCampaign = op(
  n0,
  _SCt,
  {
    [_h]: ["POST", "/v2/campaigns/{id}/stop", 200],
  },
  () => StopCampaignRequest,
  () => Unit
);
