// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _CB, _ECx, _ED, _ES, _h, _hH, _PCES, _PCESR, _PCESRu, _xacb, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExpirationSettings = struct(n0, _ES, 0, [_ED, _ECx], [1, 0]);
export var PutChannelExpirationSettingsRequest = struct(
  n0,
  _PCESR,
  0,
  [_CA, _CB, _ES],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    () => ExpirationSettings,
  ]
);
export var PutChannelExpirationSettingsResponse = struct(n0, _PCESRu, 0, [_CA, _ES], [0, () => ExpirationSettings]);
export var PutChannelExpirationSettings = op(
  n0,
  _PCES,
  {
    [_h]: ["PUT", "/channels/{ChannelArn}/expiration-settings", 200],
  },
  () => PutChannelExpirationSettingsRequest,
  () => PutChannelExpirationSettingsResponse
);
