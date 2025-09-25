// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCSTS, _DCSTSR, _DCSTSRe, _DN, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteColumnStatisticsTaskSettingsRequest = struct(n0, _DCSTSR, 0, [_DN, _TN], [0, 0]);
export var DeleteColumnStatisticsTaskSettingsResponse = struct(n0, _DCSTSRe, 0, [], []);
export var DeleteColumnStatisticsTaskSettings = op(
  n0,
  _DCSTS,
  0,
  () => DeleteColumnStatisticsTaskSettingsRequest,
  () => DeleteColumnStatisticsTaskSettingsResponse
);
