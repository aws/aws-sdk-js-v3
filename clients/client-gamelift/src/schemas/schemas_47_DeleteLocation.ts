// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DL, _DLI, _DLO, _LN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLocationInput = struct(n0, _DLI, 0, [_LN], [0]);
export var DeleteLocationOutput = struct(n0, _DLO, 0, [], []);
export var DeleteLocation = op(
  n0,
  _DL,
  0,
  () => DeleteLocationInput,
  () => DeleteLocationOutput
);
