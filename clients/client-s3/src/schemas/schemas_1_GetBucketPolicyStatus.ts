// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _EBO, _GBPS, _GBPSO, _GBPSR, _h, _hH, _IP, _PS, _xaebo, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetBucketPolicyStatusOutput = struct(n0, _GBPSO, 0, [_PS], [[() => PolicyStatus, 16]]);
export var GetBucketPolicyStatusRequest = struct(
  n0,
  _GBPSR,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var PolicyStatus = struct(
  n0,
  _PS,
  0,
  [_IP],
  [
    [
      2,
      {
        [_xN]: _IP,
      },
    ],
  ]
);
export var GetBucketPolicyStatus = op(
  n0,
  _GBPS,
  {
    [_h]: ["GET", "/?policyStatus", 200],
  },
  () => GetBucketPolicyStatusRequest,
  () => GetBucketPolicyStatusOutput
);
