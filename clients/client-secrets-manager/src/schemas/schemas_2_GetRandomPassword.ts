// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _ECx, _EL, _EN, _EP, _EU, _GRP, _GRPR, _GRPRe, _IS, _PL, _REIT, _RP, _RPT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RandomPasswordType = sim(n0, _RPT, 0, 8);
export var GetRandomPasswordRequest = struct(
  n0,
  _GRPR,
  0,
  [_PL, _ECx, _EN, _EP, _EU, _EL, _IS, _REIT],
  [1, 0, 2, 2, 2, 2, 2, 2]
);
export var GetRandomPasswordResponse = struct(n0, _GRPRe, 0, [_RP], [[() => RandomPasswordType, 0]]);
export var GetRandomPassword = op(
  n0,
  _GRP,
  0,
  () => GetRandomPasswordRequest,
  () => GetRandomPasswordResponse
);
