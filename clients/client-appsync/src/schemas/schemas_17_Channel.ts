// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DCN, _DCNR, _DCNRe, _h, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChannelNamespaceRequest = struct(
  n0,
  _DCNR,
  0,
  [_aI, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteChannelNamespaceResponse = struct(n0, _DCNRe, 0, [], []);
export var DeleteChannelNamespace = op(
  n0,
  _DCN,
  {
    [_h]: ["DELETE", "/v2/apis/{apiId}/channelNamespaces/{name}", 200],
  },
  () => DeleteChannelNamespaceRequest,
  () => DeleteChannelNamespaceResponse
);
