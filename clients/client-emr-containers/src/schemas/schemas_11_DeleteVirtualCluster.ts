// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVC, _DVCR, _DVCRe, _h, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVirtualClusterRequest = struct(n0, _DVCR, 0, [_i], [[0, 1]]);
export var DeleteVirtualClusterResponse = struct(n0, _DVCRe, 0, [_i], [0]);
export var DeleteVirtualCluster = op(
  n0,
  _DVC,
  {
    [_h]: ["DELETE", "/virtualclusters/{id}", 200],
  },
  () => DeleteVirtualClusterRequest,
  () => DeleteVirtualClusterResponse
);
