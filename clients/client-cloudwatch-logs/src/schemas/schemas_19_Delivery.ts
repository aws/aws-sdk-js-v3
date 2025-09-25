// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ar, _DD, _DDC, _dDC, _dDe, _dDT, _dRA, _GDD, _GDDR, _GDDRe, _n, _oF, _ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeliveryDestination = struct(
  n0,
  _DD,
  0,
  [_n, _ar, _dDT, _oF, _dDC, _ta],
  [0, 0, 0, 0, () => DeliveryDestinationConfiguration, 128 | 0]
);
export var DeliveryDestinationConfiguration = struct(n0, _DDC, 0, [_dRA], [0]);
export var GetDeliveryDestinationRequest = struct(n0, _GDDR, 0, [_n], [0]);
export var GetDeliveryDestinationResponse = struct(n0, _GDDRe, 0, [_dDe], [() => DeliveryDestination]);
export var GetDeliveryDestination = op(
  n0,
  _GDD,
  0,
  () => GetDeliveryDestinationRequest,
  () => GetDeliveryDestinationResponse
);
