// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _ANl, _Ar, _DTAe, _DTARel, _DTARele, _h, _RI, _St, _TI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteThemeAliasRequest = struct(
  n0,
  _DTARel,
  0,
  [_AAI, _TI, _ANl],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteThemeAliasResponse = struct(n0, _DTARele, 0, [_ANl, _Ar, _RI, _St, _TI], [0, 0, 0, [1, 32], 0]);
export var DeleteThemeAlias = op(
  n0,
  _DTAe,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}", 200],
  },
  () => DeleteThemeAliasRequest,
  () => DeleteThemeAliasResponse
);
