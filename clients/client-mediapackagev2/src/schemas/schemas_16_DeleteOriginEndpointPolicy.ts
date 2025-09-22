// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CGN, _CN, _DOEP, _DOEPR, _DOEPRe, _h, _OEN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOriginEndpointPolicyRequest = struct(
  n0,
  _DOEPR,
  0,
  [_CGN, _CN, _OEN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteOriginEndpointPolicyResponse = struct(n0, _DOEPRe, 0, [], []);
export var DeleteOriginEndpointPolicy = op(
  n0,
  _DOEP,
  {
    [_h]: [
      "DELETE",
      "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy",
      200,
    ],
  },
  () => DeleteOriginEndpointPolicyRequest,
  () => DeleteOriginEndpointPolicyResponse
);
