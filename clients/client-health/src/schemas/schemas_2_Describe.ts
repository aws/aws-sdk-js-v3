// smithy-typescript generated code
import { error, op } from "@smithy/core/schema";

import { ConcurrentModificationException as __ConcurrentModificationException } from "../models/index";
import { _cl, _CME, _DHSAFO, _e, _EHSAFO, _m, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Describe";

/* eslint no-var: 0 */

export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ConcurrentModificationException
);
export var DisableHealthServiceAccessForOrganization = op(
  n0,
  _DHSAFO,
  2,
  () => Unit,
  () => Unit
);
export var EnableHealthServiceAccessForOrganization = op(
  n0,
  _EHSAFO,
  2,
  () => Unit,
  () => Unit
);
