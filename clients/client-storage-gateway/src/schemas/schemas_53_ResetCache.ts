// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GARN, _RCe, _RCIe, _RCOe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetCacheInput = struct(n0, _RCIe, 0, [_GARN], [0]);
export var ResetCacheOutput = struct(n0, _RCOe, 0, [_GARN], [0]);
export var ResetCache = op(
  n0,
  _RCe,
  0,
  () => ResetCacheInput,
  () => ResetCacheOutput
);
