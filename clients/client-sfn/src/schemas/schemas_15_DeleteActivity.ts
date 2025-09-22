// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aA, _DA, _DAI, _DAO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteActivityInput = struct(n0, _DAI, 0, [_aA], [0]);
export var DeleteActivityOutput = struct(n0, _DAO, 0, [], []);
export var DeleteActivity = op(
  n0,
  _DA,
  0,
  () => DeleteActivityInput,
  () => DeleteActivityOutput
);
