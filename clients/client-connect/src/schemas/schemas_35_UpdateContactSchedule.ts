// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _h, _II, _STch, _UCS, _UCSR, _UCSRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateContactScheduleRequest = struct(n0, _UCSR, 0, [_II, _CI, _STch], [0, 0, 4]);
export var UpdateContactScheduleResponse = struct(n0, _UCSRp, 0, [], []);
export var UpdateContactSchedule = op(
  n0,
  _UCS,
  {
    [_h]: ["POST", "/contact/schedule", 200],
  },
  () => UpdateContactScheduleRequest,
  () => UpdateContactScheduleResponse
);
