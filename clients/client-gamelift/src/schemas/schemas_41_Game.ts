// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DAe, _DAI, _FA, _FI, _RAes, _RAI, _RAO, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAliasInput = struct(n0, _DAI, 0, [_AI], [0]);
export var ResolveAliasInput = struct(n0, _RAI, 0, [_AI], [0]);
export var ResolveAliasOutput = struct(n0, _RAO, 0, [_FI, _FA], [0, 0]);
export var DeleteAlias = op(
  n0,
  _DAe,
  0,
  () => DeleteAliasInput,
  () => Unit
);
export var ResolveAlias = op(
  n0,
  _RAes,
  0,
  () => ResolveAliasInput,
  () => ResolveAliasOutput
);
