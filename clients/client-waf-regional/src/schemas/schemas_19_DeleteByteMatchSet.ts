// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BMSI, _CT, _DBMS, _DBMSR, _DBMSRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteByteMatchSetRequest = struct(n0, _DBMSR, 0, [_BMSI, _CT], [0, 0]);
export var DeleteByteMatchSetResponse = struct(n0, _DBMSRe, 0, [_CT], [0]);
export var DeleteByteMatchSet = op(
  n0,
  _DBMS,
  0,
  () => DeleteByteMatchSetRequest,
  () => DeleteByteMatchSetResponse
);
