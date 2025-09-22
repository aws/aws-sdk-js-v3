// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  ResourceConflictException as __ResourceConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import { _cli, _er, _hE, _me, _RCE, _SQEE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResourceConflictException = error(
  n0,
  _RCE,
  {
    [_er]: _cli,
    [_hE]: 409,
  },
  [_me],
  [0],

  __ResourceConflictException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_er]: _cli,
    [_hE]: 402,
  },
  [_me],
  [0],

  __ServiceQuotaExceededException
);
