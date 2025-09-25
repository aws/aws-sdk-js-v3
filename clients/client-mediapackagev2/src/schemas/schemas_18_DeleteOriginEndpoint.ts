// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CGN, _CN, _DOE, _DOER, _DOERe, _h, _OEN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOriginEndpointRequest = struct(
  n0,
  _DOER,
  0,
  [_CGN, _CN, _OEN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteOriginEndpointResponse = struct(n0, _DOERe, 0, [], []);
export var DeleteOriginEndpoint = op(
  n0,
  _DOE,
  {
    [_h]: ["DELETE", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}", 200],
  },
  () => DeleteOriginEndpointRequest,
  () => DeleteOriginEndpointResponse
);
