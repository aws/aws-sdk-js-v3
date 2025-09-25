// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _n, _PO, _POR, _PORu, _ta, n0, tagList } from "./schemas_0";

/* eslint no-var: 0 */

export var PutOutcomeRequest = struct(n0, _POR, 0, [_n, _d, _ta], [0, 0, () => tagList]);
export var PutOutcomeResult = struct(n0, _PORu, 0, [], []);
export var PutOutcome = op(
  n0,
  _PO,
  0,
  () => PutOutcomeRequest,
  () => PutOutcomeResult
);
