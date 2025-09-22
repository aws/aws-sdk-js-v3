// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GRP, _GRPR, _GRPRe, _h, _P, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_RA], [[0, 1]]);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_P], [0]);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  {
    [_h]: ["GET", "/resourcePolicy/{ResourceArn}", 200],
  },
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
