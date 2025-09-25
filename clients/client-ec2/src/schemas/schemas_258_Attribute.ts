// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _At, _att, _DR, _dR, _eQN, _II, _iI, _RIAe, _RIARe, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetInstanceAttributeRequest = struct(
  n0,
  _RIARe,
  0,
  [_DR, _II, _At],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
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
        [_eQN]: `Attribute`,
        [_xN]: _att,
      },
    ],
  ]
);
export var ResetInstanceAttribute = op(
  n0,
  _RIAe,
  0,
  () => ResetInstanceAttributeRequest,
  () => Unit
);
