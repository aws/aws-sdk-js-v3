// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATc, _GSO, _GSOR, _GSORl, n0, TokenModelType } from "./schemas_0";

/* eslint no-var: 0 */

export var GlobalSignOutRequest = struct(n0, _GSOR, 0, [_ATc], [[() => TokenModelType, 0]]);
export var GlobalSignOutResponse = struct(n0, _GSORl, 0, [], []);
export var GlobalSignOut = op(
  n0,
  _GSO,
  0,
  () => GlobalSignOutRequest,
  () => GlobalSignOutResponse
);
