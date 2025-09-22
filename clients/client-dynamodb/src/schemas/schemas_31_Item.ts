// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { ProvisionedThroughputExceededException as __ProvisionedThroughputExceededException } from "../models/index";
import { _c, _e, _m, _PTEE, _TR, n0, ThrottlingReasonList } from "./schemas_0";

/* eslint no-var: 0 */

export var ProvisionedThroughputExceededException = error(
  n0,
  _PTEE,
  {
    [_e]: _c,
  },
  [_m, _TR],
  [0, () => ThrottlingReasonList],

  __ProvisionedThroughputExceededException
);
