// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _aA, _ASRTA, _ASRTAR, _ASRTARs, _h, _jN, _RA, _rA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateServiceRoleToAccountRequest = struct(
  n0,
  _ASRTAR,
  0,
  [_rA],
  [
    [
      0,
      {
        [_jN]: _RA,
      },
    ],
  ]
);
export var AssociateServiceRoleToAccountResponse = struct(
  n0,
  _ASRTARs,
  0,
  [_aA],
  [
    [
      0,
      {
        [_jN]: _AA,
      },
    ],
  ]
);
export var AssociateServiceRoleToAccount = op(
  n0,
  _ASRTA,
  {
    [_h]: ["PUT", "/greengrass/servicerole", 200],
  },
  () => AssociateServiceRoleToAccountRequest,
  () => AssociateServiceRoleToAccountResponse
);
