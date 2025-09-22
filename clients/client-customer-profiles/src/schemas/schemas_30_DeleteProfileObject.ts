// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _DPO, _DPOR, _DPORe, _h, _M, _OTN, _PI, _POUK, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProfileObjectRequest = struct(n0, _DPOR, 0, [_PI, _POUK, _OTN, _DN], [0, 0, 0, [0, 1]]);
export var DeleteProfileObjectResponse = struct(n0, _DPORe, 0, [_M], [0]);
export var DeleteProfileObject = op(
  n0,
  _DPO,
  {
    [_h]: ["POST", "/domains/{DomainName}/profiles/objects/delete", 200],
  },
  () => DeleteProfileObjectRequest,
  () => DeleteProfileObjectResponse
);
