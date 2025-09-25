// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CC, _CCR, _cI, _CIRo, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelContactRequest = struct(n0, _CCR, 0, [_cI], [[0, 1]]);
export var ContactIdResponse = struct(n0, _CIRo, 0, [_cI], [0]);
export var CancelContact = op(
  n0,
  _CC,
  {
    [_h]: ["DELETE", "/contact/{contactId}", 200],
  },
  () => CancelContactRequest,
  () => ContactIdResponse
);
