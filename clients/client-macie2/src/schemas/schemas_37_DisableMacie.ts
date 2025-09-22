// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMi, _DMRi, _DMRis, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableMacieRequest = struct(n0, _DMRi, 0, [], []);
export var DisableMacieResponse = struct(n0, _DMRis, 0, [], []);
export var DisableMacie = op(
  n0,
  _DMi,
  {
    [_h]: ["DELETE", "/macie", 200],
  },
  () => DisableMacieRequest,
  () => DisableMacieResponse
);
