// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRC, _DRCR, _DRCRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRegistrationCodeRequest = struct(n0, _DRCR, 0, [], []);
export var DeleteRegistrationCodeResponse = struct(n0, _DRCRe, 0, [], []);
export var DeleteRegistrationCode = op(
  n0,
  _DRC,
  {
    [_h]: ["DELETE", "/registrationcode", 200],
  },
  () => DeleteRegistrationCodeRequest,
  () => DeleteRegistrationCodeResponse
);
