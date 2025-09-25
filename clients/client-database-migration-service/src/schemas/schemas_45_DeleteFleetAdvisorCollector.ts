// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { CollectorNotFoundFault as __CollectorNotFoundFault } from "../models/index";
import { _c, _CNFF, _CRI, _DCRe, _DFAC, _e, _hE, _m, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CollectorNotFoundFault = error(
  n0,
  _CNFF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __CollectorNotFoundFault
);
export var DeleteCollectorRequest = struct(n0, _DCRe, 0, [_CRI], [0]);
export var DeleteFleetAdvisorCollector = op(
  n0,
  _DFAC,
  0,
  () => DeleteCollectorRequest,
  () => Unit
);
