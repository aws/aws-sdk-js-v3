// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDA, _CDAR, _CDARl, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ClearDefaultAuthorizerRequest = struct(n0, _CDAR, 0, [], []);
export var ClearDefaultAuthorizerResponse = struct(n0, _CDARl, 0, [], []);
export var ClearDefaultAuthorizer = op(
  n0,
  _CDA,
  {
    [_h]: ["DELETE", "/default-authorizer", 200],
  },
  () => ClearDefaultAuthorizerRequest,
  () => ClearDefaultAuthorizerResponse
);
