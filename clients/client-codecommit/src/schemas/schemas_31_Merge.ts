// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  ConcurrentReferenceUpdateException as __ConcurrentReferenceUpdateException,
  ManualMergeRequiredException as __ManualMergeRequiredException,
} from "../models/index";
import { _c, _CRUE, _e, _m, _MMRE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConcurrentReferenceUpdateException = error(
  n0,
  _CRUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ConcurrentReferenceUpdateException
);
export var ManualMergeRequiredException = error(
  n0,
  _MMRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ManualMergeRequiredException
);
