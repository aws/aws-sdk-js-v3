// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GRC, _GRCR, _GRCRe, _h, _rCeg, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetRegistrationCodeRequest = struct(n0, _GRCR, 0, [], []);
export var GetRegistrationCodeResponse = struct(n0, _GRCRe, 0, [_rCeg], [0]);
export var GetRegistrationCode = op(
  n0,
  _GRC,
  {
    [_h]: ["GET", "/registrationcode", 200],
  },
  () => GetRegistrationCodeRequest,
  () => GetRegistrationCodeResponse
);
