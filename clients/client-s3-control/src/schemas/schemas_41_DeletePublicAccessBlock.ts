// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DPAB, _DPABR, _h, _hH, _hL, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePublicAccessBlockRequest = struct(
  n0,
  _DPABR,
  0,
  [_AI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var DeletePublicAccessBlock = op(
  n0,
  _DPAB,
  {
    [_h]: ["DELETE", "/v20180820/configuration/publicAccessBlock", 200],
  },
  () => DeletePublicAccessBlockRequest,
  () => Unit
);
