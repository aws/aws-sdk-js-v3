// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _Op, _PID, _PUL, _UPS, _UPSR, _UPSRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdatePackageScopeRequest = struct(n0, _UPSR, 0, [_PID, _Op, _PUL], [0, 0, 64 | 0]);
export var UpdatePackageScopeResponse = struct(n0, _UPSRp, 0, [_PID, _Op, _PUL], [0, 0, 64 | 0]);
export var PackageUserList = 64 | 0;

export var UpdatePackageScope = op(
  n0,
  _UPS,
  {
    [_h]: ["POST", "/2021-01-01/packages/updateScope", 200],
  },
  () => UpdatePackageScopeRequest,
  () => UpdatePackageScopeResponse
);
