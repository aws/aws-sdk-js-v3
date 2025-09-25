// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Co,
  _co,
  _De,
  _de,
  _DR,
  _eQN,
  _ev,
  _Eve,
  _IEI,
  _iEI,
  _II,
  _ISE,
  _MIEST,
  _MIESTR,
  _MIESTRo,
  _NAo,
  _nAo,
  _NB,
  _nB,
  _NBD,
  _nBD,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InstanceStatusEvent = struct(
  n0,
  _ISE,
  0,
  [_IEI, _Co, _De, _NAo, _NB, _NBD],
  [
    [
      0,
      {
        [_eQN]: `InstanceEventId`,
        [_xN]: _iEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      4,
      {
        [_eQN]: `NotAfter`,
        [_xN]: _nAo,
      },
    ],
    [
      4,
      {
        [_eQN]: `NotBefore`,
        [_xN]: _nB,
      },
    ],
    [
      4,
      {
        [_eQN]: `NotBeforeDeadline`,
        [_xN]: _nBD,
      },
    ],
  ]
);
export var ModifyInstanceEventStartTimeRequest = struct(n0, _MIESTR, 0, [_DR, _II, _IEI, _NB], [2, 0, 0, 4]);
export var ModifyInstanceEventStartTimeResult = struct(
  n0,
  _MIESTRo,
  0,
  [_Eve],
  [
    [
      () => InstanceStatusEvent,
      {
        [_eQN]: `Event`,
        [_xN]: _ev,
      },
    ],
  ]
);
export var ModifyInstanceEventStartTime = op(
  n0,
  _MIEST,
  0,
  () => ModifyInstanceEventStartTimeRequest,
  () => ModifyInstanceEventStartTimeResult
);
