// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _AAIc, _h, _OAAU, _SAAR, _SAARR, _SAARRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var OAuthAuthorizationUrl = sim(n0, _OAAU, 0, 8);
export var StartAccountAssociationRefreshRequest = struct(n0, _SAARR, 0, [_AAIc], [[0, 1]]);
export var StartAccountAssociationRefreshResponse = struct(n0, _SAARRt, 0, [_OAAU], [[() => OAuthAuthorizationUrl, 0]]);
export var StartAccountAssociationRefresh = op(
  n0,
  _SAAR,
  {
    [_h]: ["POST", "/account-associations/{AccountAssociationId}/refresh", 200],
  },
  () => StartAccountAssociationRefreshRequest,
  () => StartAccountAssociationRefreshResponse
);
