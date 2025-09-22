// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aVM,
  _aVMI,
  _AVML,
  _AVMS,
  _cAVCI,
  _cCC,
  _cIA,
  _dNSSIGB,
  _dSDN,
  _dSI,
  _hQ,
  _LAVM,
  _LAVMI,
  _LAVMO,
  _mR,
  _mSIGB,
  _nT,
  _o,
  _oRAN,
  _s,
  _sR,
  _vN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutonomousVirtualMachineSummary = struct(
  n0,
  _AVMS,
  0,
  [_aVMI, _s, _sR, _vN, _dSI, _dSDN, _cCC, _mSIGB, _dNSSIGB, _cIA, _cAVCI, _o, _oRAN],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
);
export var ListAutonomousVirtualMachinesInput = struct(
  n0,
  _LAVMI,
  0,
  [_mR, _nT, _cAVCI],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [0, 1],
  ]
);
export var ListAutonomousVirtualMachinesOutput = struct(
  n0,
  _LAVMO,
  0,
  [_nT, _aVM],
  [0, () => AutonomousVirtualMachineList]
);
export var AutonomousVirtualMachineList = list(n0, _AVML, 0, () => AutonomousVirtualMachineSummary);
export var ListAutonomousVirtualMachines = op(
  n0,
  _LAVM,
  0,
  () => ListAutonomousVirtualMachinesInput,
  () => ListAutonomousVirtualMachinesOutput
);
