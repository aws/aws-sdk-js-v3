// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEI, _DEN, _SECNAME, _SECNAMEM, _SEI, _SEN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var SwapEnvironmentCNAMEsMessage = struct(n0, _SECNAMEM, 0, [_SEI, _SEN, _DEI, _DEN], [0, 0, 0, 0]);
export var SwapEnvironmentCNAMEs = op(
  n0,
  _SECNAME,
  0,
  () => SwapEnvironmentCNAMEsMessage,
  () => Unit
);
