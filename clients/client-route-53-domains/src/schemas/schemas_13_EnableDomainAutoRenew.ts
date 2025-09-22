// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _EDAR, _EDARR, _EDARRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableDomainAutoRenewRequest = struct(n0, _EDARR, 0, [_DN], [0]);
export var EnableDomainAutoRenewResponse = struct(n0, _EDARRn, 0, [], []);
export var EnableDomainAutoRenew = op(
  n0,
  _EDAR,
  0,
  () => EnableDomainAutoRenewRequest,
  () => EnableDomainAutoRenewResponse
);
