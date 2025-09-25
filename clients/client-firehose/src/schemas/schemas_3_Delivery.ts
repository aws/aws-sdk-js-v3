// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSNe, _DST, _ESDSN, _HMDS, _L, _LDS, _LDSI, _LDSO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListDeliveryStreamsInput = struct(n0, _LDSI, 0, [_L, _DST, _ESDSN], [1, 0, 0]);
export var ListDeliveryStreamsOutput = struct(n0, _LDSO, 0, [_DSNe, _HMDS], [64 | 0, 2]);
export var DeliveryStreamNameList = 64 | 0;

export var ListDeliveryStreams = op(
  n0,
  _LDS,
  0,
  () => ListDeliveryStreamsInput,
  () => ListDeliveryStreamsOutput
);
