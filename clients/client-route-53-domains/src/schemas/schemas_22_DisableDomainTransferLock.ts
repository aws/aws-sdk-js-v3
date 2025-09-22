// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDTL, _DDTLR, _DDTLRi, _DN, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableDomainTransferLockRequest = struct(n0, _DDTLR, 0, [_DN], [0]);
export var DisableDomainTransferLockResponse = struct(n0, _DDTLRi, 0, [_OI], [0]);
export var DisableDomainTransferLock = op(
  n0,
  _DDTL,
  0,
  () => DisableDomainTransferLockRequest,
  () => DisableDomainTransferLockResponse
);
