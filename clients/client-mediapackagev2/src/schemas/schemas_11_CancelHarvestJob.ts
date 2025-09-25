// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CGN, _CHJ, _CHJR, _CHJRa, _CN, _ET, _h, _hH, _HJN, _OEN, _xauim, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelHarvestJobRequest = struct(
  n0,
  _CHJR,
  0,
  [_CGN, _CN, _OEN, _HJN, _ET],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xauim,
      },
    ],
  ]
);
export var CancelHarvestJobResponse = struct(n0, _CHJRa, 0, [], []);
export var CancelHarvestJob = op(
  n0,
  _CHJ,
  {
    [_h]: [
      "PUT",
      "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/harvestJob/{HarvestJobName}",
      200,
    ],
  },
  () => CancelHarvestJobRequest,
  () => CancelHarvestJobResponse
);
