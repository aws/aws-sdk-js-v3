// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _jN, _lOUS, _PC, _pC, _US, _Us, _us, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UserSummary = struct(
  n0,
  _US,
  0,
  [_PC, _Us],
  [
    [
      0,
      {
        [_jN]: _pC,
      },
    ],
    [
      0,
      {
        [_jN]: _us,
      },
    ],
  ]
);
export var __listOfUserSummary = list(n0, _lOUS, 0, [() => UserSummary, 0]);
