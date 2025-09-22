// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADTR, _ADTRR, _ADTRRs, _EI, _OI, _RI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateDelegateToResourceRequest = struct(n0, _ADTRR, 0, [_OI, _RI, _EI], [0, 0, 0]);
export var AssociateDelegateToResourceResponse = struct(n0, _ADTRRs, 0, [], []);
export var AssociateDelegateToResource = op(
  n0,
  _ADTR,
  2,
  () => AssociateDelegateToResourceRequest,
  () => AssociateDelegateToResourceResponse
);
