// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aNc, _GAN, _GANR, _GANRe, _ht, _nPT, _pT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetActiveNamesRequest = struct(n0, _GANR, 0, [_pT], [0]);
export var GetActiveNamesResult = struct(n0, _GANRe, 0, [_aNc, _nPT], [64 | 0, 0]);
export var GetActiveNames = op(
  n0,
  _GAN,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetActiveNames", 200],
  },
  () => GetActiveNamesRequest,
  () => GetActiveNamesResult
);
