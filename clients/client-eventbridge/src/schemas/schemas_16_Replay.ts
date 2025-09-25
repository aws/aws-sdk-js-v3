// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { IllegalStatusException as __IllegalStatusException } from "../models/index";
import { _c, _CR, _CRR, _CRRa, _e, _ISE, _m, _RA, _RN, _SR, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelReplayRequest = struct(n0, _CRR, 0, [_RN], [0]);
export var CancelReplayResponse = struct(n0, _CRRa, 0, [_RA, _St, _SR], [0, 0, 0]);
export var IllegalStatusException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __IllegalStatusException
);
export var CancelReplay = op(
  n0,
  _CR,
  0,
  () => CancelReplayRequest,
  () => CancelReplayResponse
);
