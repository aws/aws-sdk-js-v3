// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cA, _DC, _DCR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCampaignRequest = struct(n0, _DCR, 0, [_cA], [0]);
export var DeleteCampaign = op(
  n0,
  _DC,
  2,
  () => DeleteCampaignRequest,
  () => Unit
);
