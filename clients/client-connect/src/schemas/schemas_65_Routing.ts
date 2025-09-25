// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _BT, _C, _CCB, _Conc, _h, _II, _MCe, _MCed, _RPI, _URPC, _URPCR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CrossChannelBehavior = struct(n0, _CCB, 0, [_BT], [0]);
export var MediaConcurrency = struct(n0, _MCed, 0, [_C, _Conc, _CCB], [0, 1, () => CrossChannelBehavior]);
export var UpdateRoutingProfileConcurrencyRequest = struct(
  n0,
  _URPCR,
  0,
  [_II, _RPI, _MCe],
  [[0, 1], [0, 1], () => MediaConcurrencies]
);
export var MediaConcurrencies = list(n0, _MCe, 0, () => MediaConcurrency);
export var UpdateRoutingProfileConcurrency = op(
  n0,
  _URPC,
  {
    [_h]: ["POST", "/routing-profiles/{InstanceId}/{RoutingProfileId}/concurrency", 200],
  },
  () => UpdateRoutingProfileConcurrencyRequest,
  () => Unit
);
