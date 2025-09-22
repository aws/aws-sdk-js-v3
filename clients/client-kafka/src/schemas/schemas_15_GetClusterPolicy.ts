// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _CV, _cV, _GCP, _GCPR, _GCPRe, _h, _jN, _Po, _po, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetClusterPolicyRequest = struct(n0, _GCPR, 0, [_CA], [[0, 1]]);
export var GetClusterPolicyResponse = struct(
  n0,
  _GCPRe,
  0,
  [_CV, _Po],
  [
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [
      0,
      {
        [_jN]: _po,
      },
    ],
  ]
);
export var GetClusterPolicy = op(
  n0,
  _GCP,
  {
    [_h]: ["GET", "/v1/clusters/{ClusterArn}/policy", 200],
  },
  () => GetClusterPolicyRequest,
  () => GetClusterPolicyResponse
);
