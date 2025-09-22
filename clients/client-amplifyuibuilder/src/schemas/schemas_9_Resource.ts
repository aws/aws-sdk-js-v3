// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { ThrottlingException as __ThrottlingException } from "../models/index";
import { _cli, _er, _hE, _me, _TE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_er]: _cli,
    [_hE]: 429,
  },
  [_me],
  [0],

  __ThrottlingException
);
