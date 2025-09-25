// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _o, _pro, _SCMV, _SCMVR, _SCMVRe, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var SendContactMethodVerificationRequest = struct(n0, _SCMVR, 0, [_pro], [0]);
export var SendContactMethodVerificationResult = struct(n0, _SCMVRe, 0, [_o], [() => OperationList]);
export var SendContactMethodVerification = op(
  n0,
  _SCMV,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/SendContactMethodVerification", 200],
  },
  () => SendContactMethodVerificationRequest,
  () => SendContactMethodVerificationResult
);
