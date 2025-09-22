// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DBS, _DBSR, _DBSRe, _ide, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBillScenarioRequest = struct(n0, _DBSR, 0, [_ide], [0]);
export var DeleteBillScenarioResponse = struct(n0, _DBSRe, 0, [], []);
export var DeleteBillScenario = op(
  n0,
  _DBS,
  2,
  () => DeleteBillScenarioRequest,
  () => DeleteBillScenarioResponse
);
