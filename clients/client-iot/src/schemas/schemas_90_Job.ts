// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidStateTransitionException as __InvalidStateTransitionException } from "../models/index";
import { _CJE, _CJER, _cl, _er, _eV, _fo, _h, _hE, _hQ, _ISTE, _jI, _me, _sDt, _tN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelJobExecutionRequest = struct(
  n0,
  _CJER,
  0,
  [_jI, _tN, _fo, _eV, _sDt],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _fo,
      },
    ],
    1,
    128 | 0,
  ]
);
export var InvalidStateTransitionException = error(
  n0,
  _ISTE,
  {
    [_er]: _cl,
    [_hE]: 409,
  },
  [_me],
  [0],

  __InvalidStateTransitionException
);
export var CancelJobExecution = op(
  n0,
  _CJE,
  {
    [_h]: ["PUT", "/things/{thingName}/jobs/{jobId}/cancel", 200],
  },
  () => CancelJobExecutionRequest,
  () => Unit
);
