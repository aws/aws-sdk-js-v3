// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVEA, _DVEAR, _EA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVerifiedEmailAddressRequest = struct(n0, _DVEAR, 0, [_EA], [0]);
export var DeleteVerifiedEmailAddress = op(
  n0,
  _DVEA,
  0,
  () => DeleteVerifiedEmailAddressRequest,
  () => Unit
);
