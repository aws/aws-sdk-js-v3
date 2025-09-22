// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDFR, _DDFRR, _DDFRRi, _EI, _OI, _RI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateDelegateFromResourceRequest = struct(n0, _DDFRR, 0, [_OI, _RI, _EI], [0, 0, 0]);
export var DisassociateDelegateFromResourceResponse = struct(n0, _DDFRRi, 0, [], []);
export var DisassociateDelegateFromResource = op(
  n0,
  _DDFR,
  2,
  () => DisassociateDelegateFromResourceRequest,
  () => DisassociateDelegateFromResourceResponse
);
