// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EA, _HITI, _UEFHIT, _UEFHITR, _UEFHITRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateExpirationForHITRequest = struct(n0, _UEFHITR, 0, [_HITI, _EA], [0, 4]);
export var UpdateExpirationForHITResponse = struct(n0, _UEFHITRp, 0, [], []);
export var UpdateExpirationForHIT = op(
  n0,
  _UEFHIT,
  2,
  () => UpdateExpirationForHITRequest,
  () => UpdateExpirationForHITResponse
);
