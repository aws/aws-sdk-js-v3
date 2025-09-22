// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _BS,
  _CM,
  _CMI,
  _CMO,
  _CRT,
  _GLRR,
  _GLRRI,
  _GLRRO,
  _h,
  _hQ,
  _LAe,
  _LAen,
  _LRR,
  _MN,
  _MNi,
  _WI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateMilestoneInput = struct(n0, _CMI, 0, [_WI, _MN, _CRT], [[0, 1], 0, [0, 4]]);
export var CreateMilestoneOutput = struct(n0, _CMO, 0, [_WI, _MNi], [0, 1]);
export var GetLensReviewReportInput = struct(
  n0,
  _GLRRI,
  0,
  [_WI, _LAen, _MNi],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _MNi,
      },
    ],
  ]
);
export var GetLensReviewReportOutput = struct(n0, _GLRRO, 0, [_WI, _MNi, _LRR], [0, 1, () => LensReviewReport]);
export var LensReviewReport = struct(n0, _LRR, 0, [_LAen, _LAe, _BS], [0, 0, 0]);
export var CreateMilestone = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/workloads/{WorkloadId}/milestones", 200],
  },
  () => CreateMilestoneInput,
  () => CreateMilestoneOutput
);
export var GetLensReviewReport = op(
  n0,
  _GLRR,
  {
    [_h]: ["GET", "/workloads/{WorkloadId}/lensReviews/{LensAlias}/report", 200],
  },
  () => GetLensReviewReportInput,
  () => GetLensReviewReportOutput
);
