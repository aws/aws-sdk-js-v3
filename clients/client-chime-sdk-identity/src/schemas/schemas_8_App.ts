// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIUA, _EC, _ED, _ES, _h, _PAIUES, _PAIUESR, _PAIUESRu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExpirationSettings = struct(n0, _ES, 0, [_ED, _EC], [1, 0]);
export var PutAppInstanceUserExpirationSettingsRequest = struct(
  n0,
  _PAIUESR,
  0,
  [_AIUA, _ES],
  [[0, 1], () => ExpirationSettings]
);
export var PutAppInstanceUserExpirationSettingsResponse = struct(
  n0,
  _PAIUESRu,
  0,
  [_AIUA, _ES],
  [0, () => ExpirationSettings]
);
export var PutAppInstanceUserExpirationSettings = op(
  n0,
  _PAIUES,
  {
    [_h]: ["PUT", "/app-instance-users/{AppInstanceUserArn}/expiration-settings", 200],
  },
  () => PutAppInstanceUserExpirationSettingsRequest,
  () => PutAppInstanceUserExpirationSettingsResponse
);
