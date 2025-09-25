// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cA, _GS, _GSR, _GSRe, _h, _ht, _pU, _sI, _St, _sT, _st, _sta, _vCi, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetStreamRequest = struct(n0, _GSR, 0, [_cA], [0]);
export var GetStreamResponse = struct(n0, _GSRe, 0, [_st], [() => _Stream]);
export var _Stream = struct(n0, _St, 0, [_cA, _sI, _pU, _sT, _sta, _h, _vCi], [0, 0, 0, 5, 0, 0, 1]);
export var GetStream = op(
  n0,
  _GS,
  {
    [_ht]: ["POST", "/GetStream", 200],
  },
  () => GetStreamRequest,
  () => GetStreamResponse
);
