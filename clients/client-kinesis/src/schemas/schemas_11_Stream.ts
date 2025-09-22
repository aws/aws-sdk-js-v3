// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _SARN, _SM, _SMD, _USM, _USMI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StreamModeDetails = struct(n0, _SMD, 0, [_SM], [0]);
export var UpdateStreamModeInput = struct(n0, _USMI, 0, [_SARN, _SMD], [0, () => StreamModeDetails]);
export var UpdateStreamMode = op(
  n0,
  _USM,
  0,
  () => UpdateStreamModeInput,
  () => Unit
);
