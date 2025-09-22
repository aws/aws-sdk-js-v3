// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AWE, _h, _PADIWA, _PADIWAR, _PADIWARu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutAccountDedicatedIpWarmupAttributesRequest = struct(n0, _PADIWAR, 0, [_AWE], [2]);
export var PutAccountDedicatedIpWarmupAttributesResponse = struct(n0, _PADIWARu, 0, [], []);
export var PutAccountDedicatedIpWarmupAttributes = op(
  n0,
  _PADIWA,
  {
    [_h]: ["PUT", "/v2/email/account/dedicated-ips/warmup", 200],
  },
  () => PutAccountDedicatedIpWarmupAttributesRequest,
  () => PutAccountDedicatedIpWarmupAttributesResponse
);
