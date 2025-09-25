// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CIC, _CICR, _CICRa, _cT, _ht, _iBVA, _rI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelImageCreationRequest = struct(n0, _CICR, 0, [_iBVA, _cT], [0, [0, 4]]);
export var CancelImageCreationResponse = struct(n0, _CICRa, 0, [_rI, _cT, _iBVA], [0, 0, 0]);
export var CancelImageCreation = op(
  n0,
  _CIC,
  {
    [_ht]: ["PUT", "/CancelImageCreation", 200],
  },
  () => CancelImageCreationRequest,
  () => CancelImageCreationResponse
);
