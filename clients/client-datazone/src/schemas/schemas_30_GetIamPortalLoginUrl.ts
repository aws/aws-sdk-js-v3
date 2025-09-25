// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aCU, _dI, _GIPLU, _GIPLUI, _GIPLUO, _ht, _uPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetIamPortalLoginUrlInput = struct(n0, _GIPLUI, 0, [_dI], [[0, 1]]);
export var GetIamPortalLoginUrlOutput = struct(n0, _GIPLUO, 0, [_aCU, _uPI], [0, 0]);
export var GetIamPortalLoginUrl = op(
  n0,
  _GIPLU,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/get-portal-login-url", 200],
  },
  () => GetIamPortalLoginUrlInput,
  () => GetIamPortalLoginUrlOutput
);
