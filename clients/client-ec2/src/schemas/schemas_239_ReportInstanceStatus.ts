// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _De,
  _de,
  _DR,
  _dR,
  _eQN,
  _eTn,
  _ETnd,
  _iI,
  _Ins,
  _it,
  _RCea,
  _rCea,
  _RCL,
  _RISe,
  _RISR,
  _RISRD,
  _ST,
  _sT,
  _Sta,
  _sta,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { InstanceIdStringList } from "./schemas_330_Instances";

/* eslint no-var: 0 */

export var ReportInstanceStatusRequestDescription = sim(n0, _RISRD, 0, 8);
export var ReportInstanceStatusRequest = struct(
  n0,
  _RISR,
  0,
  [_DR, _Ins, _Sta, _ST, _ETnd, _RCea, _De],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => InstanceIdStringList,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      4,
      {
        [_eQN]: `StartTime`,
        [_xN]: _sT,
      },
    ],
    [
      4,
      {
        [_eQN]: `EndTime`,
        [_xN]: _eTn,
      },
    ],
    [
      () => ReasonCodesList,
      {
        [_eQN]: `ReasonCode`,
        [_xN]: _rCea,
      },
    ],
    [
      () => ReportInstanceStatusRequestDescription,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
  ]
);
export var ReasonCodesList = list(n0, _RCL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ReportInstanceStatus = op(
  n0,
  _RISe,
  0,
  () => ReportInstanceStatusRequest,
  () => Unit
);
