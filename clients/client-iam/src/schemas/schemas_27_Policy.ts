// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AUTCP, _EPx, _GAPP, _GAPPR, _HE, _MPA, _MPL, _PP, _PRP, _RLC, _RNe, _RS, _RUC, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccountPasswordPolicyResponse = struct(n0, _GAPPR, 0, [_PP], [() => PasswordPolicy]);
export var PasswordPolicy = struct(
  n0,
  _PP,
  0,
  [_MPL, _RS, _RNe, _RUC, _RLC, _AUTCP, _EPx, _MPA, _PRP, _HE],
  [1, 2, 2, 2, 2, 2, 2, 1, 1, 2]
);
export var GetAccountPasswordPolicy = op(
  n0,
  _GAPP,
  0,
  () => Unit,
  () => GetAccountPasswordPolicyResponse
);
