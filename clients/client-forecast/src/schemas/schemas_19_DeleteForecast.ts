// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFe, _DFR, _FA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteForecastRequest = struct(n0, _DFR, 0, [_FA], [0]);
export var DeleteForecast = op(
  n0,
  _DFe,
  2,
  () => DeleteForecastRequest,
  () => Unit
);
