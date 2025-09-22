// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cSh, _DCCSC, _DCCSCR, _h, _hQ, _i, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCampaignChannelSubtypeConfigRequest = struct(
  n0,
  _DCCSCR,
  0,
  [_i, _cSh],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cSh,
      },
    ],
  ]
);
export var DeleteCampaignChannelSubtypeConfig = op(
  n0,
  _DCCSC,
  {
    [_h]: ["DELETE", "/v2/campaigns/{id}/channel-subtype-config", 200],
  },
  () => DeleteCampaignChannelSubtypeConfigRequest,
  () => Unit
);
