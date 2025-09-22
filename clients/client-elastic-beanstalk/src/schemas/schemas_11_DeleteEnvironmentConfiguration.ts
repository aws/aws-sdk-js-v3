// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AN, _DEC, _DECM, _EN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEnvironmentConfigurationMessage = struct(n0, _DECM, 0, [_AN, _EN], [0, 0]);
export var DeleteEnvironmentConfiguration = op(
  n0,
  _DEC,
  0,
  () => DeleteEnvironmentConfigurationMessage,
  () => Unit
);
