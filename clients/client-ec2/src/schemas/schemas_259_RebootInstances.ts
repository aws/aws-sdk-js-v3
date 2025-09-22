// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _eQN, _II, _IIn, _RIeb, _RIR, _xN, n0, Unit } from "./schemas_0";
import { InstanceIdStringList } from "./schemas_330_Instances";

/* eslint no-var: 0 */

export var RebootInstancesRequest = struct(
  n0,
  _RIR,
  0,
  [_IIn, _DR],
  [
    [
      () => InstanceIdStringList,
      {
        [_xN]: _II,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var RebootInstances = op(
  n0,
  _RIeb,
  0,
  () => RebootInstancesRequest,
  () => Unit
);
