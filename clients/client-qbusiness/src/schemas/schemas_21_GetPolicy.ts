// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIp, _GPe, _GPRet, _GPReto, _ht, _po, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPolicyRequest = struct(n0, _GPRet, 0, [_aIp], [[0, 1]]);
export var GetPolicyResponse = struct(n0, _GPReto, 0, [_po], [0]);
export var GetPolicy = op(
  n0,
  _GPe,
  {
    [_ht]: ["GET", "/applications/{applicationId}/policy", 200],
  },
  () => GetPolicyRequest,
  () => GetPolicyResponse
);
