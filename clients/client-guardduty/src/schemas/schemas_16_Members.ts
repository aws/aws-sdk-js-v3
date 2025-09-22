// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _AIc, _aIc, _jN, _Resu, _resu, _UAn, _UAnp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UnprocessedAccount = struct(
  n0,
  _UAnp,
  0,
  [_AIc, _Resu],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      0,
      {
        [_jN]: _resu,
      },
    ],
  ]
);
export var UnprocessedAccounts = list(n0, _UAn, 0, [() => UnprocessedAccount, 0]);
