// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AN,
  _Ar,
  _CAR,
  _CAr,
  _CARr,
  _CT,
  _D,
  _DAe,
  _DARes,
  _DAResc,
  _DLC,
  _EC,
  _EP,
  _ESA,
  _ID,
  _KKI,
  _LC,
  _Le,
  _N,
  _RD,
  _SB,
  _SR,
  _St,
  _UA,
  _UAR,
  _UARp,
  _UEB,
  _UEBR,
  _UEBRp,
  n0,
} from "./schemas_0";
import { DeadLetterConfig } from "./schemas_13_Bus";

/* eslint no-var: 0 */

export var CreateArchiveRequest = struct(n0, _CAR, 0, [_AN, _ESA, _D, _EP, _RD, _KKI], [0, 0, 0, 0, 1, 0]);
export var CreateArchiveResponse = struct(n0, _CARr, 0, [_AA, _St, _SR, _CT], [0, 0, 0, 4]);
export var DescribeArchiveRequest = struct(n0, _DARes, 0, [_AN], [0]);
export var DescribeArchiveResponse = struct(
  n0,
  _DAResc,
  0,
  [_AA, _AN, _ESA, _D, _EP, _St, _SR, _KKI, _RD, _SB, _EC, _CT],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 4]
);
export var LogConfig = struct(n0, _LC, 0, [_ID, _Le], [0, 0]);
export var UpdateArchiveRequest = struct(n0, _UAR, 0, [_AN, _D, _EP, _RD, _KKI], [0, 0, 0, 1, 0]);
export var UpdateArchiveResponse = struct(n0, _UARp, 0, [_AA, _St, _SR, _CT], [0, 0, 0, 4]);
export var UpdateEventBusRequest = struct(
  n0,
  _UEBR,
  0,
  [_N, _KKI, _D, _DLC, _LC],
  [0, 0, 0, () => DeadLetterConfig, () => LogConfig]
);
export var UpdateEventBusResponse = struct(
  n0,
  _UEBRp,
  0,
  [_Ar, _N, _KKI, _D, _DLC, _LC],
  [0, 0, 0, 0, () => DeadLetterConfig, () => LogConfig]
);
export var CreateArchive = op(
  n0,
  _CAr,
  0,
  () => CreateArchiveRequest,
  () => CreateArchiveResponse
);
export var DescribeArchive = op(
  n0,
  _DAe,
  0,
  () => DescribeArchiveRequest,
  () => DescribeArchiveResponse
);
export var UpdateArchive = op(
  n0,
  _UA,
  0,
  () => UpdateArchiveRequest,
  () => UpdateArchiveResponse
);
export var UpdateEventBus = op(
  n0,
  _UEB,
  0,
  () => UpdateEventBusRequest,
  () => UpdateEventBusResponse
);
