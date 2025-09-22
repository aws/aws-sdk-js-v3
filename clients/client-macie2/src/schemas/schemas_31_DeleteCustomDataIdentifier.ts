// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCDI, _DCDIR, _DCDIRe, _h, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCustomDataIdentifierRequest = struct(n0, _DCDIR, 0, [_i], [[0, 1]]);
export var DeleteCustomDataIdentifierResponse = struct(n0, _DCDIRe, 0, [], []);
export var DeleteCustomDataIdentifier = op(
  n0,
  _DCDI,
  {
    [_h]: ["DELETE", "/custom-data-identifiers/{id}", 200],
  },
  () => DeleteCustomDataIdentifierRequest,
  () => DeleteCustomDataIdentifierResponse
);
