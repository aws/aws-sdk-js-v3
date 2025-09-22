// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _ACnd, _CAAC, _CAOCL, _CPAF, _OC, _TC, _TCa, n0, TagAndConditionList, TagCondition } from "./schemas_0";

/* eslint no-var: 0 */

export var CommonAttributeAndCondition = struct(n0, _CAAC, 0, [_TC], [() => TagAndConditionList]);
export var ControlPlaneAttributeFilter = struct(
  n0,
  _CPAF,
  0,
  [_OC, _ACnd, _TCa],
  [() => CommonAttributeOrConditionList, () => CommonAttributeAndCondition, () => TagCondition]
);
export var CommonAttributeOrConditionList = list(n0, _CAOCL, 0, () => CommonAttributeAndCondition);
