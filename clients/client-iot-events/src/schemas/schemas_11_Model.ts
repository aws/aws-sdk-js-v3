// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import { _cl, _er, _hE, _m, _RIUE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_er]: _cl,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ResourceInUseException
);
