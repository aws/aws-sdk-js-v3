// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidStateException as __InvalidStateException } from "../models/index";
import { _c, _DPS, _DPSI, _DPSO, _e, _hE, _ISEn, _m, _pSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePolicyStoreInput = struct(n0, _DPSI, 0, [_pSI], [0]);
export var DeletePolicyStoreOutput = struct(n0, _DPSO, 0, [], []);
export var InvalidStateException = error(
  n0,
  _ISEn,
  {
    [_e]: _c,
    [_hE]: 406,
  },
  [_m],
  [0],

  __InvalidStateException
);
export var DeletePolicyStore = op(
  n0,
  _DPS,
  2,
  () => DeletePolicyStoreInput,
  () => DeletePolicyStoreOutput
);
