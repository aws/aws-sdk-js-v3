// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _GARN, _LCP, _SLCP, _SLCPI, _SLCPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var LocalConsolePassword = sim(n0, _LCP, 0, 8);
export var SetLocalConsolePasswordInput = struct(n0, _SLCPI, 0, [_GARN, _LCP], [0, [() => LocalConsolePassword, 0]]);
export var SetLocalConsolePasswordOutput = struct(n0, _SLCPO, 0, [_GARN], [0]);
export var SetLocalConsolePassword = op(
  n0,
  _SLCP,
  0,
  () => SetLocalConsolePasswordInput,
  () => SetLocalConsolePasswordOutput
);
