// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aIc, _iLA, _lG, _lGA, _lGC, _lGN, _lGNPo, _LGS, _LGSo, _li, _LLG, _LLGR, _LLGRi, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListLogGroupsRequest = struct(n0, _LLGR, 0, [_lGNPo, _lGC, _iLA, _aIc, _nT, _li], [0, 0, 2, 64 | 0, 0, 1]);
export var ListLogGroupsResponse = struct(n0, _LLGRi, 0, [_lG, _nT], [() => LogGroupSummaries, 0]);
export var LogGroupSummary = struct(n0, _LGS, 0, [_lGN, _lGA, _lGC], [0, 0, 0]);
export var AccountIds = 64 | 0;

export var LogGroupSummaries = list(n0, _LGSo, 0, () => LogGroupSummary);
export var ListLogGroups = op(
  n0,
  _LLG,
  0,
  () => ListLogGroupsRequest,
  () => ListLogGroupsResponse
);
