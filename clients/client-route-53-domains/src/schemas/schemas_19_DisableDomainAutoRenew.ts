// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDAR, _DDARR, _DDARRi, _DN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableDomainAutoRenewRequest = struct(n0, _DDARR, 0, [_DN], [0]);
export var DisableDomainAutoRenewResponse = struct(n0, _DDARRi, 0, [], []);
export var DisableDomainAutoRenew = op(
  n0,
  _DDAR,
  0,
  () => DisableDomainAutoRenewRequest,
  () => DisableDomainAutoRenewResponse
);
