// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPMT, _DPMTR, _DPMTRe, _ht, _pMI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProvisionedModelThroughputRequest = struct(n0, _DPMTR, 0, [_pMI], [[0, 1]]);
export var DeleteProvisionedModelThroughputResponse = struct(n0, _DPMTRe, 0, [], []);
export var DeleteProvisionedModelThroughput = op(
  n0,
  _DPMT,
  {
    [_ht]: ["DELETE", "/provisioned-model-throughput/{provisionedModelId}", 200],
  },
  () => DeleteProvisionedModelThroughputRequest,
  () => DeleteProvisionedModelThroughputResponse
);
