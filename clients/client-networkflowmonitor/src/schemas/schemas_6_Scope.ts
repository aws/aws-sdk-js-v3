// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _c, _CE, _DS, _DSI, _DSO, _e, _h, _hE, _m, _sI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var DeleteScopeInput = struct(n0, _DSI, 0, [_sI], [[0, 1]]);
export var DeleteScopeOutput = struct(n0, _DSO, 0, [], []);
export var DeleteScope = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/scopes/{scopeId}", 200],
  },
  () => DeleteScopeInput,
  () => DeleteScopeOutput
);
