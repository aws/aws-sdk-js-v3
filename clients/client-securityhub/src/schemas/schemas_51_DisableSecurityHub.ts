// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSH, _DSHR, _DSHRi, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableSecurityHubRequest = struct(n0, _DSHR, 0, [], []);
export var DisableSecurityHubResponse = struct(n0, _DSHRi, 0, [], []);
export var DisableSecurityHub = op(
  n0,
  _DSH,
  {
    [_h]: ["DELETE", "/accounts", 200],
  },
  () => DisableSecurityHubRequest,
  () => DisableSecurityHubResponse
);
