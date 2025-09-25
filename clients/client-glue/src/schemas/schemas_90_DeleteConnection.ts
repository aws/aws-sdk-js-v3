// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _CNo, _DCel, _DCRelet, _DCRelete, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConnectionRequest = struct(n0, _DCRelet, 0, [_CI, _CNo], [0, 0]);
export var DeleteConnectionResponse = struct(n0, _DCRelete, 0, [], []);
export var DeleteConnection = op(
  n0,
  _DCel,
  0,
  () => DeleteConnectionRequest,
  () => DeleteConnectionResponse
);
