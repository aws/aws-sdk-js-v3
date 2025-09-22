// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AII, _DAI, _DAIR, _DAIRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAddonInstanceRequest = struct(n0, _DAIR, 0, [_AII], [0]);
export var DeleteAddonInstanceResponse = struct(n0, _DAIRe, 0, [], []);
export var DeleteAddonInstance = op(
  n0,
  _DAI,
  2,
  () => DeleteAddonInstanceRequest,
  () => DeleteAddonInstanceResponse
);
