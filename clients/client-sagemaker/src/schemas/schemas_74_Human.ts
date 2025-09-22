// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DHTU, _DHTUR, _DHTURe, _HTUN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteHumanTaskUiRequest = struct(n0, _DHTUR, 0, [_HTUN], [0]);
export var DeleteHumanTaskUiResponse = struct(n0, _DHTURe, 0, [], []);
export var DeleteHumanTaskUi = op(
  n0,
  _DHTU,
  0,
  () => DeleteHumanTaskUiRequest,
  () => DeleteHumanTaskUiResponse
);
