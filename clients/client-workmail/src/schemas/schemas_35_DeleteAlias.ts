// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Al, _DA, _DAR, _DARe, _EI, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAliasRequest = struct(n0, _DAR, 0, [_OI, _EI, _Al], [0, 0, 0]);
export var DeleteAliasResponse = struct(n0, _DARe, 0, [], []);
export var DeleteAlias = op(
  n0,
  _DA,
  2,
  () => DeleteAliasRequest,
  () => DeleteAliasResponse
);
