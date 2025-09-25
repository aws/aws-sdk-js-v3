// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _h, _LAen, _MN, _PAr, _ULRIp, _ULRp, _UPV, _UPVI, _WI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpgradeLensReviewInput = struct(n0, _ULRIp, 0, [_WI, _LAen, _MN, _CRT], [[0, 1], [0, 1], 0, 0]);
export var UpgradeProfileVersionInput = struct(n0, _UPVI, 0, [_WI, _PAr, _MN, _CRT], [[0, 1], [0, 1], 0, [0, 4]]);
export var UpgradeLensReview = op(
  n0,
  _ULRp,
  {
    [_h]: ["PUT", "/workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade", 200],
  },
  () => UpgradeLensReviewInput,
  () => Unit
);
export var UpgradeProfileVersion = op(
  n0,
  _UPV,
  {
    [_h]: ["PUT", "/workloads/{WorkloadId}/profiles/{ProfileArn}/upgrade", 200],
  },
  () => UpgradeProfileVersionInput,
  () => Unit
);
