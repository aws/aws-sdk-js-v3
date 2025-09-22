// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cCo, _CCor, _DR, _eQN, _II, _iI, _MICO, _MICOR, _MICORo, _TPC, _tPC, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyInstanceCpuOptionsRequest = struct(n0, _MICOR, 0, [_II, _CCor, _TPC, _DR], [0, 1, 1, 2]);
export var ModifyInstanceCpuOptionsResult = struct(
  n0,
  _MICORo,
  0,
  [_II, _CCor, _TPC],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      1,
      {
        [_eQN]: `CoreCount`,
        [_xN]: _cCo,
      },
    ],
    [
      1,
      {
        [_eQN]: `ThreadsPerCore`,
        [_xN]: _tPC,
      },
    ],
  ]
);
export var ModifyInstanceCpuOptions = op(
  n0,
  _MICO,
  0,
  () => ModifyInstanceCpuOptionsRequest,
  () => ModifyInstanceCpuOptionsResult
);
