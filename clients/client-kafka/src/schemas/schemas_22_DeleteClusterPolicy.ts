// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _DCP, _DCPR, _DCPRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteClusterPolicyRequest = struct(n0, _DCPR, 0, [_CA], [[0, 1]]);
export var DeleteClusterPolicyResponse = struct(n0, _DCPRe, 0, [], []);
export var DeleteClusterPolicy = op(
  n0,
  _DCP,
  {
    [_h]: ["DELETE", "/v1/clusters/{ClusterArn}/policy", 200],
  },
  () => DeleteClusterPolicyRequest,
  () => DeleteClusterPolicyResponse
);
