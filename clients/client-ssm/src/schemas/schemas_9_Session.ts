// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GCSe, _GCSRet, _GCSReto, _St, _Tar, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetConnectionStatusRequest = struct(n0, _GCSRet, 0, [_Tar], [0]);
export var GetConnectionStatusResponse = struct(n0, _GCSReto, 0, [_Tar, _St], [0, 0]);
export var GetConnectionStatus = op(
  n0,
  _GCSe,
  0,
  () => GetConnectionStatusRequest,
  () => GetConnectionStatusResponse
);
