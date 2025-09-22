// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _co, _DCCT, _DCCTR, _h, _hQ, _i, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCampaignCommunicationTimeRequest = struct(
  n0,
  _DCCTR,
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
export var DeleteCampaignCommunicationTime = op(
  n0,
  _DCCT,
  {
    [_h]: ["DELETE", "/v2/campaigns/{id}/communication-time", 200],
  },
  () => DeleteCampaignCommunicationTimeRequest,
  () => Unit
);
