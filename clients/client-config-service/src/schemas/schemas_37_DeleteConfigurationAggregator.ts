// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAN, _DCA, _DCAR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConfigurationAggregatorRequest = struct(n0, _DCAR, 0, [_CAN], [0]);
export var DeleteConfigurationAggregator = op(
  n0,
  _DCA,
  0,
  () => DeleteConfigurationAggregatorRequest,
  () => Unit
);
