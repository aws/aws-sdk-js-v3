// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import { TooManyTags as __TooManyTags } from "../models/index";
import { _c, _e, _hE, _k, _m, _rN, _T, _TL, _TMT, _va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Tag = struct(n0, _T, 0, [_k, _va], [0, 0]);
export var TooManyTags = error(
  n0,
  _TMT,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _rN],
  [0, 0],

  __TooManyTags
);
export var TagList = list(n0, _TL, 0, () => Tag);
