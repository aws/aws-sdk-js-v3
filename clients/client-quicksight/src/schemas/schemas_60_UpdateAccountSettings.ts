// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DN, _h, _NE, _RI, _St, _TPE, _UAS, _UASR, _UASRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateAccountSettingsRequest = struct(n0, _UASR, 0, [_AAI, _DN, _NE, _TPE], [[0, 1], 0, 0, 2]);
export var UpdateAccountSettingsResponse = struct(n0, _UASRp, 0, [_RI, _St], [0, [1, 32]]);
export var UpdateAccountSettings = op(
  n0,
  _UAS,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/settings", 200],
  },
  () => UpdateAccountSettingsRequest,
  () => UpdateAccountSettingsResponse
);
