// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _ANt, _AV, _GSA, _GSAI, _GSAR, _SA, _SSA, _SSAI, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Phone";

/* eslint no-var: 0 */

export var GetSubscriptionAttributesInput = struct(n0, _GSAI, 0, [_SA], [0]);
export var GetSubscriptionAttributesResponse = struct(n0, _GSAR, 0, [_A], [128 | 0]);
export var SetSubscriptionAttributesInput = struct(n0, _SSAI, 0, [_SA, _ANt, _AV], [0, 0, 0]);
export var SubscriptionAttributesMap = 128 | 0;

export var GetSubscriptionAttributes = op(
  n0,
  _GSA,
  0,
  () => GetSubscriptionAttributesInput,
  () => GetSubscriptionAttributesResponse
);
export var SetSubscriptionAttributes = op(
  n0,
  _SSA,
  0,
  () => SetSubscriptionAttributesInput,
  () => Unit
);
