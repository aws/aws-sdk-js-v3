// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DE, _I, _SIDE, _SIDER, _SIDERe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SetIdentityDkimEnabledRequest = struct(n0, _SIDER, 0, [_I, _DE], [0, 2]);
export var SetIdentityDkimEnabledResponse = struct(n0, _SIDERe, 0, [], []);
export var SetIdentityDkimEnabled = op(
  n0,
  _SIDE,
  0,
  () => SetIdentityDkimEnabledRequest,
  () => SetIdentityDkimEnabledResponse
);
