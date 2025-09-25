// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BW, _bW, _DR, _eQN, _II, _iI, _MINPO, _MINPR, _MINPRo, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyInstanceNetworkPerformanceRequest = struct(n0, _MINPR, 0, [_II, _BW, _DR], [0, 0, 2]);
export var ModifyInstanceNetworkPerformanceResult = struct(
  n0,
  _MINPRo,
  0,
  [_II, _BW],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `BandwidthWeighting`,
        [_xN]: _bW,
      },
    ],
  ]
);
export var ModifyInstanceNetworkPerformanceOptions = op(
  n0,
  _MINPO,
  0,
  () => ModifyInstanceNetworkPerformanceRequest,
  () => ModifyInstanceNetworkPerformanceResult
);
