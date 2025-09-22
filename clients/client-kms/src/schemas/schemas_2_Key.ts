// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _D, _KI, _UKD, _UKDR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateKeyDescriptionRequest = struct(n0, _UKDR, 0, [_KI, _D], [0, 0]);
export var UpdateKeyDescription = op(
  n0,
  _UKD,
  0,
  () => UpdateKeyDescriptionRequest,
  () => Unit
);
