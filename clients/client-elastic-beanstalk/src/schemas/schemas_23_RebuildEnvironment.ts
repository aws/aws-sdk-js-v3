// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EI, _EN, _RE, _REM, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var RebuildEnvironmentMessage = struct(n0, _REM, 0, [_EI, _EN], [0, 0]);
export var RebuildEnvironment = op(
  n0,
  _RE,
  0,
  () => RebuildEnvironmentMessage,
  () => Unit
);
