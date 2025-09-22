// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GSU, _GSUR, _GSURe, _SIU, _SL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSnowballUsageRequest = struct(n0, _GSUR, 0, [], []);
export var GetSnowballUsageResult = struct(n0, _GSURe, 0, [_SL, _SIU], [1, 1]);
export var GetSnowballUsage = op(
  n0,
  _GSU,
  0,
  () => GetSnowballUsageRequest,
  () => GetSnowballUsageResult
);
