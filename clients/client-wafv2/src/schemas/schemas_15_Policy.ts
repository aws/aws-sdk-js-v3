// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { WAFInvalidPermissionPolicyException as __WAFInvalidPermissionPolicyException } from "../models/index";
import { _c, _e, _GPP, _GPPR, _GPPRe, _Me, _Po, _PPP, _PPPR, _PPPRu, _RA, _WAFIPPE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPermissionPolicyRequest = struct(n0, _GPPR, 0, [_RA], [0]);
export var GetPermissionPolicyResponse = struct(n0, _GPPRe, 0, [_Po], [0]);
export var PutPermissionPolicyRequest = struct(n0, _PPPR, 0, [_RA, _Po], [0, 0]);
export var PutPermissionPolicyResponse = struct(n0, _PPPRu, 0, [], []);
export var WAFInvalidPermissionPolicyException = error(
  n0,
  _WAFIPPE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __WAFInvalidPermissionPolicyException
);
export var GetPermissionPolicy = op(
  n0,
  _GPP,
  0,
  () => GetPermissionPolicyRequest,
  () => GetPermissionPolicyResponse
);
export var PutPermissionPolicy = op(
  n0,
  _PPP,
  0,
  () => PutPermissionPolicyRequest,
  () => PutPermissionPolicyResponse
);
