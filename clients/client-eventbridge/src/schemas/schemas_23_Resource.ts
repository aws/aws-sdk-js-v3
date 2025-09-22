// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _D,
  _De,
  _DRe,
  _DRRe,
  _DRRes,
  _EET,
  _ELRT,
  _ESA,
  _EST,
  _FA,
  _RA,
  _RDe,
  _RET,
  _RN,
  _RST,
  _SR,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReplayRequest = struct(n0, _DRRe, 0, [_RN], [0]);
export var DescribeReplayResponse = struct(
  n0,
  _DRRes,
  0,
  [_RN, _RA, _D, _St, _SR, _ESA, _De, _EST, _EET, _ELRT, _RST, _RET],
  [0, 0, 0, 0, 0, 0, () => ReplayDestination, 4, 4, 4, 4, 4]
);
export var ReplayDestination = struct(n0, _RDe, 0, [_Ar, _FA], [0, 64 | 0]);
export var ReplayDestinationFilters = 64 | 0;

export var DescribeReplay = op(
  n0,
  _DRe,
  0,
  () => DescribeReplayRequest,
  () => DescribeReplayResponse
);
