// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ar, _DS, _dSe, _GDS, _GDSR, _GDSRe, _lT, _n, _rAe, _se, _ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeliverySource = struct(n0, _DS, 0, [_n, _ar, _rAe, _se, _lT, _ta], [0, 0, 64 | 0, 0, 0, 128 | 0]);
export var GetDeliverySourceRequest = struct(n0, _GDSR, 0, [_n], [0]);
export var GetDeliverySourceResponse = struct(n0, _GDSRe, 0, [_dSe], [() => DeliverySource]);
export var ResourceArns = 64 | 0;

export var GetDeliverySource = op(
  n0,
  _GDS,
  0,
  () => GetDeliverySourceRequest,
  () => GetDeliverySourceResponse
);
