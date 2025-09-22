// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _IS, _ISI, _ISO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InitializeServiceInput = struct(n0, _ISI, 0, [], []);
export var InitializeServiceOutput = struct(n0, _ISO, 0, [], []);
export var InitializeService = op(
  n0,
  _IS,
  2,
  () => InitializeServiceInput,
  () => InitializeServiceOutput
);
