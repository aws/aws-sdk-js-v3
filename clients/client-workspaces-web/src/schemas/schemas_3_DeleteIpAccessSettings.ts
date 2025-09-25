// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIAS, _DIASR, _DIASRe, _h, _iASA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIpAccessSettingsRequest = struct(n0, _DIASR, 0, [_iASA], [[0, 1]]);
export var DeleteIpAccessSettingsResponse = struct(n0, _DIASRe, 0, [], []);
export var DeleteIpAccessSettings = op(
  n0,
  _DIAS,
  {
    [_h]: ["DELETE", "/ipAccessSettings/{ipAccessSettingsArn+}", 200],
  },
  () => DeleteIpAccessSettingsRequest,
  () => DeleteIpAccessSettingsResponse
);
