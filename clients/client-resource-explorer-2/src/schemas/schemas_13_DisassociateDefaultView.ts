// smithy-typescript generated code
import { op } from "@smithy/core/schema";

import { _DDV, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateDefaultView = op(
  n0,
  _DDV,
  {
    [_h]: ["POST", "/DisassociateDefaultView", 200],
  },
  () => Unit,
  () => Unit
);
