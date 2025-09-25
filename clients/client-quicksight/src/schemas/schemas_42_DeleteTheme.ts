// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _Ar, _DTele, _DTRel, _DTRele, _h, _hQ, _RI, _St, _TI, _VN, _vn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteThemeRequest = struct(
  n0,
  _DTRel,
  0,
  [_AAI, _TI, _VN],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _vn,
      },
    ],
  ]
);
export var DeleteThemeResponse = struct(n0, _DTRele, 0, [_Ar, _RI, _St, _TI], [0, 0, [1, 32], 0]);
export var DeleteTheme = op(
  n0,
  _DTele,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/themes/{ThemeId}", 200],
  },
  () => DeleteThemeRequest,
  () => DeleteThemeResponse
);
