// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CGN, _CN, _h, _OEN, _RA, _ROES, _ROESR, _ROESRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetOriginEndpointStateRequest = struct(
  n0,
  _ROESR,
  0,
  [_CGN, _CN, _OEN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var ResetOriginEndpointStateResponse = struct(n0, _ROESRe, 0, [_CGN, _CN, _OEN, _A, _RA], [0, 0, 0, 0, 4]);
export var ResetOriginEndpointState = op(
  n0,
  _ROES,
  {
    [_h]: [
      "POST",
      "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/reset",
      200,
    ],
  },
  () => ResetOriginEndpointStateRequest,
  () => ResetOriginEndpointStateResponse
);
