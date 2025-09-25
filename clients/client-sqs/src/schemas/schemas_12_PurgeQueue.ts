// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { PurgeQueueInProgress as __PurgeQueueInProgress } from "../models/index";
import { _aQE, _c, _e, _hE, _m, _PQ, _PQIP, _PQR, _QU, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Message";

/* eslint no-var: 0 */

export var PurgeQueueInProgress = error(
  n0,
  _PQIP,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`AWS.SimpleQueueService.PurgeQueueInProgress`, 403],
  },
  [_m],
  [0],

  __PurgeQueueInProgress
);
export var PurgeQueueRequest = struct(n0, _PQR, 0, [_QU], [0]);
export var PurgeQueue = op(
  n0,
  _PQ,
  0,
  () => PurgeQueueRequest,
  () => Unit
);
