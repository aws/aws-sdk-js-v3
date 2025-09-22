// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMRE, _DMRER, _DMRERe, _EN, _h, _S, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMultiRegionEndpointRequest = struct(n0, _DMRER, 0, [_EN], [[0, 1]]);
export var DeleteMultiRegionEndpointResponse = struct(n0, _DMRERe, 0, [_S], [0]);
export var DeleteMultiRegionEndpoint = op(
  n0,
  _DMRE,
  {
    [_h]: ["DELETE", "/v2/email/multi-region-endpoints/{EndpointName}", 200],
  },
  () => DeleteMultiRegionEndpointRequest,
  () => DeleteMultiRegionEndpointResponse
);
