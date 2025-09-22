// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _De, _FAi, _FN, _UFD, _UFDR, _UFDRp, _UT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateFirewallDescriptionRequest = struct(n0, _UFDR, 0, [_UT, _FAi, _FN, _De], [0, 0, 0, 0]);
export var UpdateFirewallDescriptionResponse = struct(n0, _UFDRp, 0, [_FAi, _FN, _De, _UT], [0, 0, 0, 0]);
export var UpdateFirewallDescription = op(
  n0,
  _UFD,
  0,
  () => UpdateFirewallDescriptionRequest,
  () => UpdateFirewallDescriptionResponse
);
