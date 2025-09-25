// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _I, _PDIWA, _PDIWAR, _PDIWARu, _WP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutDedicatedIpWarmupAttributesRequest = struct(n0, _PDIWAR, 0, [_I, _WP], [[0, 1], 1]);
export var PutDedicatedIpWarmupAttributesResponse = struct(n0, _PDIWARu, 0, [], []);
export var PutDedicatedIpWarmupAttributes = op(
  n0,
  _PDIWA,
  {
    [_h]: ["PUT", "/v1/email/dedicated-ips/{Ip}/warmup", 200],
  },
  () => PutDedicatedIpWarmupAttributesRequest,
  () => PutDedicatedIpWarmupAttributesResponse
);
