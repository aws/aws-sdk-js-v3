// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _En, _GMSE, _GMSER, _GMSERe, _h, _hQ, _MSE, _nt, _NTe, _U, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetMessagingSessionEndpointRequest = struct(
  n0,
  _GMSER,
  0,
  [_NTe],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var GetMessagingSessionEndpointResponse = struct(n0, _GMSERe, 0, [_En], [() => MessagingSessionEndpoint]);
export var MessagingSessionEndpoint = struct(n0, _MSE, 0, [_U], [0]);
export var GetMessagingSessionEndpoint = op(
  n0,
  _GMSE,
  {
    [_h]: ["GET", "/endpoints/messaging-session", 200],
  },
  () => GetMessagingSessionEndpointRequest,
  () => GetMessagingSessionEndpointResponse
);
