// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _DTMS, _DTMSR, _DTMSRe, _eQN, _TMSI, _tMSI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTrafficMirrorSessionRequest = struct(n0, _DTMSR, 0, [_TMSI, _DR], [0, 2]);
export var DeleteTrafficMirrorSessionResult = struct(
  n0,
  _DTMSRe,
  0,
  [_TMSI],
  [
    [
      0,
      {
        [_eQN]: `TrafficMirrorSessionId`,
        [_xN]: _tMSI,
      },
    ],
  ]
);
export var DeleteTrafficMirrorSession = op(
  n0,
  _DTMS,
  0,
  () => DeleteTrafficMirrorSessionRequest,
  () => DeleteTrafficMirrorSessionResult
);
