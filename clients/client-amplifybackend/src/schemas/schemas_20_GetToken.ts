// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _aI, _CC, _cC, _GT, _GTR, _GTRe, _h, _jN, _SI, _sI, _T, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTokenRequest = struct(
  n0,
  _GTR,
  0,
  [_AI, _SI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetTokenResponse = struct(
  n0,
  _GTRe,
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
export var GetToken = op(
  n0,
  _GT,
  {
    [_h]: ["GET", "/backend/{AppId}/challenge/{SessionId}", 200],
  },
  () => GetTokenRequest,
  () => GetTokenResponse
);
