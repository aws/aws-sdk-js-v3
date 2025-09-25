// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bSA, _DBS, _DBSR, _DBSRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBrowserSettingsRequest = struct(n0, _DBSR, 0, [_bSA], [[0, 1]]);
export var DeleteBrowserSettingsResponse = struct(n0, _DBSRe, 0, [], []);
export var DeleteBrowserSettings = op(
  n0,
  _DBS,
  {
    [_h]: ["DELETE", "/browserSettings/{browserSettingsArn+}", 200],
  },
  () => DeleteBrowserSettingsRequest,
  () => DeleteBrowserSettingsResponse
);
