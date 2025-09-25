// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _h, _hH, _hL, _hQ, _RAe, _TK, _tK, _UR, _URR, _URRn, _xaai, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_AI, _RAe, _TK],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResult = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/v20180820/tags/{ResourceArn+}", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResult
);
