// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AN, _DA, _DAR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAliasRequest = struct(n0, _DAR, 0, [_AN], [0]);
export var DeleteAlias = op(
  n0,
  _DA,
  0,
  () => DeleteAliasRequest,
  () => Unit
);
