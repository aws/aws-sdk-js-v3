// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFe, _DFR, _I, _II, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFaqRequest = struct(n0, _DFR, 0, [_I, _II], [0, 0]);
export var DeleteFaq = op(
  n0,
  _DFe,
  0,
  () => DeleteFaqRequest,
  () => Unit
);
