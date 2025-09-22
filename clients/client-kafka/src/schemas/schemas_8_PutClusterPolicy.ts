// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _CV, _cV, _h, _jN, _PCP, _PCPR, _PCPRu, _Po, _po, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutClusterPolicyRequest = struct(
  n0,
  _PCPR,
  0,
  [_CA, _CV, _Po],
  [
    [0, 1],
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
export var PutClusterPolicyResponse = struct(
  n0,
  _PCPRu,
  0,
  [_CV],
  [
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
  ]
);
export var PutClusterPolicy = op(
  n0,
  _PCP,
  {
    [_h]: ["PUT", "/v1/clusters/{ClusterArn}/policy", 200],
  },
  () => PutClusterPolicyRequest,
  () => PutClusterPolicyResponse
);
