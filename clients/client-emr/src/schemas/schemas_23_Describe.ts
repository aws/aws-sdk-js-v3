// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _CDT,
  _Co,
  _CS,
  _CSCR,
  _CT,
  _ECr,
  _ED,
  _EDL,
  _EDr,
  _EDrr,
  _EDT,
  _EM,
  _M,
  _RDT,
  _SCR,
  _Sta,
  _Ti,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterStateChangeReason = struct(n0, _CSCR, 0, [_Co, _M], [0, 0]);
export var ClusterStatus = struct(
  n0,
  _CS,
  0,
  [_Sta, _SCR, _Ti, _ED],
  [0, () => ClusterStateChangeReason, () => ClusterTimeline, () => ErrorDetailList]
);
export var ClusterTimeline = struct(n0, _CT, 0, [_CDT, _RDT, _EDT], [4, 4, 4]);
export var ErrorDetail = struct(n0, _EDr, 0, [_ECr, _EDrr, _EM], [0, list(n0, _EDrr, 0, 128 | 0), 0]);
export var ErrorData = list(n0, _EDrr, 0, 128 | 0);
export var ErrorDetailList = list(n0, _EDL, 0, () => ErrorDetail);
