// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CED,
  _CEDR,
  _CEDRr,
  _CSA,
  _CSN,
  _CT,
  _CWLD,
  _DED,
  _DEDR,
  _DEDRe,
  _DSA,
  _E,
  _EDN,
  _EDv,
  _IRA,
  _KFD,
  _LGA,
  _MET,
  _SD,
  _TA,
  _UED,
  _UEDR,
  _UEDRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchLogsDestination = struct(n0, _CWLD, 0, [_IRA, _LGA], [0, 0]);
export var CreateEventDestinationRequest = struct(
  n0,
  _CEDR,
  0,
  [_CSN, _EDN, _MET, _CWLD, _KFD, _SD, _CT],
  [0, 0, 64 | 0, () => CloudWatchLogsDestination, () => KinesisFirehoseDestination, () => SnsDestination, [0, 4]]
);
export var CreateEventDestinationResult = struct(n0, _CEDRr, 0, [_CSA, _CSN, _EDv], [0, 0, () => EventDestination]);
export var DeleteEventDestinationRequest = struct(n0, _DEDR, 0, [_CSN, _EDN], [0, 0]);
export var DeleteEventDestinationResult = struct(n0, _DEDRe, 0, [_CSA, _CSN, _EDv], [0, 0, () => EventDestination]);
export var EventDestination = struct(
  n0,
  _EDv,
  0,
  [_EDN, _E, _MET, _CWLD, _KFD, _SD],
  [0, 2, 64 | 0, () => CloudWatchLogsDestination, () => KinesisFirehoseDestination, () => SnsDestination]
);
export var KinesisFirehoseDestination = struct(n0, _KFD, 0, [_IRA, _DSA], [0, 0]);
export var SnsDestination = struct(n0, _SD, 0, [_TA], [0]);
export var UpdateEventDestinationRequest = struct(
  n0,
  _UEDR,
  0,
  [_CSN, _EDN, _E, _MET, _CWLD, _KFD, _SD],
  [0, 0, 2, 64 | 0, () => CloudWatchLogsDestination, () => KinesisFirehoseDestination, () => SnsDestination]
);
export var UpdateEventDestinationResult = struct(n0, _UEDRp, 0, [_CSA, _CSN, _EDv], [0, 0, () => EventDestination]);
export var EventTypeList = 64 | 0;

export var CreateEventDestination = op(
  n0,
  _CED,
  0,
  () => CreateEventDestinationRequest,
  () => CreateEventDestinationResult
);
export var DeleteEventDestination = op(
  n0,
  _DED,
  0,
  () => DeleteEventDestinationRequest,
  () => DeleteEventDestinationResult
);
export var UpdateEventDestination = op(
  n0,
  _UED,
  0,
  () => UpdateEventDestinationRequest,
  () => UpdateEventDestinationResult
);
