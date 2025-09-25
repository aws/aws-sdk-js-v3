// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { AccountLimitExceededException as __AccountLimitExceededException } from "../models/index";
import { _a, _ALEE, _aT, _c, _e, _ISC, _ISCI, _ISCO, _m, _sOh, _sTer, _to, _u, n0 } from "./schemas_0";
import { SensitiveNonEmptyString } from "./schemas_34_Command";

/* eslint no-var: 0 */

export var AccountLimitExceededException = error(
  n0,
  _ALEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __AccountLimitExceededException
);
export var ImportSourceCredentialsInput = struct(
  n0,
  _ISCI,
  0,
  [_u, _to, _sTer, _aT, _sOh],
  [0, [() => SensitiveNonEmptyString, 0], 0, 0, 2]
);
export var ImportSourceCredentialsOutput = struct(n0, _ISCO, 0, [_a], [0]);
export var ImportSourceCredentials = op(
  n0,
  _ISC,
  0,
  () => ImportSourceCredentialsInput,
  () => ImportSourceCredentialsOutput
);
