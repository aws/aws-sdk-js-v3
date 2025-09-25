// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _SAMLPA, _T, _TSAMLP, _TSAMLPR, n0, tagListType, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagSAMLProviderRequest = struct(n0, _TSAMLPR, 0, [_SAMLPA, _T], [0, () => tagListType]);
export var TagSAMLProvider = op(
  n0,
  _TSAMLP,
  0,
  () => TagSAMLProviderRequest,
  () => Unit
);
