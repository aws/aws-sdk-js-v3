// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _aI, _CC, _cC, _CTR, _CTr, _CTRr, _h, _jN, _SI, _sI, _T, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTokenRequest = struct(n0, _CTR, 0, [_AI], [[0, 1]]);
export var CreateTokenResponse = struct(
  n0,
  _CTRr,
  0,
  [_AI, _CC, _SI, _T],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cC,
      },
    ],
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateToken = op(
  n0,
  _CTr,
  {
    [_h]: ["POST", "/backend/{AppId}/challenge", 200],
  },
  () => CreateTokenRequest,
  () => CreateTokenResponse
);
