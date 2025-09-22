// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cN, _DAP, _DAPR, _DAPRi, _ht, _pA, _pAo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateAccessPolicyRequest = struct(
  n0,
  _DAPR,
  0,
  [_cN, _pA, _pAo],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateAccessPolicyResponse = struct(n0, _DAPRi, 0, [], []);
export var DisassociateAccessPolicy = op(
  n0,
  _DAP,
  {
    [_ht]: ["DELETE", "/clusters/{clusterName}/access-entries/{principalArn}/access-policies/{policyArn}", 200],
  },
  () => DisassociateAccessPolicyRequest,
  () => DisassociateAccessPolicyResponse
);
