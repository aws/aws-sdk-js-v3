// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _HL,
  _JRC,
  _JRCC,
  _LC,
  _LCFW,
  _LJFWS,
  _LJFWSL,
  _LJN,
  _LJSL,
  _LLJFW,
  _LLJFWR,
  _LLJFWRi,
  _MR,
  _NOHWPDO,
  _NT,
  _PH,
  _SBo,
  _SLJ,
  _SLJR,
  _SO,
  _To,
  _WAo,
  _WRAI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LabelCountersForWorkteam = struct(n0, _LCFW, 0, [_HL, _PH, _To], [1, 1, 1]);
export var LabelingJobForWorkteamSummary = struct(
  n0,
  _LJFWS,
  0,
  [_LJN, _JRC, _WRAI, _CT, _LC, _NOHWPDO],
  [0, 0, 0, 4, () => LabelCountersForWorkteam, 1]
);
export var ListLabelingJobsForWorkteamRequest = struct(
  n0,
  _LLJFWR,
  0,
  [_WAo, _MR, _NT, _CTA, _CTB, _JRCC, _SBo, _SO],
  [0, 1, 0, 4, 4, 0, 0, 0]
);
export var ListLabelingJobsForWorkteamResponse = struct(
  n0,
  _LLJFWRi,
  0,
  [_LJSL, _NT],
  [() => LabelingJobForWorkteamSummaryList, 0]
);
export var StopLabelingJobRequest = struct(n0, _SLJR, 0, [_LJN], [0]);
export var LabelingJobForWorkteamSummaryList = list(n0, _LJFWSL, 0, () => LabelingJobForWorkteamSummary);
export var ListLabelingJobsForWorkteam = op(
  n0,
  _LLJFW,
  0,
  () => ListLabelingJobsForWorkteamRequest,
  () => ListLabelingJobsForWorkteamResponse
);
export var StopLabelingJob = op(
  n0,
  _SLJ,
  0,
  () => StopLabelingJobRequest,
  () => Unit
);
