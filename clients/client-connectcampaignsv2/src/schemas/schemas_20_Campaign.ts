// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import { _cPDA, _cPSA, _ET, _eTv, _h, _i, _s, _So, _UCSp, _UCSRp, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var EventTrigger = struct(n0, _ET, 0, [_cPDA], [0]);
export var UpdateCampaignSourceRequest = struct(n0, _UCSRp, 0, [_i, _s], [[0, 1], () => Source]);
export var Source = uni(n0, _So, 0, [_cPSA, _eTv], [0, () => EventTrigger]);
export var UpdateCampaignSource = op(
  n0,
  _UCSp,
  {
    [_h]: ["POST", "/v2/campaigns/{id}/source", 200],
  },
  () => UpdateCampaignSourceRequest,
  () => Unit
);
