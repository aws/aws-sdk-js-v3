// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSHVi, _DSHVRi, _DSHVRis, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableSecurityHubV2Request = struct(n0, _DSHVRi, 0, [], []);
export var DisableSecurityHubV2Response = struct(n0, _DSHVRis, 0, [], []);
export var DisableSecurityHubV2 = op(
  n0,
  _DSHVi,
  {
    [_h]: ["DELETE", "/hubv2", 200],
  },
  () => DisableSecurityHubV2Request,
  () => DisableSecurityHubV2Response
);
