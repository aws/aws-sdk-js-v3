// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATc, _CUAF, _GUAF, _GUAFR, _GUAFRe, _PMS, _U, _UMFASL, n0, TokenModelType, UsernameType } from "./schemas_0";

/* eslint no-var: 0 */

export var GetUserAuthFactorsRequest = struct(n0, _GUAFR, 0, [_ATc], [[() => TokenModelType, 0]]);
export var GetUserAuthFactorsResponse = struct(
  n0,
  _GUAFRe,
  0,
  [_U, _PMS, _UMFASL, _CUAF],
  [[() => UsernameType, 0], 0, 64 | 0, 64 | 0]
);
export var ConfiguredUserAuthFactorsListType = 64 | 0;

export var GetUserAuthFactors = op(
  n0,
  _GUAF,
  0,
  () => GetUserAuthFactorsRequest,
  () => GetUserAuthFactorsResponse
);
