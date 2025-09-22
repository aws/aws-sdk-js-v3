// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _IPC, _IPCI, _IPCO, _pN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidateProjectCacheInput = struct(n0, _IPCI, 0, [_pN], [0]);
export var InvalidateProjectCacheOutput = struct(n0, _IPCO, 0, [], []);
export var InvalidateProjectCache = op(
  n0,
  _IPC,
  0,
  () => InvalidateProjectCacheInput,
  () => InvalidateProjectCacheOutput
);
