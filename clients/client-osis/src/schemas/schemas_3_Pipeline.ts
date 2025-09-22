// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPE, _DPER, _DPERe, _EI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePipelineEndpointRequest = struct(n0, _DPER, 0, [_EI], [[0, 1]]);
export var DeletePipelineEndpointResponse = struct(n0, _DPERe, 0, [], []);
export var DeletePipelineEndpoint = op(
  n0,
  _DPE,
  {
    [_h]: ["DELETE", "/2022-01-01/osis/deletePipelineEndpoint/{EndpointId}", 200],
  },
  () => DeletePipelineEndpointRequest,
  () => DeletePipelineEndpointResponse
);
