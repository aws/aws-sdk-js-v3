// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _HITI, _HITTI, _UHITTOHIT, _UHITTOHITR, _UHITTOHITRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateHITTypeOfHITRequest = struct(n0, _UHITTOHITR, 0, [_HITI, _HITTI], [0, 0]);
export var UpdateHITTypeOfHITResponse = struct(n0, _UHITTOHITRp, 0, [], []);
export var UpdateHITTypeOfHIT = op(
  n0,
  _UHITTOHIT,
  2,
  () => UpdateHITTypeOfHITRequest,
  () => UpdateHITTypeOfHITResponse
);
