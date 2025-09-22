// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _co, _DCCL, _DCCLR, _h, _hQ, _i, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCampaignCommunicationLimitsRequest = struct(
  n0,
  _DCCLR,
  0,
  [_i, _co],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _co,
      },
    ],
  ]
);
export var DeleteCampaignCommunicationLimits = op(
  n0,
  _DCCL,
  {
    [_h]: ["DELETE", "/v2/campaigns/{id}/communication-limits", 200],
  },
  () => DeleteCampaignCommunicationLimitsRequest,
  () => Unit
);
