// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _DTMT, _DTMTR, _DTMTRe, _eQN, _TMTI, _tMTI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTrafficMirrorTargetRequest = struct(n0, _DTMTR, 0, [_TMTI, _DR], [0, 2]);
export var DeleteTrafficMirrorTargetResult = struct(
  n0,
  _DTMTRe,
  0,
  [_TMTI],
  [
    [
      0,
      {
        [_eQN]: `TrafficMirrorTargetId`,
        [_xN]: _tMTI,
      },
    ],
  ]
);
export var DeleteTrafficMirrorTarget = op(
  n0,
  _DTMT,
  0,
  () => DeleteTrafficMirrorTargetRequest,
  () => DeleteTrafficMirrorTargetResult
);
