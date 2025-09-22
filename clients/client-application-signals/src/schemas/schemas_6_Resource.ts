// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import { _c, _e, _hE, _K, _M, _SQEE, _Tag, _TL, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagList = list(n0, _TL, 0, () => Tag);
