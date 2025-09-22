// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSA, _CSN, _MT, _SDMT, _SDMTR, _SDMTRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SetDefaultMessageTypeRequest = struct(n0, _SDMTR, 0, [_CSN, _MT], [0, 0]);
export var SetDefaultMessageTypeResult = struct(n0, _SDMTRe, 0, [_CSA, _CSN, _MT], [0, 0, 0]);
export var SetDefaultMessageType = op(
  n0,
  _SDMT,
  0,
  () => SetDefaultMessageTypeRequest,
  () => SetDefaultMessageTypeResult
);
