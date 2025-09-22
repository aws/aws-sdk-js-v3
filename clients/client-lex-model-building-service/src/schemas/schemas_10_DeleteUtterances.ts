// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bN, _DU, _DUR, _h, _uI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUtterancesRequest = struct(
  n0,
  _DUR,
  0,
  [_bN, _uI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteUtterances = op(
  n0,
  _DU,
  {
    [_h]: ["DELETE", "/bots/{botName}/utterances/{userId}", 204],
  },
  () => DeleteUtterancesRequest,
  () => Unit
);
