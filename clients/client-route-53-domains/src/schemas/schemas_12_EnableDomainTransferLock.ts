// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _EDTL, _EDTLR, _EDTLRn, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableDomainTransferLockRequest = struct(n0, _EDTLR, 0, [_DN], [0]);
export var EnableDomainTransferLockResponse = struct(n0, _EDTLRn, 0, [_OI], [0]);
export var EnableDomainTransferLock = op(
  n0,
  _EDTL,
  0,
  () => EnableDomainTransferLockRequest,
  () => EnableDomainTransferLockResponse
);
