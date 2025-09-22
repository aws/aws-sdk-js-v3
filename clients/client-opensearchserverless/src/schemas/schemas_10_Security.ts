// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DSC, _DSCR, _DSCRe, _id_, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSecurityConfigRequest = struct(n0, _DSCR, 0, [_id_, _cT], [0, [0, 4]]);
export var DeleteSecurityConfigResponse = struct(n0, _DSCRe, 0, [], []);
export var DeleteSecurityConfig = op(
  n0,
  _DSC,
  2,
  () => DeleteSecurityConfigRequest,
  () => DeleteSecurityConfigResponse
);
