// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _EIma, _h, _hQ, _II, _IIL, _INd, _IT, _LEI, _LEIR, _LEIRi, _NT, _PS, _SEe, _VSe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IdentityInfo = struct(n0, _II, 0, [_IT, _INd, _SEe, _VSe], [0, 0, 2, 0]);
export var ListEmailIdentitiesRequest = struct(
  n0,
  _LEIR,
  0,
  [_NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListEmailIdentitiesResponse = struct(n0, _LEIRi, 0, [_EIma, _NT], [() => IdentityInfoList, 0]);
export var IdentityInfoList = list(n0, _IIL, 0, () => IdentityInfo);
export var ListEmailIdentities = op(
  n0,
  _LEI,
  {
    [_h]: ["GET", "/v2/email/identities", 200],
  },
  () => ListEmailIdentitiesRequest,
  () => ListEmailIdentitiesResponse
);
