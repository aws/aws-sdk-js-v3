// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _DPOTel, _DPOTR, _DPOTRe, _h, _M, _OTN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProfileObjectTypeRequest = struct(
  n0,
  _DPOTR,
  0,
  [_DN, _OTN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteProfileObjectTypeResponse = struct(n0, _DPOTRe, 0, [_M], [0]);
export var DeleteProfileObjectType = op(
  n0,
  _DPOTel,
  {
    [_h]: ["DELETE", "/domains/{DomainName}/object-types/{ObjectTypeName}", 200],
  },
  () => DeleteProfileObjectTypeRequest,
  () => DeleteProfileObjectTypeResponse
);
