// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BT, _DBRL, _DBRLI, _DBRLO, _GARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBandwidthRateLimitInput = struct(n0, _DBRLI, 0, [_GARN, _BT], [0, 0]);
export var DeleteBandwidthRateLimitOutput = struct(n0, _DBRLO, 0, [_GARN], [0]);
export var DeleteBandwidthRateLimit = op(
  n0,
  _DBRL,
  0,
  () => DeleteBandwidthRateLimitInput,
  () => DeleteBandwidthRateLimitOutput
);
