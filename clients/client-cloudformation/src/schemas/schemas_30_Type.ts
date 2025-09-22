// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _ERA, _LC, _RTeg, _RTegi, _RTIe, _RTO, _SHP, _T, _TN, n0 } from "./schemas_0";
import { LoggingConfig } from "./schemas_24_Type";

/* eslint no-var: 0 */

export var RegisterTypeInput = struct(
  n0,
  _RTIe,
  0,
  [_T, _TN, _SHP, _LC, _ERA, _CRT],
  [0, 0, 0, () => LoggingConfig, 0, 0]
);
export var RegisterTypeOutput = struct(n0, _RTO, 0, [_RTeg], [0]);
export var RegisterType = op(
  n0,
  _RTegi,
  2,
  () => RegisterTypeInput,
  () => RegisterTypeOutput
);
