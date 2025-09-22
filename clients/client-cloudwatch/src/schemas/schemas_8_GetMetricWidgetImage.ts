// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GMWI, _GMWII, _GMWIO, _MW, _MWI, _OF, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetMetricWidgetImageInput = struct(n0, _GMWII, 0, [_MW, _OF], [0, 0]);
export var GetMetricWidgetImageOutput = struct(n0, _GMWIO, 0, [_MWI], [21]);
export var GetMetricWidgetImage = op(
  n0,
  _GMWI,
  0,
  () => GetMetricWidgetImageInput,
  () => GetMetricWidgetImageOutput
);
