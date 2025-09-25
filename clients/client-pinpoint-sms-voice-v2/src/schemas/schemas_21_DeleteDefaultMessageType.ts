// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSA, _CSN, _DDMT, _DDMTR, _DDMTRe, _MT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDefaultMessageTypeRequest = struct(n0, _DDMTR, 0, [_CSN], [0]);
export var DeleteDefaultMessageTypeResult = struct(n0, _DDMTRe, 0, [_CSA, _CSN, _MT], [0, 0, 0]);
export var DeleteDefaultMessageType = op(
  n0,
  _DDMT,
  0,
  () => DeleteDefaultMessageTypeRequest,
  () => DeleteDefaultMessageTypeResult
);
