// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { WAFUnavailableEntityException as __WAFUnavailableEntityException } from "../models/index";
import { _AWACL, _AWACLR, _AWACLRs, _c, _e, _Me, _RA, _WACLA, _WAFUEE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateWebACLRequest = struct(n0, _AWACLR, 0, [_WACLA, _RA], [0, 0]);
export var AssociateWebACLResponse = struct(n0, _AWACLRs, 0, [], []);
export var WAFUnavailableEntityException = error(
  n0,
  _WAFUEE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __WAFUnavailableEntityException
);
export var AssociateWebACL = op(
  n0,
  _AWACL,
  0,
  () => AssociateWebACLRequest,
  () => AssociateWebACLResponse
);
