// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMA, _DMAR, _mAA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMetricAttributionRequest = struct(n0, _DMAR, 0, [_mAA], [0]);
export var DeleteMetricAttribution = op(
  n0,
  _DMA,
  2,
  () => DeleteMetricAttributionRequest,
  () => Unit
);
