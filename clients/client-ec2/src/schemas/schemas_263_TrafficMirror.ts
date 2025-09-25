// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _DTMFRel, _DTMFRR, _DTMFRRe, _eQN, _TMFRI, _tMFRI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTrafficMirrorFilterRuleRequest = struct(n0, _DTMFRR, 0, [_TMFRI, _DR], [0, 2]);
export var DeleteTrafficMirrorFilterRuleResult = struct(
  n0,
  _DTMFRRe,
  0,
  [_TMFRI],
  [
    [
      0,
      {
        [_eQN]: `TrafficMirrorFilterRuleId`,
        [_xN]: _tMFRI,
      },
    ],
  ]
);
export var DeleteTrafficMirrorFilterRule = op(
  n0,
  _DTMFRel,
  0,
  () => DeleteTrafficMirrorFilterRuleRequest,
  () => DeleteTrafficMirrorFilterRuleResult
);
