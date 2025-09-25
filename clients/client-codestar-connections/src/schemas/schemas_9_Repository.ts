// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { ConcurrentModificationException as __ConcurrentModificationException } from "../models/index";
import { _c, _CME, _e, _hE, _M, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConcurrentModificationException
);
