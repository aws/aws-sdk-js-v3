// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  ArnNotSupportedException as __ArnNotSupportedException,
  InvalidArnException as __InvalidArnException,
  ResourceArnRequiredException as __ResourceArnRequiredException,
} from "../models/index";
import { _ANSE, _c, _er, _IAE, _m, _RARE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ArnNotSupportedException = error(
  n0,
  _ANSE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __ArnNotSupportedException
);
export var InvalidArnException = error(
  n0,
  _IAE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidArnException
);
export var ResourceArnRequiredException = error(
  n0,
  _RARE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __ResourceArnRequiredException
);
