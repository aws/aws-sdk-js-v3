// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dDN, _dDP, _GDDP, _GDDPR, _GDDPRe, _P, _po, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDeliveryDestinationPolicyRequest = struct(n0, _GDDPR, 0, [_dDN], [0]);
export var GetDeliveryDestinationPolicyResponse = struct(n0, _GDDPRe, 0, [_po], [() => Policy]);
export var Policy = struct(n0, _P, 0, [_dDP], [0]);
export var GetDeliveryDestinationPolicy = op(
  n0,
  _GDDP,
  0,
  () => GetDeliveryDestinationPolicyRequest,
  () => GetDeliveryDestinationPolicyResponse
);
