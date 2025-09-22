// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ESWAO, _ESWAOR, _ESWAORn, _h, _re, _rV, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableSharingWithAwsOrganizationRequest = struct(n0, _ESWAOR, 0, [], []);
export var EnableSharingWithAwsOrganizationResponse = struct(
  n0,
  _ESWAORn,
  0,
  [_rV],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
  ]
);
export var EnableSharingWithAwsOrganization = op(
  n0,
  _ESWAO,
  {
    [_h]: ["POST", "/enablesharingwithawsorganization", 200],
  },
  () => EnableSharingWithAwsOrganizationRequest,
  () => EnableSharingWithAwsOrganizationResponse
);
