// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cI, _cl, _DPE, _DPER, _DPERi, _end, _sCE, _tE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DiscoverPollEndpointRequest = struct(n0, _DPER, 0, [_cI, _cl], [0, 0]);
export var DiscoverPollEndpointResponse = struct(n0, _DPERi, 0, [_end, _tE, _sCE], [0, 0, 0]);
export var DiscoverPollEndpoint = op(
  n0,
  _DPE,
  0,
  () => DiscoverPollEndpointRequest,
  () => DiscoverPollEndpointResponse
);
