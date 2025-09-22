// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _DC, _DCR, _DCRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteClusterRequest = struct(n0, _DCR, 0, [_CA], [[0, 1]]);
export var DeleteClusterResponse = struct(n0, _DCRe, 0, [], []);
export var DeleteCluster = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/cluster/{ClusterArn}", 200],
  },
  () => DeleteClusterRequest,
  () => DeleteClusterResponse
);
