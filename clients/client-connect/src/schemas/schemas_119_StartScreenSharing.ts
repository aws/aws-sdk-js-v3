// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _CT, _h, _II, _SSS, _SSSR, _SSSRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartScreenSharingRequest = struct(n0, _SSSR, 0, [_CT, _II, _CI], [[0, 4], 0, 0]);
export var StartScreenSharingResponse = struct(n0, _SSSRt, 0, [], []);
export var StartScreenSharing = op(
  n0,
  _SSS,
  {
    [_h]: ["PUT", "/contact/screen-sharing", 200],
  },
  () => StartScreenSharingRequest,
  () => StartScreenSharingResponse
);
