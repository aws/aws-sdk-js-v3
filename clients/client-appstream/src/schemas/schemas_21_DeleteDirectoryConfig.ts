// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDC, _DDCR, _DDCRe, _DNi, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDirectoryConfigRequest = struct(n0, _DDCR, 0, [_DNi], [0]);
export var DeleteDirectoryConfigResult = struct(n0, _DDCRe, 0, [], []);
export var DeleteDirectoryConfig = op(
  n0,
  _DDC,
  0,
  () => DeleteDirectoryConfigRequest,
  () => DeleteDirectoryConfigResult
);
