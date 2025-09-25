// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  MaximumRepositoryNamesExceededException as __MaximumRepositoryNamesExceededException,
  RepositoryNamesRequiredException as __RepositoryNamesRequiredException,
} from "../models/index";
import { _c, _e, _m, _MRNEE, _RNREep, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var MaximumRepositoryNamesExceededException = error(
  n0,
  _MRNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MaximumRepositoryNamesExceededException
);
export var RepositoryNamesRequiredException = error(
  n0,
  _RNREep,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryNamesRequiredException
);
