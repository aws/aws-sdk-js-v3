// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GARN, _UGSN, _UGSNI, _UGSNO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateGatewaySoftwareNowInput = struct(n0, _UGSNI, 0, [_GARN], [0]);
export var UpdateGatewaySoftwareNowOutput = struct(n0, _UGSNO, 0, [_GARN], [0]);
export var UpdateGatewaySoftwareNow = op(
  n0,
  _UGSN,
  0,
  () => UpdateGatewaySoftwareNowInput,
  () => UpdateGatewaySoftwareNowOutput
);
