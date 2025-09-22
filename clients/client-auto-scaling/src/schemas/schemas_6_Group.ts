// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASGN,
  _BPSUGA,
  _BPSUGAA,
  _BPSUGAT,
  _DC,
  _DSAes,
  _DSATes,
  _ET,
  _FSUGA,
  _HC,
  _MR,
  _MS,
  _MSa,
  _NT,
  _PSUGA,
  _PSUGAT,
  _Rec,
  _SAARN,
  _SAN,
  _SANc,
  _SAT,
  _SDC,
  _SDCT,
  _ST,
  _SUGA,
  _SUGAc,
  _SUGAR,
  _SUGARc,
  _Tim,
  _TZ,
  n0,
  Unit,
} from "./schemas_0";
import { FailedScheduledUpdateGroupActionRequests } from "./schemas_2_Describe";

/* eslint no-var: 0 */

export var BatchPutScheduledUpdateGroupActionAnswer = struct(
  n0,
  _BPSUGAA,
  0,
  [_FSUGA],
  [() => FailedScheduledUpdateGroupActionRequests]
);
export var BatchPutScheduledUpdateGroupActionType = struct(
  n0,
  _BPSUGAT,
  0,
  [_ASGN, _SUGA],
  [0, () => ScheduledUpdateGroupActionRequests]
);
export var DescribeScheduledActionsType = struct(
  n0,
  _DSATes,
  0,
  [_ASGN, _SAN, _ST, _ET, _NT, _MR],
  [0, 64 | 0, 4, 4, 0, 1]
);
export var PutScheduledUpdateGroupActionType = struct(
  n0,
  _PSUGAT,
  0,
  [_ASGN, _SANc, _Tim, _ST, _ET, _Rec, _MS, _MSa, _DC, _TZ],
  [0, 0, 4, 4, 4, 0, 1, 1, 1, 0]
);
export var ScheduledActionsType = struct(n0, _SAT, 0, [_SUGA, _NT], [() => ScheduledUpdateGroupActions, 0]);
export var ScheduledUpdateGroupAction = struct(
  n0,
  _SUGAc,
  0,
  [_ASGN, _SANc, _SAARN, _Tim, _ST, _ET, _Rec, _MS, _MSa, _DC, _TZ],
  [0, 0, 0, 4, 4, 4, 0, 1, 1, 1, 0]
);
export var ScheduledUpdateGroupActionRequest = struct(
  n0,
  _SUGAR,
  0,
  [_SANc, _ST, _ET, _Rec, _MS, _MSa, _DC, _TZ],
  [0, 4, 4, 0, 1, 1, 1, 0]
);
export var SetDesiredCapacityType = struct(n0, _SDCT, 0, [_ASGN, _DC, _HC], [0, 1, 2]);
export var ScheduledUpdateGroupActionRequests = list(n0, _SUGARc, 0, () => ScheduledUpdateGroupActionRequest);
export var ScheduledUpdateGroupActions = list(n0, _SUGA, 0, () => ScheduledUpdateGroupAction);
export var BatchPutScheduledUpdateGroupAction = op(
  n0,
  _BPSUGA,
  0,
  () => BatchPutScheduledUpdateGroupActionType,
  () => BatchPutScheduledUpdateGroupActionAnswer
);
export var DescribeScheduledActions = op(
  n0,
  _DSAes,
  0,
  () => DescribeScheduledActionsType,
  () => ScheduledActionsType
);
export var PutScheduledUpdateGroupAction = op(
  n0,
  _PSUGA,
  0,
  () => PutScheduledUpdateGroupActionType,
  () => Unit
);
export var SetDesiredCapacity = op(
  n0,
  _SDC,
  0,
  () => SetDesiredCapacityType,
  () => Unit
);
