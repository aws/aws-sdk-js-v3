// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aRut, _ARuto, _DR, _eQN, _II, _iI, _MIMO, _MIMOR, _MIMORo, _RMe, _rMe, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyInstanceMaintenanceOptionsRequest = struct(n0, _MIMOR, 0, [_II, _ARuto, _RMe, _DR], [0, 0, 0, 2]);
export var ModifyInstanceMaintenanceOptionsResult = struct(
  n0,
  _MIMORo,
  0,
  [_II, _ARuto, _RMe],
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
        [_eQN]: `AutoRecovery`,
        [_xN]: _aRut,
      },
    ],
    [
      0,
      {
        [_eQN]: `RebootMigration`,
        [_xN]: _rMe,
      },
    ],
  ]
);
export var ModifyInstanceMaintenanceOptions = op(
  n0,
  _MIMO,
  0,
  () => ModifyInstanceMaintenanceOptionsRequest,
  () => ModifyInstanceMaintenanceOptionsResult
);
